import ChessImg from ".././assets/images/image-chess.webp";
import Angela from "../assets/images/avatar-angela-gray.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";
import Jacob from "../assets/images/avatar-jacob-thompson.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Mark from "../assets/images/avatar-mark-webber.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Rizky from "../assets/images/avatar-rizky-hasanuddin.webp";

export interface notificationProp {
  id: number;
  isRead: boolean;
  time: string;
  notificationType: string;
  imageSrc: string;
  username: string;
  action: string;
  postLink?: string;
  misc?: {
    img?: string;
    text?: string;
  };
}

const notificationData: notificationProp[] = [
  {
    id: 0,
    isRead: false,
    time: "1m ago",
    notificationType: "reaction",
    imageSrc: Mark,
    username: "Mark Webber",
    action: "reacted to your recent post",
    postLink: "My first tournament today!",
  },
  {
    id: 1,
    isRead: false,
    time: "5m ago",
    notificationType: "follow",
    imageSrc: Angela,
    username: "Angela Gray",
    action: "followed you",
  },
  {
    id: 2,
    isRead: false,
    time: "1 day ago",
    notificationType: "community",
    imageSrc: Jacob,
    username: "Jacob Thompson",
    action: "has joined your group",
    postLink: "Chess Club",
  },
  {
    id: 3,
    isRead: true,
    time: "5 days ago",
    notificationType: "message",
    imageSrc: Rizky,
    username: "Rizky Hasanuddin",
    action: "sent you a private message",
    misc: {
      text: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already 
    having lots of fun and improving my game.`,
    },
  },
  {
    id: 4,
    isRead: true,
    time: "1 week ago",
    notificationType: "comment",
    imageSrc: Kimberly,
    username: "Kimbery Smith",
    action: "commented on your picture",
    misc: {
      img: ChessImg,
    },
  },
  {
    id: 5,
    isRead: true,
    time: "2 weeks ago",
    notificationType: "reaction",
    imageSrc: Nathan,
    username: "Nathan Peterson",
    action: "reacted to your recent post",
    postLink: "5 end-game strategies to increase your win rate",
  },
  {
    id: 6,
    isRead: true,
    time: "2 weeks ago",
    notificationType: "community",
    imageSrc: Anna,
    username: "Anna Kim",
    action: "left the group",
    postLink: "Chess Club",
  },
];

export default notificationData;
