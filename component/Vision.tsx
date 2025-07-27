// 'use client'
// import Image from 'next/image'

// export function Vision() {
//   return (
//     <section
//       id="ideas"
//       className="scroll-mt-24 py-16 bg-[#D2D2D2]"
//     >
//       <h2 className="text-3xl  text-[#080808] text-center mb-8">
//         Our Vision
//       </h2>

//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-8 mt-20">
//         <div className="relative w-[100px] h-[500px] md:w-1/2">
//           <Image
//             src="/Images/vs4.jpg"
//             alt="Vision sample 1"
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>

//         <div className="w-full md:w-1/2 flex self-end flex-col gap-10">
//           <div className="text-left">
//             <p className="text-gray-800 text-lg leading-relaxed">
//               We believe in bold ideas, authentic storytelling, and  
//               data-driven creativity. Our mission is to elevate brands  
//               through meaningful social media experiences.
//             </p>
//           </div>

//           <div className="grid grid-cols-3 gap-4">
//             <Image
//               src="/Images/vs1.jpg"
//               alt="Vision sample 2"
//               width={300}
//               height={300}
//               className="object-cover w-full h-full rounded-lg"
//             />
//             <Image
//               src="/Images/vs2.jpg"
//               alt="Vision sample 3"
//                width={200}
//               height={250}
//               className="object-cover w-full h-full rounded-lg"
//             />
//             <Image
//               src="/Images/vs3.jpg"
//               alt="Vision sample 4"
//                width={200}
//               height={250}
//               className="object-cover w-full h-full rounded-lg"
//             />
            
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Vision() {
  const [isIphone16, setIsIphone16] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsIphone16(window.innerWidth <= 500);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section
      id="ideas"
      className="scroll-mt-24 py-16 bg-[#D2D2D2]"
    >
      <h2 className="text-3xl text-[#080808] text-center mb-8">
        Our Vision
      </h2>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-8 mt-20">
        {/* ✅ Only render large left image if not iPhone 16 */}
        {!isIphone16 && (
          <div className="relative w-[100px] h-[500px] md:w-1/2">
            <Image
              src="/Images/vs4.jpg"
              alt="Vision sample 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="w-full md:w-1/2 flex self-end flex-col gap-10">
          <div className="text-left">
            <p className="text-gray-800 text-lg leading-relaxed">
              We believe in bold ideas, authentic storytelling, and  
              data-driven creativity. Our mission is to elevate brands  
              through meaningful social media experiences.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Image
              src="/Images/vs1.jpg"
              alt="Vision sample 2"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <Image
              src="/Images/vs2.jpg"
              alt="Vision sample 3"
              width={200}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
            <Image
              src="/Images/vs3.jpg"
              alt="Vision sample 4"
              width={200}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
