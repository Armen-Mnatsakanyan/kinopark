(function createButton(){
    let seats = document.getElementById('seats');
    for(let i = 1; i <= 50; i++){
       let button = document.createElement('button');
       let id = document.createTextNode(i);
       let className = document.createAttribute('class');
       className.value = 'seat';
       button.setAttributeNode(className);
       button.appendChild(id);
       button.id = i;
       button.addEventListener('click', () => {
           button.onclick = seatFunc(i);        
        })
       document.getElementById('seats').appendChild(button);
    }
})();

let arr = [];

function seatFunc(id){
    document.getElementById(id).style.backgroundColor = 'yellow';
    if(!arr.includes(id)){
     arr.push(id);
    }else{
     document.getElementById(id).style.backgroundColor = 'rgb(142, 142, 142)';
     arr.splice(arr.indexOf(id), 1);
    }
};

function buyFunc(){
   console.log(888)
}