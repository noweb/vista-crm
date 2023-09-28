import { Bell, Clock8, Gavel, HomeIcon, Users } from 'lucide-react'
import { Sidebar } from "../../components/Sidebar";

import Chart from 'react-apexcharts';

export function Home() {

    
    const optionsChart =
    {
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: string) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
        series: [{
            name: 'Vendas',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        colors: ['#534ae0']
    }





    return (
        <div className="flex">
            <Sidebar />

            <div className="container mx-auto py-8">

                <div className="md:items-center md:flex">
                    <p className="text-base font-bold text-gray-900">Olá Mariana -</p>
                    <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">utilize essa tela para analizar os dados</p>
                </div>

                <form action="" className="w-full mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-x-4 gap-y-5">
                        <div className="w-full">
                            <div className="">
                                <div className="relative">
                                    <select className="mt-2 block w-full py-3 pl-2 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                        <option>Venda</option>
                                        <option>Locação</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <select className="mt-2 block w-full py-3 pl-2 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option value="01-2023">Janeiro / 2023</option>
                                <option value="02-2023">Fevereiro / 2023</option>
                                <option value="03-2023">Março / 2023</option>
                                <option value="04-2023">Abril / 2023</option>
                                <option value="05-2023">Maio / 2023</option>
                                <option value="06-2023">Junho / 2023</option>
                                <option value="07-2023">Julho / 2023</option>
                                <option value="08-2023">Agosto / 2023</option>
                                <option value="09-2023">Setembro / 2023</option>
                                <option value="10-2023">Outubro / 2023</option>
                                <option value="11-2023">Novembro / 2023</option>
                                <option value="12-2023">Dezembro / 2023</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <select className="mt-2 block w-full py-3 pl-2 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option value="0">Toda a empresa</option>
                                <option value="NOVO STILLO NEGOCIOS IMOBILIARIOS">NOVO STILLO NEGOCIOS IMOBILIARIOS</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div className="flex items-center gap-3 mt-5">
                    <Bell width={20} height={20} />
                    <h2>Lembretes</h2>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">IMÓVEIS COM PRONTUÁRIOS PENDENTES</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">0</p>

                                    <Clock8 width={24} height={24} className="font-semibold text-green-500" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">IMÓVEIS DESATUALIZADOS</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">1467</p>

                                    <HomeIcon width={24} height={24} className="font-semibold text-green-500" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">PROPOSTAS ATIVAS</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">0</p>

                                    <Gavel width={24} height={24} className="font-semibold text-green-500" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">CLIENTES COM ATENDIMENTOS DESATUALIZADOS</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">474</p>

                                    <Users width={24} height={24} className="font-semibold text-green-500" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">NOVAS CAPTAÇÕES DO SITE DA SEMANA</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">0</p>

                                    <Users width={24} height={24} className="font-semibold text-green-500" />

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">NOVOS IMÓVEIS PARA SEUS CLIENTES</p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">0</p>

                                    <Users width={24} height={24} className="font-semibold text-green-500" />

                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="flex gap-4 mt-10">
                    <div className="bg-white border border-gray-200 rounded-xl w-3/4">
                        <div className="px-4 pt-5 sm:px-6">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <p className="text-base font-bold text-gray-900">Funil de vendas</p>
                                <div className="mt-4 sm:mt-0">
                                    <label className="sr-only"> Duração </label>
                                    <div className="mt-2">
                                        <select className="block w-full py-1.5 pl-3 font-medium pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                            <option>Últimos 7 dias</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="chart5" className="mt-2">
                                <Chart options={optionsChart} series={optionsChart.series} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl w-3/4">
                        <div className="px-4 pt-5 sm:px-6">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <p className="text-base font-bold text-gray-900">Veículo de Captação</p>
                                <div className="mt-4 sm:mt-0">
                                    <label className="sr-only"> Duração </label>
                                    <div className="mt-2">
                                        <select className="block w-full py-1.5 pl-3 font-medium pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                            <option>Últimos 7 dias</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="chart6" className="mt-2">
                                <Chart options={optionsChart} series={optionsChart.series} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}