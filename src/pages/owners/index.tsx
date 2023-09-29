import { DownloadCloud, PlusCircle, Printer } from "lucide-react";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";



export function Owners() {
    const [modal, setModal] = useState(false)
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 relative">
                <div className="mx-auto max-w-7xl py-10">
                    <div className="py-12 bg-white sm:py-16 lg:py-20">
                        <div className="px-4 mx-auto  sm:px-6 lg:px-8">
                            <h1 className="text-xl font-bold text-gray-900">Gerenciar Proprietarios</h1>

                            <div className="mt-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <button type="button" title="Imprimir" className="border cursor-pointer border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                        <Printer width={20} height={20} />
                                    </button>

                                    <button title="Baixar selecionados" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                        <DownloadCloud width={20} height={20} />
                                    </button>
                                </div>
                                <button onClick={() => setModal(true)} type="button" className="flex items-center gap-2 px-3 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <PlusCircle />
                                    Cadastrar novo proprietario
                                </button>
                            </div>

                            <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                                <table className="min-w-full lg:divide-y lg:divide-gray-200">
                                    <thead className="hidden lg:table-header-group">
                                        <tr>
                                            <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"></td>



                                            <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Nome/Denominacao</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone principal</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone residencial</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Fone comercial</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Celular</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Imóveis do proprietário</td>

                                            <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Nº de imóveis</td>


                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                <input type="checkbox" name="" id="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                Agnaldo
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                12619, 12619,12619
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                1
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                <input type="checkbox" name="" id="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                Agnaldo
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                12619, 12619,12619
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                1
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">

                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                <input type="checkbox" name="" id="" />
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                Agnaldo
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                11 98156.0604
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                12619, 12619,12619
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                1
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
                {
                    modal && <div className="inset-0 bg-gray-100 bg-opacity-70">
                        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

                        <div className="absolute w-full top-1/2 -translate-y-1/2">
                            <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6 z-50">
                                <div className="w-full max-w-7xl bg-white shadow-lg rounded-xl">
                                    <div className="px-4 py-5 sm:p-6">
                                        <p className="text-xl font-bold text-gray-900">Cadastrar proprietario</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">...</p>

                                        <form className="mt-6 space-y-4">
                                            <div className="gap-4 grid grid-cols-3">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Nome </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="name" id="name" placeholder="John Doe" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Telefone principal</label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Telefone principal" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="event_user" className="text-sm font-bold text-gray-900"> Telefone residencial </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Telefone residencial" className="block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-3">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900">Telefone comercial </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Telefone comercial" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Celular </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Celular" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Imóveis do proprietário </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Imóveis do proprietário" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-1">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Nº de imóveis </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="event_price" placeholder="5" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>




                                            </div>

                                            <div className="flex items-center justify-end mt-8 space-x-4">
                                                <button onClick={() => setModal(false)} type="reset" id="close_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900">
                                                    Cancelar
                                                </button>

                                                <button type="submit" id="save_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                                    Salvar
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