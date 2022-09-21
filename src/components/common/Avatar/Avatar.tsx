import React from "react";

import iconMap, { iconProps } from "../../../data/NotificationIcons";
import { AvatarStyle, AvatarContainer, IconWrap } from "./Avatar.styled";

interface avatarProps {
  avatarSrc: string;
  notificationType: string;
  altText: string;
}

const Avatar: React.FC<avatarProps> = ({
  avatarSrc,
  notificationType,
  altText,
}) => {
  const Icon = iconMap[notificationType as keyof iconProps].icon;
  const iconBg = iconMap[notificationType as keyof iconProps].bg;

  return (
    <AvatarContainer>
      <AvatarStyle src={avatarSrc} alt={altText} />
      <IconWrap iconBg={iconBg} aria-hidden="true">
        {<Icon color="white" size="13" />}
      </IconWrap>
    </AvatarContainer>
  );
};

export default Avatar;
