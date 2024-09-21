import PropTypes from "prop-types";

const MultiLanguageDrodpwon = ({ className = "" }) => {
  return (
    <div
      className={`w-11 relative h-5 text-left text-sm text-gray-00 font-comforter ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center gap-1.5">
        <div className="relative leading-[20px]">Eng</div>
        <img className="w-3 relative h-3" alt="" src="/regularcaretdown.svg" />
      </div>
    </div>
  );
};

MultiLanguageDrodpwon.propTypes = {
  className: PropTypes.string,
};

export default MultiLanguageDrodpwon;
