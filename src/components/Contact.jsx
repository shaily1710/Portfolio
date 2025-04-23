import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const appElement = document.getElementById("__next");
      if (appElement) {
        Modal.setAppElement(appElement);
      }
    }
  }, []);

  return (
    <div className='mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8' id='contact'>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12'
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center'
        >
          Contact me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-gray-300 text-lg text-center max-w-2xl leading-relaxed'
        >
          Contact me here
        </motion.p>

        <button
          onClick={() => setModalIsOpen(true)}
          className='relative overflow-hidden group bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 px-8 py-4 md:text-lg rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white'
        >
          <span className='relative z-10'> Get in touch </span>
          <div className='absolute inset-0 bg-gradient-to-r to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </button>

        {/* Modal */}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Contact Form"
            className="bg-gray-900 p-6 rounded-lg max-w-lg mx-auto shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            appElement={typeof document !== "undefined" ? document.getElementById("__next") : undefined}
        >


          <h2 className='text-2xl text-white mb-4'>Contact Me</h2>
          <form action="https://formsubmit.co/3af5b37e6e8bfe69d5496b0622de4ed8" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
                rows="4"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all"
            >
                Send Message
            </button>
    </form>


          <button
            onClick={() => setModalIsOpen(false)}
            className='mt-4 text-red-400 hover:text-red-500'
          >
            Close
          </button>
        </Modal>
      </motion.div>

      <footer className='w-full mt-16 border-t border-gray-800/30 p-10'>
        <div className='text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors'>
          © 2025 Shaily Chaturvedi. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
