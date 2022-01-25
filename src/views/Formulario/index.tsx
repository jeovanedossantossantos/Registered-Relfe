import React from 'react'
import Form from '../../components/Form';

import Header from '../../components/Header';
import {Container} from './styles'

const Formulario: React.FC =() => {

    return (
        <div>
            <Header></Header>
            <Container>
            
                <Form></Form>
            </Container>
        </div>
    )

}
export default Formulario;

