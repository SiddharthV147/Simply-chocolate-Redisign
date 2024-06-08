document.getElementById('search-icon').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('main').style.filter = 'blur(8px)';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('main').style.filter = 'none';
});
