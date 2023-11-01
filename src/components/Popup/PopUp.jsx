import { X } from "@phosphor-icons/react";
import thumbnail from "/imgs/svgs/Thumbnail.svg";
import arrowVector from "/imgs/svgs/Vector.svg";
import { useState } from "react";

export function PopUp() {
  const [closePopUp, setClosePopUp] = useState(false)

  const handlerClosePopUp = (state) => {
    setClosePopUp(state)
  }

  return (
    <div className={`${closePopUp ? 'hidden' : ""} scale-[98%] hover:scale-[100%] transition-all cursor-pointer ease-in-out duration-75 max-w-sm rounded-[2rem] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)] z-50 backdrop-blur-3xl py-4 px-5 text-shade-0 flex gap-1 fixed right-8 top-32`}>
      <a
        href="https://youtu.be/j2-O9cS4Tz4"
        target="blank"
        className="hover:text-shade-0"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 text-sm p-2">
            <div
              href="https://youtu.be/j2-O9cS4Tz4"
              target="blank"
              className="flex gap-2"
            >
              <p className="font-extrabold text-2xl hover:underline">CONFIRA</p>
              <img src={arrowVector} alt="arrow" />
            </div>
            <p>
              O Petiano Antônio Paulo apresenta as Leis fundamentais do
              Eletromagnetismo em Campos Elétricos.
            </p>
          </div>
          <img
            className="rounded-r-[2rem] rounded-t-[2rem] h-40 w-40"
            src={thumbnail}
          />
        </div>
      </a>

      <button type="button" className="absolute top-2 right-2 rounded-full transition-all duration-150 bg-white/10 hover:bg-white/30 p-2" onClick={() => handlerClosePopUp(true)}>
        <X size={24} color="#faf4f4" className="hover:transform hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}
