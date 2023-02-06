import { useState } from 'react';

const useCheckboxToggler = (id: string): [boolean, () => void] => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const checkbox = document.getElementById(id)  as HTMLInputElement;
    if (!checkbox) throw new Error(`Element with id "${id}" not found.`);
    checkbox.checked = !checkbox.checked;
    setIsChecked(checkbox.checked);
  };

  return [isChecked, toggleCheckbox];
};

export default useCheckboxToggler;
