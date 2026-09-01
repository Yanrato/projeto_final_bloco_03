import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import type Produtos from "../../../models/Produto";

interface CardProdutosProps {
  produto: Produtos;
}

function CardProdutos({produto}: CardProdutosProps) {
     const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full max-w-sm md:max-w-64 bg-fundo-100 border-4 border-brand-600 rounded-lg overflow-hidden hover:shadow-lg transition-all">
      <div className="w-full aspect-3/4 bg-slate-100 overflow-hidden">
        <img
          src={produto.foto}
          alt='Imagem do produto'
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-1">
        <h3 className="text-base font-semibold text-black text-center line-clamp-2">
          {produto.nome}
        </h3>
        <p className="text-lg font-semibold text-black text-center mt-2">
          R${produto.preco}
        </p>
        <span className="text-md font-bold text-letra-700">
          Categoria: <p className="underline">{produto.categoria.nome}</p>
        </span>
        <div className="relative z-20 flex items-center mt-5 gap-2">
        <button
          type="button"
          title="Editar Produto"
          onClick={() => navigate(`/editarproduto/${produto.id}`)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-black border border-transparent hover:border-letra-700 hover:border-4  shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          <PencilIcon size={22} weight="fill" />
        </button>

        <button
          type="button"
          title="Deletar Produto"
          onClick={() => navigate(`/deletarproduto/${produto.id}`)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-black border border-transparent hover:border-letra-700 hover:border-4 shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          <TrashIcon size={22} weight="fill" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default CardProdutos