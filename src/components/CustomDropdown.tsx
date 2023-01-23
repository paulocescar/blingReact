import React, { CSSProperties } from "react";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: CSSProperties,
    isHover: boolean,
}

const CustomDropdown: React.FC<DropdownProps> = ({
    sx,
    isHover,
    ...props}) => {
        const style: CSSProperties = {
            display: isHover ? "block" : sx?.display || "none",
            position: sx?.position || "absolute",
            backgroundColor: sx?.backgroundColor || "#f9f9f9",
            minWidth: sx?.minWidth || "160px",
            boxShadow: sx?.boxShadow || "0px 8px 16px 0px rgba(0,0,0,0.2)",
            padding: sx?.padding || "0",
            zIndex: sx?.zIndex || "1",
            width: sx?.width || "auto",
            ...sx
        }
    return <div 
        {...props}
        style={style}>
            {props.children}
    </div>;
}

export default CustomDropdown;