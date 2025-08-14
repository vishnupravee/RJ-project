// import React, { useState } from "react";
// import "../components/ContactPage.css";
// import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// const ContactPage = () => {

//    const [message, setMessage] = useState('');
//   const RECIPIENT_EMAIL = 'rjatlasdigitalai@gmail.com';
//   const handleOpenEmail = () => {

//     const encodedMessage = encodeURIComponent(message);
//     const mailtoLink = `mailto:${RECIPIENT_EMAIL}?body=${encodedMessage}`;
//     window.location.href = mailtoLink;
//   };


//   // const handleSendWhatsApp = (message) => {

//   //   const phoneNumber = "919400547953"; // No "+" sign here
//   //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   //   window.open(url, "_blank");
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const msg = document.getElementById("message").value;
//     if (msg.trim() !== "") {
//       handleOpenEmail(msg);
//     } else {
//       alert("Please enter a message before sending.");
//     }
//   };
//   return (
//     <section className="contact-page bg-gray-900 text-white py-16 px-6 md:px-20" id="contact">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
//         {/* Contact Form */}
//         <div className="contact-form ">
//           <h2 className=" text-3xl font-bold mb-6">Get in Touch</h2>
//           <form className="space-y-5 "onSubmit={handleSubmit}>
//             <div>
//               <label className="block mb-2 font-medium">Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div>
//               <label className="block mb-2 font-medium">Message</label>
//               <textarea
//                  id="message"
                 
//                 className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <button
              
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-semibold transition-all"
               
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div className="contact-details">
//           <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//           <p className="mb-4">
//             Have questions about our AI services or want to discuss your project?  
//             We’d love to hear from you.
//           </p>
         

// <ul className="space-y-4">
//   <li className="flex items-center p-1">
//     <FaMapMarkerAlt  className="text-sky-400 mr-3" />
//     Thalassery, Kerala, India
//   </li>

//   <li className="flex items-center p-1">
//     <FaEnvelope  className="text-sky-400 mr-3" />
//     info@rjatlas.com
//   </li>

//   <li className="flex items-center p-1">
//     <FaPhoneAlt  className="text-sky-400 mr-3" />
//     +91 98765 43210
//   </li>
// </ul>

//           <div className="mt-6">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.294015099269!2d75.5702514!3d11.746302799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba1d6e6d3a9efab%3A0x6e5f6c9b8964f8e4!2sThalassery%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1691669737765!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               className="rounded border-0"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;


import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../components/ContactPage.css";

import toast from "react-hot-toast";

const ContactPage = () => {
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://atlas-ai-back-ochre.vercel.app/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

     
        if (data.success) {
        alert("Message sent successfully!");
        
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
        //  toast.error("Something went wrong");
      }

      //  if (data.success) {
      //   toast.success("Message sent successfully!");
      //   setFormData({ name: "", email: "", message: "" });
      // } else {
      //   toast.error(data.error || "Failed to send message.");
      // }
     
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-page bg-gray-900 text-white py-16 px-6 md:px-20"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-semibold transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="mb-4">
            Have questions about our AI services or want to discuss your project?
            We’d love to hear from you.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center p-1">
              <FaMapMarkerAlt className="text-sky-400 mr-3" />
              Thalassery, Kerala, India
            </li>
            <li className="flex items-center p-1">
              <FaEnvelope className="text-sky-400 mr-3" />
              info@rjatlas.com
            </li>
            <li className="flex items-center p-1">
              <FaPhoneAlt className="text-sky-400 mr-3" />
              +91 98765 43210
            </li>
          </ul>

          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.294015099269!2d75.5702514!3d11.746302799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba1d6e6d3a9efab%3A0x6e5f6c9b8964f8e4!2sThalassery%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1691669737765!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;


