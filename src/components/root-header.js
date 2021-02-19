import React from "react";
import Image from "../components/common/image";
import ScreenWrapper from "../components/common/screen-wrapper";
import { SeanSignature, SeanAvatar } from "../resources/images";
import "../styles";

const RootHeader = () => (
  <ScreenWrapper rootBackground>
    <div className="flex-center flex-column">
      <Image
        width={200}
        height={50}
        source={SeanSignature}
        style={{ marginRight: 15 }}
      />
      <div className="root-header-text flex-center flex-column">
        <div className="roboto font-size-48 bold font-color-white uppercase">
          Sean O'Brien
        </div>
        <div className="roboto font-size-22 font-color-white uppercase">
          Tech. Food. Travel. Wine.
        </div>
      </div>
      <Image
        source={SeanAvatar}
        height={260}
        width={260}
        style={{ marginTop: 20 }}
      />
    </div>
  </ScreenWrapper>
);

export default RootHeader;
