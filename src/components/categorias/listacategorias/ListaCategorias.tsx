import { PlusIcon } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import CardCategoria from '../cardcategorias/CardCategorias'
import type Categorias from '../../../models/Categoria';
import {  useEffect, useState } from 'react';

import { buscar } from '../../../service/Service';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

export default function ListaCategorias() {
	
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	
	const [categorias, setCategorias] = useState<Categorias[]>([]);


	useEffect(() => {
		buscarCategorias();
	}, [categorias.length]);

	async function buscarCategorias() {
		try {
			setIsLoading(true);

			await buscar('/categorias', setCategorias)
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				alert(`Erro ao consultar as categorias: ${error.response.status}`);
				navigate('/login');
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<main className="grow w-full mt-10 rounded-3xl max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col gap-8 bg-brand-200 ">


			<div className="flex justify-between gap-2">
				<h1 className="text-3xl md:text-4xl font-semibold text-letra-700">
					Categorias
				</h1>

				<Link
					to={`/cadastrarcategoria`}
					className="flex items-center gap-2 bg-brand-500 text-clara-50 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-letra-700 transition-colors w-fit"
				>
					<PlusIcon size={18} />
					Nova Categoria
				</Link>
			</div>
			
			{isLoading && (
				<div className="flex justify-center w-full items-center">
					<SyncLoader color="#1A4A38" size={22} />
				</div>
			)}
			{(!isLoading && categorias.length === 0) && (
				<span className="text-3xl text-center my-8">
					Nenhuma Categoria foi encontrada!
				</span>
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

				{
					categorias.map((categoria) => (
						<CardCategoria
							key={categoria.id}
							categoria={categoria}
						/>
					))
				}

			</div>
		</main>
	)
}
