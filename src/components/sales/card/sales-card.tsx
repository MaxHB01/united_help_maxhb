import "./sales-card.scss";
import { CountingAnimation } from "@components";
import { convertNumber } from "@utils";

type SalesCardProps = {
    title: string;
    difference: number;
    number: number;

}

export default function SalesCard({title, difference, number} : SalesCardProps) {
    const finalValue = convertNumber(number);

    return <div className="sales-card">
          <div className="header">
                    <h3 className='title'>{title}</h3>
                    <p className={(difference >= 0) ? 'difference positive' : 'difference negative'}>{difference}%</p>
                </div>

                <div className="number">
                    <CountingAnimation value={finalValue} duration={1000} />
                </div>
    </div>
}