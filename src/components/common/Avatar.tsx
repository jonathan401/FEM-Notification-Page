import React from "react";
import styled from "styled-components";

interface Props {
  avatarSrc: string;
}

const AvatarStyle = styled.img`
  width: 35px;
  align-self: flex-start;
  margin-right: 0.7rem;
`;

const Avatar: React.FC<Props> = ({ avatarSrc }) => {
  return <AvatarStyle src={avatarSrc} alt="" />;
};

export default Avatar;
