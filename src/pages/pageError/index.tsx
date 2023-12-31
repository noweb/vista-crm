export function PageError() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Página não encontrada

      </h2>
      <a
        href="/"
        className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >Voltar</a>
    </div>
    )
}