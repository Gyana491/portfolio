export default function CTA() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mb-8 text-lg text-gray-100">
            Whether you have a project in mind or just want to connect, I'd love to hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="btn bg-gray-900 text-white hover:bg-gray-800"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/mr-gyan491/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white text-white hover:bg-white/10"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
