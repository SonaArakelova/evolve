
// // import React from "react";

// // export default function ContactPage() {
// //   return (
// //     <section className="contact py-14 bg-[#7e7d7ddb] text-[#171616]">
// //       <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-0 mt-35 mb-20">
// //         <div className="  flex-1 space-y-4 justify-center  pl-10 ">
// //           <h2 className="text-4xl font-bold">Any Questions?</h2>
// //           <p className="mt-3 text-3xl">
// //             We got you.
// //           </p>
// //           <p className="text-2xl mt-2">  Send us a message and we will be in touch!

// //           </p>

// //         </div>


// //         <div className="flex-1 ">

// //           <form className="space-y-4">
// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               className="w-full p-3 rounded bg-white text-black"
// //             />
// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               className="w-full p-3 rounded bg-white text-black"
// //             />
// //             <textarea
// //               placeholder="Your Message"
// //               className="w-full p-3 rounded bg-white text-black"
// //             ></textarea>
// //             <button className="bg-white text-[#080808] px-6 py-2 rounded hover:bg-gray-300">
// //               Send
// //             </button>
// //           </form>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }







// 'use client'

// import React, { useState } from 'react'

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
//   const [error, setError] = useState<string | null>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus('loading')
//     setError(null)

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       })

//       if (!res.ok) {
//         const data = await res.json()
//         throw new Error(data.error || 'Unknown error')
//       }

//       setStatus('success')
//       setForm({ name: '', email: '', message: '' })
//     } catch (error) {
//   if (error instanceof Error) {
//     setError(error.message)
//   } else {
//     setError('Something went wrong')
//   }
//   setStatus('error')
// }
//   }

//   return (
//     <section className="contact py-14 bg-[#7e7d7ddb] text-[#171616]">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-0 mt-35 mb-20">
//         <div className="flex-1 space-y-4 justify-center pl-10">
//           <h2 className="text-4xl font-bold">Any Questions?</h2>
//           <p className="mt-3 text-3xl">We got you.</p>
//           <p className="text-2xl mt-2">Send us a message and we will be in touch!</p>
//         </div>

//         <div className="flex-1">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-black"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-black"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-black"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-white text-[#080808] px-6 py-2 rounded hover:bg-gray-300"
//               disabled={status === 'loading'}
//             >
//               {status === 'loading' ? 'Sending...' : 'Send'}
//             </button>

//             {status === 'success' && (
//               <p className="text-white">✅ Message sent successfully!</p>
//             )}
//             {status === 'error' && (
//               <p className="text-white">❌ Error: {error}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }





'use client';

import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isIphone16, setIsIphone16] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsIphone16(window.innerWidth <= 400);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Unknown error');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Something went wrong');
      }
      setStatus('error');
    }
  };

  return (
    <section className="contact py-14 bg-[#7e7d7ddb] text-[#171616] ">
      <div
        className={`container mx-auto px-4 flex flex-col  ${
          isIphone16 ? 'mt-10' : 'md:flex-row mt-30'
        } items-start gap-6  mb-20 `}
      >
        <div  className={`flex-1 space-y-4 pl-0 ${
            isIphone16 ? ' px-2' : 'pl-10'
          }`}
        >
          <h2 className={`font-bold ${isIphone16 ? 'text-3xl' : 'text-4xl'}`}>
            Any Questions?
          </h2>
          <p className={isIphone16 ? 'text-xl mt-2' : 'text-3xl mt-3'}>
            We got you.
          </p>
          <p className={isIphone16 ? 'text-lg' : 'text-2xl mt-2'}>
            Send us a message and we will be in touch!
          </p>
        </div>

        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-[#080808] px-6 py-2 rounded hover:bg-gray-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send'}
            </button>

            {status === 'success' && (
              <p className="text-white">✅ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-white">❌ Error: {error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
