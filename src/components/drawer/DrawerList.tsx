import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as NotesIcon,
  NotificationsNoneOutlined as RemindersIcon,
  CreateOutlined as EditLabelsIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { DrawerStateContext } from "../context/DrawerStateProvider";
import { RoutesEnum } from "../common/types/types";

enum Name {
  notes = "Notes",
  reminders = "Reminders",
  editLabels = "Edit labels",
  archive = "Archive",
  bin = "Bin",
  home = "Keep",
}
// enum Route {
//   notes = "/dont-keep-usingTypeScript/",
//   reminders = "/reminders",
//   editLabels = "/edit-labels",
//   archive = "/archive",
//   bin = "/bin",
// }
type DrawerMenuType = {
  id: number;
  name: Name;
  icon: React.ReactNode;
  route: RoutesEnum;
  headerText: Name;
};

const drawerMenu: DrawerMenuType[] = [
  {
    id: 1,
    name: Name.notes,
    icon: <NotesIcon />,
    route: RoutesEnum.notes,
    headerText: Name.home,
  },
  {
    id: 2,
    name: Name.reminders,
    icon: <RemindersIcon />,
    route: RoutesEnum.reminders,
    headerText: Name.reminders,
  },
  {
    id: 3,
    name: Name.editLabels,
    icon: <EditLabelsIcon />,
    route: RoutesEnum.editLabels,
    headerText: Name.editLabels,
  },
  {
    id: 4,
    name: Name.archive,
    icon: <ArchiveIcon />,
    route: RoutesEnum.archive,
    headerText: Name.archive,
  },
  {
    id: 5,
    name: Name.bin,
    icon: <DeleteIcon />,
    route: RoutesEnum.bin,
    headerText: Name.bin,
  },
];

const DrawerList = () => {
  const { open, openHover } = useContext(DrawerStateContext);

  return (
    <List>
      {drawerMenu.map((menuItem) => (
        <ListItem
          key={menuItem.id}
          disablePadding
          sx={{
            display: "block",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            "&:hover": { bgcolor: "#feefc3" },
          }}
        >
          <Link
            to={menuItem.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              disableRipple
              sx={{
                minHeight: 48,
                justifyContent: open || openHover ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open || openHover ? 3 : "auto",
                  justifyContent: "center",
                  // bgcolor: "#feefc3",
                  // borderRadius: "10px",
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.name}
                sx={{ opacity: open || openHover ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
