function Loader(options) {
    this.options = options;
}

Loader.prototype.load = function (key) {
    return new Promise((resolve)=>{
        this.loadJs(key);
        resolve()
    })
};

Loader.prototype.loadJs = function (key) {
    // 这里还要写代码 暂时先不写了吧
};

// 使用
const req = new Loader({
    $: "https://code.jquery.com/jquery-3.7.0.js",
});

req.load("$").then(($) => {
    console.log($);
});