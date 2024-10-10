document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Simulate sending data to the server
    console.log('Customer Information:', {
        name: name,
        email: email,
        phone: phone,
        address: address
    });

    // Display message
    alert('Form submitted successfully!');

    // Reset form fields
    document.getElementById('customerForm').reset();
});



document.getElementById('customerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Send data to server
    try {
        const response = await fetch('https://your-backend-url.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                address: address,
            }),
        });

        if (response.ok) {
            alert('Customer data saved successfully!');
            document.getElementById('customerForm').reset();
        } else {
            alert('Error saving data');
        }
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('Error saving data');
    // }
});
