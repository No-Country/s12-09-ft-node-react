interface InputProps {
    name?:string,
    placeholder?:string,
    type?:string,
    className?:string
}

export const input = ({name,placeholder,type, className} : InputProps) => {
  return (
    <div>
        {/* <label htmlFor={label}>{label}</label> */}
        <input  className="input input-bordered w-full rounded-[15px] bg-base-300 border-base-300 " placeholder={placeholder} name={name}  type={type}/>
    </div>
  )
}
