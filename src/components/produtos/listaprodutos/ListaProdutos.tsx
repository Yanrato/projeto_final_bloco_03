import { PlusIcon } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { buscar } from '../../../service/Service';
import type Produtos from '../../../models/Produto';
import { SyncLoader } from 'react-spinners';
import CardProdutos from '../cardprodutos/CardProdutos';

function ListaProdutos() {
		const navigate = useNavigate();

	// Estado responsavel por controlar o loader (animação de carregamento)
const [isLoading, setIsLoading] = useState<boolean>(false);

const [produto, setProduto] = useState<Produtos[]>([])


	useEffect(() => {
		buscarProdutos();
	}, [produto.length]);

	async function buscarProdutos() {
		try {
			setIsLoading(true);

			await buscar('/produtos', setProduto)
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				alert(`Erro ao consultar os produtos: ${error.response.status}`);
				navigate('/produtos')
			}
		} finally {
			setIsLoading(false);
		}
	}
  return (
    <main className="grow w-full mt-10 rounded-3xl max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-8 bg-brand-200 ">
      <div className="flex justify-between gap-2">
				<h1 className="text-3xl md:text-4xl font-semibold text-letra-700">
					Produtos
				</h1>
				<Link
					to={`/cadastrarproduto`}
					className="flex items-center gap-2 bg-brand-500 text-clara-50 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-letra-700 transition-colors w-fit"
				>
					<PlusIcon size={18} />
					Novo Produto
				</Link>
			</div>

{isLoading && (
				<div className="flex justify-center w-full items-center">
					<SyncLoader color="#1A4A38" size={22} />
				</div>
			)}
			{(!isLoading && produto.length === 0) && (
				<span className="text-3xl text-center my-8">
					Nenhum Produto foi encontrado!
				</span>
			)}

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-stretch lg:grid-cols-4 gap-4 md:gap-6">
        {
					produto.map((produtos) => (
						<CardProdutos
							key={produtos.id}
							produto={produtos}
						/>
					))
				}
      </div>
    </main>
  );
}

export default ListaProdutos