document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var mailtoLink = `mailto:bhycerogroup@gmail.com?subject=Keluh Lesah&body=Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
    window.location.href = mailtoLink;
});