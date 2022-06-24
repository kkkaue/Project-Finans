import { AndroidLogo, AppleLogo } from "phosphor-react"
import { HomeContent } from "./HomeContent"

export function Home() {
  return (
    <section className="bg-[#ffc107] text-white ">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="flex flex-grow-0 shrink-0 basis-2/4 max-w-[50%] px-[15px]">
            <HomeContent />
          </div>
          <div className=" block flex-grow-0 shrink-0 basis-2/4 max-w-[50%] px-[15px]">
            <img src="../src/img/capa-mulher.png" alt="Imagem de uma mulher segurando uma moeda" />
          </div>
        </div>
      </div>
    </section>
  )
}