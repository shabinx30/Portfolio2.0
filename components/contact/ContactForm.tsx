"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";

const ContactForm = () => {
    const [alert, setAlert] = useState({
        message: "",
        type: "",
    });
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value.trim();
        const email = emailRef.current?.value.trim();
        const message = messageRef.current?.value.trim();

        if (!name || !email || !message) {
            showAlert("Please fill the form completely");
            return;
        }

        if (name.length > 100) {
            showAlert("Name is too long!");
            return;
        }
        if (name.length < 2) {
            showAlert("Name is too short!");
            return;
        }
        if (message.length > 2000) {
            showAlert("Message is too long!");
        }
        if (message.length < 5) {
            showAlert("Message is too short!");
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail || email.length > 254) {
            showAlert("Invalid email!");
            return;
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();
        if (data.message === "success") {
            if (nameRef.current && emailRef.current && messageRef.current) {
                nameRef.current.value = "";
                emailRef.current.value = "";
                messageRef.current.value = "";
            }
            showAlert("Message delivered", "success")
            return 
        }
        showAlert("Could not deliver!")
    };

    function showAlert(message: string, type: string = "") {
        setAlert({ message, type });
        setTimeout(() => {
            setAlert((p) => ({ ...p, message: "" }));
        }, 3000);
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="relative flex-1 flex flex-col gap-6 lg:px-[5%]"
        >
            <div className="flex flex-col">
                <label htmlFor="name">
                    Name<span className="text-[#FF7C7C]">*</span>
                </label>
                <input
                    ref={nameRef}
                    id="name"
                    type="text"
                    className="border border-[#704141] outline-[#FF7C7C] outline-none focus:border-[#FF7C7C] p-3.5"
                    placeholder="Your name"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">
                    Email<span className="text-[#FF7C7C]">*</span>
                </label>
                <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    className="border border-[#704141] outline-[#FF7C7C] outline-none focus:border-[#FF7C7C] p-3.5"
                    placeholder="Email address"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message">
                    Message<span className="text-[#FF7C7C]">*</span>
                </label>
                <textarea
                    ref={messageRef}
                    id="message"
                    rows={4}
                    className="border border-[#704141] min-h-[8em] max-h-[14em] outline-[#FF7C7C] outline-none focus:border-[#FF7C7C] p-3.5"
                    placeholder="Write your message"
                ></textarea>
            </div>
            <AnimatePresence>
                {alert.message && (
                    <motion.span
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        className={`absolute flex items-center gap-2 shrink-0 ${alert.type == "success" ? "text-green-500 bg-black" : "text-red-500 bg-[#FFC7C7]"} text-sm w-fit self-center px-3 py-1 rounded-2xl`}
                    >
                        {alert.type == "success" ? (
                            <LuCircleCheckBig />
                        ) : (
                            <GoPlusCircle className="rotate-45" />
                        )}
                        {alert.message}
                    </motion.span>
                )}
            </AnimatePresence>
            <button
                type="submit"
                className="bg-[#FF7C7C] hover:bg-[#FFC7C7] duration-200 mt-8 text-black px-5 pt-2.5 pb-3.5 notable text-sm cursor-pointer rounded-3xl"
            >
                Send your message
            </button>
        </form>
    );
};

export default ContactForm;
