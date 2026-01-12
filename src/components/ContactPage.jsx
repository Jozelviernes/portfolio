import { useState } from "react";

export function ContactPage() {
  const FORMSPREE_URL = "https://formspree.io/f/mwvvkvae";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", msg: "" });

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setStatus({ type: "success", msg: "Message sent! I’ll reply soon." });
      setForm({ name: "", email: "", message: "" });
   } catch {
  setStatus({
    type: "error",
    msg: "Something went wrong. Please try again.",
  });
} finally {
  setLoading(false);
}

  };

  return (
    <section className="bg-gray-100 w-full py-20 px-6" id="contacts">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Contact Me</h1>
        <p className="text-gray-600 mb-12" data-aos="fade-up">
          Have a question or want to work together? Fill out the form below or reach out through my socials.
        </p>

        <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md w-full p-8 space-y-6" data-aos="fade-up">
          <div className="flex flex-col">
            <label className="text-left font-semibold mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left font-semibold mb-2">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
              placeholder="Write your message..."
            />
          </div>

          {status.type !== "idle" && (
            <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.msg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-violet-600 disabled:opacity-60 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6" data-aos="fade-up">
          <a href="https://github.com/Jozelviernes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-violet-600">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            <span className="text-gray-700">GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/jozel-viernes-b88283250/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-violet-600">
            <img src="/linked.svg" alt="LinkedIn" className="w-6 h-6" />
            <span className="text-gray-700">LinkedIn</span>
          </a>

          <a href="https://www.facebook.com/jozel.viernes.5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-violet-600">
            <img src="/fb.svg" alt="Facebook" className="w-6 h-6" />
            <span className="text-gray-700">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
