"use client";

import { useNavigate } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  const navigate = useNavigate();

  return (
    <div className="group relative flex h-32 w-full items-center gap-4 overflow-hidden rounded-2xl border border-outline-variant/20 bg-fundo-100 px-5 shadow-sm transition-shadow duration-300 hover:shadow-xl">
      

      <div className="relative z-10 min-w-0 flex-1">
        <p className="text-xl font-bold text-on-surface transition-colors duration-300 group-hover:text-primary">
          {categoria.nome}
        </p>
      </div>

      <div className="relative z-20 flex items-center gap-2">
        <button
          type="button"
          title="Editar categoria"
          onClick={() => navigate(`/editarcategoria/${categoria.id}`)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary border border-transparent hover:border-letra-700 hover:border-4  shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          <PencilIcon size={22} weight="fill" />
        </button>

        <button
          type="button"
          title="Deletar categoria"
          onClick={() => navigate(`/deletarcategoria/${categoria.id}`)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary border border-transparent hover:border-letra-700 hover:border-4 shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 cursor-pointer"
        >
          <TrashIcon size={22} weight="fill" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default CardCategorias;