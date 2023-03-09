// export type listOptions = `` | `pinned` | `notPinned`;
export type Location = `` | `notes` | `reminders` | `editLabels` | `archive` | `bin`;
export type NoteType = {
  id: string,
  title: string,
  info: string,
  location: Location,
  isNotePinned: boolean,
};

export type Pathname = `/` | `/reminders` | `/edit-labels` | `/archive` | `/bin`;
export type HeadingText = `Don't Keep` | `Reminders` | `Edit labels` | `Archive` | `Bin`;
export type HeadingType = {
  pathname: Pathname,
  headingText: HeadingText,
}