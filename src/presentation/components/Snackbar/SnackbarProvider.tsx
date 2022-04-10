import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Snackbar, SnackbarSeverity } from './Snackbar';

const SNACKBAR_STATUS = {
  initial: 'initial',
  fadeIn: 'fadeIn',
  remaining: 'remaining',
  fadeOut: 'fadeOut',
} as const;
export type SnackbarStatus = keyof typeof SNACKBAR_STATUS;

type SnackbarParameter = {
  id: string;
  content: React.ReactNode;
};

type SnackbarOptions = {
  severity?: SnackbarSeverity;
  duration?: number;
  onFadeOut?: (id: string) => void;
};

type SnackbarState = (SnackbarParameter & Required<SnackbarOptions>)[];

type SnackbarAction =
  | {
      type: 'enqueue';
      payload: SnackbarState[number];
    }
  | {
      type: 'dequeue';
      payload: { id: string };
    };

const snackbarReducer = (state: SnackbarState, action: SnackbarAction): SnackbarState => {
  switch (action.type) {
    case 'enqueue':
      return [...state, action.payload];
    case 'dequeue':
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

type ISnackbarContext = {
  enqueue: (content: React.ReactNode, options?: SnackbarOptions) => void;
  dequeue: (id: string) => void;
};

const noop = () => {
  // do nothing;
};

const SnackbarContext = createContext<ISnackbarContext>({
  enqueue: noop,
  dequeue: noop,
});

export function SnackbarProvider({ children = null }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(snackbarReducer, []);
  const snackbarParameter = useMemo(() => state[0] as SnackbarState[number] | undefined, [state]);

  const contextValue = useMemo(() => {
    const enqueue: ISnackbarContext['enqueue'] = (content, options) => {
      dispatch({
        type: 'enqueue',
        payload: {
          id: `${new Date().toISOString()}`,
          content,
          severity: options?.severity ?? 'info',
          duration: options?.duration ?? 3000,
          onFadeOut: options?.onFadeOut ?? noop,
        },
      });
    };

    const dequeue: ISnackbarContext['dequeue'] = (id: string) => {
      dispatch({ type: 'dequeue', payload: { id } });
    };

    return { enqueue, dequeue };
  }, []);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      {snackbarParameter && (
        <SnackbarContainer {...snackbarParameter} dequeue={contextValue.dequeue} />
      )}
    </SnackbarContext.Provider>
  );
}

export function useSnackBar() {
  const { enqueue } = useContext(SnackbarContext);
  return { showSnackbar: enqueue } as const;
}

type SnackbarAnimationProps = {
  className?: string;
  status: SnackbarStatus;
  severity: SnackbarSeverity;
  children: React.ReactNode;
  onAnimationEnd: () => void;
};

function UnstyledSnackbarWithAnimation({
  className,
  severity,
  children,
  onAnimationEnd,
  ...props
}: SnackbarAnimationProps) {
  return (
    <div className={className} {...props} onAnimationEnd={onAnimationEnd}>
      <Snackbar severity={severity}>{children}</Snackbar>
    </div>
  );
}

const bottomPosition = 30;

const fadeIn = keyframes`
  from { 
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1; 
    bottom: ${bottomPosition}px;
  }
`;

const fadeOut = keyframes`
  from { 
    opacity: 1;
    bottom: ${bottomPosition}px;
  }
  to {
    opacity: 0;
    bottom: 0; 
  }
`;

/**
 * @see https://www.w3schools.com/howto/howto_js_snackbar.asp
 */
const SnackbarWithAnimation = styled(UnstyledSnackbarWithAnimation)`
  visibility: hidden; /* Hidden by default. Visible on click */
  position: fixed; /* Sit on top of the screen */
  left: 50%; /* Center the snackbar */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  display: inline-block;

  bottom: ${bottomPosition}px;
  ${({ theme }) => theme.safeArea.bottom('margin-bottom', '0px', '+')}

  ${({ status }) =>
    status === SNACKBAR_STATUS.fadeIn || status === SNACKBAR_STATUS.remaining
      ? css`
          animation: ${fadeIn} 0.5s linear;
          visibility: visible; /* Show the snackbar */
          z-index: ${({ theme }) => theme.zIndex.snackbar}; /* Add a z-index if needed */
        `
      : status === SNACKBAR_STATUS.fadeOut
      ? css`
          animation: ${fadeOut} 0.5s linear;
          visibility: visible; /* Show the snackbar */
          z-index: ${({ theme }) => theme.zIndex.snackbar}; /* Add a z-index if needed */
        `
      : css``}
`;

const SnackbarContainer = React.memo(function SnackbarContainer({
  id,
  severity,
  duration,
  content,
  onFadeOut,
  dequeue,
}: SnackbarState[number] & {
  dequeue: (id: string) => void;
}) {
  const [status, setStatus] = useState<SnackbarStatus>(SNACKBAR_STATUS.initial);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setStatus(SNACKBAR_STATUS.fadeIn);
  }, [id]);

  useEffect(() => {
    if (status !== SNACKBAR_STATUS.fadeIn) return;
    setStatus(SNACKBAR_STATUS.remaining);
    timerRef.current = setTimeout(() => {
      setStatus(SNACKBAR_STATUS.fadeOut);
      timerRef.current = null;
    }, duration);
  }, [duration, status]);

  const onAnimationEnd = React.useCallback(() => {
    if (status !== SNACKBAR_STATUS.fadeOut) return;
    if (onFadeOut) {
      onFadeOut(id);
    }
    dequeue(id);
  }, [id, status, dequeue, onFadeOut]);

  return (
    <SnackbarWithAnimation status={status} severity={severity} onAnimationEnd={onAnimationEnd}>
      {content}
    </SnackbarWithAnimation>
  );
});
