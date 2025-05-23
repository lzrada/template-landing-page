import type { JSX } from "react";
import { FaRegHandPaper } from "react-icons/fa";

const Hand = ({ className }: { className: string }): JSX.Element => {
  return (
    <div className={className}>
      <FaRegHandPaper className="transform absolute w-10 -left-[10px] top-1 -rotate-180" />
      <FaRegHandPaper className="transform absolute w-10 right-[10px] top-5 -rotate-45" />
      <FaRegHandPaper className="transform absolute w-10 -left-[19px] top-5  rotate-45" />
    </div>
  );
};

export default Hand;
