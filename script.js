function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    //checks first if input is zero
    if(principal <= 0){
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        x.style.display = "none";
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
    //interest computation 
        var interest = principal * years * rate /100;
    //No of Years computation
        var year = new Date().getFullYear()+parseInt(years);
    //Worded output of the program
    //    var text_output = "If you deposit <mark>" + principal + "</mark>, \n at an interest rate of <mark>" + rate + "%</mark>. \n You will receive an amount of <mark>" + interest + "</mark>, \n in the year <mark>" + year + "</mark>";
    //    document.getElementById("output").innerText=text_output;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("rate_val_output").innerText=rate + "%";
        document.getElementById("principal_output").innerText=principal;
        document.getElementById("interest_output").innerText=interest;
        document.getElementById("year_output").innerText=year;
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function hideOutput(){
    document.getElementById("output").style.visibility = "hidden";
}
        