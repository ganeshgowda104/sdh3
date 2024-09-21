import MultiLanguageDrodpwon from "./MultiLanguageDrodpwon";
import MultiCurrencyDropdown from "./MultiCurrencyDropdown";
import PropTypes from "prop-types";

const TopNav = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] shadow-[0px_-1px_0px_rgba(255,_255,_255,_0.16)_inset] bg-gray1-100 flex flex-row items-center justify-between py-3 px-[300px] box-border text-left text-sm text-gray-00 font-comforter ${className}`}
    >
      <div className="relative leading-[20px]">{`Welcome to Johnson & Johnson Customer Connect`}</div>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[227px] relative leading-[20px] inline-block shrink-0">
            41067, Shrewsbury Surgery Center
          </div>
        </div>
        <div className="w-px relative border-gray-00 border-r-[1px] border-solid box-border h-[29px] opacity-[0.16]" />
        <MultiLanguageDrodpwon />
        <MultiCurrencyDropdown />
      </div>
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
