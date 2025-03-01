import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactForm/ContactForm";
import { Instagram, Facebook, Youtube } from "lucide-react";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-4">
        <section className="flex flex-col justify-between items-center w-full md:w-[98%] mx-auto md:my-[30px] my-[30px] mb-8">
          <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none mb-0">
            Would love to hear from you.
          </h2>
        </section>
        <section className="w-[100%]  mx-auto mt-[30px] flex justify-between  md:flex-row flex-col ">
          <div className="md:w-[50%] w-full h-full flex flex-col justify-center items-start space-y-6">
            <h3 className="font-['Six_Caps'] text-[2rem] md:text-[2.5rem] font-extralight leading-[1] uppercase text-black text-center md:text-left my-2">
              Get in Touch
            </h3>
            <div className="text-lg text-black font-light leading-relaxed space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M3 9 12 3l9 6"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">OnGrid Architects</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Office Address:</p>
                  <p className="text-gray-600">
                    House 970, Street 01A, Ravi Block, Mumtaz City, Islamabad, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone:</p>
                  <a
                    href="tel:+923085557904"
                    className="text-gray-600 hover:text-black transition-colors duration-300 hover:underline"
                  >
                    +92 308 5557904
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email:</p>
                  <a
                    href="mailto:mehdi@ongridarchitects.com"
                    className="text-gray-600 hover:text-black transition-colors duration-300 hover:underline"
                  >
                    mehdi@ongridarchitects.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[50%] w-full md:h-fit h-auto mt-5 md:mt-0 py-5 md:py-0 rounded-[10px] ">
            <div className=" w-full">
              <ContactForm />
            </div>
          </div>
        </section>
        <section className="w-full mx-auto mt-[50px] flex items-center md:flex-row flex-col  ">
          <div className="md:w-[50%] w-full h-full flex-col flex  items-start md:items-start h-[350px] md:h-[400px]">
            <h3 className="font-['Six_Caps'] text-[2rem] md:text-[2.5rem] font-extralight leading-[1] uppercase text-black text-center md:text-left mb-6">
              Connect With Us
            </h3>
            <div className="w-full">
              <p className="text-gray-600 mb-6 max-w-md">
                Follow us on social media to stay updated with our latest projects, design
                inspiration, and architectural insights.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-gray-100 transition-colors duration-300 p-3 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="bg-pink-50 p-2 rounded-full">
                    <Instagram className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Instagram</p>
                    <p className="text-gray-500 text-sm">@ongridarchitects</p>
                  </div>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-gray-100 transition-colors duration-300 p-3 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Facebook className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Facebook</p>
                    <p className="text-gray-500 text-sm">OnGrid Architects</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-gray-100 transition-colors duration-300 p-3 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="bg-red-50 p-2 rounded-full">
                    <Youtube className="text-red-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">YouTube</p>
                    <p className="text-gray-500 text-sm">OnGrid Architects</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-full md:h-full h-auto mt-5 md:mt-0 py-5 md:py-0 rounded-[10px] flex justify-center items-center h-[350px] md:h-[400px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9850.436569243466!2d72.83149033597903!3d33.582642707114566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99750c939f77%3A0x7a2737279b09fce3!2sMumtaz%20City%20Islamabad%2C%20Pakistan!5e1!3m2!1sen!2sus!4v1740762196555!5m2!1sen!2sus"
              className="w-full h-full rounded-[10px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
