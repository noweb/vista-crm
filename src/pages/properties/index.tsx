import { MoreHorizontal, Share2, File, History, AppWindow, BedSingle } from "lucide-react";
import { Sidebar } from "../../components/Sidebar";


export function Properties() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <h1 className="text-2xl font-bold text-gray-900">Imóveis</h1>
                    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
                        <div className="bg-card-1 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        </div>
                        <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pb-0 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-900 font-bold text-xl mb-2"> Retiro Morumbi</h3>
                                    <div className="flex items-center gap-3">
                                        <button>
                                            <Share2 width={18} height={18} />
                                        </button>
                                        <button>
                                            <MoreHorizontal width={18} height={18} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">Rua Antonio de Andrade Rebelo, 425<br></br>
                                    São Paulo, SP</p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <File width={18} height={18} />
                                    VENDA - SOBRADO
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-slate-900">Venda</h4>
                                    <span className="text-slate-700 text-sm">R$ 39.000.000,00</span>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 ">Iptu</h4>
                                    <span className="text-slate-700 text-sm">R$ 69.000,00</span>
                                </div>
                            </div>
                            <div className="flex border border-gray-200 gap-10 p-3 mt-4">
                                <div className="flex items-center gap-2">
                                    <button className="bg-green-600 text-white p-2 flex gap-2 items-center rounded-lg text-sm">
                                        <History width={15} height={15}/>
                                        30
                                    </button>
                                    <button className="border border-gray-200 p-3 rounded-lg">
                                    <AppWindow width={15} height={15}/>
                                    </button>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Dormitórios</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Suítes</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Vagas</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">1750 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Privativos</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">2000 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Totais</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
                        <div className="bg-card-2 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        </div>
                        <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-900 font-bold text-xl mb-2"> Mooca</h3>
                                    <div className="flex items-center gap-3">
                                        <button>
                                            <Share2 width={18} height={18} />
                                        </button>
                                        <button>
                                            <MoreHorizontal width={18} height={18} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">Rua Antonio de Andrade Rebelo, 425<br></br>
                                    São Paulo, SP</p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <File width={18} height={18} />
                                    VENDA - SOBRADO
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-slate-900">Venda</h4>
                                    <span className="text-slate-700 text-sm">R$ 39.000.000,00</span>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 ">Iptu</h4>
                                    <span className="text-slate-700 text-sm">R$ 69.000,00</span>
                                </div>
                            </div>
                            <div className="flex border border-gray-200 gap-10 p-3 mt-4">
                                <div className="flex items-center gap-2">
                                    <button className="bg-green-600 text-white p-2 flex gap-2 items-center rounded-lg text-sm">
                                        <History width={15} height={15}/>
                                        30
                                    </button>
                                    <button className="border border-gray-200 p-3 rounded-lg">
                                    <AppWindow width={15} height={15}/>
                                    </button>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Dormitórios</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Suítes</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Vagas</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">1750 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Privativos</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">2000 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Totais</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
                        <div className="bg-card-3 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        </div>
                        <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-900 font-bold text-xl mb-2">
                                        Alphaville</h3>
                                    <div className="flex items-center gap-3">
                                        <button>
                                            <Share2 width={18} height={18} />
                                        </button>
                                        <button>
                                            <MoreHorizontal width={18} height={18} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">Rua Antonio de Andrade Rebelo, 425<br></br>
                                    São Paulo, SP</p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <File width={18} height={18} />
                                    VENDA - SOBRADO
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-slate-900">Venda</h4>
                                    <span className="text-slate-700 text-sm">R$ 39.000.000,00</span>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 ">Iptu</h4>
                                    <span className="text-slate-700 text-sm">R$ 69.000,00</span>
                                </div>
                            </div>
                            <div className="flex border border-gray-200 gap-10 p-3 mt-4">
                                <div className="flex items-center gap-2">
                                    <button className="bg-green-600 text-white p-2 flex gap-2 items-center rounded-lg text-sm">
                                        <History width={15} height={15}/>
                                        30
                                    </button>
                                    <button className="border border-gray-200 p-3 rounded-lg">
                                    <AppWindow width={15} height={15}/>
                                    </button>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Dormitórios</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Suítes</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Vagas</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">1750 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Privativos</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">2000 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Totais</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
                        <div className="bg-card-4 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        </div>
                        <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="flex justify-between items-center">
                                    <h3 className="text-gray-900 font-bold text-xl mb-2"> Brás</h3>
                                    <div className="flex items-center gap-3">
                                        <button>
                                            <Share2 width={18} height={18} />
                                        </button>
                                        <button>
                                            <MoreHorizontal width={18} height={18} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">Rua Antonio de Andrade Rebelo, 425<br></br>
                                    São Paulo, SP</p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <File width={18} height={18} />
                                    VENDA - SOBRADO
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-slate-900">Venda</h4>
                                    <span className="text-slate-700 text-sm">R$ 39.000.000,00</span>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 ">Iptu</h4>
                                    <span className="text-slate-700 text-sm">R$ 69.000,00</span>
                                </div>
                            </div>
                            <div className="flex border border-gray-200 gap-10 p-3 mt-4">
                                <div className="flex items-center gap-2">
                                    <button className="bg-green-600 text-white p-2 flex gap-2 items-center rounded-lg text-sm">
                                        <History width={15} height={15}/>
                                        30
                                    </button>
                                    <button className="border border-gray-200 p-3 rounded-lg">
                                    <AppWindow width={15} height={15}/>
                                    </button>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Dormitórios</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Suítes</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-slate-600">6</span>
                                            <span><BedSingle width={15} height={15} /></span>
                                        </div>
                                        <span className="text-sm text-slate-900">Vagas</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">1750 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Privativos</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-900">2000 m²</span>
                                        </div>
                                        <span className="text-xs text-slate-600">Totais</span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}