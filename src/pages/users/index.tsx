import { Dot, KeyRound } from "lucide-react";
import { Sidebar } from "../../components/Sidebar";
import {useNavigate} from 'react-router-dom'

export function Users() {

    const navigate = useNavigate()

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Usuários</h1>

                    <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200">
                            <thead className="hidden lg:table-header-group">
                                <tr>
                                    <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"></td>

                                    <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"><KeyRound width={18} height={18} /></td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Nome</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">E-mail</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Celular</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Agencia</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Equipe</td>



                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr onClick={() => navigate('/user-details')} className="hover:bg-gray-100 duration-300 cursor-pointer">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <Dot width={25} height={25} />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        RENATO DANTAS
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        novostilloimoveis@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">

                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        novostilloimoveis@gmail.com


                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    </td>
                                </tr>
                                <tr  onClick={() => navigate('/user-details')} className="hover:bg-gray-100 duration-300 cursor-pointer">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <Dot width={25} height={25} />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        RENATO DANTAS
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        novostilloimoveis@gmail.com
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">

                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        novostilloimoveis@gmail.com


                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
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