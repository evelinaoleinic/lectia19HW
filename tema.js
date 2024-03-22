// const obj = {
//     produs: 'carte',
//     editura:'liberty',
//     anul: 2020,
//     pret: 250,
//     tema: 'beletristica'

// }
// for(let item in obj){
//     console.log(`value: ${obj[item]}`)
// }


// const obj2 = {
//     produs: 'carte',
//     editura: 'liberty',
//     anul: 2019,
//     tema: 'beletristica',
//     pret: 260
// }
// // const obj3 = obj2
// // obj3.pret = 200

// // console.log(obj2)

// const obj3 = {...obj2, tema: 'psihologie'}
// obj3.pret = 200
// console.log(obj2, obj3)
// const obj4= {...obj2, premii: 'nobel pentru literatura', autor: 'Tudor Arghezi'}
// console.log(obj2, obj3, obj4)

// function reduceArr(array) {
//     const arr = [1,2,3,4,5,6,7,8,9,10,20,30]
//     return arr.reduce((acc,curr,index)=> {
//         console.log(acc,curr)
//         return curr = acc + 1
       

//     },[] )

// }
// console.log(reduceArr())
function reduceArr(array) {
    const arr = [1,2,3,4,5,6,7,8,9,10,20,30]
    return arr.reduce((acc,curr,index)=> {
        acc.push(curr + 1)
        return acc
       

    },[] )

}
console.log(reduceArr())

function reduceArr1(array) {
    const arr = [1,2,3,4,5,6,7,8,9,10,20,30]
    return arr.reduce((acc,curr,index)=> {
        return [...acc, curr +1]
    },[] )
}
console.log(reduceArr1())