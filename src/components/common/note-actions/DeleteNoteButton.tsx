import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Tooltip, IconButton } from "@mui/material";
import { DeleteOutline as DeleteIcon } from "@mui/icons-material";
import { destinationOptions, NoteType, listOptions } from "../types/types";

type DeleteNoteButtonPropsType = {
  notesItem: NoteType,
  displayIn: destinationOptions,
};

const DeleteNoteButton = ({ notesItem, displayIn }: DeleteNoteButtonPropsType) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
    archivedNotes,
    setDeletedNotes,
  } = useContext(NotesDataContext);

  const handleDeleteButtonInNotes = (notesItem: NoteType) => {
    notesItem.currList = "bin";
    notesItem.currDest = "bin";
    console.log(notesItem);

    setDeletedNotes((prev) => [notesItem, ...prev]);
    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
  };
  const removeFromNotes = (notesItem: NoteType) => {
    const updatedNotes = notes.filter((item: NoteType) => item !== notesItem);
    setNotes(updatedNotes);
  };
  const removeFromPinnedNotes = (notesItem: NoteType) => {
    const updatedPinnedNotes = pinnedNotes.filter((item: NoteType) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  const handleDeleteButtonInArchive = (notesItem: NoteType) => {
    // update currList and currDest inside notesItem
    notesItem.currList = "bin";
    notesItem.currDest = "bin";
    console.log(notesItem);

    setDeletedNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const removeFromArchivedNotes = (notesItem: NoteType) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item: NoteType) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <Tooltip title="Delete">
      <IconButton
        onClick={() =>
          displayIn === "notes"
            ? handleDeleteButtonInNotes(notesItem)
            : handleDeleteButtonInArchive(notesItem)
        }
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteNoteButton;
