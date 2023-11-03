
export const CustomInput = (props) => {
    const {name,type,className,value,onChange,placeHolder} = props
  return (
    <>
        <div>
           <input 
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className={`${className} text-inherit font-semibold w-full p-3 rounded-xl border-2 dark:bg-[#222] bg-white outline-none border-[#bfbfbf] dark:border-[#555] border-solid`}
              placeholder={placeHolder}
           />
        </div>
    </>
  )
}
