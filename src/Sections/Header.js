import React from 'react';
import styled from 'styled-components';
import Title from './../Components/Title';

const HeaderBody = styled.div`
  height: 100vh;
`

const Header = () => {
    return (
        <HeaderBody>
            <Title />
        </HeaderBody>
    )
}


export default Header;