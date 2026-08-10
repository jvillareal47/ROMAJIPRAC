const masterVocabList = [
    { word: "だいがく", romaji: "DAIGAKU", meaning: "university" },
    { word: "えき", romaji: "EKI", meaning: "station" },
    { word: "せんせい", romaji: "SENSEI", meaning: "teacher" },
    { word: "あいます", romaji: "AIMASU", meaning: "to meet" },
    { word: "あおい", romaji: "AOI", meaning: "blue" },
    { word: "あかい", romaji: "AKAI", meaning: "red" },
    { word: "あかるい", romaji: "AKARUI", meaning: "bright" },
    { word: "あき", romaji: "AKI", meaning: "autumn" },
    { word: "あけます", romaji: "AKEMASU", meaning: "to open" },
    { word: "あさ", romaji: "ASA", meaning: "morning" },
    { word: "あさごはん", romaji: "ASAGOHAN", meaning: "breakfast" },
    { word: "あし", romaji: "ASHI", meaning: "leg, foot" },
    { word: "あした", romaji: "ASHITA", meaning: "tomorrow" },
    { word: "あたま", romaji: "ATAMA", meaning: "head" },
    { word: "あたらしい", romaji: "ATARASHII", meaning: "new" },
    { word: "あつい", romaji: "ATSUI", meaning: "hot (weather)" },
    { word: "あに", romaji: "ANI", meaning: "older brother" },
    { word: "あね", romaji: "ANE", meaning: "older sister" },
    { word: "あめ", romaji: "AME", meaning: "rain" },
    { word: "あるきます", romaji: "ARUKIMASU", meaning: "to walk" },
    { word: "いえ", romaji: "IE", meaning: "house" },
    { word: "いきます", romaji: "IKIMASU", meaning: "to go" },
    { word: "いしゃ", romaji: "ISHA", meaning: "doctor" },
    { word: "いす", romaji: "ISU", meaning: "chair" },
    { word: "いぬ", romaji: "INU", meaning: "dog" },
    { word: "いま", romaji: "IMA", meaning: "now" },
    { word: "いもうと", romaji: "IMOUTO", meaning: "younger sister" },
    { word: "いりぐち", romaji: "IRIGUCHI", meaning: "entrance" },
    { word: "うた", romaji: "UTA", meaning: "song" },
    { word: "うみ", romaji: "UMI", meaning: "sea, ocean" },
    { word: "えいが", romaji: "EIGA", meaning: "movie" },
    { word: "えいご", romaji: "EIGO", meaning: "English" },
    { word: "えんぴつ", romaji: "ENPITSU", meaning: "pencil" },
    { word: "おいしい", romaji: "OISHII", meaning: "delicious" },
    { word: "おおきい", romaji: "OOKII", meaning: "big" },
    { word: "おかね", romaji: "OKANE", meaning: "money" },
    { word: "おちゃ", romaji: "OCHA", meaning: "green tea" },
    { word: "おんがく", romaji: "ONGAKU", meaning: "music" },
    { word: "がいこく", romaji: "GAIKOKU", meaning: "foreign country" },
    { word: "かいしゃ", romaji: "KAISHA", meaning: "company" },
    { word: "かぎ", romaji: "KAGI", meaning: "key" },
    { word: "がくせい", romaji: "GAKUSEI", meaning: "student" },
    { word: "かさ", romaji: "KASA", meaning: "umbrella" },
    { word: "かぞく", romaji: "KAZOKU", meaning: "family" },
    { word: "がっこう", romaji: "GAKKOU", meaning: "school" },
    { word: "かばん", romaji: "KABAN", meaning: "bag" },
    { word: "かんじ", romaji: "KANJI", meaning: "kanji" },
    { word: "き", romaji: "KI", meaning: "tree" },
    { word: "きっさてん", romaji: "KISSATEN", meaning: "coffee shop" },
    { word: "きっぷ", romaji: "KIPPU", meaning: "ticket" },
    { word: "きのう", romaji: "KINOU", meaning: "yesterday" },
    { word: "ぎゅうにゅう", romaji: "GYUUNYUU", meaning: "milk" },
    { word: "きょう", romaji: "KYOU", meaning: "today" },
    { word: "きょうしつ", romaji: "KYOSHITSU", meaning: "classroom" },
    { word: "くだもの", romaji: "KUDAMONO", meaning: "fruit" },
    { word: "くつ", romaji: "KUTSU", meaning: "shoes" },
    { word: "くるま", romaji: "KURUMA", meaning: "car" },
    { word: "けしごむ", romaji: "KESHIGOMU", meaning: "eraser" },
    { word: "こうえん", romaji: "KOUEN", meaning: "park" },
    { word: "さかな", romaji: "SAKANA", meaning: "fish" },
    { word: "ざっし", romaji: "ZASSHI", meaning: "magazine" },
    { word: "じかん", romaji: "JIKAN", meaning: "time" },
    { word: "じしょ", romaji: "JISHO", meaning: "dictionary" },
    { word: "じてんしゃ", romaji: "JITENSHA", meaning: "bicycle" },
    { word: "しゃしん", romaji: "SHASHIN", meaning: "photo" },
    { word: "しんぶん", romaji: "SHINBUN", meaning: "newspaper" },
    { word: "すし", romaji: "SUSHI", meaning: "sushi" },
    { word: "たべもの", romaji: "TABEMONO", meaning: "food" },
    { word: "たまご", romaji: "TAMAGO", meaning: "egg" },
    { word: "ちかてつ", romaji: "CHIKATETSU", meaning: "subway" },
    { word: "ちず", romaji: "CHIZU", meaning: "map" },
    { word: "でんしゃ", romaji: "DENSHA", meaning: "train" },
    { word: "でんわ", romaji: "DENWA", meaning: "telephone" },
    { word: "とうきょう", romaji: "TOUKYOU", meaning: "Tokyo" },
    { word: "としょかん", romaji: "TOSHOKAN", meaning: "library" },
    { word: "とり", romaji: "TORI", meaning: "bird" },
    { word: "なつ", romaji: "NATSU", meaning: "summer" },
    { word: "にく", romaji: "NIKU", meaning: "meat" },
    { word: "にほん", romaji: "NIHON", meaning: "Japan" },
    { word: "ねこ", romaji: "NEKO", meaning: "cat" },
    { word: "はな", romaji: "HANA", meaning: "flower" },
    { word: "ひこうき", romaji: "HIKOUKI", meaning: "airplane" },
    { word: "ふゆ", romaji: "FUYU", meaning: "winter" },
    { word: "ほん", romaji: "HON", meaning: "book" },
    { word: "みず", romaji: "MIZU", meaning: "water" },
    { word: "やま", romaji: "YAMA", meaning: "mountain" },
    { word: "りんご", romaji: "RINGO", meaning: "apple" }
];

const SESSION_LIMIT = 50;
const TIME_LIMIT = 60; // 1 Minute limit
let currentShuffleList = [];
let currentIndex = 0;
let score = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let isTimeExpired = false;

let userName = "";
let startTime = null;
let endTime = null;
let videoStream = null;

function startPractice() {
    const nameInput = document.getElementById('user-name-input').value.trim();
    if (!nameInput) {
        alert("Please enter your name to proceed.");
        return;
    }
    userName = nameInput;
    startTime = new Date();

    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('practice-screen').classList.add('active');
    initGame();
}

function initGame() {
    currentShuffleList = [...masterVocabList]
        .sort(() => Math.random() - 0.5)
        .slice(0, SESSION_LIMIT);
        
    currentIndex = 0;
    score = 0;
    loadWord();
}

function startTimer() {
    stopTimer();
    timeLeft = TIME_LIMIT;
    isTimeExpired = false;
    
    const timerBadge = document.getElementById('timer-display');
    timerBadge.classList.remove('expired');
    timerBadge.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            timerBadge.textContent = `Time Left: ${timeLeft}s`;
        } else {
            stopTimer();
            isTimeExpired = true;
            timerBadge.classList.add('expired');
            timerBadge.textContent = `Time Expired!`;
            document.getElementById('error-message').textContent = "⏰ Time's up! Answering now gives 5 points.";
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function loadWord() {
    document.getElementById('feedback-overlay').style.display = 'none';
    document.getElementById('error-message').textContent = '';
    
    const inputField = document.getElementById('romaji-input');
    inputField.value = '';
    inputField.focus();

    const item = currentShuffleList[currentIndex];
    
    // Display Hiragana instead of Romaji
    document.getElementById('vocab-hiragana').textContent = item.word;
    document.getElementById('vocab-meaning').textContent = item.meaning;

    document.getElementById('word-count').textContent = `Word: ${currentIndex + 1} / ${currentShuffleList.length}`;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    const progress = (currentIndex / currentShuffleList.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    startTimer();
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const inputField = document.getElementById('romaji-input');
    const userInput = inputField.value.trim().toUpperCase();
    const correctItem = currentShuffleList[currentIndex];
    const errorDisplay = document.getElementById('error-message');

    if (!userInput) return;

    if (userInput === correctItem.romaji) {
        stopTimer();
        
        // 10 points if answered within time, 5 points if answered after time expired
        const pointsEarned = isTimeExpired ? 5 : 10;
        score += pointsEarned;
        document.getElementById('score').textContent = `Score: ${score}`;
        errorDisplay.textContent = '';
        
        document.getElementById('feedback-title').textContent = "CORRECT! 🎉";
        document.getElementById('feedback-title').style.color = "var(--primary-green)";
        document.getElementById('feedback-msg').textContent = `"${correctItem.word}" is spelled "${correctItem.romaji}" (+${pointsEarned} pts)!`;
        document.getElementById('feedback-overlay').style.display = 'flex';
        document.getElementById('next-btn').focus();
    } else {
        // Penalty: lose 1 point for every incorrect guess
        score = Math.max(0, score - 1);
        document.getElementById('score').textContent = `Score: ${score}`;
        
        errorDisplay.textContent = `Incorrect! You typed "${userInput}". Try again! (-1 pt)`;
        inputField.select();
    }
}

function nextWord() {
    currentIndex++;
    if (currentIndex < currentShuffleList.length) {
        loadWord();
    } else {
        stopTimer();
        endTime = new Date();
        startCameraScreen();
    }
}

function startCameraScreen() {
    document.getElementById('practice-screen').classList.remove('active');
    document.getElementById('camera-screen').classList.add('active');

    const video = document.getElementById('webcam-video');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Camera access was denied or not found. A blank card background will be used.");
        });
}

function takeSnapshot() {
    const video = document.getElementById('webcam-video');
    const canvas = document.getElementById('photo-canvas');
    const photo = document.getElementById('captured-photo');

    canvas.width = video.videoWidth || 320;
    canvas.height = video.videoHeight || 240;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    photo.src = dataUrl;
    
    video.style.display = 'none';
    photo.style.display = 'block';

    document.getElementById('snap-btn').style.display = 'none';
    document.getElementById('retake-btn').style.display = 'inline-block';
    document.getElementById('cert-btn').style.display = 'inline-block';
}

function resetCamera() {
    const video = document.getElementById('webcam-video');
    const photo = document.getElementById('captured-photo');

    video.style.display = 'block';
    photo.style.display = 'none';

    document.getElementById('snap-btn').style.display = 'inline-block';
    document.getElementById('retake-btn').style.display = 'none';
    document.getElementById('cert-btn').style.display = 'none';
}

function showCertificate() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    document.getElementById('camera-screen').classList.remove('active');
    document.getElementById('certificate-screen').classList.add('active');

    document.getElementById('cert-user-name').textContent = userName;
    document.getElementById('cert-score').textContent = score;
    
    const totalSeconds = Math.floor((endTime - startTime) / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    document.getElementById('cert-total-time').textContent = `${mins}m ${secs}s`;

    const today = new Date();
    document.getElementById('cert-date').textContent = today.toISOString().split('T')[0];

    // Set captured photo as background image
    const photoData = document.getElementById('captured-photo').src;
    const certCard = document.getElementById('certificate');
    if (photoData) {
        certCard.style.backgroundImage = `url('${photoData}')`;
    }
}
