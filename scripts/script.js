function showModule(moduleNumber) {
    var modules = document.querySelectorAll('.module');
    for (var i = 0; i < modules.length; i++) {
        modules[i].style.display = 'none';
    }
    document.getElementById('module' + moduleNumber).style.display = 'block';
    
}