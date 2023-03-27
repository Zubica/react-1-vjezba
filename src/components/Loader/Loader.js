import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { LoaderWrapper } from "./LoaderStyle";
import { colors } from "../../utils/styles/theme";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
