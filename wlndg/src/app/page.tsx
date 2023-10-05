"use client"

import { createContext, useContext, useState } from "react";
import WLNDG from "./components/WLNDG";
import LightSwitch from "./components/light_switch";


export const DarkMode = createContext({ dark: false, toggle_dark: () => { } });



export default function Home() {
  const [dark, setDark] = useState(false);
  const toggle_dark = () => {
    setDark(!dark)
  }
  return (
    <>
      <DarkMode.Provider value={{ dark, toggle_dark }}>
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
      </DarkMode.Provider>
    </>
  )
}
