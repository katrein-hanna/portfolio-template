import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Use effect to clear the status message after 2 seconds
  useEffect(() => {
    let timeoutId;

    if (submitStatus) {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }

    // Clean up the timeout if component unmounts or status changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error when user starts typing
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(formData.email), // Basic email validation
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms submission
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "#", // Get from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `My Portfolio, from: ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setSubmitStatus("success");
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  //lg:w-[85vw]
  return (
    <section id="contact">
      {submitStatus === "success" && (
        <div className="bg-background border border-text-hover text-primary px-4 py-3 rounded-3xl mb-4 mt-10 text-center lg:w-[60vw] lg:mx-auto">
          <p>Thank you for your message </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mt-10 text-center lg:w-[60vw] lg:mx-auto">
          <p>
            Sorry, there was a problem sending your message. Please try again
            later.
          </p>
        </div>
      )}
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title"> Contact Me</h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and frameworks, dedicated to building
            efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16 lg:max-w-[80rem] mx-auto">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone}
            />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>
          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                id=""
                className={`input-box ${errors.name ? "border-red-500" : ""}`}
                autoComplete="off"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required.</p>
              )}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                id=""
                className={`input-box ${errors.email ? "border-red-500" : ""} `}
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid email.
                </p>
              )}
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                id=""
                rows={3}
                className={`input-box ${
                  errors.message ? "border-red-500" : ""
                }`}
                autoComplete="off"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  Message is required.
                </p>
              )}
              <button
                disabled={isSubmitting}
                className={`action-btn btn-scale-anim ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
