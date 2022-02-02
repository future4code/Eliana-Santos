
export function calcAge(birthDate: Date) {
    const currentDate = new Date();

    var difYears = currentDate.getFullYear() - birthDate.getFullYear();

    if (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) <
        new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()))
        difYears--;
    return difYears;
}


export function convertToDate(dateString: string) {
    let d = dateString.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    return dat;
}