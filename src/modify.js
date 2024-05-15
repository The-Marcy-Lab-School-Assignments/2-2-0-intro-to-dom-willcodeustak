const getMainHeadingText = () => {
	// console.log(document.querySelector('#main-heading').textContent);

	const bruh = document.querySelector('#main-heading');
	// do not need to write h1#, just #
	console.log(bruh.textContent);
	// log inside the function

	//What I did initially
	//  did not establish a variable - document.querySelector('h1#main-heading')  thought test cases would not like me initializing a variable.
	//                                      console.log(h1.textContent);
};

const getAllMainText = () => {
	const elements = document.querySelectorAll('.main-text'); //Use document.querySelectorAll to grab all elements with the class name main-text.
	const textContents = []; //initialize an empty string concatenatedText to store the concatenated text content.

	elements.forEach((element) => {
		// inline function expressions : arrow function syntax, creating a clear separation  from previous line.
		//loop through each element using forEach
		textContents.push(element.textContent); //concatenate its text content to concatenatedText.
	});

	finalConcatenatedText = textContents.join(','); //add a comma if it's not the last element.
	console.log(finalConcatenatedText);
};

const setSubtitleText = () => {
	const updating = document.querySelector('#subtitle');
	console.log((updating.textContent = 'This is a subtitle!'));
};

const modifyDivClassList = () => {
	const list = document.querySelector('#modify-classes').classList;
	list.remove('bad-class');
	list.add('new-class');
	//   document.getElementById("MyElement").classList.add('MyClass');

	// document.getElementById("MyElement").classList.remove('MyClass');
};

const addH2 = () => {
	const createdElement = document.createElement('h2'); //created an h2 element
	createdElement.id = 'h2-test'; //  from the created h2 element I created an ID called'h2-test'
	createdElement.textContent = 'Another one!'; // Assigning string "Another one" to .textContent within createdElement.
	document.body.appendChild(createdElement); //adding createdElement to document.body with appendChild
};

const removeOldInfo = () => {
	const element = document.getElementById('old-info');
	element.remove();
};

const makeAlphabet = () => {
	const abc = document.querySelector('#alphabet');
	const counter = abc.dataset.numLetters;
	const moreAbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < counter; i++) {
		const list = document.createElement('li');
		list.textContent = `${moreAbc[i]} is letter #${i + 1} in the alphabet`;
		document.querySelector('#alphabet').appendChild(list);
	}
};

const makeBio = () => {
	document.getElementById('my-bio').innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
	// read
	getMainHeadingText();
	getAllMainText();

	// update
	setSubtitleText();
	modifyDivClassList();

	// create
	addH2();

	// delete
	removeOldInfo();

	// more advanced stuff!
	makeAlphabet();
	makeBio();
};

// invoke the runner!
main();
