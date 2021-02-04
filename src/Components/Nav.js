import React from 'react';
import styled from 'styled-components';
import Island from './../assets/island.svg';
import Hamburger from './../assets/hamburger.svg';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Icon = styled.div`
    height: 50px;
    width: 50px;
    background: url(${Island});
    background-repeat: no-repeat;
    color: white;
`

const Menu = styled.div`
    height: 50px;
    width: 50px;
    background: url(${Hamburger});
    background-repeat: no-repeat;
`

const Nav = () => {
    return (
        <Wrapper>
            <div><Icon /></div>
            <div><Menu /></div>
        </Wrapper>
    )
}


export default Nav;