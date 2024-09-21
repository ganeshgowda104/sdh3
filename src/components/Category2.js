import Category1 from "./Category1";
import Category from "./Category";
import PropTypes from "prop-types";

const Category2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[294px] flex flex-col items-start justify-start py-0 px-[300px] box-border gap-8 text-left text-21xl text-gray-900 font-comforter ${className}`}
    >
      <b className="w-[1320px] relative leading-[40px] inline-block">
        Categories
      </b>
      <div className="w-[1320px] relative h-[222px] text-center text-base text-black">
        <div className="absolute top-[0px] left-[0px] w-[1320px] h-[222px]">
          <div className="absolute top-[0px] left-[0px] w-[1320px] h-[222px]">
            <div className="absolute top-[0px] left-[0px] w-[1338px] h-[233px]">
              <div className="absolute top-[0px] left-[0px] w-[1338px] h-[233px] flex flex-row items-start justify-start gap-[18px]">
                <div className="shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded bg-gray-00 flex flex-col items-center justify-center py-6 px-3 gap-6">
                  <img
                    className="w-[102.4px] relative h-[102.4px] overflow-hidden shrink-0"
                    alt=""
                    src="/prostheticleg-10116107-1.svg"
                  />
                  <b className="w-[181px] relative leading-[24px] inline-block">
                    Prosthetics and Orthotics
                  </b>
                </div>
                <Category1
                  surgical172487901="/surgical-17248790-1.svg"
                  surgical="Surgical "
                  instruments="Instruments"
                />
                <Category1
                  propPadding="24px 12px"
                  propGap="16px"
                  surgical172487901="/ecgmonitor-6552518-1.svg"
                  surgical="Cardiovascular "
                  instruments="Devices"
                />
                <Category
                  bandage27590061="/bandage-2759006-1.svg"
                  woundCareAndDressings="Wound Care and Dressings"
                />
                <Category1
                  propPadding="24px 12px"
                  propGap="16px"
                  surgical172487901="/inhaler-3077777-1.svg"
                  surgical="Respiratory "
                  instruments="Devices"
                />
                <Category
                  bandage27590061="/vaccine-1119426-1.svg"
                  propHeight="105.8px"
                  propWidth="105.8px"
                  woundCareAndDressings="Consumables and Disposables"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[87px] left-[0px] w-[1320px] h-12">
          <div className="absolute top-[0px] right-[1296px] rounded-81xl bg-red h-12 flex flex-row items-start justify-start p-3 box-border">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/regulararrowleft.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[1296px] rounded-81xl bg-red h-12 flex flex-row items-start justify-start p-3 box-border">
            <img
              className="w-6 relative h-6"
              alt=""
              src="/regulararrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Category2.propTypes = {
  className: PropTypes.string,
};

export default Category2;
