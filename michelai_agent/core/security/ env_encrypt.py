import os
from dotenv import load_dotenv

class EnvEncrypt:
    """Environment variable management for Solana"""
    
    def __init__(self, key_manager):
        self.key_manager = key_manager

    def load_encrypted_env(self, env_path: str = '.env.enc') -> None:
        if not os.path.exists(env_path):
            raise FileNotFoundError(f"Missing {env_path} file")
            
        load_dotenv(env_path)
        
        encrypted_vars = {
            k[4:]: v for k, v in os.environ.items()
            if k.startswith('ENC_')
        }
        
        for name, value in encrypted_vars.items():
            decrypted = self.key_manager.get_decrypted_env(value)
            os.environ[name] = decrypted