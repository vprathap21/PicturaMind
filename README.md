# PicturaMind - AI Image Generation App

PicturaMind is an AI-powered image generation app that leverages the Together AI API to generate images based on user prompts. It includes rate-limiting functionality using Upstash Redis and observability with Helicone, ensuring a secure and efficient service for users.

## Features

- **AI Image Generation**: Generate images based on user-provided prompts using the Together AI API.
- **Rate Limiting**: Integrated with Upstash Redis to limit the number of requests per day.
- **Helicone Observability**: Monitors API requests and responses with the Helicone dashboard.
- **Edge Runtime**: Runs in a Next.js edge environment for faster response times.

## Demo

You can check the live version at: [PicturaMind](#)
![Screenshot from 2024-10-15 22-52-48](https://github.com/user-attachments/assets/72e7afe0-8365-4401-b442-1ddc1827d41e)
![Screenshot from 2024-10-16 18-10-36](https://github.com/user-attachments/assets/b81825e2-1e13-42ce-bc79-3b92c9fc31b1)
![Screenshot from 2024-10-16 18-32-10](https://github.com/user-attachments/assets/712911d0-0023-4d8a-ac1f-c4b0a33c4ed3)

## Tech Stack

- **Frontend**: Next.js 13
- **Backend**: Edge functions (Next.js API routes)
- **AI Model**: Together AI
- **Rate Limiting**: Upstash Redis
- **Monitoring**: Helicone
  ```bash
   git clone https://github.com/your-username/picturamind.git
   cd picturamind
