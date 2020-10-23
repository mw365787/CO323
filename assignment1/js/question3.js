
var moveCounter = 0;
var playerTurn = randomInteger();
function randomInteger() {
    return Math.floor(Math.random() * 2 + 1);           //random number between 1 and 2 (to decide whether X or O starts)
  }


function reset(){
    document.getElementById("container").innerHTML = "";
    document.getElementById("playerTurn").innerHTML = "Player number 1";
    moveCounter = 0;
}


function draw(){

    this.reset();                                           //prevents from creating multiple grids

    var div = document.getElementById("container");
    var id = 1;
    for(var row = 1; row <= 3; row++)
    {
        switch(col)
        {
            case 1:                                             //depending on the row switch to one of the divs
                var div = document.getElementById("row1");
                break;
            case 2: 
                var div = document.getElementById("row2");
                break;
            case 3:
                var div = document.getElementById("row3");
                break;
        }

        for(var col = 1; col <= 3; col++)
        {
            var box = document.createElement("div");            //create a box with properties like
            box.className="box";                                // 'id' and 'onclick'
            box.setAttribute("onclick", "game(this);");
            box.id= id;
            div.appendChild(box);
            id++;
        }   
    }
}


function game(obj){
    this.obj = obj;
        if(playerTurn % 2 == 0)
        {
            document.getElementById("playerTurn").innerHTML = "Player number 2";            // each time you click it creates 'div' element
            obj.innerHTML = "X";
            obj.removeAttribute("onclick");
            playerTurn++;
        }else
        {
            document.getElementById("playerTurn").innerHTML = "Player number 1";
            obj.innerHTML = "O";
            obj.removeAttribute("onclick");
            playerTurn++;
        }
        moveCounter++;

        if(checkWin(obj))
        {                                                                           //checks if a player won and ends game if true
            alert("Congratulations! You've won!");
            for(var i = 1; i <= 9; i++)
            {
                document.getElementById(i).removeAttribute("onclick");
            }
            return;
        }

        
        if(moveCounter == 9)
        {
            alert("It's a draw. Try again.");
            this.reset();
        }
}


function checkWin(object){
    var index = 0;
    var test = object.innerText;
                                                                                //all the div blocks has id from 1-9
   var winConditions = [ ["1", "4", "7"], ["1", "2", "3"], ["3", "6", "9"],      //     [ 1 ][ 2 ][ 3 ]
                        ["7", "8", "9"], ["2", "5", "8"], ["4", "5", "6"],       //     [ 4 ][ 5 ][ 6 ]
                        ["1", "5", "9"], ["7", "5", "3"] ];                      //     [ 7 ][ 8 ][ 9 ]
                                                                                //so this array is list of all possible conditions
    
    for(var i = 0; i < winConditions.length; i++)
    {
        index = i;
        var string = "";
        for(var j = 0; j < 3; j++)
        {                                                                                       // iterates over all elements in the array
            var content = document.getElementById(winConditions[i][j]).innerText;               // and adds the contents of them to a string
            string += content;                                                                  
        }
        if(string === "XXX" || string === "OOO")                                                //if string is XXX or OOO then
        {                                                                                       //it colors the tiles and returns true
            for(var n = 0; n < 3; n++)
            {                                                                           
                document.getElementById(winConditions[i][n]).style.backgroundColor = "yellow";
            }
            return true;
        }
    }
    

    return false;
    
}