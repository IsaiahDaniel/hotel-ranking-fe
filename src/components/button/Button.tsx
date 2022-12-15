interface ButtonType  {
  text?: String;
  dark?: Boolean;
  light?: Boolean;
  buttonType: any;
  classNames?: String;
}

const Button = (props: ButtonType) => {

  if(props.dark){
    return (
      <button type={props.buttonType} className={`bg-[#111518] text-white py-5 px-5 rounded-lg ${props.classNames}`}>{props.text}</button>
    )
  }

  if(props.light){
    return (
      <button type={props.buttonType} className={`bg-[#EDE4D7] py-5 px-5 text-white rounded-lg ${props.classNames}`}>{props.text}</button>
    )
  }

  return (
    <button type={props.buttonType} className={`py-5 px-5 bg-[#FFCD05] rounded-lg ${props.classNames}`}>{props.text}</button>
  )
}

Button.defaultProps = {
  buttonType: "button"
}

export default Button;