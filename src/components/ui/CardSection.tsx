import type { JSX } from "react";
import { MdOutlineLocationCity } from "react-icons/md";
import Hand from "./Hand";
import { HiOutlineUserGroup } from "react-icons/hi2";

const CardSection = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col font-semibold text-2xl font-sans justify-center items-center">
        <p>Manage your entire community </p>
        <p>in a single system</p>
        <p className="text-sm mt-2 font-thin">Who is Nextcent suitable for?</p>
      </div>

      <div className="grid grid-cols-3 p-10 ml-24 m-4 gap-4">
        <div className="text-center shadow-md rounded flex flex-col items-center p-2 justify-center w-60 h-60">
          <div className="relative w-12 h-12 rounded-br-2xl rounded-tl-2xl rounded bg-[#E8F5E9]">
            <HiOutlineUserGroup className="w-10 h-10 absolute -left-4 -top-1" />
          </div>
          <p className="font-semibold m-2">Membership Organisations</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="text-center shadow-md rounded flex flex-col items-center p-2 justify-center w-60 h-60">
          <div className="relative w-12 h-12 rounded-br-2xl rounded-tl-2xl rounded bg-[#E8F5E9]">
            <MdOutlineLocationCity className="w-10 h-10 absolute -left-4 -top-1" />
          </div>
          <p className="font-semibold m-2">National Associations</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="text-center shadow-md rounded flex flex-col items-center p-2 justify-center w-60 h-60">
          <div className=" w-12 relative h-12 rounded-br-2xl rounded-tl-2xl  rounded bg-[#E8F5E9]">
            <Hand className="text-black" />
          </div>
          <p className="font-semibold m-2">Clubs And Groups</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </>
  );
};
export default CardSection;
