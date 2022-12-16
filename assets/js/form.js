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