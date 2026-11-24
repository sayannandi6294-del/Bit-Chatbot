const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function addMessage(message, sender) {
    const div = document.createElement("div");
    div.className = "message " + sender;
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Basic conversational replies (works offline as well)
function getBasicReply(msg) {
    if (/^(hi|hello|hey)\b/.test(msg)) {
        return "Hello! Nice to meet you. 😊 Ask me anything!";
    }
    if (msg.includes("how are you")) {
        return "I'm doing great, thanks! How can I help you today?";
    }
    if (msg.includes("your name") || msg.includes("who are you")) {
        return "My name is Bit. I am your smart AI assistant!";
    }
    if (msg.includes("who created you")) {
        return "I was created by Sayan using HTML, CSS and JavaScript!";
    }
    if (msg.includes("thank")) {
        return "You're welcome! Happy to help. 😊";
    }
    if (/^(bye|goodbye)\b/.test(msg)) {
        return "Goodbye! Have a wonderful day. 👋";
    }
    return null; // Returns null if it is not a basic conversational query
}

// Fetch answers for any topic from the internet
async function getSmartReply(message) {
    const msg = message.toLowerCase().trim();

    // 1. Check if it is a basic greeting or conversational phrase
    const basicReply = getBasicReply(msg);
    if (basicReply) {
        return basicReply;
    }

    // 2. Clean unnecessary question words to extract the main topic
    let topic = msg
        .replace(/^(what is|what are|who is|who was|tell me about|define|explain|what's)\s+/i, "")
        .replace(/\?+$/, "")
        .trim();

    // Handle specific local context queries
    if (topic === "our national bird" || topic === "national bird") {
        topic = "National bird of India";
    } else if (topic === "our national animal" || topic === "national animal") {
        topic = "National animal of India";
    }

    // 3. Search and fetch summary from Wikipedia API
    try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(topic)}&format=json&origin=*`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (searchData.query.search.length > 0) {
            const pageTitle = searchData.query.search[0].title;
            const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;
            const summaryRes = await fetch(summaryUrl);
            const summaryData = await summaryRes.json();

            if (summaryData.extract) {
                // Keep the reply concise by taking the first 2 sentences
                const sentences = summaryData.extract.split(". ");
                return sentences.slice(0, 2).join(". ") + ".";
            }
        }
        return "Sorry, I couldn't find exact info on that. Try asking in a slightly different way!";
    } catch (error) {
        return "Please check your internet connection so I can search for the answer!";
    }
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    userInput.value = "";

    const typing = document.createElement("div");
    typing.className = "message bot";
    typing.textContent = "Bit is thinking...";
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Wait for the smart reply to resolve
    const reply = await getSmartReply(message);
    
    typing.remove();
    addMessage(reply, "bot");
}

function quickSend(message) {
    userInput.value = message;
    sendMessage();
}

function clearChat() {
    chatBox.innerHTML = "";
    addMessage("Hello! I'm Bit. Ask me anything!", "bot");
}

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});