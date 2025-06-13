# Mobile-app
Dit is een React Native mobiele app gekoppelt aan een Webflow site via een API die geconnecteerd staat aan de achterliggende Webflow CMS: 

De Webflow site is hier te bekijken: https://beer-e-commerce.webflow.io/ 


## Structuur 
- components: Herbruikbare UI-componenten (zoals Productcard, Appbutton, FAB, ProfileRow, BlogCard)
- screens: Alle schermen van de app 
- Context: Achterliggende code voor het winkelmandje 
- App.js: Hoofdbestand met Navigatie 


## Features
- Producten bekijken, zoeken, filteren en sorteren
- Productdetails bekijken met mogelijkheid tot toevoegen aan winkelmandje
- Winkelmandje (FAB) met modal: producten toevoegen, verwijderen en afrekenen
- Blogs lezen en zoeken 
- Profielpagina
- Navigatie via tab bar en navigatie stack 


## API
De producten en blog worden opgehaald via de Webflow API. 


## Belangrijkste packages

- `react-navigation` voor navigatie
- `@react-native-picker/picker` voor dropdowns
- `@expo/vector-icons` voor iconen


## Vragen/Moeilijkheden
- Bij mijn products als ik scroll scrollt hij niet helemaal tot beneden, je ziet het laatste product niet. 
- Hoe zorg ik ervoor dat ik de producten naast elkaar kan laten staan. Ik wou gebruik maken van "justify-content: space-between" maar binnen een scrollview is deze niet toegestaan was de error die ik ontving. 
- In mijn API-call ontvang ik van de blog de paragraaf waarbij in pure HTML geschreven wordt, hoe vertaal ik deze naar gewone tekst. 
