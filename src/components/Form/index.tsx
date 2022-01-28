import React, { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api"
import { Container } from "./style";
import { useNavigate} from 'react-router-dom';

interface IDate {

    nome: string;
    periodo: string;
    escola: string;
    anoEscolar: string;
    serie: string;
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
    telfoneRec: string;
    cidade: string;
    cep: string;
    tipoSanguinio?: string;
    obsMeddica: string;

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

            formulario
            <div>

            </div>
            <Container className="card">
                <h5>Cadastres</h5>
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


                    <fieldset>
                        <legend>Detalhes</legend>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nome">Nome:</label>
                            <input className="form-control" type="text" name="nome" id="nome"
                                placeholder="Nome da criança"
                                onChange={e => setDate({ ...date, nome: e.target.value })} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="col-md-5 m-1">
                                <label className="form-label" htmlFor="escola">Escola:</label>
                                <input className="form-control" type="text" name="escola" id="escola"
                                    placeholder="Nome da escola"
                                    onChange={e => setDate({ ...date, escola: e.target.value })} />
                            </div>
                            <div className="col-md-3 m-1">
                                <label className="form-label" htmlFor="periodo">Periodo:</label>
                                <input className="form-control" type="text" name="periodo" id="periodo"
                                    placeholder="Periodo"
                                    onChange={e => setDate({ ...date, periodo: e.target.value })} />
                            </div>
                            <div className="col-md-3 m-1">
                                <label className="form-label" htmlFor="serie">Serie:</label>
                                <input className="form-control" type="text" name="serie" id="serie"
                                    placeholder="Periodo"
                                    onChange={e => setDate({ ...date, serie: e.target.value })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="dataNascimento">Data de Nascimento:</label><br />
                                <input type="number" name="dataNascimento" id="dataNascimento" placeholder="Data de Nascimento"
                                    onChange={e => setDate({ ...date, dataNascimento: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="certidao">Certidão de Nascimento:</label><br />
                                <input type="number" name="certidao" id="certidao" placeholder="Certidão de Nascimento"
                                    onChange={e => setDate({ ...date, certidaoNascimento: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="raça">Cor/Raça:</label><br />
                                <input type="text" name="raça" id="raça" placeholder="Cor/Raça"
                                    onChange={e => setDate({ ...date, corRaca: e.target.value })} />
                            </div>
                            <div className="col-md-2">

                                <label htmlFor="CPFbeneficiario">CPF Beneficiário:</label><br />
                                <input type="number" name="CPFbeneficiario" id="CPFbeneficiario"
                                    placeholder="CPF"
                                    onChange={e => setDate({ ...date, cpf: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="RGbeneficiario">RG Beneficiário:</label><br />
                                <input type="number" name="RGbeneficiario" id="RGbeneficiario" placeholder="RG"
                                    onChange={e => setDate({ ...date, rg: e.target.value })} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="sexo">Sexo:</label><br />
                                <input type="text" name="sexo" id="sexo"
                                    onChange={e => setDate({ ...date, sexo: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="nis">NIS(CAD ÚNICO)</label><br />
                                <input type="number" name="nis" id="nis"
                                    onChange={e => setDate({ ...date, nis: e.target.value })} />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-md-2" style={{
                                width: "100%",
                                maxWidth: 500, minWidth: 200
                            }}>
                                <label htmlFor="endereco">Endereço:</label><br />
                                <input style={{
                                    width: "100%",
                                    maxWidth: 480,
                                    minWidth: 200

                                }} type="text" name="endereco" id="endereco"
                                    onChange={e => setDate({ ...date, nis: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="numeroEndereco">Nº):</label><br />
                                <input type="number" name="numeroEndereco" id="numeroEndereco"
                                    onChange={e => setDate({ ...date, numero: e.target.value })} />
                            </div>

                            <div className="col-md-2" style={{
                                width: "100%",
                                maxWidth: 500, minWidth: 200
                            }}>
                                <label htmlFor="bairro" >Bairro:</label>
                                <input style={{
                                    width: "100%",
                                    maxWidth: 480,
                                    minWidth: 200

                                }} type="text" name="bairro" id="bairro"
                                    onChange={e => setDate({ ...date, bairro: e.target.value })} />
                            </div >

                            <div className="col-md-2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" name="cidade" id="cidade"
                                    onChange={e => setDate({ ...date, cidade: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="cep">CEP:</label> <br />
                                <input type="number" name="cep" id="cep"
                                    onChange={e => setDate({ ...date, cep: e.target.value })} />
                            </div>

                            <div className="col-md-3">

                                <label htmlFor="referencia">Ponto de Referência:</label><br />
                                <input className="col-md-12" type="text" name="referencia" id="referencia"
                                    onChange={e => setDate({ ...date, pontoReferencia: e.target.value })} />

                            </div>
                            <div className="col-md-2">
                                <label htmlFor="telContato">Telefone para Contato:</label>
                                <input type="text" name="telContato" id="telContato"
                                    onChange={e => setDate({ ...date, telefone: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="telContato2">Telefone para Contato:</label>
                                <input type="text" name="telContato2" id="telContato2"
                                    onChange={e => setDate({ ...date, telefone2: e.target.value })} />
                            </div>


                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Dados do Pai</legend>
                        <label htmlFor="nomePai">Nome do Pai:</label>

                        <label className="form-label" htmlFor="nomePai">Dados do Pai/Padastro</label>
                        <input className="form-control" type="text" name="nomePai" id="nomePai" placeholder="Nome do pai"
                            onChange={e => setDate({ ...date, nomePai: e.target.value })} />

                        <br /><label htmlFor="telPai">Telefone:</label>
                        <br /> <input type="text" name="telPai" id="telPai"
                            onChange={e => setDate({ ...date, telfonePai: e.target.value })} />
                         <br /><label htmlFor="CPFpai">CPF:</label> <br />
                        <input type="text" name="CPFpai" id="CPFpai"
                            onChange={e => setDate({ ...date, cpfPai: e.target.value })} />
                         <br /><label htmlFor="RGpai">RG:</label> <br />
                        <input type="text" name="RGpai" id="RGpai"
                            onChange={e => setDate({ ...date, rgPai: e.target.value })} />

                    </fieldset>

                    <fieldset>
                        <legend>Dados da Mãe/Madastra</legend>
                        <label htmlFor="nomeMae">Nome:</label><br />
         

                         
                        <input className="form-control" type="text" name="nomeMae" id="nomeMae" placeholder="Nome da mãe"
                             onChange={e => setDate({ ...date, nomeMae: e.target.value })} />
                        <br />
                        <label htmlFor="telMae">Telefone da:</label><br />
                        <input type="text" name="telMae" id="telMae"
                            onChange={e => setDate({ ...date, telfoneMae: e.target.value })} />
                        <br /><label htmlFor="CPFmae">CPF:</label><br />
                        <input type="text" name="CPFmae" id="CPFmae"
                            onChange={e => setDate({ ...date, cpfMae: e.target.value })} />
                        <br /><label htmlFor="RGmae">RG:</label><br />
                        <input type="text" name="RGmae" id="RGmae"
                            onChange={e => setDate({ ...date, rgMae: e.target.value })} />

                    </fieldset>

                   
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-success m-3" onClick={()=>push("/")}>Cadastrar</button>
                        <button className="btn btn-danger  m-3" onClick={()=>push("/")}>Cancelar</button>

                    </div>
                </form>

            </Container>
        </div>
    )

}

export default Form

