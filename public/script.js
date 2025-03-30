document.getElementById('plannerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const senderEmail = `${username}@gmail.com`; // Construct sender email
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
    
    const statusDiv = document.getElementById('status');
    
    const emailContent = `
        <h2>Event Invitation</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Details:</strong></p>
        <p>${message}</p>
    `;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: senderEmail, // Send constructed sender email
            recipient: recipient,
            subject: subject,
            html: emailContent
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        statusDiv.style.display = 'block';
        statusDiv.className = 'success';
        statusDiv.textContent = 'Email sent successfully!';
        this.reset();
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        statusDiv.style.display = 'block';
        statusDiv.className = 'error';
        statusDiv.textContent = 'Error sending email: ' + error.message;
    });
});