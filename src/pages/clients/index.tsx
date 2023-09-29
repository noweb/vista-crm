import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { ArrowBigRightDash, DownloadCloud, Printer, SettingsIcon, Star, History } from "lucide-react";


export function Clients() {

    let navigate = useNavigate();


   function link(){
    navigate('/details-client')
   }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="py-12 bg-white sm:py-16 lg:py-20">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold text-gray-900">Gerenciar Clients</h1>

                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center gap-2">
                                <button type="button" title="Imprimir" className="border cursor-pointer border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                    <Printer width={20} height={20} />
                                </button>

                                <button title="Baixar selecionados" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                    <DownloadCloud width={20} height={20} />
                                </button>
                                <button title="Repassar clientes" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                    <ArrowBigRightDash width={20} height={20} />
                                </button>



                            </div>
                            <button title="Configurações" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <SettingsIcon width={20} height={20} />
                            </button>

                        </div>
                        <div className="mt-5 flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <div className="bg-green-600 w-4 h-4 rounded-sm"></div>
                                <span>Cliente Inativo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-yellow-500 w-4 h-4 rounded-sm"></div>
                                <span>Atualizado até 3 dias</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-red-600 w-4 h-4 rounded-sm"></div>
                                <span>Até 15 dias</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-slate-700 w-4 h-4 rounded-sm"></div>
                                <span>Até 21 dias</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-black w-4 h-4 rounded-sm"></div>
                                <span>Há mais de  21 dias</span>
                            </div>
                        </div>
                        <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                            <table className="min-w-full lg:divide-y lg:divide-gray-200">
                                <thead className="hidden lg:table-header-group">
                                    <tr >
                                        <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"></td>

                                        <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">
                                            <History width={20} height={20} />
                                        </td>

                                        <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Favorito</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Data cadastro</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Nome/Denominacao</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone principal</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone residencial</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone comercial</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Celular</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Status</td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">E-mail residencial</td>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    <tr onClick={link} className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <input type="checkbox" name="" id="" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                <div className="bg-green-600 border border-gray-200 text-white rounded-lg px-3 py-2">30</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <Star width={20} height={20} className="hover:text-yellow-600 transition-all duration-500" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            17/07/2018
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Mateus Arantes Silva
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Ativo
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            mateustst.silva@gmail.com
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <input type="checkbox" name="" id="" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <div className="bg-yellow-500 border border-gray-200 text-white rounded-lg px-3 py-2">30</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <Star width={20} height={20} className="hover:text-yellow-600 transition-all duration-500" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            17/07/2018
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Mateus Arantes Silva
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Ativo
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            mateustst.silva@gmail.com
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <input type="checkbox" name="" id="" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <div className="bg-red-600 border border-gray-200 text-white rounded-lg px-3 py-2">30</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <Star width={20} height={20} className="hover:text-yellow-600 transition-all duration-500" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            17/07/2018
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Mateus Arantes Silva
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Ativo
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            mateustst.silva@gmail.com
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <input type="checkbox" name="" id="" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <div className="bg-black border border-gray-200 text-white rounded-lg px-3 py-2">30</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <Star width={20} height={20} className="hover:text-yellow-600 transition-all duration-500" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            17/07/2018
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Mateus Arantes Silva
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Ativo
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            mateustst.silva@gmail.com
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <input type="checkbox" name="" id="" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <div className="bg-slate-800 border border-gray-200 text-white rounded-lg px-3 py-2">30</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            <Star width={20} height={20} className="hover:text-yellow-600 transition-all duration-500" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            17/07/2018
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Mateus Arantes Silva
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            11 99019.8825
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            Ativo
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            mateustst.silva@gmail.com
                                        </td>

                                    </tr>

                                </tbody>
                            </table>



                        </div>
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