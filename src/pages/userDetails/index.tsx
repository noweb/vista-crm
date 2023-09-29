import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

export function UserDetails() {
    const navigate = useNavigate()

    const [bar, setBart] = useState('usuario')
    const [image, setImage] = useState('')

    function onImageChange(event: any) {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="flex">
            <Sidebar />
            <div className="container mx-auto px-6 py-5">
                <h1 className="text-2xl font-bold text-gray-900">RENATO DANTAS</h1>
                <div className="container mx-auto py-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-10">
                            <button
                                onClick={() => setBart('usuario')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'usuario' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Cliente
                            </button>

                            <button
                                onClick={() => setBart('acesso')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'acesso' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Acesso </button>

                            <button
                                onClick={() => setBart('informações')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'informações' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Mais informações </button>
                            <button
                                onClick={() => setBart('documentos')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'documentos' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Documentos em anexo </button>
                            <button
                                onClick={() => setBart('imagem')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'imagem' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Imagem de perfil do usuário </button>

                            <button
                                onClick={() => setBart('senha')}
                                className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'senha' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                Senha de acesso </button>
                        </nav>
                    </div>



                </div>
                <form action="">
                    <div className="space-y-8">
                        {
                            bar === 'usuario' &&
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nome: </label>
                                        <input type="text" name="" id="" placeholder="Nome" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nome completo </label>
                                        <input type="text" name="" id="" placeholder="Nome completo" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> RG </label>
                                        <input type="text" name="" id="" placeholder="RG" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Emissor </label>
                                        <input type="text" name="" id="" placeholder="Emissor" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Agência </label>
                                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Agência" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Código </label>
                                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Código" disabled className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Data: </label>
                                        <input type="date" name="task_limit_date" id="task_limit_date" placeholder="Agência" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Data saída </label>
                                        <input type="date" name="task_limit_date" id="task_limit_date" placeholder="Código" disabled className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> CPF </label>
                                        <input type="text" name="" id="" placeholder="CPF" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nascimento </label>
                                        <input type="date" name="" id="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Nacionalidade </label>
                                        <input type="text" name="" id="" placeholder="Nacionalidade" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Estado civil </label>
                                        <input type="text" name="" id="" placeholder="Estado civil" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Sexo </label>
                                        <input type="text" name="" id="" placeholder="Sexo" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Celular </label>
                                        <input type="text" name="" id="" placeholder="Celular" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Celular 1 </label>
                                        <input type="text" name="" id="" placeholder="Celular 1" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Celular 2 </label>
                                        <input type="text" name="" id="" placeholder="Celular 2" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> CNH </label>
                                        <input type="text" name="" id="" placeholder="CNH" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Expedição </label>
                                        <input type="text" name="" id="" placeholder="Expedição" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600">  Vencimento </label>
                                        <input type="text" name="" id="" placeholder="Vencimento" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> CRECI </label>
                                        <input type="text" name="" id="" placeholder="CRECI" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex gap-3">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600">Área de atuação:</label>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Atuação em venda</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Atuação em locação</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex">
                                    <div className="flex gap-3">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600">Classificação:</label>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Administrativo</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Gerente</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Corretor</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Agenciador</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Inativo</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }

                        {
                            bar === 'acesso' &&
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> E-mail </label>
                                        <input type="email" name="" id="" placeholder="E-mail" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Senha </label>
                                        <input type="password" name="" id="" placeholder="Senha" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Grupo de acesso </label>
                                        <select name="" id="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
                                            <option value="">Administrativo</option>
                                            <option value="">Corretores</option>
                                            <option value="">Corretores - Externo</option>
                                            <option value="">Gerentes</option>
                                        </select>
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Equipe </label>
                                        <select name="" id="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600">
                                            <option value="" disabled>Nenhum resultado encontrado</option>
                                        </select>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">Configurar abaixo apenas se utilizar chave para controle de acesso fora da Empresa</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-1 col-span-2 gap-x-4 gap-y-5">

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Grupo de acesso fora da Empresa: </label>
                                        <select name="" id="" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required>
                                            <option value="">Administrador do sistema</option>
                                            <option value="">Administrativo</option>
                                            <option value="">Corretores</option>
                                            <option value="">Corretores - Externo</option>
                                            <option value="">Gerentes</option>
                                        </select>
                                    </div>

                                    <span>(Dica: configure o grupo que contém a palavra "externo")</span>
                                </div>
                            </div>
                        }

                        {
                            bar === 'informações' &&
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Endereço </label>
                                        <input type="text" name="" id="" placeholder="Endereço" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Bairro </label>
                                        <input type="text" name="" id="" placeholder="Bairro" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cidade </label>
                                        <input type="text" name="" id="" placeholder="Bairro" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> UF </label>
                                        <input type="text" name="" id="" placeholder="UF" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> CEP </label>
                                        <input type="text" name="" id="" placeholder="CEP" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>

                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> País </label>
                                        <input type="text" name="" id="" placeholder="País" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Fone </label>
                                        <input type="text" name="" id="" placeholder="Fone" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Fax </label>
                                        <input type="text" name="" id="" placeholder="Fax" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-1 col-span-2 gap-x-4 gap-y-5">
                                    <div className="col-span-1">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Ramal </label>
                                        <input type="text" name="" id="" placeholder="Ramal" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                    </div>


                                </div>
                                <div className="flex gap-3">
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Exibir no site</label>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Recebe Clientes em Troca automática</label>
                                    </div>
                                </div>
                                <textarea name="" id="" placeholder="Ramal" className="mt-2 border h-[100px] resize-none block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                            </div>

                        }

                        {
                            bar === 'documentos' &&
                            <div className="bg-slate-600 text-white rounded-md px-3 py-2 text-base">
                                Nenhum Anexo Encontrado
                            </div>
                        }

                        {
                            bar === 'imagem' &&
                            <>

                                <div className="flex flex-col items-start ">
                                    {
                                        image && <img src={image} className="w-60 h-60" />
                                    }
                                    <div className="mt-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="small_size">Selecionar nova imagem</label>
                                        <input onChange={onImageChange} className="mt-2 border block  px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" id="small_size" type="file" />
                                    </div>
                                </div>

                            </>
                        }

                        {
                            bar === 'senha' &&
                            <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                                <div className="col-span-1">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-600"> Senha </label>
                                    <input type="password" name="" id="" placeholder="E-mail" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />

                                </div>

                                <div className="col-span-1">
                                    <label htmlFor="" className="block text-sm font-medium text-gray-600"> Confirme a senha </label>
                                    <input type="password" name="" id="" placeholder="Confirme a senha" className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                                </div>

                            </div>
                        }

                        <div className="flex items-center  mt-8 space-x-4">
                            <button onClick={() => navigate('/users')} type="reset" id="close_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900">
                                Cancelar
                            </button>

                            <button type="submit" id="save_modal_button" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                Salvar
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}