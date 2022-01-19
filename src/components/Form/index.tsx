import React, { FormEvent, useCallback, useState } from "react";
import api from "../../server/api"


interface IDate {

    name: string;
    dataNascimento: string;
    certidaoNascimento?: string;
    corRaca: string;
    cpf: string;
    sexo: "Não indentificado" | "Masculino" | "Feminino";
    nis?: string;
    endereco: string;
    numero: string;
    bairro: string;
    pontoReferencia: string;
    telefone: string;
    cidade: string;
    cep: string;
    tipoSanguinio?: string;
    restriacoAlimetar: "Não" | "Sim";
    qualRestriacoAlimetar?: string;
    medicamento: "Não" | "Sim";
    qualMedicamento?: string;
    alergiaMedicamento: "Não" | "Sim";
    qualAlergiaMedicamento?: string;
    denca: "Não" | "Sim";
    qualDenca?: string;
    deficiencai: "Não" | "Sim";
    qualDeficiencai?: string;

    obs?: string;

    autoriz: "Não" | "Sim";

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

const Form: React.FC = () => {

    const [date, setDate] = useState<IDate>({} as IDate)
    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        // api.post("/", {
        //     "data": {"nome": "jeovane", "idade": 25}
        // }).then(
        api.get("/",).then(response =>{
            console.log(response.data)

        }
            

        ).catch((err) => {
            {
                console.log("ddd")
            }
        })

    }, [date])

    return (
        <div>

            formulario
            
            <div className="card">
                <h5>Cadastres</h5>
                <form onSubmit={hadleSumbmit}>

                    {/* <input
                        type="text"
                        placeholder="Infomer seu nome"
                        onChange={e => setDate({ ...data, name: e.target.value })}
                    /> */}


                    {/* <input
                        type="email"
                        placeholder="Informe seus email"
                        onChange={e => setDate({ ...data, email: e.target.value })}
                    /> */}
                    {/* <input
                        type="password"
                        placeholder="Infomer seu Senha"
                        onChange={e => setDate({ ...data, senha: e.target.value })}
                    /> */}


                    <button type="submit" value="Cadastra">Cadastra</button>
                </form>
                {/* <Link to={"/signin"}>Logar</Link> */}
            </div>
        </div>
    )

}

export default Form;