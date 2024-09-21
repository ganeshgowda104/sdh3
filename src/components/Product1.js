import { useMemo } from "react";
import PropTypes from "prop-types";

const Product1 = ({
  className = "",
  component7,
  year,
  propMinWidth,
  completeSurgicalInstrument,
  prop,
  propWidth,
}) => {
  const yearStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[294px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-9xs-8 bg-gray-00 h-[406px] overflow-hidden shrink-0 text-left text-mid-9 text-gray-500 font-comforter ${className}`}
    >
      <div className="absolute top-[270.4px] left-[20.4px] flex flex-col items-start justify-start gap-[10.2px]">
        <div className="flex flex-row items-start justify-start gap-[5.1px] text-base-3">
          <div className="relative leading-[20.4px]">Warranty</div>
          <div
            className="relative leading-[20.4px] font-medium text-forestgreen"
            style={yearStyle}
          >
            {year}
          </div>
        </div>
        <div className="w-[257.7px] relative leading-[25.5px] text-gray-900 inline-block">
          {completeSurgicalInstrument}
        </div>
        <div className="flex flex-row items-start justify-start gap-[5.1px] text-gray-400">
          <div className="w-[70px] relative [text-decoration:line-through] leading-[25.5px] hidden">
            $865.99
          </div>
          <div
            className="relative leading-[25.5px] font-medium text-red"
            style={divStyle}
          >
            {prop}
          </div>
        </div>
      </div>
      <img
        className="absolute top-[15.3px] left-[calc(50%_-_116.1px)] w-[233px] h-[233px] object-cover"
        alt=""
        src={component7}
      />
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,
  component7: PropTypes.string,
  year: PropTypes.string,
  completeSurgicalInstrument: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Product1;
