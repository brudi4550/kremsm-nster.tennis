import { useTheme } from "next-themes";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  phoneFontSizeRem?: number;
  phoneMediaWidth?: number;
  splitChars?: boolean;
};

const Title: React.FC<TitleProps> = ({
  children,
  className = "",
  animate = false,
  phoneFontSizeRem = 3,
  phoneMediaWidth = 600,
  splitChars = false,
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const text = typeof children === "string" ? children : "";
  const chars = splitChars ? text.split("") : [text];
  const phoneFontSize = `${phoneFontSizeRem}rem`;

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
      <span
        style={{
          display: "block",
          fontSize: "inherit",
          letterSpacing: "inherit",
        }}
        className="title-responsive"
      >
        {splitChars && typeof children === "string"
          ? chars.map((char, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: animate ? 0 : 1,
                  transform: animate ? "translateY(-40px)" : "translateY(0)",
                  transition: `opacity 0.4s ${i * 0.04 + 0.05}s, transform 0.4s ${i * 0.04 + 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))
          : children}
      </span>
      <style>{`
        @media (max-width: ${phoneMediaWidth}px) {
          .title-responsive {
            font-size: ${phoneFontSize} !important;
            letter-spacing: -0.08em !important;
          }
        }
      `}</style>
    </h1>
  );
};

export default Title;
