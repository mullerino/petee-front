import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function HandlerCarrousel({ handleNextClick, handlePrevClick }) {
  return (
    <div className="flex gap-6">
      <div className="bg-shade-0/20 rounded-full p-2 cursor-pointer active:scale-95 transition-all duration-150">
        <CaretLeft size={32} color="#FAF4F4" onClick={handlePrevClick} />
      </div>

      <div className="bg-shade-0/20 rounded-full p-2 cursor-pointer active:scale-95 transition-all duration-150">
        <CaretRight size={32} color="#FAF4F4" onClick={handleNextClick} />
      </div>
    </div>
  )
}