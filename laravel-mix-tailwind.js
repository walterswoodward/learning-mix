// Saving this for reference, but commenting it out to prove that this is now being referenced form the npm package `laravel-mix-tailwind`

// let mix = require('laravel-mix');

// class Tailwind {
//     dependencies() {
//         // This is needed since a full reload is necessary after any new packages are added -- this is not the default behavior though
//         this.requiresReload = `Tailwind has now been installed. Please ensure that
//         your tailwind.js configuration file (node_modules/.bin.tailwind init) has
//         been created, and then run "npm run dev" again.
//         `;

//         // If the user doesn't have tailwind installed yet, then install it
//         return ['tailwindcss'];
//     }

//     register(configPath = './tailwind.js') {
//         this.configPath = configPath;
//     }

//     boot() {
//         if (Mix.components.has('sass')) {
//             Config.processCssUrls = false;
//         }
//         let tailwindcss = require('tailwindcss');
//         Config.postCss.push(tailwindcss('./tailwind.config.js'));
//     }
// }

// mix.extend('tailwind', new Tailwind());
