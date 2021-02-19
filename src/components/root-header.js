import React from "react";
import Image from "../components/common/image";
import { SeanSignature, SeanAvatar } from "../resources/images";
import "../styles";

const RootHeader = () => (
  <div className="max-width-outer root-header-background">
    <div className="max-width-inner flex-center flex-column">
      <Image
        width={200}
        height={50}
        source={SeanSignature}
        style={{ marginRight: 20 }}
      />
      <div className="root-header-text flex-center flex-column">
        <div className="roboto font-size-48 bold font-color-white uppercase">
          Sean OBrien
        </div>
        <div className="roboto font-size-22 font-color-white uppercase">
          Tech. Techno. Travel
        </div>
      </div>
      <Image
        source={SeanAvatar}
        height={260}
        width={260}
        style={{ marginTop: 20 }}
      />
    </div>
  </div>
);

export default RootHeader;
