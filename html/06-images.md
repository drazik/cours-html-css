# HTML - Images

Pour afficher une image, on va d'abord récupérer quelques images sur
https://unsplash.com/, et les mettre dans un dossier `img`. Ensuite, on va
pouvoir ajouter des balises `<img />`. Dans notre page. Cette balise prend
principalement deux attributs :

* `src` pour indiquer le chemin vers l'image à afficher
* `alt` pour indiquer le texte alternatif. Ce texte est utile dans deux cas :
  * si l'image ne peut pas être chargée, le texte est affiché à la place
  * si l'utilisateur ne peut pas voir les images, le texte lui est restitué à la place

Exemple :

```html
<img src="img/01.jpg" alt="Photo d'un palmier sur une plage de sable blanc" />
```

L'attribut `alt` doit obligatoirement être spécifié, pour des raisons
d'accessibilité. Si l'image est décorative et n'apporte aucune information à
l'utilisateur, on le laisse vide (`alt=""`). Sinon, on donne une description la
plus utile possible de ce que représente l'image.

On pourra faire des choses plus compliquées en CSS, mais on peut spécifier des
dimensions avec les attributs `width` et `height` :

```html
<img
	src="img/01.jpg"
	alt="Photo d'un palmier sur une plage de sable blanc"
	width="300"
	height="400"
/>
```

Attention, l'image peut apparaître déformée. On peut spécifier une des deux
dimensions tout en gardant le ratio de l'image :

```html
<img
	src="img/01.jpg"
	alt="Photo d'un palmier sur une plage de sable blanc"
	width="300"
/>
```

On peut aussi spécifier une stratégie de chargement de l'image. Par défaut, les
images sont chargées au chargement de la page. Mais on peut changer de
stratégie pour charger les images selon différents critères avec l'attribut
`loading` :

* `loading="eager"` : valeur par défaut, l'image est chargée dès le chargement de la page
* `loading="lazy"` : l'image est chargée lorsque le navigateur estime que c'est le bon moment (selon plusieurs critères, notamment est-ce que l'image est sur le point d'entrer dans l'écran ou encore le coût du chargement de l'image selon le type de connexion de l'utilisateur)

Si on veut annoter l'image, avec une description par exemple, on peut utiliser
`<figure>` et `<figcaption>` :

```html
<figure>
	<img
		src="img/01.jpg"
		alt="Photo d'un palmier sur une plage de sable blanc"
		width="300"
	/>
	<figcaption>
		Ce palmier surplombe la plage
	</figcaption>
</figure>
```

Lorsque vous insérez des images dans une page web, pensez à les optimiser. De
nombreux outills existent pour optimiser le poids d'une image sans perdre de
qualité (en tous cas pas de manière perceptible par un humain). Par exemple
[Squoosh](https://squoosh.app/).
