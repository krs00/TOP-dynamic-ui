const button = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the dropdown content when the button is clicked
button.addEventListener('mouseover', function() {

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});


dropdownContent.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
});
