import { useState, useEffect } from 'react';

const useResizeFixer = (id: string) => {
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    // Get the target element using the passed id
    const target = document.getElementById(id)
    if (!target) throw new Error("Element with given id doesn't exist")
    
    const onResizeStart = () => {
      setResizing(true);
      target.style.width = 'auto';
    };
  
    const onResizeEnd = () => {
      setResizing(false);
      target.style.width = `${target.offsetWidth}px`;
    };
  
    window.addEventListener('resize', onResizeStart);
    window.addEventListener('resizeend', onResizeEnd);
  
    return () => {
      
      window.removeEventListener('resize', onResizeStart);
      window.removeEventListener('resizeend', onResizeEnd);
    };
  }, [id]);
  

  return resizing;
};

export default useResizeFixer;
