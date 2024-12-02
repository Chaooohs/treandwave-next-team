"use client";
import { useState, useEffect } from "react";

export default function NotificationModal({ message }) {
  const [newMessage, setNewMessage] = useState(message);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setNewMessage(message);
      setIsVisible(true); 
    }
  }, [message]); 

  useEffect(() => {
    if (newMessage && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [newMessage, isVisible]); 

  return (
    <div>
        {isVisible && 
            <div className="fixed z-50 top-0 left-0 right-0 flex items-center justify-center bg-green-500 w-full h-auto">
            <div className="absolute top-32 left-10 border border-[#336CFF] bg-white p-4 rounded shadow-lg text-black">
              <p>{newMessage}</p>
            </div>
          </div>
        }
    </div>
    
  );
}