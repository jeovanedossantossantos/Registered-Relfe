import React, { FormEvent, useCallback, useState } from "react";
import api from "../../server/api"


interface IDate {

    nome: string;
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

    const [data, setDate] = useState<IDate>({} as IDate)
    // const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     // api.get("/",).then(response =>{
    //     //     console.log(response.data)

    //     // }

    //     api.post("/", data).then(()=>{
            
    //             console.log(data)
           
    //     }
            
            

    //     ).catch((err) => {
    //         {
    //             console.log(data)
    //         }
    //     })

    // }, [data])

    return (
        <div>

            formulario
            
            <div className="card">
                <h5>Cadastres</h5>
                {/* onSubmit={hadleSumbmit} */}
                <form >

                    <input
                        type="text"
                        placeholder="Infomer seu nome"
                        onChange={e => setDate({ ...data, nome: e.target.value })}
                    />
                    


                    <button type="submit" value="Cadastra">Cadastra</button>
                </form>
               
            </div>
        </div>
    )

}

export default Form;