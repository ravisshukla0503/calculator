function dis(a)
{	
	document.getElementById("result").value+=a;
}

function che(){
		var res = [];
		var answer;
		
		if(document.getElementById("result").value.includes("+")){
		res = document.getElementById("result").value.split('+');
		return answer=parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("-")){
		res = document.getElementById("result").value.split('-');
		return answer=parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("/")){
		res = document.getElementById("result").value.split('/');
		return answer=parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = document.getElementById("result").value.split('*');
		return answer= parseInt(res[0]) * parseInt(res[1]);
		}
}
		
function toshowresult(){	
var a = che()
document.getElementById('result').value = a; 
}
	
function clr(){
		document.getElementById('result').value=" ";	
}