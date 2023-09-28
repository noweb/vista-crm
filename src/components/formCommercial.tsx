export function FormCommercial() {
    const date = new Date();
    const day = String(date.getDay() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear()

    return (
        <form action="">
            <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-x-4 gap-y-5">
                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Código </label>
                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Código" disabled className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Categoria </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>

                            <select name="task_finished" className="mt-2 block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" required>
                                <option value="area">Área</option>
                                <option value="box">Box</option>
                                <option value="casa/sobrado comercial">Casa/Sobrado Comercial</option>
                                <option value="galpão">Galpão</option>
                                <option value="loja">Loja</option>
                                <option value="Pavilhão">Pavilhão</option>
                                <option value="Ponto Comercial">Ponto Comercial</option>
                                <option value="Predio Comercial">Predio Comercial</option>
                                <option value="Salão">Salão</option>
                                <option value="Salas/Conjuntos">Salas/Conjuntos</option>
                                <option value="Sobrado Comercial">Sobrado Comercial</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Data de cadastro </label>
                        <input type="text" name="" id="" disabled value={`${day}/${month}/${year}`} className="mt-2 block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Atualização </label>
                        <input type="text" name="" id="" disabled value={`${day}/${month}/${year}`} className="mt-2 block w-full px-4 py-3 placeholder-gray-500 border -gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>
                </div>

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
                                <option value="Alugado imobiliaria">Alugado imobiliaria</option>
                                <option value="Alugaado terceiros">Alugaado terceiros</option>
                                <option value="Aluguel">Aluguel</option>
                                <option value="Pendente">Pendente</option>
                                <option value="Suspenso">Suspenso</option>
                                <option value="Venda">Venda</option>
                                <option value="Venda e aluguel">Venda e aluguel</option>
                                <option value="Vendido imobiliaria">Vendido imobiliaria</option>
                                <option value="Vendido terceiros">Vendido terceiros</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> Cidade </label>
                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="Cidade"  className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> UF </label>
                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="UF"  className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="" className="block text-sm font-medium text-gray-600"> CEP </label>
                        <input type="text" name="task_limit_date" id="task_limit_date" placeholder="CEP"  className="mt-2 border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus-visible:border-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" required />
                    </div>
                </div>
            </div>
        </form>
    )
}