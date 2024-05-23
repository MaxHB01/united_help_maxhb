import { CenteredLayout, SalesLayout } from "@layout";
import { SalesCard, MultipleDateSelector } from "@components";
import { useEffect, useState } from "react";
import {fetchData} from '@api'
import {formatDate} from '@utils'
import './frequent-items.scss';

export default function FrequentItems() {
    const [salesData, setSalesData] = useState<SalesData | null>(null);

    const [dates, setDates] = useState({
        startDate: new Date('1995-01-01'),
        endDate: new Date()
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getItemSets();
            data.chartData = getLastKnownDates(data.data) ?? { x: [], y: [] };
            setSalesData(data);
        }
        fetchData();
    }, [dates]); 

    const cards = [
        <SalesCard title="Aantal orders" number={salesData?.orders ?? 0} difference={5} />,
        <SalesCard title="Totale Omzet " number={salesData?.turnOver ?? 0} difference={5} />,
        <SalesCard title="Totale Winst" number={salesData?.profit ?? 0} difference={2} />,
        <SalesCard title="Totale kosten" number={salesData?.cost ?? 0} difference={-2} />,
    ]

    const x: string[] | number[] = salesData?.chartData?.x ?? [];
    const y: number[] =  salesData?.chartData?.y ?? [];

    return (
        <CenteredLayout>
                <section className="sales-selector">
                    <MultipleDateSelector
                        startDate={dates.startDate}
                        endDate={dates.endDate}
                        setStartDate={((e: React.ChangeEvent<HTMLInputElement>) => {
                            setDates({
                                ...dates,
                                startDate: new Date(e.currentTarget.value)
                            });
                        })}

                        setEndDate={((e: React.ChangeEvent<HTMLInputElement>) => {
                            setDates({
                                ...dates,
                                endDate: new Date(e.currentTarget.value)
                            });
                        })}
                    />
                    <SalesLayout loading={salesData == null} chartTitle="Omzet" cards={cards} x={x} y={y}/>
                </section>
        </CenteredLayout>
    );

}

type SalesData = {
    startDate: Date;
    endDate: Date;
    turnOver: number;
    profit: number;
    cost: number;
    orders: number;

    data: SalesDayData[];
    chartData: ChartData | undefined;
}

type ChartData = {
    x: string[] | undefined;
    y: number[] | undefined;
}

type SalesDayData = {
    day: Date;
    turnOver: number;
    profit: number;
    cost: number;
    orders: number;
}


async function getItemSets() : Promise<SalesData>  {
    const url = `api/orders/`;

    console.log(url);

    const info = await fetchData(url);

    return info;
}

function getLastKnownDates(dates: SalesDayData[] | undefined) : ChartData {
    if(dates === undefined || dates === null) {
        return {
            x: [],
            y: []
        };
    }


    const omzetPerJaar: { [key: number]: number } = {};

    dates.forEach(item => {
        const jaar = new Date(item.day).getFullYear()
        omzetPerJaar[jaar] = (omzetPerJaar[jaar] || 0) + item.turnOver;
    });

return {
    x: Object.keys(omzetPerJaar),
    y: Object.values(omzetPerJaar)
};
}