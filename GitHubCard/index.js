/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/cbarcinas")
  .then((res) => {
    const user = res.data;
    console.log(res.data);
    // after console.logging res, we can see that the user info is located in the data obj so we target that.
    const userCard = cardMaker(user);
    // we're passing in user because that's the variable name we gave the res.data
    cardContainer.appendChild(userCard);
    // then we append userCard to the cardContainer.
    //  userCard will run the cardMaker function to create the card and pass in the user variable to give it a username.
  })
  .catch((err) => {
    console.log("we messed up", err);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cardContainer = document.querySelector(".cards");

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {
  // create elements
  const userCard = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUserName = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const userLink = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");
  const linkText = document.createElement("div"); //this is to add text into the a tag
  // append elements
  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userUserName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  userProfile.appendChild(userLink);
  userProfile.appendChild(linkText);
  // add content to appended elements
  userName.textContent = obj.name; // this will grab the name from the object that we pass into the function
  userUserName.textContent = obj.login;
  userLocation.textContent = `Location: ${obj.location}`;
  userFollowers.textContent = `Followers: ${obj.followers}`;
  userFollowing.textContent = `Following: ${obj.following}`;
  userBio.textContent = `Bio: ${obj.bio}`;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
