
/**
 * Sends data collected in contact form to email after the submit button is clicked calls the toggleThankYouMessage function
 * Code written with the help of the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'under_the_sea';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function () {
            // success sending email
        }, function (error) {
            // error message
            console.log('FAILED...', error);
        });
    toggleThankYouMessage();
});

/**
 * Removes the contact form and displays a thank you message on the contact page after form submission
 */
function toggleThankYouMessage() {
    let html = `
            <p>Thank you for leaving a message.</p>
            <br>
            <a href="index.html" class="game-btn">Return to game</a>
            `;
    document.getElementById('form').innerHTML = html;
}
  