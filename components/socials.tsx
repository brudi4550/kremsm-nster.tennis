"use client";

import { GeistSans } from "geist/font/sans";
import Title from "./title";
import LogoSpinnerLoader from "./logo_spinner";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Socials() {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Socials.</Title>
            </div>
            <div className="mb-10 flex flex-col gap-8 items-center" style={{ position: "relative", minHeight: 700 }}>
                {!iframeLoaded && (
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 10,
                        background: isDark ? "rgba(24,24,27,0.85)" : "rgba(255,255,255,0.85)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <LogoSpinnerLoader logoUrl="/tus_logo.png" size={100} />
                    </div>
                )}
                <iframe
                    src="https://www.instagram.com/tus_kremsmuenster_tennis/embed"
                    width="100%"
                    height="700px"
                    allow="encrypted-media"
                    style={{
                        borderRadius: 12,
                        border: "none",
                        background: "transparent",
                        maxWidth: 640,
                        width: "100%",
                        display: "block"
                    }}
                    title="Instagram Feed"
                    onLoad={() => setIframeLoaded(true)}
                />
            </div>
        </div>
    );
}