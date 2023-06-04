;(()=>{
    const get = target => {
        if (document.querySelector(target)) {
            return document.querySelector(target);
        } else {
            throw 'ERROR - get';
        }
    };
    const getAll = target => {
        if (document.querySelectorAll(target)) {
            return document.querySelectorAll(target);
        } else {
            throw 'ERROR - getAll';
        }
    };

    const form = get('.toDo form');
    const txt = get('.toDo form .userText');
    const out = get('.toDo .output');
    
    class TodoList{
        changeId = 0;

        constructor(){

        }
        init(){
            form.addEventListener('submit',e=>{
                e.preventDefault();                
                this.add();
                this.show();
                txt.value='';
                txt.focus()
            
            }) 
            
            this.show();
        }

        //obj추가
        add(){
            let num = 0;
            num = localStorage.getItem("num",JSON.stringify(num));
            num++;
            localStorage.setItem("num",JSON.stringify(num));
            let obj = JSON.parse(localStorage.getItem("obj")) || [];
            obj = [
                ...obj, 
                {id:num, text: txt.value, change:false ,ischeck:false},
            ]
            localStorage.setItem("obj",JSON.stringify(obj));
        }

        //삭제 버튼
        delShow(delBtn, id){
            delBtn.addEventListener('click',e=>{
                let obj = JSON.parse(localStorage.getItem("obj"))
                obj = obj.filter(item => item.id !== id);
                localStorage.setItem("obj", JSON.stringify(obj));
                this.show();
            })
        }
        
        //수정버튼
        changetxt(changeBtn, id, userTxt){
            changeBtn.addEventListener('click',e=>{
                let obj = JSON.parse(localStorage.getItem("obj"))
                const checkItem = obj.filter(item => item.id === id)
                this.changeId = id;
                checkItem[0].change = !checkItem[0].change;
                localStorage.setItem("obj", JSON.stringify(obj));
                this.show();
            })
        }

        //완료버튼
        completeBtn(complBtn,id,userTxt){
            complBtn.addEventListener('click',e=>{
                let obj = JSON.parse(localStorage.getItem("obj"));
                const checkItem = obj.filter(item => item.id === id)
                console.log(checkItem[0].text)
                checkItem[0].text = userTxt.value
                checkItem[0].change = !checkItem[0].change;
                localStorage.setItem("obj", JSON.stringify(obj));
                this.show();
            })
        }

        changeColor(li, change,changeBtn,userTxt,delBtn,complBtn){
            let obj = JSON.parse(localStorage.getItem("obj"))
            if(change){
                complBtn.style.backgroundColor='#999'
                changeBtn.style.backgroundColor='#999'
                userTxt.style.color='#999'
                changeBtn.textContent = '취소'
                userTxt.disabled = false;
                userTxt.style.border='1px solid #999'
                userTxt.style.borderRadius='5px'
                li.append(complBtn,changeBtn);
            }else{
                li.append(delBtn);
                
            }
            localStorage.setItem("obj", JSON.stringify(obj));
        }
        //체크박스
        checkBox(check, id){
            check.addEventListener('click',e=>{
                let obj = JSON.parse(localStorage.getItem("obj"))
                const checkItem = obj.filter(item => item.id === id)
                checkItem[0].ischeck = !checkItem[0].ischeck;
                checkItem[0].change = false;
                localStorage.setItem("obj", JSON.stringify(obj));
                this.show();
            })
        }

        // obj 생성
        show(){
            let obj = JSON.parse(localStorage.getItem("obj")) || [];
            out.innerHTML = '';
            obj.forEach(ele=>{
                const {id, text,change, ischeck} = ele;
                let li = document.createElement('li');
                let check = document.createElement('i');
                let userTxt = document.createElement('input');
                let changeBtn = document.createElement('button');
                let delBtn = document.createElement('button');
                let complBtn = document.createElement('button');
                userTxt.value = text
                userTxt.disabled = true;
                changeBtn.textContent = '수정'
                delBtn.textContent = '삭제'
                complBtn.textContent = '완료'
                if(ischeck){
                    check.setAttribute('class','xi-check-circle-o');
                    li.classList.add('on');
                    changeBtn.remove()
                    userTxt.style.width = '408px'
                    li.append(check, userTxt, delBtn);
                }else if(!ischeck){
                    check.setAttribute('class','xi-radiobox-blank');
                    li.append(check, userTxt, changeBtn);
                    this.changeColor(li, change,changeBtn,userTxt,delBtn,complBtn)
                }                
                out.append(li);

                this.changetxt(changeBtn, id,userTxt);
                this.delShow(delBtn, id);
                this.checkBox(check, id);
                this.completeBtn(complBtn, id,userTxt)
                if(id === this.changeId){
                    userTxt.focus();
                    this.changeId = 0;

                }
                userTxt.addEventListener('keyup',e=>{
                    if(e.keyCode===13){
                        let obj = JSON.parse(localStorage.getItem("obj"));
                        const checkItem = obj.filter(item => item.id === id)
                        console.log(checkItem[0].text)
                        checkItem[0].text = userTxt.value
                        checkItem[0].change = !checkItem[0].change;
                        localStorage.setItem("obj", JSON.stringify(obj));
                        this.show();
                    }
                })
            })
        }

    }
    const todoList = new TodoList;
    todoList.init();
})();
