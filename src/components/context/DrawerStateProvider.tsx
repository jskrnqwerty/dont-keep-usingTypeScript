// context to make the open and close button available globally.

import { createContext, useState } from "react";

export const DrawerStateContext = createContext({} as DrawerStateContextType);

type DrawerStateProviderPropsType = {
  children: React.ReactNode
}
type DrawerStateContextType = {
  open: boolean, 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>, 
  openHover: boolean, 
  setOpenHover: React.Dispatch<React.SetStateAction<boolean>>, 
  handleDrawerToggle: () => void,
}

const DrawerStateProvider = ({ children }: DrawerStateProviderPropsType) => {
  // pass state as true to keep drawer open at app start.
  const [open, setOpen] = useState(false);
  const [openHover, setOpenHover] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <DrawerStateContext.Provider
      value={{ open, setOpen, openHover, setOpenHover, handleDrawerToggle }}
    >
      {children}
    </DrawerStateContext.Provider>
  );
};

export default DrawerStateProvider;
