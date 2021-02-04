import React from 'react';
import styled from 'styled-components';
import DownArrowIcon from './../assets/chev.svg';
import { Link, animateScroll as scroll } from "react-scroll";

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

const Special = styled.div`
    margin-top: -35px;
    margin-left: 40px;
    color: #42bbb8;
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


const Title = () => {
    return (
        <Wrapper>
            <span>SandBar</span>
            <Special>Resorts</Special>
            <Link
                activeClass="active"
                to="info-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
            >
                <ArrowWrapper><DownArrow /></ArrowWrapper>
            </Link>
        </Wrapper>
    );
}

export default Title;