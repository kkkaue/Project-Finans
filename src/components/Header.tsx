import { LinkNavigation } from "./LinkNavigation";

export function Header() {
  return (
    <header>
      <nav className="bg-[#ffc107] flex px-4 py-2 relative">
        <div className="flex max-w-[1140px] w-full px-[15px] mx-auto items-center justify-between flex-nowrap">
          <a
            href="#"
            className="inline-block py-[0.3125rem] mr-4"
          >
            <img src="../src/img/logo.png" width={142} alt="foto da logo"/>
          </a>
          <button>
            <span></span>
          </button>
          <div className="items-center flex flex-grow basis-auto">
            <ul className=" flex flex-row ml-auto pl-0 mb-0 mt-0">
              <li>
                <LinkNavigation title="Home" />
              </li>
              <li>
                <LinkNavigation title="Recursos" />
              </li>
              <li>
                <LinkNavigation title="Benefícios" />
              </li>
              <li>
                <LinkNavigation title="Preços" />
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-[0.375rem] ml-6 inline-block border text-[#f8f9fa] border-[#f8f9fa] rounded hover:text-[#212529] hover:bg-[#f8f9fa]"
                >
                  Entrar
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}