# Google AI Workshop: Build, Create & Win

**GDG Technical Session | April 9, 2026 | 12:45 PM - 1:50 PM | Hermann Hall 003**

Welcome! In this hands-on session, we'll explore Google's AI tools by building a live app, generating AI images, and spinning a wheel to win prizes. Follow along step by step below.

**Hackathon:** [Build with AI - CS Edition on Devpost](https://build-with-ai-cs.devpost.com/)

---

## What We're Using Today

| Tool | What It Does |
|------|-------------|
| **Google Antigravity** | AI-powered IDE that builds apps from a prompt |
| **Gemini API** | Google's AI model API for text, code, and more |
| **Vertex AI** | Google Cloud's ML platform for production AI workloads |
| **NotebookLM** | AI notebook that can generate images and video summaries |
| **Nano Banana** | Image generation built into NotebookLM |

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

### Install the Gemini CLI

```bash
npm install -g @google/gemini-cli
```

Or if you prefer using npx (no install):

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

This is where it gets powerful. Instead of one AI agent doing one thing, you can dispatch multiple agents working on different tasks at the same time.

### Switch to Manager View

1. In Antigravity, click the **Manager View** toggle (top of the window)
2. You'll see the **Agent Manager** dashboard — this is your command center

### Dispatch Your First Agent

1. Select your workspace folder
2. Pick your model (Gemini 3 Pro recommended) and planning mode
3. Give it a task prompt, for example:

```
Build a Python web app with a spinning Wheel of Names.
It reads names from a names.txt file and displays an animated wheel.
When spun, it randomly picks a winner and highlights it.
```

4. The agent will plan, write code, set up files, and run it — all on its own
5. Watch the progress in the dashboard as it works through each step

### Run Multiple Agents in Parallel

This is the real magic. While your first agent is building the wheel app, you can spin up more agents:

1. Click **New Agent** in the Manager dashboard
2. Give each agent a different task, for example:
   - **Agent 1:** Build the wheel app (already running)
   - **Agent 2:** `"Write unit tests for a Python Flask app that reads from a text file"`
   - **Agent 3:** `"Create a README.md with setup instructions for a Flask wheel app"`

3. All agents work simultaneously — you can see their status, artifacts, and diffs in real time
4. If an agent needs your approval (e.g., to run a command), it will pause and ask

### What You'll See in the Dashboard

| Column | What It Shows |
|--------|--------------|
| **Status** | Running, Waiting for approval, or Done |
| **Artifacts** | Plans, code files, diffs the agent produced |
| **Requests** | Any pending actions that need your OK |

---

## Stage 4: AI Image Generation with Nano Banana

Now it's your turn to create something. We'll use NotebookLM's built-in image generator.

### Steps

1. Go to [notebooklm.google.com](https://notebooklm.google.com)
2. Sign in with your Google account
3. Create a new notebook and upload any document (a flyer, article, anything fun)
4. Click on **Generate** and explore the options:
   - **Video Overview** - generates a short video summary of your doc
   - **Styles** - try Anime, Whiteboard, Watercolor, Retro
   - **Formats** - Brief vs. Explainer
5. Generate a standalone image using a creative prompt. Try something like:

```
A developer riding a rocket made of code through a galaxy of data
```

6. **Save or screenshot your generated image** - you'll need it for the next step!

---

## Stage 5: Submit Your Entry

Time to enter the prize drawing.

1. Open the Google Form: [YOUR_FORM_LINK]
2. Fill in:
   - **Your Name** (required)
   - **Upload your Nano Banana Image** (required)
3. Hit Submit

Your name will be added to the spinning wheel for the prize drawing!

---

## Stage 6: Spin the Wheel & Win

We'll load everyone's names into the wheel app and spin for prizes!

| Place | Prize |
|-------|-------|
| 1st | $25 Amazon Gift Card |
| 2nd | $15 Amazon Gift Card |
| 3rd | $10 Amazon Gift Card |

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
