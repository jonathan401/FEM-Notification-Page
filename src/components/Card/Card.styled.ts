import styled from "styled-components";

export const CardWrapper = styled.article<{ isRead: boolean }>`
  background-color: ${({ isRead, theme }) => (isRead ? "" : theme.unreadBg)};
  padding: 0.9rem;
  margin: 0.6rem auto;
  display: flex;
  align-items: center;
  max-width: 100%;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
  cursor: ${({ isRead }) => (isRead ? "initial" : "pointer")};

  a {
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.hoverColor};
    }
  }
`;

export const UserLink = styled.a`
  margin-right: 0.05rem;
  color: ${({ theme }) => theme.userLinkText};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

export const NotificationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostLink = styled.a<{ notificationType: string }>`
  color: ${({ notificationType, theme }) =>
    notificationType === "reaction" ? theme.postLinkText : theme.groupLinkText};
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
  max-width: ${({ misc }) => (misc ? "75%" : "100%")};
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: clamp(0.87rem, 2vw, 0.95rem);
  }
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 300;
  margin-top: 0.1rem;
  font-size: clamp(0.85rem, 2vw, 0.9rem);
`;

export const ImgBox = styled.img`
  align-self: flex-start;
  justify-self: center;
  width: 40px;
`;
