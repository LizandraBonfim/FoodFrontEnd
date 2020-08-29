import React from 'react';
import { Container } from './styles';
import { FiMail } from 'react-icons/fi';
import { GiPadlock } from 'react-icons/gi';

import Error from '../erros/index';

function Input({ type, name, value, placeholder, error, onChange, onBlur }) {

    return (
        <Container>
            {type === 'email'
                && <span><FiMail color={'#333'} /></span>
            }
            {type === 'password' &&
                < span > <GiPadlock color={'#333'} /></span>
            }

            <input type={type}
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                placeholder={placeholder} />

            <Error error={error} />
        </Container >
    )
}

export default Input;
