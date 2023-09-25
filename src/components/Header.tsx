import { Fragment } from 'react'
import { AlertTriangle, BarChart4, Bell, ChevronDown, Grip, Hotel, LogOut, Palette, PlusCircle, Rocket, Settings, ShoppingCart, UserCircle, UserCircle2, X } from 'lucide-react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export function Header() {
    return (
        <header>
            <div className="bg-header text-white border-b border-gray-200">
                <div className="px-4 py-2 mx-auto sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between">
                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                            <a href="#" title="" className="text-base font-medium ">
                                <img src="https://crmx.novovista.com.br/tpl/templates/0/assets/svg/lib/crm3.svg" />
                            </a>

                            <a href="#" title="" className="text-base font-medium ">
                                <Grip />
                            </a>

                            <div className='h-[50px] bg-white/70 w-[1px]'>&nbsp;</div>



                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex items-center gap-2">
                                        <div className='flex items-center gap-1'>
                                            <UserCircle2 /> Clientes
                                        </div>

                                        <ChevronDown />
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
                                                {() => (
                                                    <a
                                                        href="#"
                                                        className='text-black flex items-center gap-2 px-2 py-2 text-sm'



                                                    >
                                                        <PlusCircle width={17} height={17} color='#000' />  Cadastrar Novo Cliente
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <div className='border border-t-slate-600 border-b-transparent px-4 py-2'>
                                                <h4 className='text-black text-xs'>HISTÓRICO IMÓVEIS</h4>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex items-center gap-2">
                                        <div className='flex items-center'>
                                            <Hotel /> Imóveis
                                        </div>

                                        <ChevronDown />
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
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm '
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />  Cadastro completo
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm '
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />    Cadastro rápido
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm '
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />   Imóveis pendentes 5
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <div className='border border-t-slate-600 border-b-transparent px-4 py-2'>
                                                <h4 className='text-black text-xs'>HISTÓRICO IMÓVEIS</h4>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <a href="#" title="" className="text-base font-medium flex gap-2"> <BarChart4 />  Análise de portfólio </a>

                            <div className='h-[35px] bg-white/70 w-[1px]'>&nbsp;</div>

                            <Menu as="div" className="relative inline-block text-left">
                                <div className='leading-none'>
                                    <Menu.Button className="">
                                        <PlusCircle />
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
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm '
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' /> Imóveis
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm pl-[35px]'
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />   Cadastro completo
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm pl-[35px]'
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />    Cadastro rápido
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm pl-[35px]'
                                                        )}
                                                    >
                                                        <AlertTriangle width={17} height={17} color='#f5b266' />  Imóveis pendentes 5
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        <UserCircle2 width={17} height={17} />   Cliente
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-1 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        <UserCircle2 width={17} height={17} />  Usuário
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>



                        <button type="button" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>

                        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <a href="#" title="" className="text-base font-mediu"> <ShoppingCart color='#b5bec3' /> </a>

                            <a href="#" title="" className="text-base font-medium"><Rocket color='#b5bec3' /></a>

                            <a href="#" title="" className="text-base font-medium"> <Bell color='#b5bec3' /> </a>

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="">
                                        <img
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-2 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                      <Settings width={17} height={17}/>  Minha conta
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-2 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                      <UserCircle width={17} height={17}/>  Editar meu perfil
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-2 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                       <Palette width={17} height={17} />  Alterar o tema do Vista
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-2 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                      <X width={17} height={17} />  Limpar cache layout
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-header text-white' : 'text-gray-700',
                                                            'flex items-center gap-2 px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                     <LogOut width={17} height={17}/>   Sair do sistema
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <div className='text-black text-center text-xs bg-[#f2f2f2] py-1'>
                                              Versão 3.117.26
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </nav>
                </div>
            </div>


            <nav className="py-4 bg-white lg:hidden">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col space-y-2">
                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions </a>

                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources </a>

                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
                        </div>

                        <hr className="my-4 border-gray-200" />

                        <div className="flex flex-col space-y-2">
                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </a>

                            <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}