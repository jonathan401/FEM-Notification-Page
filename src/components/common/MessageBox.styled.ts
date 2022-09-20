import styled from "styled-components";

export const MessageBox = styled.p`
  padding: 0.8rem;
  font-weight: 300;
  max-width: 100%;
  font-size: 0.86rem;
  border: 1px solid hsl(205, 33%, 90%);
  border-radius: 0.4rem;
  margin-top: 0.7rem;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: hsl(211, 68%, 94%);
  }
`;
