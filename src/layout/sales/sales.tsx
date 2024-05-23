import "./sales.scss";

import {SkeletonCard, LineChart } from '@components';

interface SalesLayoutProps {
    loading: boolean;
    cards: React.ReactNode[];
    chartTitle?: string;
    x: number[];
    y: number[] | string[];
}

export default function SalesLayout({loading, chartTitle, cards, x, y} : SalesLayoutProps) {
    return (
        <section className='sales-dashboard'>

            <div className="sales-data">
                {cards.map((card, index) => {
                    return <SkeletonCard key={index} loading={loading}>
                        {card}
                    </SkeletonCard>
                })}
            </div>

           
            <SkeletonCard loading={loading} className="sales-chart">
                {x && y && <LineChart labels={x} data={y} title={chartTitle} />}
            </SkeletonCard>

        </section>
    )
}