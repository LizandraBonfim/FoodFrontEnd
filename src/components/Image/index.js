import React from 'react';
import { Container, Skeleton } from './styles';

function Image({ alt, ...props }) {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({ target }) {
        setSkeleton(false);
        target.style.opacity = 1;
    }


    return (
        <Container>
            {skeleton && <Skeleton />}
            <img onLoad={handleLoad} alt={alt} {...props} />
        </Container >
    )
}

export default Image;
