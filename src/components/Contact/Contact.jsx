// import React from "react";
// import "./Contact.css";
// import NavBar from "../NavBar/NavBar";
// import ContactForm from "../ContactForm/ContactForm";

// function Contact() {
//     return (
//         <>
//             <NavBar />
//             <section className="contact-container">
//                 <div className="contact-msg">
//                     <h3>Would love to hear from you.</h3>
//                 </div>
//                 <div className="contact-form-container">
//                     <ContactForm />
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Contact;


import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
    return (
        <>
            <NavBar />
            <section className="w-[98%] h-[77vh] mx-auto mt-[100px] flex justify-between items-center md:flex-row flex-col md:h-[77vh]">
                <div className="md:w-[30%] w-[90%] h-full  flex justify-center items-center">
                    <h3 className="font-['Six_Caps'] text-[6.4rem] md:text-[9rem] font-extralight leading-[1] uppercase text-black text-center md:text-left">
                        Would love to hear from you.
                    </h3>
                </div>
                <div className="md:w-[50%] w-[90%] md:h-full h-auto mt-5 md:mt-0 py-5 md:py-0 rounded-[10px] flex justify-center items-center bg-no-repeat bg-cover">
                    <ContactForm />
                </div>
            </section>
        </>
    );
}

export default Contact;