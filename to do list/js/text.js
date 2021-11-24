const addbutton = document.querySelector('button1');
var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item
{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        
        let iteamBox = document.createElement('div');
        iteamBox.classList.add('item');

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

       
        // edit button 
        let editbutton = document.createElement('button');
        editbutton.innerHTML = "Edit";
        editbutton.classList.add('edit');
        
        
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "Delete";
        removeButton.classList.add('del');
       
        container.appendChild(iteamBox);
        iteamBox.appendChild(input);
        iteamBox.appendChild(editbutton);
        iteamBox.appendChild(removeButton);

        editbutton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.del(iteamBox));
    }
    edit(input){
        input.disabled = !input.disabled;

    //    var edit= prompt(input.value);
        
    //    return edit; 
    }
    del(item){
        container.removeChild(item);
    }
}

new item("lokesh");

function check(){
    if(input.value !="")
      {
        new item(input.value);
        input.value = "";
    }
}

button1.addEventListener('click', check);
window.addEventListener('keydown', (e) =>{
    if (e.which == 13){
        check();
    }
})