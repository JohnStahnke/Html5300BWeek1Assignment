var varsum = 0;
var varcount = 0;
var varavg = 0;
var varinput = 0;

$(document).ready(function () {

    $("input").change(function () {
        calculateSum(parseInt(this.value, 10));
    });

        document.getElementById("btnClearValues").addEventListener("click", clearValues);
    });


function calculateSum(data) {
 
    varinput = data;

    if (varcount > 0)
    {
        varcount = parseInt($('#count').val(), 10);
        varavg = parseInt($('#avg').val(), 10);
    }


    if (!isNaN(varinput))
    {
        varcount += 1;
        varsum += varinput;
        varavg = varsum / varcount;

        //$("#sum").attr('value', varsum);
        //$("#avg").attr('value', varavg);
        //$("#count").attr('value', varcount);
        displayValues();
    }
    else
    {
        alert("You need a integer in the input textbox!");
    }
}

function clearValues() {
    alert("Clear Values was hit");
    //in here I need to set all variables to zero and clear textboxes
    varsum = 0;
    varavg = 0;
    varcount = 0;
    displayValues();
}

function displayValues() {
    $("#sum").attr('value', varsum);
    $("#avg").attr('value', varavg);
    $("#count").attr('value', varcount);
}

