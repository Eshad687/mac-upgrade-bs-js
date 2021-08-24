//function for updating total
function updateTotal() {
    const totalCost = document.getElementById('total-cost');
    const totalBill = document.getElementById('total-bill');
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const delivaryCharge = document.getElementById('delivary-cost').innerText;

    totalCost.innerText = 1299 + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delivaryCharge);
    totalBill.innerText = 1299 + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delivaryCharge);
}

//function for updating extension price
function updatePrice(extension, price) {
    document.getElementById(extension + '-cost').innerText = price;

    updateTotal();
}


//memory extension buttons event handler. 
//added value. used event bubble and event delegation
document.getElementById('memory-extension').addEventListener('click', function (event) {
    if (!isNaN(parseFloat(event.target.value))) {


        updatePrice('memory', parseFloat(event.target.value));
    }


});

//storage extension buttons event handler. 
//added value. used event bubble and event delegation
document.getElementById('storage-extension').addEventListener('click', function (event) {
    if (!isNaN(parseFloat(event.target.value))) {


        updatePrice('storage', parseFloat(event.target.value));
    }


});

//delivary cost buttons event handler. 
//added value. used event bubble and event delegation
document.getElementById('delivary-charge').addEventListener('click', function (event) {
    if (!isNaN(parseFloat(event.target.value))) {


        updatePrice('delivary', parseFloat(event.target.value));
    }


});

//discount button event handler

document.getElementById('discount-button').addEventListener('click', function () {
    const discountInputField = document.getElementById('discount-input');
    const totalCost = document.getElementById('total-cost').innerText;
    const totalBill = document.getElementById('total-bill');

    if (discountInputField.value == 'stevekaku') {
        const discountAmount = parseFloat(totalCost) * 20 / 100;
        totalBill.innerText = parseFloat(totalCost) - discountAmount;

    }
    discountInputField.value = '';

});
