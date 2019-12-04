"use strict";

let money,
    time;

function start () {
    money = +prompt("Введите Вваш бюджет на месяц" ,"");
    time = prompt("Введите дату в формате YYYY-MM-DD" ,"");

    while ( isNaN(money) || money == "" || money == null)
        money = +prompt("Введите Вваш бюджет на месяц" ,"");
};

start();



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
};

function chooseExpenses(){
    for (let i = 0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?","");
    
            if ( (typeof(a) ) === "string" && (typeof(a) != null )&& (typeof(b) != null ) 
                && a != '' && b !='') {
                appData.expenses[a] = b;
            } else{ 
                i--;
            };       
    };

};

// chooseExpenses();


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


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(3);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};

detectDayBudget;

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
        }else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay>2000){
        console.log("Высокий уровень достатка");
        }else console.log("Произошла ошибка");
};

detectLevel;

function checkSavings () {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    };

};
checkSavings();

function chooseOptExpenses(){
    for (let i=1; i<4; i++){
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    };
};

