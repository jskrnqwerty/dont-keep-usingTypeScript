import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUI imports
import { Box } from "@mui/material";
// components imports
import { DrawerStateContext } from "./context/DrawerStateProvider";
import HeaderBar from "./header-bar/HeaderBar";
import Drawer from "./drawer/Drawer";
import HoverDrawer from "./drawer/HoverDrawer";
import Notes from "./display-area/notes/Notes";
import Reminders from "./display-area/reminders/Reminders";
import EditLabels from "./display-area/edit-labels/EditLabels";
import ArchivedNotes from "./display-area/archived-notes/ArchivedNotes";
import DeletedNotes from "./display-area/deleted-notes/DeletedNotes";
import { RoutesEnum } from "./common/types/types";
/**
 *
 */
const Home = () => {
  const { open } = useContext(DrawerStateContext);
  return (
    <Router>
      <HeaderBar />
      {!open && <HoverDrawer />}

      <Box
        id="drawer"
        sx={{ display: "flex" }}
      >
        <Drawer />
        <Routes>
          <Route
            path={RoutesEnum.notes}
            element={<Notes />}
          />
          <Route
            path={RoutesEnum.reminders}
            element={<Reminders />}
          />
          <Route
            path={RoutesEnum.editLabels}
            element={<EditLabels />}
          />
          <Route
            path={RoutesEnum.archive}
            element={<ArchivedNotes />}
          />
          <Route
            path={RoutesEnum.bin}
            element={<DeletedNotes />}
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default Home;
