import PropTypes from "prop-types";

const Product = ({ className = "", component1 }) => {
  return (
    <div
      className={`w-[294px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-9xs-8 bg-gray-00 h-[406px] overflow-hidden shrink-0 text-left text-mid-5 text-gray-500 font-comforter ${className}`}
    >
      <div className="absolute top-[265.5px] left-[20px] flex flex-col items-start justify-start gap-2.5">
        <div className="flex flex-row items-start justify-start gap-[5px] text-mini">
          <div className="relative leading-[20px]">Warranty</div>
          <div className="relative leading-[20px] font-medium text-forestgreen">
            2 years
          </div>
        </div>
        <div className="w-[252.9px] relative leading-[25px] text-gray-900 inline-block">
          High-Temperature Medical Sterilization Unit
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px] text-gray-400">
          <div className="w-[68px] relative [text-decoration:line-through] leading-[25px] hidden">
            $865.99
          </div>
          <div className="relative leading-[25px] font-medium text-red">
            $25,000 - $40,000
          </div>
        </div>
      </div>
      <img
        className="absolute top-[14.3px] left-[calc(50%_-_114.2px)] w-[228.7px] h-[228.7px] object-cover"
        alt=""
        src={component1}
      />
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  component1: PropTypes.string,
};

export default Product;
