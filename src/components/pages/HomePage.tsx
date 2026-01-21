const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to Give Platform</h1>
        <p>Making a difference, one donation at a time</p>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>Easy Donations</h3>
          <p>Support causes you care about with just a few clicks</p>
        </div>
        
        <div className="feature-card">
          <h3>Track Impact</h3>
          <p>See how your contributions make a real difference</p>
        </div>
        
        <div className="feature-card">
          <h3>Secure & Trusted</h3>
          <p>Your donations are safe and go directly to verified organizations</p>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
