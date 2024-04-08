function enter(val)
{	
	document.getElementById("ans").value+=val;
  
}
function Operate()
{   
    let op = document.getElementById("ans").value;

    if(op.includes("+"))
    {
        let answer = add(op)
        document.getElementById('ans').value = parseInt(answer); 
    }
    if(op.includes("-"))
    {
        let answer = subtract(op)
        document.getElementById('ans').value = parseInt(answer); 
    }
    if(op.includes("/"))
    {
        let answer = divide(op)
        document.getElementById('ans').value = parseInt(answer); 
    }
    if(op.includes("*"))
    {
        let answer = multiply(op)
        document.getElementById('ans').value = parseInt(answer); 
    }

}
function add(number)
    {   var result = [];
        result = number.split('+');
        return parseFloat(result[0]) + parseFloat(result[1]);
    }
function subtract(number)
    {
        var result = [];
        result = number.split('-');
        return parseFloat(result[0]) - parseFloat(result[1]);
    }
function multiply(number)
    {
        var result = [];
        result = number.split('*');
        return parseFloat(result[0]) * parseFloat(result[1]);
    }
function divide(number)
    {
        var result = [];
        result = number.split('/');
        return parseFloat(result[0]) / parseFloat(result[1]);
    }
function clr()
	{
		document.getElementById('ans').value=" ";	
	}