// 'use client';

// const message = ` Whether you're launching a personal brand or scaling a business, our team blends creativity with strategy to make your digital presence unforgettable.
//  Let's evolve your vision into something extraordinary.`

// export function About() {
//   return (
//     <section id="about" 
//     style={{
//         backgroundImage: "url('/Images/about-background.png')",
//         backgroundSize: "cover" ,       
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         width: "100%",
//         height: "80vh"
//       }}    
//   className="scroll-mt-24  bg-[#f5f5f5] text-[#080808d3] py-12 px-6 mt-15">
//       <div className="max-w-6xl mx-auto ">
//         <h1 className="text-4xl mb-4 text-center">What We Do</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-25">
//           {/* Left: Services List */}
//           <ul className="text-[1.5rem] leading-relaxed list-disc list-inside space-y-2">
//             <li>Content Creation</li>
//             <li>SMM</li>
//             <li>Self Branding</li>
//             <li>Graphic Design</li>
//             <li>Web Design</li>
//           </ul>

//           {/* Right: Company Description */}
//           <div className="text-base leading-relaxed font-light">
//             <p>
//               At <span className="font-semibold">EVOLVE</span>, we believe in the power of bold ideas and authentic storytelling. 
//               Our mission is to help brands grow by crafting content that connects, designs that inspire, and strategies that deliver results.
//             </p>
//             <p className="mt-4">
//               {message}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';

const message = `Whether you're launching a personal brand or scaling a business, our team blends creativity with strategy to make your digital presence unforgettable. Let's evolve your vision into something extraordinary.`;

export function About() {
  const [isIphone16Portrait, setIsIphone16Portrait] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsIphone16Portrait(width <= 400);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundImage: isIphone16Portrait
          ? 'none'
          : "url('/Images/about-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '85vh',
      }}
      className="scroll-mt-24 bg-[#f5f5f5] text-[#080808d3] py-12 px-6 mt-15"
    >
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl mb-4 text-center">What We Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15 ">
          {/* Left: Services List */}
          <ul className="text-[1.4rem] leading-relaxed list-disc list-inside space-y-2">
            <li>Content Creation</li>
            <li>SMM</li>
            <li>Self Branding</li>
            <li>Graphic Design</li>
            <li>Web Design</li>
          </ul>

          <div className="text-base leading-relaxed font-light">
            <p>
              At <span className="font-semibold">EVOLVE</span>, we believe in the power of bold ideas and authentic storytelling. 
              Our mission is to help brands grow by crafting content that connects, designs that inspire, and strategies that deliver results.
            </p>

            {!isIphone16Portrait && (
              <p className="mt-4">{message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}



