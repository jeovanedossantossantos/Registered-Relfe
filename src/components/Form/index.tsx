import React, { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { QuemChamouContext } from "../../hooks/global";
import api from "../../server/api"
import { Container } from "./style";
import { useNavigate } from 'react-router-dom';

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



}

const Form: React.FC = () => {
    const { quemChamou, setquemChamou, quemNome } = useContext(QuemChamouContext)
    const push = useNavigate();

    const lista = ["nomeBeneficiario",
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
    // console.log(quemChamou)
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
    const [isValid, setIsValid] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    // Handling input onChange event
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (lista[posicao] === "nomeBeneficiario") {
            setName(event.target.value);


            setDate({ ...date, nomeBeneficiario: event.target.value })
            console.log("Não ok")
        } if (lista[posicao] === "dataNascimento") {
            setDataNascimento(event.target.value);


            setDate({ ...date, dataNascimento: event.target.value })
            console.log(event.target.value)
        } if (lista[posicao] === "periodoEscola") {
            setPeriodoEscola(event.target.value);
            setDate({ ...date, periodoEscola: event.target.value })
        } if (lista[posicao] === "escola") {
            setEscola(event.target.value)
            setDate({ ...date, escola: event.target.value })
        } if (lista[posicao] === "telFoneRec") {
            setTelFoneRec(event.target.value)
            setDate({ ...date, telFoneRec: event.target.value })
        } if (lista[posicao] === "periodoRelfe") {
            setPeriodoRelfe(event.target.value)
            setDate({ ...date, periodoRelfe: event.target.value })
        } if (lista[posicao] === "cpf") {
            setCpf(event.target.value)
            setDate({ ...date, cpf: event.target.value })
        } if (lista[posicao] === "rg") {
            setRg(event.target.value)
            setDate({ ...date, rg: event.target.value })
        } if (lista[posicao] === "sexo") {
            setSexo(event.target.value)
            setDate({ ...date, sexo: event.target.value })
        } if (lista[posicao] === "nis") {
            setNis(event.target.value)
            setDate({ ...date, nis: event.target.value })
        } if (lista[posicao] === "endereco") {
            setEndereco(event.target.value)
            setDate({ ...date, endereco: event.target.value })
        } if (lista[posicao] === "ano") {
            setAno(event.target.value)
            setDate({ ...date, ano: event.target.value })
        } if (lista[posicao] === "bairro") {
            setBairro(event.target.value)
            setDate({ ...date, bairro: event.target.value })
        } if (lista[posicao] === "pontoReferencia") {
            setPontoRef(event.target.value)
            setDate({ ...date, pontoReferencia: event.target.value })
        } if (lista[posicao] === "telefone1") {
            setTel1(event.target.value)
            setDate({ ...date, telefone1: event.target.value })
        } if (lista[posicao] === "telefone2") {
            setTel2(event.target.value)
            setDate({ ...date, telefone2: event.target.value })
        } if (lista[posicao] === "serie") {
            setTel2(event.target.value)
            setDate({ ...date, serie: event.target.value })
        } if (lista[posicao] === "dataDesligamento") {
            setDesLig(event.target.value)
            setDate({ ...date, dataDesligamento: event.target.value })
        } if (lista[posicao] === "obs") {
            setObs(event.target.value)
            setDate({ ...date, obs: event.target.value })
        } if (lista[posicao] === "nomePai"){
            setNomePai(event.target.value)
            setDate({...date, nomePai: event.target.value})
        } if (lista[posicao] === "nomeMae"){
            setNomeMae(event.target.value)
            setDate({...date, nomeMae: event.target.value})
        } if (lista[posicao] === "nomeResponsavel"){
            setNomeRespo(event.target.value)
            setDate({...date, nomeResponsavel: event.target.value})
        } if (lista[posicao] === "parentesco"){
            setParentesco(event.target.value)
            setDate({...date, parentesco: event.target.value})
        }
        else {
            console.log("ok")
        }
    };

    // Handling input onFocus event
    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        setIsBlur(false);

        // Do something with event
        console.log(event);
    };

    // Handling input onBlur event
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        setIsBlur(true);

        // Validate entered name

        if (nomeBeneficiario.match(/^[a-z][a-z\s]*$/i)) {
            setIsValid(true);
            console.log(lista[posicao])
        } if (lista[posicao] === "dataNascimento") {
            console.log(lista[posicao])
        }
        else {
            setIsValid(false);
        }

        // Do something with event
        console.log(event);
    };

    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        api.post("/", date).then(() => {

            console.log("Olá " + dados.push(date))
            push("/")

        }



        ).catch((err) => {
            {
                console.log(date)
            }
        })

    }, [date])

    const salveEdit = () => {
        api.patch(`nomeBeneficiario/${quemNome}`, date).then(response => {
            console.log(response.data);

        });

        push("/")
    }

    useEffect(() => {
        if ((quemNome !== "") && (quemChamou == "ED")) {
            console.log("Aqui => " + quemChamou)
            api.get(`/search?nomeBeneficiario=${quemNome}`)
                .then(response => {
                    console.log("Date 2")
                    console.log(response.data);
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


        } else {
            console.log("Else => " + quemChamou)
        }


    }, [])

    const resolver = (e: any) => {

        console.log(e.target.value)

    }

    const redirecionar = () => {

    }
    return (
        <div>
            {/* <div className="container">
                <h3>Please enter your name:</h3>
                <input
                    type="text"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    value={name}
                    onChange={changeHandler}
                    className="input"
                    placeholder="Please enter your name"
                />
                {isFocus && (
                    <span className="hint">
                        Only letters and spaces are acceptable
                    </span>
                )}
                {isBlur && !isValid && <p className="error">The name you entered is not valid</p>}
                {isBlur && isValid && <p className="success">The name you entered looks good</p>}
            </div>
            <h1 onClick={()=>setName("jeovane")}>Aqui</h1> */}

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
                        <div className="mb-10">
                            <label className="form-label" htmlFor="nome">Nome do Beneficiário</label>
                            <input type="text" name="nome" id="nome"
                                // placeholder={quemNome === "" ? 'Digite o nome do beneficiário' : dados[0].nomeBeneficiario}

                                // value={quemNome === '' ? '' : dados.map(e=>{return e.nomeBeneficiario})}
                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={nomeBeneficiario}
                                // onChange={resolver}

                                // onFocus={e => setState( {value: 'text'}) }

                                onChange={changeHandler}
                                onClick={() => setPosicao(0)}
                            />
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                <input type="date" name="dataNascimento" id="dataNascimento" placeholder="Digite a data"
                                    // onChange={e => setDate({ ...date, dataNascimento: e.target.value })}  
                                    value={dataNascimento}
                                    onChange={changeHandler}
                                    onClick={() => setPosicao(3)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="CPFbeneficiario">CPF Beneficiário:</label>
                                <input type="text" name="CPFbeneficiario" id="CPFbeneficiario"
                                    placeholder="Digite o CPF"
                                    value={cpf}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(6)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="RGbeneficiario">RG Beneficiário:</label>
                                <input type="text" name="RGbeneficiario" id="RGbeneficiario" placeholder="Digite o RG"
                                    value={rg}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(7)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sexo">Sexo:</label><br />
                                <input type="text" name="sexo" id="sexo" placeholder="Digite o sexo "
                                    value={sexo}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(8)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nis">NIS(CAD ÚNICO)</label>
                                <input type="text" name="nis" id="nis" placeholder="Digite o NIS"
                                    value={nis}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(9)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3" >
                                <label htmlFor="endereco">Endereço:</label><br />
                                <input type="text" name="endereco" id="endereco" placeholder="Digite o endereço"
                                    value={endereco}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(10)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="bairro" >Bairro:</label>
                                <input type="text" name="bairro" id="bairro" placeholder="Digite o bairro"
                                    value={bairro}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(12)} />
                            </div >

                            <div className="mb-3">
                                <label htmlFor="referencia">Ponto de Referência:</label><br />
                                <input type="text" name="referencia" id="referencia" placeholder="Digite o ponto de referência"
                                    value={pontoReferencia}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(13)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="periodoRelfe">Período no Relfe:</label>
                                <input type="text" name="periodoRelfe" id="periodoRelfe" placeholder="Período no Relfe"
                                    value={periodoRelfe}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(5)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telContato">Telefone 1:</label>
                                <input type="text" name="telContato" id="telContato" placeholder="Digite o telefone"
                                    value={telefone1}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(14)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telContato2">Telefone 2:</label>
                                <input type="text" name="telContato2" id="telContato2" placeholder="Digite o telefone"
                                    value={telefone2}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(15)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefone-recado">Telefone Recado:</label>
                                <input type="text" name="telfone-recado" id="telefone-recado" placeholder="Telefone para recado"
                                    value={telFoneRec}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(4)} />
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="mb-3">
                        <legend>Filiação / Responsável Legal</legend>
                        <label htmlFor="nomePai">Nome do Pai:</label>
                        <input type="text" name="nomePai" id="nomePai" placeholder="Digite o nome do pai"
                        value={nomePai}
                            onChange={changeHandler}
                            onClick={e=>setPosicao(19)} />
                    </fieldset>

                    <fieldset className="mb-3">
                        <label htmlFor="nomeMae">Nome da Mãe:</label>
                        <input type="text" name="nomeMae" id="nomeMae" placeholder="Digite o nome da mãe"
                            value={nomeMae}
                            onChange={changeHandler}
                            onClick={e=>setPosicao(20)} />
                    </fieldset>

                    <fieldset className="mb-3">
                        <label htmlFor="nomeResponsavel">Responsável Legal:</label>
                        <input type="text" name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite o nome do responsalvel" 
                        value={nomeResponsavel}
                        onChange={changeHandler}
                        onClick={e=>setPosicao(21)}
                        />
                    </fieldset>

                    <fieldset className="mb-3">
                        <label htmlFor="parentesco">Parentesco:</label>
                        <input type="text" name="parentesco" id="parentesco" placeholder="Digite o parentesco" 
                        value={parentesco}
                        onChange={changeHandler}
                        onClick={e=>setPosicao(22)}
                        />
                    </fieldset>

                   

                    <fieldset>
                        <legend>Histórico Escolar</legend>
                        <div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="escola">Escola:</label>
                                <input type="text" name="escola" id="escola"
                                    placeholder="Nome da escola"
                                    value={escola}
                                    onChange={changeHandler}
                                    onClick={e => setPosicao(2)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="periodo">Período da Escola:</label>
                                <input type="number" name="periodo" id="periodo"
                                    placeholder="Periodo da escola"
                                    value={periodoEscola}
                                    onChange={changeHandler}
                                    onClick={() => setPosicao(1)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="serie">Série:</label>
                            <input type="text" name="serie" id="serie" placeholder="Digite a série"
                                value={serie}
                                onChange={changeHandler}
                                onClick={e => setPosicao(16)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ano">Ano:</label><br />
                            <input type="number" name="ano" id="ano" placeholder="Digite o ano"
                                value={ano}
                                onChange={changeHandler}
                                onClick={e => setPosicao(11)} />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Relato de Desligamento</legend>
                        <div className="mb-3">
                            <label htmlFor="dataDesligamento">Data de Desligamento</label> <br />
                            <input type="date" name="dataDesligamento" id="dataDesligamento"
                                value={dataDesligamento}
                                onChange={changeHandler}
                                onClick={e => setPosicao(17)} />
                            <label htmlFor="obs">OBS:</label>
                            <input type="text" name="obs" id="obs"
                                value={obs}
                                onChange={changeHandler}
                                onClick={e => setPosicao(18)}
                                placeholder="Digite a observação do desligamento" />
                        </div>
                    </fieldset>
                    <div style={{ display: "flex", justifyContent: "center" }}>salveEdit
                        {quemChamou === 'CA' ?
                            <button type="submit" className="btn btn-success m-3"

                            >Cadastrar</button>
                            :
                            <button className="btn btn-success m-3" onClick={() => salveEdit()}>Salvar Edição</button>
                        }
                        <button className="btn btn-danger  m-3" onClick={() => push("/")}>Cancelar</button>

                    </div>
                </form>

            </Container>
        </div>
    )

}

export default Form

