import { Sidebar } from "../../components/Sidebar";

export function PendingProperties(){
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <div className="mx-auto max-w-7xl py-10">
                <div className="mt-6 ring-1 ring-gray-300 rounded-2xl">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200 ">
                            <thead className="hidden lg:table-header-group">
                                <tr>

                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Codigo</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Categoria</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco Numero</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Dormitorio</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Valor venda</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Valor Aluguel</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Bairro</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Empreendimento</td>

                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Salas</td> */}

                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Ano de construcao</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Area Total</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Area Privativa</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">CEP</td> */}





                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        89898009
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       23/09/2023
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Venda
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td  className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>

                        <div className="py-6 bg-gray-50 w-full rounded-b-2xl">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                                    <p className="text-sm font-medium text-gray-500">Mostrando do 1 ao 20 de 483 resultados</p>

                                    <nav className="relative mt-6 lg:mt-0 flex justify-end space-x-1.5">
                                        <a href="#" title="" className="inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-9">
                                            <span className="sr-only"> Previous </span>
                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </a>

                                        <a href="#" title="" aria-current="page" className="inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-900 bg-gray-100 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-9"> 1 </a>

                                        <a href="#" title="" className="inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-9"> 2 </a>

                                        <a href="#" title="" className="inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-9">
                                            <span className="sr-only"> Next </span>
                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}