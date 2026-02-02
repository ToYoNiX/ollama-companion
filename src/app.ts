import express from 'express';
import mongoose from 'mongoose';
import { Ollama } from 'ollama';

const app = express();
const interfacePort = Number(process.env.INTERFACE_PORT) || 80
const apiPort = Number(process.env.API_PORT) || 11434
const ollamaHost = process.env.OLLAMA_HOST ?? 'http://127.0.0.1:11434'
const mongoServer = process.env.MONGODB_SERVER ?? 'mongodb://127.0.0.1:27017/ollama-companion'

const ollama = new Ollama({
	host: ollamaHost
})

try {
	await ollama.list()
	console.log("Ollama server is available at " + ollamaHost);
} catch {
	console.log("Ollama server is not available!")
}

mongoose.connect(mongoServer)
	.then(() => console.log('MongoDB connected at' + mongoServer)
	);

app.listen(apiPort, () => {
  console.log('API is running on http://localhost:' + apiPort)
})

app.listen(interfacePort, () => {
  console.log('Admin Interface is running on http://localhost:' + interfacePort)
})

