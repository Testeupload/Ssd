# Backend Chat API for Vercel

This project is a simple backend API for sending real-time chat messages using Pusher.

## Deploy

Just deploy this project on Vercel. The API endpoint will be available at `/api/enviar-mensagem`.

Send POST requests with JSON body:

{
  "nome": "User Name",
  "texto": "Message text",
  "avatar": "Avatar URL"
}
