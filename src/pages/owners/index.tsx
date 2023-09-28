import { PlusCircle } from "lucide-react";
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
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-xl font-bold text-gray-900">Gerenciar Proprietarios</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                </div>

                                <div className="flex items-center justify-start mt-4 sm:justify-end sm:mt-0 sm:space-x-7">
                                    <button onClick={() => setModal(true)} type="button" className="flex items-center gap-2 px-3 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <PlusCircle />
                                        Cadastrar novo proprietario
                                    </button>


                                </div>
                            </div>

                            <div className="flex flex-col mt-4 lg:mt-8">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <table className="min-w-full lg:divide-gray-200 lg:divide-y">
                                            <thead className="hidden lg:table-header-group">
                                                <tr>

                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Nome/Denominacao</th>

                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Fone principal</th>

                                                    <th className="py-3.5 px-4 text-left hidden xl:table-cell text-xs uppercase tracking-widest font-medium text-gray-500">Fone residencial</th>

                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Fone comercial</th>
                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                        Celular
                                                    </th>
                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                        Imóveis do proprietário
                                                    </th>
                                                    <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">
                                                        Nº de imóveis
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="bg-white">
                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                            </svg>
                                                            SÉRGIO CASTANHO
                                                        </div>
                                                    </td>

                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                            </svg>
                                                            (11) 97562.1427
                                                        </div>
                                                    </td>

                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                            15608
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">  (11) 97562.1427</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">  (11) 97562.1427</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">
                                                        15608, 15608, 15608
                                                    </td>

                                                    <td className="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                        13
                                                    </td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                            </svg>
                                                            SÉRGIO CASTANHO
                                                        </div>
                                                    </td>

                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                            </svg>
                                                            (11) 97562.1427
                                                        </div>
                                                    </td>

                                                    <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                            15608
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">  (11) 97562.1427</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">  (11) 97562.1427</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">
                                                        15608, 15608, 15608
                                                    </td>

                                                    <td className="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                        13
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
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
                                                        Cencelar
                                                    </button>

                                                    <button type="submit" id="save_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                                        Adicionar
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