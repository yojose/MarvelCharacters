# MarvelCharacters
Web to show a list of Marvel characters. 

<h2>Functionality:</h2>

You will get a list of characters that you can mark as favorites by clicking on the Like button. You can also access more information about each character by clicking on their card.
You can filter the list by search and you can also see your favorites by clicking on the heart-shaped button in the header.

<h2>Instalation:</h2>
clone this repository from github

````
git clone --branch master https://github.com/yojose/MarvelCharacters.git

cd MarvelCharacters

````

We need to install the dependecies. we use this:

````
git clone --branch master https://github.com/yojose/MarvelCharacters.git

````
<h2>How this page is made:</h2>
<ul>
    <li>create-react-app: To set the work enviroment. Base on webpack
        this install Jest for testing and the lintter Eslint as well..</li>
    <li>react-router: To manage the routing.</li>
    <li>axios: library that extend the API fetch</li>
    <li>CSS: this App use plain CSS that are modulated and use the BEM nomenclatura to clearavility and mantinement.</li>
</ul>

<h2>architecture:</h2>
This page use a simple SPA architecture that comsume the Marvel API.

<h2>structure:</h2>
I try to applay the type y Feature structure on the projest. For example componet/search 