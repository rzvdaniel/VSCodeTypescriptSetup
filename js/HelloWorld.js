var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.main = function () {
        var helloWorld = 'Hello World';
        console.log(helloWorld);
        return helloWorld;
    };
    return HelloWorld;
}());
document.body.innerHTML = HelloWorld.main();
