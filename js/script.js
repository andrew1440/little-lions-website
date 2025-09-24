// Basic JavaScript for interactivity

// Donate button click event
document.querySelector('.donate-btn').addEventListener('click', function() {
    window.location.href = 'donate.html';
});

// Enroll Now button click event
document.querySelector('.cta-btn').addEventListener('click', function() {
    window.location.href = 'admissions.html';
});

// Learn More link
document.querySelector('.learn-more').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'about.html';
});

// Donation form interactivity
if (document.querySelector('.donation-form')) {
    // Amount buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('custom-amount').value = this.getAttribute('data-amount');
        });
    });

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Dedicate gift checkbox
    document.getElementById('dedicate').addEventListener('change', function() {
        document.getElementById('dedication').style.display = this.checked ? 'block' : 'none';
    });

    // Form submission
        document.querySelector('.donation-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your donation! This is a demo; in a real application, this would process the payment.');
        });
    }
    
    // Admissions form submission
    if (document.querySelector('.admissions form')) {
        document.querySelector('.admissions form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your application! This is a demo; in a real application, this would be processed.');
        });
    }
    
    // Contact form submission
    if (document.querySelector('.contact form')) {
        document.querySelector('.contact form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! This is a demo; in a real application, this would be sent.');
        });
    }