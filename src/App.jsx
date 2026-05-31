import "./App.css";

export default function App() {

  const scrollToTools = () => {
    const el = document.getElementById("tools");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Titan Fitness</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#workouts">Workouts</a>
          <a href="#trainers">Trainers</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </div>

        {/* ✅ FIXED JOIN BUTTON */}
        <button className="join-btn" onClick={scrollToTools}>
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div>
          <h1>Train Hard. Stay Strong.</h1>
          <p>Build your best physique with expert guidance</p>

          <button className="primary-btn" onClick={scrollToTools}>
            Start Now
          </button>
        </div>
      </section>

      {/* WORKOUTS */}
      <section className="section" id="workouts">
        <h2>Workouts</h2>

        <div className="grid">

          <div className="card">
            <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Fat Loss</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Strength</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Muscle Gain</h3>
          </div>

        </div>
      </section>
      {/* PRICING */}
<section className="section dark" id="pricing">
  <h2>Membership Plans</h2>

  <div className="grid">

    {/* BASIC */}
    <div className="card">
      <h3>Basic Plan</h3>
      <p>✔ Gym Access</p>
      <p>✔ Locker Room</p>
      <p>✔ 1 Trainer Session</p>
      <h2>₹999 / month</h2>
    </div>

    {/* PRO */}
    <div className="card">
      <h3>Pro Plan</h3>
      <p>✔ All Basic Features</p>
      <p>✔ Personal Trainer</p>
      <p>✔ Diet Plan</p>
      <h2>₹1999 / month</h2>
    </div>

    {/* ELITE */}
    <div className="card">
      <h3>Elite Plan</h3>
      <p>✔ All Pro Features</p>
      <p>✔ 1-on-1 Coaching</p>
      <p>✔ Priority Support</p>
      <h2>₹2999 / month</h2>
    </div>

  </div>
</section>

      {/* TRAINERS */}
      <section className="section dark" id="trainers">
        <h2>Trainers</h2>

        <div className="grid">

          <div className="card">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Arjun</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Rahul</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1546484959-f5f8b9a8c3b0" style={{ width: "100%", borderRadius: "10px" }} />
            <h3>Priya</h3>
          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="section" id="tools">
        <h2>Fitness Tools</h2>

        <div className="grid">

          {/* BMI */}
          <div className="card">
            <h3>BMI Calculator</h3>

            <input id="weight" placeholder="Weight (kg)" />
            <input id="height" placeholder="Height (cm)" />

            <button
              className="primary-btn"
              onClick={() => {
                const w = document.getElementById("weight").value;
                const h = document.getElementById("height").value;

                if (!w || !h) return;

                const bmi = (w / ((h / 100) ** 2)).toFixed(1);
                alert("Your BMI is: " + bmi);
              }}
            >
              Calculate BMI
            </button>
          </div>

          {/* CALORIES */}
          <div className="card">
            <h3>Calories Target</h3>

            <input id="calWeight" placeholder="Weight (kg)" />

            <button
              className="primary-btn"
              onClick={() => {
                const w = document.getElementById("calWeight").value;

                if (!w) return;

                const calories = w * 24;
                alert("Daily Calories: " + calories + " kcal");
              }}
            >
              Calculate Calories
            </button>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section dark" id="contact">
        <h2>Contact Us</h2>

        <p>📞 8248579684</p>
        <p>📍 Chennai</p>
        <p>📧 titanfitness@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Titan Fitness</p>
      </footer>

    </div>
  );
}