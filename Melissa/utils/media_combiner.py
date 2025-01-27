import ffmpeg
import tempfile
from utils.ipfs_utils import IPFSHandler

class MediaCombiner:
    def __init__(self):
        self.ipfs = IPFSHandler()
    
    def combine_assets(self, visual_hash, audio_hash):
        with tempfile.TemporaryDirectory() as tmpdir:
            visual_path = self.ipfs.download(visual_hash, tmpdir)
            audio_path = self.ipfs.download(audio_hash, tmpdir)
            
            output_path = f"{tmpdir}/combined.mp4"
            
            (
                ffmpeg
                .input(visual_path)
                .output(
                    output_path,
                    vcodec='libx264',
                    acodec='aac',
                    strict='experimental'
                )
                .run(overwrite_output=True)
            )
            
            return self.ipfs.upload(output_path)
