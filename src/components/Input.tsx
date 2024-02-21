
type InputProps = {
  required?: any;
  type: string;
  placeholder: string;
  name?: string;
};

function Input({ required, type, placeholder, name }: InputProps) {
  return (
    <input
      required={required ? required : ""}
      className="input input-bordered w-full"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
