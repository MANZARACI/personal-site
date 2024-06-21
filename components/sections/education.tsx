import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function EducationSection() {
  return (
    <section id="education" className="text-center mt-20">
      <h2 className={title()}>Education</h2>
      <Card className="mt-10">
        <CardHeader className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-xl">Yildiz Technical University</p>
            <p>October 2020 - June 2024</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between w-full font-light">
            <p className=" italic">BS in Mathematical Engineering</p>
            <p>Istanbul, Turkey</p>
          </div>
        </CardHeader>
        <CardBody className="pl-8">
          <ul className="list-disc">
            <li>3.57/4 GPA</li>
            <li>
              3<sup>rd</sup> place in my course for Erasmus student exchange
              program
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card className="mt-10">
        <CardHeader className="flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-xl">
              Technological University of the Shannon
            </p>
            <p>September 2022 - May 2023</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between w-full font-light">
            <p className=" italic">BS in Computer Engineering</p>
            <p>Athlone, Ireland</p>
          </div>
        </CardHeader>
        <CardBody className="pl-8">
          <ul className="list-disc">
            <li>Studied with Erasmus student exchange program.</li>
            <li>
              Best student award in Computer Engineering/Networks Level 7 in the
              academic year 2022-2023
            </li>
            <li>
              2<sup>nd</sup> place in Microcontroller Group Project Competition
              in BEng Computer Engineering for 2023
            </li>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
}
