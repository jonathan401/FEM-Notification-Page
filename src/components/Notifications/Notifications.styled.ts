import styled from "styled-components";

export const NotificationContainer = styled.ul`
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  list-style: none;
  box-shadow: 0 0.2rem 2.6rem rgb(131, 166, 210 / 40%);
`;

export const Container = styled.main`
  padding: 0.3rem 0.7rem;
  max-width: 700px;
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
  }

  span {
    display: inline-block;
    text-align: center;
    margin-left: 0.3rem;
    font-size: 0.7rem;
    border-radius: 0.3rem;
    padding: 0.17rem 0.5rem;
    color: white;
    background-color: hsl(219, 85%, 26%);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    color: hsl(219, 12%, 42%);
    outline: 0;
    border: 0;
    background-color: white;

    &:hover {
      color: hsl(219, 85%, 26%);
    }
  }
`;
