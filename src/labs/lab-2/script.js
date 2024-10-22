document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    let isImageVisible = false; // Track the state of the image

    toggleButton.addEventListener('click', () => {
        isImageVisible = !isImageVisible; // Toggle the state

        // Send a message to the content script to toggle the image
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {show: isImageVisible});
        });

        // Update button text based on the state
        toggleButton.textContent = isImageVisible ? 'Hide Picture' : 'Show Picture and Rotate';
    });
});
