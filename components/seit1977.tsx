import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function Seit1977() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Seit 1977.</Title>
                <Image
                    src="/tus_logo.png"
                    alt="TuS Tennis Kremsmünster Logo"
                    width={96}
                    height={96}
                    priority
                />
            </div>
            <div className="text-3xl leading-tight">
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
            </div>
        </div>
    );
}