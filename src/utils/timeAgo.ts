export const timeAgo = (date: Date, lang = navigator.language || "en-US") : string => {
    // Get the current date and time
    const now = new Date();
    date = new Date(date);

    // Calculate the time diffrence in seconds
    const diffInseconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    // Create on Intl.RelativeTimeFormat instance with the user's language
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });

    // Determine the oppropirate unit and format the result
    if(diffInseconds < 60) {
        return rtf.format(diffInseconds, "second");
    } else if(diffInseconds < 3600 ) {
        const minutes = Math.floor(diffInseconds / 60);
        return rtf.format(minutes, "minute");
    } else if (diffInseconds < 86400) {
        const hours = Math.floor(diffInseconds / 3600);
        return rtf.format(hours, "hour");
    } else {
        const days = Math.floor(diffInseconds / 86400);
        return rtf.format(days, "day");
    }
};