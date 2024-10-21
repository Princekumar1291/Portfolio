import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{ opacity: 0.9 }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="logo-container" style={{ perspective: '1000px' }}>
            <img
              src="./img/logo.png"
              className="px-6 h-8"
              alt="Flowbite Logo"
              style={{
                animation: 'rotateY 5s linear infinite',
                transformStyle: 'preserve-3d',
                transform: 'scale(3.5)',
                backfaceVisibility: 'hidden'
              }}
            />
            <img
              src="./img/logo.png"
              className="px-6 h-8"
              alt="Flowbite Logo"
              style={{
                animation: 'rotateYReverse 5s linear infinite',
                transformStyle: 'preserve-3d',
                transform: 'scale(3.5) rotateY(180deg)',
                position: 'absolute',
                top: 0,
                left: 0,
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
          <style jsx>{`
            .logo-container {
              position: relative;
              width: fit-content;
              height: fit-content;
            }
            @keyframes rotateY {
              0% { transform: scale(3.5) rotateY(0deg); }
              50% { transform: scale(3.5) rotateY(90deg); }
              100% { transform: scale(3.5) rotateY(180deg); }
            }
            @keyframes rotateYReverse {
              0% { transform: scale(3.5) rotateY(180deg); }
              50% { transform: scale(3.5) rotateY(270deg); }
              100% { transform: scale(3.5) rotateY(360deg); }
            }
          `}</style>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-glow"
            onClick={() => window.location.href = 'mailto:princekumar7320918928@gmail.com'}
          >
            Hire Me
          </button>
          <style jsx>{`
            @keyframes glow {
              0% {
                box-shadow: 0 0 3px #00f, 0 0 6px #0ff, 0 0 9px #0f0, 0 0 12px #ff0, 0 0 15px #f00, 0 0 18px #f0f, 0 0 21px #00f;
              }
              50% {
                box-shadow: 0 0 6px #00f, 0 0 12px #0ff, 0 0 18px #0f0, 0 0 24px #ff0, 0 0 30px #f00, 0 0 36px #f0f, 0 0 42px #00f;
              }
              100% {
                box-shadow: 0 0 3px #00f, 0 0 6px #0ff, 0 0 9px #0f0, 0 0 12px #ff0, 0 0 15px #f00, 0 0 18px #f0f, 0 0 21px #00f;
              }
            }
            .animate-glow {
              animation: glow 2s infinite;
            }
          `}</style>
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div ref={navRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// Portfolio