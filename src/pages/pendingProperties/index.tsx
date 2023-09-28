import { BookmarkCheck, Camera, ChevronDown, DownloadCloud, MapPin, MenuIcon, MoreHorizontal, Printer, SettingsIcon, Share2, Star, Volume2, History } from "lucide-react";
import { Sidebar } from "../../components/Sidebar";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export function PendingProperties() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Imóveis pendentes</h1>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center gap-2">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex w-full justify-center gap-x-4 rounded-md bg-white pl-3  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ">
                                        <div className="flex items-center gap-1 py-2">
                                            <Star width={20} height={20} /> <span>(1)</span>
                                        </div>
                                        <div className="border border-l-slate-400 min-h-[36px] flex justify-center items-center hover:bg-gray-50">
                                            <ChevronDown />
                                        </div>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Account settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Support
                                                    </a>
                                                )}
                                            </Menu.Item>


                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <button type="button" title="Imprimir" className="border cursor-pointer border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <Printer width={20} height={20} />
                            </button>
                            <button title="Adicionar ao bookmark de cliente" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <BookmarkCheck width={20} height={20} />
                            </button>
                            <button title="Baixar selecionados" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <DownloadCloud width={20} height={20} />
                            </button>
                            <button title="Gerenciar imóveis em massa nos portais e no site" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <Volume2 width={20} height={20} />
                            </button>
                            <button title="Compartilhamento redes sociais" type="button" className="border border-gray-200 text-white rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center bg-[#2d3644]">
                                <Share2 width={20} height={20} />
                            </button>



                        </div>
                        <div className="flex items-center gap-3">
                            <button title="Exibição padrão" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <MoreHorizontal width={20} height={20} />
                            </button>
                            <button title="Exibição compacta" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <MenuIcon width={20} height={20} />
                            </button>
                            <button title="Exibição em mapa" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <MapPin width={20} height={20} />
                            </button>
                            <button title="Configurações" className="border border-gray-200 rounded-lg px-3 py-2 min-w-[55px] flex justify-center items-center">
                                <SettingsIcon width={20} height={20} />
                            </button>
                        </div>

                    </div>
                    <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-auto">
                        <table className="min-w-full lg:divide-y lg:divide-gray-200">
                            <thead className="hidden lg:table-header-group">
                                <tr>
                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-800 whitespace-normal">

                                    </td>
                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-800 whitespace-normal">
                                        <History width={20} height={20} />
                                    </td>
                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-800 whitespace-normal">
                                        <Star width={20} height={20} />
                                    </td>
                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-800 whitespace-normal">
                                        <Camera width={20} height={20} />
                                    </td>
                                    <td width="50%" className="group-hover:bg-gray-500 px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Codigo</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Categoria</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco Numero</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Endereco</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">Dormitorio</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Valor venda</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Valor Aluguel</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Bairro</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Empreendimento</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Salas</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Ano de construcao</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Area Total</td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">Area Privativa</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">CEP</td>





                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm   whitespace-nowrap">
                                        <div className="bg-green-600 border border-gray-200 text-white rounded-lg px-3 py-2">
                                            30
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        <Star width={20} height={20} className="hover:text-yellow-400 transition-all duration-700" />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        .
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        5202
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Sobrado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Paqueta
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        12
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        4
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 900.000,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 0,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Alto da moca
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        ..
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        03170-020
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm   whitespace-nowrap">
                                        <div className="bg-green-600 border border-gray-200 text-white rounded-lg px-3 py-2">
                                            30
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        <Star width={20} height={20} className="hover:text-yellow-400 transition-all duration-700" />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        .
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        5202
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Sobrado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Paqueta
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        12
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        4
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 900.000,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 0,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Alto da moca
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        ..
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        03170-020
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 duration-300 cursor-pointer" id="product-512">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                       <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm   whitespace-nowrap">
                                        <div className="bg-green-600 border border-gray-200 text-white rounded-lg px-3 py-2">
                                            30
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        <Star width={20} height={20} className="hover:text-yellow-400 transition-all duration-700" />
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        .
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        5202
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Sobrado
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Paqueta
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        12
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        512
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        4
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 900.000,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        R$ 0,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        Alto da moca
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        ..
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        0
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        203,00
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                        03170-020
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
    )
}