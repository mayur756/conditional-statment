// nested max
function findMax() {
        let a = document.getElementById("num1").value;
        let b = document.getElementById("num2").value;
        let c = document.getElementById("num3").value;
      
        let lar;
        if(a==b || a==c || b==a || b==c || c==a || c==b){
            document.getElementById('max').innerHTML="enter vaild input...."+max;
        }
        else{
            if (a > b) {
                if (a > c) {
                  lar = a;
                } else {
                  lar = c;
                }
            } 
            else {
                if (b > c) {
                    lar = b;
                } else {
                  lar = c;
                }
              }
        }
      
        document.getElementById("lar").innerHTML = "Max: " + lar;
}

// min nested
function findmin() {
    let a = document.getElementById("min1").value;
    let b = document.getElementById("min2").value;
  
    let lar;
    if(a==b || b==a ){
        document.getElementById('min').innerHTML="enter vaild input....";
    }
    else{
        if (a > b) {
            lar=a;
        } 
        else {
            lar=b;
          }
          document.getElementById("lar").innerHTML = "max: " + lar;
    }
  
    
}

// odd numbers

function odd(){
    let a=document.getElementById('oddnum').value;


    if(a%2==0){
        document.getElementById("num").innerHTML="this is odd number...";
    }
    else{
        document.getElementById("num").innerHTM="enter vaild input...";
    }
}

// speed break

function speed(){
    let a=document.getElementById('bre').value;
    let b=document.getElementById('time').value;

    if(a==b){
        document.getElementById('res').innerHTML="enter vaild choice...";
    }
    else{
        if(a>40){
            document.getElementById('res').innerHTML="apply break!!";
        }
        else{
            document.getElementById('res').innerHTML="keep going..."
        }
    }
}

// matches tie

function matc(){
    let a=document.getElementById('ang').value;
    let b=document.getElementById('aus').value;

    if(a==b){
        document.getElementById('res-2').innerHTML="Match is tie....";
    }
    else if(a>b){
        document.getElementById('res-2').innerHTML="Australia!!";
    }
    else if(a<b){
        document.getElementById('res-2').innerHTML="England!!";
    }
}

// modules 3

function modu(){
    let a=document.getElementById('mod-1').value;

    if(a%3==0){
        document.getElementById('res-3').innerHTML="your number is divided by 3 ..."
    }
    else{
        document.getElementById('res-3').innerHTML="your number is not divided by 3!!"
    }
}