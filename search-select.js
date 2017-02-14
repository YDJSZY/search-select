/**
 * Created by Apple on 17/2/14.
 */
var SearchSelect = function (config) {
    this.config = config;
    this.targetEle = null;
    this.pagination = false;
    this.render();
}

SearchSelect.prototype.render = function () {
    for(var p in this.config) {
        if(this.config.hasOwnProperty(p)){
            this[p] = this.config[p];
        }
    };
    var selectContainer = document.createElement("div");
    selectContainer.setAttribute("class","select-container");
    var searchInput = document.createElement("input");
    searchInput.setAttribute("class","search-input");
    searchInput.onclick = function (e) {
        var event = e || window.event;
        event.cancelBubble || event.stopPropagation();
        searchPanel.style.display = "block";
        this.getData();
    };
    document.onclick = function (e) {
        var event = e || window.event;
        event.cancelBubble || event.stopPropagation();
        searchPanel.style.display = "none";
    }
    selectContainer.appendChild(searchInput);
    var searchPanel = document.createElement("div");
    searchPanel.setAttribute("class","search-panel")
    this.searchPanelUl = document.createElement("ul");
    this.searchPanelUl.setAttribute("class","search-panel-ul");
    searchPanel.appendChild(this.searchPanelUl);
    selectContainer.appendChild(searchPanel);
    this.loadingSpan = document.createElement("span");
    var loadingGif = document.createElement("img");
    loadingGif.src = "./imgs/loading.gif";
    this.loadingSpan.setAttribute("class","loading-span");
    this.loadingSpan.appendChild(loadingGif);
    searchPanel.appendChild(this.loadingSpan);
    this.targetEle.parentNode.replaceChild(selectContainer,this.targetEle);
}

SearchSelect.prototype.createLi = function () {
    var li = document.createElement("li");
    return li;
}

SearchSelect.prototype.pushData = function (data) {
    var frag = document.createDocumentFragment();
    for(var i = 0,l = data.length; i < l; i++) {
        var li = this.createLi();
        li.innerHTML = data[i];
        frag.appendChild(li)
    }
    this.searchPanelUl.appendChild(frag);
}

SearchSelect.prototype.getData = function () {
    
}