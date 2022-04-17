import { useState } from 'react';
import { createStoryMeta } from 'src/utils/storybookUtils';
import { LoadingGuard } from './LoadingGuard';

export default createStoryMeta(LoadingGuard, {
  title: 'utils/LoadingGuard',
});

export const Loading = () => {
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
        <LoadingGuard
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};
