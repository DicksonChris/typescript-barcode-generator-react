import { NEW_PROJECT_WINDOW_ID } from "../../constants";

export const addModalOpenClass = (isOpen: boolean) => {
  const newProjectToggler = document.getElementById(`${NEW_PROJECT_WINDOW_ID}-modal`) as HTMLInputElement;

  if (!newProjectToggler) {
    throw new Error("New project toggler not found");
  }

  if (isOpen) {
    newProjectToggler.classList.add("modal-open");
  } else {
    newProjectToggler.classList.remove("modal-open");
  }
};
