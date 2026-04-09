# Google AI Workshop: Build, Create & Win

**GDG Technical Session | April 9, 2026 | 12:45 PM - 1:50 PM | Hermann Hall 003**

Welcome! In this hands-on session, we'll explore Google's AI tools by building a live app, generating AI images, and spinning a wheel to win prizes. Follow along step by step below.

**Slides:** [Google Slides](https://docs.google.com/presentation/d/1XSMwdF8dOltfW1rQtjDsEH2QaSHz3dqyNp1tCgzMMSw/edit?slide=id.g3de23059259_1_45#slide=id.g3de23059259_1_45)

**Hackathon:** [Build with AI - CS Edition on Devpost](https://build-with-ai-cs.devpost.com/)

![Event Banner](GDG%20UpShow.png)

---

## What We're Using Today

| Tool | What It Does |
|------|-------------|
| **Google Antigravity** | AI-powered IDE that builds apps from a prompt |
| **Gemini API** | Google's AI model API for text, code, and more |
| **Vertex AI** | Google Cloud's ML platform for production AI workloads |
| **NotebookLM** | AI notebook that can generate images and video summaries |
| **Google AI Studio** | Free access to Gemini models with image generation |

---

## Stage 1: Setup Antigravity

Antigravity is Google's AI coding agent. It doesn't just autocomplete - it plans, writes, tests, and runs code for you.

### Steps

1. Go to [antigravity.google](https://antigravity.google)
2. Download and install the app (works on Windows, Mac, Linux)
3. Launch it and sign in with your Google account

### Quick Tour

- **Editor View** - works like a normal code editor, but with AI assistance
- **Manager View** - give it a prompt and it builds the whole thing autonomously
- **Model Switching** - you can pick between Gemini 3 Pro, Gemini 2.5 Flash, etc.
- **MCP Store** - browse and add Google Cloud service integrations

---

## Stage 2: Use Gemini from the Command Line in Antigravity

Gemini CLI lets you talk to Google's AI models right from your terminal. No browser needed.

### Install Node.js (if you don't have it)

Gemini CLI requires Node.js. Check if you already have it:

```bash
node --version
```

If you see a version number, you're good. If not, install it:

**Windows:**
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS installer (.msi)
3. Run it and follow the prompts (keep defaults)
4. Restart your terminal

**Mac:**
```bash
brew install node
```
Or download the installer from [nodejs.org](https://nodejs.org)

**Linux (Ubuntu/Debian):**
```bash
sudo apt update && sudo apt install nodejs npm
```

### Install the Gemini CLI

```bash
npm install -g @google/gemini-cli
```

Or if you just want to try it without installing:

```bash
npx @google/gemini-cli
```

### Sign In

```bash
gemini
```

It will open a browser window to authenticate with your Google account. Follow the prompts.

### Try It Out

Once you're in, just type a prompt:

```
Explain what an API is in 2 sentences.
```

### Use It to Build Something

Ask Gemini to generate a simple Python script:

```
Write a Python script that reads names from a names.txt file and picks a random winner.
```

It will output the code right in your terminal. You can copy it into a file and run it:

```bash
python winner.py
```

### Useful Commands

| Command | What It Does |
|---------|-------------|
| `gemini` | Start an interactive chat session |
| `gemini "your prompt"` | One-shot prompt, get a response and exit |
| `/model` | Switch between Gemini models (Pro, Flash, etc.) |
| `/quit` | Exit the CLI |

---

## Stage 3: Multi-Agent Orchestration in Antigravity

### What is an AI Agent?

An AI agent is more than a chatbot. Instead of just answering questions, an agent can **plan steps, write code, run commands, read files, fix errors, and repeat** — all on its own until the task is done. Think of it as giving an intern a task and letting them figure out how to do it, while you just review the final work.

In Antigravity, you have two ways to work with agents:
- **Editor View** — you write code, and the AI helps you inline (like pair programming)
- **Manager View** — you give a task in plain English, and the agent does everything autonomously (like delegating to a team)

### Why Multiple Agents?

Instead of one AI agent doing one thing, you can dispatch multiple agents working on different tasks at the same time. One agent builds your app, another writes tests, another writes docs — all in parallel.

### How It Works in Antigravity

1. When you open Antigravity, you're in the **Agent Manager** by default (you can toggle to Editor View with the **"Open Editor"** button in the top right, or press **Ctrl + E**)
2. Each **conversation** you start under a workspace is an agent
3. All conversations under the same workspace share the **same project folder** — so they can see each other's files
4. You switch between agents by clicking on them in the **left sidebar**

### Dispatch Your First Agent

1. Select your workspace folder
2. Pick your model (Gemini 3.1 Pro recommended) and planning mode
3. Give it a task prompt, for example:

```
Build a Python web app with a spinning Wheel of Names.
It reads names from a names.txt file and displays an animated wheel.
When spun, it randomly picks a winner and highlights it, we would be choosing multiple users, so when a person wins remove them from the wheel.
Give it a sleek and good UI.
```

4. The agent will plan, write code, set up files, and run it — all on its own
5. Watch the progress in the conversation as it works through each step

### Run Multiple Agents in Parallel

This is the real magic. While your first agent is building the wheel app, spin up a second agent to build something else at the same time.

1. Click **+ New Conversation** in the left sidebar (this starts a second agent in the same workspace)
2. While Agent 1 is still building the wheel app, give this new conversation the following prompt:

```
Build a simple Python countdown timer web app.
It should have a clean UI with a big timer display, a text input to set minutes, and start/pause/reset buttons.
Use Flask for the backend and vanilla JS for the frontend.
```

3. Now both agents work simultaneously — one building the wheel, the other building the timer
4. Switch between them in the **left sidebar** to check progress
5. Both agents share the same workspace, so they can see each other's files
6. If an agent needs your approval (e.g., to run a command), it will pause and ask

---

## Stage 4: AI Image Generation with Google AI Studio

Now it's your turn to create something. Google AI Studio lets you generate images for free using Gemini — no credit card or setup needed.

### Steps

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. In the chat, type a prompt that asks for an image. Try something like:

```
Generate an image of a cat wearing a tiny astronaut suit, floating in space next to the International Space Station, with Earth glowing in the background and a trail of yarn unraveling behind it
```

4. Gemini will generate an image right in the chat
5. Try different prompts — get creative!
6. **Save or screenshot your generated image** - you'll need it for the next step!

---

## Stage 5: Submit Your Entry

Time to enter the prize drawing.

1. Open the Google Form: [YOUR_FORM_LINK]
2. Fill in:
   - **Your Name** (required)
   - **Upload your AI-generated Image** (required)
3. Hit Submit

Your name will be added to the spinning wheel for the prize drawing!

---

## Stage 6: Spin the Wheel & Win

We'll load everyone's names into the wheel app and spin for prizes!

| Place | Prize |
|-------|-------|
| 1st | $25 Amazon Gift Card |
| 2nd | $25 Amazon Gift Card |

---

## Bonus: Try the Gemini API & Vertex AI

Want to go further? Here's how to start using Google's AI APIs directly.

### Gemini API (Free Tier - No Credit Card Needed)

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in and click **Get API Key**
3. Copy your API key
4. Install the SDK:

```bash
pip install google-genai
```

5. Try it out in Python:

```python
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI agents work in 3 sentences."
)

print(response.text)
```

### Vertex AI (Google Cloud's ML Platform)

Vertex AI is where you go when you want to build production-grade AI apps with Google Cloud infrastructure.

1. Go to [cloud.google.com/free](https://cloud.google.com/free) and activate your **$300 free trial credits**
2. Open the [Google Cloud Console](https://console.cloud.google.com)
3. Enable the Vertex AI API:

```bash
gcloud services enable aiplatform.googleapis.com
```

4. Install the SDK:

```bash
pip install google-cloud-aiplatform
```

5. Try it out:

```python
import vertexai
from vertexai.generative_models import GenerativeModel

vertexai.init(project="YOUR_PROJECT_ID", location="us-central1")

model = GenerativeModel("gemini-2.5-flash")
response = model.generate_content("What can I build with Vertex AI?")

print(response.text)
```

**When to use which?**
- **Gemini API** (via AI Studio) - quick prototyping, personal projects, free tier
- **Vertex AI** - production apps, enterprise features, fine-tuning, deployment pipelines

---

## Free Resources

| Resource | Link |
|----------|------|
| Google Antigravity | [antigravity.google](https://antigravity.google) |
| Gemini API (Free Tier) | [aistudio.google.com](https://aistudio.google.com) |
| Vertex AI | [cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai) |
| NotebookLM | [notebooklm.google.com](https://notebooklm.google.com) |
| Build with AI Hackathon | [build-with-ai-cs.devpost.com](https://build-with-ai-cs.devpost.com/) |
