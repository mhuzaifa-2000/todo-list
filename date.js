
const getDate = ()=>{
    let today = new Date();
        let options={
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }; 
    let day = today.toLocaleDateString('en-US',options);
    return day;
}
const getDay= ()=>{
    let today = new Date();
    let options={
        weekday: 'long',
    }; 
let day = today.toLocaleDateString('en-US',options);
return day;
}
module.exports.getDate = getDate;
module.exports.getDay = getDay;