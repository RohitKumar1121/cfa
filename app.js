// CFA Quiz Application
// Configuration
const JSON_BASE_PATH = 'C:/Users/rohit/Downloads/JSON FILES OF CFA';
const EXAM_DATE = new Date('2026-05-01');

// Topic configuration
const TOPICS = {
    'Ethics': { folder: 'Ethics', color: '#6366f1' },
    'FSA': { folder: 'FSA', color: '#8b5cf6' },
    'Quants': { folder: 'Quants', color: '#ec4899' },
    'Derivatives': { folder: 'Derivatives', color: '#f43f5e' },
    'Economics': { folder: 'Economics', color: '#f97316' },
    'Equity': { folder: 'Equity', color: '#eab308' },
    'Fixed Income': { folder: 'FIXED INCOME', color: '#22c55e' },
    'Corporate Issuers': { folder: 'Corporate Issuers', color: '#14b8a6' },
    'Portfolio Mgmt': { folder: 'Portofolio management', color: '#06b6d4' },
    'Alt. Investments': { folder: 'Alternate Investments', color: '#3b82f6' }
};

// Motivational Quotes
const MOTIVATION_QUOTES = [
    "Success is not final, failure is not fatal: it's the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Every expert was once a beginner.",
    "The harder you work, the luckier you get.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream bigger. Do bigger.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't wait for opportunity. Create it.",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    "The only bad workout is the one that didn't happen.",
    "The secret of getting ahead is getting started.",
    "Focus on being productive instead of busy.",
    "You don't have to be great to start, but you have to start to be great.",
    "It always seems impossible until it's done.",
    "You are capable of amazing things.",
    "Doubt kills more dreams than failure ever will.",
    "Work hard in silence, let your success be the noise.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don't be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Strive for progress, not perfection.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do what you can with what you have where you are.",
    "You are never too old to set another goal or dream a new dream.",
    "Action is the foundational key to all success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Quality is not an act, it is a habit.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you.",
    "Opportunities don't happen. You create them.",
    "If you want to achieve greatness stop asking for permission.",
    "Things work out best for those who make the best of how things work out.",
    "To live a creative life, we must lose our fear of being wrong.",
    "The way to get started is to quit talking and begin doing.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "We may encounter many defeats but we must not be defeated.",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    "We generate fears while we sit. We overcome them by action.",
    "Whether you think you can or think you can't, you're right.",
    "Security is mostly a superstition. Life is either a daring adventure or nothing.",
    "The only person you are destined to become is the person you decide to be.",
    "Go confidently in the direction of your dreams.",
    "When I let go of what I am, I become what I might be.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Trust because you are willing to accept the risk, not because it's safe or certain.",
    "Take up one idea. Make that one idea your life.",
    "All our dreams can come true if we have the courage to pursue them.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "If you do what you always did, you will get what you always got.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Hard work beats talent when talent doesn't work hard.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Risk more than others think is safe. Dream more than others think is practical.",
    "Every accomplishment starts with the decision to try.",
    "You miss 100% of the shots you don't take.",
    "It's not about having time. It's about making time.",
    "Champions keep playing until they get it right.",
    "You don't learn to walk by following rules. You learn by doing, and by falling over.",
    "The difference between try and triumph is a little 'umph'.",
    "A goal without a plan is just a wish.",
    "Setting goals is the first step in turning the invisible into the visible.",
    "Your time is limited, don't waste it living someone else's life.",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    "The struggle you're in today is developing the strength you need for tomorrow.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Start where you are. Use what you have. Do what you can.",
    "Excellence is not a skill. It is an attitude.",
    "Don't count the days, make the days count.",
    "If you're going through hell, keep going.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "The question isn't who is going to let me; it's who is going to stop me.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "Be so good they can't ignore you.",
    "The best revenge is massive success.",
    "I didn't fail the test. I just found 100 ways to do it wrong.",
    "A person who never made a mistake never tried anything new.",
    "In the middle of difficulty lies opportunity.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Everything you've ever wanted is on the other side of fear.",
    "The only way to learn is to live.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Fall seven times, stand up eight.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Study while others are sleeping.",
    "Work while others are loafing.",
    "Prepare while others are playing.",
    "Dream while others are wishing.",
    "The expert in anything was once a beginner.",
    "Learning is a treasure that will follow its owner everywhere.",
    "Education is the passport to the future.",
    "An investment in knowledge pays the best interest.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The more that you read, the more things you will know.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Education is not preparation for life; education is life itself.",
    "The roots of education are bitter, but the fruit is sweet.",
    "Knowledge will bring you the opportunity to make a difference.",
    "The beautiful thing about learning is that nobody can take it away from you.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The mind is not a vessel to be filled, but a fire to be kindled.",
    "Learning never exhausts the mind.",
    "Develop a passion for learning. If you do, you will never cease to grow.",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    "Anyone who stops learning is old, whether at twenty or eighty.",
    "I am still learning.",
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    "The only source of knowledge is experience.",
    "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    "It is what we know already that often prevents us from learning.",
    "Research is formalized curiosity. It is poking and prying with a purpose.",
    "The desire to reach for the stars is ambitious. The desire to reach hearts is wise.",
    "What we learn with pleasure we never forget.",
    "Intellectual growth should commence at birth and cease only at death.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "The day you stop learning is the day you stop living.",
    "Every mistake teaches us something.",
    "Your future is created by what you do today, not tomorrow.",
    "Small daily improvements are the key to staggering long-term results.",
    "Discipline is the bridge between goals and accomplishment.",
    "The pain of discipline is nothing like the pain of disappointment.",
    "You will never always be motivated. You have to learn to be disciplined.",
    "Self-discipline is the magic power that makes you virtually unstoppable.",
    "Motivation gets you going and habit gets you there.",
    "There are no shortcuts to any place worth going.",
    "Patience, persistence and perspiration make an unbeatable combination for success.",
    "The only place where success comes before work is in the dictionary.",
    "There is no substitute for hard work.",
    "Genius is 1% inspiration and 99% perspiration.",
    "I never dreamed about success. I worked for it.",
    "Success isn't overnight. It's when every day you get a little better than before.",
    "Today I will do what others won't, so tomorrow I can accomplish what others can't.",
    "Hustle until you no longer have to introduce yourself.",
    "Stay focused, go after your dreams and keep moving toward your goals.",
    "The distance between your dreams and reality is called action.",
    "Don't wish it were easier. Wish you were better.",
    "The successful warrior is the average man with laser-like focus.",
    "Be patient. Good things take time.",
    "Slow progress is still progress.",
    "Small steps every day lead to massive changes.",
    "Consistency is what transforms average into excellence.",
    "Success is built from a lot of small wins.",
    "Rome wasn't built in a day, but they were laying bricks every hour.",
    "Progress is impossible without change.",
    "A river cuts through rock not because of its power but because of its persistence.",
    "The secret of your success is determined by your daily agenda.",
    "You don't have to see the whole staircase, just take the first step.",
    "Never give up on a dream just because of the time it will take to accomplish it.",
    "What you get by achieving your goals is not as important as what you become.",
    "Keep your eyes on the stars, and your feet on the ground.",
    "Success is a journey, not a destination.",
    "Don't wait. The time will never be just right.",
    "Do something today that your future self will thank you for.",
    "Invest in yourself. Your career is the engine of your wealth.",
    "The best investment you can make is in yourself.",
    "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
    "Be not afraid of going slowly, be afraid only of standing still.",
    "One day or day one. You decide.",
    "Winners are not people who never fail, but people who never quit.",
    "If it doesn't challenge you, it won't change you.",
    "The difference between ordinary and extraordinary is that little extra.",
    "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
    "Success means doing the best we can with what we have.",
    "The only limit to the height of your achievements is the reach of your dreams.",
    "Believe in yourself and all that you are.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "What you do today can improve all your tomorrows.",
    "The mind is everything. What you think you become.",
    "Luck is what happens when preparation meets opportunity.",
    "The secret to getting ahead is getting started.",
    "Today's struggles are tomorrow's strengths.",
    "Tough times never last, but tough people do.",
    "You're braver than you believe, stronger than you seem, and smarter than you think.",
    "It's not about perfect. It's about effort.",
    "Your positive action combined with positive thinking results in success.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Be the change that you wish to see in the world.",
    "Act as if what you do makes a difference. It does.",
    "With the new day comes new strength and new thoughts.",
    "Optimism is the faith that leads to achievement.",
    "What seems to us as bitter trials are often blessings in disguise.",
    "The measure of who we are is what we do with what we have.",
    "I am not afraid of storms, for I am learning how to sail my ship.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "Where there is a will, there is a way.",
    "Nothing great was ever achieved without enthusiasm.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "Do not wait; the time will never be 'just right.'",
    "Either you run the day, or the day runs you.",
    "The will to win, the desire to succeed, the urge to reach your full potential—these are the keys that will unlock the door to personal excellence.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Don't let the fear of losing be greater than the excitement of winning.",
    "If you can dream it, you can do it.",
    "You miss 100% of the opportunities you don't take.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "In the end, we only regret the chances we didn't take.",
    "Stay hungry, stay foolish.",
    "Be yourself; everyone else is already taken.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "To succeed in life, you need two things: ignorance and confidence.",
    "A journey of a thousand miles begins with a single step.",
    "The way to get started is to quit talking and begin doing.",
    "The CFA charter is worth every hour of study.",
    "Ethics first, formulas second—master both.",
    "Every Reading you complete brings you closer to success.",
    "Financial analysis is a skill that lasts a lifetime.",
    "Trust the process. The results will follow.",
    "One question at a time, one concept at a time.",
    "Your dedication to CFA study shows your commitment to excellence.",
    "The market rewards the prepared mind.",
    "Master the fundamentals, and the complex becomes simple.",
    "Every correct answer builds your confidence.",
    "Review, practice, succeed.",
    "The CFA exam tests knowledge, but success tests character."
];


// State
let state = {
    allQuestions: {},
    currentTopic: null,
    currentReading: null,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    hasAnswered: false,
    progress: {},
    sessions: [],
    currentSessionStart: null,
    // Timer state
    questionStartTime: null,
    questionTimes: {},      // { topicName: { readingName: { qId: timeInSeconds } } }
    currentSessionResults: [] // For detailed results modal
};

// Timer variables
let timerInterval = null;
let currentQuestionSeconds = 0;
let timerPaused = false;
let pausedAtSeconds = 0;

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
    loadState();
    initTheme();
    updateExamCountdown();
    setInterval(updateExamCountdown, 60000);

    setupNavigation();
    setupScrollEffects();
    await loadAllQuestions();
    renderDashboard();
});

// Scroll effects for mobile
function setupScrollEffects() {
    let lastScrollY = window.scrollY;
    const quickActions = document.querySelector('.quick-actions');

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768 || !quickActions) return;

        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide
            quickActions.classList.add('hidden-action');
        } else {
            // Scrolling up - show
            quickActions.classList.remove('hidden-action');
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('cfaQuizTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cfaQuizTheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Navigation
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const view = link.dataset.view;
            showView(view);
        });
    });
}

function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    document.getElementById(viewName + 'View').classList.add('active');
    document.querySelector(`.nav-link[data-view="${viewName}"]`).classList.add('active');

    if (viewName === 'home') renderDashboard();
    if (viewName === 'analytics') renderAnalytics();
    if (viewName === 'flagged') renderFlagged();
    if (viewName === 'quiz') {
        if (!state.currentTopic) {
            showTopicSelector();
        }
    }
}

// Exam Countdown
function updateExamCountdown() {
    const now = new Date();
    const diff = EXAM_DATE - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('daysLeft').textContent = days > 0 ? days : 0;
}

// Random Motivational Quote
function showRandomQuote() {
    const quoteEl = document.getElementById('motivationQuote');
    if (quoteEl && MOTIVATION_QUOTES.length > 0) {
        const randomIndex = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
        quoteEl.textContent = MOTIVATION_QUOTES[randomIndex];
    }
}

// Timer functions
function startQuestionTimer() {
    state.questionStartTime = Date.now();
    currentQuestionSeconds = 0;
    timerPaused = false;
    pausedAtSeconds = 0;
    updateTimerDisplay();
    updatePauseButton();

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!timerPaused) {
            currentQuestionSeconds = pausedAtSeconds + Math.floor((Date.now() - state.questionStartTime) / 1000);
            updateTimerDisplay();
        }
    }, 1000);
}

function stopQuestionTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerPaused = false;
    return currentQuestionSeconds;
}

function togglePause() {
    timerPaused = !timerPaused;
    const pauseIcon = document.getElementById('pauseIcon');
    const timerFloat = document.getElementById('timerFloat');
    const pauseOverlay = document.getElementById('pauseOverlay');

    if (timerPaused) {
        pausedAtSeconds = currentQuestionSeconds;
        clearInterval(timerInterval);
        if (pauseIcon) pauseIcon.textContent = '▶'; // Resume icon
        if (timerFloat) timerFloat.classList.add('paused');
        if (pauseOverlay) pauseOverlay.style.display = 'flex';
    } else {
        state.questionStartTime = Date.now() - (pausedAtSeconds * 1000);
        startQuestionTimer(); // Restart timer from paused time
        if (pauseIcon) pauseIcon.textContent = '⏸'; // Pause icon
        if (timerFloat) timerFloat.classList.remove('paused');
        if (pauseOverlay) pauseOverlay.style.display = 'none';
    }
    updatePauseButton();
}

function updatePauseButton() {
    const pauseBtn = document.getElementById('pauseBtn');
    if (timerPaused) {
        if (pauseBtn) pauseBtn.title = 'Resume Timer';
    } else {
        if (pauseBtn) pauseBtn.title = 'Pause Timer';
    }
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('questionTimer');
    if (!timerEl) return;

    const mins = Math.floor(currentQuestionSeconds / 60);
    const secs = currentQuestionSeconds % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // Add warning classes
    timerEl.classList.remove('warning', 'danger');
    if (currentQuestionSeconds > 120) {
        timerEl.classList.add('danger');
    } else if (currentQuestionSeconds > 60) {
        timerEl.classList.add('warning');
    }
}

function formatTime(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

// Load all questions from JSON files
async function loadAllQuestions() {
    for (const [topicName, config] of Object.entries(TOPICS)) {
        state.allQuestions[topicName] = {};

        if (!state.progress[topicName]) {
            state.progress[topicName] = {};
        }
        if (!state.questionTimes[topicName]) {
            state.questionTimes[topicName] = {};
        }

        try {
            const readings = await getReadingsForTopic(topicName, config.folder);
            for (const reading of readings) {
                try {
                    const response = await fetch(reading.path);
                    const data = await response.json();
                    state.allQuestions[topicName][reading.name] = data.questions || [];

                    if (!state.progress[topicName][reading.name]) {
                        state.progress[topicName][reading.name] = {
                            answered: {},
                            correct: {},
                            flagged: {}
                        };
                    }
                    if (!state.questionTimes[topicName][reading.name]) {
                        state.questionTimes[topicName][reading.name] = {};
                    }
                } catch (e) {
                    console.warn(`Could not load ${reading.name}:`, e);
                }
            }
        } catch (e) {
            console.warn(`Could not load topic ${topicName}:`, e);
        }
    }
}

// Get readings for a topic (hardcoded list based on exploration)
async function getReadingsForTopic(topicName, folderName) {
    const readings = [];
    const basePath = `data/${folderName}`;

    const readingFiles = {
        'Ethics': [
            'Reading 89 Ethics and Trust in the Investment Profession - Answers.json',
            'Reading 90 Code of Ethics and Standards of Professional Conduct - Answers.json',
            'Reading 91.1 Guidance for Standards I(A) and I(B) - Answers.json',
            'Reading 91.2 Guidance for Standards I(C) and I(D) - Answers.json',
            'Reading 91.3 Guidance for Standard II - Answers.json',
            'Reading 91.4 Guidance for Standards III(A) and III(B) - Answers.json',
            'Reading 91.5 Guidance for Standards III(C), III(D), and III(E) - Answers.json',
            'Reading 91.6 Guidance for Standard IV - Answers.json',
            'Reading 91.7 Guidance for Standard V - Answers.json',
            'Reading 91.8 Guidance for Standard VI - Answers.json',
            'Reading 91.9 Guidance for Standard VII - Answers.json',
            'Reading 92 Introduction to the Global Investment Performance Standards (GIPS) - Answers.json',
            'Reading 93 Ethics Application - Answers.json'
        ],
        'FSA': [
            'Reading 29 Introduction to Financial Statement Analysis - Answers.json',
            'Reading 30 Analyzing Income Statements - Answers.json',
            'Reading 31 Analyzing Balance Sheets - Answers.json',
            'Reading 32 Analyzing Statements of Cash Flows I - Answers.json',
            'Reading 33 Analyzing Statements of Cash Flows II - Answers.json',
            'Reading 34 Analysis of Inventories - Answers.json',
            'Reading 35 Analysis of Long-Term Assets - Answers.json',
            'Reading 36 Topics in Long-Term Liabilities and Equity - Answers.json',
            'Reading 37 Analysis of Income Taxes - Answers.json',
            'Reading 38 Financial Reporting Quality - Answers.json',
            'Reading 39 Financial Analysis Techniques - Answers.json',
            'Reading 40 Introduction to Financial Statement Modeling - Answers.json'
        ],
        'Quants': [
            'Reading 1 Rates and Returns - Answers.json',
            'Reading 2 The Time Value of Money in Finance - Answers.json',
            'Reading 3 Statistical Measures of Asset Returns - Answers.json',
            'Reading 4 Probability Trees and Conditional Expectations - Answers.json',
            'Reading 5 Portfolio Mathematics - Answers.json',
            'Reading 6 Simulation Methods - Answers.json',
            'Reading 7 Estimation and Inference - Answers.json',
            'Reading 8 Hypothesis Testing - Answers.json',
            'Reading 9 Parametric and Non-Parametric Tests of Independence - Answers.json',
            'Reading 10 Simple Linear Regression - Answers.json',
            'Reading 11 Introduction to Big Data Techniques - Answers.json'
        ],
        'Derivatives': [
            'Reading 68 Derivative Instrument and Derivative Market Features - Answers.json',
            'Reading 69 Forward Commitment and Contingent Claim Features and Instruments - Answers.json',
            'Reading 70 Derivative Benefits, Risks, and Issuer and Investor Uses - Answers.json',
            'Reading 71 Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives - Answers.json',
            'Reading 72 Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities - Answers.json',
            'Reading 73 Pricing and Valuation of Futures Contracts - Answers.json',
            'Reading 74 Pricing and Valuation of Interest Rates and Other Swaps - Answers.json',
            'Reading 75 Pricing and Valuation of Options - Answers.json',
            'Reading 76 Option Replication Using PutCall Parity - Answers.json',
            'Reading 77 Valuing a Derivative Using a One-Period Binomial Model - Answers.json'
        ],
        'Economics': [
            'Reading 12 Firms and Market Structures - Answers.json',
            'Reading 13 Understanding Business Cycles - Answers.json',
            'Reading 14 Fiscal Policy - Answers.json',
            'Reading 15 Monetary Policy - Answers.json',
            'Reading 16 Introduction to Geopolitics - Answers.json',
            'Reading 17 International Trade - Answers.json',
            'Reading 18 Capital Flows and the FX Market - Answers.json',
            'Reading 19 Exchange Rate Calculations - Answers.json'
        ],
        'Equity': [
            'Reading 41 Market Organization and Structure - Answers.json',
            'Reading 42 Security Market Indexes - Answers.json',
            'Reading 43 Market Efficiency - Answers.json',
            'Reading 44 Overview of Equity Securities - Answers.json',
            'Reading 45 Company Analysis- Past and Present - Answers.json',
            'Reading 46 Industry and Competitive Analysis - Answers.json',
            'Reading 47 Company Analysis- Forecasting - Answers.json',
            'Reading 48 Equity Valuation- Concepts and Basic Tools - Answers.json'
        ],
        'Fixed Income': [
            'Reading 49 Fixed-Income Instrument Features - Answers.json',
            'Reading 50 Fixed-Income Cash Flows and Types - Answers.json',
            'Reading 51 Fixed-Income Issuance and Trading - Answers.json',
            'Reading 52 Fixed-Income Markets for Corporate Issuers - Answers.json',
            'Reading 53 Fixed-Income Markets for Government Issuers - Answers.json',
            'Reading 54 Fixed-Income Bond Valuation- Prices and Yields - Answers.json',
            'Reading 55 Yield and Yield Spread Measures for Fixed-Rate Bonds - Answers.json',
            'Reading 56 Yield and Yield Spread Measures for Floating-Rate Instruments - Answers.json',
            'Reading 57 The Term Structure of Interest Rates- Spot, Par, and Forward Curves - Answers.json',
            'Reading 58 Interest Rate Risk and Return - Answers.json',
            'Reading 59 Yield-Based Bond Duration Measures and Properties - Answers.json',
            'Reading 60 Yield-Based Bond Convexity and Portfolio Properties - Answers.json',
            'Reading 61 Curve-Based and Empirical Fixed-Income Risk Measures - Answers.json',
            'Reading 62 Credit Risk - Answers.json',
            'Reading 63 Credit Analysis for Government Issuers - Answers.json',
            'Reading 64 Credit Analysis for Corporate Issuers - Answers.json',
            'Reading 65 Fixed-Income Securitization - Answers.json',
            'Reading 66 Asset-Backed Security (ABS) Instrument and Market Features - Answers.json',
            'Reading 67 Mortgage-Backed Security (MBS) Instrument and Market Features - Answers.json'
        ],
        'Corporate Issuers': [
            'Reading 22 Organizational Forms, Corporate Issuer Features, and Ownership - Answers.json',
            'Reading 23 Investors and Other Stakeholders - Answers.json',
            'Reading 24 Corporate Governance- Conflicts, Mechanisms, Risks, and Benefits - Answers.json',
            'Reading 25 Working Capital and Liquidity - Answers.json',
            'Reading 26 Capital Investments and Capital Allocation - Answers.json',
            'Reading 27 Capital Structure - Answers.json',
            'Reading 28 Business Models - Answers.json'
        ],
        'Portfolio Mgmt': [
            'Reading 20 Portfolio Risk and Return Part I - Answers.json',
            'Reading 21 Portfolio Risk and Return Part II - Answers.json',
            'Reading 85 Portfolio Management- An Overview - Answers.json',
            'Reading 86 Basics of Portfolio Planning and Construction - Answers.json',
            'Reading 87 The Behavioral Biases of Individuals - Answers.json',
            'Reading 88 Introduction to Risk Management - Answers.json'
        ],
        'Alt. Investments': [
            'Reading 78 Alternative Investment Features, Methods, and Structures - Answers.json',
            'Reading 79 Alternative Investment Performance and Returns - Answers.json',
            'Reading 80 Investments in Private Capital- Equity and Debt - Answers.json',
            'Reading 81 Real Estate and Infrastructure - Answers.json',
            'Reading 82 Natural Resources - Answers.json',
            'Reading 83 Hedge Funds - Answers.json',
            'Reading 84 Introduction to Digital Assets - Answers.json'
        ]
    };

    const files = readingFiles[topicName] || [];
    for (const file of files) {
        readings.push({
            name: file.replace(' - Answers.json', ''),
            path: `${basePath}/${file}`
        });
    }

    return readings;
}

// State persistence
function saveState() {
    localStorage.setItem('cfaQuizState', JSON.stringify({
        progress: state.progress,
        sessions: state.sessions,
        questionTimes: state.questionTimes,
        currentTopic: state.currentTopic,
        currentReading: state.currentReading,
        currentQuestionIndex: state.currentQuestionIndex
    }));
}

function loadState() {
    const saved = localStorage.getItem('cfaQuizState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.progress = parsed.progress || {};
        state.sessions = parsed.sessions || [];
        state.questionTimes = parsed.questionTimes || {};
        state.currentTopic = parsed.currentTopic;
        state.currentReading = parsed.currentReading;
        state.currentQuestionIndex = parsed.currentQuestionIndex || 0;
    }
}

// Export progress
function exportProgress() {
    const exportData = {
        version: 1,
        exportDate: new Date().toISOString(),
        progress: state.progress,
        sessions: state.sessions,
        questionTimes: state.questionTimes
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cfa-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import progress
function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            if (data.progress) {
                // Merge progress
                for (const [topic, readings] of Object.entries(data.progress)) {
                    if (!state.progress[topic]) state.progress[topic] = {};
                    for (const [reading, progress] of Object.entries(readings)) {
                        if (!state.progress[topic][reading]) {
                            state.progress[topic][reading] = progress;
                        } else {
                            // Merge individual fields
                            Object.assign(state.progress[topic][reading].answered, progress.answered || {});
                            Object.assign(state.progress[topic][reading].correct, progress.correct || {});
                            Object.assign(state.progress[topic][reading].flagged, progress.flagged || {});
                        }
                    }
                }
            }

            if (data.questionTimes) {
                for (const [topic, readings] of Object.entries(data.questionTimes)) {
                    if (!state.questionTimes[topic]) state.questionTimes[topic] = {};
                    for (const [reading, times] of Object.entries(readings)) {
                        if (!state.questionTimes[topic][reading]) {
                            state.questionTimes[topic][reading] = times;
                        } else {
                            Object.assign(state.questionTimes[topic][reading], times);
                        }
                    }
                }
            }

            if (data.sessions) {
                state.sessions = [...state.sessions, ...data.sessions];
            }

            saveState();
            renderDashboard();
            alert('Progress imported successfully!');
        } catch (err) {
            alert('Error importing progress: ' + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

// Dashboard rendering
function renderDashboard() {
    showRandomQuote();

    const topicsGrid = document.getElementById('topicsGrid');
    topicsGrid.innerHTML = '';

    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalFlagged = 0;

    for (const [topicName, config] of Object.entries(TOPICS)) {
        const topicData = state.allQuestions[topicName] || {};
        const progressData = state.progress[topicName] || {};

        let topicQuestions = 0;
        let topicAnswered = 0;
        let topicCorrect = 0;

        for (const [readingName, questions] of Object.entries(topicData)) {
            topicQuestions += questions.length;
            const readingProgress = progressData[readingName] || { answered: {}, correct: {}, flagged: {} };
            topicAnswered += Object.keys(readingProgress.answered).length;
            topicCorrect += Object.values(readingProgress.correct).filter(Boolean).length;
            totalFlagged += Object.values(readingProgress.flagged).filter(Boolean).length;
        }

        totalQuestions += topicQuestions;
        totalAnswered += topicAnswered;
        totalCorrect += topicCorrect;

        const progressPercent = topicQuestions > 0 ? Math.round((topicAnswered / topicQuestions) * 100) : 0;
        const accuracy = topicAnswered > 0 ? Math.round((topicCorrect / topicAnswered) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => selectTopic(topicName);
        card.innerHTML = `
            <div class="topic-name">${topicName}</div>
            <div class="topic-progress">
                <div class="topic-progress-fill" style="width: ${progressPercent}%; background: ${config.color}"></div>
            </div>
            <div class="topic-stats">
                <span>${topicAnswered}/${topicQuestions} questions</span>
                <span>${accuracy}% accuracy</span>
            </div>
        `;
        topicsGrid.appendChild(card);
    }

    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('answeredCount').textContent = totalAnswered;
    document.getElementById('correctCount').textContent = totalCorrect;
    document.getElementById('accuracyRate').textContent = totalAnswered > 0 ?
        Math.round((totalCorrect / totalAnswered) * 100) + '%' : '0%';
    document.getElementById('flaggedCount').textContent = totalFlagged;
}

// Topic selection
function selectTopic(topicName) {
    state.currentTopic = topicName;
    showView('quiz');
    showTopicSelector();
}

function showTopicSelector() {
    document.getElementById('topicSelector').style.display = 'block';
    document.getElementById('quizInterface').style.display = 'none';
    stopQuestionTimer();

    const readingList = document.getElementById('readingList');
    readingList.innerHTML = '';

    if (!state.currentTopic) {
        for (const [topicName, config] of Object.entries(TOPICS)) {
            const topicData = state.allQuestions[topicName] || {};
            let totalQ = 0;
            for (const questions of Object.values(topicData)) {
                totalQ += questions.length;
            }

            const item = document.createElement('div');
            item.className = 'reading-item';
            item.onclick = () => selectTopic(topicName);
            item.innerHTML = `
                <span class="reading-name">${topicName}</span>
                <span class="reading-count">${totalQ} questions</span>
            `;
            readingList.appendChild(item);
        }
        document.querySelector('.selector-title').textContent = 'Select a Topic';
    } else {
        const topicData = state.allQuestions[state.currentTopic] || {};
        const progressData = state.progress[state.currentTopic] || {};

        for (const [readingName, questions] of Object.entries(topicData)) {
            if (!questions.length) continue;

            const readingProgress = progressData[readingName] || { answered: {}, correct: {} };
            const answered = Object.keys(readingProgress.answered || {}).length;
            const correct = Object.values(readingProgress.correct || {}).filter(Boolean).length;
            const total = questions.length;
            const isComplete = answered >= total;
            const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            const item = document.createElement('div');
            item.className = 'reading-item' + (isComplete ? ' completed' : '');
            item.onclick = () => startReading(readingName);

            let statusHtml = '';
            if (isComplete) {
                statusHtml = `
                    <span class="reading-status complete">
                        <span class="status-icon">✓</span>
                        <span class="status-text">Complete</span>
                        <span class="status-score">${accuracy}%</span>
                    </span>
                `;
            } else {
                statusHtml = `
                    <span class="reading-status">
                        <span class="reading-count">${answered}/${total}</span>
                        ${answered > 0 ? `<span class="reading-score">${accuracy}%</span>` : ''}
                    </span>
                `;
            }

            item.innerHTML = `
                <span class="reading-name">${readingName}</span>
                ${statusHtml}
            `;
            readingList.appendChild(item);
        }

        const backItem = document.createElement('div');
        backItem.className = 'reading-item';
        backItem.style.opacity = '0.6';
        backItem.onclick = () => {
            state.currentTopic = null;
            showTopicSelector();
        };
        backItem.innerHTML = `<span class="reading-name">← Back to Topics</span>`;
        readingList.insertBefore(backItem, readingList.firstChild);

        document.querySelector('.selector-title').textContent = state.currentTopic;
    }
}

function startReading(readingName) {
    state.currentReading = readingName;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = null;
    state.hasAnswered = false;
    state.currentSessionStart = Date.now();
    state.currentSessionResults = []; // Reset session results

    document.getElementById('topicSelector').style.display = 'none';
    document.getElementById('quizInterface').style.display = 'block';

    renderQuestion();
    startQuestionTimer();
    saveState();
}

// Quiz rendering
function renderQuestion() {
    const questions = state.allQuestions[state.currentTopic]?.[state.currentReading] || [];
    if (!questions.length) return;

    const question = questions[state.currentQuestionIndex];
    const progress = getQuestionProgress(question.id);

    // Update metadata
    document.getElementById('topicMeta').textContent = `MOD: ${state.currentTopic.toUpperCase()}`;
    document.getElementById('readingMeta').textContent = `REF: ${state.currentReading.substring(0, 15)}...`;
    document.getElementById('questionNum').textContent = `Q: ${state.currentQuestionIndex + 1}/${questions.length}`;

    const sessionNum = state.sessions.length + 1;
    document.getElementById('sessionLabel').textContent = `PRECISION ASSESSMENT / SESSION ${String(sessionNum).padStart(2, '0')}`;

    const progressPercent = ((state.currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    document.getElementById('progressLabel').textContent = `Progress: ${Math.round(progressPercent)}%`;

    document.getElementById('questionText').innerHTML = question.text;

    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';

    question.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.dataset.index = index;

        if (progress.answered !== undefined) {
            state.hasAnswered = true;
            state.selectedAnswer = progress.answered;

            if (index === progress.answered) {
                card.classList.add('selected');
                if (index === question.correctAnswerIndex) {
                    card.classList.add('correct');
                } else {
                    card.classList.add('incorrect');
                }
            }
            if (index === question.correctAnswerIndex) {
                card.classList.add('correct');
            }
            card.classList.add('disabled');
        }

        card.onclick = () => selectAnswer(index);
        card.innerHTML = `
            <span class="option-key">${String(index + 1).padStart(2, '0')}_</span>
            <span class="option-content">${option}</span>
        `;
        optionsGrid.appendChild(card);
    });

    const explanationBox = document.getElementById('explanationBox');
    if (progress.answered !== undefined) {
        const isCorrect = progress.answered === question.correctAnswerIndex;
        explanationBox.style.display = 'block';
        document.getElementById('resultIcon').textContent = isCorrect ? '✓' : '✗';
        document.getElementById('resultIcon').className = `explanation-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('resultTitle').textContent = isCorrect ? 'Correct!' : 'Incorrect';
        document.getElementById('resultTitle').className = `explanation-title ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('explanationText').innerHTML = question.explanation;
    } else {
        explanationBox.style.display = 'none';
        // Start timer for new question
        if (!state.hasAnswered) {
            startQuestionTimer();
        }
    }

    const flagBtn = document.getElementById('flagBtn');
    if (progress.flagged) {
        flagBtn.classList.add('flagged');
        flagBtn.innerHTML = '<span class="flag-icon">⚑</span> Flagged';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.innerHTML = '<span class="flag-icon">⚑</span> Flag for Review';
    }

    document.getElementById('prevBtn').disabled = state.currentQuestionIndex === 0;

    const nextBtn = document.getElementById('nextBtn');
    if (state.currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Finish →';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function getQuestionProgress(questionId) {
    const progress = state.progress[state.currentTopic]?.[state.currentReading] || {};
    return {
        answered: progress.answered?.[questionId],
        correct: progress.correct?.[questionId],
        flagged: progress.flagged?.[questionId]
    };
}

function selectAnswer(index) {
    if (state.hasAnswered) return;

    const questions = state.allQuestions[state.currentTopic][state.currentReading];
    const question = questions[state.currentQuestionIndex];

    // Stop timer and record time
    const timeTaken = stopQuestionTimer();

    state.selectedAnswer = index;
    state.hasAnswered = true;

    // Record answer
    if (!state.progress[state.currentTopic]) {
        state.progress[state.currentTopic] = {};
    }
    if (!state.progress[state.currentTopic][state.currentReading]) {
        state.progress[state.currentTopic][state.currentReading] = { answered: {}, correct: {}, flagged: {} };
    }

    const isCorrect = index === question.correctAnswerIndex;
    state.progress[state.currentTopic][state.currentReading].answered[question.id] = index;
    state.progress[state.currentTopic][state.currentReading].correct[question.id] = isCorrect;

    // Record time
    if (!state.questionTimes[state.currentTopic]) {
        state.questionTimes[state.currentTopic] = {};
    }
    if (!state.questionTimes[state.currentTopic][state.currentReading]) {
        state.questionTimes[state.currentTopic][state.currentReading] = {};
    }
    state.questionTimes[state.currentTopic][state.currentReading][question.id] = timeTaken;

    // Add to session results
    state.currentSessionResults.push({
        questionIndex: state.currentQuestionIndex,
        questionId: question.id,
        userAnswer: index,
        correctAnswer: question.correctAnswerIndex,
        isCorrect: isCorrect,
        timeTaken: timeTaken,
        options: question.options
    });

    saveState();
    renderQuestion();
}

function toggleFlag() {
    const questions = state.allQuestions[state.currentTopic][state.currentReading];
    const question = questions[state.currentQuestionIndex];

    if (!state.progress[state.currentTopic][state.currentReading].flagged) {
        state.progress[state.currentTopic][state.currentReading].flagged = {};
    }

    const current = state.progress[state.currentTopic][state.currentReading].flagged[question.id];
    state.progress[state.currentTopic][state.currentReading].flagged[question.id] = !current;

    saveState();
    renderQuestion();
}

function nextQuestion() {
    const questions = state.allQuestions[state.currentTopic][state.currentReading];

    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        state.selectedAnswer = null;
        state.hasAnswered = false;
        renderQuestion();
        startQuestionTimer();
        saveState();
    } else {
        // End of reading - show results
        stopQuestionTimer();

        if (state.currentSessionStart) {
            state.sessions.push({
                topic: state.currentTopic,
                reading: state.currentReading,
                duration: Date.now() - state.currentSessionStart,
                date: new Date().toISOString(),
                results: state.currentSessionResults.length
            });
        }
        saveState();

        showResultsModal();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        state.selectedAnswer = null;
        state.hasAnswered = false;
        renderQuestion();
        startQuestionTimer();
        saveState();
    }
}

// Results Modal
function showResultsModal() {
    const modal = document.getElementById('resultsModal');
    modal.style.display = 'flex';

    const results = state.currentSessionResults;
    const totalQuestions = results.length;
    const correctCount = results.filter(r => r.isCorrect).length;
    const totalTime = results.reduce((sum, r) => sum + r.timeTaken, 0);
    const avgTime = totalQuestions > 0 ? Math.round(totalTime / totalQuestions) : 0;

    // Render summary
    const summaryEl = document.getElementById('resultsSummary');
    summaryEl.innerHTML = `
        <div class="result-stat">
            <span class="result-value">${totalQuestions}</span>
            <span class="result-label">Questions</span>
        </div>
        <div class="result-stat success">
            <span class="result-value">${correctCount}</span>
            <span class="result-label">Correct</span>
        </div>
        <div class="result-stat error">
            <span class="result-value">${totalQuestions - correctCount}</span>
            <span class="result-label">Incorrect</span>
        </div>
        <div class="result-stat time">
            <span class="result-value">${formatTime(avgTime)}</span>
            <span class="result-label">Avg. Time</span>
        </div>
    `;

    // Render table
    const tableBody = document.getElementById('resultsTableBody');
    tableBody.innerHTML = results.map((r, i) => {
        const timeClass = r.timeTaken > 120 ? 'slow' : (r.timeTaken < 30 ? 'fast' : '');
        return `
            <tr class="${r.isCorrect ? 'correct' : 'incorrect'}">
                <td>${i + 1}</td>
                <td class="time-cell ${timeClass}">${formatTime(r.timeTaken)}</td>
                <td><span class="result-badge ${r.isCorrect ? 'correct' : 'incorrect'}">${r.isCorrect ? 'Correct' : 'Wrong'}</span></td>
                <td>${r.options[r.userAnswer]?.substring(0, 30)}...</td>
                <td>${r.options[r.correctAnswer]?.substring(0, 30)}...</td>
            </tr>
        `;
    }).join('');
}

function closeResultsModal() {
    document.getElementById('resultsModal').style.display = 'none';
    state.currentReading = null;
    state.currentSessionResults = [];
    showTopicSelector();
}

function reviewMistakes() {
    closeResultsModal();
    // Go to flagged view with mistakes
    const mistakes = state.currentSessionResults.filter(r => !r.isCorrect);
    if (mistakes.length > 0) {
        // Flag mistakes
        for (const mistake of mistakes) {
            if (!state.progress[state.currentTopic][state.currentReading].flagged) {
                state.progress[state.currentTopic][state.currentReading].flagged = {};
            }
            state.progress[state.currentTopic][state.currentReading].flagged[mistake.questionId] = true;
        }
        saveState();
    }
    showView('flagged');
}

// Continue learning
function continueLearning() {
    if (state.currentTopic && state.currentReading) {
        showView('quiz');
        startReading(state.currentReading);
    } else {
        showView('quiz');
        showTopicSelector();
    }
}

// Flagged view
function renderFlagged() {
    const flaggedList = document.getElementById('flaggedList');
    const noFlagged = document.getElementById('noFlagged');
    const filterSelect = document.getElementById('flaggedTopicFilter');

    filterSelect.innerHTML = '<option value="all">All Topics</option>';
    for (const topicName of Object.keys(TOPICS)) {
        filterSelect.innerHTML += `<option value="${topicName}">${topicName}</option>`;
    }

    const selectedTopic = filterSelect.value;
    const flaggedItems = [];

    for (const [topicName, topicProgress] of Object.entries(state.progress)) {
        if (selectedTopic !== 'all' && topicName !== selectedTopic) continue;

        for (const [readingName, readingProgress] of Object.entries(topicProgress)) {
            const questions = state.allQuestions[topicName]?.[readingName] || [];

            for (const [qId, isFlagged] of Object.entries(readingProgress.flagged || {})) {
                if (isFlagged) {
                    const question = questions.find(q => String(q.id) === String(qId));
                    if (question) {
                        flaggedItems.push({
                            topic: topicName,
                            reading: readingName,
                            question: question,
                            questionIndex: questions.indexOf(question)
                        });
                    }
                }
            }
        }
    }

    if (flaggedItems.length === 0) {
        flaggedList.innerHTML = '';
        noFlagged.style.display = 'block';
    } else {
        noFlagged.style.display = 'none';
        flaggedList.innerHTML = flaggedItems.map(item => `
            <div class="flagged-item" onclick="goToFlagged('${item.topic}', '${item.reading}', ${item.questionIndex})">
                <div>
                    <div class="flagged-topic">${item.topic} / ${item.reading.substring(0, 30)}...</div>
                    <div class="flagged-question">${stripHtml(item.question.text).substring(0, 100)}...</div>
                </div>
            </div>
        `).join('');
    }
}

function filterFlagged() {
    renderFlagged();
}

function goToFlagged(topic, reading, index) {
    state.currentTopic = topic;
    state.currentReading = reading;
    state.currentQuestionIndex = index;
    state.hasAnswered = false;
    state.currentSessionResults = [];

    showView('quiz');
    document.getElementById('topicSelector').style.display = 'none';
    document.getElementById('quizInterface').style.display = 'block';
    renderQuestion();
    startQuestionTimer();
}

function reviewFlagged() {
    showView('flagged');
}

// Analytics
function renderAnalytics() {
    const chartContainer = document.getElementById('topicChart');
    chartContainer.innerHTML = '';

    const topicStats = [];
    let globalAnswered = 0;
    let globalCorrect = 0;
    let globalTotalTime = 0;
    let globalTimeCount = 0;

    for (const [topicName, config] of Object.entries(TOPICS)) {
        const progressData = state.progress[topicName] || {};
        const timesData = state.questionTimes[topicName] || {};
        let answered = 0;
        let correct = 0;
        let totalTime = 0;
        let timeCount = 0;

        for (const [readingName, readingProgress] of Object.entries(progressData)) {
            answered += Object.keys(readingProgress.answered || {}).length;
            correct += Object.values(readingProgress.correct || {}).filter(Boolean).length;

            const times = timesData[readingName] || {};
            for (const t of Object.values(times)) {
                totalTime += t;
                timeCount++;
            }
        }

        const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        const avgTime = timeCount > 0 ? Math.round(totalTime / timeCount) : 0;
        topicStats.push({ name: topicName, accuracy, answered, correct, avgTime, color: config.color });

        globalAnswered += answered;
        globalCorrect += correct;
        globalTotalTime += totalTime;
        globalTimeCount += timeCount;
    }

    // Overall Stats
    const overallAccuracy = globalAnswered > 0 ? Math.round((globalCorrect / globalAnswered) * 100) : 0;
    const avgTimePerQ = globalTimeCount > 0 ? Math.round(globalTotalTime / globalTimeCount) : 0;
    const totalStudyMins = Math.round(globalTotalTime / 60);
    const totalStudyHours = totalStudyMins >= 60 ? (totalStudyMins / 60).toFixed(1) + 'h' : totalStudyMins + 'm';

    document.getElementById('overallAccuracy').textContent = overallAccuracy + '%';
    document.getElementById('totalAnswered').textContent = globalAnswered;
    document.getElementById('avgTimePerQ').textContent = avgTimePerQ + 's';
    document.getElementById('totalStudyTime').textContent = totalStudyHours;

    // Sort and render topic chart
    topicStats.sort((a, b) => b.accuracy - a.accuracy);

    for (const stat of topicStats) {
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
            <span class="chart-label">${stat.name}</span>
            <div class="chart-bar-container">
                <div class="chart-bar" style="width: ${stat.accuracy}%; background: ${stat.color}">
                    ${stat.accuracy > 10 ? `<span class="chart-value">${stat.accuracy}%</span>` : ''}
                </div>
            </div>
        `;
        chartContainer.appendChild(row);
    }

    // Time Analytics - Fastest/Slowest & Best/Worst
    const answeredTopics = topicStats.filter(t => t.answered > 2);
    if (answeredTopics.length > 0) {
        const byTime = [...answeredTopics].sort((a, b) => a.avgTime - b.avgTime);
        const byAccuracy = [...answeredTopics].sort((a, b) => b.accuracy - a.accuracy);

        document.getElementById('fastestTopic').textContent = byTime[0].name + ' (' + byTime[0].avgTime + 's)';
        document.getElementById('slowestTopic').textContent = byTime[byTime.length - 1].name + ' (' + byTime[byTime.length - 1].avgTime + 's)';
        document.getElementById('bestTopic').textContent = byAccuracy[0].name + ' (' + byAccuracy[0].accuracy + '%)';
        document.getElementById('worstTopic').textContent = byAccuracy[byAccuracy.length - 1].name + ' (' + byAccuracy[byAccuracy.length - 1].accuracy + '%)';
    }

    // Session stats
    document.getElementById('totalSessions').textContent = state.sessions.length;

    if (state.sessions.length > 0) {
        const avgDuration = state.sessions.reduce((sum, s) => sum + s.duration, 0) / state.sessions.length;
        const mins = Math.round(avgDuration / 60000);
        document.getElementById('avgSessionTime').textContent = mins + 'm';
    }

    // Today's questions & week's questions (estimate from sessions)
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const weekStart = todayStart - (7 * 24 * 60 * 60 * 1000);

    let todayQs = 0;
    let weekQs = 0;
    for (const session of state.sessions) {
        if (session.timestamp >= todayStart) todayQs += session.questionsAnswered || 0;
        if (session.timestamp >= weekStart) weekQs += session.questionsAnswered || 0;
    }
    document.getElementById('todayQuestions').textContent = todayQs;
    document.getElementById('weekQuestions').textContent = weekQs;

    // Study streak (simple calculation based on sessions)
    let streak = 0;
    if (state.sessions.length > 0) {
        const sessionDays = [...new Set(state.sessions.map(s => {
            const d = new Date(s.timestamp);
            return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        }))].sort().reverse();

        const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
        const yesterday = new Date(now - 86400000);
        const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;

        if (sessionDays[0] === today || sessionDays[0] === yesterdayStr) {
            streak = 1;
            for (let i = 1; i < sessionDays.length; i++) {
                // Simplified streak counting
                streak++;
                if (streak > 30) break;
            }
        }
    }
    document.getElementById('currentStreak').textContent = '🔥 ' + streak + ' day' + (streak !== 1 ? 's' : '');

    // Weak Areas (accuracy < 60%)
    const weakAreas = document.getElementById('weakAreas');
    const weakTopics = topicStats.filter(t => t.answered > 2 && t.accuracy < 60);

    if (weakTopics.length > 0) {
        weakAreas.innerHTML = weakTopics.map(t => `
            <div class="weak-item">
                <span class="weak-topic">${t.name}</span>
                <span class="weak-accuracy">${t.accuracy}%</span>
            </div>
        `).join('');
    } else {
        weakAreas.innerHTML = '<p class="empty-hint">No weak areas identified yet</p>';
    }

    // Strong Areas (accuracy >= 70%)
    const strongAreas = document.getElementById('strongAreas');
    const strongTopics = topicStats.filter(t => t.answered > 2 && t.accuracy >= 70);

    if (strongTopics.length > 0) {
        strongAreas.innerHTML = strongTopics.map(t => `
            <div class="strong-item">
                <span class="strong-topic">${t.name}</span>
                <span class="strong-accuracy">${t.accuracy}%</span>
            </div>
        `).join('');
    } else {
        strongAreas.innerHTML = '<p class="empty-hint">Complete more questions to identify strong areas</p>';
    }

    // Milestones
    const milestones = document.getElementById('milestones');
    const milestoneChecks = [
        { condition: globalAnswered >= 100, icon: '🎯', text: 'Complete 100 questions' },
        { condition: overallAccuracy >= 70, icon: '🏆', text: 'Reach 70% overall accuracy' },
        { condition: totalStudyMins >= 600, icon: '⏰', text: 'Study 10 hours total' },
        { condition: streak >= 7, icon: '🔥', text: '7-day study streak' }
    ];

    milestones.innerHTML = milestoneChecks.map(m => `
        <div class="milestone ${m.condition ? 'achieved' : ''}">
            <span class="milestone-icon ${m.condition ? '' : 'locked'}">${m.condition ? m.icon : '🔒'}</span>
            <span class="milestone-text">${m.text}</span>
        </div>
    `).join('');
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        state.progress = {};
        state.sessions = [];
        state.questionTimes = {};
        state.currentTopic = null;
        state.currentReading = null;
        state.currentQuestionIndex = 0;
        saveState();
        renderAnalytics();
        alert('Progress has been reset.');
    }
}



// ==========================================
// MOCK EXAM LOGIC (Clean Rebuild)
// ==========================================

// Mock exam state
let mockState = {
    active: false,
    mockId: null,
    session: null,
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: {},
    startTime: null,
    timerInterval: null,
    timeRemaining: 135 * 60 // 2h15m in seconds
};

// Render mock exam selection grid
function renderMockSelection() {
    const mockGrid = document.getElementById('mockGrid');
    if (!mockGrid) return;

    mockGrid.innerHTML = '';

    for (let i = 1; i <= 6; i++) {
        const s1Key = `mock_${i}_s1_completed`;
        const s2Key = `mock_${i}_s2_completed`;
        const s1Done = localStorage.getItem(s1Key) === 'true';
        const s2Done = localStorage.getItem(s2Key) === 'true';

        const card = document.createElement('div');
        card.className = 'mock-card';
        card.innerHTML = `
            <div class="mock-card-header">
                <span class="mock-card-title">Mock Exam ${i}</span>
                <span class="mock-card-badge ${s1Done && s2Done ? 'completed' : ''}">${s1Done && s2Done ? 'Completed' : 'Available'}</span>
            </div>
            <div class="mock-card-sessions">
                <button class="session-btn ${s1Done ? 'completed' : ''}" onclick="startMockExam(${i}, 1)">
                    Session 1 ${s1Done ? '✓' : ''}
                </button>
                <button class="session-btn ${s2Done ? 'completed' : ''}" onclick="startMockExam(${i}, 2)">
                    Session 2 ${s2Done ? '✓' : ''}
                </button>
            </div>
        `;
        mockGrid.appendChild(card);
    }
}

// Start a mock exam session
async function startMockExam(mockId, session) {
    const fileName = `MOCK ${mockId} SS${session} ANS_ocred.json`;
    const filePath = `data/mocks/${fileName}`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Could not load ${fileName}`);
        }

        const data = await response.json();

        if (!data.questions || data.questions.length === 0) {
            throw new Error('No questions found in mock exam file');
        }

        // Initialize mock state
        mockState = {
            active: true,
            mockId: mockId,
            session: session,
            questions: data.questions,
            currentIndex: 0,
            answers: {},
            flagged: {},
            startTime: Date.now(),
            timerInterval: null,
            timeRemaining: 135 * 60
        };

        // Hide selection, show exam interface
        const selection = document.getElementById('mockSelection');
        const examInterface = document.getElementById('mockExamInterface');

        if (selection) selection.style.display = 'none';
        if (examInterface) examInterface.style.display = 'block';

        // Update title
        const title = document.getElementById('mockTitle');
        if (title) title.textContent = `MOCK EXAM ${mockId} / SESSION ${session}`;

        // Render first question and start timer
        renderMockQuestion();
        renderMockNavigator();
        startMockTimer();

    } catch (error) {
        console.error('Error loading mock exam:', error);
        alert('Error loading mock exam: ' + error.message);
    }
}

// Render current mock question
function renderMockQuestion() {
    if (!mockState.active || mockState.questions.length === 0) return;

    const q = mockState.questions[mockState.currentIndex];
    if (!q) return;

    // Update question number
    const questionNum = document.getElementById('mockQuestionNum');
    if (questionNum) {
        questionNum.textContent = `Question ${mockState.currentIndex + 1} of ${mockState.questions.length}`;
    }

    // Update flag button
    const flagBtn = document.getElementById('mockFlagBtn');
    if (flagBtn) {
        const isFlagged = mockState.flagged[q.id];
        flagBtn.className = `mock-flag-btn ${isFlagged ? 'flagged' : ''}`;
        flagBtn.innerHTML = `<span class="flag-icon">⚑</span> ${isFlagged ? 'Flagged' : 'Flag for Review'}`;
    }

    // Update question content
    const content = document.getElementById('mockQuestionContent');
    if (content) {
        content.innerHTML = q.text;
    }

    // Update options
    const optionsContainer = document.getElementById('mockOptions');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const div = document.createElement('div');
            const isSelected = mockState.answers[q.id] === idx;
            div.className = `mock-option ${isSelected ? 'selected' : ''}`;
            div.onclick = () => selectMockAnswer(q.id, idx);
            div.innerHTML = `
                <span class="mock-option-key">${String.fromCharCode(65 + idx)}.</span>
                <span class="mock-option-text">${opt}</span>
            `;
            optionsContainer.appendChild(div);
        });
    }

    // Update nav buttons
    const prevBtn = document.getElementById('mockPrevBtn');
    const nextBtn = document.getElementById('mockNextBtn');

    if (prevBtn) prevBtn.disabled = mockState.currentIndex === 0;
    if (nextBtn) {
        nextBtn.textContent = mockState.currentIndex === mockState.questions.length - 1 ? 'Finish' : 'Next →';
    }
}

// Select an answer
function selectMockAnswer(questionId, answerIndex) {
    mockState.answers[questionId] = answerIndex;
    renderMockQuestion();
    renderMockNavigator();
}

// Toggle flag on current question
function toggleMockFlag() {
    const q = mockState.questions[mockState.currentIndex];
    if (q) {
        mockState.flagged[q.id] = !mockState.flagged[q.id];
        renderMockQuestion();
        renderMockNavigator();
    }
}

// Navigate to next question
function mockNextQuestion() {
    if (mockState.currentIndex < mockState.questions.length - 1) {
        mockState.currentIndex++;
        renderMockQuestion();
        renderMockNavigator();
    } else {
        confirmEndExam();
    }
}

// Navigate to previous question
function mockPrevQuestion() {
    if (mockState.currentIndex > 0) {
        mockState.currentIndex--;
        renderMockQuestion();
        renderMockNavigator();
    }
}

// Jump to specific question
function jumpToMockQuestion(index) {
    mockState.currentIndex = index;
    renderMockQuestion();
    renderMockNavigator();
}

// Render question navigator
function renderMockNavigator() {
    const grid = document.getElementById('navigatorGrid');
    if (!grid) return;

    grid.innerHTML = '';

    mockState.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-question-btn';

        if (idx === mockState.currentIndex) btn.classList.add('current');
        if (mockState.answers[q.id] !== undefined) btn.classList.add('answered');
        if (mockState.flagged[q.id]) btn.classList.add('flagged');

        btn.textContent = idx + 1;
        btn.onclick = () => jumpToMockQuestion(idx);
        grid.appendChild(btn);
    });

    // Update summary
    const answeredEl = document.getElementById('answeredSummary');
    const flaggedEl = document.getElementById('flaggedSummary');

    if (answeredEl) {
        answeredEl.textContent = `${Object.keys(mockState.answers).length}/${mockState.questions.length}`;
    }
    if (flaggedEl) {
        flaggedEl.textContent = Object.values(mockState.flagged).filter(Boolean).length;
    }
}

// Start the mock exam timer
function startMockTimer() {
    if (mockState.timerInterval) {
        clearInterval(mockState.timerInterval);
    }

    updateMockTimerDisplay();

    mockState.timerInterval = setInterval(() => {
        mockState.timeRemaining--;
        updateMockTimerDisplay();

        if (mockState.timeRemaining <= 0) {
            clearInterval(mockState.timerInterval);
            alert('Time is up! Submitting your exam...');
            endMockSession();
        }
    }, 1000);
}

// Update timer display
function updateMockTimerDisplay() {
    const display = document.getElementById('mockTimerDisplay');
    const container = document.getElementById('mockTimer');

    if (!display) return;

    const hours = Math.floor(mockState.timeRemaining / 3600);
    const mins = Math.floor((mockState.timeRemaining % 3600) / 60);
    const secs = mockState.timeRemaining % 60;

    display.textContent = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (container) {
        container.classList.remove('warning', 'danger');
        if (mockState.timeRemaining < 300) {
            container.classList.add('danger');
        } else if (mockState.timeRemaining < 600) {
            container.classList.add('warning');
        }
    }
}

// Confirm end exam
function confirmEndExam() {
    const answered = Object.keys(mockState.answers).length;
    const modal = document.getElementById('endExamModal');
    const countEl = document.getElementById('answeredCountModal');

    if (countEl) countEl.textContent = answered;
    if (modal) modal.style.display = 'flex';
}

// Close end exam modal
function closeEndExamModal() {
    const modal = document.getElementById('endExamModal');
    if (modal) modal.style.display = 'none';
}

// End the mock exam session
function endMockSession(discard = false) {
    if (mockState.timerInterval) {
        clearInterval(mockState.timerInterval);
    }

    closeEndExamModal();

    if (discard) {
        exitMockExam();
        return;
    }

    // Calculate score
    let correct = 0;
    mockState.questions.forEach(q => {
        if (mockState.answers[q.id] === q.correctAnswerIndex) {
            correct++;
        }
    });

    const total = mockState.questions.length;
    const percent = Math.round((correct / total) * 100);
    const timeUsed = (135 * 60) - mockState.timeRemaining;

    // Save result
    const key = `mock_${mockState.mockId}_s${mockState.session}`;
    localStorage.setItem(`${key}_completed`, 'true');
    localStorage.setItem(`${key}_score`, JSON.stringify({
        correct: correct,
        total: total,
        percent: percent,
        timeUsed: timeUsed,
        date: new Date().toISOString()
    }));

    // Show results
    showMockResults(correct, total, percent, timeUsed);
}

// Show mock exam results
function showMockResults(correct, total, percent, timeUsed) {
    const examInterface = document.getElementById('mockExamInterface');
    const resultsScreen = document.getElementById('mockResultsScreen');

    if (examInterface) examInterface.style.display = 'none';
    if (resultsScreen) resultsScreen.style.display = 'flex';

    const titleEl = document.getElementById('resultsMockTitle');
    const scoreEl = document.getElementById('overallScore');
    const circleEl = document.getElementById('overallScoreCircle');

    if (titleEl) titleEl.textContent = `Mock ${mockState.mockId} Session ${mockState.session}`;
    if (scoreEl) scoreEl.textContent = `${percent}%`;

    if (circleEl) {
        circleEl.style.background = percent >= 70
            ? 'linear-gradient(135deg, var(--accent-success), #4ade80)'
            : 'linear-gradient(135deg, var(--accent-warning), #fbbf24)';
    }

    // Format time
    const mins = Math.floor(timeUsed / 60);
    const secs = timeUsed % 60;
    const timeStr = `${mins}m ${secs}s`;

    // Update session details
    const sessionKey = mockState.session === 1 ? '1' : '2';
    const scoreDetailEl = document.getElementById(`session${sessionKey}Score`);
    const percentDetailEl = document.getElementById(`session${sessionKey}Percent`);
    const timeDetailEl = document.getElementById(`timeUsedS${sessionKey}`);

    if (scoreDetailEl) scoreDetailEl.textContent = `${correct}/${total}`;
    if (percentDetailEl) percentDetailEl.textContent = `${percent}%`;
    if (timeDetailEl) timeDetailEl.textContent = timeStr;
}

// Exit mock exam
function exitMockExam() {
    mockState.active = false;

    if (mockState.timerInterval) {
        clearInterval(mockState.timerInterval);
    }

    // Hide mock screens
    const examInterface = document.getElementById('mockExamInterface');
    const breakScreen = document.getElementById('mockBreakScreen');
    const resultsScreen = document.getElementById('mockResultsScreen');
    const selection = document.getElementById('mockSelection');

    if (examInterface) examInterface.style.display = 'none';
    if (breakScreen) breakScreen.style.display = 'none';
    if (resultsScreen) resultsScreen.style.display = 'none';
    if (selection) selection.style.display = 'block';

    // Refresh selection to show updated status
    renderMockSelection();

    // Go back to home
    showView('home');
}

// Review mock exam (placeholder)
function reviewMockExam() {
    alert('Review functionality coming soon!');
}

// ==========================================
// PREMIUM PACK LOGIC
// ==========================================

const PREMIUM_TOPICS = {
    'Ethics Q_ocred.json': 'Ethics',
    'QM Q_ocred.json': 'Quantitative Methods',
    'Eco Q_ocred.json': 'Economics',
    'FSA Q_ocred.json': 'Financial Statement Analysis',
    'CI Q_ocred.json': 'Corporate Issuers',
    'EI Q_ocred.json': 'Equity Investments',
    'FI Q_ocred.json': 'Fixed Income',
    'Derivatives Q_ocred.json': 'Derivatives',
    'AI Q_ocred.json': 'Alternative Investments',
    'PM Q_ocred.json': 'Portfolio Management'
};

function renderPremiumSelection() {
    const grid = document.getElementById('premiumGrid');
    grid.innerHTML = '';

    Object.entries(PREMIUM_TOPICS).forEach(([filename, title]) => {
        const card = document.createElement('div');
        card.className = 'mock-card'; // Reuse mock card styling

        card.innerHTML = `
            <div class="mock-card-header">
                <span class="mock-card-title">${title}</span>
                <span class="mock-card-badge">Premium</span>
            </div>
            <div class="mock-card-sessions">
                <button class="session-btn" onclick="startPremiumExam('${filename}', '${title}')">
                    Start Practice
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

async function startPremiumExam(filename, title) {
    try {
        const response = await fetch(`data/premium/${filename}`);
        if (!response.ok) throw new Error('Premium file not found');
        const data = await response.json();

        // Store premium questions in state using a special topic name
        const premiumTopicName = `Premium: ${title}`;
        const premiumReadingName = title;

        // Initialize storage for this premium topic
        if (!state.allQuestions[premiumTopicName]) {
            state.allQuestions[premiumTopicName] = {};
        }
        state.allQuestions[premiumTopicName][premiumReadingName] = data.questions || [];

        if (!state.progress[premiumTopicName]) {
            state.progress[premiumTopicName] = {};
        }
        if (!state.progress[premiumTopicName][premiumReadingName]) {
            state.progress[premiumTopicName][premiumReadingName] = { answered: {}, correct: {}, flagged: {} };
        }

        if (!state.questionTimes[premiumTopicName]) {
            state.questionTimes[premiumTopicName] = {};
        }
        if (!state.questionTimes[premiumTopicName][premiumReadingName]) {
            state.questionTimes[premiumTopicName][premiumReadingName] = {};
        }

        // Set current state to this premium topic/reading
        state.currentTopic = premiumTopicName;
        state.currentReading = premiumReadingName;
        state.currentQuestionIndex = 0;
        state.selectedAnswer = null;
        state.hasAnswered = false;
        state.currentSessionStart = Date.now();
        state.currentSessionResults = [];

        // Switch to quiz view and show quiz interface
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById('quizView').classList.add('active');
        document.getElementById('topicSelector').style.display = 'none';
        document.getElementById('quizInterface').style.display = 'block';

        renderQuestion();
        startQuestionTimer();
        saveState();

    } catch (e) {
        alert("Error loading premium content: " + e.message);
        console.error(e);
    }
}



// Update showView to handle Mock Exam and Logo
const originalShowView = showView;
showView = function (viewName) {

    if (viewName === 'mockExam') {
        renderMockSelection();
    }

    if (viewName === 'premium') {
        renderPremiumSelection();
    }

    // Call original logic references manually since we are overriding global function
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const viewEl = document.getElementById(viewName + 'View');
    if (viewEl) viewEl.classList.add('active');

    const linkEl = document.querySelector(`.nav-link[data-view="${viewName}"]`);
    if (linkEl) linkEl.classList.add('active');

    if (viewName === 'home') renderDashboard();
    if (viewName === 'analytics') renderAnalytics();
    if (viewName === 'flagged') renderFlagged();
    if (viewName === 'quiz') {
        if (!state.currentTopic) {
            showTopicSelector();
        }
    }
};

// Utilities
function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}
