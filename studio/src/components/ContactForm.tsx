import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state to handle async request

  // Honeypot field check
  const [honeypot, setHoneypot] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If honeypot field is filled out, it's likely a bot
    if (honeypot) {
      console.log("Bot detected!");
      return;
    }

    if (form.current) {
      setIsLoading(true); // Start loading

      emailjs
        .sendForm(
          "service_k7qhc75", // Replace with your EmailJS service ID
          "template_xh535av", // Replace with your EmailJS template ID
          form.current,
          "Dyr_-S3nlramjWkux" // Replace with your EmailJS public key
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
          },
          (error: any) => {
            console.error("FAILED...", error.text);
            alert("Message failed to send.");
          }
        )
        .finally(() => {
          setIsLoading(false); // End loading
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md"
    >
      <label htmlFor="name" className="font-bold text-lg text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="from_name"
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <label htmlFor="email" className="font-bold text-lg text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="from_email"
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <label htmlFor="message" className="font-bold text-lg text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
      />

      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        style={{ display: "none" }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`p-3 text-white font-bold rounded-md transition-colors duration-300 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
