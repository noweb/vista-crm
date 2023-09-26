import { BarChart4, Bell, Building, Building2, CalendarCheck2, CopyPlus, FileCode, HelpCircle, ShoppingCart, UserCog2, UserPlus, Users, Volume2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';


export function Sidebar() {
    const { pathname } = useLocation()

    return (
        <div className="hidden xl:flex xl:w-64 xl:flex-col bg-gray-900 min-h-screen">
            <div className="flex flex-col pt-5 overflow-y-auto">
                <div className="flex flex-col justify-between flex-1 h-full px-4">
                    <div className="space-y-4">
                        <div>
                            <a href="create-client" type="button" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/create-client' ? 'bg-indigo-600' : ''}`}>
                                <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Cadastrar Novo Cliente
                            </a>
                        </div>
                        <nav className="flex-1 space-y-1">
                            <a href="/dashboard" title="home"
                                className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/dashboard' ? 'bg-indigo-600' : ''}`}>
                                <svg className="flex-shrink-0 w-5 h-5 mr-4 stroke-white  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Dashboard
                            </a>

                            <a href="/properties" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/properties' ? 'bg-indigo-600' : ''}`}>
                                <Building width={20} height={20} className='mr-4' />
                                Imóveis
                            </a>
                            <a href="/clients" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/clients' ? 'bg-indigo-600' : ''}`}>
                                <Users width={20} height={20} className='mr-4' />
                                Clientes
                            </a>
                            <a href="/owners" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/owners' ? 'bg-indigo-600' : ''}`}>
                            <UserCog2 width={20} height={20} className='mr-4'/>
                                Proprietarios
                            </a>
                        </nav>



                        <div>
                            <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Imóveis</p>
                            <nav className="flex-1 mt-4 space-y-1">
                                <a href="#" title="" className="flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <UserPlus width={20} height={20} className='mr-4'/>
                                    Cadastro completo
                                </a>

                                <a href="#" title="" className="flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <CopyPlus width={20} height={20} className='mr-4'/>
                                    Cadastro rápido
                                </a>
                                <a href="#" title="" className="flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <Building2 width={20} height={20} className='mr-4'/>
                                    Imóveis pendentes <span className="text-xs uppercase ml-auto font-semibold text-white bg-gray-500 border border-transparent rounded-full inline-flex items-center px-2 py-0.5"> 5 </span>
                                </a>
                            </nav>
                        </div>

                        <nav className="flex-1 space-y-1">
                            <a href="#" title="home" className="flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <FileCode width={20} height={20} className='mr-4'/>
                                Contratos
                            </a>

                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <Users width={20} height={20} className='mr-4'/>
                                Equipes
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                              <Bell width={20} height={20} className='mr-4'/>
                                Lembretes
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <ShoppingCart width={20} height={20} className='mr-4'/>
                                Marketplace
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <BarChart4 width={20} height={20} className='mr-4'/>
                                Métricas de dados 
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <CalendarCheck2 width={20} height={20} className='mr-4'/>
                                Plantões
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <Volume2 width={20} height={20} className='mr-4'/>
                                Publicação de imóveis
                            </a>
                            <a href="#" title="tasks" className="mt-4 text-white flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ">
                            <Users width={20} height={20} className='mr-4'/>
                                Usúarios
                            </a>
                        </nav>

                    </div>

                    <div className="pb-4 mt-12">
                        <nav className="flex-1 space-y-1">
                            <a href="/settings" title="" className="flex items-center px-4 text-white py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4 stroke-white   " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Configurações
                            </a>

                            <a href="#" title="" className="flex items-center px-4 text-white py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <HelpCircle width={20} height={20} className='mr-4' />
                                Ajuda e Serviços
                            </a>

                            <a href="/" title="" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white   rounded-lg hover:bg-gray-200 group">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4 stroke-white  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Deslogar
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}