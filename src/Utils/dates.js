const getDayFromDate = (date) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    

    const year= date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const d = new Date(year, month-1, day);
    return weekday[d.getDay()];

}

export default getDayFromDate;