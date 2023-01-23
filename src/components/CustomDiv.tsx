import React, { CSSProperties } from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: CSSProperties,
}

const CustomDiv: React.FC<DivProps> = ({
    sx,
    ...props}) => {
        const style: CSSProperties = {
            display: sx?.display || "inline-block",
            position: sx?.position || "relative",
            ...sx
        }
    return <div 
        {...props}
        style={style}>
            {props.children}
    </div>;
}

export default CustomDiv;