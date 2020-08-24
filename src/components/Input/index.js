import React from 'react';
import { Container } from './styles';
import { FiMail } from 'react-icons/fi';
import { GiPadlock } from 'react-icons/gi';

function Input({ type, name, id, placeholder }) {
    return (
        <Container>
            {type === 'email'
                ? <span><FiMail color={'#333'} /></span>
                : <span><GiPadlock color={'#333'} /></span>
            }

            <input type={type} id={id} name={name} placeholder={placeholder} />
        </Container>
    )
}

export default Input;
