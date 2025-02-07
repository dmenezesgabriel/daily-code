export default function Contact() {
  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        <h1 className="wobble mb-6 text-center text-4xl font-bold">
          Contact Me
        </h1>
        <p className="mb-8 text-center text-lg">
          Got a scoop? A joke? Or just want to say hi? Drop me a line!
        </p>
        <form className="mx-auto max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-bold text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
            >
              Send it our way!
            </button>
          </div>
        </form>
        <div className="cartoon-border mt-12 rounded-lg bg-pink-200 p-4">
          <h3 className="mb-2 text-center text-xl font-bold">
            Psst! Secret Message!
          </h3>
          <p className="text-center">
            If you made it this far, you're officially awesome! Here's a virtual
            high-five! ✋
          </p>
        </div>
      </div>
    </div>
  );
}
