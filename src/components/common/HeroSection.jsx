import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      
      <div className="hero-text">
        <h1>
          Organize. Track. <br />
          <span>Get Work Done Faster.</span>
        </h1>

        <p>
          Amdox Task Management helps teams plan, track, and and collaborate
          efficiently with real-time updates and smart workflows.
        </p>

        <div className="hero-buttons">
          <a href="/register" className="primary-btn">Start Free</a>
          <a href="/login" className="secondary-btn">Login</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
          alt="Task Management"
        />
      </div>

    </section>
  );
};

export default HeroSection;
