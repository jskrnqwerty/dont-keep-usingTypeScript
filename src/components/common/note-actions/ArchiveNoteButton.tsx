import { Tooltip, IconButton } from "@mui/material";
import { ArchiveOutlined as ArchiveIcon } from "@mui/icons-material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { NoteType } from "../types/types";

type ArchiveNoteButtonPropsType = {
  notesItem: NoteType
}

const ArchiveNoteButton = ({ notesItem }: ArchiveNoteButtonPropsType) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
  } = useContext(NotesDataContext);

  const handleArchiveButton = (notesItem: NoteType) => {
    // update currList and currDest inside notesItem
    notesItem.currList = "archive";
    notesItem.currDest = "archive";
    setArchivedNotes((prev) => [notesItem, ...prev]);
    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
    console.log("handleArchiveButton", notesItem);
  };
  const removeFromNotes = (notesItem: NoteType) => {
    const updatedNotes = notes.filter((item: NoteType) => item !== notesItem);
    setNotes(updatedNotes);
  };

  const removeFromPinnedNotes = (notesItem: NoteType) => {
    const updatedPinnedNotes = pinnedNotes.filter((item: NoteType)=> item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  return (
    <Tooltip title="Archive">
      <IconButton
        onClick={() => {
          console.log("notesItem.currList: ", notesItem.currList);
          handleArchiveButton(notesItem);
        }}
      >
        <ArchiveIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default ArchiveNoteButton;
