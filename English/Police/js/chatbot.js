// Dark Mode
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode();

darkModeToggleBtn.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/cotton/38/000000/sun--v2.png"/>';
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
}

function disableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/color/38/000000/moon-satellite.png"/>';
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));


//Chatbot
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chat-main');
let chatmain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let chatbtn = document.querySelector('.chatbot-button');
let chattoggle = document.querySelector('.chat-box-toggle');

chatbtn.addEventListener('click', () => {
    chatmain.style.display = "block";
    chatbtn.style.display = "none";
})

chattoggle.addEventListener('click', () => {
    chatbtn.style.display = "flex";
    chatmain.style.display = "none";
})


let introd = ["Hello, I am Chatbot", "Hi, I am a Robo"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];
let greetings = ["I am good, Thanks for asking", "I am fine, what about you", "I am good"];
let hobbies = ["I am here for your assistance", "I would like to help you"];
let rights = ['Human Rights provide freedom of speech, as well as separation of executive and judiciary and freedom of movement within the country and abroad.'];
let fundamental = ['Seven fundamental rights were originally provided by the Constitution – the right to equality, right to freedom, right against exploitation, right to freedom of religion, cultural and educational rights, right to property and right to constitutional remedies.'];
let emergency = ['What kind of emergency is it?'];
let backup = ['Sending immediate Backup to the location.']
let police = ['Call 100 for assistance'];
let medical = ['Call 102 for assistance'];
let fire = ['Call 101 for assistance'];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I didn't get you";
    if (message.includes('fine')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if (message.includes('who are you' || 'hai, who are you' || 'hai')) {
        let finalresult = introd[Math.floor(Math.random() * introd.length)];
        speech.text = finalresult;
    }
    if (message.includes('how are you' || 'how are you doing today')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if (message.includes('what can you do' || 'tell me something about you' || 'tell me something about your hobbies')) {
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if (message.includes('tell me about human rights')) {
        let finalresult = rights[Math.floor(Math.random() * rights.length)];
        speech.text = finalresult;
    }
    if (message.includes('fundamental rights')) {
        let finalresult = fundamental[Math.floor(Math.random() * fundamental.length)];
        speech.text = finalresult;
    }
    if (message.includes('emergency')) {
        let finalresult = emergency[Math.floor(Math.random() * emergency.length)];
        speech.text = finalresult;
    }
    if (message.includes('send immediate backup' || 'we need backup')) {
        let finalresult = backup[Math.floor(Math.random() * backup.length)];
        speech.text = finalresult;
    }
    if (message.includes('police')) {
        let finalresult = police[Math.floor(Math.random() * police.length)];
        speech.text = finalresult;
    }
    if (message.includes('medical')) {
        let finalresult = medical[Math.floor(Math.random() * medical.length)];
        speech.text = finalresult;
    }
    if (message.includes('fire')) {
        let finalresult = fire[Math.floor(Math.random() * fire.length)];
        speech.text = finalresult;
    }
    if (message.includes('thank you' || 'thank you so much')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if (message.includes('talk to you' || 'talk')) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
    chatareaouter.scrollTop = chatareaouter.scrollHeight;
}

recognition.onresult = function(e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function() {
    mic.style.background = "rgb(239 239 239)";
}
mic.addEventListener("click", function() {
    mic.style.background = '#bdb4b9';
    recognition.start();
    console.log("Activated");
})