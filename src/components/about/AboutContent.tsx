import React from "react";
import ClubImage from "../clubs/ClubImage";
import AboutButton from "./AboutButton";

interface AboutContentProps {
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  buttonName: string;
}

const AboutContent = (props: AboutContentProps) => {
  return (
    <section className="w-full flex px-8 justify-center gap-10">
      <ClubImage size="lg" />
      <article className="flex flex-col">
        <p className="font-PyeongChang text-white text-lg">{props.title}</p>
        <div className="w-9/12 border-b-2 my-2"></div>
        <p className="font-PyeongChang text-white text-sm">{props.content1}</p>
        <p className="font-PyeongChang text-white text-sm">{props.content2}</p>
        <p className="font-PyeongChang text-white text-sm">{props.content3}</p>
        <p className="font-PyeongChang text-white text-sm mb-4">
          {props.content4}
        </p>
        <AboutButton>{props.buttonName}</AboutButton>
      </article>
    </section>
  );
};

export default AboutContent;