import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function WFragen() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Was Wann Wer Wo.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p className="mt-3">
                    <strong>Was?</strong> Impressum.
                </p>
                <p className="mt-3">
                    <strong>Wann?</strong> Jetzt.
                </p>
                <p className="mt-3">
                    <strong>Wer?</strong> Benjaming Ing, Sektionsleiter, 0650 9839588, tennis@tennis@tus-kremsmuenster.at
                </p>
                <p className="mt-3">
                    <strong>Wo?</strong> TuS Tennisanlage, Gablonzerstraße 15, 4550 Kremsmünster
                </p>
                <p className="mt-3">
                    Diese Website verwendet keine Cookies und sammelt keine personenbezogenen Daten.
                </p>
            </div>
        </div>
    );
}