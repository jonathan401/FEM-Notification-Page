import styled from "styled-components";

export const CardWrapper = styled.article<{ isRead: boolean }>`
  background-color: ${({ isRead }) => (isRead ? "" : `hsl(210, 60%, 98%)`)};
  padding: 0.9rem;
  margin: 0.6rem auto;
  display: flex;
  align-items: center;
  max-width: 100%;
  border-radius: 0.5rem;
  color: hsl(219, 12%, 42%);
  cursor: ${({ isRead }) => (isRead ? "initial" : "pointer")};

  a {
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: hsl(219, 85%, 26%);
    }
  }
`;

export const UserLink = styled.a`
  color: hsl(224, 21%, 14%);
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: hsl(219, 85%, 26%);
  }
`;

export const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostLink = styled.a<{ type: string }>`
  color: ${({ type }) =>
    type === "reaction" ? "hsl(219, 12%, 42%)" : "hsl(219, 85%, 26%)"};
`;

export const Dot = styled.span<{ isRead: boolean }>`
  width: 6px;
  height: 6px;
  display: inline-block;
  background-color: red;
  display: ${({ isRead }) => (isRead ? "none" : "inline-block")};
  margin-left: 0.2rem;
  border-radius: 50%;
  vertical-align: middle;
`;

export const NotificationContent = styled.div<{ misc: unknown }>`
  display: flex;
  font-size: clamp(0.87rem, 2.5vw, 1rem);
  max-width: ${({ misc }) => (misc ? "75%" : "100%")};
  justify-content: flex-start;
  flex-direction: column;
`;

export const Time = styled.p`
  color: hsl(219, 14%, 63%);
  font-weight: 300;
  margin-top: 0.1rem;
`;

export const ImgBox = styled.img`
  align-self: flex-start;
  justify-self: center;
  width: 35px;
`;
