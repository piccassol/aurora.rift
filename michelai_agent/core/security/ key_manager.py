import boto3
from botocore.exceptions import ClientError
import base64

class SecurityError(Exception):
    """Security-related exceptions"""

class KeyManager:
    """Solana key management using AWS KMS"""
    
    def __init__(self, kms_key_id: str):
        self.kms = boto3.client('kms')
        self.key_id = kms_key_id

    def sign_transaction(self, tx_data: dict, chain_type: str) -> bytes:
        if chain_type != 'solana':
            raise NotImplementedError("Only Solana supported")
        
        try:
            message = base64.b64decode(tx_data['transaction'])
            response = self.kms.sign(
                KeyId=self.key_id,
                Message=message,
                MessageType='DIGEST',
                SigningAlgorithm='ECDSA_SHA_256'
            )
            return response['Signature']
        except ClientError as e:
            raise SecurityError(f"KMS error: {str(e)}")

    def get_decrypted_env(self, encrypted_env: str) -> str:
        try:
            response = self.kms.decrypt(
                CiphertextBlob=bytes.fromhex(encrypted_env)
            )
            return response['Plaintext'].decode('utf-8')
        except ClientError as e:
            raise SecurityError(f"Decryption failed: {str(e)}")