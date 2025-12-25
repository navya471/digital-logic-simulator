let currentGate = "AND";

function setGate(gate) {
    currentGate = gate;
    document.getElementById("gate").innerText = gate;
    calculate();
}

function calculate() {
    let A = parseInt(document.getElementById("a").value);
    let B = parseInt(document.getElementById("b").value);
    let result = 0;

    switch (currentGate) {
        case "AND":
            result = A & B;
            break;
        case "OR":
            result = A | B;
            break;
        case "XOR":
            result = A ^ B;
            break;
        case "NAND":
            result = !(A & B) ? 1 : 0;
            break;
        case "NOR":
            result = !(A | B) ? 1 : 0;
            break;
    }

    document.getElementById("out").innerText = result;
}
