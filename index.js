function Funfacts() {
    const funfactsElement = document.getElementById('funfacts-info');
    
   
    if (funfactsElement.style.display === 'block') {
        funfactsElement.style.display = 'none';
    } else {
        funfactsElement.style.display = 'block';
    }
}