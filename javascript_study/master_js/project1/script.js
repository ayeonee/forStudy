var crudApp = new function(){
    //수강 데이터 (미리 만들어진 데이터) 담을 json 형식의 배열 만들기
    this.myClass=[
        {ID: '1', Class_Name: '디지털미디어원리및실습', Category: '전공필수', Credit:3},
        {ID: '2', Class_Name: '컴퓨터구조론', Category: '전공선택', Credit:3},
        {ID: '3', Class_Name: '스프레드시트고급활용', Category: '교양선택', Credit:1}];

    //선택할 수 있는 항목 미리 정의
    this.Category=['전공필수', '전공선택', '교양필수', '교양선택'];

    //Table Header에 담길 데이터를 확장성을 위해 배열에 담기
    this.col=[];
    
    //위의 데이터들로 실제 테이블을 만들어주는 메서드
    this.createTable=()=>{
        //테이블 만들고 데이터 채우는 코드
        //col에 table header에 해당하는 데이터(myClass의 key값들) 넣어주는 코드, 비어있는 col 배열에 myClass 배열 속 객체들의 key값들을 넣어줘야 함
        for(var i=0; i<this.myClass.length; i++){
            for(var key in this.myClass[i]){ //for in : 객체의 속성들을 반복하여 작업을 수행. 객체의 key값에 접근 가능
                //indexOf= 문자열 속의 문자열 검색
                if(this.col.indexOf(key)===-1) this.col.push(key);
            }
        }

        var table=document.createElement('table');
        table.setAttribute('id', 'classTable');

        //tr(table row)
        var tr=table.insertRow(-1);       //하나의 행을 추가해라, -1 넣으면 마지막 행에 추가한다.

        //th(table header) 작성
        for(var h=0; h<this.col.length; h++){
            var th=document.createElement('th');
            th.innerHTML=this.col[h];
            tr.appendChild(th);
        }

        var div=document.getElementById('container');
        div.innerHTML='수강관리 앱';
        div.appendChild(table);
    }
        

}

crudApp.createTable();