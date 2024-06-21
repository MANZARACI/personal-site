import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function ExperienceSection() {
  return (
    <section id="experience" className="text-center">
      <h2 className={title()}>Work Experience</h2>
      <Card className="mt-10">
        <CardHeader className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-xl">DogGO</p>
            <p>July 2023 - Present</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between w-full font-light">
            <p className=" italic">Back End Developer</p>
            <p>Remote</p>
          </div>
        </CardHeader>
        <CardBody className="pl-8">
          <ul className="list-disc">
            <li>
              DogGO is a pet service app that uses a mobile application to offer
              safe and professional dog walking and pet grooming services.
            </li>
            <li>
              Built new features for our <b>microservices</b> using Lagom
              framework in <b>Scala</b>, <b>Kafka</b> and{" "}
              <b>Apache Cassandra</b>.
            </li>
            <li>
              Implemented <b>multi-language support</b> to make the services
              accessible to a wider audience.
            </li>
            <li>
              Wrote a <b>technical report</b> for Tubitak R&D project support
              program.
            </li>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
}
