import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';


const Header = () => {
  return (
    <HeaderContainer>
      <Title>Angular 9 MatTable CRUD Example</Title>
      <ReloadContainer>
        <ReloadText>Reload data:</ReloadText>
        <IconButton color="inherit">
          <Icon />
        </IconButton>
      </ReloadContainer>
    </HeaderContainer>
  )
}

export default Header;


const HeaderContainer = styled.header`
  background-color: #3f51b5;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  color: white;
  font-size: 20px;
`;
const ReloadContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ReloadText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const Icon = styled(ReplayIcon)`
  color: white;
`;