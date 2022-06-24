type typeProps = {
  title: string
}

export function LinkNavigation(props: typeProps){
  return(
    <>
      <a 
        href="#"
        className="px-2 py-2 block text-[rgb(0,0,0,.5)] hover:text-[rgb(0,0,0,.7)]"
      >
        {props.title}
      </a>
    </>
  )
}
// DEPOIS EU PENSO NISSO 