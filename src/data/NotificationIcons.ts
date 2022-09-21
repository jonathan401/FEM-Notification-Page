import { IconType } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdPersonAdd } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

// export interface iconProps {
//   [key: string]: IconType;
// }

export interface iconProps {
  [key: string]: {
    icon: IconType;
    bg: string;
  };
}

const iconMap: iconProps = {
  reaction: {
    icon: AiFillHeart,
    bg: "red",
  },
  comment: {
    icon: RiMessage2Fill,
    bg: "limegreen",
  },
  follow: {
    icon: MdPersonAdd,
    bg: "#3045e4",
  },
  community: {
    icon: HiUserGroup,
    bg: "#3045e4",
  },
  message: {
    icon: AiFillMessage,
    bg: "#3045e4",
  },
};

export default iconMap;
