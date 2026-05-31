import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);
  };

  const trainers = [
    {
      name: "Alex Johnson",
      role: "Strength Coach",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500",
    },
    {
      name: "Sarah Lee",
      role: "Nutrition Expert",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500",
    },
    {
      name: "Mike Carter",
      role: "CrossFit Coach",
      image:
        "https://images.unsplash.com/photo-1549476464-37392f717541?w=500",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2>TITAN FITNESS</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#plans">Plans</a>
          <a href="#trainers">Trainers</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <h1>TITAN FITNESS</h1>

        <p>
          Unleash Your Inner Titan. Build Strength,
          Confidence and a Healthier Future.
        </p>

        <a href="#plans">
          <button>Join Now</button>
        </a>
      </section>

      {/* Programs */}
      <section id="programs" className="section">
        <h2>Our Programs</h2>

        <div className="card-grid">
          <div className="card">
            <h3>🏋️ Strength Training</h3>
            <p>Build muscle and power.</p>
          </div>

          <div className="card">
            <h3>🔥 Weight Loss</h3>
            <p>Burn fat efficiently.</p>
          </div>

          <div className="card">
            <h3>⚡ CrossFit</h3>
            <p>High intensity workouts.</p>
          </div>

          <div className="card">
            <h3>💪 Personal Training</h3>
            <p>Custom fitness coaching.</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="section">
        <h2>Membership Plans</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Basic</h3>
            <h1>₹999</h1>
            <p>Gym Access</p>
          </div>

          <div className="card featured">
            <h3>Premium</h3>
            <h1>₹1999</h1>
            <p>Gym + Cardio</p>
          </div>

          <div className="card">
            <h3>Elite</h3>
            <h1>₹2999</h1>
            <p>All Facilities</p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="section">
        <h2>Expert Trainers</h2>

        <div className="card-grid">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <img src={trainer.image} alt={trainer.name} />
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BMI */}
      <section className="section">
        <h2>BMI Calculator</h2>

        <div className="bmi-box">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && <h3>Your BMI: {bmi}</h3>}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2>Success Stories</h2>

        <div className="card-grid">
          <div className="card">
            <p>
              "Lost 15kg in 4 months thanks to Titan Fitness."
            </p>
            <strong>- Rahul</strong>
          </div>

          <div className="card">
            <p>
              "Best trainers and amazing atmosphere."
            </p>
            <strong>- Priya</strong>
          </div>

          <div className="card">
            <p>
              "Completely transformed my fitness journey."
            </p>
            <strong>- Arjun</strong>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        © 2026 Titan Fitness. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;