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
      icon: "⚙️",
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
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

          <button
            className="nav-button"
            onClick={() => scrollTo("contact")}
          >
            Request Service
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-shape shape-one"></div>
        <div className="hero-shape shape-two"></div>

        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-label">
              LEAD TECHNOLOGIES (PVT) LTD.
            </div>

            <h1>
              Reliable
              <br />
              <span>Technology.</span>
              <br />
              Professional
              <br />
              <strong>Service.</strong>
            </h1>

            <p>
              Complete electrical engineering, power backup, CCTV,
              networking and technical service solutions for your business.
            </p>

            <div className="hero-buttons">
              <button
                className="btn yellow"
                onClick={() => scrollTo("services")}
              >
                Explore Our Services →
              </button>

              <button
                className="btn outline"
                onClick={() => scrollTo("contact")}
              >
                Request a Service
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <b>17+</b>
                <span>Years Experience</span>
              </div>

              <div>
                <b>500+</b>
                <span>Projects</span>
              </div>

              <div>
                <b>24/7</b>
                <span>Technical Support</span>
              </div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="electric-icon">⚡</div>

              <h2>LEAD</h2>
              <h3>Technologies</h3>

              <div className="card-line"></div>

              <p>Powering Technology.</p>
              <p>Securing Tomorrow.</p>

              <div className="card-badge">
                Professional Technical Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-heading">
            <span>ABOUT LEAD</span>
            <h2>Technology You Can Trust</h2>
            <p>
              LEAD Technologies provides professional electrical,
              power backup, security and network infrastructure
              solutions for businesses and organizations.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <h3>Complete Technology Solutions Under One Roof</h3>

              <p>
                From power backup and electrical engineering to
                CCTV, networking and technical maintenance, our
                team provides reliable solutions designed around
                your business requirements.
              </p>

              <button
                className="dark-button"
                onClick={() => scrollTo("services")}
              >
                Discover Our Services →
              </button>
            </div>

            <div className="about-points">
              <div className="point-card">
                <b>01</b>
                <h4>Professional Team</h4>
                <p>Experienced technical professionals.</p>
              </div>

              <div className="point-card">
                <b>02</b>
                <h4>Quality Solutions</h4>
                <p>Reliable products and solutions.</p>
              </div>

              <div className="point-card">
                <b>03</b>
                <h4>Fast Response</h4>
                <p>Quick technical assistance.</p>
              </div>

              <div className="point-card">
                <b>04</b>
                <h4>After-Sales Support</h4>
                <p>Continuous customer support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-heading center">
            <span>OUR SERVICES</span>
            <h2>Complete Technical Solutions</h2>
            <p>
              Professional solutions designed for reliable
              business operations.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <button onClick={() => scrollTo("contact")}>
                  Request Service →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEAD */}
      <section className="why-lead">
        <div className="container">
          <div className="section-heading center white">
            <span>WHY CHOOSE LEAD?</span>
            <h2>Built Around Your Business</h2>
            <p>
              Reliable technology, professional service and
              dependable technical support.
            </p>
          </div>

          <div className="why-grid">
            <div>
              <strong>01</strong>
              <h3>Experience</h3>
              <p>Years of technical industry experience.</p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Quality</h3>
              <p>Professional solutions and trusted products.</p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Response</h3>
              <p>Fast and efficient technical assistance.</p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Support</h3>
              <p>Reliable after-sales technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <div className="container">
          <div className="section-heading center">
            <span>OUR EXPERIENCE</span>
            <h2>Solutions Across Multiple Industries</h2>
          </div>

          <div className="industry-grid">
            <div className="industry-card">
              <span>🏢</span>
              <h3>Commercial Buildings</h3>
            </div>

            <div className="industry-card">
              <span>🏭</span>
              <h3>Factories & Industries</h3>
            </div>

            <div className="industry-card">
              <span>🏨</span>
              <h3>Hotels & Hospitality</h3>
            </div>

            <div className="industry-card">
              <span>🏛️</span>
              <h3>Government & Organizations</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container contact-inner">
          <div className="contact-text">
            <span>GET IN TOUCH</span>

            <h2>Need Technical Support?</h2>

            <p>
              Contact LEAD Technologies for professional technical
              solutions and service support.
            </p>

            <div className="contact-buttons">
              <a href="tel:+94707189186" className="contact-btn">
                📞 Call Us
              </a>

              <a
                href="mailto:nalin@lead.lk"
                className="contact-btn"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">⚡</div>

            <h3>LEAD Technologies</h3>

            <a href="tel:+94707189186">
              +94 07 07 189 186
            </a>

            <a href="mailto:nalin@lead.lk">
              nalin@lead.lk
            </a>

            <button
              className="btn yellow full"
              onClick={() => scrollTo("contact")}
            >
              Request a Service
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <img src="/lead-logo.png" alt="LEAD Technologies" />

            <p>
              Professional Technology & Technical Services
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="copyright">
            © 2026 LEAD Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;