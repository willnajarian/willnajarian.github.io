/* 
20 BEGINNERS LUCK 
20 NOW WE'RE COOKIN
5 IF TWO'S A COMPANY....
15 THERE'S SOMETHING ABOUT FIREBASE 
30 RENDER IT
*/
/*

api

google calendar 
firebase
fill in buttons and authentification 
express.js

autocomplete 
logic 
search bar for different things
autcomplete form 
tutorial look for
fill in blanks or offer suggestions at a minimum 


import news 
look up documentation 



choose images for game pieces using third part apis
make game such as..
    space invaders
    head soccer 
    thales circle game
auto complete for notes on game?

light dark themes

mobile frinedly 
    grid system 
    google mobile tutorial 

react would handle mobile friendly 

continous live updates firing 
real time applications 

no css libraries
    MOBILE FRIENDLY??

react?
 */

export const start = function(arg) {
    let div = document.createElement(arg);
    let p = document.createElement('h1');
    p.innerText = 'PEE PEE POO POO';
    p.id = 'start';
    div.appendChild(p);
    return div;
}

export const loadDom = function() {
    const $root = $('#root');
    
    let s = start('div');
    $root.append(s);
}

$(function() {
    loadDom();
})
