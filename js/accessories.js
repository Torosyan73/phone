const accessoriesList = document.querySelectorAll('[data-tab]');
const accessoriesBox = document.querySelectorAll('[data-tab-body]');
accessoriesList.forEach(function(item){
    item.addEventListener('click', function(){
        accessoriesBox.forEach(function(item){
            item.classList.add('hidden');
        });
        const clickbox = document.querySelector('#' + this.dataset.tab);
        clickbox.classList.remove('hidden');
    });
});