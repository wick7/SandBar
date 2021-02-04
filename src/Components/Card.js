import React from 'react';
import styled from 'styled-components';
import LargeBungalow from './../assets/large_bungalow.jpeg';

const Wrapper = styled.div`
    height: auto;
    width: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quick Sand' 'sans-serif';
`
const Header = styled.div`
    padding: 5px 10px;  
`

const Photo = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${LargeBungalow});
    width: 100%;
    height: 320px;
`

const Description = styled.div`
    padding: 5px 10px;
`

const Button = styled.button`
    margin: 15px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #42bbb8;
`

const Card = () => {
    return (
        <Wrapper>
            <Header>
                Large Bungalow
            </Header>
            <Photo />
            <Description>
                Vivamus tempor facilisis ipsum ac faucibus. Phasellus placerat lectus vitae erat ultricies, eu viverra felis sollicitudin. Aenean eget dapibus odio, id pellentesque lorem. Nulla dignissim faucibus sem, vitae vestibulum mi sollicitudin eget.
            </Description>
            <Button>Learn More</Button>
        </Wrapper>
    )
}

export default Card;