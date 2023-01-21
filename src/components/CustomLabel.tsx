import React from 'react';

interface CustomProps extends React.HTMLAttributes<HTMLLabelElement>{
    float?: "left" | "right" | "none" | "inline-start" | "inline-end",
    width?: string,
    margin?: string
}
const CustomLabel: React.FC<CustomProps> = ({
    float,
    width,
    margin,
    ...props
}) => {
  return <label {...props} style={{
    float: float || "left",
    width: width || "50px",
    margin: margin || "0 0 0 20px",
    boxSizing: "border-box"
  }}></label>;
}

export default CustomLabel;