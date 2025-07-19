
import React from "react";

import { Main }  from "@/component/Main";
import { Works } from "@/component/Works";
import { Vision } from "@/component/Vision";
import { Team } from "@/component/Team";
import { About } from "@/component/About";



export default function Home() {
  return (
    <div>
            <Main/>
            <About/>
            <Works/>
            <Team/>
            <Vision/>
          </div>
   
  );
}





