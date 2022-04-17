import { useState } from 'react';
import { Backdrop } from './Backdrop';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { createStoryMeta } from 'src/utils/storybookUtils';

export default createStoryMeta(Backdrop, {
  title: 'utils/Backdrop',
});

export const WithLoading = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
      {open && (
        <Backdrop
          onClick={() => {
            setOpen(false);
          }}
        >
          <LoadingSpinner size="extraLarge" />
        </Backdrop>
      )}
    </>
  );
};
