let stockWeight= Object.freeze({
    tenKG: '10KG',
    fifteenKG: '15KG',
    twentyKG: '20KG',
    fiftyKG: '50KG',
    eightyKG: '80KG',
});
let materialType= Object.freeze({
    Atta: 'Atta',
    Maida: 'Maida',
    Fin: 'Fin'
});

let transactionType= Object.freeze({
    Sale: 'Sale',
    Purchase: 'Purchase',
});
let expenseType= Object.freeze({
    Fuel: 'Fuel',
    Labour: 'Labour',
    Salaries: 'Salaries',
    Rent: 'Rent',
    Commission: 'Commission',
});

export  const enums = {stockWeight,materialType,transactionType,expenseType}