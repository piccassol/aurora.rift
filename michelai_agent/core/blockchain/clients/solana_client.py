from solders.rpc.requests import GetLatestBlockhash
from solders.signature import Signature
from solders.transaction import Transaction
from .base import BlockchainClient
from ..security.key_manager import KeyManager
import httpx
import json

class SolanaTransactionError(Exception):
    """Custom exceptions for Solana transactions"""

class SolanaClient(BlockchainClient):
    """Native Solana blockchain client implementation"""
    
    def __init__(self, key_manager: KeyManager):
        self.client = httpx.AsyncClient()
        self.key_manager = key_manager
        self.rpc_url = None

    def connect(self, provider_url: str) -> None:
        if not provider_url:
            raise ValueError("SOLANA_RPC_URL not configured")
        self.rpc_url = provider_url

    async def get_latest_block(self) -> int:
        response = await self.client.post(
            self.rpc_url,
            json={"jsonrpc": "2.0", "id": 1, "method": "getSlot"}
        )
        return response.json()['result']

    async def send_transaction(self, tx_data: dict) -> str:
        try:
            blockhash = await self._get_recent_blockhash()
            
            tx = Transaction.new(
                recent_blockhash=blockhash,
                instructions=tx_data['instructions'],
                payer=tx_data['payer']
            )
            
            signed_tx = self.key_manager.sign_transaction({
                'transaction': tx.to_json(),
                'signers': tx_data.get('signers', [])
            }, 'solana')
            
            response = await self.client.post(
                self.rpc_url,
                json={
                    "jsonrpc": "2.0",
                    "id": 1,
                    "method": "sendTransaction",
                    "params": [signed_tx.hex(), {"encoding": "base64"}]
                }
            )
            return response.json()['result']
        
        except Exception as e:
            raise SolanaTransactionError(f"Transaction failed: {str(e)}")

    async def _get_recent_blockhash(self) -> str:
        response = await self.client.post(
            self.rpc_url,
            json={"jsonrpc": "2.0", "id": 1, "method": "getRecentBlockhash"}
        )
        return response.json()['result']['value']['blockhash']