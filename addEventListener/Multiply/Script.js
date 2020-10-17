var p1 = 5;
var p2 = 7;
var p3 = 8;
 document.getElementById("myBtn"). addEventListener 
    ("click", function(){
myFunction (p1,p2,p3);
});
function myFunction (a,b,c){
var result = a * b * c ;
document.getElementById("demo"). innerHTML = 
result;
}
