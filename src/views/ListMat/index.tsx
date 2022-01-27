import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../server/api";

interface IDate {


    // data_cadastro: {
    //     dia: number,
    //     mes: number,
    //     ano: number
    // };
    nome: string;
    periodo: string;
    // grupo: number;
    escola: string;
    // cras: string;
    dataNascimento: string;
    certidaoNascimento?: string;
    corRaca: string;
    cpf: string;
    rg?: string;
    sexo: string;
    nis?: string;
    endereco: string;
    numero: string;
    bairro: string;
    pontoReferencia: string;
    telefone: string;
    telefone2: string;
    cidade: string;
    cep: string;
    tipoSanguinio?: string;
    // restriacoAlimetar: "Não" | "Sim";
    // qualRestriacoAlimetar?: string;
    // medicamento: "Não" | "Sim";
    // qualMedicamento?: string;
    // alergiaMedicamento: "Não" | "Sim";
    // qualAlergiaMedicamento?: string;
    // denca: "Não" | "Sim";
    // qualDenca?: string;
    // deficiencai: "Não" | "Sim";
    // qualDeficiencai?: string;

    // obs?: string;

    // autoriz: "Não" | "Sim";

    nomePai: string;
    cpfPai: string;
    rgPai: string;
    telfonePai: string;
    nisPai: string;

    nomeMae: string;
    cpfMae: string;
    rgMae: string;
    telfoneMae: string;
    nisMae: string;

    nomeResponsavel?: string;
    cpfResponsavel?: string;
    rgResponsavel?: string;
    telfoneResponsavel?: string;
    nisResponsavel?: string;

    estadoCivil: string;



}

const ListMat: React.FC = () => {
    const [dados, setDados] = useState<IDate[]>([])
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
                    <div key={e.cpf}>
                        <p>
                            Nome: {e.nome}
                        </p>
                        <Link to={"/editform"}>Editar</Link>
                    </div>
                ))
            }


        </div>
    )
}

export default ListMat;