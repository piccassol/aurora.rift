from collections import defaultdict

class MemoryManager:
    def __init__(self):
        self.memory = defaultdict(list)

    def add_conversation(self, user_id, message, reply):
        self.memory[user_id].append({'user': message, 'assistant': reply})
        self.memory[user_id] = self.memory[user_id][-10:]  # Limit to 10 entries

    def get_context(self, user_id):
        return self.memory[user_id]
