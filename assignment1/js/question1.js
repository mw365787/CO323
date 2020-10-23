// resets the form
function reset() {
    document.getElementById("form").reset;
}

// creates a row with date cells according the filled out form
function display() {
    var tableRef = document.getElementById("tbody");
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("feet").value + "' " + document.getElementById("inches").value + '"';
    var date = document.getElementById("date").value;


    if(checkDate() && checkAge())                           //age and date validation
    {
        alert("The age should be between 18-60 and the date should be from this year!");
        return;
    }else if(checkDate())
    {
        alert("The date should be from this year!");
        return;
    }else if(checkAge())
    {
        alert("The age should be between 18-60.");
        return;
    }

    var form = document.getElementById("form");
    form.reset();
    var counter = document.getElementById("counter");                // get counter in the footer
    counter.innerHTML = parseInt(counter.innerHTML) + 1;            // increment



    var newRow = tableRef.insertRow(0);                         //table rows and cells insertion
    if(tableRef.rows.length % 2 == 0)
    {
        newRow.style.backgroundColor = "#00FFFF";
    }else
    {
        newRow.style.backgroundColor = "#ADFF2F";
    }
    
    var newCell = [];
    for(var index = 0; index < 5; index++)
    {
        newCell[index] = newRow.insertCell(index);
        newCell[index].style.textAlign = "center";
        newCell[index].style.margin = "10px 10px";
        newCell[index].style.padding = "0 10px";
    }

    newCell[0].innerHTML = name;
    newCell[1].innerHTML = age;
    newCell[2].innerHTML = height;
    newCell[3].innerHTML = date;

    var button = document.createElement("button");              // create 'delete' button that
    button.id = "button";                                       // removes the entire row
    button.style.width = "100px";
    button.style.height = "30px";
    button.style.margin = "8px 8px";
    button.innerText = "delete";
    newCell[4].appendChild(button);
    button.onclick = function() {                              
        counter.innerHTML = parseInt(counter.innerHTML) - 1;    // decrementing the counter
        newRow.remove();
    }
}

// checks if the inputted age is between 18 and 60.
function checkAge() { 

    var age = document.getElementById("age").value;
    if ( isNaN(age) || age < 18 || age > 60 ) 
    { 
        return true;
    }else
    {
        return false;
    }
}

// checks if inputted date is 2020
function checkDate() {
    var date = document.getElementById("date").value;
    newDate = new Date(date);
    var year = newDate.getFullYear();

    if(year == 2020)
    {
        return false;
    }else
    {
        return true;
    }
}

