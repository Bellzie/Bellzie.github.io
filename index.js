function Funfacts() {
    // Henter referansen til 'funfacts-info'-elementet.
    const funfactsElement = document.getElementById('funfacts-info');
    
   // Sjekker om 'funfacts-info'-elementet er synlig.
    if (funfactsElement.style.display === 'block') {
        // Hvis det er synlig, skjul det.
        funfactsElement.style.display = 'none';
        // Hvis det ikke er synlig, vis det.
    } else {
        funfactsElement.style.display = 'block';
    }
}
