class HelloWorld {
    public static main(): string {
        var helloWorld = 'Hello World';
        console.log(helloWorld);
        return helloWorld;
    }
}

document.body.innerHTML = HelloWorld.main();
