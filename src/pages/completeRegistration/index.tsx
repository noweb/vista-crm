import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { FormCommercial } from "../../components/formCommercial";

export function CompleteRegistation() {
    const [bar, setBart] = useState('comerciais')

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="container mx-auto px-6 py-5">
                    <div className="">
                        <h1 className="text-2xl font-bold text-gray-900">Dados do imóvel</h1>
                    </div>

                    <div className="container mx-auto py-8">
                        <div className="border-b border-gray-200">
                            <nav className="flex -mb-px space-x-10">
                                <a href="#"
                                    onClick={() => setBart('comerciais')}
                                    className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'comerciais' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                    Comerciais
                                </a>

                                <a href="#"
                                    onClick={() => setBart('empreendimento')}
                                    className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'empreendimento' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                    Empreendimento </a>

                                <a href="#"
                                    onClick={() => setBart('residenciais')}
                                    className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'residenciais' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                    Residenciais </a>

                                <a href="#"
                                    onClick={() => setBart('terrenos')}
                                    className={`py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap ${bar === 'terrenos' ? 'text-indigo-600  border-indigo-600' : 'text-gray-500 border-transparent hover:border-gray-300'} `}>
                                    Terrenos </a>
                            </nav>
                        </div>

                        <div className="mt-10">
                            {
                                bar === 'comerciais' && <FormCommercial/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}