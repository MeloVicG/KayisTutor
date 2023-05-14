// const path = require('path'); //how we require a module in node.js

// module.exports = {
//     entry: './src/index.tsx',
//     // tell webpack to compile ts files/module using ts loader package to js (module = files)
//     module: {
//         rules:[
//             {   // test files when compiled and when pass we will determine what to do
//                 test: /\.ts$/, //regular expression
//                 use: 'ts-loader', // take ts folder and compile into ts (must install)
//                 include: [path.resolve(__dirname, 'src')] //use path module(line 1) for items in the src folder
//             }
//         ]
//     },
//     output:{
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'public')
//         //                  current path of this file, 'public' folder
//     }
// }

//this whole page was pointless but good lesson =(
    // https://www.youtube.com/watch?v=lXWDkPCzeE4&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=2&ab_channel=TheNetNinja