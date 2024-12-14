import dayjs from "dayjs";

export function getMonth(month:number = dayjs().month()) {
    month = Math.floor(month);
    const year:number = dayjs().year();
    const firstDayofMonth:number = dayjs(new Date(year,month,1)).day();
    let currentMonthCount:number  = 0- firstDayofMonth;
    const daysMatrix:dayjs.Dayjs[][] = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return dayjs(new Date(year,month,currentMonthCount))
        })
    })
    return daysMatrix
}