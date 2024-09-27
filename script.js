window.addEventListener('scroll', function() {
    const timeline = document.getElementById('timeline');
    const timelinePosition = timeline.getBoundingClientRect().top;

    // Si el timeline está en la vista (aproximadamente 50px desde el top)
    if (timelinePosition < window.innerHeight - 50) {
        timeline.classList.add('show'); // Añade la clase para mostrar la línea del tiempo
    }
});