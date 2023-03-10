import { Tooltip, IconButton } from "@mui/material";
import {
  PushPin as UnpinIcon,
  PushPinOutlined as PinIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import {  NotesDataContext} from "../../context/NotesDataContextProvider";
import { NoteType } from "../types/types";

type PinNoteButtonProps = {
  notesItem: NoteType,
};

const PinNoteButton = ({ notesItem }: PinNoteButtonProps) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    archivedNotes,
    setArchivedNotes,
  } = useContext(NotesDataContext);
  // PinnedNotes functions
  const handlePinNoteButton = (notesItem: NoteType) => {

    console.log("In handlePinNoteButton, currDest: ", notesItem.location);
    // notesItem.location = "notes";
    setPinnedNotes([notesItem, ...pinnedNotes]);
    if (notesItem.location === "notes") {
      removeFromNotes(notesItem);
    }
    if (notesItem.location === "archive") {
      removeFromArchivedNotes(notesItem);
    }
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = true;
  };

  const handleUnpinNoteButton = (notesItem: NoteType) => {
    notesItem.location = "notes";
    console.log(notesItem);
    removeFromPinnedNotes(notesItem);
    setNotes([notesItem, ...notes]);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = false;
  };

  const removeFromNotes = (notesItem: NoteType) => {
    const updatedNotes = notes.filter((item: NoteType) => item !== notesItem);
    setNotes(updatedNotes);
  };

  const removeFromPinnedNotes = (notesItem: NoteType) => {
    const updatedPinnedNotes = pinnedNotes.filter((item: NoteType) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  const removeFromArchivedNotes = (notesItem: NoteType) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item: NoteType) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <>
      {!notesItem.isNotePinned && (
        <Tooltip title="Pin note">
          <IconButton onClick={() => handlePinNoteButton(notesItem)}>
            <PinIcon />
          </IconButton>
        </Tooltip>
      )}
      {notesItem.isNotePinned && (
        <Tooltip title="Unpin note">
          <IconButton onClick={() => handleUnpinNoteButton(notesItem)}>
            <UnpinIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default PinNoteButton;
