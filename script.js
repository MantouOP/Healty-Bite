/* ============================================================
   Healthy Bite — Complete JavaScript
   All app logic: data, navigation, calculators, meal planning,
   premium features, export, and more.
   ============================================================ */

// ──────────────────────────────────────────────────────────────
// 1. SAMPLE DATA — Recipes, Calorie DB, Nutrition DB
// ──────────────────────────────────────────────────────────────

/**
 * Each recipe contains: name, type (breakfast/lunch/dinner),
 * category (meat/vegetarian), calories, ingredients, allergens,
 * nutrition details, emoji icon, and short preparation steps.
 */
const recipes = [
  {
    id: 1,
    name: "Oatmeal with Banana",
    type: "breakfast",
    category: "vegetarian",
    calories: 310,
    icon: "🥣",
    ingredients: ["Rolled oats", "Banana", "Honey", "Almond milk", "Cinnamon"],
    allergens: ["gluten"],
    steps: "Cook oats in almond milk for 5 min. Top with sliced banana, drizzle honey, and sprinkle cinnamon.",
    nutrition: { protein: 8, carbs: 55, fat: 6, sugar: 18, sodium: 45, fibre: 7 }
  },
  {
    id: 2,
    name: "Avocado Toast",
    type: "breakfast",
    category: "vegetarian",
    calories: 280,
    icon: "🥑",
    ingredients: ["Whole grain bread", "Avocado", "Cherry tomatoes", "Lemon juice", "Salt & pepper", "Chili flakes"],
    allergens: ["gluten"],
    steps: "Toast bread. Mash avocado with lemon juice, salt, and pepper. Spread on toast, top with tomatoes and chili flakes.",
    nutrition: { protein: 7, carbs: 30, fat: 16, sugar: 3, sodium: 290, fibre: 9 }
  },
  {
    id: 3,
    name: "Grilled Chicken Salad",
    type: "lunch",
    category: "meat",
    calories: 350,
    icon: "🥗",
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon dressing"],
    allergens: [],
    steps: "Grill seasoned chicken breast for 6-7 min per side. Toss greens, tomatoes, and cucumber. Slice chicken on top, drizzle dressing.",
    nutrition: { protein: 35, carbs: 12, fat: 18, sugar: 4, sodium: 380, fibre: 4 }
  },
  {
    id: 4,
    name: "Brown Rice Chicken Bowl",
    type: "lunch",
    category: "meat",
    calories: 480,
    icon: "🍚",
    ingredients: ["Brown rice", "Chicken thigh", "Broccoli", "Soy sauce", "Sesame seeds", "Garlic"],
    allergens: ["gluten"],
    steps: "Cook brown rice. Stir-fry diced chicken with garlic and soy sauce. Steam broccoli. Assemble bowl and top with sesame seeds.",
    nutrition: { protein: 32, carbs: 58, fat: 12, sugar: 3, sodium: 620, fibre: 5 }
  },
  {
    id: 5,
    name: "Salmon with Vegetables",
    type: "dinner",
    category: "meat",
    calories: 420,
    icon: "🐟",
    ingredients: ["Salmon fillet", "Asparagus", "Sweet potato", "Olive oil", "Lemon", "Dill"],
    allergens: ["seafood"],
    steps: "Season salmon with lemon and dill. Bake at 200°C for 15 min with asparagus and sweet potato cubes tossed in olive oil.",
    nutrition: { protein: 38, carbs: 28, fat: 18, sugar: 6, sodium: 320, fibre: 5 }
  },
  {
    id: 6,
    name: "Vegetarian Buddha Bowl",
    type: "lunch",
    category: "vegetarian",
    calories: 390,
    icon: "🥙",
    ingredients: ["Quinoa", "Chickpeas", "Avocado", "Sweet potato", "Kale", "Tahini dressing"],
    allergens: [],
    steps: "Cook quinoa. Roast chickpeas and sweet potato at 200°C for 20 min. Arrange in a bowl with kale and avocado, drizzle tahini.",
    nutrition: { protein: 14, carbs: 52, fat: 15, sugar: 8, sodium: 280, fibre: 12 }
  },
  {
    id: 7,
    name: "Egg Sandwich",
    type: "breakfast",
    category: "vegetarian",
    calories: 320,
    icon: "🥪",
    ingredients: ["Whole wheat bread", "Eggs", "Spinach", "Cheese", "Tomato", "Butter"],
    allergens: ["gluten", "egg", "dairy"],
    steps: "Scramble eggs with spinach. Toast bread with butter. Layer eggs, cheese, and tomato slices between bread.",
    nutrition: { protein: 18, carbs: 30, fat: 14, sugar: 4, sodium: 480, fibre: 4 }
  },
  {
    id: 8,
    name: "Greek Yogurt Parfait",
    type: "breakfast",
    category: "vegetarian",
    calories: 250,
    icon: "🍨",
    ingredients: ["Greek yogurt", "Granola", "Mixed berries", "Honey", "Chia seeds"],
    allergens: ["dairy", "gluten"],
    steps: "Layer Greek yogurt, granola, and berries in a glass. Drizzle with honey and sprinkle chia seeds on top.",
    nutrition: { protein: 15, carbs: 35, fat: 7, sugar: 20, sodium: 60, fibre: 4 }
  },
  {
    id: 9,
    name: "Tofu Stir Fry",
    type: "dinner",
    category: "vegetarian",
    calories: 340,
    icon: "🍜",
    ingredients: ["Firm tofu", "Bell peppers", "Broccoli", "Soy sauce", "Ginger", "Brown rice noodles"],
    allergens: ["gluten"],
    steps: "Press and cube tofu, pan-fry until golden. Stir-fry peppers and broccoli with ginger. Add soy sauce, combine with noodles.",
    nutrition: { protein: 20, carbs: 38, fat: 12, sugar: 6, sodium: 580, fibre: 6 }
  },
  {
    id: 10,
    name: "Chicken Wrap",
    type: "lunch",
    category: "meat",
    calories: 410,
    icon: "🌯",
    ingredients: ["Tortilla wrap", "Grilled chicken", "Lettuce", "Tomato", "Greek yogurt sauce", "Onion"],
    allergens: ["gluten", "dairy"],
    steps: "Grill seasoned chicken, slice thinly. Warm tortilla. Layer lettuce, tomato, onion, chicken, and drizzle yogurt sauce. Roll tightly.",
    nutrition: { protein: 30, carbs: 40, fat: 14, sugar: 5, sodium: 520, fibre: 3 }
  },
  {
    id: 11,
    name: "Peanut Butter Smoothie Bowl",
    type: "breakfast",
    category: "vegetarian",
    calories: 370,
    icon: "🥜",
    ingredients: ["Banana", "Peanut butter", "Almond milk", "Oats", "Dark chocolate chips", "Strawberries"],
    allergens: ["peanuts", "gluten"],
    steps: "Blend frozen banana, peanut butter, oats, and almond milk until thick. Pour into bowl, top with strawberries and chocolate chips.",
    nutrition: { protein: 14, carbs: 48, fat: 16, sugar: 22, sodium: 140, fibre: 6 }
  },
  {
    id: 12,
    name: "Shrimp Stir Fry",
    type: "dinner",
    category: "meat",
    calories: 360,
    icon: "🦐",
    ingredients: ["Shrimp", "Garlic", "Snow peas", "Carrot", "Soy sauce", "Jasmine rice"],
    allergens: ["seafood", "gluten"],
    steps: "Sauté garlic, add shrimp and cook 2 min per side. Toss in vegetables, season with soy sauce. Serve over jasmine rice.",
    nutrition: { protein: 28, carbs: 40, fat: 8, sugar: 5, sodium: 680, fibre: 3 }
  }
];

/**
 * Simple calorie database — maps food names to calories per serving.
 * Used for the calorie tracker autocomplete + lookup.
 */
const calorieDB = [
  { name: "Chicken rice", calories: 500, icon: "🍗" },
  { name: "Salad", calories: 150, icon: "🥗" },
  { name: "Egg", calories: 78, icon: "🥚" },
  { name: "Oatmeal", calories: 150, icon: "🥣" },
  { name: "Banana", calories: 105, icon: "🍌" },
  { name: "Grilled chicken", calories: 230, icon: "🍗" },
  { name: "Brown rice", calories: 215, icon: "🍚" },
  { name: "Avocado toast", calories: 280, icon: "🥑" },
  { name: "Greek yogurt", calories: 130, icon: "🍨" },
  { name: "Salmon fillet", calories: 280, icon: "🐟" },
  { name: "Tofu", calories: 144, icon: "🧈" },
  { name: "Almonds (30g)", calories: 170, icon: "🌰" },
  { name: "Apple", calories: 95, icon: "🍎" },
  { name: "Orange", calories: 62, icon: "🍊" },
  { name: "Whole wheat bread", calories: 130, icon: "🍞" },
  { name: "Milk (250ml)", calories: 150, icon: "🥛" },
  { name: "Chicken wrap", calories: 410, icon: "🌯" },
  { name: "Fried rice", calories: 470, icon: "🍳" },
  { name: "Pasta", calories: 380, icon: "🍝" },
  { name: "Smoothie", calories: 200, icon: "🥤" }
];

// ──────────────────────────────────────────────────────────────
// 2. APP STATE
// ──────────────────────────────────────────────────────────────

const GEMINI_API_KEY = "AIzaSyAU6X8AeNMKq4mlwHWOqYiJYPBoA5KDbCM";
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_14k3cE8qH9hE2eQ144"; // Replace with your real Stripe Payment Link

/**
 * Generic helper function to call the Gemini API
 * @param {string} prompt - The prompt to send to Gemini
 */
async function callGeminiAPI(prompt) {
  if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || !GEMINI_API_KEY) {
    throw new Error("Gemini API Key is missing.");
  }
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  if (!response.ok) throw new Error('API Request Failed');
  
  const data = await response.json();
  const aiText = data.candidates[0].content.parts[0].text.trim();
  
  // Try to parse as JSON if it looks like JSON
  let cleanStr = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(cleanStr);
  } catch (e) {
    return cleanStr; // Return raw text if not JSON
  }
}

let isPremium = false;       // Premium status — loaded from Firestore
let isLoggedIn = false;      // Login state — managed by Firebase Auth
let userName = "User";       // User's display name
let currentPage = "home";    // Current visible SPA section
let currentUser = null;      // Firebase Auth user object

// Food log for calorie tracker
let foodLog = [];

// Dashboard state
let userBMI = null;
let userBMICategory = "";
let userWaterGoal = null;
let rewardPoints = 0;
let mealPlanComplete = false;

// ──────────────────────────────────────────────────────────────
// 2b. FIRESTORE HELPERS — Save & Load user data
// ──────────────────────────────────────────────────────────────

/**
 * Save a specific data field to the current user's Firestore document.
 * All user data lives under: users/{userId}
 */
async function saveUserData(field, data) {
  if (!currentUser) return; // Not logged in, skip
  try {
    await db.collection('users').doc(currentUser.uid).set(
      { [field]: data, lastUpdated: firebase.firestore.FieldValue.serverTimestamp() },
      { merge: true }
    );
  } catch (err) {
    console.error(`Error saving ${field}:`, err);
  }
}

/**
 * Load all user data from Firestore and apply to app state.
 * Called when user logs in or on page load if already authenticated.
 */
async function loadUserData() {
  if (!currentUser) return;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (!doc.exists) {
      // First time user — create initial document
      await db.collection('users').doc(currentUser.uid).set({
        profile: { name: userName, email: currentUser.email, isPremium: false, rewardPoints: 0 },
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return;
    }

    const data = doc.data();

    // Restore profile
    if (data.profile) {
      isPremium = data.profile.isPremium || false;
      rewardPoints = data.profile.rewardPoints || 0;
      userName = data.profile.name || userName;
    }

    // Restore food log
    if (data.foodLog && Array.isArray(data.foodLog)) {
      foodLog = data.foodLog;
      renderFoodLog();
    }

    // Restore BMI
    if (data.bmi) {
      userBMI = data.bmi.bmi;
      userBMICategory = data.bmi.category;
    }

    // Restore water goal
    if (data.waterGoal) {
      userWaterGoal = data.waterGoal.litres;
    }

    // Restore meal plan completion
    if (data.mealPlan) {
      mealPlanComplete = data.mealPlan.complete || false;
    }

    // Apply premium UI
    updatePremiumUI();
    updateDashboard();

    console.log('📦 User data loaded from Firestore');
  } catch (err) {
    console.error('Error loading user data:', err);
  }
}

// ──────────────────────────────────────────────────────────────
// 3. NAVIGATION — SPA section switching
// ──────────────────────────────────────────────────────────────

/**
 * Navigate to a specific section of the SPA.
 * Hides all sections, shows the target, and updates active nav link.
 */
function navigate(page) {
  // Close mobile menu if open
  closeMobileMenu();

  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

  // Show target section
  const target = document.getElementById(page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
  }

  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update dashboard when navigating to it
  if (page === 'dashboard') updateDashboard();

  return false; // Prevent default link behavior
}

// ──────────────────────────────────────────────────────────────
// 4. MOBILE MENU
// ──────────────────────────────────────────────────────────────

function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navButtons = document.getElementById('navButtons');

  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
  navButtons.classList.toggle('mobile-open');
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navButtons = document.getElementById('navButtons');

  hamburger.classList.remove('open');
  navLinks.classList.remove('mobile-open');
  navButtons.classList.remove('mobile-open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ──────────────────────────────────────────────────────────────
// 5. AUTH — Firebase Authentication (Real)
// ──────────────────────────────────────────────────────────────

function openLoginModal() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('authModal').classList.add('show');
}

function openSignupModal() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('authModal').classList.add('show');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('show');
}

function toggleAuthForm() {
  const login = document.getElementById('loginForm');
  const signup = document.getElementById('signupForm');
  if (login.style.display === 'none') {
    login.style.display = 'block';
    signup.style.display = 'none';
  } else {
    login.style.display = 'none';
    signup.style.display = 'block';
  }
}

/**
 * Login with email & password using Firebase Auth.
 * Uses signInWithEmailAndPassword() from Firebase.
 */
async function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    showToast('Please enter both email and password.', 'error');
    return;
  }

  try {
    showToast('Signing in...', 'info');
    await auth.signInWithEmailAndPassword(email, password);
    // onAuthStateChanged will handle the rest
    closeAuthModal();
  } catch (error) {
    console.error('Login error:', error);
    const messages = {
      'auth/user-not-found': 'No account found with this email. Please sign up.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/too-many-requests': 'Too many attempts. Please try again later.',
      'auth/invalid-credential': 'Invalid email or password. Please try again.'
    };
    showToast(messages[error.code] || error.message, 'error');
  }
}

/**
 * Sign up with email & password using Firebase Auth.
 * Uses createUserWithEmailAndPassword() and updates the display name.
 */
async function signupUser() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (!name || !email || !password) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters.', 'error');
    return;
  }

  try {
    showToast('Creating your account...', 'info');
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // Set the user's display name
    await userCredential.user.updateProfile({ displayName: name });
    userName = name;

    // Create initial Firestore document for the new user
    await db.collection('users').doc(userCredential.user.uid).set({
      profile: { name: name, email: email, isPremium: false, rewardPoints: 0 },
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    closeAuthModal();
    // onAuthStateChanged will handle the rest
  } catch (error) {
    console.error('Signup error:', error);
    const messages = {
      'auth/email-already-in-use': 'An account with this email already exists. Try logging in.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/weak-password': 'Password is too weak. Use at least 6 characters.'
    };
    showToast(messages[error.code] || error.message, 'error');
  }
}

/**
 * Login with Google using Firebase Auth popup.
 * Uses signInWithPopup() with GoogleAuthProvider.
 */
async function socialLogin(provider) {
  if (provider === 'Google') {
    try {
      showToast('Opening Google sign-in...', 'info');
      await auth.signInWithPopup(googleProvider);
      closeAuthModal();
      // onAuthStateChanged will handle the rest
    } catch (error) {
      console.error('Google login error:', error);
      if (error.code !== 'auth/popup-closed-by-user') {
        showToast('Google sign-in failed: ' + error.message, 'error');
      }
    }
  } else if (provider === 'Apple') {
    // Apple Sign-In requires Apple Developer account
    showToast('Apple Sign-In coming soon! Use Google or email for now.', 'info');
  }
}

/**
 * Send a password reset email using Firebase Auth.
 */
async function forgotPassword() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) {
    showToast('Please enter your email address first.', 'error');
    return;
  }
  try {
    await auth.sendPasswordResetEmail(email);
    showToast('Password reset link sent! Check your email. 📧', 'success');
  } catch (error) {
    console.error('Password reset error:', error);
    showToast(error.code === 'auth/user-not-found' ? 'No account found with this email.' : error.message, 'error');
  }
}

/**
 * Logout user using Firebase Auth signOut().
 */
async function logoutUser() {
  try {
    await auth.signOut();
    // Reset local state
    isLoggedIn = false;
    currentUser = null;
    userName = "User";
    isPremium = false;
    foodLog = [];
    userBMI = null;
    userBMICategory = "";
    userWaterGoal = null;
    rewardPoints = 0;
    mealPlanComplete = false;

    updateAuthUI();
    updatePremiumUI();
    renderFoodLog();
    showToast('You have been logged out.', 'info');
    navigate('home');
  } catch (error) {
    console.error('Logout error:', error);
    showToast('Error signing out.', 'error');
  }
}

/**
 * Firebase Auth State Observer — runs automatically when auth state changes.
 * This is the central handler for login/logout events.
 */
auth.onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in
    currentUser = user;
    isLoggedIn = true;
    userName = user.displayName || user.email.split('@')[0];

    updateAuthUI();

    // Load user data from Firestore
    await loadUserData();

    showToast(`Welcome, ${userName}! 🎉`, 'success');
    console.log('🔑 User signed in:', user.email);

    // If on home page, navigate to dashboard
    if (currentPage === 'home') {
      navigate('dashboard');
    }
  } else {
    // User is signed out
    currentUser = null;
    isLoggedIn = false;
    userName = "User";
    updateAuthUI();
    console.log('🔓 User signed out');
  }
});

/** Update nav buttons based on login state */
function updateAuthUI() {
  document.getElementById('loginBtn').style.display = isLoggedIn ? 'none' : '';
  document.getElementById('signupBtn').style.display = isLoggedIn ? 'none' : '';
  document.getElementById('dashboardBtn').style.display = isLoggedIn ? '' : 'none';
  document.getElementById('logoutBtn').style.display = isLoggedIn ? '' : 'none';
}

// ──────────────────────────────────────────────────────────────
// 6. BMI CALCULATOR
// ──────────────────────────────────────────────────────────────

/**
 * Calculates BMI from height (cm) and weight (kg).
 * Formula: BMI = weight / (height_in_meters)^2
 * Categories: Underweight < 18.5, Normal 18.5-24.9, Overweight 25-29.9, Obese >= 30
 */
function calculateBMI() {
  const height = parseFloat(document.getElementById('bmiHeight').value);
  const weight = parseFloat(document.getElementById('bmiWeight').value);

  // Validate inputs
  if (!height || !weight || height <= 0 || weight <= 0) {
    showToast('Please enter valid height and weight values.', 'error');
    return;
  }

  // Calculate BMI
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  // Determine category
  let category, categoryClass, message;
  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
    message = "You're below the healthy weight range. Consider consulting a nutritionist for a balanced diet plan.";
  } else if (bmi < 25) {
    category = "Normal";
    categoryClass = "normal";
    message = "Great job! You're within the healthy weight range. Keep maintaining your balanced lifestyle! 💪";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryClass = "overweight";
    message = "You're slightly above the healthy range. Regular exercise and a balanced diet can help.";
  } else {
    category = "Obese";
    categoryClass = "obese";
    message = "Consider consulting a healthcare professional for personalized advice on reaching a healthier weight.";
  }

  // Display results
  document.getElementById('bmiValue').textContent = bmiRounded;
  const catEl = document.getElementById('bmiCategory');
  catEl.textContent = category;
  catEl.className = `result-category ${categoryClass}`;
  catEl.style.display = 'inline-block';
  document.getElementById('bmiMessage').textContent = message;

  // Save for dashboard + Firestore
  userBMI = bmiRounded;
  userBMICategory = category;
  saveUserData('bmi', { height, weight, bmi: bmiRounded, category });

  showToast(`Your BMI is ${bmiRounded} — ${category}`, 'success');
}

// ──────────────────────────────────────────────────────────────
// 7. WATER INTAKE CALCULATOR
// ──────────────────────────────────────────────────────────────

/**
 * Calculates daily water intake.
 * Formula: weight (kg) × 35 ml
 * Displays result in ml and litres, plus visual glasses.
 */
function calculateWaterIntake() {
  const weight = parseFloat(document.getElementById('waterWeight').value);

  if (!weight || weight <= 0) {
    showToast('Please enter a valid body weight.', 'error');
    return;
  }

  // Calculate
  const waterML = Math.round(weight * 35);
  const waterL = (waterML / 1000).toFixed(2);
  const glasses = Math.ceil(waterML / 250); // ~250ml per glass

  // Display
  document.getElementById('waterML').textContent = waterML.toLocaleString();
  document.getElementById('waterLabel').textContent = 'ml per day';
  document.getElementById('waterLitres').textContent = `= ${waterL} litres`;

  // Render glass emojis with staggered animation
  const glassContainer = document.getElementById('waterGlasses');
  glassContainer.innerHTML = '';
  for (let i = 0; i < Math.min(glasses, 16); i++) {
    const span = document.createElement('span');
    span.className = 'water-glass';
    span.textContent = '💧';
    span.style.animationDelay = `${i * 0.08}s`;
    glassContainer.appendChild(span);
  }

  document.getElementById('waterMessage').textContent =
    `That's about ${glasses} glasses of water (250ml each). Stay hydrated! 💪`;

  // Save for dashboard + Firestore
  userWaterGoal = waterL;
  saveUserData('waterGoal', { weight, ml: waterML, litres: waterL });

  showToast(`Drink ${waterL}L of water daily! 💧`, 'success');
}

// ──────────────────────────────────────────────────────────────
// 8. CALORIE TRACKER
// ──────────────────────────────────────────────────────────────

/** Show autocomplete suggestions as user types food name */
function showAutoComplete() {
  const input = document.getElementById('foodInput').value.toLowerCase().trim();
  const list = document.getElementById('autoCompleteList');

  if (!input) {
    list.classList.remove('show');
    return;
  }

  // Filter matching foods from calorieDB
  const matches = calorieDB.filter(f => f.name.toLowerCase().includes(input));

  if (matches.length === 0) {
    list.classList.remove('show');
    return;
  }

  list.innerHTML = matches.map(f => `
    <div class="autocomplete-item" onclick="selectFood('${f.name}')">
      <span>${f.icon} ${f.name}</span>
      <span class="ac-cal">${f.calories} kcal</span>
    </div>
  `).join('');
  list.classList.add('show');
}

/** Select a food from autocomplete dropdown */
function selectFood(name) {
  document.getElementById('foodInput').value = name;
  document.getElementById('autoCompleteList').classList.remove('show');
}

// Close autocomplete when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.autocomplete-wrapper')) {
    document.getElementById('autoCompleteList').classList.remove('show');
  }
});

/** Add selected food to the daily log */
async function addFoodToLog() {
  const foodName = document.getElementById('foodInput').value.trim();
  const qty = parseFloat(document.getElementById('foodQty').value) || 1;
  const btn = document.getElementById('addFoodBtn');

  if (!foodName) {
    showToast('Please enter or select a food item.', 'error');
    return;
  }

  // Look up calories in database first (fast path)
  const found = calorieDB.find(f => f.name.toLowerCase() === foodName.toLowerCase());
  
  let calories, icon;

  if (found) {
    calories = Math.round(found.calories * qty);
    icon = found.icon;
    finishAddingFood(foodName, qty, calories, icon);
  } else {
    // If not found, use Gemini AI to estimate
    if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || !GEMINI_API_KEY) {
      showToast('AI API Key is missing. Using default 200 kcal.', 'warning');
      calories = Math.round(200 * qty);
      icon = "🍽️";
      finishAddingFood(foodName, qty, calories, icon);
      return;
    }

    try {
      // Show loading state on button
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Estimating...';
      btn.disabled = true;

      const prompt = `Estimate the calories for 1 serving of '${foodName}'. Respond ONLY with a valid JSON object in this exact format: {"calories": 250, "icon": "🍔"}. Do not include markdown formatting or any other text.`;
      
      const aiResult = await callGeminiAPI(prompt);
      
      calories = Math.round(aiResult.calories * qty);
      icon = aiResult.icon || "🍽️";

      finishAddingFood(foodName, qty, calories, icon);
    } catch (err) {
      console.error('AI Estimation error:', err);
      showToast('AI estimation failed. Using default 200 kcal.', 'error');
      calories = Math.round(200 * qty);
      icon = "🍽️";
      finishAddingFood(foodName, qty, calories, icon);
    } finally {
      // Restore button
      btn.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Log';
      btn.disabled = false;
    }
  }
}

function finishAddingFood(foodName, qty, calories, icon) {
  // Add to log
  foodLog.push({ name: foodName, qty, calories, icon, id: Date.now() });

  // Clear input
  document.getElementById('foodInput').value = '';
  document.getElementById('foodQty').value = '1';

  // Re-render log + save to Firestore
  renderFoodLog();
  saveUserData('foodLog', foodLog.map(f => ({ name: f.name, qty: f.qty, calories: f.calories, icon: f.icon, id: f.id })));
  showToast(`Added ${foodName} (${calories} kcal)`, 'success');
}

/** Remove a food item from the log */
function removeFood(id) {
  foodLog = foodLog.filter(f => f.id !== id);
  renderFoodLog();
  saveUserData('foodLog', foodLog.map(f => ({ name: f.name, qty: f.qty, calories: f.calories, icon: f.icon, id: f.id })));
}

/** Render the food log list and update total calories */
function renderFoodLog() {
  const container = document.getElementById('foodLogList');
  const totalCalEl = document.getElementById('totalCalDisplay');

  if (foodLog.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px;font-size:.9rem;">No food logged yet. Start adding meals above!</p>';
    totalCalEl.textContent = '0';
    return;
  }

  const totalCal = foodLog.reduce((sum, f) => sum + f.calories, 0);
  totalCalEl.textContent = totalCal.toLocaleString();

  container.innerHTML = foodLog.map(f => `
    <div class="food-log-item">
      <div>
        <div class="food-name">${f.icon} ${f.name}</div>
        <div class="food-qty">${f.qty} serving(s)</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span class="food-cals">${f.calories} kcal</span>
        <span class="remove-food" onclick="removeFood(${f.id})"><i class="fa-solid fa-trash-can"></i></span>
      </div>
    </div>
  `).join('');
}

/** Render quick calorie reference list */
function renderQuickRef() {
  const container = document.getElementById('quickRefList');
  container.innerHTML = calorieDB.slice(0, 10).map(f => `
    <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-100);font-size:.88rem;">
      <span>${f.icon} ${f.name}</span>
      <span style="font-weight:600;color:var(--primary);">${f.calories} kcal</span>
    </div>
  `).join('');
}

// ──────────────────────────────────────────────────────────────
// 9. RECIPE RENDERING & FILTERING
// ──────────────────────────────────────────────────────────────

let activeDiet = 'all';    // Current diet filter
let activeAllergies = [];  // Currently selected allergens to exclude

/** Render all recipe cards into the grid */
function renderRecipes() {
  const grid = document.getElementById('recipesGrid');
  const mealType = document.getElementById('mealTypeFilter').value;

  // Filter recipes based on diet, meal type, and allergies
  let filtered = recipes.filter(r => {
    if (activeDiet !== 'all' && r.category !== activeDiet) return false;
    if (mealType !== 'all' && r.type !== mealType) return false;
    if (activeAllergies.length > 0) {
      const hasAllergen = r.allergens.some(a => activeAllergies.includes(a));
      if (hasAllergen) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">
        <i class="fa-solid fa-face-frown" style="font-size:3rem;margin-bottom:16px;display:block;"></i>
        <p style="font-size:1.1rem;font-weight:600;">No recipes match your filters.</p>
        <p style="font-size:.9rem;">Try adjusting your diet or allergy preferences.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => `
    <div class="recipe-card">
      <div class="recipe-card-header">${r.icon}</div>
      <div class="recipe-card-body">
        <h3>${r.name}</h3>
        <div class="recipe-meta">
          <span class="tag-${r.type}">${capitalize(r.type)}</span>
          <span class="tag-${r.category}">${r.category === 'meat' ? '🥩 Meat' : '🥦 Vegetarian'}</span>
          <span class="tag-calories">🔥 ${r.calories} kcal</span>
        </div>
        <h4>Ingredients</h4>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h4>Preparation</h4>
        <p class="steps">${r.steps}</p>
        ${r.allergens.length ? `
          <div class="recipe-allergens">
            ${r.allergens.map(a => `<span class="allergen-tag">⚠️ ${capitalize(a)}</span>`).join('')}
          </div>` : ''}
      </div>
    </div>
  `).join('');
}

/** Filter by diet type (all / meat / vegetarian) */
function filterDiet(diet, btn) {
  activeDiet = diet;
  document.querySelectorAll('.diet-toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderRecipes();
}

/** Toggle allergy chip and refilter */
function toggleAllergyChip(chip) {
  chip.classList.toggle('active');
  const checkbox = chip.querySelector('input');
  checkbox.checked = !checkbox.checked;

  // Rebuild active allergies list
  activeAllergies = [];
  document.querySelectorAll('.allergy-chip input:checked').forEach(cb => {
    activeAllergies.push(cb.value);
  });

  renderRecipes();
}

/** Trigger recipe refilter from meal type dropdown */
function filterRecipes() {
  renderRecipes();
}

// ──────────────────────────────────────────────────────────────
// 10. MEAL PLANNER — Daily Plan + Reward
// ──────────────────────────────────────────────────────────────

/** Populate meal plan dropdowns with recipes of matching types */
function populateMealPlanDropdowns() {
  const breakfasts = recipes.filter(r => r.type === 'breakfast');
  const lunches = recipes.filter(r => r.type === 'lunch');
  const dinners = recipes.filter(r => r.type === 'dinner');

  const bSelect = document.getElementById('planBreakfast');
  const lSelect = document.getElementById('planLunch');
  const dSelect = document.getElementById('planDinner');

  // Keep first placeholder option, add recipes
  breakfasts.forEach(r => {
    bSelect.innerHTML += `<option value="${r.id}">${r.icon} ${r.name} (${r.calories} kcal)</option>`;
  });
  lunches.forEach(r => {
    lSelect.innerHTML += `<option value="${r.id}">${r.icon} ${r.name} (${r.calories} kcal)</option>`;
  });
  dinners.forEach(r => {
    dSelect.innerHTML += `<option value="${r.id}">${r.icon} ${r.name} (${r.calories} kcal)</option>`;
  });
}

/** Check if user completed all 3 meals — show reward */
function checkMealPlanComplete() {
  const b = document.getElementById('planBreakfast').value;
  const l = document.getElementById('planLunch').value;
  const d = document.getElementById('planDinner').value;

  if (b && l && d) {
    document.getElementById('rewardBanner').classList.add('show');
    if (!mealPlanComplete) {
      // Only award points once per completion
      mealPlanComplete = true;
      rewardPoints += 10;
      saveUserData('profile', { name: userName, email: currentUser?.email || '', isPremium, rewardPoints });
      saveUserData('mealPlan', { breakfast: b, lunch: l, dinner: d, complete: true });
      showToast('🎉 Meal plan completed! +10 Points!', 'success');
    }
  } else {
    document.getElementById('rewardBanner').classList.remove('show');
  }
}

// ──────────────────────────────────────────────────────────────
// 11. TABS — Generic tab switcher
// ──────────────────────────────────────────────────────────────

function switchTab(tabId, btn) {
  // Check premium for locked tabs
  const premiumTabs = ['weekly-plan', 'goal-meals', 'grocery-list', 'nutrition-analysis', 'nutrition-report'];
  if (premiumTabs.includes(tabId) && !isPremium) {
    showToast('🔒 This is a Premium feature. Upgrade to unlock!', 'error');
    navigate('premium');
    return;
  }

  // Find sibling tabs & contents
  const tabContainer = btn.closest('.tabs');
  const contentContainer = tabContainer.parentElement;

  tabContainer.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  contentContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const target = contentContainer.querySelector('#' + tabId);
  if (target) target.classList.add('active');

  // Render premium tab content
  if (tabId === 'weekly-plan') renderWeeklyPlan();
  if (tabId === 'goal-meals') renderGoalMeals();
  if (tabId === 'grocery-list') renderGroceryList();
  if (tabId === 'nutrition-analysis') renderNutritionAnalysis();
  if (tabId === 'nutrition-report') renderNutritionReport();
}

// ──────────────────────────────────────────────────────────────
// 12. PREMIUM FEATURES
// ──────────────────────────────────────────────────────────────

// --- A. DETAILED NUTRITION ANALYSIS ---
function renderNutritionAnalysis() {
  const container = document.getElementById('nutritionAnalysisContent');
  container.innerHTML = `
    <div class="calc-layout">
      <div class="calc-form">
        <h2><i class="fa-solid fa-flask" style="color:var(--primary);"></i> Detailed Nutrition Analysis</h2>
        <div class="form-group">
          <label for="nutritionFoodInput">Food Name</label>
          <input type="text" id="nutritionFoodInput" placeholder="e.g., Big Mac, Nasi Lemak..." style="width:100%;padding:12px 16px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:.95rem;">
        </div>
        <button id="analyzeBtn" class="btn btn-primary btn-lg" onclick="analyzeNutrition()" style="width:100%;">
          <i class="fa-solid fa-search"></i> Analyze
        </button>
      </div>
      <div id="nutritionResult" class="calc-result">
        <i class="fa-solid fa-chart-pie" style="font-size:3rem;color:var(--green-200);"></i>
        <p style="margin-top:16px;color:var(--text-muted);">Select a food to see its detailed nutrition breakdown.</p>
      </div>
    </div>
  `;
}

async function analyzeNutrition() {
  const foodName = document.getElementById('nutritionFoodInput').value.trim();
  const btn = document.getElementById('analyzeBtn');

  if (!foodName) {
    showToast('Please type a food name.', 'error');
    return;
  }

  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...';
  btn.disabled = true;

  try {
    const prompt = `Provide a detailed nutritional breakdown for 1 standard serving of '${foodName}'. 
Respond ONLY with a JSON object in exactly this format, do not add markdown:
{"name": "Food Name", "icon": "🍔", "calories": 500, "protein": 25, "carbs": 40, "fat": 20, "sugar": 10, "sodium": 600, "fibre": 5}`;
    
    const aiResult = await callGeminiAPI(prompt);
    
    document.getElementById('nutritionResult').innerHTML = `
      <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:4px;">${aiResult.icon} ${aiResult.name}</h3>
      <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:16px;">${aiResult.calories} kcal per serving</p>
      <div class="nutrition-grid">
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.protein}g</div>
          <div class="nutrient-label">Protein</div>
        </div>
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.carbs}g</div>
          <div class="nutrient-label">Carbs</div>
        </div>
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.fat}g</div>
          <div class="nutrient-label">Fat</div>
        </div>
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.sugar}g</div>
          <div class="nutrient-label">Sugar</div>
        </div>
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.sodium}mg</div>
          <div class="nutrient-label">Sodium</div>
        </div>
        <div class="nutrient-card">
          <div class="nutrient-value">${aiResult.fibre}g</div>
          <div class="nutrient-label">Fibre</div>
        </div>
      </div>
    `;
    showToast(`Analyzed ${aiResult.name} successfully!`, 'success');
  } catch (err) {
    console.error('Nutrition analysis error:', err);
    showToast('Failed to analyze food. Please try again.', 'error');
  } finally {
    btn.innerHTML = '<i class="fa-solid fa-search"></i> Analyze';
    btn.disabled = false;
  }
}

// --- B. WEEKLY MEAL PLANNING ---
function renderWeeklyPlan() {
  const container = document.getElementById('weeklyPlanContent');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let html = `
    <div style="text-align:center;margin-bottom:24px;">
      <button class="btn btn-primary" onclick="generateWeeklyPlan()">
        <i class="fa-solid fa-wand-magic-sparkles"></i> Generate Weekly Meal Plan
      </button>
    </div>
    <div class="weekly-plan-grid" id="weeklyPlanGrid">
  `;

  days.forEach(day => {
    html += `
      <div class="day-card">
        <div class="day-card-header">📅 ${day}</div>
        <div class="day-card-body" id="day-${day.toLowerCase()}">
          <p style="color:var(--text-muted);font-size:.88rem;text-align:center;padding:16px 0;">Click "Generate" to fill</p>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

async function generateWeeklyPlan() {
  const btn = document.querySelector('#weeklyPlanContent .btn-primary');
  const grid = document.getElementById('weeklyPlanGrid');
  
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating Plan...';
  btn.disabled = true;

  try {
    const prompt = `Generate a 7-day healthy meal plan. Respond ONLY with a valid JSON array of exactly 7 objects (one for each day Monday to Sunday). 
Each object must have exactly this format:
{"day": "Monday", "breakfast": {"name": "Oatmeal", "icon": "🥣", "calories": 300}, "lunch": {"name": "Salad", "icon": "🥗", "calories": 400}, "dinner": {"name": "Fish", "icon": "🐟", "calories": 500}}
Do not add markdown.`;

    const aiResult = await callGeminiAPI(prompt);
    
    // Save to global variable if we want to use it for grocery list later
    window.currentWeeklyPlan = aiResult;

    aiResult.forEach(dayPlan => {
      const dayId = `day-${dayPlan.day.toLowerCase()}`;
      const dayEl = document.getElementById(dayId);
      if (dayEl) {
        dayEl.innerHTML = `
          <div class="day-meal">
            <div class="day-meal-label">☀️ Breakfast</div>
            <div class="day-meal-name">${dayPlan.breakfast.icon} ${dayPlan.breakfast.name}</div>
            <div class="day-meal-cal">${dayPlan.breakfast.calories} kcal</div>
          </div>
          <div class="day-meal">
            <div class="day-meal-label">🌤️ Lunch</div>
            <div class="day-meal-name">${dayPlan.lunch.icon} ${dayPlan.lunch.name}</div>
            <div class="day-meal-cal">${dayPlan.lunch.calories} kcal</div>
          </div>
          <div class="day-meal">
            <div class="day-meal-label">🌙 Dinner</div>
            <div class="day-meal-name">${dayPlan.dinner.icon} ${dayPlan.dinner.name}</div>
            <div class="day-meal-cal">${dayPlan.dinner.calories} kcal</div>
          </div>
        `;
      }
    });

    showToast('✨ Weekly meal plan generated by AI!', 'success');
  } catch (err) {
    console.error('Weekly plan error:', err);
    showToast('Failed to generate plan. Try again.', 'error');
  } finally {
    btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Weekly Meal Plan';
    btn.disabled = false;
  }
}

// --- C. ADVANCED NUTRITION REPORT ---
async function renderNutritionReport() {
  const container = document.getElementById('nutritionReportContent');

  if (foodLog.length === 0) {
    container.innerHTML = `
      <div class="premium-lock-banner" style="background:var(--gray-100);color:var(--text-primary);">
        <h3>📊 No Data Yet</h3>
        <p style="color:var(--text-secondary);">Log some food in the Calorie Tracker first, then come back for your AI report.</p>
        <button class="btn btn-primary btn-sm" onclick="navigate('calorie-tracker')">Go to Tracker</button>
      </div>
    `;
    return;
  }

  const totalCal = foodLog.reduce((sum, f) => sum + f.calories, 0);
  const avgCal = Math.round(totalCal / foodLog.length);

  container.innerHTML = `
    <div style="text-align:center; padding:40px;">
      <i class="fa-solid fa-spinner fa-spin" style="font-size:2rem;color:var(--primary);"></i>
      <p style="margin-top:16px;">AI is analyzing your food log...</p>
    </div>
  `;

  try {
    const foodStr = foodLog.map(f => `${f.qty}x ${f.name} (${f.calories} kcal)`).join(', ');
    const prompt = `Analyze this daily food log: ${foodStr}. Total calories: ${totalCal}.
Provide 3 personalized, short, actionable suggestions to improve nutrition based on this data.
Respond ONLY with a JSON string array exactly like this: ["Suggestion 1", "Suggestion 2", "Suggestion 3"]
Do not add markdown formatting.`;

    let suggestions = await callGeminiAPI(prompt);
    if (!Array.isArray(suggestions)) {
      suggestions = ["Eat more vegetables.", "Drink more water.", "Keep tracking your meals!"]; // Fallback
    }

    container.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <div class="report-card">
          <h3><i class="fa-solid fa-chart-bar" style="color:var(--primary);"></i> Nutrition Summary</h3>
          <div class="report-stat"><span class="report-stat-label">Total Calories</span><span class="report-stat-value">${totalCal} kcal</span></div>
          <div class="report-stat"><span class="report-stat-label">Average per Item</span><span class="report-stat-value">${avgCal} kcal</span></div>
          <div class="report-stat"><span class="report-stat-label">Items Logged</span><span class="report-stat-value">${foodLog.length}</span></div>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-top:16px;">*Macros omitted for simplicity in dynamic report.</p>
        </div>
        <div>
          <div class="report-card">
            <div class="report-suggestions">
              <h4>🤖 AI Suggestions</h4>
              <ul>${suggestions.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
          </div>
          <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="exportReport('txt')"><i class="fa-solid fa-file-lines"></i> Export TXT</button>
            <button class="btn btn-outline" onclick="exportReport('csv')"><i class="fa-solid fa-file-csv"></i> Export CSV</button>
            <button class="btn btn-outline" onclick="exportReport('pdf')"><i class="fa-solid fa-file-pdf"></i> Export PDF</button>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    console.error('Report generation error:', err);
    container.innerHTML = `<p style="color:red;text-align:center;">Failed to generate AI report. Please try again.</p>`;
  }
}

// --- D. AI GOAL-BASED MEAL RECOMMENDATIONS ---
function renderGoalMeals() {
  const container = document.getElementById('goalMealsContent');
  container.innerHTML = `
    <h3 style="text-align:center;font-size:1.2rem;font-weight:700;margin-bottom:24px;">🎯 Choose Your Health Goal</h3>
    <div class="goal-grid" id="goalGrid">
      <div class="goal-card" onclick="selectGoal('lose', this)">
        <div class="goal-icon">🏃</div>
        <h4>Lose Weight</h4>
      </div>
      <div class="goal-card" onclick="selectGoal('muscle', this)">
        <div class="goal-icon">💪</div>
        <h4>Gain Muscle</h4>
      </div>
      <div class="goal-card" onclick="selectGoal('maintain', this)">
        <div class="goal-icon">⚖️</div>
        <h4>Maintain Weight</h4>
      </div>
      <div class="goal-card" onclick="selectGoal('healthy', this)">
        <div class="goal-icon">🥗</div>
        <h4>Eat Healthier</h4>
      </div>
    </div>
    <div id="goalRecommendations"></div>
  `;
}

async function selectGoal(goal, card) {
  document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');

  const recContainer = document.getElementById('goalRecommendations');
  recContainer.innerHTML = `
    <div style="text-align:center; padding:40px;">
      <i class="fa-solid fa-spinner fa-spin" style="font-size:2rem;color:var(--primary);"></i>
      <p style="margin-top:16px;">AI is generating custom recipes for your goal...</p>
    </div>
  `;

  try {
    const prompt = `Generate 3 healthy meal recommendations for someone trying to ${goal}. 
Respond ONLY with a JSON array of exactly 3 objects. 
Each object must have exactly this format:
{"name": "Meal Name", "type": "breakfast/lunch/dinner", "calories": 400, "protein": 30, "icon": "🥗", "steps": "Brief 1 sentence instruction."}
Do not add markdown formatting.`;

    const aiResult = await callGeminiAPI(prompt);
    
    recContainer.innerHTML = `
      <div style="background:var(--green-50);border-radius:var(--radius-md);padding:20px;margin-bottom:24px;border-left:4px solid var(--green-500);">
        <p style="font-weight:600;color:var(--green-700);">💡 AI Generated Custom Meals</p>
      </div>
      <div class="recipes-grid">
        ${aiResult.map(r => `
          <div class="recipe-card">
            <div class="recipe-card-header">${r.icon}</div>
            <div class="recipe-card-body">
              <h3>${r.name}</h3>
              <div class="recipe-meta">
                <span class="tag-${r.type || 'lunch'}">${capitalize(r.type || 'Lunch')}</span>
                <span class="tag-calories">🔥 ${r.calories} kcal</span>
                <span class="tag-vegetarian">💪 ${r.protein}g protein</span>
              </div>
              <p class="steps">${r.steps}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } catch (err) {
    console.error('Goal recommendation error:', err);
    recContainer.innerHTML = `<p style="color:red;text-align:center;">Failed to generate recommendations. Please try again.</p>`;
  }
}

// --- E. GROCERY LIST GENERATOR ---
function renderGroceryList() {
  const container = document.getElementById('groceryListContent');
  container.innerHTML = `
    <div style="text-align:center;margin-bottom:32px;">
      <p style="color:var(--text-secondary);margin-bottom:16px;">Generate a grocery list based on all available recipes.</p>
      <button class="btn btn-primary" onclick="generateGroceryList()">
        <i class="fa-solid fa-cart-shopping"></i> Generate Grocery List
      </button>
    </div>
    <div id="groceryResult"></div>
  `;
}

async function generateGroceryList() {
  const container = document.getElementById('groceryResult');
  const btn = document.querySelector('#groceryListContent .btn-primary');
  
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
  btn.disabled = true;

  try {
    let planText = "a generic healthy diet";
    if (window.currentWeeklyPlan) {
       planText = "this specific meal plan: " + JSON.stringify(window.currentWeeklyPlan);
    }

    const prompt = `Generate a categorized grocery list for ${planText}. 
Respond ONLY with a valid JSON object where keys are categories (like "🥩 Protein", "🥦 Vegetables", "🍎 Fruits", "🍚 Carbs", "🥤 Others") and values are arrays of strings (the ingredients).
Do not add markdown formatting.`;

    const aiResult = await callGeminiAPI(prompt);

    let html = '<div class="grocery-grid">';
    for (const [cat, items] of Object.entries(aiResult)) {
      if (!items || items.length === 0) continue;
      html += `
        <div class="grocery-category">
          <h4 style="margin-bottom:12px;color:var(--primary);">${cat}</h4>
          <ul style="list-style:none;padding:0;margin:0;">
            ${items.map(item => `<li style="padding:6px 0;border-bottom:1px solid var(--border);color:var(--text-secondary);"><label style="display:flex;align-items:center;cursor:pointer;"><input type="checkbox" style="margin-right:10px;"> ${item}</label></li>`).join('')}
          </ul>
        </div>
      `;
    }
    html += '</div>';
    container.innerHTML = html;
    showToast('🛒 Grocery list generated by AI!', 'success');
  } catch (err) {
    console.error('Grocery list error:', err);
    showToast('Failed to generate grocery list. Try again.', 'error');
  } finally {
    btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Generate Grocery List';
    btn.disabled = false;
  }
}

// --- F. EXPORT REPORT ---
function exportReport(format) {
  if (foodLog.length === 0) {
    showToast('No food data to export. Log some meals first!', 'error');
    return;
  }

  const totalCal = foodLog.reduce((sum, f) => sum + f.calories, 0);
  const avgCal = Math.round(totalCal / foodLog.length);

  if (format === 'txt') {
    let txt = "═══════════════════════════════════════\n";
    txt += "   HEALTHY BITE — NUTRITION REPORT\n";
    txt += "═══════════════════════════════════════\n\n";
    txt += `Date: ${new Date().toLocaleDateString()}\n`;
    txt += `Total Items Logged: ${foodLog.length}\n\n`;
    txt += "── FOOD LOG ──────────────────────────\n";
    foodLog.forEach(f => {
      txt += `  • ${f.name} (x${f.qty}) — ${f.calories} kcal\n`;
    });
    txt += `\n── SUMMARY ───────────────────────────\n`;
    txt += `  Total Calories:   ${totalCal} kcal\n`;
    txt += `  Average per Item: ${avgCal} kcal\n`;
    txt += "\n═══════════════════════════════════════\n";
    txt += "  Generated by Healthy Bite 🌿\n";
    txt += "═══════════════════════════════════════\n";

    downloadFile(txt, 'healthy-bite-report.txt', 'text/plain');
  }

  if (format === 'csv') {
    let csv = "Food Name,Servings,Calories (kcal)\n";
    foodLog.forEach(f => {
      csv += `"${f.name}",${f.qty},${f.calories}\n`;
    });
    csv += `\nTotal,,${totalCal}\n`;
    csv += `Average,,${avgCal}\n`;

    downloadFile(csv, 'healthy-bite-report.csv', 'text/csv');
  }

  if (format === 'pdf') {
    // Generate a printable HTML page as a workaround for PDF
    let html = `
      <html><head><title>Healthy Bite Report</title>
      <style>
        body{font-family:'Inter',sans-serif;padding:40px;color:#1f2937;}
        h1{color:#16a34a;border-bottom:2px solid #16a34a;padding-bottom:12px;}
        table{width:100%;border-collapse:collapse;margin:20px 0;}
        th,td{padding:10px 16px;text-align:left;border-bottom:1px solid #e5e7eb;}
        th{background:#f0fdf4;font-weight:700;}
        .total{font-weight:700;font-size:1.1rem;color:#16a34a;}
        .footer{margin-top:40px;color:#9ca3af;font-size:.85rem;text-align:center;}
      </style></head><body>
      <h1>🌿 Healthy Bite — Nutrition Report</h1>
      <p>Date: ${new Date().toLocaleDateString()}</p>
      <table>
        <thead><tr><th>Food</th><th>Servings</th><th>Calories</th></tr></thead>
        <tbody>
          ${foodLog.map(f => `<tr><td>${f.name}</td><td>${f.qty}</td><td>${f.calories} kcal</td></tr>`).join('')}
          <tr class="total"><td>Total</td><td>${foodLog.length} items</td><td>${totalCal} kcal</td></tr>
        </tbody>
      </table>
      <p class="footer">Generated by Healthy Bite 🌿 | ${new Date().toLocaleString()}</p>
      <script>window.print();<\/script>
      </body></html>
    `;
    const win = window.open('', '_blank');
    win.document.write(html);
    win.document.close();
  }

  if (format !== 'pdf') showToast(`📥 Report exported as .${format}!`, 'success');
}

/** Helper: trigger a file download */
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ──────────────────────────────────────────────────────────────
// 13. PREMIUM UPGRADE SIMULATION
// ──────────────────────────────────────────────────────────────

function upgradeToPremium() {
  if (isPremium) {
    showToast("You're already a Premium member! 🎉", 'info');
    return;
  }

  if (!isLoggedIn) {
    showToast('Please log in first to upgrade to Premium.', 'error');
    openLoginModal();
    return;
  }

  // Redirect to Stripe Payment Link
  const btn = document.getElementById('upgradeBtn');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Redirecting to Secure Checkout...';
  btn.disabled = true;

  // We append ?client_reference_id if we had a backend, but here we just redirect
  // After payment, Stripe will redirect back to: https://healthy-bite-7019e.web.app/?payment=success
  window.location.href = STRIPE_PAYMENT_LINK;
}

function closePaymentModal() {
  document.getElementById('paymentModal').classList.remove('show');
}

/** Update all UI elements based on premium status */
function updatePremiumUI() {
  // Remove lock icons on tabs
  const lockIcons = ['weeklyLock', 'goalLock', 'groceryLock', 'nutritionLock', 'reportLock'];
  lockIcons.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isPremium ? 'none' : '';
  });

  // Remove lock overlays on feature cards
  document.querySelectorAll('.feature-card.locked').forEach(card => {
    if (isPremium) {
      card.classList.remove('locked');
      // Make card navigate to appropriate section
      const h3Text = card.querySelector('h3').textContent;
      if (h3Text.includes('Nutrition Analysis')) card.onclick = () => navigate('calorie-tracker');
      if (h3Text.includes('Nutrition Reports')) card.onclick = () => navigate('calorie-tracker');
    }
  });

  // Update premium status text
  const statusText = document.getElementById('premiumStatusText');
  if (statusText) {
    statusText.textContent = isPremium ? '✅ You are a Premium member!' : '';
  }

  // Update upgrade button
  const upgradeBtn = document.getElementById('upgradeBtn');
  if (upgradeBtn && isPremium) {
    upgradeBtn.innerHTML = '<i class="fa-solid fa-check"></i> Premium Active';
    upgradeBtn.classList.remove('btn-gold');
    upgradeBtn.classList.add('btn-primary');
  }
}

// ──────────────────────────────────────────────────────────────
// 14. DASHBOARD
// ──────────────────────────────────────────────────────────────

function updateDashboard() {
  // Welcome
  document.getElementById('dashWelcome').textContent =
    isLoggedIn ? `Welcome back, ${userName}! 👋` : 'Welcome! 👋';

  // Calories
  const totalCal = foodLog.reduce((sum, f) => sum + f.calories, 0);
  document.getElementById('dashCalories').textContent = totalCal.toLocaleString();

  // BMI
  document.getElementById('dashBMI').textContent = userBMI || '—';
  document.getElementById('dashBMICat').textContent = userBMICategory || 'Not calculated yet';

  // Water
  document.getElementById('dashWater').textContent = userWaterGoal ? `${userWaterGoal}` : '—';

  // Meal Plan
  const b = document.getElementById('planBreakfast');
  const l = document.getElementById('planLunch');
  const d = document.getElementById('planDinner');
  const mealPlanEl = document.getElementById('dashMealPlan');

  if (b && b.value && l && l.value && d && d.value) {
    const bName = b.options[b.selectedIndex].text;
    const lName = l.options[l.selectedIndex].text;
    const dName = d.options[d.selectedIndex].text;
    mealPlanEl.innerHTML = `
      <p style="margin:6px 0;font-size:.88rem;">☀️ <strong>Breakfast:</strong> ${bName}</p>
      <p style="margin:6px 0;font-size:.88rem;">🌤️ <strong>Lunch:</strong> ${lName}</p>
      <p style="margin:6px 0;font-size:.88rem;">🌙 <strong>Dinner:</strong> ${dName}</p>
    `;
  } else {
    mealPlanEl.innerHTML = '<p>No meals planned yet.</p>';
  }

  // Rewards
  document.getElementById('dashPoints').textContent = rewardPoints;
  document.getElementById('dashBadge').textContent =
    mealPlanComplete ? '🏆 Meal Plan Champion' : 'No badges yet';

  // Premium status
  const premBadge = document.getElementById('dashPremiumBadge');
  const premStatus = document.getElementById('dashPremiumStatus');

  if (isPremium) {
    premBadge.className = 'premium-badge-dash premium';
    premBadge.innerHTML = '<i class="fa-solid fa-crown"></i> Premium';
    premStatus.innerHTML = '<p style="color:var(--primary);font-weight:600;">🎉 Premium plan active!</p>';
  } else {
    premBadge.className = 'premium-badge-dash free';
    premBadge.innerHTML = '<i class="fa-solid fa-circle-info"></i> Free Plan';
    premStatus.innerHTML = `
      <p>Free plan active.</p>
      <button class="btn btn-gold btn-sm" style="margin-top:8px;" onclick="navigate('premium')">Upgrade Now</button>
    `;
  }
}

// ──────────────────────────────────────────────────────────────
// 15. TOAST NOTIFICATION
// ──────────────────────────────────────────────────────────────

let toastTimeout;

/** Show a toast notification.
 *  @param {string} message — Text to display
 *  @param {'success'|'error'|'info'} type — Toast style
 */
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.className = `toast show ${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ──────────────────────────────────────────────────────────────
// 16. UTILITY FUNCTIONS
// ──────────────────────────────────────────────────────────────

/** Capitalize first letter of a string */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ──────────────────────────────────────────────────────────────
// 17. INITIALIZATION — Run when DOM is ready
// ──────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Render recipes
  renderRecipes();

  // Populate meal plan dropdowns
  populateMealPlanDropdowns();

  // Render quick calorie reference
  renderQuickRef();

  // Initialize premium UI state
  updatePremiumUI();

  // Initialize auth UI
  updateAuthUI();

  // Check if we just returned from a successful Stripe Payment
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('payment') === 'success') {
    // Wait slightly for Firebase Auth state to settle
    setTimeout(async () => {
      if (currentUser || isLoggedIn) {
        isPremium = true;
        updatePremiumUI();
        await saveUserData('profile', { name: userName, email: currentUser?.email || '', isPremium: true, rewardPoints });
        
        // Clean up URL without refreshing the page
        window.history.replaceState({}, document.title, window.location.pathname);
        
        document.getElementById('paymentModal').classList.add('show');
        showToast('🎉 Payment Successful! Welcome to Premium!', 'success');
      } else {
        // If they aren't logged in yet (auth state taking a moment), we still clean URL but ask them to log in to finalize
        showToast('Payment detected! Please log in to finalize your upgrade.', 'info');
      }
    }, 2000);
  }

  // Firebase Auth state is handled by onAuthStateChanged above
  // It will auto-detect if a user is already logged in from a previous session

  console.log('🌿 Healthy Bite — App initialized with Firebase! 🔥');
});
