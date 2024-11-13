const phrases = ["Hello,", "I'm Anuki"];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let delayAfterPhrase = 2000;

function type() {
    const typingText = document.getElementById('typing-text');
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        // Typing
        typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(() => {
                type();
            }, delayAfterPhrase);
            return;
        }
    } else {
        // Deleting
        typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    // Adjust speed for deleting
    const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
    setTimeout(type, speed);
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const contactButton = document.querySelector('.contact');
    const contactForm = document.getElementById('contactForm');

    function openModal() {
        modalOverlay.classList.add('active');
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modalOverlay.classList.remove('active');
        }, 300);
    }

    contactButton.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        closeModal();
    });
});