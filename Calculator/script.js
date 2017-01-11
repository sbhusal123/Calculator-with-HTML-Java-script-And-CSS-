check=1;
function num(value)
{
	x=value;
	if (x!=11 && x!=12)
	{
		if (check==1)
		{
			document.getElementById("display").value=x;
			check=check+1;
		}
		else
		{
			document.getElementById("display").value+=x;
		}
	}
	else if(x==11)
	{
		document.getElementById("display").value=0;
		check=1;
		blink();
		checkpoint=1;
		sgn=1;
	}
	else if(x==12)
	{
		document.getElementById("display").value=0;
		blink();
		check=1;
		stat=0;
		processvalue=0;
		checkpoint=1;
		sgn=1;
	}
}
function blink()
{
	document.getElementById("display").style.color="white";
	setTimeout(function(){
		document.getElementById("display").style.color="black";
	},100);
}
processvalue=0;
stat=0;
function process(value)
{
	x=value;
	blink();
	check=1;
	inputstat();
	chngprocess(x);
	checkpoint=1;
	if (stat==1)
	{
		var1=document.getElementById("display").value;
		inputstat();
	}
	else if(stat>1)
	{
		var2=document.getElementById("display").value;
		result(var1,var2);
		chngprocess(x);
	}
}
function inputstat()
{
	if (stat==0)
	{
		stat=1;
	}
	else
	{
		stat=stat+1;
	}
}
function chngprocess(x)
{
	if (x==92)
	{
		processvalue=92;
	}
	if (x==93)
	{
		
		processvalue=93;
	}
	if (x==94)
	{
		processvalue=94;
	}
	if (x==95)
	{
		processvalue=95;
	}
} 
function result(var1,var2)
{
	x=parseFloat(var1)
	y=parseFloat(var2)
	var c;
    if (processvalue==92)
	{
		c=x+y;
	}
	else if (processvalue==93)
	{
		c=x-y;
	}
	else if (processvalue==94)
	{
		c=x*y;
	}
	else if (processvalue==95)
	{
		c=x/y;
	}
	document.getElementById("display").value=c;
}
function off()
{
	document.getElementById("display").id="display1";
	document.getElementById("display1").value="";
	check=1;
	stat=0;
	processvalue=0;
}


function on()
{
	document.getElementById("display1").id="display";
	document.getElementById("display").style.color="black";
	document.getElementById("display").value=0;
}
checkpoint=1;
function point()
{
	if (checkpoint==1)
	{
	blink();
	document.getElementById("display").value+=".";
	checkpoint=checkpoint+1;
	}
	else if(checkpoint>1){
		window.alert("Use Decimal Point Properly.");
	}
	
}
sgn=1;
function sign()
{
	if (sgn%2!=0)
	{
		document.getElementById("display").value="";
		blink();
		document.getElementById("display").value+="+";
		sgn=sgn+1;
		check=2;
	}
	else if(sgn%2==0)
	{
		
		document.getElementById("display").value="";
		blink();
		document.getElementById("display").value+="-";
		sgn=sgn+1;
		check=2;
	}
}
function about()
{
	window.alert("Developed By: Surya Bhusal\n\nThere might be some problem in the calculator\nhelp us to improve.")
}