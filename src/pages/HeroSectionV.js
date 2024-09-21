import TopNav from "../components/TopNav";
import MiddleNav from "../components/MiddleNav";
import BottomNav from "../components/BottomNav";
import FrameComponent from "../components/FrameComponent";
import GroupComponent3 from "../components/GroupComponent3";
import Category2 from "../components/Category2";
import Product from "../components/Product";
import Product1 from "../components/Product1";

const HeroSectionV = () => {
  return (
    <div className="w-full relative bg-gray-00 h-[6687px] overflow-hidden text-left text-21xl text-black font-comforter">
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <TopNav />
          <MiddleNav />
          <BottomNav />
        </div>
      </div>
      <div className="absolute top-[215px] left-[0px] w-[1920px] flex flex-col items-start justify-start gap-[120px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[49px]">
          <FrameComponent />
          <GroupComponent3 />
        </div>
        <Category2 />
        <div className="w-[1920px] h-[667px] flex flex-col items-start justify-start py-0 px-[300px] box-border gap-8">
          <b className="self-stretch relative flex items-center h-[75px] shrink-0">{`Your Browsing History `}</b>
          <div className="self-stretch h-[560px] flex flex-row items-center justify-start gap-[60px] text-4xl-4 text-gray-500">
            <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[542px] overflow-hidden shrink-0">
              <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                  <div className="relative leading-[26.7px]">Warranty</div>
                  <div className="relative leading-[26.7px] font-medium text-forestgreen">
                    2 years
                  </div>
                </div>
                <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                  High-Temperature Medical Sterilization Unit
                </div>
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                  <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                    $865.99
                  </div>
                  <div className="relative leading-[33.4px] font-medium text-red">
                    $25,000 - $40,000
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[19px] left-[calc(50%_-_152.6px)] w-[305px] h-[305px] object-cover"
                alt=""
                src="/component-1@2x.png"
              />
            </div>
            <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
              <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                  <div className="relative leading-[26.7px]">Warranty</div>
                  <div className="relative leading-[26.7px] font-medium text-forestgreen">
                    1 year
                  </div>
                </div>
                <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                  Orthopedic Surgical Positioning and Navigation System
                </div>
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                  <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                    $865.99
                  </div>
                  <div className="relative leading-[33.4px] font-medium text-red">
                    $15,000 - $25,000
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
                alt=""
                src="/component-5@2x.png"
              />
            </div>
            <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
              <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                  <div className="relative leading-[26.7px]">Warranty</div>
                  <div className="relative leading-[26.7px] font-medium text-forestgreen">
                    6 months
                  </div>
                </div>
                <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                  Adjustable Surgical Torque Wrench (4 Nm)
                </div>
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                  <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                    $865.99
                  </div>
                  <div className="relative leading-[33.4px] font-medium text-red">
                    $300 - $500
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
                alt=""
                src="/component-6@2x.png"
              />
            </div>
            <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
              <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                  <div className="relative leading-[26.7px]">Warranty</div>
                  <div className="relative leading-[26.7px] font-medium text-forestgreen">
                    1 year
                  </div>
                </div>
                <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                  Complete Surgical Instrument Tray Set
                </div>
                <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                  <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                    $865.99
                  </div>
                  <div className="relative leading-[33.4px] font-medium text-red">
                    $2,000 - $4,000
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
                alt=""
                src="/component-7@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1920px] h-[75px]" />
      </div>
      <div className="absolute top-[2380px] left-[0px] w-[1920px] flex flex-col items-start justify-start py-0 px-[300px] box-border gap-8">
        <b className="self-stretch relative flex items-center h-[75px] shrink-0">
          Contract-Based Recommendations
        </b>
        <div className="self-stretch h-[560px] flex flex-row items-center justify-start gap-[60px] text-4xl-4 text-gray-500">
          <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[542px] overflow-hidden shrink-0">
            <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                <div className="relative leading-[26.7px]">Warranty</div>
                <div className="relative leading-[26.7px] font-medium text-forestgreen">
                  2 years
                </div>
              </div>
              <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                High-Temperature Medical Sterilization Unit
              </div>
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                  $865.99
                </div>
                <div className="relative leading-[33.4px] font-medium text-red">
                  $25,000 - $40,000
                </div>
              </div>
            </div>
            <img
              className="absolute top-[19px] left-[calc(50%_-_152.6px)] w-[305px] h-[305px] object-cover"
              alt=""
              src="/component-1@2x.png"
            />
          </div>
          <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
            <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                <div className="relative leading-[26.7px]">Warranty</div>
                <div className="relative leading-[26.7px] font-medium text-forestgreen">
                  1 year
                </div>
              </div>
              <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                Orthopedic Surgical Positioning and Navigation System
              </div>
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                  $865.99
                </div>
                <div className="relative leading-[33.4px] font-medium text-red">
                  $15,000 - $25,000
                </div>
              </div>
            </div>
            <img
              className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
              alt=""
              src="/component-5@2x.png"
            />
          </div>
          <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
            <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                <div className="relative leading-[26.7px]">Warranty</div>
                <div className="relative leading-[26.7px] font-medium text-forestgreen">
                  6 months
                </div>
              </div>
              <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                Adjustable Surgical Torque Wrench (4 Nm)
              </div>
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                  $865.99
                </div>
                <div className="relative leading-[33.4px] font-medium text-red">
                  $300 - $500
                </div>
              </div>
            </div>
            <img
              className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
              alt=""
              src="/component-6@2x.png"
            />
          </div>
          <div className="w-[390px] relative shadow-[0px_9px_20px_rgba(0,_0,_0,_0.08)] rounded-8xs bg-gray-00 h-[532px] overflow-hidden shrink-0">
            <div className="absolute top-[353.9px] left-[26.7px] flex flex-col items-start justify-start gap-[13.4px]">
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-xl">
                <div className="relative leading-[26.7px]">Warranty</div>
                <div className="relative leading-[26.7px] font-medium text-forestgreen">
                  1 year
                </div>
              </div>
              <div className="w-[337.2px] relative leading-[33.4px] text-gray-900 inline-block">
                Complete Surgical Instrument Tray Set
              </div>
              <div className="flex flex-row items-start justify-start gap-[6.7px] text-gray-400">
                <div className="w-[91px] relative [text-decoration:line-through] leading-[33.4px] hidden">
                  $865.99
                </div>
                <div className="relative leading-[33.4px] font-medium text-red">
                  $2,000 - $4,000
                </div>
              </div>
            </div>
            <img
              className="absolute top-[20px] left-[calc(50%_-_152px)] w-[305px] h-[305px] object-cover"
              alt=""
              src="/component-7@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[5182px] left-[8px] w-[1921px] h-[409.6px]">
        <img
          className="absolute top-[0.4px] left-[0px] w-[1912px] h-[409.2px] object-cover"
          alt=""
          src="/screenshot-105-12@2x.png"
        />
        <div className="absolute top-[0px] left-[1867px] bg-whitesmoke-200 w-[54px] h-[52px]" />
      </div>
      <div className="absolute top-[3167px] left-[300px] w-[1320px] flex flex-col items-center justify-start gap-6">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="flex-1 relative flex items-center h-[75px]">
            All Products
          </b>
          <div className="flex flex-row items-center justify-center gap-4 text-base text-gray-600">
            <div className="flex flex-row items-start justify-start">
              <div className="shadow-[0px_-2px_0px_#eb1700_inset] bg-gray-00 flex flex-row items-start justify-start p-2 text-gray-900">
                <div className="relative leading-[20px] font-medium">
                  All Product
                </div>
              </div>
              <div className="bg-gray-00 flex flex-row items-start justify-start p-2">
                <div className="relative leading-[20px]">Prosthetics</div>
              </div>
              <div className="w-[164px] bg-gray-00 flex flex-row items-start justify-start p-2 box-border">
                <div className="flex-1 relative leading-[20px]">
                  Surgical Instruments
                </div>
              </div>
              <div className="bg-gray-00 flex flex-row items-start justify-start p-2">
                <div className="relative leading-[20px]">Consumables</div>
              </div>
              <div className="bg-gray-00 flex flex-row items-start justify-start p-2">
                <div className="relative leading-[20px]">Dressings</div>
              </div>
            </div>
            <div className="bg-gray-00 flex flex-row items-center justify-start py-1.5 px-0 gap-2 text-red">
              <div className="relative leading-[20px] font-medium">
                See more
              </div>
              <img
                className="w-5 relative h-5"
                alt=""
                src="/regulararrowright-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <div className="flex flex-row items-start justify-start gap-12">
            <Product component1="/component-1-2@2x.png" />
            <Product1
              component7="/component-7-2@2x.png"
              year="1 year"
              completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
              prop="$2,000 - $4,000"
            />
            <Product1
              component7="/component-6-2@2x.png"
              year="6 months"
              propMinWidth="unset"
              completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
              prop="$300 - $500"
              propWidth="unset"
            />
            <Product1
              component7="/component-5-2@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
              propWidth="unset"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-12">
            <Product1
              component7="/component-6-2@2x.png"
              year="6 months"
              propMinWidth="unset"
              completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
              prop="$300 - $500"
              propWidth="unset"
            />
            <Product component1="/component-1-2@2x.png" />
            <Product1
              component7="/component-5-2@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
              propWidth="unset"
            />
            <Product1
              component7="/component-7-3@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
              prop="$2,000 - $4,000"
              propWidth="unset"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-12">
            <Product1
              component7="/component-7-3@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
              prop="$2,000 - $4,000"
              propWidth="unset"
            />
            <Product component1="/component-1-2@2x.png" />
            <Product1
              component7="/component-5-2@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
              propWidth="unset"
            />
            <Product1
              component7="/component-6-2@2x.png"
              year="6 months"
              propMinWidth="unset"
              completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
              prop="$300 - $500"
              propWidth="unset"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-12">
            <Product1
              component7="/component-6-5@2x.png"
              year="6 months"
              propMinWidth="unset"
              completeSurgicalInstrument="Adjustable Surgical Torque Wrench (4 Nm)"
              prop="$300 - $500"
              propWidth="unset"
            />
            <Product1
              component7="/component-5-2@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Orthopedic Surgical Positioning and Navigation System"
              prop="$15,000 - $25,000"
              propWidth="unset"
            />
            <Product1
              component7="/component-7-5@2x.png"
              year="1 year"
              propMinWidth="unset"
              completeSurgicalInstrument="Complete Surgical Instrument Tray Set"
              prop="$2,000 - $4,000"
              propWidth="unset"
            />
            <Product component1="/component-1-2@2x.png" />
          </div>
        </div>
      </div>
      <div className="absolute top-[719px] left-[1412px] w-[188px] h-[74px] text-xl text-darkslateblue">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(235,_23,_0,_0.4)] rounded-8xs bg-gray-00 w-[188px] h-[74px]" />
        <div className="absolute top-[5px] left-[24px] w-[140px] h-[64.5px]">
          <img
            className="absolute top-[0px] left-[0px] w-[64.5px] h-[64.5px] object-cover"
            alt=""
            src="/botty-1@2x.png"
          />
          <b className="absolute top-[9px] left-[74px] tracking-[0.03em]">
            Amelia
          </b>
          <div className="absolute top-[41px] left-[74px] text-mini tracking-[0.03em] text-red">
            Online
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionV;
