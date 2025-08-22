document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;

    // Display the ID card
    document.getElementById('nameDisplay').textContent = name;
    document.getElementById('idDisplay').textContent = studentID;
    document.getElementById('courseDisplay').textContent = course;
    document.getElementById('yearDisplay').textContent = year;

    // Create a string with all the details to encode in the QR code
    const qrData = `Name: ${name}\nID: ${studentID}\nCourse: ${course}\nYear: ${year}`;

    // Generate QR code with all details
    generateQRCode(qrData);

    // Show the ID card
    document.getElementById('idCard').style.display = 'block';
});

function generateQRCode(data) {
    const qr = new QRious({
        element: document.getElementById('qrCanvas'),
        value: data,
        size: 150 // Size of the QR code
    });
}