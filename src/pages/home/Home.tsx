import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"

function Home() {

  return (
    <>
      <div className="flex flex-col bg-letra-700 justify-center items-center">

        <div className="container grid grid-cols-1 md:grid-cols-2 text-clara-50">

          <div className="flex flex-col gap-4 items-center justify-center py-4" >
            <h2 className="text-5xl font-bold">Seja Bem-Vinde!</h2>

            <p className="text-xl">Pagar caro em remédio cansa, né? <p className="text-clara-50">Aqui você encontra economia de verdade.</p></p>

            <div className="flex justify-around gap-4">
              

            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/eosfuraqd/Pharmacist-bro.svg"
              alt="Imagem da pagina home"
              className="w-2/3" />
          </div>

        </div>
        <ListaProdutos/>
      </div>
      
    </>
  )
}

export default Home