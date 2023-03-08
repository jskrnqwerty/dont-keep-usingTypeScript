import { useState } from "react";
import { Typography, Card, CardContent, CardActions } from "@mui/material";
import OpenNoteWindow from "../open-note-window/OpenNoteWindow";
import PinNoteButton from "../note-actions/PinNoteButton";
import BottomNoteActions from "../note-actions/BottomNoteActions";
import { NoteType, destinationOptions } from "../types/types";

type NoteCardTemplateProps = {
  notesItem: NoteType,
  displayIn: destinationOptions,
};

// props.displayIn prop takes in notes, reminders, edit-labels, archive, bin
const NoteCardTemplate = ({ notesItem, displayIn }: NoteCardTemplateProps) => {
  const [isNoteHover, setIsNoteHover] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  return (
    <>
      {console.log("NoteCardTemplate returned")}
      <Card
        // CardActions visible on hover
        onMouseEnter={() => setIsNoteHover(true)}
        onMouseLeave={() => setIsNoteHover(false)}
        onClick={() => console.log("Card clicked")}
        sx={{
          maxHeight: "100%",
          minWidth: "240px",
          outline: "1px solid #E5E5E5",
          borderRadius: "5px",
          "&: hover": {
            boxShadow: "1px 1px 5px 2px lightgrey",
          },
        }}
      >
        {(displayIn === "notes" ||
          displayIn === "archive") && (
          <CardActions
            sx={{
              display: "inline-block",
              float: "right",
              color: "grey",
              mt: "5px",
              ml: "5px",
              p: 0,
              px: "3px",
              visibility: (isNoteHover && "visible") || "hidden",
            }}
          >
            <PinNoteButton notesItem={notesItem} />
          </CardActions>
        )}

        <CardContent
          onClick={() => {
            console.log("CardContent clicked");
            setIsNoteOpen(true);
          }}
        >
          {notesItem.title && (
            <Typography
              // variant="h6"
              gutterBottom
              id="note-title"
              sx={{
                px: 1,
                color: "black",
                fontSize: "1rem",
                fontWeight: 500,
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.title}
            </Typography>
          )}
          {notesItem.info && (
            <Typography
              id="note-info"
              gutterBottom
              sx={{
                px: 1,
                color: "black",
                fontSize: "0.9rem",
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.info}
            </Typography>
          )}
        </CardContent>
        <OpenNoteWindow
          notesItem={notesItem}
          isNoteOpen={isNoteOpen}
          setIsNoteOpen={setIsNoteOpen}
          displayIn={displayIn}
        />
        <BottomNoteActions
          notesItem={notesItem}
          displayIn={displayIn}
          isNoteHover={isNoteHover}
          isNoteOpen={isNoteOpen}
        />
        {/* </CardActions> */}
      </Card>
    </>
  );
};

export default NoteCardTemplate;
