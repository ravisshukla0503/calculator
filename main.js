function dis(a)
{	
	document.getElementById("result").value+=a;
}

function answer(){
		var res = [];
		var ans;
		
		if(document.getElementById("result").value.includes("+")){
		res = document.getElementById("result").value.split('+');
		return ans=parseFloat(res[0]) + parseFloat(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("-")){
		res = document.getElementById("result").value.split('-');
		return ans=parseFloat(res[0]) - parseFloat(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("/")){
		res = document.getElementById("result").value.split('/');
		return ans=parseFloat(res[0]) / parseFloat(res[1]);
		}
		
		else{
		res = document.getElementById("result").value.split('*');
		return ans= parseFloat(res[0]) * parseFloat(res[1]);
		}
}
		

function clr(){
		document.getElementById('result').value=" ";	
}

function toshowresult(){
	const ab = answer();
	document.getElementById("result").value = ab;
}