import { Sidebar } from "../../components/Sidebar";

export function Marketplace() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <h1 className="text-2xl font-bold text-gray-900"> Marketplace - Extensões para o sistema</h1>

                </div>
            </div>
        </div>
    )
}