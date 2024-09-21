import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  uploadFile,
  uploadAFile,
  easilyUploadYourOrderFileTo,
  propLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[27px] left-[366px] w-[248px] h-16 text-left text-sm text-gray-900 font-comforter ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-10 h-10"
        alt=""
        src={uploadFile}
      />
      <div className="absolute top-[0px] left-[56px] flex flex-col items-start justify-start gap-1">
        <b className="w-48 relative leading-[20px] uppercase inline-block">
          {uploadAFile}
        </b>
        <div className="w-48 relative leading-[20px] text-gray-600 inline-block">
          {easilyUploadYourOrderFileTo}
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  uploadFile: PropTypes.string,
  uploadAFile: PropTypes.string,
  easilyUploadYourOrderFileTo: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default GroupComponent2;
