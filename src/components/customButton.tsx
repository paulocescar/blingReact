import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    backgroundColor?: string,
    borderRadius?: string,
    color?: string,
    padding?: string,
    fontSize?: string,
    borderColor?: string,
    cursor?: string,
    margin?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    borderColor,
    backgroundColor,
    borderRadius,
    color,
    padding,
    fontSize,
    cursor,
    margin,
    ...props}) => {
  return <div>
        <button {...props} style={{
            borderRadius: borderRadius || "",
            backgroundColor: backgroundColor || "",
            color: color || "#fff",
            padding: padding || 0,
            fontSize: fontSize || "12px",
            borderColor: borderColor || "#444",
            cursor: cursor || "",
            margin
            }}></button>
  </div>;
}

export default CustomButton;