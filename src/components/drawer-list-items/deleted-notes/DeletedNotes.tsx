import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import NoteCardTemplate from "../../common/templates/NoteCardTemplate";
import EmptyNotesTemplate from "../../common/templates/EmptyNotesTemplate";
import { NoteType } from "../../common/types/types";

const DeletedNotes = () => {
  const { deletedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "80px",
      }}
    >
      <Grid2
        container
        display="flex"
        gap={1.5}
        marginTop="80px"
        maxWidth="99%"
        minWidth="90%"
        alignSelf="center"
        alignItems="left"
        sx={{ marginTop: "30px", marginX: "10px", padding: "10px" }}
      >
        {deletedNotes.length > 0 ? (
          deletedNotes.map((notesItem: NoteType, index: number) => (
            <Grid2
              // item
              key={index}
              maxWidth="240px"
              // onClick={() => <EditNoteCard notesItem={notesItem} />}
              // xs={12}
            >
              <NoteCardTemplate
                notesItem={notesItem}
                displayIn="bin"
              />
            </Grid2>
          ))
        ) : (
          <EmptyNotesTemplate displayIn="bin" />
        )}
      </Grid2>
    </Box>
  );
};

export default DeletedNotes;
