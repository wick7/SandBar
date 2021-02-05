import React from 'react';
import styled from 'styled-components';
import Card from './../Components/Card';
import LargeBungalow from './../assets/large_bungalow.jpeg';
import SmallBungalow from './../assets/small_bungalow.jpg';

const data = [
    {
        type: 'Small Bungalow',
        photo: SmallBungalow,
        description: 'Vivamus tempor facilisis ipsum ac faucibus. Phasellus placerat lectus vitae erat ultricies, eu viverra felis sollicitudin. Aenean eget dapibus odio, id pellentesque lorem. Nulla dignissim faucibus sem, vitae vestibulum mi sollicitudin eget.',
        amenities: ['1 - 4', 'Breakfast', 'Shared', 'Shows'],
    },
    {
        type: 'Large Bungalow',
        photo: LargeBungalow,
        description: 'Vivamus tempor facilisis ipsum ac faucibus. Phasellus placerat lectus vitae erat ultricies, eu viverra felis sollicitudin. Aenean eget dapibus odio, id pellentesque lorem. Nulla dignissim faucibus sem, vitae vestibulum mi sollicitudin eget.',
        amenities: ['4 - 10', 'Full Service', 'Private', 'Shows'],
    }
]


const InfoBody = styled.div`
  height: 100vh;

  @media screen and (max-width: 800px) {
        height: auto;
    }   
`
const CardWrapper = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    } 
`

const GutterWrapper = styled.div`
    height: auto;
    width: auto;
    padding: 0 40px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        height: 50px;
    } 
`

const Info = () => {
    return (
        <InfoBody id="info-section">
            <CardWrapper id="info-wrapper">
                <Card data={data[0]} />
                <GutterWrapper>
                </GutterWrapper>
                <Card data={data[1]} />
            </CardWrapper>
        </InfoBody>
    )
}


export default Info;