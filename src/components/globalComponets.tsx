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
    gap?: string
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
        gap
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
        width: width || '50px',
        height: height || '30px',
        padding: padding || '10px 0 0 0',
        float,
        cursor,
        color: color || "#FFF",
        fontSize: fontSize || "12px",
        verticalAlign: verticalAlign || "middle",
        fontFamily
    }}>{children}</div>
)