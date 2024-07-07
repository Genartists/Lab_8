const randomButton = document.getElementById('randomButton');
const author = document.getElementById('author');
const randomQuote = document.getElementById('quotes');
const container = document.getElementById('container');
const startButton = document.getElementById('start');
//click to start button
startButton.addEventListener('click', function () {
    //hide the start button after click and show the randomize button
    startButton.style.display = 'none';
    randomButton.style.display = 'block';

    randomButton.classList.add('animate');
    document.getElementById('container').style.display = 'block';
});
// function click to randomize quotes
randomButton.addEventListener('click', function () {
    document.querySelector('.quoteContainer').classList.add('border-on-click');
    randomQuote.innerText = 'Loading...';
    randomQuote.classList.add('quote');
    author.innerText = '';
    //fetching the quotes from the API using ajax get request
    $.ajax({
        url: `https://southparkquotes.onrender.com/v1/quotes/1`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // turning the data into a string
            var jsonString = JSON.stringify(data);
            console.log(jsonString);
            //parsing the data, data is an array of objects, data[0] is the first object in the array
            randomQuote.innerText = data[0].quote;
            author.innerText = `--- ${data[0].character} ---`;
        },
        // catch error if the request fails
        error: function () {
            console.error('Error!');
        }
    });

});




