import { Sidebar } from "../../components/Sidebar";

export function Settings() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="container mx-auto py-8">
                <nav className="flex -mb-px space-x-10">
                    <a href="#"
                        className="py-4 text-sm font-medium  transition-all duration-200 border-b-2  whitespace-nowrap text-indigo-600  border-indigo-600">
                        Dados gerais </a>

                    <a href="#"
                        className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2  whitespace-nowrap ">

                        Alteração de senha </a>

                    <a href="#"
                        className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2  whitespace-nowrap ">
                        Pendências </a>

                    <a href="#"
                        className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2  whitespace-nowrap">
                        Google Calendar </a>
                </nav>
            </div>
        </div>
    )
}