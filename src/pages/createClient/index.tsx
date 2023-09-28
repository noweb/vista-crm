import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";

export function CreateClient() {

    const [bar, setBart] = useState('cliente')

    return (
        <div className="flex">
            <Sidebar />

            <div className="container mx-auto py-5">
                <div className="mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Você está cadastrando Cliente</h1>
                </div>
                <div className="container mx-auto py-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-10">
                            <button 
                                onClick={() => setBart('cliente')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'cliente' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Cliente
                            </button>

                            <button 
                                onClick={() => setBart('dados')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'dados' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                               Dados Complementares </button>
                        </nav>
                    </div>
                </div>
                <div className="tabs">
                    <form id="form-0" className="w-[100%]">
                        <div className="space-y-8">

                            {
                                bar === 'cliente' ? (
                                    <div className="space-y-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Status </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                        </svg>
                                                    </div>

                                                    <select name="task_finished" className="mt-2 block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" required>
                                                        <option>Ativo</option>
                                                        <option>Inativado</option>
                                                        <option>Já Comprou</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Código </label>
                                                <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Código" disabled className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                            </div>

                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Interesse </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                        </svg>
                                                    </div>

                                                    <select name="task_finished" className="mt-2 block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" required>
                                                        <option>Venda</option>
                                                        <option>Locação</option>
                                                        <option>Venda e Locação</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Interesse </label>
                                                <input type="date" name="task_start_date" id="task_start_date" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                            <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-x-4 gap-y-5">
                                                    <div className="col-span-1">
                                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nome </label>
                                                        <input type="text" name="" id="" placeholder="Nome do cliente" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>

                                                    <div className="col-span-1">
                                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Veículo </label>
                                                        <input type="text" name="" id="" placeholder="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-5 col-span-2 gap-x-4 gap-y-5">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Fone princ: </label>
                                                <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Telefone" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                            </div>

                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Res </label>
                                                <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Residencial" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                            </div>

                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cml </label>
                                                <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Cml" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Ramal </label>
                                                <input type="text" name="task_start_date" id="task_start_date" placeholder="Ramal" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="" className="block text-sm font-medium text-gray-600"> Celular </label>
                                                <input type="text" name="task_start_date" id="task_start_date" placeholder="Celular" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                            <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-x-4 gap-y-5">
                                                    <div className="col-span-1">
                                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> E-mail </label>
                                                        <input type="text" name="" id="" placeholder="E-mail do cliente" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>

                                                    <div className="col-span-1">
                                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Data de Nascimento: </label>
                                                        <input type="date" name="" id="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                            <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                <div className="grid grid-cols-1  gap-x-4 gap-y-5">
                                                    <div className="col-span-1">
                                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Regime de Casamento:</label>
                                                        <input type="text" name="" id="" placeholder="Regime de Casamento" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8 ">
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-gray-900">Dados do Cônjuge</h2>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cônjuge </label>
                                                            <input
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Cônjuge"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Data Nasc. Cônjuge</label>
                                                            <input
                                                                required
                                                                type="date"
                                                                name=""
                                                                id=""
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Celular </label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Celular"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cml</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Cml"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> E-mail</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="E-mail"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-8 ">
                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> RG: </label>
                                                            <input
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="RG:"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Emissor</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Emissor"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> CPF/CNPJ</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="CPF/CNPJ"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Profissão </label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Profissão"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Est. Civil</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Est. Civil"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nacionalidade</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Nacionalidade"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="space-y-8 ">
                                            <div className="">
                                                <h4 className="text-2xl font-bold text-gray-900">Dados do Conjuge</h4>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> RG: </label>
                                                            <input
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="RG:"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Emissor</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Emissor"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> CPF/CNPJ</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="CPF/CNPJ"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Profissão </label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Profissão"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>



                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nacionalidade Cônjuge</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Nacionalidade Cônjuge"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="space-y-8 ">
                                            <div className="">
                                                <h4 className="text-2xl font-bold text-gray-900">Endereço</h4>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Logradouro </label>
                                                            <input
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Logradouro"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Bairro</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="Bairro"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-5 sm:gap-5 sm:items-start">
                                                <div className="mt-2 sm:mt-0 sm:col-span-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cidade </label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name="date_follow"
                                                                id="date_follow"
                                                                placeholder="Cidade"

                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>



                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> CEP</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="CEP"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <label htmlFor="" className="block text-sm font-medium text-gray-600"> UF</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                placeholder="UF"
                                                                className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 items-center">
                                                <div className="flex gap-3">
                                                    <input type="checkbox" name="" id="" />
                                                    <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cidade </label>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input type="checkbox" name="" id="" />
                                                    <label htmlFor="" className="block text-sm font-medium text-gray-600"> Proprietario </label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }





                            <div className="mt-6 sm:mt-12">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus-visible:border-indigo-600 hover:bg-indigo-500"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}