import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Email {
  from_name: string;
  from_email: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state to handle async request

  // Honeypot field check
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState<Email>({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ from_name: "", from_email: "", message: "" });

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
      className="flex flex-col gap-6 w-[100%] max-w-[98vw] p-6 md:max-w-lg mx-auto bg-gray-50 dark:bg-gray-50 dark:border shadow-md"
    >
      <label
        htmlFor="name"
        className="font-bold text-lg text-dark dark:text-light"
      >
        Imię
      </label>
      <input
        value={formData.from_name}
        onChange={handleChange}
        type="text"
        id="name"
        name="from_name"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark"
      />

      <label
        htmlFor="email"
        className="font-bold text-lg text-dark dark:text-light"
      >
        E-mail
      </label>
      <input
        value={formData.from_email}
        onChange={handleChange}
        type="email"
        id="email"
        name="from_email"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark"
      />

      <label
        htmlFor="message"
        className="font-bold text-lg text-dark dark:text-light"
      >
        Wiadomość
      </label>
      <textarea
        value={formData.message}
        onChange={handleChange}
        id="message"
        name="message"
        required
        className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light resize-none"
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
        className={`p-3 text-light dark:text-dark font-bold rounded-md transition-colors duration-300 ${
          isLoading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-dark dark:bg-light hover:bg-gray-700 dark:hover:bg-gray-200"
        }`}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
