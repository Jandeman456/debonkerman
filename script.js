// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    card.addEventListener('click', function() {
        this.style.background = this.style.background === 'rgb(240, 248, 255)' ? 'white' : 'aliceblue';
    });
    
    // Add a subtle animation
    setTimeout(() => {
        card.style.opacity = '0';
        card.style.opacity = '1';
    }, 500);
});