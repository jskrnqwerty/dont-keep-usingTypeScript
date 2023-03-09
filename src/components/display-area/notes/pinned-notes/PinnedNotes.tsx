import { useContext } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import { NotesDataContext } from "../../../context/NotesDataContextProvider";
import PinnedNotesGridHeading from "../grid-headings/PinnedNotesGridHeading";
import NoteCardTemplate from "../../../common/templates/NoteCardTemplate";
import { NoteType } from "../../../common/types/types";

const PinnedNotes = () => {
  const { pinnedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "70px",
      }}
    >
      <PinnedNotesGridHeading />
      <Grid2
        container
        gap={1.5}
      >
        {pinnedNotes.map((notesItem: NoteType, index: number) => (
          <Grid2
            // item
            key={index}
            maxWidth="240px"
          >
            <NoteCardTemplate
              notesItem={notesItem}
              displayIn="notes"
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default PinnedNotes;
