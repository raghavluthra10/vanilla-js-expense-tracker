const input = document.querySelector('#inputId');
const button = document.querySelector('#buttonId');
const container = document.querySelector('#containerId');
//const dltBtn = document.querySelector('#dltBtnId');


// entry class: representing input
class Entry{
    constructor(input) {
        this.input = input;
    }
}

//UI class: to handle the UI tasks
class Ui{
    static displayTask () {
        
        const storedTasks = [
            {input: 'abc'}
        ];

        // loop through storedTasks array
        storedTasks.forEach((entry) => Ui.addTaskToList(entry));

    }

    static addTaskToList(entry) {
        const taskRow = document.createElement('table');

        taskRow.innerHTML = `
        <div class="containercl">
        <tr id="taskRowId">
            <td class="td1st">
            ${entry.input}
            </td>
            
            <td class="td2nd">
            <button onclick="deleteTask()" id="dltBtnId" class="delete">Delete</button>
            </td>

        </tr>
        </div>
        `


        container.appendChild(taskRow);

    }
    static deleteEntry() {      
        if(document.querySelector('#dltBtnId').classList.contains("delete")) {
            // remove element
            document.querySelector('#dltBtnId').parentElement.parentElement.remove()
        }
    }

    static clearFields() {
        input.value = '';
    }
}

//event: display tasks
document.addEventListener('DOMContentLoaded', Ui.displayTask)

//event: add a task
button.addEventListener('click', (el) => {
    // read value from input
    const val = input.value;

    //instantiate new task with val as its input
    const neww = new Entry(val)
    console.log(neww);

    // display it on the DOM
    Ui.addTaskToList(neww)

    // clear fields
    Ui.clearFields();
} )

//event: remove a task
function deleteTask() {
    Ui.deleteEntry(document.querySelector('#dltBtnId').target);
}



//storage: handles storage





// left the youtube tutorial by traversy media at 16:00 minutes









