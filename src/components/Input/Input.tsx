interface InputType {
  placeholder?: any;
  classNames?: any;
  otherProps?: any;
  onChange?: any;
  id?: string;
  value?: string;
}

const Input = (props: InputType) => {
  return (
    <div className="py-3">
      <input
        placeholder={props.placeholder}
        className={`border rounded-lg p-5 w-full active:border-[#A4a4a4]  ${props.classNames}`}
        onChange={() => props.onChange()}
        value={props.value}
        {...props.otherProps}
      />
    </div>
  );
};

export default Input;
