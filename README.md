# 🤖 Bit - Smart Chatbot

**Bit** is a sleek, lightweight, and responsive web-based AI chatbot built using pure HTML, CSS, and Vanilla JavaScript. Designed with a modern, minimalist UI and a custom CSS-crafted robot mascot, Bit handles everyday conversational greetings offline while leveraging the **Wikipedia REST API** to answer general knowledge questions in real time.

---

## ✨ Features

* **🎨 Pure CSS Robot Mascot:** Features an adorable, custom-built robot avatar crafted entirely with CSS (complete with glowing eyes and an illuminated antenna).
* **🌐 Smart Knowledge Retrieval:** Integrates with the Wikipedia Search & Summary API to fetch concise, two-sentence answers for virtually any topic or "what is / who is" query.
* **⚡ Offline Conversational Mode:** Built-in pattern matching for instant replies to common greetings, small talk, and farewells without needing an internet connection.
* **💬 Quick-Reply Suggestions:** One-click suggestion pills (`hello`, `how are you`, `bye`) for effortless interaction.
* **⏳ Typing Indicator:** Displays a `"Bit is thinking..."` status bubble while fetching live answers from the web.
* **📱 Fully Responsive Design:** Adapts seamlessly to both desktop and mobile viewports, complete with smooth message entrance animations and a one-click **Clear Chat** option.

---

## 📸 Screenshots

| Initial Greeting | Basic Conversation | Smart Wikipedia Lookup |
| :---: | :---: | :---: |
| ![Initial UI]<img width="705" height="912" alt="Screenshot 2026-11-24 090947" src="https://github.com/user-attachments/assets/91663d75-92df-4605-a004-7ea5ca166cc3" /> | ![Basic Chat]<img width="667" height="912" alt="Screenshot 2026-11-24 091022" src="https://github.com/user-attachments/assets/9ad5afb4-d55f-40fa-ba62-847110cc5295" />
| ![Smart Reply]<img width="660" height="920" alt="Screenshot 2026-11-24 092120" src="https://github.com/user-attachments/assets/b976eba4-3377-40d6-85c9-f529cc86793a" /> |

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the chat container, header, and input controls.
* **CSS3:** Flexbox layout, custom keyframe animations (`@keyframes appear`), responsive media queries, and pure CSS geometric art for the robot avatar.
* **JavaScript (ES6+):** Asynchronous `fetch()` API calls, regex-based natural language cleanup, and dynamic DOM manipulation.
* **Wikipedia API:** Free, no-API-key-required endpoints for real-time factual summaries.

---

## 📂 Project Structure

```text
bit-smart-chatbot/
├── index.html                        # Main application structure
├── style.css                         # Styling, layout, and pure CSS robot mascot
├── script.js                         # Chat logic, offline replies & Wikipedia API integration
├── Screenshot 2026-11-24 090947.png  # App preview (Home)
├── Screenshot 2026-11-24 091022.png  # App preview (Conversation)
├── Screenshot 2026-11-24 092120.png  # App preview (Knowledge Query)
└── README.md                         # Project documentation
```

---

## 🚀 Getting Started

Since this project uses zero external frameworks or build tools, getting it up and running takes seconds:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bit-smart-chatbot.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd bit-smart-chatbot
   ```
3. **Launch the app:**
   * Simply double-click `index.html` to open it in any modern web browser, **or**
   * Use the **Live Server** extension in VS Code for local development.

---

## 🧠 How It Works

1. **Input Processing:** When a user submits a message (via the send button, `Enter` key, or quick-reply buttons), `getSmartReply()` first checks `getBasicReply()` using Regular Expressions for common phrases like *"hi"*, *"how are you"*, or *"who created you"*.
2. **Query Sanitization:** If the query isn't basic small talk, Bit strips conversational filler words (e.g., *"what is"*, *"tell me about"*, *"define"*) and maps local context phrases (such as *"our national bird"* $\rightarrow$ *"National bird of India"*).
3. **Wikipedia Fetch:** Bit queries Wikipedia's search API to find the closest matching article title, fetches its REST summary, and returns the first two sentences for a clean, readable chat bubble.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit a pull request if you'd like to add features like voice input, dark mode, or additional API integrations.

---

## 👨‍💻 Author

Created by **Sayan** using HTML, CSS, and JavaScript.
