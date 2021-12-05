const years = []
const months = []
const days = []

const year = 1960
for (let i = 0; i < 62; i++) {      
    let seireki = year + i;
    let wareki = '';

    if (seireki > 2018) { 
        wareki = '令和' + (seireki - 2018);
    } else if (seireki > 1988) {
        wareki = '平成' + (seireki - 1988);
    } else if (seireki > 1925) {
        wareki = '昭和' + (seireki - 1925);
    } 
    years.push( {
        seireki : seireki,
        wareki : wareki
    })
}

const month = 1
for (let i = 0; i < 12; i++) {
    months.push(month + i)
}

const day = 1
for (let i = 0; i < 31; i++) {
    days.push(day + i)
}

export {years, months, days}