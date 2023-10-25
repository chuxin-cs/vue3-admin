function Loader(options) {
    this.options = options;
}

Loader.prototype.load = function (key) {
    return this.loadJs(key);
};

Loader.prototype.loadJs = function (key) {
    var head =
        document.getElementsByTagName("head")[0] || document.documentElement;

    return new Promise((resolve, reject) => {
        let src = this.options[key];
        // 这里开始写文件
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        script.onreadystatechange = function () {
            var state = this.readyState;
            console.log(state);
            if (state === "loaded" || state === "complete") {
                script.onreadystatechange = null;
                resolve();
            }
        };
        // 这里我研究研究怎么兼容 body 或者说是 head
        head.appendChild(script);
    });
};

// 使用
const req = new Loader({
    $: "https://code.jquery.com/jquery-3.7.0.js",
});

req.load("$").then(() => {
    console.log($);
});