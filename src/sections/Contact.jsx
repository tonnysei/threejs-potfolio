import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-5 py-14">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="title-font mb-4 text-4xl font-medium text-white sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto text-xl leading-relaxed lg:w-2/3 text-white-700">
          We are passionate about bringing your ideas to life. Reach out today and let’s start building something amazing together!
        </p>
      </div>

      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-xl leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-lg leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-indigo-500"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-xl leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-6 bg-transparent text-lg leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-indigo-500"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-xl leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-lg leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-7 peer-focus:text-lg peer-focus:text-indigo-500"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                className="mx-auto flex rounded border-0 bg-indigo-500 py-3 px-8 text-2xl text-white hover:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <a className="text-indigo-400 text-xl" href="mailto:example@email.com">
              yassinegaff@email.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
