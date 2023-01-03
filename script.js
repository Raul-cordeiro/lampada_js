const turnOn = document.querySelector('.turnON');
const turnOff = document.querySelector('.turnOff');
const lamp = document.querySelector('.lamp');


function lampOn(){
    lamp.src ="./img/ligada.png";
   
    
    
    
}
function lampOff(){
    lamp.src ="./img/desligada.png";
  

    
}
function lampquebra(){
     
    lamp.src ="./img/quebrada.png";
    
}
function lampqueb(){
    return lamp.src.indexof('./img/quebrada.png') > -1
}




turnOn.addEventListener( 'click', lampOn)
turnOff.addEventListener( 'click', lampOff)

lamp.addEventListener ("mouseover", lampOn)
lamp.addEventListener ("mouselever", lampOff)
lamp.addEventListener ("dblclick", lampquebra)

