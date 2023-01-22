import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

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
    children?: ReactNode,
    width?: string,
    height?: string,
    padding?: string,
    float?: "left" | "right" | "none" | "inline-start" | "inline-end",
    cursor?: string,
    fontSize?: string,
    verticalAlign?: string,
    fontFamily?: string
}

export const Item: React.FC<ItemProps> = ({
    children,
    width,
    height,
    padding,
    float,
    cursor,
    color,
    fontSize,
    verticalAlign,
    fontFamily,
    ...props
}) => (
    <div {...props} style={{
        display: 'flex',
        flexDirection: 'column',
        width: width || 'auto',
        height: height || '30px',
        padding: padding || '10px 0 0 0',
        float,
        cursor,
        color: color || "#FFF",
        fontSize: fontSize || "12px",
        verticalAlign: verticalAlign || "middle",
        fontFamily,
        textDecoration: "none"
    }}>{children}</div>
)

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