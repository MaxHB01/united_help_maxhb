type extractValueReturn = {
    prefix: string | undefined,
    number: number,
    suffix: string | undefined
}

function convertNumber(value: number): string {

    if (value >= 1000000000) {
        return `${(value / 1000000000).toFixed(1)}b`;
    }

    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}m`;
    }

    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`;
    }

    return value.toString();
}

function extractValue(value: number | string): extractValueReturn {
    if (typeof value === 'number') {
        return {
            prefix: undefined,
            number: value,
            suffix: undefined
        };
    }

    const match = value.match(/(\D*)(\d+\.?\d*)([kmb]?)$/i);
    if (!match) {
        return {
            prefix: undefined,
            number: 0,
            suffix: undefined
        };
    }

    const [, prefix, numberStr, suffix] = match;
    const number = parseFloat(numberStr);

    return {
        prefix,
        number: isNaN(number) ? 0 : number,
        suffix
    };
}


export {extractValue, convertNumber,  type extractValueReturn}
