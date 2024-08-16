const Button = ({cta, children, icon, onClickHandler}) => { 
  const styling = cta ? "bg-gradient-to-r from-purple-800 to-purple-500 width-full text-white" : "border-purple-600 text-purple-400" 
  return ( 
    <button className={`flex items-center justify-center w-full gap-4 p-1 my-4 font-bold border border-solid rounded-md ${styling}`} onClick={onClickHandler}>
      {children}
      {
        icon &&
        ( 
          <div className="image-wrapper">
            <img src={icon}/>
          </div>
        )
      }

    </button>
  )
}

export default Button