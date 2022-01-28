const c1 = document.querySelectorAll(".cell");  
let ox = 'O';
console.log(c1[1]);
console.log(c1[0]);
let trc1 = [[c1[0].textContent,c1[1].textContent,c1[2].textContent],[c1[3].textContent,c1[4].textContent,c1[5].textContent],[c1[6].textContent,c1[7].textContent,c1[8].textContent]];
let clc1 = [[c1[0].textContent,c1[3].textContent,c1[6].textContent],[c1[1].textContent,c1[4].textContent,c1[7].textContent],[c1[2].textContent,c1[5].textContent,c1[8].textContent]];        


for (let i = 0; i < c1.length; i++) {
    const element = c1[i]; //참조값을 가지고 있다 , 주소값을 가지고 오는 것
    //c1[i]는 태그 자체
    //element가 c1의 내용을 가지고 있는 것이 아니라 c1[i]의 참조값(주소값)을 가지고 있는 것 
    element.addEventListener('click',function(event){ 
        console.log(event);
        const tmp = element.textContent;  //textContent가 내용을 가져오는 것
        console.log(ox);
        if(tmp === ''){  //해당 칸이 빈칸일 경우에만 O나 X를 넣음
            ox = inputOX(ox);  //O와 X를 번갈아서 넣도록 해주는 함수
            console.log(ox);
            element.textContent = ox;
        }
        trc1 = [[c1[0].textContent,c1[1].textContent,c1[2].textContent],[c1[3].textContent,c1[4].textContent,c1[5].textContent],[c1[6].textContent,c1[7].textContent,c1[8].textContent]];
        clc1 = [[c1[0].textContent,c1[3].textContent,c1[6].textContent],[c1[1].textContent,c1[4].textContent,c1[7].textContent],[c1[2].textContent,c1[5].textContent,c1[8].textContent]];        
        
        //c1[i]에 바로 넣는 것이 아니라 참조값을 통해서 넣는 것이기 때문에 새로 갱신해서 직접 넣어줘야 하기 때문에 
        //for문에 위에만 선언을 하면 들어가지지 않음
        //위에만 선언해놓고 아래에서 안 넣어주면 들어가지지 않음(왜냐하면 c1[i]에 바로 넣는 것이 아니기 때문에)

        if(three(trc1,clc1) === 1){
            alert('O win');
        }
        else if(three(trc1,clc1) === 2){
            alert('X win');
            
        }
        /*else{
            console.log(three(trc1,clc1));
        }*/

    })
}



//toggle --> ox사람 변경하기

function inputOX(ox){
    if(ox === 'O'){
        ox = "X";
    }else{
        ox = 'O';
    }
    return ox;
}

function three(trc1,clc1){
    //console.log(c1);
    let tmp = 0;
    for(let i = 0 ; i < 3; i++){
        console.log(trc1[i],clc1[i]);
        if(trc1[i][0] === 'O' && trc1[i][1] === 'O' && trc1[i][2] === 'O'){
            return 1;
        }
        else if(trc1[i][0] === 'X' && trc1[i][1] === 'X' && trc1[i][2] === 'X'){
            return 2;
        }
        else if(clc1[i][0] === 'O' && clc1[i][1] === 'O' && clc1[i][2] === 'O'){
            return 1;
        }
        else if(clc1[i][0] === 'X' && clc1[i][1] === 'X' && clc1[i][2] === 'X'){
            return 2;
        }
       
    }
    if((trc1[0][0] === 'O' && trc1[1][1] === 'O' && trc1[2][2] === 'O') || (trc1[0][2] === 'O' && trc1[1][1] === 'O' && trc1[2][0] === 'O')){
        return 1;
    }
    else if((trc1[0][0] === 'X' && trc1[1][1] === 'X' && trc1[2][2] === 'X') || (trc1[0][2] === 'X' && trc1[1][1] === 'X' && trc1[2][0] === 'X')){
        return 2;
    }
    return 3;
}