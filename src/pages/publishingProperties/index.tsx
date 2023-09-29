import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";

type propsInfo = {
    title: string,
    email?: string,
    phone?: string,
    message?: string
}

export function PublishingProperties() {

    const [info, setInfo] = useState<propsInfo>()

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Publicação de Imóveis</h1>

                    <div className="mt-4 bg-slate-500 w-full flex justify-between items-center rounded-lg text-white py-5 px-4">
                        <div className="flex flex-col gap-2">
                            <span>Estamos melhorando o processo de integração</span>
                            <Link to="#" className="underline text-sm">
                                Saiba mais!
                            </Link>
                        </div>
                        <Link to="#" className="hover:underline text-sm">
                            OK, JÁ ENTENDI
                        </Link>
                    </div>

                    <div className="flex flex-col mt-5 gap-3">
                        <h4 className="text-xl text-slate-900">Relatórios dos últimos 30 dias.</h4>
                        <p className="text-slate-700">Estes relatórios são de portais com arquivo XML e foram gerados automaticamente pelo Vista.</p>
                    </div>

                    <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200">
                            <thead className="hidden lg:table-header-group">
                                <tr>
                                    <td className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Portal</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Data</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Hora</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Status</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Mensagem</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Data Envio</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Hora Envio</td>


                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr onClick={() => 
                                    setInfo({
                                        title: 'Mercado Livre',
                                        email: ' Willian(ext_wilemos@mercadolivre.com), Priscila(priscila.bueno@mercadolivre.com) e Felipe(ext_freis@mercadolivre.com)',
                                    })
                                } className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Mercado Livre
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        29/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        01:15:30
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Enviado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Imóvel 17181: o campo 'Endereco Numero' deve ser informado. ...
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        21:59:46
                                    </td>
                                </tr>
                                <tr onClick={() => setInfo({title: 'TiqueImoveis', email: 'Comercial: sati@tiqueimoveis.com.br, Técnico: jrodrigues@tiqueimoveis.com.br',phone: ' (11) 3064.2222 | (11) 3522.8447',
                                        message: "Imóvel 17181: o campo 'Endereco Numero' deve ser informado."
                                    })
                                } className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        TiqueImoveis
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        29/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        01:15:30
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Enviado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Imóvel 17181: o campo 'Endereco Numero' deve ser informado. ...
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        21:59:46
                                    </td>
                                </tr>
                                <tr onClick={() => setInfo({title: 'OLX'})} className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        OLX
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        29/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        01:15:30
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Enviado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Imóvel 17181: o campo 'Endereco Numero' deve ser informado. ...
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        28/09/2023
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        21:59:46
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


                    {
                        info?.title &&
                        <>
                            <div className="mt-5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="text-slate-900 text-lg">{info.title}</h3>
                                    <p className="text-sm text-slate-700">Responsáveis: {info.email}</p>
                                </div>
                                <p className="text-slate-700">Fone: {info.phone}</p>
                            </div>

                            <div className="mt-5 flex flex-col gap-2">
                                <p>Mensagens geradas nesta carga:</p>

                                <div className="bg-slate-500 w-full rounded-lg p-3 h-[100px] text-white text-sm">
                                  {info.message}
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
