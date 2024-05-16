/** FEEDBACK: I love all of the comments explaining the code! Great job passing all of the tests! I saw some gaps from your comments which is great because I can then see how you are internalizing content! I added some comments around your page so that you can see your own gaps and amend them! */
const getMainHeadingText = () => {
	// console.log(document.querySelector('#main-heading').textContent);
/** FEEDBACK: Use more descriptive variable names! */
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
	/** FEEDBACK: Here you are not initializing an empty string and it is not storing the concatenated text, what is being stored instead? What data type is this? */
	const textContents = []; //initialize an empty string concatenatedText to store the concatenated text content.

	elements.forEach((element) => {
		// inline function expressions : arrow function syntax, creating a clear separation  from previous line.
		//loop through each element using forEach
		/** FEEDBACK: Is this concatenating the text content? */
		textContents.push(element.textContent); //concatenate its text content to concatenatedText.
	});
/** FEEDBACK: I highly encourage you to read the documentation for .join to see what it is actually doing! */
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
	/** FEEDBACK: Remove any commented out code to keep your page clean! */
	//   document.getElementById("MyElement").classList.add('MyClass');

	// document.getElementById("MyElement").classList.remove('MyClass');
};

const addH2 = () => {
	const createdElement = document.createElement('h2'); //created an h2 element
	/** FEEDBACK: Not only did you create an id, you altered the value of the id by setting it equal to 'h2-test'. */
	createdElement.id = 'h2-test'; //  from the created h2 element I created an ID called'h2-test'
	createdElement.textContent = 'Another one!'; // Assigning string "Another one" to .textContent within createdElement.
	document.body.appendChild(createdElement); //adding createdElement to document.body with appendChild
};

const removeOldInfo = () => {
	const element = document.getElementById('old-info');
	element.remove();
};
/** FEEDBACK: Continue to add comments in your assignments so that I can also give you feedback and we can amend your gaps! SO SO proud of all of the hard work you are putting in! */
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
