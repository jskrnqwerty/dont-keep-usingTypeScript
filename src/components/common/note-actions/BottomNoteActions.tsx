import { CardActions } from "@mui/material";
import ArchiveNoteButton from "./ArchiveNoteButton";
import UnarchiveNoteButton from "./UnarchiveNoteButton";
import DeleteForeverNoteButton from "./DeleteForeverNoteButton";
import RestoreNoteButton from "./RestoreNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";
import { Location, NoteType } from "../types/types";

type BottomNoteActionsPropsType = {
  notesItem: NoteType,
  displayIn: Location,
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
      {notesItem.location === "notes" && (
        <ArchiveNoteButton notesItem={notesItem} />
      )}
      {notesItem.location === "notes" && (
        <DeleteNoteButton
          notesItem={notesItem}
          displayIn={displayIn}
        />
      )}
      {/* // ArchivedNoteCard */}
      {notesItem.location === "archive" && (
        <UnarchiveNoteButton notesItem={notesItem} />
      )}
      {notesItem.location === "archive" && (
        <DeleteNoteButton
          notesItem={notesItem}
          displayIn={displayIn}
        />
      )}
      {/* // DeletedNoteCard */}
      {notesItem.location === "bin" && (
        <DeleteForeverNoteButton notesItem={notesItem} />
      )}
      {notesItem.location === "bin" && (
        <RestoreNoteButton notesItem={notesItem} />
      )}
    </CardActions>
  );
};

export default BottomNoteActions;
