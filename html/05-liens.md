# HTML - Liens

Lier des documents entre eux est le coeur du web. C'est en visualisant ces
liens qu'on obtient une gigantesque toile. Ils représtent le HT dans HTML et
HTTP : HyperText.

Les liens entre pages fonctionnent avec la balise `<a></a>`. Disons qu'on
souhaite afficher un lien vers la page d'accueil du Mozilla Developer Network :

```html
<a>Mozilla Developer Network</a>
```

En l'état, rien ne change sur notre page. Le texte "Mozilla Developer Network"
ne ressemble pas à un lien. Et pour cause, il n'y a pour le moment aucun lien.
On a certes ajouté la balise, mais nous n'avons pas spécifié la page vers
laquelle le lien doit mener. Pour ça, on utilise l'attribut `href` :

```html
<a href="https://developer.mozilla.org">Mozilla Developer Network</a>
```

Dans cet exemple nous avons donné en valeur de l'attribut `href` l'adresse
complète d'une page située sur un autre site que le notre. On appelle cette
adresse un URL (Uniform Resource Locator). Pour faire un lien vers une page de
notre site, nous n'avons pas besoin de donner l'adresse complète, mais
simplement le chemin vers la page cible à partir de la page actuelle. Si on
crée un fichier `about.html` :

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<title>A propos</title>
	</head>
	
	<body>
		<h1>A propos</h1>
		
		<p>Ceci est la page a propos</p>
	</body>
</html>
```

Alors nous pouvons faire un lien vers cette page dans le fichier `index.html`
comme ceci :

```html
<a href="about.html">A propos</a>
```

Si le fichier cible n'est pas dans le même dossier, alors on a deux solutions.

Soit on spécifie le chemin à partir du fichier courant :

```html
<a href="sous-dossier/about.html">A propos</a>
```

Soit on spécifie le chemin à partir de la racine du dossier :

```html
<a href="/sous-dossier/about.html">A propos</a>
```

On parle de chemin "relatif" vs chemin "absolu".

Lorsqu'on spécifie un chemin comme ça, le navigateur complète le reste de l'URL
à partir de la page courante.

On peut aussi faire des liens à l'intérieur d'une même page, pour mener vers
une partie précise. Pour cela, il faut d'abord ajouter un attribut `id` sur un
élément de la page :

```html
<section id="section-1">
	...
</section>
```

Puis faire un lien comme ceci :

```html
<a href="#section-1">Aller à la section 1</a>
```

Le "hash" est une partie d'une URL. Il peut être utilisé en combinaison avec
les autres parties :

* `about.html#section-1`
* `sous-dossier/about.html#section-1`
* `https://developer.mozilla.org/#section-1`

Quelques conseils sur le texte à mettre à dans un lien :

* Ne pas mettre l'URL en guise de texte. L'URL a rarement du sens pour l'utilisateur. Le nom du site ou de la page fait plus de sens (https://google.fr => Google)
* Ne pas mettre "lien vers ...". La majeure partie des utilisateurs savent détecter un lien sur une page. Ils savent donc déjà que le lien est un lien ("Lien vers la page A propos" => "A propos")
* Evitez de mettre des phrases entières dans les liens ("Télécharger notre ebook" => lien juste sur "ebook")
* Evitez les "cliquez ici". Quand on navigue au clavier avec la touche tab, on n'a pas toujours le contexte précis du lien. Quand on arrive sur "cliquez ici", on n'a aucune idée d'où on va attérir Pareil pour les aides auditives ("Cliquez ici pour me contacter" => "Me contacter")

On peut aussi faire des liens un peu spéciaux :

* `href="tel:+33612121212"` : appel téléphonique. Ouvre l'app adaptée en fonction de l'appareil sur lequel on est. Peut-être Skype sur un PC, l'app Téléphone sur un smartphone
* `href="mailto:bidule@machin.fr"` : mail. Ouvre l'application d'email par défaut de l'appareil. On peut aussi spécifier un objet et un corps de mail en ajoutant des paramètres d'URL : `?subject=Bonjour&body=Salut%20toi`. Attention toutefois les valeurs de paramètres d'URL doivent être encodées (d'où le `%20` pour représenter un espace)

<hr />

* Précédent : [Listes](04-listes.md)
* Suivant : [Images](06-images.md)

