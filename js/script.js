// tab = таб-вкладки
// tabContent = содержимое вкладки
// show = показывает контент вкладки
// hide = скрывает контент вкладки
// activeTab = стлизует активную таб-вкладку

// создание перменных и вызов функции 
var tab = document.getElementsByClassName("tab");
var tabContent = document.getElementsByClassName("tabContent");
hideTabs(1);

// данная функция скрывает все табы,которые не активны
function hideTabs(a){
    for(var i = a; i < tabContent.length; i++){
        tab[i].classList.remove("activeTab");
        tabContent[i].classList.add("hide");
        tabContent[i].classList.remove("show");
    }
}

// при клике на таб будет происходить показ таб-контента и активной вкладки таба
document.getElementById("tabs").onclick = function(event){
    if(event.target.className == "tab"){
        for(var i = 0; i < tab.length; i++){
            if(event.target == tab[i]){
                showTabs(i);
                break;
            }
        }
    }
}

// функция показывает таб-контент и делает кликнутую вкладу активной
function showTabs(b){
    if(tabContent[b].classList.contains("hide")){
        hideTabs(0);
        tab[b].classList.add("activeTab");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}