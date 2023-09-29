import { BarChart4, Bell, Building, Building2, CalendarCheck2, CopyPlus, FileCode, HelpCircle, ShoppingCart, UserCog2, UserPlus, Users, Volume2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export function Sidebar() {
    const { pathname } = useLocation()

    return (
        <div className="hidden xl:flex xl:w-64 xl:flex-col bg-gray-900 min-h-screen">
            <div className="flex flex-col pt-5 overflow-y-auto">
                <div className="flex flex-col justify-between flex-1 h-full px-4">
                    <div className="space-y-4">
                        <div>
                            <Link to="/create-client" type="button" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/create-client' ? 'bg-indigo-600' : ''}`}>
                                <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Cadastrar Novo Cliente 
                            </Link>
                        </div>
                        <nav className="flex-1 space-y-1">
                            <Link to="/dashboard" title="home"
                                className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/dashboard' ? 'bg-indigo-600' : ''}`}>
                                <svg className="flex-shrink-0 w-5 h-5 mr-4 stroke-white  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Dashboard
                            </Link>

                            <Link to="/properties" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/properties' ? 'bg-indigo-600' : ''}`}>
                                <Building width={20} height={20} className='mr-4' />
                                Imóveis
                            </Link>
                            <Link to="/clients" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/clients' || pathname === '/details-client' ? 'bg-indigo-600' : ''}`}>
                                <Users width={20} height={20} className='mr-4' />
                                Clientes
                            </Link>
                            <Link to="/owners" title="tasks" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/owners' ? 'bg-indigo-600' : ''}`}>
                            <UserCog2 width={20} height={20} className='mr-4'/>
                                Proprietarios
                            </Link>
                        </nav>



                        <div>
                            <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Imóveis</p>
                            <nav className="flex-1 mt-4 space-y-1">
                                <Link to="/complete-registration" title="" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/complete-registration' ? 'bg-indigo-600' : ''}`}>
                                <UserPlus width={20} height={20} className='mr-4'/>
                                    Cadastro completo
                                </Link>

                                <Link to="#" title="" className="flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group   ">
                                <CopyPlus width={20} height={20} className='mr-4'/>
                                    Cadastro rápido
                                </Link>
                                <Link to="/pending-properties" title="" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/pending-properties' ? 'bg-indigo-600' : ''}`}>
                                <Building2 width={20} height={20} className='mr-4'/>
                                    Imóveis pendentes <span className="text-xs uppercase ml-auto font-semibold text-white bg-gray-500 border border-transparent rounded-full inline-flex items-center px-2 py-0.5"> 5 </span>
                                </Link>
                            </nav>
                        </div>

                        <nav className="flex-1 space-y-1">
                            <a href="/contracts" title="home" className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/contracts' ? 'bg-indigo-600' : ''}`}>
                            <FileCode width={20} height={20} className='mr-4'/>
                                Contratos
                            </a>

                            <a href="/team"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/team' ? 'bg-indigo-600' : ''}`}>
                            <Users width={20} height={20} className='mr-4'/>
                                Equipes
                            </a>
                            <a href="/sticky-notes"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/sticky-notes' ? 'bg-indigo-600' : ''}`}>
                              <Bell width={20} height={20} className='mr-4'/>
                                Lembretes
                            </a>
                            <a href="/marketplace"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/marketplace' ? 'bg-indigo-600' : ''}`}>
                            <ShoppingCart width={20} height={20} className='mr-4'/>
                                Marketplace
                            </a>
                            <a href="/data-metrics"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/data-metrics' ? 'bg-indigo-600' : ''}`}>
                            <BarChart4 width={20} height={20} className='mr-4'/>
                                Métricas de dados 
                            </a>
                            <a href="/plantation"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/plantation' ? 'bg-indigo-600' : ''}`}>
                            <CalendarCheck2 width={20} height={20} className='mr-4'/>
                                Plantões
                            </a>
                            <a href="/publishing-properties"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/publishing-properties' ? 'bg-indigo-600' : ''}`}>
                            <Volume2 width={20} height={20} className='mr-4'/>
                                Publicação de imóveis
                            </a>
                            <a href="/users"  className={`flex text-white items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group  ${pathname === '/users' || pathname === '/user-details' ? 'bg-indigo-600' : ''}`}>
                            <Users width={20} height={20} className='mr-4'/>
                                Usúarios
                            </a>
                        </nav>

                    </div>

                    <div className="pb-4 mt-12">
                        <nav className="flex-1 space-y-1">
                          

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