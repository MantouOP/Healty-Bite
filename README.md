<div align="center">
  <img src="logo.png" alt="Healthy Bite Logo" width="300" />
  
  # Healthy Bite 🥗
  
  **Eat Healthy, Live Better.** <br>
  *A personalized meal planning, calorie tracking, and nutrition platform.*

  [![Live Demo](https://img.shields.io/badge/Live_Demo-healthy--bite--7019e.web.app-brightgreen?style=for-the-badge)](https://healthy-bite-7019e.web.app)
</div>

<br>

## 📖 About The Project

**Healthy Bite** is an all-in-one nutrition tracking and meal planning Single Page Application (SPA) built for health-conscious individuals. It allows users to track their daily calorie intake, calculate their BMI, monitor water intake, and discover healthy recipes. 

The platform features a **freemium model** with advanced tools—such as AI-based goal recommendations, 7-day automated meal planning, and downloadable nutrition reports—unlocked via a simulated premium upgrade.

## ✨ Features

### 🟢 Free Tier
- **Calorie Tracker:** Easily log meals and track daily caloric intake against a target.
- **Healthy Recipes Database:** Browse breakfast, lunch, and dinner recipes with dietary filters (meat/vegetarian) and allergy exclusions (peanuts, dairy, seafood, etc.).
- **BMI Calculator:** Input height and weight to get instant BMI categorization.
- **Water Intake Calculator:** Calculates daily water needs based on body weight with an animated visualizer.
- **Daily Meal Planner:** Plan your day and earn gamified rewards/badges for completing your meals.

### 👑 Premium Tier
- **Detailed Nutrition Analysis:** Get a full macro breakdown (protein, carbs, fat, sugar, sodium, fibre) for any food item.
- **7-Day Weekly Meal Plan:** Auto-generate a balanced, week-long meal plan with a single click.
- **AI Goal-Based Recommendations:** Tailored meal suggestions depending on your goal (Lose Weight, Gain Muscle, Maintain, Eat Healthier).
- **Smart Grocery List:** Instantly compiles a categorized shopping list based on the recipe database.
- **Exportable Reports:** Download your nutrition data as a TXT, CSV, or PDF file.

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3 (Vanilla, custom Design System with Glassmorphism), JavaScript (Vanilla, DOM manipulation, SPA routing).
*   **Backend / BaaS:** Firebase
    *   **Firebase Authentication:** Email & Password signup/login, Google OAuth, Password Reset.
    *   **Cloud Firestore:** Real-time NoSQL database to persist user profiles, food logs, BMI calculations, and reward points.
    *   **Firebase Hosting:** Global, fast CDN deployment.

## 🚀 How to Run Locally

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MantouOP/Healty-Bite.git
   cd Healty-Bite
   ```

2. **Serve the project:**
   You can use any local web server. For example, using Node.js `serve`:
   ```bash
   npx serve .
   ```
   Or using Python:
   ```bash
   python -m http.server 3000
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:3000`

## 💡 Hackathon Note
This project was rapidly prototyped and built with a focus on modern UI/UX design and practical functionality using a lightweight vanilla stack paired with Firebase for a robust backend experience.

---
*Built with 💚 for healthier living.*
