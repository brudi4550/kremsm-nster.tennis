import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import Title from "./title";

export default function WFragen() {
    return (
        <div
            className={`${GeistSans.className} max-w-3xl mx-auto px-4`}
            style={{ marginTop: 0, paddingTop: 30, background: "transparent" }}
        >
            <div className="flex items-center justify-between mb-8 gap-4">
                <Title>Wer Wo Wie Wann Was.</Title>
            </div>
            <div className="text-3xl leading-tight">
                <p>
                    Zweite Heimat. Wohnzimmer. Inbegriff der{" "}
                    <a
                        href="https://wikipedia.org/en/Third_Place"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                    >
                        Third Place Theorie
                    </a>
                    .
                </p>
                <p className="mt-3">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
                <p className="mt-3">
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
                <p className="mt-3">
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </p>
                <p className="mt-3">
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="mt-3">
                    Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                </p>
                <p className="mt-3">
                    Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p className="mt-3">
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
                </p>
                <p className="mt-3">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
                </p>
                <p className="mt-3">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
                </p>
                <p className="mt-3">
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
            </div>
        </div>
    );
}