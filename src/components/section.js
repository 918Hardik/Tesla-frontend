import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';

function section(props) {
    return (
        <Wrap bgimage={props.backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
            </ItemText>
            </Fade>
            <Fade bottom>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.LeftButton}
                    </LeftButton>
                    {
                        props.RightButton && <RightButton>
                            {props.RightButton}
                        </RightButton>
                    }
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:${props => `url('/images/${props.bgimage}')`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;`

const ItemText = styled.div`
padding:15vh;
text-align:center;`

const ButtonGroup = styled.div`
display:flex;
gap:20px;
margin-bottom:45px;
@media(max-width:768px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color:black;
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.7;
text-transform:uppercase;
font-size:15px;
cursor:pointer;
`

const RightButton = styled(LeftButton)`
background-color:white;
color:black;
`

const DownArrow = styled.img`

height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s`

const Buttons = styled.div`
`