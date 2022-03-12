import MenuItem from "../MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
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
    name: "Explore #",
    icon: SearchIcon,
  },
  {
    name: "Profile",
    icon: PermIdentityIcon,
  },
];
console.log(window.innerWidth);

// make menu responsive:
export default function LeftMenu() {
  return (
    <div>
      {window.innerWidth < 1000 ? (
        <div>
          {menuData.map((menuItem) => (
            <MenuItem Icon={menuItem.icon} />
          ))}
        </div>
      ) : (
        <div>
          {menuData.map((menuItem) => (
            <MenuItem name={menuItem.name} Icon={menuItem.icon} />
          ))}
        </div>
      )}
    </div>
  );
}
