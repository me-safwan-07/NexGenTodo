import { timeAgo } from '.';

export const calculateDateDifference = (
    date: Date,
    lang: string = navigator.language || "en-US"
): string => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const diffrence = targetDate.getTime() - currentDate.getTime();
    const diffrenceDays = Math.floor(diffrence / (1000 * 60 * 60 * 24));
    const diffrenceHours = Math.floor(diffrence / (1000 * 60 * 60));
    const diffrenceMinutes = Math.floor(diffrence / (1000 * 60));
    const userLocale = lang;
    
    if(targetDate < currentDate) {
        return `Not completed on time (${timeAgo(targetDate, userLocale)})`;
    } else if (targetDate.toDateString() === currentDate.toDateString()) {
        return new Intl.RelativeTimeFormat(userLocale, { numeric: "auto"}).format(
            diffrenceHours > 0 ? diffrenceHours : diffrenceMinutes,
            diffrenceHours > 0 ? "hour" : "minute"
        );
    } else if (targetDate.getDate() === currentDate.getDate() + 1) {
        return new Intl.RelativeTimeFormat(userLocale, {numeric: "auto"}).format(1, "day");
    } else if (diffrenceDays <= 7) {
        const dayofWeek = new Intl.DateTimeFormat(userLocale, { weekday: "long"}).format(date);
        return `${dayofWeek} (${new Intl.RelativeTimeFormat(userLocale, { numeric: "auto" }).format(
            diffrenceDays, "days"
        )})`;
    } else {
        return new Intl.RelativeTimeFormat(userLocale, { numeric: "auto"}).format(
            diffrenceDays, "days"
        );
    }
};