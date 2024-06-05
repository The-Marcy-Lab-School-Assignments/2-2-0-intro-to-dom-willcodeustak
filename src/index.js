/** FEEDBACK: Great job getting all test cases to pass! 
 * Here are some questions to sit with, could we have made this code DRYer? 
 * Could we have used a function? 
 * Also, we always want to have our runner function so make sure to include that in the future!
 */

const body = document.querySelector('body');
const header = document.createElement('h1');
header.id = 'main-heading';
header.textContent = 'Hello World!';
body.appendChild(header);
const para = document.createElement('p');
para.id = 'main-text';
para.className = 'boring-text';
para.textContent = "Look, I'm some text!";
body.appendChild(para);
