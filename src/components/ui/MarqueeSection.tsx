import type { JSX } from "react";
import Marquee from "react-fast-marquee";

export const MarqueeSection = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col">
          <p className="flex text-3xl mt-8 font-semibold justify-center items-center">Our Partners</p>
          <p className="font-thin">We have been working with some Fortune 500+ clients</p>
        </div>
      </div>
      <div className="p-3 m-3 flex justify-center items-center w-auto">
        <Marquee speed={125} className="flex gap-4 ">
          <img src="/images/adidas.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/apple.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/firebase.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/github.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/linux.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/microsoft.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/mongo.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/puma.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/tiktok.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/tokped.png" className="w-48 m-3 h-36 object-fill"></img>
          <img src="/images/ts-logo.png" className="w-48 m-3 h-36 object-fill"></img>
        </Marquee>
      </div>
    </>
  );
};
