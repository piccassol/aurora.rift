from solana.rpc.api import Client

class SolanaClient:
    def __init__(self, rpc_url="https://api.mainnet-beta.solana.com"):
        self.client = Client(rpc_url)

    def mint_nft(self, metadata):
        print("Minting NFT with metadata:", metadata)
        # Placeholder logic for minting
        return "Transaction ID"
