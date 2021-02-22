// function add(a:number, b:number){
//     return a+b;
// }
// const sum:number=add(1,2);
// console.log(sum);

console.log('TypeScript on NodeJS!');

function add(a:number, b:number){
    return a+b;
}

//const sum:string=add(1,2); //컴파일하지 않고도 에러 발생(ts2322라는 에러코드로 검색하여 정보 획득 가능)

//배열 type 중 interface나 커스텀 type 사용가능
interface IUser{
    name:string,
    age:number,
    isValid:boolean,
}

let userArr:IUser[]=[
    {
        name:'ayeon',
        age:23,
        isValid:true
    },
    {
        name:'yunji',
        age:23,
        isValid:false
    },
];

//enum
enum Week{
    Sun,
    Mon,
    Tue=23,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Week.Sun);  //0
console.log(Week.Wed);  //24
console.log(Week[23]);   //Tue
console.log(Week[2]);   //undefined

//unknown
let a:any =123;
let u:unknown=123;

let v1:boolean = a;
let v2:number = u; //error : unknown은 any 제외한 다른 타입에 할당 불가
let v3:any=u;
let v4:number = u as number; //타입을 단언하면 할당가능. (as : 형변환)
