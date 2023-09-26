export function Login (){
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 min-h-screen flex items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-12 lg:gap-x-20 lg:grid-cols-2 2xl:gap-x-8">
                <div>
                    <div className="2xl:max-w-sm">
                        <h1 className="text-3xl font-bold text-gray-900">Login Novo vista 🤝</h1>
                        <p className="mt-4 text-sm font-medium leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi pulvinar venenatis non.</p>

                        <form className="mt-12">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Email </label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>

                                        <input type="email" name="" id="" placeholder="Endereço de email" value="" className="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="text-sm font-bold text-gray-900"> Senha </label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>

                                        <input type="password" name="" id="" placeholder="Senha (min. 8 caracteres)" value="" className="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                    </div>
                                </div>

                                <div>
                                    <a href="/dashboard" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                                        Entrar
                                    </a>
                                </div>
                            </div>
                        </form>

                        <div className="relative mt-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>

                            <div className="relative flex justify-center">
                                <span className="px-2 text-sm text-gray-400 bg-white"> or </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href="#" type="button" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900">
                                <img className="w-5 h-5 mr-2" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/sign-in/1/google-logo.svg" alt="" />
                                Entrar com o Google
                            </a>
                        </div>

                        <div className="mt-20">
                            <p className="text-sm font-medium text-gray-900">Esqueceu sua senha? <a href="#" title="" className="font-bold text-indigo-600 hover:underline">Recuperar agora</a></p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden text-center bg-gray-100 rounded-2xl">
                    <div className="flex items-center justify-center px-8 py-12 sm:px-12 sm:py-16 md:py-24 md:px-20">
                        <div>
                            <img className="w-auto mx-auto" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/sign-in/2/sign-in-illustration.png" alt="" />
                            <p className="mt-4 text-2xl font-bold text-gray-900">92+ Ready Coded Blocks</p>
                            <p className="mt-4 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi pulvinar venenatis non.</p>

                            <div className="flex items-center justify-center mt-16 space-x-1.5">
                                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}