const students = [
    {id : 11, name: "mahzabeen"},
    {id : 21, name: "tanjin tisha"},
    {id : 31, name: "porimoni"}
]
const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id>15)
console.log(bigger);