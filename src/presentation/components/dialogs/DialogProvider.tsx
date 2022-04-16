import React, { useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { createContext, useMemo, useReducer } from 'react';
import { AlertDialog } from './AlertDialog/AlertDialog';
import { ConfirmDialog } from './ConfirmDialog/ConfirmDialog';
import {
  AlertDialogAction,
  ConfirmDialogAction,
  PopupDialogAction,
  SelectDialogAction,
} from './DialogAction';
import { PopupDialog } from './PopupDialog/PopupDialog';
import { SelectDialog } from './SelectDialog/SelectDialog';
import { Backdrop } from '../utils/Backdrop/Backdrop';

type DialogParameter = {
  title: string;
  message: React.ReactNode;
};
type WithDialogParameter<T> = T & DialogParameter & { onClose: () => void };

type Dialog =
  | WithDialogParameter<PopupDialogAction>
  | WithDialogParameter<AlertDialogAction>
  | WithDialogParameter<ConfirmDialogAction>
  | WithDialogParameter<SelectDialogAction>
  | {
      type: 'custom';
      dialog: JSX.Element;
      onClose: () => void;
    };

type DialogState = (Dialog & {
  id: string;
})[];

type DialogAction =
  | {
      type: 'add';
      payload: DialogState[number];
    }
  | {
      type: 'remove';
      payload: { id: string };
    }
  | {
      type: 'initialize';
    };

const dialogReducer = (state: DialogState, action: DialogAction): DialogState => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(({ id }) => id !== action.payload.id);
    case 'initialize':
      return [];
    default:
      return state;
  }
};

type IDialogContext = {
  showPopup: (v: DialogParameter) => Promise<'close'>;
  showAlert: (v: DialogParameter) => Promise<'close' | 'ok'>;
  showConfirm: (v: DialogParameter) => Promise<'close' | 'ok' | 'cancel'>;
  showSelect: (
    v: DialogParameter,
    showCancel?: boolean,
  ) => Promise<'close' | 'yes' | 'no' | 'cancel'>;
  showCustom: <T extends string>(
    render: (resolver: (v: T | 'close') => void) => JSX.Element,
  ) => Promise<T | 'close'>;
  hide: (id: string) => void;
  initialize: () => void;
};

const noop = () => {
  // do nothing;
};

const DialogContext = createContext<IDialogContext>({
  showPopup: () => Promise.resolve('close'),
  showAlert: () => Promise.resolve('close'),
  showConfirm: () => Promise.resolve('close'),
  showSelect: () => Promise.resolve('close'),
  showCustom: <T,>() => Promise.resolve('close' as unknown as T),
  hide: noop,
  initialize: noop,
});

export function useDialog() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hide, initialize, ...rest } = useContext(DialogContext);
  return rest;
}

export function useHideDialogOnTransition() {
  const { initialize } = useContext(DialogContext);
  useEffect(() => {
    return () => {
      initialize();
    };
  }, []);
}

export function DialogProvider({ children = null }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(dialogReducer, []);

  const contextValue = useMemo(() => {
    const hide: IDialogContext['hide'] = (id: string) => {
      dispatch({ type: 'remove', payload: { id } });
    };
    const initialize: IDialogContext['initialize'] = () => {
      dispatch({ type: 'initialize' });
    };
    const showPopup: IDialogContext['showPopup'] = (params) =>
      new Promise((res) => {
        const id = nanoid();
        dispatch({
          type: 'add',
          payload: {
            ...params,
            type: 'popup',
            id,
            onClose: () => {
              hide(id);
              res('close');
            },
          },
        });
      });

    const showAlert: IDialogContext['showAlert'] = (params) =>
      new Promise((res) => {
        const id = nanoid();
        dispatch({
          type: 'add',
          payload: {
            ...params,
            type: 'alert',
            id,
            onClose: () => {
              hide(id);
              res('close');
            },
            onClickOK: () => {
              hide(id);
              res('ok');
            },
          },
        });
      });

    const showConfirm: IDialogContext['showConfirm'] = (params) =>
      new Promise((res) => {
        const id = nanoid();
        dispatch({
          type: 'add',
          payload: {
            ...params,
            type: 'confirm',
            id,
            onClose: () => {
              hide(id);
              res('close');
            },
            onClickCancel: () => {
              hide(id);
              res('cancel');
            },
            onClickOK: () => {
              hide(id);
              res('ok');
            },
          },
        });
      });

    const showSelect: IDialogContext['showSelect'] = (params, showCancel) =>
      new Promise((res) => {
        const id = nanoid();
        dispatch({
          type: 'add',
          payload: {
            ...params,
            type: 'select',
            id,
            onClose: () => {
              hide(id);
              res('close');
            },
            onClickYes: () => {
              hide(id);
              res('yes');
            },
            onClickNo: () => {
              hide(id);
              res('no');
            },
            onClickCancel: !showCancel
              ? undefined
              : () => {
                  hide(id);
                  res('cancel');
                },
          },
        });
      });

    const showCustom = <T extends string>(
      render: (resolver: (v: T | 'close') => void) => JSX.Element,
    ) =>
      new Promise<T | 'close'>((res) => {
        const id = nanoid();
        dispatch({
          type: 'add',
          payload: {
            type: 'custom',
            id,
            dialog: render((v) => {
              hide(id);
              res(v);
            }),
            onClose: () => {
              hide(id);
              res('close');
            },
          },
        });
      });

    return { showPopup, showAlert, showConfirm, showSelect, showCustom, hide, initialize };
  }, []);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogContainer state={state} />
    </DialogContext.Provider>
  );
}

function DialogContainer({ state }: { state: DialogState }) {
  if (state.length < 1) {
    return null;
  }
  return (
    <>
      {state.map(({ id, ...props }, index) => {
        const head = index === 0;
        switch (props.type) {
          case 'popup':
            return (
              <Backdrop key={id} transparent={!head} onClick={props.onClose}>
                <PopupDialog
                  id={`popup-dialog-${id}`}
                  title={props.title}
                  message={props.message}
                  onClose={props.onClose}
                />
              </Backdrop>
            );
          case 'alert':
            return (
              <Backdrop key={id} transparent={!head} onClick={props.onClose}>
                <AlertDialog
                  id={`alert-dialog-${id}`}
                  title={props.title}
                  message={props.message}
                  onClose={props.onClose}
                  onClickOK={props.onClickOK}
                />
              </Backdrop>
            );
          case 'confirm':
            return (
              <Backdrop key={id} transparent={!head} onClick={props.onClose}>
                <ConfirmDialog
                  id={`confirm-dialog-${id}`}
                  title={props.title}
                  message={props.message}
                  onClose={props.onClose}
                  onClickOK={props.onClickOK}
                  onClickCancel={props.onClickCancel}
                />
              </Backdrop>
            );
          case 'select':
            return (
              <Backdrop key={id} transparent={!head} onClick={props.onClose}>
                <SelectDialog
                  id={`select-${id}`}
                  title={props.title}
                  message={props.message}
                  onClose={props.onClose}
                  onClickNo={props.onClickNo}
                  onClickYes={props.onClickYes}
                  onClickCancel={props.onClickCancel}
                />
              </Backdrop>
            );
          case 'custom':
            return (
              <Backdrop key={id} transparent={!head} onClick={props.onClose}>
                {props.dialog}
              </Backdrop>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
