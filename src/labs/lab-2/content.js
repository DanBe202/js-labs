// Create the image once
const img = document.createElement("img");
img.src = 'https://openclipart.org/image/2000px/234444'; // Example image source
img.id = "image";
img.style.display = "none";
img.style.position = "absolute";
img.style.width = "100px";
document.body.appendChild(img);

let interval;
let angle = 0;
let playing = true;

function isYouTubeVideoPage() {
    const url = window.location.href;
    return url.includes("youtube.com/watch?v=") && document.querySelector('video');
}

function rotate(radius, centerX, centerY) {
    interval = setInterval(() => {
        angle = (angle + 2) % 360;
        const radian = (angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(radian);
        const y = centerY + radius * Math.sin(radian);
        img.style.left = `${x}px`;
        img.style.top = `${y}px`
        img.style.transform = `rotate(${angle + 90}deg)`
    }, 50);
}

function startRotation() {
    const radius = 75;
    const centerX = 150;
    const centerY = 150;
    if (playing) {
        rotate(radius, centerX, centerY);
    }
    playing = false;
}

function stopRotation() {
    playing = true;
    clearInterval(interval);
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.show) {
        toggleImage(true); // Show image when requested
    } else {
        toggleImage(false); // Hide image when requested
    }
});

function toggleImage(show) {
    if (show && isYouTubeVideoPage()) {
        img.style.display = 'block'; // Show the image
        startRotation(); // Start rotating
    } else {
        img.style.display = 'none'; // Hide the image
        stopRotation(); // Stop rotating
    }
}

function monitorVideoState() {
    const video = document.querySelector('video'); // Select the video element
    if (video) {
        // Start monitoring play and pause events
        video.addEventListener('play', () => {
            startRotation(); // Show and start rotation
        }, {once: true});

        video.addEventListener('pause', () => {
            stopRotation(); // Hide and stop rotation
        }, {once: true});

        video.addEventListener('ended', () => {
            toggleImage(false); // Hide and stop rotation when video ends
        }, {once: true});
    }
    video.removeEventListener('play', () => {
        startRotation();
    });
    video.removeEventListener('pause', () => {
        stopRotation(); // Hide and stop rotation
    });
    video.removeEventListener('ended', () => {
        toggleImage(false); // Hide and stop rotation when video ends
    });
}

function observePageChanges() {
    const observer = new MutationObserver(() => {
        // Check if we are on a YouTube video page
        if (isYouTubeVideoPage()) {
            monitorVideoState(); // Start monitoring the video state
        } else {
            toggleImage(false); // Hide the image if not on a video page
        }
    });

    // Observe changes in the body
    observer.observe(document.body, {childList: true, subtree: true});
}

// Initial check and start observing
if (isYouTubeVideoPage()) {
    monitorVideoState(); // Only monitor if on a video page
}
observePageChanges(); // Start observing for changes
