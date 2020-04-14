function calcCalcIFI() {
    var toAdd = document.getElementsByClassName("toAdd");
    var res = document.getElementsByClassName("resIFI");
    var princ = (parseInt(toAdd[0].value) * 0.7);
    var autres = isNaN(parseInt(toAdd[1].value)) ? 0 : parseInt(toAdd[1].value);
    var dettes = isNaN(parseInt(toAdd[2].value)) ? 0 : parseInt(toAdd[2].value);
    var result = princ + autres - dettes;
    var coef = [0.005, 0.007, 0.01, 0.0125, 0.01];
    var arr = [800001, 1300001, 2570001, 5000001, 10000001];
    var IFI = 0;
    var tmp = result;
    if (result < arr[0]) {
        res[0].value = result;
        res[1].value = 0;
        return;
    }
    for (let i = 4; i > -1; i--)
        if (result > arr[i]) {
            IFI += (tmp - (arr[i] - 1)) * coef[i];
            tmp -= result - (arr[i] - 1);
        }
    IFI = IFI - (17500 - (result * 0.0125));
    res[0].value = result;
    res[1].value = IFI;
    calcDonIFI();
}
function setPrecision(num) {
    var test = parseInt(num);
    if (num === test)
        return num
    else {
        return num.toFixed(2);
    }
}
function setIR() {
    var montant = document.getElementById("montantDonIR");
    var reduc = document.getElementById("reducIR");
    var don = document.getElementById("montantDonReducIR");
    var btn = document.getElementById("btnDonIR");
    if (parseInt(montant.value) > 552) {
        reduc.value = setPrecision(parseInt(montant.value) * 0.66);
        don.value = setPrecision(parseInt(montant.value) - parseInt(montant.value) * 0.66);
    } else {
        reduc.value = setPrecision(parseInt(montant.value) * 0.75);
        don.value = setPrecision(parseInt(montant.value) - parseInt(montant.value) * 0.75);
    }
    btn.innerText = montant.value;
}
function calcDonIFI() {
    var opti = document.getElementById("opti");
    var don = document.getElementById("donIFI");
    var newIFI = document.getElementById("IFIafter");
    var IFInet = document.getElementById("IFInet");
    var btn = document.getElementById("btnDonIFI");

    if (isNaN(parseFloat(IFInet.value))) return;
    opti.value = setPrecision(parseFloat(IFInet.value) * 1.33332);
    btn.innerText = setPrecision(parseFloat(opti.value)).toString();
    newIFI.value = setPrecision(parseFloat(IFInet.value) - parseFloat(opti.value) * 0.75);
    if (isNaN(parseFloat(don.value))) return;
    btn.innerText = setPrecision(parseFloat(don.value)).toString();
    newIFI.value = setPrecision((parseFloat(IFInet.value) - parseFloat(don.value) * 0.75) <= 0 ? 0 : (parseFloat(IFInet.value) - parseFloat(don.value) * 0.75));
}