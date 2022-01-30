import React, { useEffect, useContext } from 'react'
import Form from '../../components/Form';
// import { useGlobal } from '../../hooks/global';
import Header from '../../components/Header';
import { QuemChamouContext } from '../../hooks/global';
import { Container } from './styles'


const Formulario: React.FC = () => {
    const { quemChamou, setquemChamou } = useContext(QuemChamouContext)

    useEffect(() => {
        setquemChamou("CA")
    })
    return (


        <Container >
            <Header></Header>

            <Form></Form>

        </Container>

    )

}
export default Formulario;

