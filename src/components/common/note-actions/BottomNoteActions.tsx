import { CardActions } from "@mui/material";
import ArchiveNoteButton from "./ArchiveNoteButton";
import UnarchiveNoteButton from "./UnarchiveNoteButton";
import DeleteForeverNoteButton from "./DeleteForeverNoteButton";
import RestoreNoteButton from "./RestoreNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";
import { destinationOptions, NoteType } from "../types/types";

type BottomNoteActionsPropsType = {
  notesItem: NoteType,
  displayIn: destinationOptions,
  isNoteHover: boolean,
  isNoteOpen: boolean,
}

const BottomNoteActions = ({
  notesItem,
  displayIn,
  isNoteHover,
  isNoteOpen,
}: BottomNoteActionsPropsType) => {

  return (
    <CardActions
      //visible on hover
      sx={{
        visibility: ((isNoteHover || isNoteOpen) && "visible") || "hidden",
        m: 0,
        ml: 1.4,
        p: 0,
        px: "3px",
      }}
    >
      {/* // NotesNoteCard */}
      {/* {destination === destinationOptions.notes && ( */}
      {notesItem.currDest === "notes" && (
        <ArchiveNoteButton notesItem={notesItem} />
      )}
      {notesItem.currDest === "notes" && (
        <DeleteNoteButton
          notesItem={notesItem}
          displayIn={displayIn}
        />
      )}
      {/* // ArchivedNoteCard */}
      {notesItem.currDest === "archive" && (
        <UnarchiveNoteButton notesItem={notesItem} />
      )}
      {notesItem.currDest === "archive" && (
        <DeleteNoteButton
          notesItem={notesItem}
          displayIn={displayIn}
        />
      )}
      {/* // DeletedNoteCard */}
      {notesItem.currDest === "bin" && (
        <DeleteForeverNoteButton notesItem={notesItem} />
      )}
      {notesItem.currDest === "bin" && (
        <RestoreNoteButton notesItem={notesItem} />
      )}
    </CardActions>
  );
};

export default BottomNoteActions;
