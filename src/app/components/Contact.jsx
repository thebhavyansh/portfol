import Image from "next/image";
import React from "react";
import profile from "../../../public/profile.png";
import "./all.css";
function Contact() {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="text-[#cd9403] ft text-center md:text-[45px] text-20px font-bold">
        <p>Checkout my </p>
        <strong>Resume</strong>
      </div>
      <div className="border border-transparent rounded-2xl bg-[#2b2b2b] my-3 w-[800px] flex flex-col justify-center items-center">
        <Image
          src={profile}
          width={100}
          height={80}
          className="border my-4  rounded-[60%]"
        />
        <div className="text-[#cd9403] md:text-[35px] text-20px font-bold">
          Bhavyansh Tomar
        </div>
        <div className="text-[20px]">
          A <strong>Full Stack Developer</strong>
        </div>
        <div className=" flex my-4 gap-5">
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-black hover:text-[#cd9403] hover:fill-[#cd9403] bg-[#cd9403] duration-150 hover:bg-transparent  border-[#cd9403] active:bg-indigo-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path d="M17.974,7.146c-.332-.066-.603-.273-.742-.569-1.552-3.271-5.143-5.1-8.735-4.438-3.272,.6-5.837,3.212-6.384,6.501-.162,.971-.15,1.943,.033,2.89,.06,.309-.073,.653-.346,.901-1.145,1.041-1.801,2.524-1.801,4.07,0,3.032,2.467,5.5,5.5,5.5h11c4.136,0,7.5-3.364,7.5-7.5,0-3.565-2.534-6.658-6.026-7.354Zm-2.853,7.562l-2.707,2.707c-.387,.387-.896,.582-1.405,.584l-.009,.002-.009-.002c-.509-.002-1.018-.197-1.405-.584l-2.707-2.707c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.707,1.707v-5c0-.553,.448-1,1-1s1,.447,1,1v5l1.707-1.707c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z" />
            </svg>
            Resume
          </button>
          <button className="flex items-center gap-2 px-6 py-2 text-[#cd9403] hover:bg-[#cd9403] hover:text-black  bg-transparen rounded-full duration-150 border border-[#cd9403] active:bg-indigo-700">
            Contact me
          </button>
        </div>
      </div>
      <div className="text-[#cd9403] mt-28 ft text-center md:text-[45px] text-20px font-bold">
        <p>Contact me </p>
      </div>
      <div className="my-3">

      <section class="bg-[#2b2b2b] border border-transparent rounded-2xl">
  <div class="py-8 lg:py-16 px-4 mx-auto w-[800px] border rounded-2xl border-transparent">
     
      <form action="#" class="space-y-8">
      <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-black hover:text-[#cd9403] hover:fill-[#cd9403] bg-[#cd9403] duration-150 hover:bg-transparent  border-[#cd9403] active:bg-indigo-700">
      
            Send
          </button>
      </form>
  </div>
</section>
      </div>
    </div>
  );
}

export default Contact;
