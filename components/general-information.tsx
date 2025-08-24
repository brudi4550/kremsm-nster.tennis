import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GeneralInformation() {
    return (
        <Card className="max-w-3xl mx-auto my-12 p-8 shadow-lg">
            <CardHeader>
                <CardTitle className="text-4xl font-bold mb-4">
                    Lorem Ipsum Dolor Sit Amet
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a facilisis enim leo nec urna.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
            </CardContent>
        </Card>
    );
}