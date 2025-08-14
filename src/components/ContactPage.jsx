export function ContactPage() {
  return (
    <section className="bg-gray-100 w-full py-20 px-6" id="contacts">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Contact Me</h1>
        <p className="text-gray-600 mb-12" data-aos="fade-up">
          Have a question or want to work together? Fill out the form below or reach out through my socials.
        </p>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-md w-full p-8 space-y-6" data-aos="fade-up">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-left font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-left font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-left font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="5"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-600"
            />
          </div>

          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
       <div className="mt-10 flex gap-6" data-aos="fade-up">
  <a
    href="https://github.com/Jozelviernes"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-violet-600"
  >
    <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
    <span className="text-gray-700">GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/jozel-viernes-b88283250/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-violet-600"
  >
    <img src="/linked.svg" alt="LinkedIn" className="w-6 h-6" />
    <span className="text-gray-700">LinkedIn</span>
  </a>

  <a
    href="https://www.facebook.com/jozel.viernes.5/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-violet-600"
  >
    <img src="/fb.svg" alt="Facebook" className="w-6 h-6" />
    <span className="text-gray-700">Facebook</span>
  </a>
</div>

      </div>
    </section>
  );
}
