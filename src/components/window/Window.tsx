import React, { useRef } from 'react';
import '../../styles/window.css';
import closeIcon from '../../assets/close-icon.svg';
import { CSSProperties, FC, ReactNode, useEffect } from 'react';
import useDragger from '../../hooks/useDragger';
import useResizeFixer from '../../hooks/useResizeFixer';

export interface WindowProps {
  windowId: string;
  children: React.ReactNode;
}

const windowDraggableStyle: CSSProperties = {
  cursor: 'move',
  width: '100%',
};

const windowStyle: CSSProperties = {
  position: 'absolute',
  maxWidth: '90vw',
};

export const Window: FC<WindowProps> = ({ windowId, children }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  useDragger(windowId);
  useResizeFixer(windowId);
  return (
    <div id={windowId} className="window relative" style={windowStyle}>
      <div
        id={windowId + '-handle'}
        style={windowDraggableStyle}
        className="window-top flex justify-end bg-accent-focus h-12 rounded-t-xl items-center"
      >
        <div className="flex-1" />
        <button className="flex-0 mx-4 btn btn-xxs btn-ghost btn-circle">
          <img src={closeIcon} alt="close window" />
        </button>
      </div>
      {children}
    </div>
  );
};
