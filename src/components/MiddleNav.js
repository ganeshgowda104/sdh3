import PropTypes from "prop-types";

const MiddleNav = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-red flex flex-row items-center justify-between py-5 px-[300px] box-border text-left text-5xl text-gray-00 font-comforter ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-4">
        <img
          className="w-[103.5px] relative h-[46px]"
          alt=""
          src="/vector.svg"
        />
        <b className="relative tracking-[-0.02em] leading-[24px]">
          <p className="m-0">Customer</p>
          <p className="m-0">Connect</p>
        </b>
      </div>
      <div className="shadow-[0px_8px_32px_rgba(0,_0,_0,_0.08)] rounded-sm bg-gray-00 flex flex-row items-start justify-start py-3.5 px-5 gap-2 text-sm text-gray-500">
        <div className="w-[578px] relative leading-[20px] inline-block shrink-0">
          Search for anything...
        </div>
        <img
          className="w-5 relative h-5"
          alt=""
          src="/regularmagnifyingglass.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-6 text-center text-xs">
        <div className="w-9 relative h-9">
          <img
            className="absolute top-[0px] left-[0px] w-9 h-9"
            alt=""
            src="/shopping-cart.svg"
          />
          <div className="absolute top-[-9.5px] right-[-1.5px] rounded-81xl bg-red border-gray-00 border-[1.5px] border-solid flex flex-col items-start justify-start py-0.5 px-0">
            <div className="w-5 relative leading-[16px] font-medium inline-block">
              2
            </div>
          </div>
        </div>
        <img className="w-9 relative h-9" alt="" src="/bookmark-heart.svg" />
        <img className="w-9 relative h-9" alt="" src="/account-circle.svg" />
      </div>
    </div>
  );
};

MiddleNav.propTypes = {
  className: PropTypes.string,
};

export default MiddleNav;
