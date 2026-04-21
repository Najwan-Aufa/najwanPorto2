document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const to = "emailkamu@gmail.com"; // 🔴 GANTI EMAIL KAMU DI SINI

    const mailSubject = `Permintaan Konsultasi: ${subject}`;
    const mailBody =
`Halo Najwan,

Nama    : ${name}
Email   : ${email}
Proyek  : ${subject}

Pesan:
${message}

—
Dikirim melalui website portofolio`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.open(gmailLink, '_blank');
});