import "./App.css";

function App() {
  const services = [
    {
      icon: "⚡",
      title: "UPS & Power Backup",
      text: "Reliable UPS systems, power backup and technical support for your business.",
    },
    {
      icon: "🔋",
      title: "Battery Solutions",
      text: "Battery testing, replacement, maintenance and backup solutions.",
    },
    {
      icon: "🔧",
      title: "Electrical Engineering",
      text: "Professional electrical inspection, troubleshooting and engineering services.",
    },
    {
      icon: "📹",
      title: "CCTV & Security",
      text: "CCTV, access control, security systems and technical support.",
    },
    {
      icon: "🌐",
      title: "Network Infrastructure",
      text: "Structured cabling, network infrastructure and connectivity solutions.",
    },
    {
      icon: "🖥️",
      title: "Server Room Solutions",
      text: "Reliable server room infrastructure, power and technical solutions.",
    },
    {
      icon: "🛠️",
      title: "Annual Maintenance",
      text: "Professional preventive maintenance and technical service contracts.",
    },
    {
      icon: "🏢",
      title: "Project Implementation",
      text: "Complete technical project implementation from planning to completion.",
    },
  ];

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo">
            <img src="/lead-logo.png" alt="LEAD Technologies" />
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="nav-button" onClick={scrollToContact}>
            Request Service
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <p className="eyebrow">LEAD TECHNOLOGIES (PVT) LTD.</p>

            <h1>
              Reliable
              <br />
              Technology.
              <br />
              <span>Professional</span>
              <br />
              <span>Service.</span>
            </h1>

            <p className="hero-description">
              Complete electrical engineering, power backup, CCTV,
              networking and technical service solutions for your business.
            </p>

            <div className="hero-buttons">
              <button className="primary-button" onClick={scrollToServices}>
                Explore Our Services
              </button>

              <button className="secondary-button" onClick={scrollToContact}>
                Request a Service
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-icon">⚡</div>
            <h2>LEAD Technologies</h2>
            <p>Powering Technology.</p>
            <p>Securing Tomorrow.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="section-inner">
          <p className="section-label">ABOUT LEAD</p>

          <h2>Technology You Can Trust</h2>

          <p className="about-text">
            LEAD Technologies provides professional electrical, power backup,
            security and network infrastructure solutions for businesses and
            organizations.
          </p>

          <div className="about-points">
            <div>
              <strong>01</strong>
              <span>Professional Team</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Quality Solutions</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Fast Response</span>
            </div>

            <div>
              <strong>04</strong>
              <span>After-Sales Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section">
        <div className="section-inner">
          <p className="section-label">OUR SERVICES</p>

          <h2>Complete Technical Solutions</h2>

          <p className="section-description">
            Professional solutions designed for reliable business operations.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <button onClick={scrollToContact}>
                  Request Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="section-inner">
          <p className="section-label light-label">OUR EXPERIENCE</p>

          <h2>Solutions Across Multiple Industries</h2>

          <div className="industry-grid">
            <div>🏢 Commercial Buildings</div>
            <div>🏭 Factories & Industries</div>
            <div>🏨 Hotels & Hospitality</div>
            <div>🏛️ Government & Organizations</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div className="contact-inner">
          <div>
            <p className="section-label">GET IN TOUCH</p>

            <h2>Need Technical Support?</h2>

            <p>
              Contact LEAD Technologies for professional technical solutions
              and service support.
            </p>
          </div>

          <div className="contact-card">
            <h3>LEAD Technologies</h3>

            <a href="tel:+94707189186">+94 07 07 189 186</a>

            <a href="mailto:nalin@lead.lk">nalin@lead.lk</a>

            <button className="primary-button" onClick={scrollToContact}>
              Request a Service
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>LEAD TECHNOLOGIES (PVT) LTD.</strong>
          <span>Professional Technology & Technical Services</span>
        </div>

        <p>© 2026 LEAD Technologies. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;