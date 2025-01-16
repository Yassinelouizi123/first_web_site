"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMeForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0xsl69s", // Replace with your EmailJS service ID
        "template_6yjwfgh", // Replace with your EmailJS template ID
        form.current,
        "_Umn-GpmDPaE4HAsO" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contactez-nous</h2>
      <form ref={form} className="space-y-6" onSubmit={sendEmail}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name" // Matches {{name}} in the template
            className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email" // Matches {{email}} in the template
            className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Votre email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Matches {{message}} in the template
            className="w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            rows={5}
            placeholder="Votre message"
            required
          />
        </div>
        {/* Hidden input for recipient email */}
        <input
          type="hidden"
          name="to_email"
          value="yajejzje@gmail.com" // Replace with the recipient email
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer un message"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactMeForm;