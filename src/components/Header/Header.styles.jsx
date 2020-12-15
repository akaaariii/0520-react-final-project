import styled from 'styled-components';
import ReplayIcon from '@material-ui/icons/Replay';

export const HeaderContainer = styled.header`
  background-color: #3f51b5;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h1`
  color: white;
  font-size: 20px;
`;
export const ReloadContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ReloadText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
export const ReloadButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const Icon = styled(ReplayIcon)`
  color: white;
`;