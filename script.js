// Select the bucket list element
const bucketList = document.getElementById('bucket-list');

// Add a click event listener to the bucket list
bucketList.addEventListener('click', function (event) {
    // Check if the clicked element is a list item
    if (event.target && event.target.nodeName === 'LI') {
        // Toggle the "completed" class on the clicked list item
        event.target.classList.toggle('completed');

        // Change the icon dynamically
        const icon = event.target.querySelector('.icon');
        if (event.target.classList.contains('completed')) {
            icon.textContent = '✔️'; // Completed icon
        } else {
            icon.textContent = '🌸'; // Pending icon
        }
    }
});
