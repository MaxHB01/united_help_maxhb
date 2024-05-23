const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });


function formatDate(date: Date) {
    if(date === undefined || date === null) {
            return null;
    }

        const parts = formatter.formatToParts(date);
        const day = parts.find(part => part.type === 'day')?.value;
        const month = parts.find(part => part.type === 'month')?.value;
        const year = parts.find(part => part.type === 'year')?.value;

      return `${month}-${day}-${year}`;
}

export {formatDate}