import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[13px] text-left text-22xl text-gray-00 font-comforter ${className}`}
    >
      <GroupComponent1 />
      <img className="w-[46px] relative h-2.5" alt="" src="/group-1981.svg" />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
