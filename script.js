var index = 0;
var gfg = new Array(4); 
var rows = 1;
var cols = 0;
  
for (var i = 0; i < gfg.length; i++) { 
    gfg[i] = new Array(4); 
} 
  
function generate_table(i, j) {

      gfg[i][j] = document.createElement("td");
      if(i == 0)
      	var cellText = document.createTextNode("Header " + (j+1));
      
      else
      	var cellText = document.createTextNode( i +"." + (j+1));
        
      gfg[i][j].appendChild(cellText);
      row.appendChild(gfg[i][j]);
}

var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
for (var i = 0; i < 4; i++) {
	var row = document.createElement("tr");
  for(var j = 0; j < 4; j++){
		generate_table(i, j);
  }
  tblBody.appendChild(row);
  }
tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border", "2");

function down() {
  var down = document.createElement("BUTTON");
  var t = document.createTextNode("Down");
  down.appendChild(t);
  document.body.appendChild(down);
  down.onclick = function(){
  if((rows+1) > 3){
  }
  else{
  gfg[rows][cols].style.border ='1px solid black';
	gfg[++rows][cols].style.border ='5px solid black';
}
}
}
function up() {
  var up = document.createElement("BUTTON");
  var t = document.createTextNode("Up");
  up.appendChild(t);
  document.body.appendChild(up);
  up.onclick = function(){
  if((rows-1) <=0){
  }
  else{
  gfg[rows][cols].style.border ='1px solid black';
	gfg[--rows][cols].style.border ='5px solid black';
}
}
}
function left() {
  var left = document.createElement("BUTTON");
  var t = document.createTextNode("Left");
  left.appendChild(t);
  document.body.appendChild(left);
  left.onclick = function(){
  if((cols-1) <0){
  }
  else{
  gfg[rows][cols].style.border ='1px solid black';
	gfg[rows][--cols].style.border ='5px solid black';
}
}
}
function right() {
  var right = document.createElement("BUTTON");
  var t = document.createTextNode("Right");
  right.appendChild(t);
  document.body.appendChild(right);
  right.onclick = function(){
  if((cols+1) > 3){
  }
  else{
  gfg[rows][cols].style.border ='1px solid black';
	gfg[rows][++cols].style.border ='5px solid black';
}
}
}
gfg[rows][cols].style.border ='5px solid black';
up();
down();
left();
right();

function MarkCell(){
  var markCell = document.createElement("BUTTON");
  var t = document.createTextNode("MarkCell");
  markCell.appendChild(t);
  document.body.appendChild(markCell);	
  markCell.onclick = function(){
 		gfg[rows][cols].style.backgroundColor ='yellow';
  }
  }
MarkCell();