FROM python:3.9-slim

WORKDIR /app
COPY . .

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    ffmpeg \
    portaudio19-dev \
    && rm -rf /var/lib/apt/lists/*

RUN pip install -r requirements.txt

CMD ["python", "app.py"]
