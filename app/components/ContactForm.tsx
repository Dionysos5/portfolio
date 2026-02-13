export default function ContactForm() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-100">
            Get in touch
          </h3>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have a question or want to work together? Just fill out the form
            below and I'll get back to you as soon as possible.
          </p>
          <form
            action="https://formsubmit.co/0aef44397badb709c879ea234a3079cf"
            method="POST"
            className="space-y-8"
          >
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400"
                placeholder="Email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:placeholder-gray-400"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 cursor-pointer text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
