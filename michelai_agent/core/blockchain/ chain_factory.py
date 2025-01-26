import os
from .clients.solana_client import SolanaClient
from ..security.key_manager import KeyManager

class ChainFactory:
    """Factory for creating Solana clients"""
    
    @staticmethod
    def create_client(key_manager: KeyManager) -> SolanaClient:
        rpc_url = os.getenv('SOLANA_RPC_URL')
        if not rpc_url:
            raise ValueError("Missing SOLANA_RPC_URL in environment")
        
        client = SolanaClient(key_manager)
        client.connect(rpc_url)
        return client
        