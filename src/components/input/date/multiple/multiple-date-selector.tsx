import { FormEventHandler } from "react";
import { DateSelector } from "@components";

import "./multiple-date-selector.scss";

type DateSelectorProps = {
    startDate?: Date;
    endDate?: Date;
    setStartDate: FormEventHandler<HTMLInputElement>;
    setEndDate: FormEventHandler<HTMLInputElement>;
}


export default function MultipleDateSelector({startDate, endDate, setStartDate, setEndDate, ...rest}: DateSelectorProps) {
    return (
        <div className="multiple-date-selector" {...rest}>
            <DateSelector date={startDate ?? new Date()} setDate={setStartDate} />
            <DateSelector date={endDate ?? new Date()} setDate={setEndDate} />
        </div>
    );
}