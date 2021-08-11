import * as React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    text-align:center;
`

const Title = () => {
    return (
        <StyledTitle>
            <h1>
            Frequently Asked Questions page
        </h1>
        <p>
            Hello!Didn't find what you are looking for?Please contact us. 
        </p>
        </StyledTitle>
    )
}



export default Title