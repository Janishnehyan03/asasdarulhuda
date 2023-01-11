import React from "react";

function Contact() {
  return (
    <div>
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold leading-8 text-indigo-600">
          Contact
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Want to know about us?
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Please contact us
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg m-4">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to chat with us?</span>
            <span className="block text-indigo-600">Chat Now</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://wa.me/919778372138?text=Hi,%20ASAs"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
