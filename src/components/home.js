import React from 'react'
import styled from 'styled-components'
import Section from './section'

function home() {
    return (
        <Container>
            <Section title="model s" description="order online for touchless delivery" LeftButton="custom order" RightButton="Existing inventory" backgroundImg="model-s.jpg" />
            <Section title="model 3" description="order online for touchless delivery" LeftButton="custom order" RightButton="Existing inventory" backgroundImg="model-3.jpg" />
            <Section title="model x" description="order online for touchless delivery" LeftButton="custom order" RightButton="Existing inventory" backgroundImg="model-x.jpg" />
            <Section title="model y" description="order online for touchless delivery" LeftButton="custom order" RightButton="Existing inventory" backgroundImg="model-y.jpg" />
            <Section title="Lowest Cost Solar Panels in America" description="Money-Back Guarantee" LeftButton="order now" RightButton="Learn More" backgroundImg="solar-panel.jpg" />
            <Section title="solar roof" description="jnknasd kj dasj dasjn" LeftButton="order now" RightButton="Learn More" backgroundImg="solar-roof.jpg" />
            <Section title="Accessories" description="very comfortable and sleek" LeftButton="order now" backgroundImg="accessories.jpg" />
        </Container>
    )
}

export default home

const Container = styled.div`
height:100vh;
`