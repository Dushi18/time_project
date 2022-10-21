

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date( );
// const time = new Date(date.getHours(), date.getMinutes(), date.getSeconds());

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
console.log(days[date.getDay()]);
// console.log(months[date.getMonth()]);
// console.log(date.getDate());
console.log(date.getFullYear() + '-' + months[date.getMonth()] +  '-'  + date.getDate() );

function myDate (){
    const date = new Date( );
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    const elem = document.getElementById("h")
    elem[0].innerHTML = 'hi' 
}

 const interval = setInterval(myDate, 1000);

function stopFunction() {
    clearInterval(interval);
}


