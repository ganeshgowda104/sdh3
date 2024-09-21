import GroupComponent from "./GroupComponent";
import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1309px] relative h-[118px] text-left text-sm text-gray-900 font-comforter ${className}`}
    >
      <GroupComponent
        package2="/package-2.svg"
        quickOrder="Quick Order"
        fastTrackYourOrdersWithQuick="Fast track your orders with quick delivery."
      />
      <GroupComponent propFlex="unset" />
      <GroupComponent propFlex="unset" />
      <GroupComponent2
        uploadFile="/upload-file.svg"
        uploadAFile="Upload a File"
        easilyUploadYourOrderFileTo="Easily upload your order file to place bulk orders."
      />
      <div className="absolute top-[0px] left-[658px] w-[322px] h-[118px]">
        <GroupComponent propFlex="unset" />
        <GroupComponent2
          uploadFile="/deployed-code-history.svg"
          uploadAFile="Order History / Reorder"
          easilyUploadYourOrderFileTo="Quickly reorder items from past purchases"
          propLeft="37px"
        />
      </div>
      <GroupComponent2
        uploadFile="/headphones.svg"
        uploadAFile="Manage orders"
        easilyUploadYourOrderFileTo="Handle returns, payments, or disputes with live support"
        propLeft="1024px"
      />
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
