from fastapi import FastAPI
from .voice.wake_word import detect_wake_word
from .memory.memory_manager import MemoryManager
from .utils.neurosymbolic import adapt_personality
import ollama

app = FastAPI()
memory = MemoryManager()

@app.post("/api/melissa/chat")
async def chat(message: str, user_id: str = "default"):
    if detect_wake_word():  # Triggered via separate process
        context = memory.get_context(user_id)
        adapted_message = adapt_personality(message, context)
        response = ollama.chat(model='melissa', messages=context + [{'role': 'user', 'content': adapted_message}])
        reply = response['message']['content']
        memory.add_conversation(user_id, message, reply)
        return {"reply": reply}
    return {"reply": "Melissa is asleep. Say 'Melissa, Wake up' to start."}
