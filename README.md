# 🛠️ AI Toolkit

Welcome to **AI Toolkit**, a Next.js project built with [ShadCN UI](https://shadcn.dev/) and powered by [Hugging Face models](https://huggingface.co/). This project aims to automate classical tasks with AI tools. Currently, it supports generating images from text prompts, with more features coming soon!

## ✨ Features

- 🌟 **Image Generation**: Convert your text prompts into stunning images using cutting-edge AI models from Hugging Face.
- 🚀 **Fast & Scalable**: Built on top of Next.js for optimal performance and scalability.
- 🎨 **Beautiful UI**: Styled with ShadCN for a sleek and modern look.
- 🔒 **Secure**: Handle data securely while interacting with Hugging Face's API.


## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [ShadCN UI](https://shadcn.dev/)
- [Hugging Face](https://huggingface.co/)
- [TailwindCSS](https://tailwindcss.com/)

## 🚧 Upcoming Features

- 🧠 **Text Summarization**: Quickly summarize long documents.
- 🔄 **Text Generation**: Generate text using prompts.

# 🛠️ Setting Up Environment Variables

To securely use your Hugging Face authentication token in your Next.js project, follow these steps:

## 1. Create a `.env.local` File

In the root directory of your Next.js project, create a new file named `.env.local`.

## 2. Add the Environment Variable

Open the `.env.local` file and add the following line, replacing `your_hugging_face_auth_token` with your actual Hugging Face authentication token:

```plaintext
NEXT_PUBLIC_HUGGING_FACE_AUTH_TOKEN=your_hugging_face_auth_token
