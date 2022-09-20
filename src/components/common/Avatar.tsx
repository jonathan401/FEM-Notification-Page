import React from "react";
import styled from "styled-components";

import iconMap, { iconProps } from "../../data/NotificationIcons";

interface avatarProps {
  avatarSrc: string;
  type: string;
}

const AvatarStyle = styled.img`
  width: 50px;
`;

const AvatarContainer = styled.div`
  margin-right: 0.9rem;
  align-self: flex-start;
  position: relative;
`;

const IconWrap = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  right: -0.3rem;
  bottom: -0.2rem;
  background-color: hsl(219, 85%, 26%);
`;

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
