import { useState } from "react";
import "./App.css";

const EMAILJS_SERVICE_ID = "service_pkt151c";
const EMAILJS_PUBLIC_KEY = "Iib5_WdGDVvHvMgzl";

const INTERNAL_TEMPLATE_ID = "template_h246roe";
const AUTOREPLY_TEMPLATE_ID = "template_43zkrsn";

function App() {
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    service: "",
    address: "",
    requirement: "",
  });

  const openServiceForm = () => {
    setShowServiceForm(true);
  };

  const closeServiceForm = () => {
    if (!sending) {
      setShowServiceForm(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (templateId, templateParams) => {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: templateId,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Error:", errorText);
      throw new Error("EmailJS request failed");
    }

    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.service ||
      !formData.address ||
      !formData.requirement
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSending(true);

    try {
      const requestId =
        "LEAD-" + Date.now().toString().slice(-8);

      const now = new Date();

      const requestDate = now.toLocaleDateString("en-GB");

      const requestTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

      /* SEND REQUEST TO LEAD */

      await sendEmail(INTERNAL_TEMPLATE_ID, {
        requestId,

        name: formData.name,
        company: formData.company,

        phone: formData.mobile,
        mobile: formData.mobile,

        email: formData.email,

        service: formData.service,
        address: formData.address,

        description: formData.requirement,
        requirement: formData.requirement,

        date: requestDate,
        time: requestTime,

        priority: "Normal",
      });

      /* SEND AUTO REPLY TO CUSTOMER */

      await sendEmail(AUTOREPLY_TEMPLATE_ID, {
        name: formData.name,
        company: formData.company,

        mobile: formData.mobile,
        phone: formData.mobile,

        email: formData.email,

        service: formData.service,
        address: formData.address,

        requirement: formData.requirement,
        description: formData.requirement,

        requestId,
        date: requestDate,
        time: requestTime,
      });

      setFormData({
        name: "",
        company: "",
        mobile: "",
        email: "",
        service: "",
        address: "",
        requirement: "",
      });

      setShowServiceForm(false);
      setShowSuccess(true);

    } catch (error) {
      console.error("SERVICE REQUEST ERROR:", error);

      alert(
        "Sorry, we could not send your request.\n\nPlease try again."
      );

    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div className="logo">
          <img
            src="/lead-logo.png"
            alt="LEAD Technologies"
          />
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="header-btn"
          onClick={openServiceForm}
        >
          Request Service
        </button>

      </header>


      <main>

        {/* HERO */}

        <section className="hero" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              LEAD TECHNOLOGIES (PVT) LTD.
            </p>

            <h1>
              Reliable Technology.
              <br />
              <span>Professional Service.</span>
            </h1>

            <p>
              Complete electrical engineering, power backup,
              CCTV, networking and technical service solutions
              for your business.
            </p>

            <div className="buttons">

              <a
                href="#services"
                className="primary-btn"
              >
                Explore Our Services
              </a>

              <button
                className="secondary-btn"
                onClick={openServiceForm}
              >
                Request a Service
              </button>

            </div>

          </div>


          <div className="hero-card">

            <div className="icon">
              ⚡
            </div>

            <h2>
              LEAD Technologies
            </h2>

            <p>
              Powering Technology,
              <br />
              Securing Tomorrow.
            </p>

          </div>

        </section>


        {/* ABOUT */}

        <section
          className="section"
          id="about"
        >

          <p className="eyebrow">
            ABOUT LEAD
          </p>

          <h2>
            Technology You Can Trust
          </h2>

          <p>
            LEAD Technologies provides professional
            electrical, power backup, security and
            network infrastructure solutions for
            businesses and organizations.
          </p>

        </section>


        {/* SERVICES */}

        <section
          className="section services"
          id="services"
        >

          <p className="eyebrow">
            OUR SERVICES
          </p>

          <h2>
            Complete Technical Solutions
          </h2>

          <div className="cards">

            <div>⚡ UPS & Power Backup</div>

            <div>🔋 Battery Solutions</div>

            <div>🔧 Electrical Engineering</div>

            <div>📹 CCTV & Security</div>

            <div>🌐 Network Infrastructure</div>

            <div>🖥️ Server Room Solutions</div>

            <div>🛠️ Annual Maintenance</div>

            <div>🏢 Project Implementation</div>

          </div>

        </section>


        {/* CONTACT */}

        <section
          className="contact"
          id="contact"
        >

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Need Technical Support?
          </h2>

          <p>
            Contact LEAD Technologies for professional
            technical support.
          </p>

          <h3>
            +94 07 07 189 186
          </h3>

          <h3>
            nalin@lead.lk
          </h3>

          <button
            className="primary-btn contact-btn"
            onClick={openServiceForm}
          >
            Request a Service
          </button>

        </section>

      </main>


      {/* FOOTER */}

      <footer>
        © 2026 LEAD Technologies. All Rights Reserved.
      </footer>


      {/* SERVICE REQUEST POPUP */}

      {showServiceForm && (

        <div
          className="service-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeServiceForm();
            }
          }}
        >

          <div className="service-modal">

            <button
              className="close-btn"
              onClick={closeServiceForm}
              disabled={sending}
            >
              ×
            </button>

            <p className="modal-eyebrow">
              LEAD TECHNOLOGIES
            </p>

            <h2>
              Request a Service
            </h2>

            <p className="modal-text">
              Please provide your details and service requirement.
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Service
                </option>

                <option value="UPS & Power Backup">
                  UPS & Power Backup
                </option>

                <option value="Battery Solutions">
                  Battery Solutions
                </option>

                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>

                <option value="CCTV & Security">
                  CCTV & Security
                </option>

                <option value="Network Infrastructure">
                  Network Infrastructure
                </option>

                <option value="Server Room Solutions">
                  Server Room Solutions
                </option>

                <option value="Annual Maintenance">
                  Annual Maintenance
                </option>

                <option value="Project Implementation">
                  Project Implementation
                </option>

              </select>

              <input
                type="text"
                name="address"
                placeholder="Service Location / Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <textarea
                name="requirement"
                rows="5"
                placeholder="Tell us about your requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="send-btn"
                disabled={sending}
              >
                {sending
                  ? "Sending..."
                  : "Send Service Request"}
              </button>

            </form>

          </div>

        </div>

      )}


      {/* SUCCESS POPUP */}

      {showSuccess && (

        <div className="success-overlay">

          <div className="success-box">

            <div className="success-icon">
              ✓
            </div>

            <p className="success-small">
              LEAD TECHNOLOGIES
            </p>

            <h2>
              Request Sent Successfully!
            </h2>

            <p className="success-text">
              Thank you for contacting LEAD Technologies.
              <br />
              Our team will contact you shortly.
            </p>

            <button
              className="success-btn"
              onClick={() => setShowSuccess(false)}
            >
              Done
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;