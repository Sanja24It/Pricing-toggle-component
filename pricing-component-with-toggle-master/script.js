
const input_switch = document.querySelector('#switch');
const box_basic = document.querySelector('.basic');
const box_pro = document.querySelector('.pro');
const box_master = document.querySelector('.master');

let montly = [19.99,24.99,39.99]
let yearly = [199.99,249.99,399.99]


input_switch.addEventListener('change', function(){
    if(input_switch.checked === true){
       box_basic.textContent = '$' + montly[0]
       box_pro.textContent = '$' + montly[1]
       box_master.textContent = '$' + montly[2]
    } else{
       
      
         box_basic.textContent = '$' + yearly[0]
         box_pro.textContent = '$' + yearly[1]
         box_master.textContent = '$' + yearly[2]
    }
})