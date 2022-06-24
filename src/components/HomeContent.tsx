import { AndroidLogo, AppleLogo } from "phosphor-react";

export function HomeContent(){
  return (
    <div className="self-center">
              <h1 className="text-[3.5rem] font-light leading-[1.2] mt-0 mb-2">
                Suas contas, descomplicadas
              </h1>
              <p className="mt-0 mb-4">
                Usado por mais de 1 milhão de pessoas, o Finans é uma ferramenta online que vai facilitar sua vida financeira. 
              </p>
              <form className="my-6">
                <div className="relative flex flex-wrap items-stretch w-full">
                  <input
                    type="text"
                    placeholder="Seu e-mail"
                    className="rounded-tr-none rounded-br-none h-[calc(2.875rem+2px)] py-2 px-4 text-xl rounded-[0.3rem] relative flex-grow flex-shrink basis-auto w-[1%] mb-0 border border-[#ced4da] text-[#495057] focus:shadow-[0_0_0_0.2rem_rgba(0,123,250,0.25)] focus:border-[#80bdff] outline-0"
                  />
                  <div className="ml[-1px] flex">
                    <button className="rounded-tl-none rounded-bl-none h-[calc(2.875rem+2px)] py-2 px-4 text-xl rounded-[0.3rem] cursor-pointer relative z-[2] bg-[#007bff] border-[#007bff] inline-block hover:bg-[#0069d9] hover:border-[#0069d9] ">
                      Cadastre-se
                    </button>
                  </div>
                </div>
              </form>
              <p className="mb-4">
                Disponível para 
                <a href="#" className="mx-1 cursor-pointer text-[#f8f9fa] border border-[#f8f9fa] bg-transparent bg-none inline-block py-[0.375rem] px-3 rounded font-normal	text-center whitespace-nowrap align-middle text-base leading-6 hover:text-black hover:bg-white focus:shadow-[0_0_0_0.2rem_rgba(248,249,250,0.5)]">
                  <AndroidLogo weight="fill" className="w-[14px] h-[16px] inline-block "/>
                </a>
                <a href="#" className="cursor-pointer text-[#f8f9fa] border border-[#f8f9fa] bg-transparent bg-none inline-block py-[0.375rem] px-3 rounded font-normal	text-center whitespace-nowrap align-middle text-base leading-6 hover:text-black hover:bg-white focus:shadow-[0_0_0_0.2rem_rgba(248,249,250,0.5)]">
                  <AppleLogo weight="fill" className="w-[15.75px] h-[20px] inline-block "/>
                </a>
              </p>
            </div>
  )
}