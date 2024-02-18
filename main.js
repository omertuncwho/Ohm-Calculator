function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);

    if (!isNaN(voltage) && !isNaN(current)) {
        const resistanceResult = voltage / current;
        document.getElementById('result').innerText = `Resistance (R) = ${resistanceResult.toFixed(2)} ohms`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        const currentResult = voltage / resistance;
        document.getElementById('result').innerText = `Current (I) = ${currentResult.toFixed(2)} amps`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        const voltageResult = current * resistance;
        document.getElementById('result').innerText = `Voltage (V) = ${voltageResult.toFixed(2)} volts`;
    } else {
        document.getElementById('result').innerText = "Please provide any two values.";
    }
}
