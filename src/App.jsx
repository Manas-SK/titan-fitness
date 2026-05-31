import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Titan Fitness</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#trainers">Trainers</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="join-btn"
          onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
        >
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Transform Your Body. Build Strength. Stay Consistent.</h1>
          <p>
            Premium fitness coaching, personalized training plans, and world-class gym environment.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => document.getElementById("programs").scrollIntoView({ behavior: "smooth" })}
            >
              View Programs
            </button>
          </div>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="gym"
        />
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section">
        <h2>Our Programs</h2>

        <div className="grid">
          <div className="card">🔥 Strength Training</div>
          <div className="card">🏃 Fat Loss Program</div>
          <div className="card">💪 Muscle Building</div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="section dark">
        <h2>Expert Trainers</h2>

        <div className="grid">
          <div className="card">Coach Arjun</div>
          <div className="card">Coach Rahul</div>
          <div className="card">Coach Priya</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing Plans</h2>

        <div className="grid">
          <div className="card">
            <h3>Basic</h3>
            <p>₹999 / month</p>
          </div>

          <div className="card highlight">
            <h3>Pro</h3>
            <p>₹1999 / month</p>
          </div>

          <div className="card">
            <h3>Elite</h3>
            <p>₹2999 / month</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section dark">
        <h2>Contact Us</h2>

        <p>📍 Chennai, Tamil Nadu</p>
        <p>📞 +91 8248579684</p>
        <p>📧 titanfitness@gmail.com</p>

        <a
          href="https://wa.me/+918248579684"
          target="_blank"
          className="primary-btn"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Titan Fitness. All rights reserved.</p>
      </footer>

    </div>
  );
}