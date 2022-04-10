import styled from 'styled-components';
import { SyncIcon } from '@/components/icons/SyncIcon';

export const LoadingSpinner = styled(SyncIcon)`
  animation: 2s linear infinite ${({ theme }) => theme.keyframe.rotation};
`;
