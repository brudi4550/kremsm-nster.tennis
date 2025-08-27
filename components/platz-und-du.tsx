import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function PlatzUndDu() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{
                marginTop: 0,
                paddingTop: 30,
                background: "transparent",
                textAlign: "left"
            }}
        >
            <div className="flex items-center justify-between mb-8 gap-4" style={{ textAlign: "left", width: "100%" }}>
                <Title className="text-left">Der Platz und Du könnten bald so sein 🤞🏻.</Title>
            </div>
            <div className="text-3xl leading-tight" style={{ textAlign: "left" }}>
                <section aria-labelledby="mitgliedsbeitraege">
                    <table style={{ textAlign: "left", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Beitrag</th>
                                <th>Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hauptmitglied</td>
                                <td>€&nbsp;140,00</td>
                            </tr>
                            <tr>
                                <td>Lebensgefährte/Ehepartner</td>
                                <td>€&nbsp;70,00</td>
                            </tr>
                            <tr>
                                <td>Familycard <sup>*</sup></td>
                                <td>€&nbsp;240,00</td>
                            </tr>
                            <tr>
                                <td>Student:in</td>
                                <td>€&nbsp;60,00</td>
                            </tr>
                            <tr>
                                <td>Kinder/Jugend</td>
                                <td>€&nbsp;35,00</td>
                            </tr>
                            <tr>
                                <td>unterstützendes Mitglied</td>
                                <td>€&nbsp;25,00</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className="note" style={{ textAlign: "left" }}>
                        <strong>* Familycard:</strong> 2 Erwachsene (Ehepartner oder Lebensgemeinschaft) und alle Kinder (bis 18&nbsp;J.) im Familienverbund
                    </p>
                </section>

                <br />
                <section aria-labelledby="gaststunden">
                    <table style={{ textAlign: "left", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Leistung</th>
                                <th>Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gaststunde</td>
                                <td>€&nbsp;20,00 pro Platz</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className="muted" style={{ textAlign: "left" }}>
                        Kinder und Jugendliche (bis zum 18. Lebensjahr) erhalten 50&nbsp;% Ermäßigung auf die Gaststunden.
                    </p>
                </section>
            </div>
        </div>
    );
}