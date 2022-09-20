import { IconType } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdPersonAdd } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

export interface iconProps {
  [key: string]: IconType;
}

const iconMap: iconProps = {
  reaction: AiFillHeart,
  comment: RiMessage2Fill,
  follow: MdPersonAdd,
  community: HiUserGroup,
  message: AiFillMessage,
};

export default iconMap;
