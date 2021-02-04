import React from 'react';
import styled from 'styled-components';
import Card from './../Components/Card';

const InfoBody = styled.div`
  height: 100vh;
`
const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const GutterWrapper = styled.div`
    height: auto;
    width: auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
`

const GutterIcon = styled.div`
    width: 25px;
    height: 25px;
    background-color: yellow;
`

const Info = () => {
    return (
        <InfoBody id="info-section">
            <CardWrapper>
                <Card />
                <GutterWrapper>
                    <GutterIcon />
                </GutterWrapper>
                <Card />
            </CardWrapper>
        </InfoBody>
    )
}


export default Info;