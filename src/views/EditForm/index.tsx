import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { QuemChamouContext } from "../../hooks/global";
import { Container } from "./styles";
const EditForm: React.FC = () => {
    const {quemChamou,setquemChamou,quemNome} = useContext(QuemChamouContext)
    const  push  = useNavigate();
    // useEffect(()=>{
        
    //     setquemChamou("ED")
    // },[])
    // setquemChamou("ED")
    useEffect(()=>{
        // setquemChamou("ED")
        if(quemNome == ''){
            setquemChamou("ED")
            // console.log("Aqui => " +quemChamou)
            push("/lista")
        }
       
        if((quemNome == '') ){
            push("/lista")
        }
    },[])
    return (
        <Container>
            <Header></Header>
            
            
            <Form></Form>
        </Container>

    )
}

export default EditForm