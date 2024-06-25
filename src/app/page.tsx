"use client"

import { createContext, useContext, useState } from "react";
import WLNDG from "./components/WLNDG";
import LightSwitch from "./components/light_switch";


export default function Home() {
  return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-800`}>

          <div className="relative flex place-items-center ">
            <LightSwitch />

            <div>
              <WLNDG />
              <a>Instagram</a>
              <a>Youtube</a>
              <a>BandCamp</a>
            </div>

          </div>
        </main>
  )
}
