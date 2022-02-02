import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardImg, CardImgOverlay, CardTitle, Container } from "reactstrap";

import Header from "../../components/Header";


const Home: React.FC = () => {
    const push = useNavigate();
    return (
        <Container style={{ width: "100%", marginLeft: -20 }}>
            <Card style={{ width: "100%", backgroundColor: "#d30000" }}>
                <CardImg
                    style={{ height: "100vh", width: "99.2vw", }}
                    src={require("../../img/Banco de Cadastro.png")}
                />
                <CardImgOverlay>
                    <div style={{ float: 'right', marginTop: 200, marginRight: 30, padding: 20, }}>
                        <Button style={{ margin: 50, fontSize: 25, borderRadius: 15, background: "#ff8c33", width: 300, height: 80, textAlign: "center", display: "block" }} onClick={() => push("/formulario")}>
                            Cadastra
                        </Button>
                        <Button style={{
                            margin: 50, borderRadius: 15, fontSize: 25,
                            background: "#ff3c4e",
                            width: 300, height: 80, textAlign: "center", display: "block"
                        }} onClick={() => push("/lista")}>
                            Lista de Matriculados
                        </Button>
                    </div>
                </CardImgOverlay>
            </Card>

        </Container>
    )
}

export default Home;