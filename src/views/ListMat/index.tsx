import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api";

interface IDate {

    nomeBeneficiario: string;
    periodoEscola: string;
    escola: string;
    dataNascimento: string;
    telFoneRec: string;
    periodoRelfe: string;
    cpf: string;
    rg:string;
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



}
const ListMat: React.FC = () => {
    const [dados, setDados] = useState<IDate[]>([])
    const {quemChamou,setquemChamou,setquemNome} = useContext(QuemChamouContext)
    useEffect(() => {
        api.get('/')
            .then(response => {
                console.log(response.data);
                setDados(response.data)
            });
    }, [])

    

    // useEffect(()=>{
    //     dados?.map(user => dispach((addNewUser(user))))
    // },[])
    return (

        <div>
           
            <Header></Header>
            
            {
                dados?.map(e => (
                    <div key={e.nomeBeneficiario}>
                        <p>
                            Nome: {e.nomeBeneficiario}
                        </p>
                        <Link to={"/editform"} onClick={()=>setquemNome(e.nomeBeneficiario)}>Editar</Link>
                    </div>
                ))
            }


        </div>
    )
}

export default ListMat;


