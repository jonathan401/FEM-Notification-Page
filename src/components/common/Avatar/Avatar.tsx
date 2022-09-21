import React from "react";

import iconMap, { iconProps } from "../../../data/NotificationIcons";
import { AvatarStyle, AvatarContainer, IconWrap } from "./Avatar.styled";

interface avatarProps {
  avatarSrc: string;
  type: string;
}

const Avatar: React.FC<avatarProps> = ({ avatarSrc, type }) => {
  const Icon = iconMap[type as keyof iconProps];

  return (
    <AvatarContainer>
      <AvatarStyle src={avatarSrc} alt="" />
      <IconWrap>{<Icon color="white" size="13" />}</IconWrap>
    </AvatarContainer>
  );
};

export default Avatar;
