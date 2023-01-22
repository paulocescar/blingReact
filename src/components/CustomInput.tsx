import React from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
    margin?: string,
    padding?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    border?: string,
    borderRadius?: string,
    type?: string,
    name?: string,
    id?: string,
    className?: string,
    transition?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onFocus?: React.ChangeEventHandler<HTMLInputElement>,
    onBlur?: React.ChangeEventHandler<HTMLInputElement>,
    value?: string
}


const CustomInput: React.FC<InputProps> = ({
    type,
    id,
    name,
    title,
    margin,
    padding,
    backgroundColor,
    width,
    height,
    border,
    borderRadius,
    className,
    transition,
    onChange,
    onFocus,
    onBlur,
    value,
    ...props

}) => {
    return <div>
        <input {...props} 
         onChange={onChange}
         onFocus={onFocus}
         onBlur={onBlur}
         type={type} 
         name={name} 
         id={id} 
         value={value}
         className={className} style={{
                margin,
                padding: padding || '10px',
                backgroundColor,
                width: width || 'auto',
                height,
                border: border || '1px solid #ccc',
                borderRadius: borderRadius || "5px",
                boxSizing: "border-box",
        }}></input>
    </div>;
}

export default CustomInput;