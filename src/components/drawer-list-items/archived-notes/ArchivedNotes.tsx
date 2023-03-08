import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// import NoteCardTemplate from "../../templates/NoteCardTemplate";
// import EmptyNotesTemplate from "../../templates/EmptyNotesTemplate";
import NoteCardTemplate from "../../common/templates/NoteCardTemplate";
import EmptyNotesTemplate from "../../common/templates/EmptyNotesTemplate";
import { NoteType } from "../../common/types/types";

const ArchivedNotes = () => {
  const { archivedNotes } = useContext(NotesDataContext);

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
        {archivedNotes.length > 0 ? (
          archivedNotes.map((notesItem: NoteType, index: number) => (
            <Grid2
            // item
            key={index}
            maxWidth="240px"
              // onClick={() => <EditNoteCard notesItem={notesItem} />}
              // xs={12}
            >
              <NoteCardTemplate
                notesItem={notesItem}
                displayIn="archive"
              />
            </Grid2>
          ))
        ) : (
          <EmptyNotesTemplate displayIn="archive" />
        )}
      </Grid2>
    </Box>

    // <Box
    //   id="notes-grid-container"
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     flexGrow: 1,
    //     mt: "80px",
    //     marginX: "30px",
    //     padding: "10px",
    //   }}
    // >
    //   <Grid container>
    //     {archivedNotes.length > 0 ? (
    //       archivedNotes.map((notesItem) => (
    //         <NoteCardTemplate
    //           notesItem={notesItem}
    //           displayIn="archive"
    //         />
    //       ))
    //     ) : (
    //       <EmptyNotesTemplate displayIn={destinationOptions.archive} />
    //     )}
    //   </Grid>
    // </Box>
  );
};

export default ArchivedNotes;
