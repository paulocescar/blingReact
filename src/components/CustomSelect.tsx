import React, { ReactNode } from 'react';

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>{
    children: ReactNode,
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
    onChange?: React.ChangeEventHandler<HTMLSelectElement>,
    onFocus?: React.ChangeEventHandler<HTMLSelectElement>,
    onBlur?: React.ChangeEventHandler<HTMLSelectElement>,
    require?: boolean,
    value?: number
}


const CustomSelect: React.FC<SelectProps> = ({
    children,
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
    require,
    ...props

}) => {
    return <div>
        <select {...props} 
         onChange={onChange}
         onFocus={onFocus}
         onBlur={onBlur}
         required
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
        }}>{children}</select>
    </div>;
}

export default CustomSelect;