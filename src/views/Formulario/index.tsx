import React from 'react'
import {Container} from './styles'

const Formulario: React.FC =() => {

    return (
        <div>
            <Container>
            <form>
            <fieldset>
                <legend>Detalhes</legend>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome"   />
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input type="text" name="dataNascimento" id="dataNascimento"   />
                <label htmlFor="certidao">Certidão de Nascimento:</label>
                <input type="text" name="certidao" id="certidao"   />
                <label htmlFor="raça">Cor/Raça:</label>
                <input type="text" name="raça" id="raça"   />
                <label htmlFor="CPFbeneficiario">CPF Beneficiário:</label>
                <input type="text" name="CPFbeneficiario" id="CPFbeneficiario"   />
                <label htmlFor="RGbeneficiario">RG Beneficiário:</label>
                <input type="text" name="RGbeneficiario" id="RGbeneficiario"   />
                <label htmlFor="sexo">Sexo:</label>
                <input type="text" name="sexo" id="sexo"   />
                <label htmlFor="nis">NIS(CAD ÚNICO)</label>
                <input type="text" name="nis" id="nis"   />
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" name="endereco" id="endereco"   />
                <label htmlFor="numeroEndereco">Nº):</label>
                <input type="text" name="numeroEndereco" id="numeroEndereco"   />
                <label htmlFor="bairro">Bairro:</label>
                <input type="text" name="bairro" id="bairro"   />
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" name="cidade" id="cidade"   />
                <label htmlFor="cep">CEP:</label>
                <input type="text" name="cep" id="cep"   />
                <label htmlFor="referencia">Ponto de Referência:</label>
                <input type="text" name="referencia" id="referencia"   />
                <label htmlFor="telContato">Telefone para Contato:</label>
                <input type="text" name="telContato" id="telContato"   />
                <label htmlFor="recado">Recado:</label>
                <input type="text" name="recado" id="recado"   />
            </fieldset>

            <fieldset>
                <legend>Dados do Pai</legend>
                <label htmlFor="nomePai">Nome do Pai:</label>
                <input type="text" name="nomePai" id="nomePai"   />
                <label htmlFor="telPai">Telefone do Pai:</label>
                <input type="text" name="telPai" id="telPai"   />
                <label htmlFor="CPFpai">CPF do Pai:</label>
                <input type="text" name="CPFpai" id="CPFpai"   />
                <label htmlFor="RGpai">RG do Pai:</label>
                <input type="text" name="RGpai" id="RGpai"   />
                <label htmlFor="NISpai">NIS do Pai:</label>
                <input type="text" name="NISpai" id="NISpai"   />
            </fieldset>

            <fieldset>
                <legend>Dados da Mãe</legend>
                <label htmlFor="nomeMae">Nome da Mãe:</label>
                <input type="text" name="nomeMae" id="nomeMae"   />
                <label htmlFor="telMae">Telefone da Mãe:</label>
                <input type="text" name="telMae" id="telMae"   />
                <label htmlFor="CPFmae">CPF da Mãe:</label>
                <input type="text" name="CPFmae" id="CPFmae"   />
                <label htmlFor="RGmae">RG da Mãe:</label>
                <input type="text" name="RGmae" id="RGmae"   />
                <label htmlFor="NISmae">NIS da Mãe:</label>
                <input type="text" name="NISmae" id="NISmae"   />
            </fieldset>

            <fieldset>
                <legend>Dados do Padrasto/Madrasta</legend>
                <label htmlFor="nomePadrasto">Nome do Padrasto:</label>
                <input type="text" name="nomePadrasto" id="nomePadrasto"   />
                <label htmlFor="telPadrasto">Telefone do Padrasto:</label>
                <input type="text" name="telPadrasto" id="telPadrasto"   />
                <label htmlFor="nomeMadrasta">Nome da Madrasta:</label>
                <input type="text" name="nomeMadrasta" id="nomeMadrasta"   />
                <label htmlFor="telMadrasta">Telefone da Madrasta</label>
                <input type="text" name="telMadrasta" id="telMadrasta"   />
            </fieldset>

            <fieldset>
            <legend>Dados do Responsável Legal</legend>
            <label htmlFor="responsavel">Responsável Legal</label>
            <input type="text" name="responsavel" id="responsavel"   />
            <label htmlFor="parentesco">Parentesco</label>
            <input type="text" name="parentesco" id="parentesco"   />
            <label htmlFor="CPFparente">CPF do Parente:</label>
            <input type="text" name="CPFparente" id="CPFparente"   />
            <label htmlFor="RGparente">RG do Parente:</label>
            <input type="text" name="RGparente" id="RGparente"   />
            <label htmlFor="NISparente">NIS do Parente:</label>
            <input type="text" name="NISparente" id="NISparente"   />
            <label htmlFor="telParente">Telefone do Parente:</label>
            <input type="text" name="telParente" id="telParente"   />
            <label htmlFor="estadoCivil">Estado Civil:</label>
            <input type="text" name="estadoCivil" id="estadoCivil"   />
            </fieldset>

            <fieldset>
                <legend>Observações</legend>
                <label htmlFor="restricaoAlimentar">Apresenta Restrição Alimentar:</label>
                <input type="text" name="restricaoAlimentar" id="restricaoAlimentar"   />
                <label htmlFor="medicamento">Faz uso de algum medicamento:</label>
                <input type="text" name="medicamento" id="medicamento"   />
                <label htmlFor="alergia">Tem alergia a algum medicamento:</label>
                <input type="text" name="alergia" id="alergia"   />
                <label htmlFor="doenca">Tem alguma doença:</label>
                <input type="text" name="doenca" id="doenca"   />
                <label htmlFor="deficiencia">Apresenta alguma deficiência:</label>
                <input type="text" name="deficiencia" id="deficiencia"   />
                <label htmlFor="sangue">Tipo Sanguíneo:</label>
                <input type="text" name="sangue" id="sangue"  />
                <label htmlFor="fatorRH">Fator RH:</label>
                <input type="text" name="fatorRH" id="fatorRH"  />
                <label htmlFor="obs">OBS:</label>
                <input type="text" name="obs" id="obs"  />
                <label htmlFor="restricaoAtividade">Restrição de Atividade:</label>
                <input type="text" name="restricaoAtividade" id="restricaoAtividade"  />
                <label htmlFor="ausenciaResponsavel">Ausência do Responsável:</label>
                <input type="text" name="ausenciaResponsavel" id="ausenciaResponsavel"  />
                <label htmlFor="historico">Histórico Escolar:</label>
                <input type="text" name="historico" id="historico"  />
                <label htmlFor="historico2">Histórico Escolar 2:</label>
                <input type="text" name="historico2" id="historico2"  />
                <label htmlFor="historico3">Histórico Escolar 3:</label>
                <input type="text" name="historico3" id="historico3"  />
                <label htmlFor="encaminhada">Encaminhada:</label>
                <input type="text" name="encaminhada" id="encaminhada"  />
                <label htmlFor="beneficiario">Beneficiário Ativo:</label>
                <input type="checkbox" name="beneficiario" id="beneficiario" />
            </fieldset>
            </form>
            <button>Cadastrar</button>
            <button>Cancelar</button>
            </Container>
        </div>
    )

}
export default Formulario;

