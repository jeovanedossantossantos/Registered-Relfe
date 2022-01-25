import React, { FormEvent, useCallback, useEffect, useState } from "react";
import api from "../../server/api"
import { Container } from "./style";



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
    rg?:string;
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

const Form: React.FC = () => {

    const [date, setDate] = useState<IDate>({} as IDate)

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
                        <div style={{display:"flex"}}>
                            <div className="col-md-8 m-1">
                                <label className="form-label" htmlFor="escola">Escola:</label>
                                <input className="form-control" type="text" name="escola" id="escola"
                                placeholder="Nome da escola"
                                onChange={e => setDate({ ...date, escola: e.target.value })} />
                            </div>
                            <div className="col-md-3 m-1">
                                <label className="form-label" htmlFor="periodo">Periodo:</label>
                                <input className="form-control" type="number" name="periodo" id="periodo" 
                                placeholder="Periodo"
                                onChange={e => setDate({ ...date, periodo: e.target.value })}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                <input type="number" name="dataNascimento" id="dataNascimento" placeholder="Data de Nascimento"
                                onChange={e => setDate({ ...date, dataNascimento: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="certidao">Certidão de Nascimento:</label>
                                <input type="number" name="certidao" id="certidao" placeholder="Certidão de Nascimento" 
                                onChange={e => setDate({ ...date, certidaoNascimento: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="raça">Cor/Raça:</label>
                                <input type="text" name="raça" id="raça" placeholder="Cor/Raça"
                                onChange={e => setDate({ ...date, corRaca: e.target.value })} />
                            </div>
                            <div className="col-md-2">

                                <label htmlFor="CPFbeneficiario">CPF Beneficiário:</label>
                                <input type="number" name="CPFbeneficiario" id="CPFbeneficiario" 
                                placeholder="CPF"
                                onChange={e => setDate({ ...date, cpf: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="RGbeneficiario">RG Beneficiário:</label>
                                <input type="number" name="RGbeneficiario" id="RGbeneficiario" placeholder="RG"
                                onChange={e => setDate({ ...date, rg: e.target.value })} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="sexo">Sexo:</label><br />
                                <input type="text" name="sexo" id="sexo"
                                onChange={e => setDate({ ...date, sexo: e.target.value })} />
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="nis">NIS(CAD ÚNICO)</label>
                                <input type="number" name="nis" id="nis" 
                                onChange={e => setDate({ ...date, nis: e.target.value })}/>
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
                                onChange={e => setDate({ ...date, nis: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="numeroEndereco">Nº):</label><br />
                                <input type="number" name="numeroEndereco" id="numeroEndereco" 
                                onChange={e => setDate({ ...date, numero: e.target.value })}/>
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
                                onChange={e => setDate({ ...date, bairro: e.target.value })}/>
                            </div >

                            <div className="col-md-2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" name="cidade" id="cidade" 
                                onChange={e => setDate({ ...date, cidade: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="cep">CEP:</label> <br />
                                <input type="number" name="cep" id="cep" 
                                onChange={e => setDate({ ...date, cep: e.target.value })}/>
                            </div>

                            <div className="col-md-3">

                                <label htmlFor="referencia">Ponto de Referência:</label><br />
                                <input className="col-md-12" type="text" name="referencia" id="referencia" 
                                onChange={e => setDate({ ...date, pontoReferencia: e.target.value })}/>

                            </div>
                            <div className="col-md-2">
                                <label htmlFor="telContato">Telefone para Contato:</label>
                                <input type="text" name="telContato" id="telContato" 
                                onChange={e => setDate({ ...date, telefone: e.target.value })}/>
                            </div>

                            <div className="col-md-2">
                                <label htmlFor="telContato2">Telefone para Contato:</label>
                                <input type="text" name="telContato2" id="telContato2" 
                                 onChange={e => setDate({ ...date, telefone2: e.target.value })}/>
                            </div>


                        </div>
                    </fieldset>

                    <fieldset>
                        {/* <legend>Dados do Pai</legend>
                        <label htmlFor="nomePai">Nome do Pai:</label> */}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nomePai">Dados do Pai/Padastro</label>
                            <input className="form-control" type="text" name="nomePai" id="nomePai" placeholder="Nome do pai" 
                             onChange={e => setDate({ ...date, nisPai: e.target.value })}/>
                        </div>
                        <label htmlFor="telPai">Telefone:</label>
                        <input type="text" name="telPai" id="telPai" 
                        onChange={e => setDate({ ...date, telfonePai: e.target.value })}/>
                        <label htmlFor="CPFpai">CPF:</label>
                        <input type="text" name="CPFpai" id="CPFpai" 
                        onChange={e => setDate({ ...date, cpfPai: e.target.value })}/>
                        <label htmlFor="RGpai">RG:</label>
                        <input type="text" name="RGpai" id="RGpai" 
                        onChange={e => setDate({ ...date, rgPai: e.target.value })}/>

                    </fieldset>

                    <fieldset>
                        <legend>Dados da Mãe/Madastra</legend>
                        <label htmlFor="nomeMae">Nome:</label>
                        <input type="text" name="nomeMae" id="nomeMae" 
                        onChange={e => setDate({ ...date, nomeMae: e.target.value })}/>
                        <label htmlFor="telMae">Telefone da:</label>
                        <input type="text" name="telMae" id="telMae" 
                        onChange={e => setDate({ ...date, telfoneMae: e.target.value })}/>
                        <label htmlFor="CPFmae">CPF:</label>
                        <input type="text" name="CPFmae" id="CPFmae" 
                        onChange={e => setDate({ ...date, cpfMae: e.target.value })}/>
                        <label htmlFor="RGmae">RG:</label>
                        <input type="text" name="RGmae" id="RGmae" 
                        onChange={e => setDate({ ...date, rgMae: e.target.value })}/>

                    </fieldset>

                    {/* <fieldset>
                        <legend>Dados do Padrasto/Madrasta</legend>
                        <label htmlFor="nomePadrasto">Nome do Padrasto:</label>
                        <input type="text" name="nomePadrasto" id="nomePadrasto" />
                        <label htmlFor="telPadrasto">Telefone do Padrasto:</label>
                        <input type="text" name="telPadrasto" id="telPadrasto" />
                        <label htmlFor="nomeMadrasta">Nome da Madrasta:</label>
                        <input type="text" name="nomeMadrasta" id="nomeMadrasta" />
                        <label htmlFor="telMadrasta">Telefone da Madrasta</label>
                        <input type="text" name="telMadrasta" id="telMadrasta" />
                    </fieldset> */}

                    {/* <fieldset>
                        <legend>Dados do Responsável Legal</legend>
                        <label htmlFor="responsavel">Responsável Legal</label>
                        <input type="text" name="responsavel" id="responsavel" />
                        <label htmlFor="parentesco">Parentesco</label>
                        <input type="text" name="parentesco" id="parentesco" />
                        <label htmlFor="CPFparente">CPF do Parente:</label>
                        <input type="text" name="CPFparente" id="CPFparente" />
                        <label htmlFor="RGparente">RG do Parente:</label>
                        <input type="text" name="RGparente" id="RGparente" />
                        <label htmlFor="NISparente">NIS do Parente:</label>
                        <input type="text" name="NISparente" id="NISparente" />
                        <label htmlFor="telParente">Telefone do Parente:</label>
                        <input type="text" name="telParente" id="telParente" />
                        <label htmlFor="estadoCivil">Estado Civil:</label>
                        <input type="text" name="estadoCivil" id="estadoCivil" />
                    </fieldset> */}

                    {/* <fieldset>
                        <legend>Observações</legend>
                        <label htmlFor="restricaoAlimentar">Apresenta Restrição Alimentar:</label>
                        <input type="text" name="restricaoAlimentar" id="restricaoAlimentar" />
                        <label htmlFor="medicamento">Faz uso de algum medicamento:</label>
                        <input type="text" name="medicamento" id="medicamento" />
                        <label htmlFor="alergia">Tem alergia a algum medicamento:</label>
                        <input type="text" name="alergia" id="alergia" />
                        <label htmlFor="doenca">Tem alguma doença:</label>
                        <input type="text" name="doenca" id="doenca" />
                        <label htmlFor="deficiencia">Apresenta alguma deficiência:</label>
                        <input type="text" name="deficiencia" id="deficiencia" />
                        <label htmlFor="sangue">Tipo Sanguíneo:</label>
                        <input type="text" name="sangue" id="sangue" />
                        <label htmlFor="fatorRH">Fator RH:</label>
                        <input type="text" name="fatorRH" id="fatorRH" />
                        <label htmlFor="obs">OBS:</label>
                        <input type="text" name="obs" id="obs" />
                        <label htmlFor="restricaoAtividade">Restrição de Atividade:</label>
                        <input type="text" name="restricaoAtividade" id="restricaoAtividade" />
                        <label htmlFor="ausenciaResponsavel">Ausência do Responsável:</label>
                        <input type="text" name="ausenciaResponsavel" id="ausenciaResponsavel" />
                        <label htmlFor="historico">Histórico Escolar:</label>
                        <input type="text" name="historico" id="historico" />
                        <label htmlFor="historico2">Histórico Escolar 2:</label>
                        <input type="text" name="historico2" id="historico2" />
                        <label htmlFor="historico3">Histórico Escolar 3:</label>
                        <input type="text" name="historico3" id="historico3" />
                        <label htmlFor="encaminhada">Encaminhada:</label>
                        <input type="text" name="encaminhada" id="encaminhada" />
                        <label htmlFor="beneficiario">Beneficiário Ativo:</label>
                        <input type="checkbox" name="beneficiario" id="beneficiario" />
                    </fieldset> */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" className="btn btn-success m-3">Cadastrar</button>
                    <button className="btn btn-danger  m-3">Cancelar</button>

                </div>
                </form>
                
            </Container>
        </div>
    )

}

export default Form;