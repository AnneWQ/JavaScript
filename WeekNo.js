/**
 * Created by anne on 6/2/16.
 */

var getWeekDate= function (date) {
    var day = new Date(date);
    day.setHours(0, 0, 0);
    //week begins in Mon
    var forWeekNo = new Date(day),
        WeekStart = new Date(day),
        WeekEnd = new Date(day);

    forWeekNo.setDate(forWeekNo.getDate() + 4 - (forWeekNo.getDay() || 7));
    var yearStart = new Date(forWeekNo.getFullYear(), 0, 1),
        weekNo = Math.ceil((((forWeekNo - yearStart) / (24 * 60 * 60 * 1000)) + 1) / 7);
    WeekStart.setDate(WeekStart.getDate() + 1 - (WeekStart.getDay() || 7));
    WeekEnd.setDate(WeekEnd.getDate() + 7 - (WeekEnd.getDay() || 7));
    //return [weekNo, WeekStart, WeekEnd]
    console.log([weekNo, WeekStart, WeekEnd])

};
getWeekDate(new Date());