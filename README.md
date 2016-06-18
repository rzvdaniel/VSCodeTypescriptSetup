# Visual Studio Code + TypeScript Setup
Simple setup for TypeScript development with Visual Studio Code.

## Install TypeScript
Method 1. Download installer
https://www.typescriptlang.org/index.html#download-links

Method 2.
Installed TypeScript as a Node.js package
npm install -g typescript

Note:
Please be sure you don't have an older TypeScript version path in your Environment Variables -> System Variables -> PATH.

## Install and open Visual Studio Code
https://code.visualstudio.com

## Clone the repository and open the folder in VS Code

The two key files for the TypeScript project are:

1. tsconfig.json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES5",
        "outDir": "js",
        "rootDir": "src",
        "watch": true
    }
}

- "rootDir": "src" is our container of the TypeScript files (.ts)
- "outDir": "js" is the containter where Javascript files will be generated (.js)
- "watch": true instructs the type script compiler to watch for any ts files changes from the "rootDir"


2. tasks.json
{
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}

- "command": "tsc" executes type script compiler as an external task

## Run the Build Task

Press Ctrl+Shift+B and the HelloWorld.js file will be created in "js" folder. Any subsequent update (save) of the HelloWorld.ts will update the corresponding HelloWorld.js.

![Alt text](TypeScript01.PNG?raw=true "TypeScript Screenshot")