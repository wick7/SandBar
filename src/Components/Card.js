import React from 'react';
import styled from 'styled-components';
import Service from './../assets/service.svg';
import User from './../assets/user.svg';
import Recreation from './../assets/hot-tub.svg';
import Kayak from './../assets/rec.svg';

const Wrapper = styled.div`
    height: auto;
    width: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quick Sand' 'sans-serif';
    border-radius: 5px;
    color: #787878;
`
const Header = styled.div`
    font-family: 'Seaweed Script', sans-serif;
    font-size: 36px;
    padding: 5px 10px;  
`

const Photo = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.photo})`};
    width: 100%;
    height: 290px;
    @media screen and (max-width: 800px) {
        height: 230px;
    } 
`

const Description = styled.div`
    padding: 15px;
    text-indent: 30px;
`

const Button = styled.button`
    margin: 15px 0;
    padding: 10px;
    border: 1px solid white;
    border-radius: 6px;
    color: white;
    background: linear-gradient(90deg, rgba(5,244,91,1) 8%, rgba(7,242,182,0.9514180672268907) 48%, rgba(48,219,215,1) 95%);

    @media screen and (max-width: 800px) {
        margin: 10px 0;
    } 
`

const IconRow = styled.div`
    width: 70%;
    display: flex;
    padding: 10px;
    flex-direction: row;
    @media screen and (max-width: 800px) {
        width: 100%;
        padding-left: 20%;
    } 
`
const IconColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: right;
`

const Icon = styled.div`
    height: 25px;
    width: 25px;
    margin: 0 15px;
    background: ${props => `url(${props.icon})`};
    background-repeat: no-repeat;

    @media screen and (max-width: 800px) {
        margin: 0 4px;
    } 
`

const IconWrapper = styled.div`
    height: auto;
    width: auto;
    margin: 10px 0;
    display: flex;
    align-items: center;
`



const Card = ({ data }) => {
    return (
        <Wrapper>
            <Header>{data.type}</Header>
            <Photo photo={data.photo} />
            <Description>{data.description}</Description>
            <IconRow>
                <IconColumn>
                    <IconWrapper>
                        <Icon icon={User} />
                        {data.amenities[0]}
                    </IconWrapper>
                    <IconWrapper>
                        <Icon icon={Service} />
                        {data.amenities[1]}
                    </IconWrapper>
                </IconColumn>
                <IconColumn>
                    <IconWrapper>
                        <Icon icon={Recreation} />
                        {data.amenities[2]}
                    </IconWrapper>
                    <IconWrapper>
                        <Icon icon={Kayak} />
                        {data.amenities[3]}
                    </IconWrapper>
                </IconColumn>
            </IconRow>
            <Button>Book Now</Button>
        </Wrapper>
    )
}

export default Card;