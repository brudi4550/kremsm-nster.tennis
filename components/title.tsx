import React from 'react';
import { useTheme } from "next-themes";

type TitleProps = {
    children: React.ReactNode;
    className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    return (
        <h1
            className={`text-left font-geist font-black break-words ${className}`}
            style={{
                margin: 0,
                fontSize: "6rem",
                letterSpacing: "-0.06em",
                lineHeight: 1.05,
                color: isDark ? "#fff" : "#111",
                transition: "color 0.3s",
                wordBreak: "break-word",
                overflowWrap: "break-word",
            }}
        >
            {children}
        </h1>
    );
};

export default Title;