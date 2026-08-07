const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    const { text } = req.body;
    let response = '';

    if (text === '') {
        response = `CON Welcome to Conqueror Mental Health
1. Ndera Neuropsychiatric Hospital
2. Solid Minds Clinic
3. Emergency Support`;
    } else if (text === '1') {
        response = `CON Ndera Hospital Services
1. Book Appointment
2. Pharmacy Refill Request`;
    } else if (text === '2') {
        response = `CON Solid Minds Clinic
1. Request Silent Callback
2. Weekly Wellness Check-in`;
    } else if (text === '3') {
        response = `END Emergency helpline requested. A duty officer will contact you immediately.`;
    } else if (text === '1*1') {
        response = `END Appointment request submitted to Ndera. You will receive an SMS confirmation.`;
    } else if (text === '1*2') {
        response = `END Pharmacy refill logged for Ndera Hospital. Details sent via SMS.`;
    } else if (text === '2*1') {
        response = `END Silent callback logged. A counselor from Solid Minds will reach out discreetly.`;
    } else if (text === '2*2') {
        response = `END Wellness check-in complete. Thank you for using Conqueror.`;
    } else {
        response = `END Invalid selection. Please try again.`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
