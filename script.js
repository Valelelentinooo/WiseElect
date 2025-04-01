function scrollToContent() {
    const content = document.getElementById('content');
    content.scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Initialize click handlers
window.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            showPopup(contentId);
        });
    });

    // Back to top button functionality
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function showPopup(type) {
    const popup = document.getElementById(type + 'Popup');
    const activePopup = document.querySelector('.popup-overlay.active');
    
    // Close any active popup
    if (activePopup) {
        activePopup.classList.remove('active');
    }
    
    // Show the new popup
    popup.classList.add('active');
}

function closePopup(type) {
    const popup = document.getElementById(type + 'Popup');
    if (popup) {
        popup.classList.remove('active');
    }
}

// Close popup when clicking outside
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup-overlay');
    const clickedCard = event.target.closest('.card');
    
    popups.forEach(popup => {
        if (popup.classList.contains('active') && 
            !event.target.closest('.popup-content') && 
            !clickedCard) {
            popup.classList.remove('active');
        }
    });
});
