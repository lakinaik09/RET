import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { GoArrowUp } from "react-icons/go";

const ScrollToTopBtn = () => {
    const[scrollBtn, setScrollBtn] = useState(false)

    const checkScrollY = () => {
        if (window.scrollY > 120) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", checkScrollY);
        return () => {
          window.removeEventListener("scroll", checkScrollY);
        };
      }, []);

  return (
    <>
    <Link to='home'
    className={`${scrollBtn?'bottom-10':'-bottom-10'} transition-all duration-300 bg-blue-800 hover:bg-orange-500 p-2 fixed right-6  z-50 rounded-full text-2xl text-white cursor-pointer`}
    >
    <GoArrowUp />
    </Link>
    </>
  )
}

export default ScrollToTopBtn