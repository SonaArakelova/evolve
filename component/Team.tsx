

// 'use client'
// import Image from "next/image";

// const textMila = ` I'm Mila, a linguist turned social media strategist, born and raised in Armenia. My love for communication and storytelling led me to explore different creative paths.
//  And in 2019, I started working with one of Armenia's top bloggers while also building my own fashion and lifestyle blog.
//  To sharpen my skills, I studied brand marketing and social media marketing at Baklachoff Business School in 2020 and learned from top bloggers and marketing experts.
//  In 2021, I took a leap and moved to Los Angeles. After countless deep conversations with my best friend, we decided to turn our vision into reality. On October 13, 2023, Evolve was born—a project built on our passion for growth and the belief that with the right mindset, anything is possible.`


// const textIra = ` I'm Irina! Graphic designer & content creator. From childhood, I've had a passion for drawing and art, which has shaped who I am today.
//  Eearned my bachelor's degree in interior design in 2018 and have worked on a variety of design and marketing projects.
//  My next step was working as a kids' game illustrator, bringing fun and colorful characters to life.
//  In 2019, I moved to LA and became a mom, which has been one of the best adventures yet.
//  I further expanded my skills by completing Google's UI/UX courses, which helped me explore new design horizons.
//  In 2023, I co-founded Evolve Creative Agency, where we bring fresh, innovative ideas to the social media world.
//  Each day brings something new, and I'm thankful to be doing what I love on this creative journey!`;

// export function Team() {
//   return (
//     <section id="team" className="scroll-mt-24 py-16 bg-[#F2F2F2] text-center">
//       <h2 className="text-3xl text-[#080808] mb-8">Meet Our Team</h2>

//       <div >

//         <div className="border-t border-black flex h-[800px] gap-0 relative">
//           <div className=" w-1/2 h-full absolute ">
//             <Image
//               src="/Images/mila1.jpg"
//               alt="Mila"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute w-[300px]
//                     top-1/2 left-1/2
//                     transform -translate-x-1/2 -translate-y-1/2">
//             <div className="flex flex-col space-y-4  text-5xl text-[#151515d5] bg-opacity-50 italic ">
//               <span className="inline-block tracking-widest">Hi  there,</span>
//               <span className="inline-block tracking-widest">I am the person</span>
//               <span className="inline-block tracking-widest">Behind  </span>
//               <span className="inline-block tracking-widest">EVOLVE SMM </span>
//             </div>

//           </div>

//         </div>



//         <div className="border-t border-black flex items-center justify-between px-8">
//           <Image
//             src="/Images/mila2.jpg"
//             alt="Left Avatar"
//             width={250}
//             height={250}
//             className="mt-60"
//           />

//           <p className="text-[#080808] text-lg w-[500px] mt-20">
//             {textMila}
//           </p>

//           <Image
//             src="/Images/mila3.jpg"
//             alt="Right Avatar"
//             width={250}
//             height={250}
//             className="self-start mt-10"
//           />
//         </div>

//       </div>


//       <div >

//         <div className="border-t border-black flex h-[800px] gap-0 relative">
//           <div className=" w-1/2 h-full absolute right-0">
//             <Image
//               src="/Images/ira1.jpg"
//               alt="Mila"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute w-[300px]
//                     top-1/2 left-1/2
//                     transform -translate-x-1/2 -translate-y-1/2">
//             <div className="flex flex-col space-y-4  text-5xl text-[#151515d5] bg-opacity-50 italic ">
//               <div className="text-center space-y-1">
//                 <span className="block text-5xl uppercase">Greetings!</span>
//                 <span className="block text-4xl tracking-wider">I am the person</span>
//                 <span className="block text-4xl tracking-wider">behind </span>
//                 <span className="block text-4xl tracking-wider">EVOLVE Graphics</span>
//               </div>
//             </div>

//           </div>

//         </div>



//         <div className="border-t border-black flex items-center justify-center gap-35">
//           <Image
//             src="/Images/ira2.jpg"
//             alt="Left Avatar"
//             width={270}
//             height={320}
//             className="mt-30"
//           />

//           <p className="text-[#080808] text-lg w-[600px] mt-15 self-start ">
//             {textIra}
//           </p>
//         </div>

//       </div>



//     </section>
//   );
// }





'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const textMila = ` I'm Mila, a linguist turned social media strategist, born and raised in Armenia. My love for communication and storytelling led me to explore different creative paths.
And in 2019, I started working with one of Armenia's top bloggers while also building my own fashion and lifestyle blog.
To sharpen my skills, I studied brand marketing and social media marketing at Baklachoff Business School in 2020 and learned from top bloggers and marketing experts.
In 2021, I took a leap and moved to Los Angeles. After countless deep conversations with my best friend, we decided to turn our vision into reality. On October 13, 2023, Evolve was born—a project built on our passion for growth and the belief that with the right mindset, anything is possible.`

const textIra = ` I'm Irina! Graphic designer & content creator. From childhood, I've had a passion for drawing and art, which has shaped who I am today.
Earned my bachelor's degree in interior design in 2018 and have worked on a variety of design and marketing projects.
My next step was working as a kids' game illustrator, bringing fun and colorful characters to life.
In 2019, I moved to LA and became a mom, which has been one of the best adventures yet.
I further expanded my skills by completing Google's UI/UX courses, which helped me explore new design horizons.
In 2023, I co-founded Evolve Creative Agency, where we bring fresh, innovative ideas to the social media world.
Each day brings something new, and I'm thankful to be doing what I love on this creative journey!`

export function Team() {
  const [isIphone16, setIsIphone16] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsIphone16(window.innerWidth <= 400)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <section id="team" className="scroll-mt-24 py-16 bg-[#F2F2F2] text-center">
      <h2 className="text-3xl text-[#080808] mb-8">Meet Our Team</h2>

      <div>
        {/* Hide this block on iPhone 16 */}
        {!isIphone16 && (
          <div className="border-t border-black flex h-[800px] gap-0 relative">
            <div className="w-1/2 h-full absolute">
              <Image
                src="/Images/mila1.jpg"
                alt="Mila"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col space-y-4 text-5xl text-[#151515d5] bg-opacity-50 italic">
                <span className="inline-block tracking-widest">Hi there,</span>
                <span className="inline-block tracking-widest">I am the person</span>
                <span className="inline-block tracking-widest">Behind</span>
                <span className="inline-block tracking-widest">EVOLVE SMM</span>
              </div>
            </div>
          </div>
        )}

        <div className={`border-t border-black ${isIphone16 ? 'flex flex-col items-center text-center px-4 py-6' : 'flex items-center justify-between p-8'}`}>
          <Image
            src="/Images/mila2.jpg"
            alt="Left Avatar"
            width={250}
            height={250}
            className={isIphone16 ? 'mb-6' : 'mt-60'}
          />

          <p className={`text-[#080808] text-lg ${isIphone16 ? 'w-full' : 'w-[500px] mt-20'}`}>
            {textMila}
          </p>

          {!isIphone16 && (
            <Image
              src="/Images/mila3.jpg"
              alt="Right Avatar"
              width={250}
              height={250}
              className="self-start mt-10"
            />
          )}
        </div>
      </div>

      <div>
        {/* Hide this block on iPhone 16 */}
        {!isIphone16 && (
          <div className="border-t border-black flex h-[800px] gap-0 relative">
            <div className="w-1/2 h-full absolute right-0">
              <Image
                src="/Images/ira1.jpg"
                alt="Ira"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col space-y-4 text-5xl text-[#151515d5] bg-opacity-50 italic">
                <div className="text-center space-y-1">
                  <span className="block text-5xl uppercase">Greetings!</span>
                  <span className="block text-4xl tracking-wider">I am the person</span>
                  <span className="block text-4xl tracking-wider">behind</span>
                  <span className="block text-4xl tracking-wider">EVOLVE Graphics</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`border-t border-black ${isIphone16 ? 'flex flex-col items-center text-center px-4 py-6' : 'flex items-center justify-center gap-35'}`}>
           <Image
            src="/Images/ira2.jpg"
            alt="Left Avatar"
            width={270}
            height={320}
            className={isIphone16 ? '' : 'mt-30'}
          />
          <p className={`text-[#080808] text-lg ${isIphone16 ? 'w-full mb-6' : 'w-[600px] mt-15 self-start'}`}>
            {textIra}
          </p>

         
        </div>
      </div>
    </section>
  )
}

