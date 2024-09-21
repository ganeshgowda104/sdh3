import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] relative h-[654px] text-left text-22xl text-gray-00 font-comforter ${className}`}
    >
      <img
        className="absolute top-[5px] left-[0px] w-[1920px] h-[649px]"
        alt=""
        src="/rectangle-1.svg"
      />
      <img
        className="absolute top-[5px] left-[496px] w-[1124px] h-[649px] object-cover [mix-blend-mode:linear-dodge]"
        alt=""
        src="/glowingsynapsemulticoloredneuralcommunicationabstractdesigngeneratedbyai-1@2x.png"
      />
      <div className="absolute top-[0px] left-[228px] [filter:blur(47px)] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(13,_13,_13,_0.87),_rgba(0,_0,_0,_0))] w-[723px] h-[654px]" />
      <div className="absolute top-[5px] left-[1197px] [filter:blur(47px)] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(13,_13,_13,_0.87),_rgba(0,_0,_0,_0))] w-[723px] h-[649px]" />
      <b className="absolute top-[239px] left-[301px] leading-[49px]">
        <p className="m-0">{`Revolutionary AI-Driven Diagnostics `}</p>
        <p className="m-0">in Medical Devices</p>
      </b>
      <div className="absolute top-[372px] left-[301px] text-5xl leading-[49px] font-medium text-gray1-200">
        Enhancing Precision and Speed in Patient Care
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
