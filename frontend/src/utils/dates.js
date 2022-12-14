export function dayWeek(date) {
    let formatedDayWeek = new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long",
    });
    return formatedDayWeek.charAt(0).toUpperCase() + formatedDayWeek.slice(1);
}

export function formatedDate(date) {
    return new Date(date).toLocaleDateString("pt-BR", {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        timeZone: "UTC",
    });
}

export function formatedIsoDate(date) {
    if (date) return new Date(date).toISOString().split("T")[0];
}
