import styled from "styled-components";

export const Container = styled.main`
  /* padding: 0.3rem 0.7rem; */
  height: 100%;
  width: 100%;
`;

export const NotificationContainer = styled.ul`
  width: 100%;
  background-color: white;
  padding: 1.2rem;
  border-radius: 0.9rem;
  list-style: none;
  box-shadow: 0 0.2rem 2.6rem rgb(131, 166, 210 / 40%);

  @media screen and (min-width: 800px) {
    margin-top: 5rem;
    height: initial;
    max-width: 700px;
  }
`;

export const Header = styled.header`
  margin-bottom: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: hsl(224, 21%, 14%);
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  }

  span {
    display: inline-block;
    text-align: center;
    margin-left: 0.2rem;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    border-radius: 0.4rem;
    padding: 0.17rem 0.65rem;
    color: white;
    background-color: hsl(219, 85%, 26%);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    color: hsl(219, 12%, 42%);
    outline: 0;
    border: 0;
    background-color: white;

    &:hover {
      color: hsl(219, 85%, 26%);
    }
  }
`;
