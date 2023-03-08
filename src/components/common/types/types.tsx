export type listOptions = `` | `notes` | `pinned` | `unpinned` | `editLabels`  | `archive` | `bin`;
export type destinationOptions = `` | `notes` | `reminders` | `editLabels` | `archive` | `bin`;
export type NoteType = {
  id: string,
  title: string,
  info: string,
  currList: listOptions,
  currDest: destinationOptions,
  isNotePinned: boolean,
};

export type Pathname = `/` | `/reminders` | `/edit-labels` | `/archive` | `/bin`;
export type HeadingText = `Don't Keep` | `Reminders` | `Edit labels` | `Archive` | `Bin`;
export type HeadingType = {
  pathname: Pathname,
  headingText: HeadingText,
}