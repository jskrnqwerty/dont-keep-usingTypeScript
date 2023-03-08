import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Tooltip, IconButton } from "@mui/material";
import { RestoreFromTrashOutlined as RestoreIcon } from "@mui/icons-material";
import { NoteType } from "../types/types";

type RestoreNoteButtonPropsType = {
  notesItem: NoteType,
}

const RestoreNoteButton = ({ notesItem }: RestoreNoteButtonPropsType) => {
  const {
    setNotes,
    deletedNotes,
    setDeletedNotes,
  } = useContext(NotesDataContext);

  const handleRestoreButton = (notesItem: NoteType) => {
    notesItem.currList = "notes";
    notesItem.currDest = "notes";
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromDeletedNotes(notesItem);
  };

  const removeFromDeletedNotes = (notesItem: NoteType) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item) => item !== notesItem
    );
    setDeletedNotes(updatedDeletedNotes);
  };

  return (
    <Tooltip title="Restore">
      <IconButton onClick={() => handleRestoreButton(notesItem)}>
        <RestoreIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default RestoreNoteButton;
