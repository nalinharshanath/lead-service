import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const SERVICE_ID = "service_pkt151c";
const TEMPLATE_ID = "template_h246roe";
const PUBLIC_KEY = "Iib5_WdGDVvHvMgzl";

function App() {
  const [showRequest, setShowRequest] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    description: "",
    date: "",
    time: "",
    priority: "Normal",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    const requestId =
      "LEAD-" + Math.floor(100000 + Math.random() * 900000);

    const templateParams = {
      requestId: requestId,
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: form.service,
      address: form.address,
      description: form.description,
      date: form.date || "Not specified",
      time: form.time || "Not specified",
      priority: form.priority,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Sorry, we could not send your request. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const services = [
    {
      icon: "⚡",
      title: "UPS Repair & Service",
      text: "UPS inspection, troubleshooting, repair and maintenance.",
    },
    {
      icon: "🔋",
      title: "Battery Replacement",
      text: "UPS battery testing, replacement and battery service.",
    },
    {
      icon: "🔧",
      title: "Power Panel Service",
      text: "Power panel inspection, checking, troubleshooting and repair.",
    },
    {
      icon: "📹",
      title: "CCTV & Security",
      text: "CCTV, burglar alarm and door access inspection and repair.",
    },
  ];

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-mark"></div>
          <span>LEAD</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>

          <button onClick={() => setShowRequest(true)}>
            Request Service
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="hero-text">
            <div className="small-title">LEAD SERVICE</div>

            <h1>
              Reliable <span>Service.</span>
              <br />
              Professional
              <br />
              Support.
            </h1>

            <p>
              Fast and professional technical service for UPS systems,
              batteries, power panels, CCTV and security systems.
            </p>

            <button
              className="main-button"
              onClick={() => setShowRequest(true)}
            >
              Request a Service
            </button>
          </div>

          <div className="hero-card">
            <div className="hero-icon">🛠️</div>

            <h2>LEAD Service</h2>

            <p>
              Tell us what you need. Our technical team will review
              your request and contact you.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="section-heading">
          <div className="blue-label">OUR SERVICES</div>

          <h2>What Can We Service?</h2>

          <p>
            Professional inspection, repair and replacement services.
          </p>
        </div>

        <div className="service-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button
                onClick={() => setShowRequest(true)}
                className="card-button"
              >
                Request Service
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-box">

          <div className="blue-label">
            WHY LEAD SERVICE?
          </div>

          <h2>Technical Support You Can Trust</h2>

          <p>
            Our service team provides professional inspection,
            troubleshooting, repair and replacement support for
            essential power and security systems.
          </p>

          <div className="about-items">

            <div>
              <strong>01</strong>
              <span>Professional Inspection</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Reliable Repair Service</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Technical Support</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Customer Focused Service</span>
            </div>

          </div>
        </div>
      </section>

      {/* REQUEST MODAL */}
      {showRequest && (

        <div className="modal">

          <div className="modal-box">

            {!submitted ? (

              <>

                <button
                  className="close-button"
                  onClick={() => {
                    setShowRequest(false);
                    setError("");
                  }}
                >
                  ×
                </button>

                <div className="form-title">

                  <div className="blue-label">
                    LEAD SERVICE
                  </div>

                  <h2>Request a Service</h2>

                  <p>
                    Tell us about the service you need.
                  </p>

                </div>

                <form onSubmit={handleSubmit}>

                  <div className="form-row">

                    <div>
                      <label>Your Name *</label>

                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label>Phone Number *</label>

                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                      />
                    </div>

                  </div>

                  <div className="form-row">

                    <div>
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email address"
                      />
                    </div>

                    <div>
                      <label>Service Required *</label>

                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select Service
                        </option>

                        <option>
                          UPS Repair & Service
                        </option>

                        <option>
                          Battery Replacement
                        </option>

                        <option>
                          Power Panel Service
                        </option>

                        <option>
                          CCTV & Security
                        </option>

                      </select>
                    </div>

                  </div>

                  <label>Service Address *</label>

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Where should our technician visit?"
                    rows="3"
                    required
                  />

                  <label>Describe the Problem *</label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Please describe the problem..."
                    rows="4"
                    required
                  />

                  <div className="form-row">

                    <div>
                      <label>Preferred Date</label>

                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Preferred Time</label>

                      <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  <label>Priority</label>

                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                  >
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>Emergency</option>
                  </select>

                  {error && (
                    <div
                      style={{
                        marginTop: "15px",
                        padding: "12px",
                        borderRadius: "8px",
                        background: "#fff0f0",
                        color: "#c62828",
                        fontSize: "14px",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    className="submit-button"
                    type="submit"
                    disabled={sending}
                  >
                    {sending
                      ? "Sending Request..."
                      : "Submit Service Request"}
                  </button>

                </form>

              </>

            ) : (

              <div className="success-box">

                <div className="success-icon">
                  ✓
                </div>

                <div className="blue-label">
                  REQUEST SUBMITTED
                </div>

                <h2>Thank You!</h2>

                <p>
                  Your service request has been successfully
                  submitted.
                  <br />
                  Our team will review it and contact you shortly.
                </p>

                <button
                  className="submit-button"
                  onClick={() => {
                    setShowRequest(false);
                    setSubmitted(false);

                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      address: "",
                      description: "",
                      date: "",
                      time: "",
                      priority: "Normal",
                    });
                  }}
                >
                  Back to Home
                </button>

              </div>

            )}

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">

          <div className="logo-mark"></div>

          <span>LEAD</span>

        </div>

        <p>
          Professional technical service for power and security systems.
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 LEAD Technologies. All Rights Reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;