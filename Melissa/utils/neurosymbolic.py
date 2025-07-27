def adapt_personality(message, context):
    # Simple rule-based adaptation
    if any("frustrated" in m['user'].lower() for m in context):
        return f"User seems upset: {message}. Respond with empathy."
    return message
