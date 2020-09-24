const daysOfTheWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function getDayOfTheWeek(timeStamp) {
    let date = new Date(timeStamp * 1000);
    return daysOfTheWeek[date.getDay()];
};