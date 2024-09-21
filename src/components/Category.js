import { useMemo } from "react";
import PropTypes from "prop-types";

const Category = ({
  className = "",
  bandage27590061,
  propHeight,
  propWidth,
  woundCareAndDressings,
}) => {
  const bandage27590061IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div
      className={`shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded bg-gray-00 h-[222px] flex flex-col items-center justify-center py-6 px-3 box-border gap-4 text-center text-base text-black font-comforter ${className}`}
    >
      <img
        className="w-[102.4px] relative h-[102.4px] overflow-hidden shrink-0"
        alt=""
        src={bandage27590061}
        style={bandage27590061IconStyle}
      />
      <b className="w-[181px] relative leading-[24px] inline-block">
        {woundCareAndDressings}
      </b>
    </div>
  );
};

Category.propTypes = {
  className: PropTypes.string,
  bandage27590061: PropTypes.string,
  woundCareAndDressings: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Category;
