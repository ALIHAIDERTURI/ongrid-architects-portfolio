import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.info("Sending your inquiry... Please wait.", { autoClose: false });
    
        const formData = new FormData(form.current);
        const userName = formData.get("user_name");
        const userEmail = formData.get("user_email");
        const userMessage = formData.get("message");
    
        const inquiryHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="text-align: center; color: #2C3E50;">You Have a New Inquiry</h2>
                <p><strong>From:</strong> ${userName}</p>
                <p><strong>Email:</strong> ${userEmail}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="border-left: 4px solid #3498DB; padding: 10px; color: #555;">
                    ${userMessage}
                </blockquote>
                <div style="text-align: center; margin-top: 30px;">
                    <img src="https://res.cloudinary.com/ongridarchitects/image/upload/v1734115785/OnGrid_-_DP_Whatsapp-Insta-Facebook_u6hx9w.jpg" alt="OnGrid Architects" style="width: 200px; height: auto; border-radius: 10px;" />
                </div>
            </div>
        `;
    
        const customerEmailBody = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="text-align: center; color: #2C3E50;">Thank You for Contacting Us!</h2>
                <p>Dear ${userName},</p>
                <p>Thank you for reaching out to us! We've received your inquiry and our team will respond as soon as possible.</p>
                <p>If you have any urgent questions or additional details, feel free to reply to this email or contact us on WhatsApp at <a href="tel:+923085557904" style="color: #3498DB; text-decoration: none;">+92 308 555 7904</a>.</p>
                <p>We're excited to assist you and look forward to working together!</p>
                <p>Best regards,</p>
                <p><strong>OnGrid Architects</strong></p>
                <p>
                    Email: <a href="mailto:mehdi@ongridarchitects.com" style="color: #3498DB; text-decoration: none;">mehdi@ongridarchitects.com</a><br>
                    Address: TopCity, Islamabad, Pakistan
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <img src="https://res.cloudinary.com/ongridarchitects/image/upload/v1734115785/OnGrid_-_DP_Whatsapp-Insta-Facebook_u6hx9w.jpg" alt="OnGrid Architects" style="width: 150px; height: auto; border-radius: 10px;" />
                </div>
            </div>
        `;
    
        const teamEmailData = {
            user_first_name: userName,
            to_name: "OnGrid Architect Team",
            to_email: "alihaideturiofficial@gmail.com",
            message_html: inquiryHtml,
        };
    
        const customerEmailData = {
            cus_name: userName,
            cus_email: userEmail,
            email_body: customerEmailBody,
            unique_id: Date.now(),
        };
    
        emailjs.send(
            import.meta.env.VITE_YOUR_SERVICE_ID,
            import.meta.env.VITE_YOUR_TEMPLATE_ID,
            { ...teamEmailData },
            import.meta.env.VITE_YOUR_PUBLIC_KEY
        ).then(
            (result) => {
                console.log("Team email sent successfully:", result.text);
                toast.dismiss();
                toast.success("Inquiry mail sent!");
    
                emailjs.send(
                    import.meta.env.VITE_YOUR_SERVICE_ID,
                    import.meta.env.VITE_YOUR_CUSTOMER_TEMPLATE_ID,
                    { ...customerEmailData },
                    import.meta.env.VITE_YOUR_PUBLIC_KEY
                ).then(
                    (result) => {
                        console.log("Customer email sent successfully:", result.text);
                        toast.success("You will shortly receive an email!");
                        setSubmitted(true);
                    },
                    (error) => {
                        console.error("Error sending customer email:", error.text);
                        toast.error("Submission failed. Please try again later.");
                    }
                ); 
            },
            (error) => {
                console.error("Error sending team email:", error.text);
                toast.dismiss();
                toast.error("Failed to send message. Please try again later.");
            }
        );
    };

    if (submitted) {
        return (
            <div className="font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira_Sans,Droid_Sans,Helvetica_Neue,sans-serif] text-[3rem]">
                <h2 className="uppercase font-black text-[70px]">Thank you!</h2>
                <p>We'll be in touch soon.</p>
            </div>
        );
    }

    return (
        <form
            className="w-[100%]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    type="text"
                    placeholder="Your name"
                    name="user_name"
                    required
                    className="block mx-auto  w-full  h-[50px] md:h-[60px] border-none rounded-[10px] mt-[10px] mb-[15px] pl-[10px] text-base bg-[rgb(217,217,217)]"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                    className="block mx-auto w-full h-[50px] md:h-[60px] border-none rounded-[10px] mt-[10px] mb-[15px] pl-[10px] text-base bg-[rgb(217,217,217)]"
                />
            </div>
            <div>
                <textarea
                    placeholder="Your message"
                    name="message"
                    required
                    className="block mx-auto w-full  h-[130px] border-none rounded-[10px] mt-[10px] mb-[15px] pl-[10px] pt-[10px] text-base bg-[rgb(217,217,217)]"
                />
            </div>
            <div>
                <button 
                    type="submit"
                    className="block mx-auto w-full  h-[50px] md:h-[60px] border-none rounded-[10px] mt-[10px] mb-[15px] text-base bg-[rgb(16,16,16)] text-white cursor-pointer hover:bg-[rgb(102,102,102)] hover:text-black transition-colors"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
