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

        //td작성
        for(var i=0; i<this.myClass.length; i++){
            //table에 한 행 추가
            tr=table.insertRow(-1);
            //table header 길이만큼 순회하여 거기에 매칭되는 데이터 갖고오기
            for(var j=0; j<this.col.length; j++){
                var tabCell=tr.insertCell(-1);
                tabCell.innerHTML=this.myClass[i][this.col[j]];
            }

            //update 버튼 만들기
            this.td=document.createElement('td');   //td= table data
            tr.appendChild(this.td);
            var btnUpdate=document.createElement('input');
            btnUpdate.setAttribute('type', 'button');
            btnUpdate.setAttribute('value', 'Update');
            btnUpdate.setAttribute('id', 'Edit'+i); //id는 유일해야하기때문
            btnUpdate.setAttribute('style', 'background-color:#44CCEB');
            btnUpdate.setAttribute('onClick', 'crudApp.Update(this)');      //버튼 클릭될 때 실행할 메서드
            this.td.appendChild(btnUpdate);

            //save 버튼 만들기
            tr.appendChild(this.td);
            var btnSave=document.createElement('input');
            btnSave.setAttribute('type', 'button');
            btnSave.setAttribute('value', 'Save');
            btnSave.setAttribute('id', 'Save'+i);
            btnSave.setAttribute('style', 'display:none;');
            btnSave.setAttribute('onClick', 'crudApp.Save(this)');
            this.td.appendChild(btnSave);

            //Delete 버튼 만들기
            this.td=document.createElement('td');  
            tr.appendChild(this.td);
            var btnDelete=document.createElement('input');
            btnDelete.setAttribute('type', 'button');
            btnDelete.setAttribute('value', 'Delete');
            btnDelete.setAttribute('id', 'Delete'+i);
            btnDelete.setAttribute('style', 'background-color:#ED5650;');
            btnDelete.setAttribute('onClick', 'crudApp.Delete(this)');
            this.td.appendChild(btnDelete);
        }

        //입력행 추가
        tr=table.insertRow(-1);
        for(var j=0; j<this.col.length; j++){
            var newCell=tr.insertCell(-1);
            if(j>=1){
                if(j==2){
                    //선택 항목 만들기
                    var select=document.createElement('select');
                    select.innerHTML='<option value=""></option>';
                    for(var k=0; k<this.Category.length; k++){
                        select.innerHTML= select.innerHTML + `<option value="${this.Category[k]}">${this.Category[k]}</option>`;
                    }
                    newCell.appendChild(select);
                }
                else{
                    var tBox=document.createElement('input');
                    tBox.setAttribute('type', 'text');
                    tBox.setAttribute('value', '');
                    newCell.appendChild(tBox);
                }
            }
        }

        //create 버튼 만들기
        this.td=document.createElement('td');  
        tr.appendChild(this.td);
        var btnCreate=document.createElement('input');
        btnCreate.setAttribute('type', 'button');
        btnCreate.setAttribute('value', 'Create');
        btnCreate.setAttribute('id', 'New'+i);
        btnCreate.setAttribute('style', 'background-color:#207DD1;');
        btnCreate.setAttribute('onClick', 'crudApp.CreateNew(this)');
        this.td.appendChild(btnCreate);

        var div=document.getElementById('container');
        div.innerHTML='수강관리 앱';
        div.appendChild(table);
    }
    
    //삭제 메서드(눌린 버튼을 인자로 받아 해당 버튼에 해당하는 행 삭제하기)
    this.Delete= (oButton)=>{
        var targetIdx=oButton.parentNode.parentNode.rowIndex;   //input 태그 감싸고 있는 td, td 감싸고 있는 tr 가리킴. 그 tr의 rowIndex 뽑아냄.
        this.myClass.splice((targetIdx-1),1);
        this.createTable();     //table 새로고침
    }

    //추가(create) 메서드 생성
    this.CreateNew=(oButton)=>{
        var writtenIdx=oButton.parentNode.parentNode.rowIndex;
        var trData=document.getElementById('classTable').rows[writtenIdx];

        var obj={};     //입력한 값 담아줌

        //tr 데이터에서 td 속의 key:value만 뽑아서 obj안에 저장
        for(var i=1; i<this.col.length; i++){
            var td=trData.getElementsByTagName("td")[i];
            if(td.childNodes[0].getAttribute('type')==='text' || td.childNodes[0].tagName==='SELECT'){
                var txtVal=td.childNodes[0].value;
                //txtVal=입력한 값. 하나라도 비어있다면 경고
                if(txtVal!=''){
                    obj[this.col[i]]=txtVal;
                    console.log(); 
                }
                else{
                    obj='';
                    alert('모든 항목을 입력해주세용');
                    break;
                }
            }
        }
        
        if(obj[this.col[1]] && obj[this.col[2]] && obj[this.col[3]]){
            obj[this.col[0]]=this.myClass.length +1;    //자동으로 새 ID 값 부여
            this.myClass.push(obj);
            this.createTable();
        }
    }

    //수정(Update)메서드 생성
    this.Update=(oButton)=>{
        var writtenIdx=oButton.parentNode.parentNode.rowIndex;
        var trData=document.getElementById('classTable').rows[writtenIdx];

        //기존에 입력한 데이터들 갖고오기
        for(var i=1; i<this.col.length; i++){
            //기존에 입력한 데이터들을 담은 새로운 input/select를 띄워주기
            if(i===2){
                var td=trData.getElementsByTagName("td")[i];
                var select=document.createElement("select");
                select.innerHTML=`<option value="${td.innerText}">${td.innerText}</option>`;
                for(var k=0; k<this.Category.length; k++){
                    select.innerHTML=select.innerHTML+`<option value="${this.Category[k]}">${this.Category[k]}</option>`;
                }
                td.innerText='';
                td.appendChild(select);
            }

            else{
                var td=trData.getElementsByTagName("td")[i];
                var input=document.createElement("input");
                input.setAttribute("type","text");
                input.setAttribute("value", td.innerText);
                td.innerText='';
                td.appendChild(input);  
            }
        }
        //버튼 save로 바꾸기
        var btnSave=document.getElementById('Save'+ (writtenIdx -1));
        btnSave.setAttribute('style', 'display : block; background-color:#2DBF64;');
        //업데이트 버튼 숨기기
        oButton.setAttribute('style', 'display : none; ');
    }

    //저장(save)메서드 생성
    this.Save=(oButton)=>{
        var writtenIdx=oButton.parentNode.parentNode.rowIndex;
        var trData=document.getElementById('classTable').rows[writtenIdx];

        //새로운 값으로 myClass 갱신
        for(var i=1; i<this.col.length; i++){
            var td=trData.getElementsByTagName("td")[i];
            if(td.childNodes[0].getAttribute('type')==='text' || td.childNodes[0].tagName==='SELECT'){
                this.myClass[writtenIdx-1][this.col[i]]=td.childNodes[0].value;
            }
        }
        this.createTable();
    }
}

crudApp.createTable();