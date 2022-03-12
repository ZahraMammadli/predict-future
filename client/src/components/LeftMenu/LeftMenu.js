import MenuItem from "../MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./LeftMenu.css";

const menuData = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Landing",
    icon: MailOutlineIcon,
  },
  {
    name: "Menu3",
  },
  {
    name: "Menu4",
  },
];
export default function LeftMenu() {
  return (
    <div>
      {menuData.map((menuItem) => (
        <MenuItem name={menuItem.name} Icon={menuItem.icon} />
      ))}
    </div>
  );
}
