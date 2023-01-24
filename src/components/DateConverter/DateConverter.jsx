export const DateConverter = (strDate) => {
    const date = strDate.slice(9);
    let month = strDate.slice(6, -3);
    const year = strDate.slice(2, -6);

    if (month == "1") {
        month = "Jan";
    }
    if (month == "2") {
        month = "Feb";
    }
    if (month == "3") {
        month = "Mar";
    }
    if (month == "4") {
        month = "Apr";
    }
    if (month == "5") {
        month = "May";
    }
    if (month == "6") {
        month = "Jun";
    }
    if (month == "7") {
        month = "Jul";
    }
    if (month == "8") {
        month = "Aug";
    }
    if (month == "9") {
        month = "Sep";
    }
    if (month == "10") {
        month = "Oct";
    }
    if (month == "11") {
        month = "Nov";
    }
    if (month == "12") {
        month = "Dec";
    }

    const newDate = `${date}-${month}-${year}`;

    return newDate;
};
