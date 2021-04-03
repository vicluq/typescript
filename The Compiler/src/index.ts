// NOTE Watch Mode
// Alows us to save the file and it is automatically compiled
// to achieve that, add the -w flag or --watch when compiling a file
// This will be to the specific file, not all of the TS files in a folder

// NOTE General Watch Mode & tsconfing.json
// We must setup a TSC managed project. Just creat a normal project and use TSC --init
// When we do that, just by running 'tsc' in the folder, we compile all the files and add watch mode to them all
// Kinda of what React projects that inculde TS does...


// NOTE target option
// it specfies to which version the ts file will be compiled to so it can be compatible with more browsers

// NOTE allowJS & checkJS
/*
    allowJS => will also compile JS files in the folder when runnign tsc
    checkJS => will do syntax/errors checks in JS files as well

    nice if the project has both TS and JS, or you want TS compiler benefits
*/

// NOTE sourceMap
/*
   the devtools only shows the JS files ofcourse, but we can see the TS ones by using sourcamaps
   that's helpful when it comes to debugging
*/

// NOTE outDir & rootDir
/*
   rootDir => developmnet files, the one's to be compiled
   outDir => where tosend the compiled files, the one's to be used in the browser
*/