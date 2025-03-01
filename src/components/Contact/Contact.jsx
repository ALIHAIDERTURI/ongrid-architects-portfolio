import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactForm/ContactForm";
import { Instagram, Facebook, Youtube } from "lucide-react";

function Contact() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-between items-center w-[98%] md:w-[98%] mx-auto md:my-[30px] my-[30px] mb-8">
        <h2 className="font-['Six_Caps'] text-6xl md:text-[4rem] font-thin uppercase text-black leading-none mb-0">
          Would love to hear from you.
        </h2>
      </section>
      <section className="w-[98%]  mx-auto mt-[30px] flex justify-between items-center md:flex-row flex-col ">

        <div className="md:w-[50%] w-[98%] h-full flex flex-col justify-center items-start space-y-6">
          <h3 className="font-['Six_Caps'] text-[2rem] md:text-[2rem] font-extralight leading-[1] uppercase text-black text-center md:text-left">
            Office Address
          </h3>
          <div className="text-lg text-black font-light leading-relaxed">
            <p className="font-semibold">OnGrid Architects</p>
            <p>House 970, Street 01A, Ravi Block, Mumtaz City, Islamabad, Pakistan</p>
            <p>
              Phone:{" "}
              <a href="tel:+923001234567" className="hover:underline">
                +92 308 5557904
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@ongridarchitects.com" className="hover:underline">
                mehdi@ongridarchitects.com
              </a>
            </p>
          </div>
        </div>

        <div className="md:w-[50%] w-[98%] md:h-fit h-auto mt-5 md:mt-0 py-5 md:py-0 rounded-[10px] ">
         
          <div className=" w-full">
          <ContactForm />
          </div>
        </div>
      </section>
      <section className="w-[98%] mx-auto mt-[100px] flex justify-between items-center md:flex-row flex-col md:h-[77vh]">
        <div className="md:w-[50%] w-[90%] h-full flex-col  flex justify-center items-center">
          <h3 className="font-['Six_Caps'] text-[2rem] md:text-[2rem] font-extralight leading-[1] uppercase text-black text-center md:text-left">
            social Follows
          </h3>
          <div className="">
            <div className="flex w-1/2 gap-1">
              <a href="" className=" hover:bg-gray-300 p-2 rounded-full">
                <Instagram />
              </a>
              <a href="" className="hover:bg-gray-300 p-2 rounded-full">
                <Facebook />
              </a>
              <a href="" className="hover:bg-gray-300 p-2 rounded-full">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-[90%] md:h-full h-auto mt-5 md:mt-0 py-5 md:py-0 rounded-[10px] flex justify-center items-center bg-no-repeat bg-cover">
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
    </>
  );
}

export default Contact;
