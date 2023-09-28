import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { PlusCircle } from "lucide-react";

export function Team() {
    const [modal, setModal] = useState(false);
    const [goals, setGoals] = useState(false)

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 relative">
                <div className="mx-auto max-w-7xl py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Equipes</h1>


                    <div className="mt-10 flex items-center justify-between">
                        <form action="">
                            <input type="text" className="block w-80 px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" placeholder="Pesuisar" required />
                        </form>

                        <button onClick={() => setModal(true)} type="button" className="flex items-center gap-2 px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <PlusCircle />
                            Adicionar equipe
                        </button>
                    </div>

                    <div className="mt-6 ring-1 ring-gray-300 rounded-2xl">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200 ovex">
                            <thead className="hidden lg:table-header-group">
                                <tr>

                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Equipe</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Gerente</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Diretor</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Status</td>

                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Web
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       Barbara
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                    Barbara
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       Ativo
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
                                        <p className="text-xl font-bold text-gray-900">Adicionar equipe</p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">...</p>

                                        <form className="mt-6 space-y-4">


                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Equipe </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Equipe" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Gerente </label>
                                                    <div className="mt-2">
                                                        <input type="text" name="" id="" placeholder="Gerente" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Diretor </label>
                                                    <div className="mt-2">
                                                        <select name="" id="" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
                                                            <option value="Arthur Chavenco">Arthur Chavenco</option>
                                                            <option value="Barbara">Barbara</option>
                                                            <option value="flávio veloso">Flávio Veloso</option>
                                                            <option value="lucas nape">Lucas Nape</option>
                                                            <option value="pedro nape">Pedro Nape</option>
                                                            <option value="yasmin lima">yasmin lima</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Status </label>
                                                    <div className="mt-2">
                                                        <select name="" id="" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
                                                            <option value="Arthur Chavenco">Ativo</option>
                                                            <option value="Barbara">Inativo</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex items-center justify-between mt-5">
                                                <h3 className="text-xl text-gray-900">Metas</h3>
                                                <button onClick={() => setGoals(true)} type="button" className="bg-green-600 px-6 py-2  text-sm font-semibold leading-5 text-white border border-transparent rounded-md  transition-all duration-200 hover:bg-green-500">Criar</button>
                                            </div>
                                            <hr />

                                            {
                                                goals &&

                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <h4>Criar meta</h4>

                                                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold  text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900" onClick={() => setGoals(false)}>X</button>
                                                    </div>

                                                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-5">
                                                        <div>
                                                            <label htmlFor="" className="text-sm font-bold text-gray-900"> Atuação </label>
                                                            <div className="mt-2">
                                                                <select name="" id="" placeholder="Equipe" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required>

                                                                    <option value="venda">venda</option>
                                                                    <option value="Locação">Locação</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-sm font-bold text-gray-900"> Modalidade </label>
                                                            <div className="mt-2">
                                                                <select name="" id="" placeholder="Equipe" className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" >
                                                                    <option value="Geral">Geral</option>
                                                                    <option value="Pessoal">Pessoal</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-5">
                                                        <div>
                                                            <label htmlFor="" className="text-sm font-bold text-gray-900"> Tipo </label>
                                                            <div className="mt-2 flex items-center gap-3">
                                                                <div className="flex items-center gap-3">
                                                                    <input type="radio" name="tipo" id="simples" />
                                                                    <label htmlFor="simples">Simples</label>
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <input type="radio" name="tipo" id="Variável" />
                                                                    <label htmlFor="Variável">Variável</label>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-5">
                                                        <div>
                                                            <label htmlFor="" className="text-sm font-bold text-gray-900"> Captações mês </label>
                                                            <div className="mt-2">
                                                                <input type="text" name="" id="" placeholder="Quantidade..." className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-sm font-bold text-gray-900"> Receita (R$) mês </label>
                                                            <div className="mt-2">
                                                                <input type="text" name="" id="" placeholder="Valor..." className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            <div className="flex items-center justify-end mt-8 space-x-4">
                                                <button onClick={() => setModal(false)} type="reset" id="close_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900">
                                                    Cencelar
                                                </button>

                                                <button type="submit" id="save_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                                    Salvar equipe
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