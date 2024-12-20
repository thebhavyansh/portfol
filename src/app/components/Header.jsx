"use client"
import { useState,useEffect } from 'react'
import "@/app/globals.css"
export default () => {

  const [state, setState] = useState(false)
  const [isVisible, setIsVisible] = useState(true); // Header visibility state
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scrolling down and past a threshold, hide the header
        setIsVisible(false);
      } else {
        // Scrolling up or near the top, show the header
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [prevScrollPos]);
  const handleScroll = (id) => {
    console.log(`Scrolling to: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`No element found with id: ${id}`);
    }
  };
  
  const navigation = [
      { title: "Work", path: "projects" },
      { title: "Experience", path: "experience" },
      { title: "Contact", path: "contact" }
  ]

  return (
      <nav className={`bg-[#c9c9c9] fixed top-0 z-50 w-full border-b transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <h2 className='text-black alice-regular '>Bhavyansh Tomar</h2>
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                    <button onClick={() =>  handleScroll(item.path)}>
                                    { item.title }
                                    </button>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
             
          </div>
      </nav>
  )
}