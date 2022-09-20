import React from "react";

import Avatar from "../common/Avatar";
import { MessageBox } from "../common/MessageBox.styled";
import {
  CardWrapper,
  NotificationContent,
  NotificationWrapper,
  UserLink,
  ImgBox,
  PostLink,
  Time,
  Dot,
} from "./Card.styled";

interface CardProps {
  data: {
    id: number;
    isRead: boolean;
    time: string;
    type: string;
    imageSrc: string;
    username: string;
    action: string;
    postlink?: string;
    misc?: {
      img?: string;
      text?: string;
    };
  };
  markAsRead: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  data: { isRead, time, type, imageSrc, username, action, postlink, misc, id },
  markAsRead,
}) => {
  const handleClick = () => {
    markAsRead(id);
  };

  const renderMisc = () => {
    // render the extra content
    if (misc) {
      return misc.text ? (
        <MessageBox>{misc.text}</MessageBox>
      ) : (
        <ImgBox src={misc.img} />
      );
    }
  };

  return (
    <CardWrapper onClick={handleClick} isRead={isRead}>
      <Avatar avatarSrc={imageSrc} type={type} />
      <NotificationWrapper>
        <NotificationContent misc={misc}>
          <p>
            <UserLink href="/">{username}</UserLink> {action}{" "}
            <PostLink type={type} href="/">
              {postlink}
            </PostLink>
            <Dot isRead={isRead} aria-label="hidden" />
          </p>
          <Time>{time}</Time>
        </NotificationContent>
        {renderMisc()}
      </NotificationWrapper>
    </CardWrapper>
  );
};

export default Card;

// const Card: React.FC = () => {
//   return (
//     <CardWrapper>
//       <Avatar avatarSrc={Mark} />
//       <NotificationWrapper>
//         <NotificationContent>
//           <p>
//             <a href="/">Mark Webber</a> sent a private message{" "}
//             {/* <a href="/" className="post">
//               My first tournatment today!
//             </a> */}
//           </p>
//           <p className="time">1m ago</p>
//         </NotificationContent>
//         {/* message box or chess image */}
//         {/* <ImgBox src={chessImg} alt="lady playing chess" /> */}
//         <MessageBox>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
//           commodi ut aliquam debitis eum ducimus a quis eaque possimus ea.
//         </MessageBox>
//       </NotificationWrapper>
//     </CardWrapper>
//   );
// };

// export default Card;
