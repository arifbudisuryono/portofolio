const Button = (props) => {
    const { children, style, Click } = props;
  return (
    <>
    <button onClick={Click} className={`rounded-lg h-[60px] w-[110px] ${style}`}>
        {children}
    </button>
    </>
  )
}

export default Button