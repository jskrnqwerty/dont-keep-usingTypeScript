import { useState, useContext, useEffect } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import NoteCardTemplate from "../../common/templates/NoteCardTemplate";
import EmptyNotesTemplate from "../../common/templates/EmptyNotesTemplate";
import { NoteType } from "../../common/types/types";

const NotesGrid = () => {
  const { notes, setNotes, pinnedNotes } = useContext(NotesDataContext);
  // need duplicate notes so we can get the manipulated notes out of handleSort
  // and access them through function scope inside useEffect hook
  const [duplicateNotes, setDuplicateNotes] = useState<NoteType[]>([...notes]);
  const [dragItemIndex, setDragItemIndex] = useState<number>(0);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number>(0);
  // const dragItemIndexRef = useRef(null);
  // const dragOverItemIndexRef = useRef(null);

  // useEffect stops the setNotes from rendering infinitely
  useEffect(() => {
    setNotes(duplicateNotes);
  }, [duplicateNotes]);

  const handleSort = () => {
    if (dragItemIndex !== null) {
      console.log(
        `Dragged title: ${notes[dragItemIndex].info} at index: ${dragItemIndex}`
      );
      console.log(
        `Dragged over title : ${notes[dragOverItemIndex].info} at index: ${dragOverItemIndex}`
      );

      const _notes = [...notes];
      // console.log("---1 ", _notes);
      const draggedItem = _notes.splice(dragItemIndex, 1)[0];
      // console.log("---2 ", _notes, draggedItem);
      _notes.splice(dragOverItemIndex, 0, draggedItem);
      // console.log("---3 ", _notes);
      setDuplicateNotes(_notes);

      // by using useRef hook instead of useState
      // const handleSort = () => {
      //   if (dragItemIndexRef.current !== null) {
      //     console.log(
      //       `Drag START item: ${
      //         notes[Number(dragItemIndexRef.current)].info
      //       } @ index: ${Number(dragItemIndexRef.current)}`
      //     );
      //     console.log(
      //       `Drag over item: ${
      //         notes[Number(dragOverItemIndexRef.current)].info
      //       } @ index: ${Number(dragOverItemIndexRef.current)}`
      //     );
      // const _notes = [...notes];
      // console.log("---1 ", _notes);
      // const draggedItem = _notes.splice(dragItemIndexRef.current, 1)[0];
      // console.log("---2 ", _notes, draggedItem);
      // _notes.splice(dragOverItemIndexRef.current, 0, draggedItem);
      // console.log("---3 ", _notes);
      // setDuplicateNotes(_notes);
    }
  };

  return (
    <Grid2
      container
      gap={1.5}
    >
      {notes.length > 0 ? (
        notes.map((notesItem, index) => (
          <Grid2
            // item
            draggable
            key={index}
            maxWidth="240px"
            // sx={{ cursor: "move" }}
            onDragStart={() => {
              setDragItemIndex(index);
              // dragItemIndexRef.current = index;
            }}
            onDragEnter={() => {
              // stop the unnecessary update of dragOverItemIndex
              if (index !== dragOverItemIndex) {
                console.log(index, dragOverItemIndex);
                setDragOverItemIndex(index);
                // dragOverItemIndexRef.current = index;
              }
            }}
            onDragEnd={handleSort}
            // remove the lag after drag ends
            onDragOver={(e) => e.preventDefault()}
          >
            <NoteCardTemplate
              notesItem={notesItem}
              displayIn="notes"
            />
          </Grid2>
        ))
      ) : pinnedNotes.length > 0 ? (
        ""
      ) : (
        <EmptyNotesTemplate displayIn="notes" />
      )}
    </Grid2>
  );
};

export default NotesGrid;
