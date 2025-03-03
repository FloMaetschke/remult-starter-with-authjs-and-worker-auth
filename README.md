# ABOUT

This is project generated with `npm init remult@latest`, using Angular, Auth.js and demo content. A Worker and a custom api has been added to demonstrate authentication using node-fetch from within a sample worker process.

Use `npm run dev-node` to start the node server with remult in watch mode.
Use `npm run dev-worker` to start the worker in watch mode.
Use `npm run dev` to start the angular app (not focused in this example).


# ⚡️ remult-starter-with-authjs-and-worker-auth ⚡️

Everything you need to build a great `remult` project, powered by [`create-remult`](https://github.com/remult/remult/tree/main/projects/create-remult).

### What's Included?

- 🚀 [Remult](https://remult.dev/): Fullstack Type-safe CRUD & Realtime 
- 🌟 [Angular](https://angular.dev/): Your favorite framework/library 
- 🛤️ [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js 
- 💾 [JSON Files](https://remult.dev/docs/quickstart#connecting-a-database): Used for dev, you can add a database later 
- 🔒 [auth.js](https://authjs.dev): Authentication made easy and secure 

### 🛠 Prerequisites

Before diving in, make sure you have the following tools installed:

- **Node.js (v20+ 🚨)**
- **npm (bundled with Node.js)**

### 🎯 Installation

Clone the repo:

```bash
git clone [YOUR REPO URL ONCE PUSHED]
```

and install dependencies:

```bash
npm install
```

### 🛠 Configuration & Environment Variables

You'll need to set up some **environment variables** in your `.env` file. 
You can use [.env.example](./.env.example) as an example.


### 🧑‍💻 Running the Dev Environment

To develop locally, you'll need to run both the frontend and backend environments. This requires **two terminal windows**.

1. In **Terminal 1**, run the frontend development server:

   ```bash
   npm run dev
   ```

   This will start the frontend development environment and automatically open your app in the browser.

2. In **Terminal 2**, run the backend development server:

   ```bash
   npm run dev-node
   ```

   This will start the backend in watch mode, automatically restarting on code changes.


### 🚢 Production-Ready

When you're ready to go live, here's how to prepare:

#### Build for production:

```bash
npm run build
```

#### Run the production server:

```bash
npm run start
```
