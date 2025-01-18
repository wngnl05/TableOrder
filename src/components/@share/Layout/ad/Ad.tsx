import React from "react";
import { videoSources } from "db/constants";
import TableIndicator from "../indicator/TableIndicator";
import { FaCircleXmark } from "react-icons/fa6";
import {
  AdCloseButton,
  AdCloseWord,
  AdLogo,
  AdOverlay,
  AdVideo,
  AdWrapper,
  IconWrapper,
  Logo,
} from "./Ad.style";
import { logoSources } from "db/constants";
import { LanguageCode } from "db/constants";

interface AdPageProps {
  onClose: () => void;
  selectedLanguage: LanguageCode;
}

const AdPage: React.FC<AdPageProps> = ({ onClose, selectedLanguage }) => {
  return (
    <AdOverlay>
      <AdWrapper>
        <Logo>
          <AdLogo src={logoSources["defaultDark"]} />
        </Logo>
        <AdCloseButton onClick={onClose}>
          <AdCloseWord>
            <IconWrapper>
              <FaCircleXmark />
            </IconWrapper>
            Close
          </AdCloseWord>
        </AdCloseButton>
        <TableIndicator selectedLanguage={selectedLanguage} />
        <AdVideo src={videoSources[1]} autoPlay muted loop playsInline />
      </AdWrapper>
    </AdOverlay>
  );
};

export default AdPage;
