import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api";
import { Container } from "./style";

interface IDate {

    nomeBeneficiario: string;
    periodoEscola: string;
    escola: string;
    dataNascimento: string;
    telFoneRec: string;
    periodoRelfe: string;
    cpf: string;
    rg: string;
    sexo: string;
    nis: string;
    endereco: string;
    ano: string;
    bairro: string;
    pontoReferencia: string;
    telefone1: string;
    telefone2: string;
    serie: string;
    dataDesligamento?: string;
    obs?: string;
    nomePai: string;
    nomeMae: string;
    nomeResponsavel?: string;
    parentesco?: string;
    id:number;



}
const ListMat: React.FC = () => {
    const [dados, setDados] = useState<IDate[]>([])
    const { quemChamou, setquemChamou, setquemNome,setqualId } = useContext(QuemChamouContext)
    useEffect(() => {
        api.get('/')
            .then(response => {

                setDados(response.data)
            });
    }, [])
    const passando = (id: number, nome: string)=>{
       setqualId(id)
       setquemNome(nome)
    }

    return (

        <Container>
           
            <Header></Header>

           

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de nsc</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>

                {
                    dados?.map(e => (
                        
                        <tbody key={e.id}>
                            <tr style={{fontSize:20}}>
                                <th scope="row">{e.id}</th>
                                <td>{e.nomeBeneficiario}</td>
                                <td>{e.dataNascimento}</td>
                                <td><Link className="btn btn-secondary" to={"/editform"} onClick={() =>passando(e.id, e.nomeBeneficiario)}>Editar</Link></td>
                            </tr>

                        </tbody>

                    ))
                }
            </table>




        </Container>
    )
}

export default ListMat;


