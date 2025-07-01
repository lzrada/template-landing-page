import type { JSX } from "react";
import { MdCardMembership, MdOutlineLocationCity } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

const CardSection = (): JSX.Element => {
  return (
    <div className="w-full py-8 lg:py-16 px-4 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-2 leading-tight">Manage your entire community</h2>
        <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">in a single system</h3>
        <p className="font-thin text-sm sm:text-base text-gray-600 max-w-md mx-auto">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto">
        {/* Membership Organisations Card */}
        <div className="flex flex-col items-center text-center p-6 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#4CAF4F]/10 rounded-full flex items-center justify-center mb-6">
            <MdCardMembership className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF4F]" />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mb-3">Membership Organisations</h4>
          <p className="font-thin text-sm sm:text-base text-gray-600 leading-relaxed">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        {/* National Associations Card */}
        <div className="flex flex-col items-center text-center p-6 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#4CAF4F]/10 rounded-full flex items-center justify-center mb-6">
            <MdOutlineLocationCity className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF4F]" />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mb-3">National Associations</h4>
          <p className="font-thin text-sm sm:text-base text-gray-600 leading-relaxed">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        {/* Clubs And Groups Card */}
        <div className="flex flex-col items-center text-center p-6 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#4CAF4F]/10 rounded-full flex items-center justify-center mb-6">
            <HiOutlineUserGroup className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF4F]" />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mb-3">Clubs And Groups</h4>
          <p className="font-thin text-sm sm:text-base text-gray-600 leading-relaxed">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
