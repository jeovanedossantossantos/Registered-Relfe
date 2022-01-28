import React, { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api"
import { Container } from "./style";
import { useNavigate} from 'react-router-dom';

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
    dataDesligamento: string;
    obs: string;
    nomePai: string;
    nomeMae: string;
    nomeResponsavel: string;
    parentesco: string;



}

const Form: React.FC = () => {
    const { quemChamou, setquemChamou } = useContext(QuemChamouContext)
    const  push  = useNavigate();
    console.log(quemChamou)
    const [date, setDate] = useState<IDate>({} as IDate)

    // const {quemChamou, setQuemChamou} = useGlobal()
    // useEffect(() => {
    //     const data = new Date();
    //     let ca = []
    //     ca.push({
    //         dia: data.getDate(),
    //         mes: data.getMonth(),
    //         ano: data.getFullYear()
    //     })
    //     // alert(ca[0].ano)
    //     setDate({ ...date, data_cadastro: ca[0] })


    // }, [])
    // console.log(date.data_cadastro)
    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // api.get("/",).then(response =>{
        //     console.log(response.data)

        // }
        console.log("ok")

        api.post("/", date).then(() => {

            console.log(date)

        }



        ).catch((err) => {
            {
                console.log(date)
            }
        })

    }, [date])
const redirecionar = ()=>{

}
    return (
        <div>
            <h1>Logo do Relfe</h1>
        
            <Container className="card">
                
                {/* onSubmit={hadleSumbmit} */}
                {/* <form >

                    <input
                        type="text"
                        placeholder="Infomer seu nome"
                        onChange={e => setDate({ ...data, nome: e.target.value })}
                    />
                    


                    <button type="submit" value="Cadastra">Cadastra</button>
                </form> */}
               <form onSubmit={hadleSumbmit}>                   

                    <h1>Ficha de Matrícula</h1>
    
    
                        <fieldset>
                            <legend>Identificação Do Beneficiário</legend>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="nome">Nome do Beneficiário</label>
                                <input  type="text" name="nome" id="nome"
                                placeholder="Digite o nome do beneficiário"
                                 onChange={e => setDate({ ...date, nomeBeneficiario: e.target.value })} />
                            </div>
    
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                    <input type="date" name="dataNascimento" id="dataNascimento" placeholder="Digite a data"
                                    onChange={e => setDate({ ...date, dataNascimento: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="CPFbeneficiario">CPF Beneficiário:</label>
                                    <input type="text" name="CPFbeneficiario" id="CPFbeneficiario" 
                                    placeholder="Digite o CPF"
                                    onChange={e => setDate({ ...date, cpf: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="RGbeneficiario">RG Beneficiário:</label>
                                    <input type="text" name="RGbeneficiario" id="RGbeneficiario" placeholder="Digite o RG"
                                    onChange={e => setDate({ ...date, rg: e.target.value })} />
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="sexo">Sexo:</label><br />
                                    <input type="text" name="sexo" id="sexo" placeholder="Digite o sexo "
                                    onChange={e => setDate({ ...date, sexo: e.target.value })} />
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="nis">NIS(CAD ÚNICO)</label>
                                    <input type="text" name="nis" id="nis" placeholder="Digite o NIS"
                                    onChange={e => setDate({ ...date, nis: e.target.value })}/>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="mb-3" >
                                    <label htmlFor="endereco">Endereço:</label><br />
                                    <input type="text" name="endereco" id="endereco" placeholder="Digite o endereço"
                                    onChange={e => setDate({ ...date, endereco: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="bairro" >Bairro:</label>
                                    <input type="text" name="bairro" id="bairro" placeholder="Digite o bairro"
                                    onChange={e => setDate({ ...date, bairro: e.target.value })}/>
                                </div >
    
                                <div className="mb-3">
                                    <label htmlFor="referencia">Ponto de Referência:</label><br />
                                    <input type="text" name="referencia" id="referencia" placeholder="Digite o ponto de referência" 
                                    onChange={e => setDate({ ...date, pontoReferencia: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="periodoRelfe">Período no Relfe:</label>
                                    <input type="text" name="periodoRelfe" id="periodoRelfe" placeholder="Período no Relfe"
                                    onChange={e => setDate({ ...date, periodoRelfe: e.target.value })} />
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="telContato">Telefone 1:</label>
                                    <input type="text" name="telContato" id="telContato" placeholder="Digite o telefone"
                                    onChange={e => setDate({ ...date, telefone1: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="telContato2">Telefone 2:</label>
                                    <input type="text" name="telContato2" id="telContato2" placeholder="Digite o telefone"
                                     onChange={e => setDate({ ...date, telefone2: e.target.value })}/>
                                </div>
    
                                <div className="mb-3">
                                    <label htmlFor="telefone-recado">Telefone Recado:</label>
                                    <input type="text" name="telfone-recado" id="telefone-recado" placeholder="Telefone para recado" 
                                    onChange={e => setDate({ ...date, telFoneRec: e.target.value })}/>
                                </div>
    
                            </div>
                        </fieldset>
    
                        <fieldset className="mb-3">
                        <legend>Filiação / Responsável Legal</legend>
                            <label htmlFor="nomePai">Nome do Pai:</label>
                            <input type="text" name="nomePai" id="nomePai" placeholder="Digite o nome do pai"
                            onChange={e => setDate({ ...date, nomePai: e.target.value })}/>
                        </fieldset>
    
                        <fieldset className="mb-3">
                            <label htmlFor="nomeMae">Nome da Mãe:</label>
                            <input type="text" name="nomeMae" id="nomeMae" placeholder="Digite o nome da mãe"
                            onChange={e => setDate({ ...date, nomeMae: e.target.value })}/>
                            </fieldset>
    
                        <fieldset className="mb-3">
                            <label htmlFor="responsavel">Responsável Legal:</label>
                            <input type="text" name="responsavel" id="responsavel" placeholder="Digite o nome do responsalvel" />
                        </fieldset>
    
                        <fieldset className="mb-3">
                            <label htmlFor="parentesco">Parentesco:</label>
                            <input type="text" name="parentesco" id="parentesco" placeholder="Digite o parentesco"/>
                        </fieldset>
    
                        <fieldset>
                            <legend>Observações Médicas</legend>
                            <label htmlFor="obs">OBS:</label>
                            <input type="text" name="obs" id="obs" placeholder="Digite a observação médica"/>
                        </fieldset>
    
                        <fieldset>
                            <legend>Histórico Escolar</legend>
                            <div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="escola">Escola:</label>
                                    <input type="text" name="escola" id="escola"
                                    placeholder="Nome da escola"
                                    onChange={e => setDate({ ...date, escola: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="periodo">Período da Escola:</label>
                                    <input type="number" name="periodo" id="periodo" 
                                    placeholder="Periodo da escola"
                                    onChange={e => setDate({ ...date, periodoEscola: e.target.value })}/>
                                </div>
                                </div>
                                <div className="mb-3">                             <label htmlFor="serie">Série:</label>
                                    <input type="text" name="serie" id="serie" placeholder="Digite a série"
                                    onChange={e => setDate({ ...date, serie: e.target.value })}/>
                                </div>				
                                <div className="mb-3">                               <label htmlFor="ano">Ano:</label><br />
                                    <input type="number" name="ano" id="ano" placeholder="Digite o ano"
                                    onChange={e => setDate({ ...date, ano: e.target.value })}/>
                                </div>	
                        </fieldset>
    
                        <fieldset>
                            <legend>Relato de Desligamento</legend>
                            <div className="mb-3">                              <label htmlFor="dataDesligamento">Data de Desligamento</label> <br />
                                    <input type="date" name="dataDesligamento" id="dataDesligamento" 
                                    onChange={e => setDate({ ...date, dataDesligamento: e.target.value })}/>
                                    <label htmlFor="obs">OBS:</label>
                                    <input type="text" name="obs" id="obs" placeholder="Digite a observação do desligamento"/>
                                </div>
                        </fieldset>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-success m-3">Cadastrar</button>
                        <button className="btn btn-danger  m-3">Cancelar</button>
    
                    </div>
                    </form>

            </Container>
        </div>
    )

}

export default Form

