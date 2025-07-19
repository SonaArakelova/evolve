// 'use client';

// export function Footer() {
//   return (
//     <footer className="bg-[#080808] text-gray-400 text-xs py-4 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         &copy; {new Date().getFullYear()} EVOLVE Creative Agency. All rights reserved.
//       </div>
//     </footer>
//   );
// }




'use client'

// import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-[#080808e1] text-white py-8 ">
      <div className="container text-xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="text-2xl font-bold">EVOLVE</div>
          <p className="max-w-sm text-gray-400">
          Double the creativity, double the impact. That is how we EVOLVE brands! </p>
          <a
            href="https://www.instagram.com/evolve.creative.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300"
            aria-label="Visit our Instagram"
          >
            <FiInstagram />
          </a>
        </div>

        <div className="flex flex-col space-y-2 text-gray-300  text-center text-xl">
          <div className="font-semibold text-white">Contact</div>
          <a href="mailto:evolve@smmagency.com" className="hover:text-gray-400">
            📧 evolve@smmagency.com
          </a>
          <a href="tel:+17400000000" className="hover:text-gray-400">
            📞 +1 74 00 000 000
          </a>
          <address className="not-italic hover:text-gray-400">
            📍 California, LA
          </address>
        </div>
      </div>

      <hr className="border-gray-700 my-6 mx-4 md:mx-0" />

      <p className="text-center text-gray-500">
        EVOLVE &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  )
}
