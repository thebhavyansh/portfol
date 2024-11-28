"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import profile from "../../../public/profile.png";
import emailjs from '@emailjs/browser';
function Contact() {
  // State to manage form inputs


  // Handle form submission
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_up92gxo', 'template_9vh1mgy', form.current, {
        publicKey: '3EZfN2qwNJ3nImQzH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email send Successfull")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="text-[#cd9403] ft text-center md:text-[45px] text-[30px] font-bold">
        <p>Checkout my </p>
        <strong>Resume</strong>
      </div>
      <div className="border border-transparent p-2 rounded-2xl bg-[#2b2b2b] my-3 md:w-[800px] flex flex-col justify-center items-center">
        <Image
          src={profile}
          width={100}
          height={80}
          className="border my-4 rounded-[60%]"
        />
        <div className="text-[#cd9403] md:text-[35px] text-[30px] font-bold">
          Bhavyansh Tomar
        </div>
        <div className="text-[20px] flex md:flex-row flex-col items-center justify-center">
          <p>A</p><strong>Full Stack Developer</strong>
        </div>
        <div className="flex my-4 gap-5">
          <Link href="https://drive.google.com/file/d/1KE6tGCNuWSuqRCEN3GeFbBUk33IV823N/view?usp=sharing">
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-black hover:text-[#cd9403] hover:fill-[#cd9403] bg-[#cd9403] duration-150 hover:bg-transparent border-[#cd9403] active:bg-indigo-700">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="text-[#cd9403] mt-28 ft text-center md:text-[45px] text-[20px] font-bold">
        <p>Contact me</p>
      </div>
      <div className="my-3">
        <section className="bg-[#2b2b2b] border border-transparent rounded-2xl">
          <div className="py-8 lg:py-16 px-4 mx-auto md:w-[800px] w-[300px] border rounded-2xl border-transparent">
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="message"
                  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-black text-sm bg-gray-50 rounded-lg border"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="gap-2 border rounded-full px-4 py-2 text-black hover:text-[#cd9403] bg-[#cd9403] duration-150 hover:bg-transparent border-[#cd9403] active:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
