import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-ug0p.onrender.com"
})

//funcao de consulta
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
}

//funcao cadastrar
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados); setDados(resposta.data);
}

//funcao atualizar
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados); setDados(resposta.data);
}

//funcao Deletar
export const deletar = async (url: string) => {
    await api.delete(url);
    
}