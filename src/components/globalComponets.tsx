import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    width?: string,
    height?: string,
    backgroundcolor?: string,
    justifyContent?: string,
    padding?: string,
    borderBottom?: string,
    margin?: string,
    display?: string,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    gap?: string,
    transform?: any;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    width,
    height,
    backgroundcolor,
    justifyContent,
    padding,
    borderBottom,
    margin,
    display,
    flexDirection,
    gap,
    transform,
    ...props
}) => (
    <div {...props} style={{
        display: display,
        flexDirection: flexDirection || "row",
        width: width || '100%',
        height: height || '100%',
        backgroundColor: backgroundcolor || '#FFF',
        justifyContent: justifyContent || 'normal', 
        padding: padding || 9,
        borderBottom: borderBottom || 0,
        margin,
        gap,
        transform
    }}>{children}</div>
)

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    width?: string,
    height?: string,
    padding?: string,
    justifyContent?: string,
    display?: string,
    backgroundColor?: string,
    margin?: string,
    borderRadius?: string,
    border?: string,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    gap?: string,
    fontFamily?: string
}

export const Row: React.FC<RowProps> = ({
    children,
    width,
    height,
    padding,
    justifyContent,
    display,
    border,
    backgroundColor,
    margin,
    borderRadius,
    flexDirection,
    gap,
    fontFamily,
    ...props
}) => (
    <div {...props} style={{
        display: display || 'flex',
        flexDirection: flexDirection || 'row',
        width: width || '100%',
        height: height || '100%',
        padding: padding || '0',
        justifyContent: justifyContent || 'normal',
        border,
        backgroundColor,
        margin,
        borderRadius,
        gap,
        fontFamily,
    }}>{children}</div>
)
interface RowPropsJSX extends HTMLAttributes<HTMLDivElement> {
    children?: any[],
    width?: string,
    height?: string,
    padding?: string,
    justifyContent?: string,
    display?: string,
    backgroundColor?: string,
    margin?: string,
    borderRadius?: string,
    border?: string,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    gap?: string,
    fontFamily?: string
}

export const RowJSX: React.FC<RowPropsJSX> = ({
    children,
    width,
    height,
    padding,
    justifyContent,
    display,
    border,
    backgroundColor,
    margin,
    borderRadius,
    flexDirection,
    gap,
    fontFamily,
    ...props
}) => (
    <div {...props} style={{
        display: display || 'flex',
        flexDirection: flexDirection || 'row',
        width: width || '100%',
        height: height || '100%',
        padding: padding || '0',
        justifyContent: justifyContent || 'normal',
        border,
        backgroundColor,
        margin,
        borderRadius,
        gap,
        fontFamily,
    }}>{children}</div>
)

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    width?: string,
    height?: string,
    padding?: string,
    justifyContent?: string,
    alignItems?: string,
    float?: "left" | "right" | "none" | "inline-start" | "inline-end",
}

export const Column: React.FC<ColumnProps> = ({
    children,
    width,
    height,
    padding,
    float,
    justifyContent,
    alignItems,
    ...props
}) => (
    <div {...props} style={{
        display: 'flex',
        flexDirection: 'column',
        width: width || '100%',
        height: height || '100%',
        padding: padding || '0',
        float,
        justifyContent: justifyContent || 'normal',
        alignItems: alignItems || 'normal'
    }}>{children}</div>
)

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
    sx?: CSSProperties,
    isHover?: boolean,
    padding?: string
}

export const Item: React.FC<ItemProps> = ({
    sx, 
    isHover,
    padding,
    ...props}) => {
    const [hover, setHover] = useState(false);
    const style: CSSProperties = {
        backgroundColor: hover && isHover ? "#CCC  " : "",
        display: sx?.display || "flex",
        cursor: sx?.cursor || "pointer",
        flexDirection: sx?.flexDirection || "column",
        width: sx?.width || "auto",
        height: sx?.height || "30px",
        padding: sx?.padding || "10px 5px 5px 5px",
        color: sx?.color || "#444",
        fontSize: sx?.fontSize || "18px",
        fontFamily: 'Roboto-Regular',
        verticalAlign: sx?.verticalAlign || "middle",
        textDecoration: "none",
        ...sx
    }
    return <div 
        {...props}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style}>
            {props.children}
    </div>;
}

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    position?: string,
    top?: string,
    left?: string,
    transform?: string,
    width?: string,
    backgroundColor?: string,
    border?: string,
    boxShadow?: string,
    padding?: string
}

export const ModalComponent: React.FC<ModalProps> = ({
    children,
    position,
    top,
    left,
    transform,
    width,
    backgroundColor,
    border,
    boxShadow,
    padding,
    ...props
}) => (
    <div {...props} style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        backgroundColor: "rgb(255, 255, 255)",
        border: "2px solid rgb(0, 0, 0)",
        boxShadow: "rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px",
        padding: "32px"
    }}>{children}</div>
)

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    sx?: CSSProperties,
    display?: string,
    margin?: string,
    padding?: string,
    position?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    border?: string,
    borderRadius?: string,
}
export const CustomTable: React.FC<TableProps> = ({
    sx,
    display,
    margin,
    padding,
    position,
    backgroundColor,
    width,
    height,
    border,
    borderRadius,
    ...props}) => {
        const style: CSSProperties = {
            display: sx?.display || "block",
            position: sx?.position || "relative",
            borderCollapse: 'collapse',
            width: sx?.width || '100%!important',
            height: sx?.height || '100%!important',
            ...sx
        }
    return <table 
        {...props}
        style={style}>
            {props.children}
    </table>;
}


interface THProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
    children?: ReactNode,
    width?: string,
    height?: string,
    padding?: string,
    justifyContent?: string,
    alignItems?: string,
    textAlign?: string,
    backgroundColor?: string,
    color?: string,
    float?: "left" | "right" | "none" | "inline-start" | "inline-end",
}
export const CustomTH: React.FC<THProps> = ({
    children,
    width,
    height,
    padding,
    float,
    justifyContent,
    textAlign,
    backgroundColor,
    color,
    alignItems,
    ...props}) => {
    return <th 
        {...props}
        style={{
            width: width || 'auto',
            height: height || '100%',
            padding: padding || '12px',
            alignItems: alignItems || "left",
            backgroundColor: backgroundColor || "#04AA6D",
            color: color || "white",
            float
            }}>
            {children}
    </th>;
}

interface TRProps extends React.HTMLAttributes<HTMLTableRowElement> {
    sx?: CSSProperties,
    width?: string,
}
export const CustomTR: React.FC<TRProps> = ({
    sx,
    width,
    ...props}) => {
        const style: CSSProperties = {
            border: sx?.border || "1px solid #ddd",
            padding: sx?.padding || "8px",
            textAlign: sx?.textAlign || "left",
            color: sx?.color || "black",
            ...sx
        }
    return <tr 
        {...props}
        style={{...style, width: width}}>
            {props.children}
    </tr>;
}

interface TDProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: CSSProperties,
    width?: string,
}
export const CustomTD: React.FC<TDProps> = ({
    sx,
    width,
    ...props}) => {
        const style: CSSProperties = {
            border: sx?.border || "1px solid #ddd",
            width: sx?.width || "auto",
            padding: sx?.padding || "8px",
            textAlign: sx?.textAlign || "left",
            color: sx?.color || "black",
            ...sx
        }
    return <td 
        {...props}
        style={style}>
            {props.children}
    </td>;
}