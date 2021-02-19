import React from "react";
import ScreenWrapper from "../components/common/screen-wrapper";
import SectionTitle from "../components/common/section-title";
import Image from "../components/common/image";
import AccomplishmentJSON from "../resources/content/accomplishments.json";

import "../styles";

const AccomplishmentCard = ({ item }) => (
  <a
    className="accomplishment-card flex-center"
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image source={item.image} width={175} />
  </a>
);

const Accomplishments = () => (
  <ScreenWrapper accomplishments>
    <SectionTitle
      intro="accomplishments"
      title="what i've done"
      color="font-color-white"
    />
    <div className="accomplishment-cards-container flex-row flex-space-even">
      {AccomplishmentJSON.map((item) => (
        <AccomplishmentCard item={item} />
      ))}
    </div>
  </ScreenWrapper>
);

export default Accomplishments;
