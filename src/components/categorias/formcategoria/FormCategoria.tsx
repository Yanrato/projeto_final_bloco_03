import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import type Categorias from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function FormCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    // Inicialização do estado com o formato esperado pela Model
    const [categoria, setCategoria] = useState<Categorias>({
        id: 0,
        nome: "",
    });

    async function buscarCategoriaPorId(idCategoria: string) {
        setIsLoading(true);
        try {
            await buscar(`/categorias/${idCategoria}`, setCategoria);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(`Erro ao consultar a categoria: ${error.response?.status}`);
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            // Atualizar Categoria
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert("Categoria atualizada com sucesso!");
                retornar();
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(`Erro ao atualizar a categoria: ${error.response?.status}`);
                    if (error.response?.status === 401) {
                        retornar();
                    }
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            // Cadastrar Categoria
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert("Categoria cadastrada com sucesso!");
                retornar();
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(`Erro ao cadastrar a categoria: ${error.response?.status}`);
                    if (error.response?.status === 401) {
                        retornar();
                    }
                }
            } finally {
                setIsLoading(false);
            }
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <main className="grow w-full max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-semibold text-clara-50 text-center">
                    {id === undefined ? "Cadastrar" : "Editar"} Categoria
                </h1>
            </div>

            <form
                onSubmit={gerarNovaCategoria}
                className="flex flex-col gap-5 bg-fundo-100 border border-brand-600 rounded-lg p-6 md:p-8"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-xl font-semibold text-letra-700">
                        Nome da Categoria
                    </label>
                    <input
                        id="nome"
                        name="nome" // CORRIGIDO: name deve ser igual ao atributo na Model (nome)
                        type="text"
                        required
                        value={categoria.nome || ""} // CORRIGIDO: Vinculado corretamente ao atributo nome
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        className="border border-letra-700 border-2 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-300"
                        placeholder="Ex: Antialérgicos"
                    />
                </div>

                <div className="flex items-center justify-center gap-3 mt-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-brand-300 hover:bg-letra-700 text-black hover:text-white text-base px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center min-w-[140px] cursor-pointer"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={retornar}
                        className="text-base px-6 py-3 rounded-lg border bg-red-300 hover:text-white border-red-900 text-slate-700 hover:bg-red-500 transition-colors font-semibold cursor-pointer"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </main>
    );
}

export default FormCategoria;