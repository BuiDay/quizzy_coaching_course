import { count } from "console";
import { Model, Document } from "mongoose";

interface MonthData {
    month: string;
    count: number;
}

interface DateData {
    date: string;
    count: number;
}

export const generateLast12MonthsData = async <T extends Document>(model: Model<T>): Promise<{ last12Months: MonthData[] }> => {
    const last12Months: MonthData[] = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    for (let i = 11; i >= 0; i--) {
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i * 28);
        const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 28);
        const monthYear = endDate.toLocaleString('default', {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
        const count = await model.countDocuments({
            createdAt: {
                $gte: startDate,
                $lt: endDate
            }
        })
        last12Months.push({ month: monthYear, count });
    }
    return { last12Months }
}

export const generateLastDateData = async <T extends Document>(model: Model<T>): Promise<{ data: object }> => {
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    const lastDate: DateData[] = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = 11

    const daysInCurrentMonth = getDaysInMonth(
        currentYear,
        currentMonth,
    );
    
    for (let i = 1; i < daysInCurrentMonth + 1; i++) {
        const endDate = new Date(currentDate.getFullYear(), 11, i, 23,59,59,999);
        const startDate = new Date(currentDate.getFullYear(), 11, i, 0,0,0,0);
        const dateMonthYear = endDate.toLocaleString('vn', {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
        const count = await model.countDocuments({
            createdAt: {
                $gte: startDate,
                $lt: endDate
            }
        })

        lastDate.push({ date:dateMonthYear , count });
    }
    const total = lastDate.reduce((current,item)=>{
        return item.count + current
    },0)

    const data = {
        totalMonth:total,
        day:lastDate
    }
    return { data }
}