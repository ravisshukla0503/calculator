var c=1;
console.log(c);
const result=document.getElementById("result");
function dis(a)
{	
	if(a=='='){
	    const ans=answer();
		result.value=ans;
		console.log(result.value);
		console.log(c);
		c=1;

	}
	else if(c==1 && (a=='+'|| a=='-' || a=='*' ||a=='/')){
		result.value+=a; 
		c++;
		console.log(result.value);
        console.log(c);
   }
   else if(c==2 && (a=='+'|| a=='-' || a=='*' ||a=='/')){
	   const ans = answer();
	   result.value=ans+a; 
	   console.log(result.value);
	   console.log(c);
	   
   }
   
	else{
	   result.value+=a;
	   console.log(result.value);
	   console.log(c);
	}
	
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
 





	