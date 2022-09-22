import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.ContainerBg};
  padding: 1.2rem;

  @media screen and (min-width: 800px) {
    border-radius: 0.9rem;
    margin: 4rem 0;
    max-width: 700px;
  }
`;

export const NotificationContainer = styled.ul`
  width: 100%;
  list-style: none;
  box-shadow: 0 0.2rem 2.6rem rgb(131, 166, 210 / 40%);
`;

export const Header = styled.header`
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.textDark};
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  span {
    display: inline-block;
    text-align: center;
    margin-left: 0.2rem;
    font-size: clamp(0.9rem, 2vw, 0.95rem);
    border-radius: 0.4rem;
    padding: 0.17rem 0.65rem;
    color: ${({ theme }) => theme.textLight};
    background-color: ${({ theme }) => theme.tertiary};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    color: ${({ theme }) => theme.textPrimary};
    outline: 0;
    border: 0;
    background-color: transparent;

    &:hover {
      color: ${({ theme }) => theme.hoverColor};
    }
  }
`;
