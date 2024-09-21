// import PropTypes from "prop-types";

// const BottomNav = ({ className = "" }) => {
//   return (
//     <div
//       className={`w-[1920px] shadow-[0px_-1px_0px_#e4e7e9_inset] bg-gray-00 flex flex-row items-center justify-between py-4 px-[300px] box-border text-left text-sm text-gray-600 font-comforter ${className}`}
//     >
//       <div className="flex flex-row items-center justify-center gap-6">
//         <div className="w-[154px] relative h-12 text-gray-900">
//           <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 flex flex-row items-center justify-center py-3.5 px-6 gap-2">
//             <div className="relative leading-[20px] font-medium">
//               All Category
//             </div>
//             <img
//               className="w-4 relative h-4"
//               alt=""
//               src="/regularcaretdown-2.svg"
//             />
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-start">
//           <div className="relative leading-[20px]">Home</div>
//         </div>
//         <div className="flex flex-row items-center justify-start gap-1.5">
//           <div className="relative leading-[20px]">Orders</div>
//           <img
//             className="w-4 relative h-4"
//             alt=""
//             src="/regularcaretdown-2.svg"
//           />
//         </div>
//         <div className="flex flex-row items-center justify-start gap-1.5">
//           <div className="relative leading-[20px]">Inventory Management</div>
//           <img
//             className="w-4 relative h-4"
//             alt=""
//             src="/regularcaretdown-2.svg"
//           />
//         </div>
//         <div className="flex flex-row items-center justify-start gap-1.5">
//           <div className="relative leading-[20px]">{`Reports & Analytics`}</div>
//           <img
//             className="w-4 relative h-4"
//             alt=""
//             src="/regularcaretdown-2.svg"
//           />
//         </div>
//         <div className="flex flex-row items-center justify-start">
//           <div className="relative leading-[20px]">Product Catalog</div>
//         </div>
//         <div className="flex flex-row items-center justify-start">
//           <div className="relative leading-[20px]">{`Support & Resources`}</div>
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-center gap-2 text-lg text-gray-900">
//         <img className="w-7 relative h-7" alt="" src="/perm-phone-msg.svg" />
//         <div className="relative leading-[24px]">Contact us</div>
//       </div>
//     </div>
//   );
// };

// BottomNav.propTypes = {
//   className: PropTypes.string,
// };

// export default BottomNav;


import PropTypes from "prop-types";

const BottomNav = ({ className = "" }) => {
  return (
    <div
      className={`w-full shadow-[0px_-1px_0px_#e4e7e9_inset] bg-gray-00 flex flex-row items-center justify-between py-4 px-[5%] md:px-[10%] box-border text-left text-sm text-gray-600 font-comforter ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
        <div className="w-auto relative h-12 text-gray-900">
          <div className="flex flex-row items-center justify-center py-3.5 px-6 gap-2 rounded-sm bg-whitesmoke-100">
            <div className="relative leading-[20px] font-medium">All Category</div>
            <img
              className="w-4 h-4"
              alt=""
              src="/regularcaretdown-2.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[20px]">Home</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1.5">
          <div className="relative leading-[20px]">Orders</div>
          <img
            className="w-4 h-4"
            alt=""
            src="/regularcaretdown-2.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-1.5">
          <div className="relative leading-[20px]">Inventory Management</div>
          <img
            className="w-4 h-4"
            alt=""
            src="/regularcaretdown-2.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-1.5">
          <div className="relative leading-[20px]">{`Reports & Analytics`}</div>
          <img
            className="w-4 h-4"
            alt=""
            src="/regularcaretdown-2.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[20px]">Product Catalog</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[20px]">{`Support & Resources`}</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-lg text-gray-900">
        <img className="w-7 h-7" alt="" src="/perm-phone-msg.svg" />
        <div className="relative leading-[24px]">Contact us</div>
      </div>
    </div>
  );
};

BottomNav.propTypes = {
  className: PropTypes.string,
};

export default BottomNav;
