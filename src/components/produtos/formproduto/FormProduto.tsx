import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);


  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });


  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null,
  } as unknown as Produto);


  async function buscarProdutoPorId(idProduto: string) {
    setIsLoading(true);
    try {
      await buscar(`/produtos/${idProduto}`, setProduto);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao consultar o Produto: ${error.response?.status}`);
      }
    } finally {
      setIsLoading(false);
    }
  }


  async function buscarCategoriaPorId(idCategoria: string) {
    try {
      await buscar(`/categorias/${idCategoria}`, setCategoria);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao consultar a Categoria: ${error.response?.status}`);
      }
    }
  }


  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao listar as categorias: ${error.response?.status}`);
      }
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);


  useEffect(() => {
    setProduto((prevProduto) => ({
      ...prevProduto,
      categoria: categoria,
    }));
  }, [categoria]);


  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    
    setProduto({
      ...produto,
      [name]: type === "number" ? Number(value) : value,
      categoria: categoria,
    });
  }

  async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
  
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso!");
        retornar();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(`Erro ao atualizar o Produto: ${error.response?.status}`);
          if (error.response?.status === 401) {
            retornar();
          }
        }
      } finally {
        setIsLoading(false);
      }
    } else {

      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert("Produto cadastrado com sucesso!");
        retornar();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(`Erro ao cadastrar o Produto: ${error.response?.status}`);
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
    navigate("/produtos");
  }

  return (
    <main className="grow w-full max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-clara-50 text-center">
          {id === undefined ? "Cadastrar" : "Editar"} Produto
        </h1>
      </div>

      <form
        onSubmit={gerarNovoProduto}
        className="flex flex-col gap-5 bg-fundo-100 border border-brand-600 rounded-lg p-6 md:p-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-xl font-semibold text-letra-700">
            Nome do Produto
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={produto.nome || ""}
            onChange={atualizarEstado}
            className="border border-letra-700 border-2 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Ex: Dipirona 500mg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className="text-xl font-semibold text-letra-700">
            Preço do Produto (R$)
          </label>
          <input
            id="preco"
            name="preco"
            type="number"
            step="0.01"
            required
            value={produto.preco || ""}
            onChange={atualizarEstado}
            className="border border-letra-700 border-2 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Ex: 12.50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="text-xl font-semibold text-letra-700">
            URL da Imagem
          </label>
          <input
            id="foto"
            name="foto"
            type="text"
            value={produto.foto || ""}
            onChange={atualizarEstado}
            className="border border-letra-700 border-2 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Ex: https://link-da-imagem.com/foto.jpg"
          />
        </div>


        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="text-xl font-semibold text-letra-700">
            Categoria do Produto
          </label>
          <select
            id="categoria"
            name="categoria"
            required
            onChange={(e) => buscarCategoriaPorId(e.target.value)}
            className="border border-letra-700 border-2 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-300 bg-fundo-100"
          >
            <option value="" disabled selected>
              Selecione uma categoria
            </option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            type="submit"
            disabled={isLoading || !produto.categoria?.id}
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

export default FormProduto;