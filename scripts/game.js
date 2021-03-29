// Function render
// Tham so dau vao Row - so hang
// Tham so dau vao Column - so cot
function render(row,column) {
    var resume = "<table cellpadding='0' cellspacing='0'>";
    for(var i=0;i<row;i++){
        resume +="<tr>"; //thêm một hàng
        for(var j=0;j<column;j++){
            resume +="<td>";
            resume +="<button id='but"+i+"_"+j+"'></button>";
            resume +="</td>";
        }
        resume +="</tr>";
    }
    resume +="</table>";
    return resume;
}
// Function palygame
// get value input[type=text id=row] and get value input[type=text id=column]
function playgame() {
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;
    // gán kết quả trả về của hàm render cho thuộc tính innerHTML của div id=main
    document.getElementById("main").innerHTML = render(rows,columns);
}
var Player1 = {
    color: 'red',
    name: 'Player1',
    id: 1
}

var Player2 = {
    color: 'black',
    name: 'Player2',
    id: 2
}

var  = {
    position(x, y),
    type = player1,
        
}

