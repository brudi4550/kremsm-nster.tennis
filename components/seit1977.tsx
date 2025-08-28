import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Title from "./title";
import { useEffect, useRef, useState } from "react";

type Seit1977Props = {
    animate?: boolean;
    imageSrcs?: string[];
};

export default function Seit1977({
    animate = false,
    imageSrcs = [
        "/verein1.jpg",
        "/verein2.jpg",
        "/verein3.jpg",
        "/verein4.jpg"
    ],
}: Seit1977Props) {
    const [imagesVisible, setImagesVisible] = useState(Array(imageSrcs.length).fill(false));
    const imageRefs = imageSrcs.map(() => useRef<HTMLDivElement>(null));

    useEffect(() => {
        function onScroll() {
            imageRefs.forEach((ref, i) => {
                if (ref.current && !imagesVisible[i]) {
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 100) {
                        setImagesVisible(prev => {
                            const next = [...prev];
                            next[i] = true;
                            return next;
                        });
                    }
                }
            });
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [imagesVisible, imageRefs]);

    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title splitChars animate={animate} phoneFontSizeRem={3}>Seit 1977.</Title>
                <div
                    style={{
                        transition: "opacity 0.7s, transform 0.7s",
                        opacity: animate ? 0 : 1,
                        transform: animate ? "translateY(-48px)" : "translateY(0)",
                    }}
                >
                    <Image
                        src="/tus_logo.png"
                        alt="TuS Tennis Kremsmünster Logo"
                        width={96}
                        height={96}
                        priority
                    />
                </div>
            </div>
            <div
                className="text-3xl leading-tight"
                style={{
                    transition: "opacity 0.7s, transform 0.7s",
                    opacity: animate ? 0 : 1,
                    transform: animate ? "translateY(48px)" : "translateY(0)"
                }}
            >
                <p>
                    28457 Matches.
                </p>
                <p className="mt-3">
                    16341 Siege.
                </p>
                <p className="mt-3">
                    12116 Niederlagen (umstritten).
                </p>
                <p className="mt-3">
                    Emotion, Leidenschaft, Gemeinschaft.
                </p>
                <p className="mt-3">
                    Alles was Tennis mit sich bringt. Und das kompakt auf 6 Plätzen + Clubhaus in 4550 Kremsmünster.
                </p>
                <br />
            </div>
            {imageSrcs.map((src, i) => (
                <div
                    key={src}
                    ref={imageRefs[i]}
                    style={{
                        transition: "opacity 0.7s, transform 0.7s",
                        opacity: imagesVisible[i] ? 1 : 0,
                        transform: imagesVisible[i] ? "translateY(0)" : "translateY(48px)",
                    }}
                >
                    <Image
                        className="mt-3"
                        src={src}
                        alt={`Tennisverein ${i + 1}`}
                        width={800}
                        height={600}
                        priority
                        style={{ objectFit: "cover", borderRadius: "1rem" }}
                    />
                </div>
            ))}
        </div>
    );
}