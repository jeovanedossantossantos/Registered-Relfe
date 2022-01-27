import React, { useContext, useEffect } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { QuemChamouContext } from "../../hooks/global";
import { Container } from "./styles";
const EditForm: React.FC = () => {
    const {quemChamou,setquemChamou} = useContext(QuemChamouContext)
    
    return (
        <Container>
            <Header></Header>
            
            
            <Form></Form>
        </Container>

    )
}

export default EditForm