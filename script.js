function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    //checks first if input is zero
    if(principal == 0){
        alert("Enter a positive number!");
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
    //interest computation 
        var interest = principal * years * rate /100;
    //No of Years computation
        var year = new Date().getFullYear()+parseInt(years);
    //Worded output of the program
        var text_output = "If you deposit " + principal + ", \n at an interest rate of " + rate + "%. \n You will receive an amount of " + interest + ", \n in the year " + year;
        document.getElementById("output").innerText=text_output;
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        