import type { JSX } from "react";

export const SectionOne = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-12 gap-16">
      <div>
        <p className="text-3xl font-bold">
          Lessons and insights
          <p className="text-[#4CAF4F]">from 8 years</p>
          <p className="text-sm font-thin">Where to grow your business as a photographer: site or social media?</p>
          <div className="flex justify-center items-center rounded font-normal text-sm text-white w-[89px] h-[36px] mt-2 cursor-pointer bg-[#4CAF4F] hover:bg-[#3E8E41]">Register</div>
        </p>
      </div>

      <div>
        <img src="/images/main.png" className="w-[400px] h-[400px]" alt="Gambar" />
      </div>

      <p id="our-partners" className="invisible absolute -bottom-7"></p>
    </div>
  );
};
