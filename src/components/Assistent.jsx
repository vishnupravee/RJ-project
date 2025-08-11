// import React, { useState } from "react";
// import "./Assistant.css"; // Import CSS

// export default function Assistent() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "How can I help you?" }
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [showOptions, setShowOptions] = useState(false);
//   const [showWhatsApp, setShowWhatsApp] = useState(false);

//   const whatsappNumber = "1234567890"; // Replace with your number

//   const handleSend = () => {
//     if (!userInput.trim()) return;
//     setMessages((prev) => [...prev, { from: "user", text: userInput }]);
//     setUserInput("");
//     setShowOptions(true);
//   };

//   const handleOptionClick = () => {
//     setMessages((prev) => [
//       ...prev,
//       { from: "bot", text: "Click here to connect" }
//     ]);
//     setShowOptions(false);
//     setShowWhatsApp(true);
//   };

//   return (
//     <div>
//       {/* Floating Button */}
//       {!open && (
//         <button className="floatingButton" onClick={() => setOpen(true)}>
//           Hi 👋
//         </button>
//       )}

//       {/* Chat Window */}
//       {open && (
//         <div className="chatWindow">
//           <div className="chatHeader">
//             Assistant
//             <button className="closeBtn" onClick={() => setOpen(false)}>
//               ✖
//             </button>
//           </div>

//           <div className="messages">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={message ${msg.from === "bot" ? "bot" : "user"}}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {showOptions && (
//               <div className="options">
//                 <button className="optionBtn" onClick={handleOptionClick}>
//                   Building Website
//                 </button>
//                 <button className="optionBtn" onClick={handleOptionClick}>
//                   Digital Marketing
//                 </button>
//                 <button className="optionBtn" onClick={handleOptionClick}>
//                   Other
//                 </button>
//               </div>
//             )}

//             {showWhatsApp && (
//               <a
//                 href={https://wa.me/${whatsappNumber}}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="whatsappBtn"
//               >
//                 💬 WhatsApp
//               </a>
//             )}
//           </div>

//           {!showOptions && !showWhatsApp && (
//             <div className="inputArea">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 placeholder="Type a message..."
//                 className="chatInput"
//               />
//               <button onClick={handleSend} className="sendBtn">
//                 ➤
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Assistent.css"; // Import CSS

export default function Assistent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "How can I help you?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const whatsappNumber = "9562211210"; // Replace with your WhatsApp number

  const handleSend = () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: userInput }]);
    setUserInput("");
    setShowOptions(true);
  };

  const handleOptionClick = () => {
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "Click here to connect" }
    ]);
    setShowOptions(false);
    setShowWhatsApp(true);
  };

  return (
    <div>
      {/* Floating Button */}
      {!open && (
        <button className="floatingButton" onClick={() => setOpen(true)}>
           👋 Hi
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatWindow">
          <div className="chatHeader">
            Assistant
            <button className="closeBtn" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div className="messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}

            {showOptions && (
              <div className="options">
                <button className="optionBtn" onClick={handleOptionClick}>
                  Building Website
                </button>
                <button className="optionBtn" onClick={handleOptionClick}>
                  Digital Marketing
                </button>
                <button className="optionBtn" onClick={handleOptionClick}>
                  Other
                </button>
              </div>
            )}

            {showWhatsApp && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsappBtn"
              >
                💬 WhatsApp
              </a>
            )}
          </div>

          {!showOptions && !showWhatsApp && (
            <div className="inputArea">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message..."
                className="chatInput"
              />
              <button onClick={handleSend} className="sendBtn">
                ➤
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
