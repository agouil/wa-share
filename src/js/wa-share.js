var WABTN = function() {
    this.show = ((navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) ? true : false);
    this.btnImage = "./src/img/whatsapp.png";
    this.style = null;
}

WABTN.prototype.share = function(data) {
    if (data === null || typeof data !== "object") {
        return;
    }
    if (!(data.id && data.text)) {
        return;
    }

    var img = document.createElement("img");
    img.src = this.btnImage;
    img.style.width = "100%";

    var btn = document.createElement("a");
    btn.href = "whatsapp://send?text=" + encodeURIComponent(data.text);
    btn.className += " wasend";
    btn.appendChild(img)

    var element = document.getElementById(data.id);
    element.style.width = "250px";
    element.appendChild(btn)
    if (!this.show) {
        element.style.display = "none";
    }
}

WABTN = new WABTN();
