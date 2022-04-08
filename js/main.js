function shuffle(num){

    let arrayindex= num.length;
    let randomInd;

    while(arrayindex!=0){
        randomInd=Math.floor(Math.random()*arrayindex);
        arrayindex--;

        [num[arrayindex], num[randomInd]]= [num[randomInd], num[arrayindex]];

    }
    return num;

}

var colors = ["light-blue","white-gray","dark-blue","blue","light-blue","white-gray","dark-blue","blue","white-gray"];

function randomClass(colors){
    let colorIndex = colors.length;
    let randomColor;
    randomColor=Math.floor(Math.random()*colorIndex);
    
    while(colorIndex!=0){
        randomColor=Math.floor(Math.random()*colorIndex);
        colorIndex--;
    
        [colors[colorIndex], colors[randomColor]]= [colors[randomColor], colors[colorIndex]];
    
    }
    return colors;
}

//console.log(randomClass(colors));



var num=[1,2,3,4,5,6,7,8,9];
let output = [];
    for(i=0; i < num.length;i++){
        output +=` <div class="box ${colors[i]}">${num[i]}</div>`;
        document.getElementById("shuffle-box").innerHTML = output
    }


document.getElementById("shuffle").onclick = function(){
    shuffle(num);
    console.log(num)
    randomClass(colors);
    console.log(colors)
    let output = [];
    for(i=0; i < num.length;i++){
        output +=` <div class="box ${colors[i]}">${num[i]}</div>`;
        document.getElementById("shuffle-box").innerHTML = output
    }
}

document.getElementById("sort").onclick = function(){
    //shuffle(num);
    console.log(num.sort())
    num.sort()
    let output = [];
    for(i=0; i < num.length;i++){
        output +=` <div class="box ${colors[i]}">${num[i]}</div>`;
        document.getElementById("shuffle-box").innerHTML = output
    }
}


