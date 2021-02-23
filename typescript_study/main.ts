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
    age:number
}
//기존 타입들이 조합 가능하다면 인터섹션 활용 가능
interface IValidation{
    isValid :boolean
}

const userArr:IUser=
    {
        name:'ayeon',
        age:23,
        //isValid:true  //error
    };
const userArr1 : IUser & IValidation=
    {
        name:'yunji',
        age:23,
        isValid:false
    };

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
//et v2:number = u; //error : unknown은 any 제외한 다른 타입에 할당 불가
let v3:any=u;
let v4:number = u as number; //타입을 단언하면 할당가능. (as : 형변환)


//void : 값을 반환하지 않는 함수, 실제로는 undefined를 반환
function hello(msg:string) : void{
    console.log(`Hello ${msg}`);
}
const hi:void=hello('world');   //Hello world
console.log(hi);    //undefined

//타입단언
function someFunc(val:string | number, isNumber:boolean){
    if(isNumber){
        //val.toFixed(2); //error
        (val as number).toFixed(2); //소수의 자리수 제한하는 함수.
    }
}

//non-null 단언 연산자
function fn(x:number | null| undefined){
    return x!.toFixed(2);   //피연산자가 null이나 undefined가 아님을 단언
}

//타입 가드
function isNumber(val : string | number) : val is number{
    return typeof val === 'number';
}

//NAME is TYPE
function exFunc(val : string | number){
    if(isNumber(val)){
        val.toFixed(2);
        isNaN(val);
    }
    else{
        val.split('');
        val.toUpperCase();
        val.length;
    }
}

//typeof
function exxFunc(val : string | number){
    if(typeof val === 'number'){
        val.toFixed(2);
        isNaN(val);
    }
    else{
        val.split('');
        val.toUpperCase();
        val.length;
    }
}

//in
function exxxFunc(val : any){
    if('toFixed' in val){
        val.toFixed(2);
        isNaN(val);
    }
    else if('split' in val){
        val.split('');
        val.toUpperCase();
        val.length;
    }
}