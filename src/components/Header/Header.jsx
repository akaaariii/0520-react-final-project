import React from 'react';

import { HeaderContainer, Title, ReloadContainer, ReloadText, ReloadButton, Icon } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Angular 9 MatTable CRUD Example</Title>
      <ReloadContainer>
        <ReloadText>Reload data: </ReloadText>
        <ReloadButton>
          <Icon />
        </ReloadButton>
      </ReloadContainer>
    </HeaderContainer>
  )
}

export default Header;
