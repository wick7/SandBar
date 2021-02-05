import React from 'react';
import styled from 'styled-components';
import DownArrowIcon from './../assets/chev.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import Sun from './../assets/sun.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Seaweed Script', sans-serif;
  font-size: 84px;
  font-weight: 300;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MainTitle = styled.div`
    margin-bottom: -35px;
`

const Special = styled.div`
    background: rgb(5,244,91);
    background: -webkit-linear-gradient(90deg, rgba(5,244,91,1) 8%, rgba(7,242,182,0.9514180672268907) 48%, rgba(48,219,215,1) 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const DownArrow = styled.div`
    animation: bounce .6s infinite alternate;
    height: 50px;
    width: 50px;
    background: url(${DownArrowIcon});
    background-repeat: no-repeat;
    
    @keyframes bounce {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-15px);
    }
}
`

const ArrowWrapper = styled.div`
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Sunny = styled.div`
    width: 100px;
    height: 100px;
    background: url(${Sun});
    background-size: cover;
`

const IconWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`


const Title = () => {
    return (
        <Wrapper>
            <MainTitle>SandBar</MainTitle>
            <IconWrapper><Sunny /></IconWrapper>
            <Special>Resorts</Special>
            <Link
                activeClass="active"
                to="info-section"
                spy={true}
                smooth={true}
                offset={-30}
                duration={700}
            >
                <ArrowWrapper><DownArrow /></ArrowWrapper>
            </Link>
        </Wrapper>
    );
}

export default Title;