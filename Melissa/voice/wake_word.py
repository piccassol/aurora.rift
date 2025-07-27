import speech_recognition as sr

recognizer = sr.Recognizer()

def detect_wake_word():
    with sr.Microphone() as source:
        print("Listening for 'Melissa, Wake up'...")
        audio = recognizer.listen(source, timeout=5)
        try:
            text = recognizer.recognize_google(audio).lower()
            if "melissa wake up" in text:
                return True
        except sr.UnknownValueError:
            pass
    return False
