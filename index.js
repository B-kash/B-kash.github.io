$(document).ready(function () {
    console.log("Document is ready");
    $('#book').turn({
        width: 1000,
        height: 700,
        autoCenter: true,
        gradients: true,
        acceleration: true,
        inclination: 100,
    });
});
$(document).keydown(function (e) {
    if (e.key === "ArrowRight") {
        $('#book').turn('next');
    } else if (e.key === "ArrowLeft") {
        $('#book').turn('previous');
    }
});
function goToPage(pageNum) {
    $('#book').turn('page', pageNum);
}

function animateProgressBars() {
    document.querySelectorAll('.progress-bar div').forEach(bar => {
        bar.style.setProperty('--width', bar.getAttribute('data-width'));
        bar.classList.add('animate');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateProgressBars();
});
