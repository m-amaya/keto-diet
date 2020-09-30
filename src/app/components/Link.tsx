import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const DefaultLink = styled(RouterLink)({
  color: '#F06292',
  fontSize: 16,
});

export const MutedLink = styled(RouterLink)({
  color: '#9DAAB6',
  fontSize: 14,
});

export const SubtleLink = styled(RouterLink)({
  color: '#9DAAB6',
  fontSize: 14,
  textDecorationLine: 'none',
  ':hover': {
    textDecorationLine: 'underline',
  },
});
