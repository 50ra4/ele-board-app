import React from 'react';
import { createStoryMeta } from 'src/utils/storybookUtils';
import { TextButton } from '../inputs/TextButton/TextButton';
import { CustomDialog } from './CustomDialog/CustomDialog';
import { DialogProvider, useDialog } from './DialogProvider';

export default createStoryMeta(DialogProvider, {
  title: 'dialogs/DialogProvider',
});

const PlayButtons = ({ children = null }: { children?: React.ReactNode }) => {
  const dialog = useDialog();

  return (
    <div>
      <TextButton
        color="primary"
        text="Popup"
        onClick={async () => {
          const res = await dialog.showPopup({
            title: '表示',
            message: (
              <div>
                Popup
                {children}
              </div>
            ),
          });
          console.log(res);
        }}
      />
      <TextButton
        color="primary"
        text="Alert"
        onClick={async () => {
          const res = await dialog.showAlert({
            title: '警告',
            message: (
              <div>
                Alert
                {children}
              </div>
            ),
          });
          console.log(res);
        }}
      />
      <TextButton
        color="primary"
        text="Confirm"
        onClick={async () => {
          const res = await dialog.showConfirm({
            title: '確認',
            message: (
              <div>
                Confirm
                {children}
              </div>
            ),
          });
          console.log(res);
        }}
      />
      <TextButton
        color="primary"
        text="Select"
        onClick={async () => {
          const res = await dialog.showSelect({
            title: '表示',
            message: (
              <div>
                Select
                {children}
              </div>
            ),
          });
          console.log(res);
        }}
      />
      <TextButton
        color="primary"
        text="Custom"
        onClick={async () => {
          const res = await dialog.showCustom((resolver: (v: 'foo' | 'bar' | 'close') => void) => (
            <CustomDialog
              id="own"
              title="カスタムしたDialog"
              onClose={() => {
                resolver('close');
              }}
            >
              Custom
              <TextButton
                color="primary"
                text="foo"
                onClick={() => {
                  resolver('foo');
                }}
              />
              <TextButton
                color="primary"
                text="bar"
                onClick={() => {
                  resolver('bar');
                }}
              />
            </CustomDialog>
          ));
          console.log(res);
        }}
      />
    </div>
  );
};

export const Play = () => {
  return (
    <DialogProvider>
      <PlayButtons>
        <PlayButtons>
          <PlayButtons />
        </PlayButtons>
      </PlayButtons>
    </DialogProvider>
  );
};
