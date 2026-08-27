import { useState } from "react";

function ServiceForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    service: "",
    location: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
LEAD Technologies - Service Request

Customer Name: ${formData.name}
Company: ${formData.company}
Mobile: ${formData.mobile}
Email: ${formData.email}
Service: ${formData.service}
Location: ${formData.location}

Requirement:
${formData.requirement}
    `;

    // WhatsApp
    const whatsappURL =
      "https://wa.me/94707189186?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    // Email
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nalin@lead.lk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New Service Request - LEAD Technologies",
            Name: formData.name,
            Company: formData.company,
            Mobile: formData.mobile,
            Email: formData.email,
            Service: formData.service,
            Location: formData.location,
            Requirement: formData.requirement,
          }),
        }
      );

      if (response.ok) {
        alert(
          "Service request sent successfully!"
        );

        onClose();
      } else {
        alert(
          "WhatsApp request sent. Email could not be sent."
        );
      }
    } catch (error) {
      alert(
        "WhatsApp request sent. Please try email again later."
      );
    }
  };

  return (
    <div className="service-form-overlay">

      <div className="service-form">

        <button
          type="button"
          className="service-form-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="service-form-header">

          <p>LEAD TECHNOLOGIES</p>

          <h2>
            Request a Service
          </h2>

          <span>
            Tell us what you need and our team will contact you.
          </span>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>
                Your Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>
                Company Name
              </label>

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label>
                Mobile Number *
              </label>

              <input
                type="tel"
                name="mobile"
                placeholder="+94 7X XXX XXXX"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="form-group">

            <label>
              Service Required *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >

              <option value="">
                Select a service
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

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          <div className="form-group">

            <label>
              Location *
            </label>

            <input
              type="text"
              name="location"
              placeholder="Project / service location"
              value={formData.location}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Service Requirement *
            </label>

            <textarea
              name="requirement"
              placeholder="Please describe your requirement..."
              rows="5"
              value={formData.requirement}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="service-submit-btn"
          >
            Send Service Request
          </button>

          <p className="form-note">
            Your request will be sent to LEAD Technologies.
          </p>

        </form>

      </div>

    </div>
  );
}

export default ServiceForm;