import React, { useState, useEffect, useContext } from 'react';
import { Container, Content } from './styles';
import { ToastUser } from '../../ToastContext';


function Toast() {

    const [visible, setVisible] = useState(false);
    const { message } = useContext(ToastUser);

    useEffect(() => {

        setVisible(true);

        const intervalId = setTimeout(() => {

            setVisible(false);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        }


    }, [message])

    return (
        <>
            {visible && message &&
                <Container>
                    <Content>
                        {message.message}
                    </Content>
                </Container>
            }
        </>
    )
}

export default Toast;
