// deposite balance section

document.getElementById('deposite-button').addEventListener('click', function () {

    const previous_blance = parseFloat(document.getElementById('deposite-amount').innerText);
    //const  = delosite_blanace.value;
    //console.log(previous_blance);
    const deposite_blance = document.getElementById('new-deposite-amount');
    const entered_deposite_blance = parseFloat(deposite_blance.value);
    //const  = delosite_blanace.value;
    //console.log(entered_deposite_blance);
    const new_deposite_balance = previous_blance + entered_deposite_blance;

    document.getElementById('deposite-amount').innerText = new_deposite_balance;

    const balance = document.getElementById('balance');
    const current_balance = parseFloat(balance.innerText);
    //console.log(current_balance);
    const new_balance = current_balance + entered_deposite_blance;
    balance.innerText = new_balance;
    deposite_blance.value = "";


})


// withdraw balance section
let new_widthdraw_balance = 0;
document.getElementById('withdraw-button').addEventListener('click', function () {

    const previous_blance = parseFloat(document.getElementById('balance').innerText);
    console.log(previous_blance);
    const withdraw_blance = document.getElementById('new-widhrow-amound');
    const entered_withdrwa_blance = parseFloat(withdraw_blance.value);
    // console.log(entered_withdrwa_blance);



    //const balance = document.getElementById('balance');
    //const current_balance = parseFloat(balance.innerText);
    //console.log(current_balance);
    if (previous_blance < entered_withdrwa_blance) {
        document.getElementById('error_message').innerText = "sorry!! plese deposite";
    }
    else {
        new_widthdraw_balance = new_widthdraw_balance + entered_withdrwa_blance;
        document.getElementById('withdraw-amount').innerText = new_widthdraw_balance;
        const new_balance = previous_blance - entered_withdrwa_blance;
        balance.innerText = new_balance;
        document.getElementById('error_message').innerText = "";
        withdraw_blance.value = "";

    }

    //deposite_blance.value = "";


})