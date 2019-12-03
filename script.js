"use strict";

let money = +prompt("Введите Вваш бюджет на месяц" ,""),
    time = prompt("Введите дату в формате YYYY-MM-DD" ,"");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false,
};


for (let i = 0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","");

        if ( (typeof(a) ) === "string" && (typeof(a) != null )&& (typeof(b) != null ) 
            && a != '' && b !='') {
            appData.expenses[a]= b;
        } else{ 
            i--;
        };       
};

// Второй вариант 
// let i = 0;
// while (i<2) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?","");

//         if ( (typeof(a) ) === "string" && (typeof(a) != null )&& (typeof(b) != null ) 
//             && a != '' && b !='') {
//             appData.expenses[a]= b;
//         } else{ 
//             i--;
//         };      
// };

// Третий вариант 
// let i = 0;
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?","");

//         if ( (typeof(a) ) === "string" && (typeof(a) != null )&& (typeof(b) != null ) 
//             && a != '' && b !='') {
//             appData.expenses[a]= b;
//         } else{ 
//             i--;
//         };      
// } while (i<2);

appData.moneyPerDay = appData.budget/30

alert("Ежедневный бюджет: " + appData.moneyPerDay)

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay>2000){
    console.log("Высокий уровень достатка");
}else console.log("Произошла ошибка");