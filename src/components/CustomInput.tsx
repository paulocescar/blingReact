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
    onBlur?: React.ChangeEventHandler<HTMLInputElement>
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
         className={className} style={{
                margin,
                padding,
                backgroundColor,
                width: width || 'auto',
                height,
                border: border || '1px solid #ccc',
                borderRadius: borderRadius || "5px",
                boxSizing: "border-box",
                transition: transition || `transition-duration: 0.15s, 0.15s;
                                    transition-timing-function: ease-in-out, ease-in-out;
                                    transition-delay: 0s, 0s;
                                    transition-property: border-color, box-shadow;`
        }}></input>
    </div>;
}

export default CustomInput;