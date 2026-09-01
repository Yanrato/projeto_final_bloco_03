import { WarningCircleIcon } from '@phosphor-icons/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, deletar } from '../../../service/Service';
import { ClipLoader } from 'react-spinners';
import type Produto from '../../../models/Produto';

function DeletarProduto() {
	
	const navigate = useNavigate();


	const [isLoading, setIsLoading] = useState<boolean>(false);


	const [produto, setProduto] = useState<Produto>({} as Produto);

	const { id } = useParams<{ id: string }>();

	async function buscarProdutoPorId() {

		setIsLoading(true);

		try {

			await buscar(`/produtos/${id}`, setProduto)

		} catch (error) {
			if (axios.isAxiosError(error)) {
				alert(`Erro ao consultar o Produto: ${error.response?.status}`);
				if (error.response?.status === 401) {
					retornar();
				}
			}
			return;
		} finally {
			setIsLoading(false);
		}

	}

	useEffect(() => {
		if (id !== undefined) {
			buscarProdutoPorId();
		}
	}, [id])



	async function deletarProduto() {

		setIsLoading(true);

		try {

			await deletar(`/produtos/${id}`)

			alert('Produto deletado com sucesso!')
			navigate('/produtos')

		} catch (error) {
			if (axios.isAxiosError(error)) {
				alert(`Erro ao deletar o Produto: ${error.response?.status}`);
				if (error.response?.status === 401) {
					retornar();
				}
			}
		} finally {
			setIsLoading(false);
		}

	}
	function retornar() {
		navigate("/produtos");
	}



	return (
		<main className="grow w-full max-w-xl mx-auto px-4 md:px-8 py-24 md:py-28 flex flex-col font-semibold gap-8">
			<div className="flex flex-col items-center text-center gap-3 bg-fundo-100 border border-slate-200 rounded-lg p-8">
				<div className="flex items-center justify-center w-14 h-14 rounded-full bg-clara-50 text-red-600">
					<WarningCircleIcon size={32} />
				</div>
				<h1 className="text-2xl font-semibold text-slate-800">
					Excluir Produto
				</h1>

				<p className="text-base text-slate-800">
					Tem certeza que deseja excluir o Produto{' '}
					<span className="font-semibold text-slate-800">
						{produto.nome}
					</span>
					?
				</p>

				<div className="flex items-center justify-center gap-3 mt-4">
					<button onClick={deletarProduto} className="bg-green-600 text-white text-base px-6 py-3 rounded-lg hover:bg-green-800 transition-colors ">
						{
							isLoading ? (
								<ClipLoader
									color="#ffffff"
									size={24}
								/>
							) : (
								<span>Sim</span>
							)
						}

					</button>
					<button onClick={retornar} className="bg-red-300 hover:text-white border-red-900 text-slate-700  hover:bg-red-700 text-base px-6 py-3 rounded-lg border transition-colors ">
						Não
					</button>
				</div>
			</div>
		</main>
	)

}
export default DeletarProduto
