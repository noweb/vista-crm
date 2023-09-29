import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { CalendarDays } from "lucide-react";

type iconProps = {
    id: number,
    open: number;
}

function Icon({ id, open }: iconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function DataMetrics() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="mx-auto max-w-7xl py-10">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-2xl font-bold text-gray-900">Métricas e dados</h1>

                        <div className="flex justify-end items-end  gap-2  w-1/2">
                            <button className="border border-gray-200 flex items-center gap-4 px-2 py-2 rounded-lg">
                                <CalendarDays width={20} height={20} />
                                <span>Últimos 30 dias</span>
                            </button>
                            <select name="" id="" className="py-2 pl-2 h-[42px] border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option value="1">1 coluna</option>
                                <option value="2">2 coluna</option>
                            </select>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="text-gray-500 font-normal">Funil de vendas</AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico

                            </AccordionBody>
                        </Accordion>
                        <Accordion   open={open === 2} icon={<Icon id={2} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="text-gray-500 font-normal">
                                Veículo de Captação
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico

                            </AccordionBody>
                        </Accordion>
                        <Accordion   open={open === 3} icon={<Icon id={3} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="text-gray-500 font-normal">
                                Conversão de Prospecções em Visitas
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion   open={open === 4} icon={<Icon id={4} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(4)} className="text-gray-500 font-normal">
                                Veículos Top 10 - Conversão Prospecções em Visitas
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion  open={open === 5} icon={<Icon id={5} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(5)} className="text-gray-500 font-normal">
                                Clientes por Corretor
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion   open={open === 6} icon={<Icon id={6} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(6)} className="text-gray-500 font-normal">
                                Captações por corretor
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion  open={open === 7} icon={<Icon id={7} open={open} />} >
                            <AccordionHeader onClick={() => handleOpen(7)} className="text-gray-500 font-normal">
                                Top 10 Imóveis Mais Visitados
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion   open={open === 8} icon={<Icon id={8} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(8)} className="text-gray-500 font-normal">
                                Conversão de Prospecções em Visitas
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                        <Accordion className="col-span-2" open={open === 9} icon={<Icon id={9} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(9)} className="text-gray-500 font-normal">
                                Captações
                            </AccordionHeader>
                            <AccordionBody>
                                Sem dados para gerar o Gráfico
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}