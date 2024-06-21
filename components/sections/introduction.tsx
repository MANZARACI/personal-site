import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";

export default function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="min-h-screen flex flex-col justify-center"
    >
      <div>
        <h1 className={title({ size: "lg" })}>Başar Üreten</h1>
        <p className="mt-2 text-lg italic text-default-500 font-semibold">
          Backend Developer
        </p>
      </div>
      <div className="mt-20">
        <h2
          className={title({
            size: "sm",
            class: "font-medium text-default-500",
          })}
        >
          Who am I?
        </h2>
        <Divider />
        <p className="mt-4 text-2xl text-justify">
          Hi, I'm Başar Üreten, a Mathematical Engineering graduate turned
          passionate backend developer. My strong foundation in mathematics and
          engineering principles allows me to tackle complex challenges and
          optimize processes effectively. Outside of coding, I am a big gamer.
          You can easily find me playing some games or following some gaming
          related content.
        </p>
      </div>
    </section>
  );
}
