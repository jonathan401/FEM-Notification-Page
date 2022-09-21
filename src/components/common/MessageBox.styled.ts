import styled from "styled-components";

export const MessageBox = styled.p`
  padding: 0.8rem;
  font-weight: 300;
  max-width: 100%;
  font-size: clamp(0.87rem, 2vw, 1rem);
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.4rem;
  margin-top: 0.7rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.boxHoverBg};
  }
`;
