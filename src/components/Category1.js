import { useMemo } from "react";
import PropTypes from "prop-types";

const Category1 = ({
  className = "",
  propPadding,
  propGap,
  surgical172487901,
  surgical,
  instruments,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded bg-gray-00 h-[222px] flex flex-col items-center justify-center py-6 px-3 box-border gap-6 text-center text-base text-black font-comforter ${className}`}
      style={categoryStyle}
    >
      <img
        className="w-[102.4px] relative h-[102.4px] overflow-hidden shrink-0"
        alt=""
        src={surgical172487901}
      />
      <b className="w-[181px] relative leading-[24px] inline-block">
        <p className="m-0">{surgical}</p>
        <p className="m-0">{instruments}</p>
      </b>
    </div>
  );
};

Category1.propTypes = {
  className: PropTypes.string,
  surgical172487901: PropTypes.string,
  surgical: PropTypes.string,
  instruments: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
};

export default Category1;
