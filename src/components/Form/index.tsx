import React, { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api"
import { Container } from "./style";
import { useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask"
import { FormGroup, Input, Label } from "reactstrap";
interface IDate {

    nomeBeneficiario: string;
    periodoEscola?: string;
    escola?: string;
    dataNascimento: string;
    telFoneRec?: string;
    periodoRelfe?: string;
    cpf?: string;
    rg?: string;
    sexo?: string;
    nis?: string;
    endereco?: string;
    ano?: string;
    bairro?: string;
    pontoReferencia?: string;
    telefone1?: string;
    telefone2?: string;
    serie?: string;
    dataDesligamento?: string;
    obs?: string;
    nomePai?: string;
    nomeMae?: string;
    nomeResponsavel?: string;
    parentesco?: string;
    id: number;



}

const Form: React.FC = () => {
    const { quemChamou, setquemChamou, quemNome,qualId } = useContext(QuemChamouContext)
    const push = useNavigate();

    const lista = [
        "nomeBeneficiario",
        "periodoEscola",
        "escola",
        "dataNascimento",
        "telFoneRec",
        "periodoRelfe",
        "cpf",
        "rg",
        "sexo",
        "nis",
        "endereco",
        "ano",
        "bairro",
        "pontoReferencia",
        "telefone1",
        "telefone2",
        "serie",
        "dataDesligamento",
        "obs",
        "nomePai",
        "nomeMae",
        "nomeResponsavel",
        "parentesco",]
    const [posicao, setPosicao] = useState(Number)

    const [date, setDate] = useState<IDate>({} as IDate)
    const [date2, setDate2] = useState<IDate[]>([])
    const [dados, setDados] = useState<IDate[]>([])
    const [dados2, setDados2] = useState<IDate[]>([])
    const [escrever, setEsc] = useState(false)
    const [nomeBeneficiario, setName] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [periodoEscola, setPeriodoEscola] = useState("");
    const [escola, setEscola] = useState("");
    const [telFoneRec, setTelFoneRec] = useState("")
    const [periodoRelfe, setPeriodoRelfe] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [sexo, setSexo] = useState("")
    const [nis, setNis] = useState("")
    const [endereco, setEndereco] = useState("")
    const [ano, setAno] = useState("")
    const [bairro, setBairro] = useState("")
    const [pontoReferencia, setPontoRef] = useState("")
    const [telefone1, setTel1] = useState("")
    const [telefone2, setTel2] = useState("")
    const [serie, setSerie] = useState("")
    const [dataDesligamento, setDesLig] = useState("")
    const [obs, setObs] = useState("")
    const [nomePai, setNomePai] = useState("")
    const [nomeMae, setNomeMae] = useState("")
    const [nomeResponsavel, setNomeRespo] = useState("")
    const [parentesco, setParentesco] = useState("")
    const [idCont, setId] = useState(1)
    const [isValid, setIsValid] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    // Handling input onChange event
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        if ((lista[posicao] === "nomeBeneficiario") && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "99)9-9999-9999")) {
            setName(event.target.value);
            setDate({ ...date, nomeBeneficiario: event.target.value })

        } if (lista[posicao] === "dataNascimento" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {

            setDataNascimento(event.target.value);
            setDate({ ...date, dataNascimento: event.target.value })



        } if (lista[posicao] === "periodoEscola" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {

            setPeriodoEscola(event.target.value);
            setDate({ ...date, periodoEscola: event.target.value })

        } if (lista[posicao] === "escola" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setEscola(event.target.value)
            setDate({ ...date, escola: event.target.value })
        } if (lista[posicao] === "telFoneRec" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__") &&
            (event.target.value !== "__)_-____-____")) {
            setTelFoneRec(event.target.value)
            setDate({ ...date, telFoneRec: event.target.value })
        } if (lista[posicao] === "periodoRelfe" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setPeriodoRelfe(event.target.value)
            setDate({ ...date, periodoRelfe: event.target.value })
        } if (lista[posicao] === "cpf"
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setCpf(event.target.value)

            setDate({ ...date, cpf: event.target.value })

        } if (lista[posicao] === "rg" && (event.target.value !== "___.___.___-__")

            && (event.target.value !== "__)_-____-____")) {
            setRg(event.target.value)
            setDate({ ...date, rg: event.target.value })

        } if (lista[posicao] === "sexo" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setSexo(event.target.value)
            setDate({ ...date, sexo: event.target.value })
        } if (lista[posicao] === "nis" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setNis(event.target.value)
            setDate({ ...date, nis: event.target.value })
        } if (lista[posicao] === "endereco" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setEndereco(event.target.value)
            setDate({ ...date, endereco: event.target.value })
        } if (lista[posicao] === "ano" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setAno(event.target.value)
            setDate({ ...date, ano: event.target.value })
        } if (lista[posicao] === "bairro" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setBairro(event.target.value)
            setDate({ ...date, bairro: event.target.value })
        } if (lista[posicao] === "pontoReferencia" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setPontoRef(event.target.value)
            setDate({ ...date, pontoReferencia: event.target.value })
        } if ((lista[posicao] === "telefone1") && ((event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__") && (event.target.value !== "__)_-____-____"))) {
            setTel1(event.target.value)
            setDate({ ...date, telefone1: event.target.value })
        } if (lista[posicao] === "telefone2" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__") && (event.target.value !== "__)_-____-____")) {
            setTel2(event.target.value)
            setDate({ ...date, telefone2: event.target.value })
        } if (lista[posicao] === "serie" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setSerie(event.target.value)
            setDate({ ...date, serie: event.target.value })
        } if (lista[posicao] === "dataDesligamento" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setDesLig(event.target.value)
            setDate({ ...date, dataDesligamento: event.target.value })
        } if (lista[posicao] === "obs" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setObs(event.target.value)
            setDate({ ...date, obs: event.target.value })
        } if (lista[posicao] === "nomePai" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setNomePai(event.target.value)
            setDate({ ...date, nomePai: event.target.value })
        } if (lista[posicao] === "nomeMae" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setNomeMae(event.target.value)
            setDate({ ...date, nomeMae: event.target.value })
        } if (lista[posicao] === "nomeResponsavel" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setNomeRespo(event.target.value)
            setDate({ ...date, nomeResponsavel: event.target.value })
        } if (lista[posicao] === "parentesco" && (event.target.value !== "___.___.___-__")
            && (event.target.value !== "__.___.___-__")
            && (event.target.value !== "__)_-____-____")) {
            setParentesco(event.target.value)
            setDate({ ...date, parentesco: event.target.value })
        }

    };

    // Handling input onFocus event
    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        setIsBlur(false);

        // Do something with event

    };

    // Handling input onBlur event
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        setIsBlur(true);

        // Validate entered name

        if (nomeBeneficiario.match(/^[a-z][a-z\s]*$/i)) {
            setIsValid(true);

        }

        else {
            setIsValid(false);
        }

    };

    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        api.post("/", date).then(() => {


            push("/")

        }



        ).catch((err) => {
            {
                console.log(err)
            }
        })

    }, [date])

    const salveEdit = () => {
        api.patch(`id/${qualId}`, date).then(response => {
            push("/")

        });

        
    }

    useEffect(() => {
        api.get("/count").then( res =>{
            const r = res.data.rows+1
            setDate({...date, id: res.data.rows+1})
           
        }) 
        if ((quemNome !== "") && (quemChamou == "ED")) {
            // id/${qualId}
            api.get(`/search?id=${qualId}`)
                .then(response => {

                    setName(response.data[0].nomeBeneficiario)
                    setDataNascimento(response.data[0].dataNascimento)
                    setPeriodoEscola(response.data[0].periodoEscola)
                    setEscola(response.data[0].escola)
                    setTelFoneRec(response.data[0].telFoneRec)
                    setPeriodoRelfe(response.data[0].periodoRelfe)
                    setCpf(response.data[0].cpf)
                    setRg(response.data[0].rg)
                    setSexo(response.data[0].sexo)
                    setNis(response.data[0].nis)
                    setEndereco(response.data[0].endereco)
                    setAno(response.data[0].ano)
                    setBairro(response.data[0].bairro)
                    setPontoRef(response.data[0].pontoReferencia)
                    setTel1(response.data[0].telefone1)
                    setTel2(response.data[0].telefone2)
                    setSerie(response.data[0].serie)
                    setDesLig(response.data[0].dataDesligamento)
                    setObs(response.data[0].obs)
                    setNomePai(response.data[0].nomePai)
                    setNomeMae(response.data[0].nomeMae)
                    setNomeRespo(response.data[0].nomeResponsavel)
                    setParentesco(response.data[0].parentesco)



                }).catch(err => {
                    console.log(err)
                });


        }


    }, [])




    return (
        <div>


            <Container className="card">


                <form onSubmit={hadleSumbmit}>

                    <h1 style={{fontSize:30}}>{quemChamou === 'CA' ? "Ficha de Matrícula" : "Dados do Matriculado"}</h1>


                    <fieldset>
                        <legend>Identificação Do Beneficiário</legend>
                        <div className="mb-10 form-group">
                            <label className="form-label" htmlFor="nome">Nome do Beneficiário</label>
                            <input type="text" name="nome" id="nome"
                                className="form-control"
                                style={{}}
                                required

                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={nomeBeneficiario}


                                onChange={changeHandler}
                                onClick={() => setPosicao(0)}
                            />
                        </div>

                        <div className="row" >
                            <div style={{ display: "flex", }}>
                                <div className="mb-3 form-group m-1">
                                    <label className="form-label" htmlFor="dataNascimento">Data de Nascimento:</label>
                                    <input className="" type="date" name="dataNascimento" id="dataNascimento" placeholder="Digite a data"

                                        value={dataNascimento}
                                        onChange={changeHandler}
                                        onClick={() => setPosicao(3)} />
                                </div>

                                <div className="mb-3 m-1 form-group">
                                    <label className="form-label" htmlFor="CPFbeneficiario">CPF Beneficiário:</label>
                                    <InputMask mask="999.999.999-99" type="text" name="CPFbeneficiario" id="CPFbeneficiario"
                                        placeholder="Digite o CPF"
                                        value={cpf}
                                        onChange={changeHandler}
                                        onClick={e => setPosicao(6)} />
                                </div>
                                <div className="mb-3 m-1 form-group">
                                    <label className="form-label" htmlFor="RGbeneficiario">RG Beneficiário:</label>
                                    <InputMask mask="99.999.999-99" type="text" name="RGbeneficiario" id="RGbeneficiario" placeholder="Digite o RG"
                                        value={rg}
                                        onChange={changeHandler}
                                        onClick={e => setPosicao(7)} />
                                </div>


                            </div>

                            <div style={{ display: "flex" }}>
                                <div className="mb-3 m-1 form-group">
                                    <label className="form-label" htmlFor="sexo">Sexo:</label><br />
                                    <input type="text" name="sexo" id="sexo" placeholder="Digite o sexo "
                                        value={sexo}
                                        onChange={changeHandler}
                                        onClick={e => setPosicao(8)} />
                                </div>

                                <div className="mb-3 m-1 form-group">
                                    <label className="form-label" htmlFor="nis">NIS(CAD ÚNICO)</label><br />
                                    <input style={{ width: 420 }} type="text" name="nis" id="nis" placeholder="Digite o NIS"
                                        value={nis}
                                        onChange={changeHandler}
                                        onClick={e => setPosicao(9)} />
                                </div>
                            </div>




                        </div>

                        <div className="row">
                            <div className="mb-3 m-1 form-group" >
                                <label htmlFor="endereco">Endereço:</label><br />
                                <input style={{ width: 610 }} type="text" name="endereco" id="endereco" placeholder="Digite o endereço"
                                    value={endereco}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(10)} />
                            </div>

                            <div className="mb-3 m-1 form-group">
                                <label htmlFor="bairro" >Bairro:</label>
                                <input style={{ width: 610 }} type="text" name="bairro" id="bairro" placeholder="Digite o bairro"
                                    value={bairro}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(12)} />
                            </div >

                            <div className="mb-3 m-1 form-group">
                                <label htmlFor="referencia">Ponto de Referência:</label><br />
                                <input style={{ width: 610 }} type="text" name="referencia" id="referencia" placeholder="Digite o ponto de referência"
                                    value={pontoReferencia}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(13)} />
                            </div>

                            <div style={{ display: "flex" }}>
                                <div>
                                    <div className="mb-6 m-1 form-group">
                                        <label htmlFor="periodoRelfe">Período no Relfe:</label><br />
                                        <input style={{ width: 400 }} type="text" name="periodoRelfe" id="periodoRelfe" placeholder="Período no Relfe"
                                            value={periodoRelfe}
                                            onChange={changeHandler}
                                            onClick={e => setPosicao(5)} />
                                    </div>

                                    <div className="mb-6 m-1 form-group">
                                        <label htmlFor="telContato">Telefone 1:</label><br />
                                        <InputMask mask="99)9-9999-9999" type="text" name="telContato" id="telContato" placeholder="Digite o telefone"
                                            value={telefone1}
                                            onChange={changeHandler}
                                            onClick={e => setPosicao(14)} />
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-6 m-1 form-group">
                                        <label htmlFor="telContato2">Telefone 2:</label><br />
                                        <InputMask mask="99)9-9999-9999" type="text" name="telContato2" id="telContato2" placeholder="Digite o telefone"
                                            value={telefone2}
                                            onChange={changeHandler}
                                            onClick={e => setPosicao(15)} />
                                    </div>

                                    <div className="mb-6 m-1 form-group">
                                        <label htmlFor="telefone-recado">Telefone Recado:</label><br />
                                        <InputMask mask="99)9-9999-9999" type="text" name="telfone-recado" id="telefone-recado" placeholder="Telefone para recado"
                                            value={telFoneRec}
                                            onChange={changeHandler}
                                            onClick={e => setPosicao(4)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="mb-3">
                        <legend>Filiação / Responsável Legal</legend>

                        <fieldset className="mb-3">
                            <div className="mb-10 form-group">
                                <label className="form-label" htmlFor="nomePai">Nome do Pai:</label>
                                <input className="form-control" type="text" name="nomePai" id="nomePai" placeholder="Digite o nome do pai"
                                    value={nomePai}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(19)} />
                            </div>
                        </fieldset>


                        <fieldset className="mb-3">
                            <div className="mb-10 form-group">
                                <label className="form-label" htmlFor="nomeMae">Nome da Mãe:</label>
                                <input className="form-control" type="text" name="nomeMae" id="nomeMae" placeholder="Digite o nome da mãe"
                                    value={nomeMae}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(20)} />
                            </div>
                        </fieldset>

                        <fieldset className="mb-3">
                            <div className="mb-10 form-group">
                                <label className="form-label" htmlFor="nomeResponsavel">Responsável Legal:</label>
                                <input className="form-control" type="text" name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite o nome do responsalvel"
                                    value={nomeResponsavel}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(21)}
                                />
                            </div>
                            <br />

                            <div className="mb-10 form-group">
                                <label className="form-label" htmlFor="parentesco">Parentesco:</label><br />
                                <input type="text" name="parentesco" id="parentesco" placeholder="Digite o parentesco"
                                    value={parentesco}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(22)}
                                />
                            </div>
                        </fieldset>

                    </fieldset>

                    <fieldset>
                        <legend>Histórico Escolar</legend>
                        <div style={{ display: "flex" }}>
                            <div className="mb-3 form-group m-1">
                                <label className="form-label" htmlFor="escola">Escola:</label><br />
                                <input style={{ width: 300 }} type="text" name="escola" id="escola"
                                    placeholder="Nome da escola"
                                    value={escola}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(2)} />
                            </div>
                            <div className="mb-3 form-group m-1">
                                <label className="form-label" htmlFor="periodo">Período da Escola:</label><br />
                                <input style={{ width: 300 }} type="number" name="periodo" id="periodo"
                                    placeholder="Periodo da escola"
                                    value={periodoEscola}
                                    onChange={changeHandler}
                                    onClick={() => setPosicao(1)} />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="mb-3 form-group m-1">
                                <label htmlFor="serie">Série:</label><br />
                                <input style={{ width: 300 }} type="text" name="serie" id="serie" placeholder="Digite a série"
                                    value={serie}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(16)} />
                            </div>
                            <div className="mb-3 form-group m-1">
                                <label htmlFor="ano">Ano:</label><br />
                                <input style={{ width: 300 }} type="number" name="ano" id="ano" placeholder="Digite o ano"
                                    value={ano}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(11)} />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Relato de Desligamento</legend>
                        <div style={{ justifyContent:"center" }}>
                            <div className="mb-3 form-group m-1">
                                <label htmlFor="dataDesligamento">Data de Desligamento</label> <br />
                                <input type="date" name="dataDesligamento" id="dataDesligamento"
                                    value={dataDesligamento}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(17)} />

                            </div>
                            <div className="mb-3 form-group" style={{margin:10}}>
                                <label htmlFor="obs">OBS:</label><br />
                                <FormGroup>

                                    <Input type="textarea"
                                        name="obs" id="obs"
                                        value={obs}
                                        onChange={changeHandler}
                                        onClick={e => setPosicao(18)}
                                        placeholder="Digite a observação do desligamento"
                                        style={{width:"100%", height:200}} />
                                </FormGroup>
                                
                            </div>
                        </div>
                    </fieldset>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {quemChamou === 'CA' ?
                            <button type="submit" className="btn btn-success m-4 btn-ajuste"

                            >Cadastrar</button>
                            :
                            <button className="btn btn-success m-4 btn-ajuste" onClick={() => salveEdit()}>Salvar Edição</button>
                        }
                        <button className="btn btn-danger  m-4 btn-ajuste" onClick={() => push("/")}>Cancelar</button>

                    </div>
                </form>

            </Container>
        </div>
    )

}

export default Form

