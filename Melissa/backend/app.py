from flask import Flask, request, jsonify
from flask_socketio import SocketIO
from speech.listener import MelissaListener

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/toggle-visibility', methods=['POST'])
def toggle_visibility():
    socketio.emit('toggle_visibility', {})
    return jsonify({"status": "Visibility toggled"}), 200

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000)
