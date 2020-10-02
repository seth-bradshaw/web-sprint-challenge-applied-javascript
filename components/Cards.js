// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles)
        let data = Object.values(res.data.articles);
        console.log(data)
        data.map((item) => {
            item.forEach((element) => {
                cardHolder.appendChild(cardMaker(element));
            });
        })
    })
    .catch(err => {
        console.log(err)
    });
    
const cardHolder = document.querySelector('.cards-container');

function cardMaker(obj){
    //declaring vars
    const newCard = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('span');

    //setting classes to vars
    newCard.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');
    
    //adding textContent
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    author.textContent = obj.authorName;

    //establishing parents/children
    cardHolder.append(newCard);
    newCard.appendChild(headline);
    newCard.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(author);

    newCard.addEventListener('click', item => {
        console.log(obj.headline)
    })

    return newCard
}

