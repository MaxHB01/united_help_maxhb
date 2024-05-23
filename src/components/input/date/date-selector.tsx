import { FormEventHandler } from 'react';
import './date-selector.scss';

type DateSelectorProps = {
    date: Date;
    setDate: FormEventHandler<HTMLInputElement>;
}
export default function DateSelector({ date, setDate, ...rest }: DateSelectorProps) {
    return (
        <input className="date-selector" type="date" value={(date) ? date.toISOString().split('T')[0] : ''} onInput={setDate} {...rest} />
    );
}
