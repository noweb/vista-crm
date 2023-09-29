import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Contact2, PlusCircle, Search } from "lucide-react";
import { useState } from "react";

export function Plantation() {
    const [modal, setModal] = useState(false)
    return (
        <div className="flex ">
            <Sidebar />
            <div className="flex-1 relative">
                <div className="mx-auto max-w-7xl py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Plantões</h1>

                    <div className="mt-4 bg-slate-500 w-full flex justify-between items-center rounded-lg text-white py-5 px-4">
                        <span>Crie e gerencie os plantões da sua agência ou rede</span>
                        <Link to="#" className="underline text-sm">
                            OK, JÁ ENTENDI
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2 mt-5">

                        <div className="flex gap-2 items-center">
                            <div className="bg-slate-700 w-11 h-11 flex justify-center items-center text-white rounded-lg">
                                <Contact2 width={25} height={25} />
                            </div>
                            <span>Lista de plantões</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <form action="" className="w-1/2">
                                <div className="flex">
                                    <input className=" border w-full block px-4 py-3 placeholder-gray-500 border-gray-300  focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" type="text" placeholder="Pesquise por título, agência, data, horário de início ou corretor..." required />
                                    <button type="submit" className="bg-slate-700 text-white px-3">
                                        <Search width={25} height={25} />
                                    </button>
                                </div>
                            </form>

                            <button onClick={() => setModal(true)} type="button" className="flex items-center gap-2 px-3 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <PlusCircle /> Criar plantão
                            </button>
                        </div>

                    </div>
                    <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200">
                            <thead className="hidden lg:table-header-group">
                                <tr>

                                    <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Título</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Agência</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Data</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Início</td>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Teste
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Teste
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/23
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/23
                                    </td>

                                </tr>
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Teste
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Teste
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/23
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/23
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

                {
                    modal && <div className="inset-0 bg-gray-100 bg-opacity-70">
                        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

                        <div className="absolute w-full top-1/2 -translate-y-1/2">
                            <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6 z-50">
                                <div className="w-full max-w-7xl bg-white shadow-lg rounded-xl">
                                    <div className="px-4 py-5 sm:p-6">
                                        <p className="text-xl font-bold text-gray-900"> Criar plantão</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">...</p>

                                        <form className="mt-6 space-y-4">


                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Título </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Título" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Agência </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" value="NOVO STILLO NEGOCIOS IMOBILIARIOS" disabled placeholder="Agência" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                                                <div>
                                                    <input type="date" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />

                                                </div>

                                                <div>
                                                    <input type="time" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input type="checkbox" name="" id="" />
                                                    <label htmlFor="">Duplicar Plantão
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-1">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Corretores </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Corretores" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-1">
                                                <div className="flex gap-3">
                                                    <input type="checkbox" name="" id="" required />
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Exibir apenas corretores de minha agência </label>

                                                </div>
                                                <div className="flex gap-3">
                                                    <input type="checkbox" name="" id="" required />
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Ordenar aleatoriamente a lista de corretores selecionados </label>

                                                </div>
                                            </div>

                                            <div className="flex items-center justify-end mt-8 space-x-4">
                                                <button onClick={() => setModal(false)} type="reset" id="close_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900">
                                                    Cancelar
                                                </button>

                                                <button type="submit" id="save_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                                    Criar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>



        </div>
    )
}