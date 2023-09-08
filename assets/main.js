let b = prompt('Стоимость товара');
let a = prompt('Количество ваших денег');

if(a==b){
    alert('Покупка выполнена.');
}else{
    if(a > b){
        let x = a - b;
        alert('Покупка выполнена, сдача - ' + x);
    }else{
        let x = b - a;
        alert('Недостаточно средств - ' + x);
    }
}