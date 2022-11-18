# CSS : Media query

Jusqu'ici nous avons travaillé le plus possible avec des unités relatives et flexibles. Par conséquent nous sommes capables de développer des interfaces fluides. Mais il arrive qu'une interface, bien qu'étant fluide, puisse avoir besoin d'adaptations spécifiques sur certaines tailles d'écran.

Par exemple, [cette grille](https://codesandbox.io/s/fluid-grid-xmn15x) est fluide, car composée d'une colonne qui occupe 20% de la largeur de l'écran et d'une seconde qui occupe tout l'espace restant. Les deux colonnes se redimensionnent donc automatiquement si on modifie la taille de la fenêtre du navigateur, ou si on visualise la page sur deux écrans totalement différents (un smartphone et un ordinateur portable, par exemple).

Mais sur un smartphone, il y a fort à parier que cette mise en page ne soit pas optimale. Il serait plus judicieux que les deux éléments soient l'un sous l'autre.

Pour pouvoir faire ça, nous avons besoin d'un nouvel outil : les media queries. Celles-ci nous permettent de dire "lorsque le media correspond à un certain nombre de caractéristiques, alors applique les styles suivants".

La syntaxe (simplifiée) d'une media query est la suivante :

```css
@media <media type> and <media feature> {
	/* sélecteurs à surcharger */
}
```

- [Liste des types de média (MDN)](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries#types_de_m%C3%A9dia)
- [Liste des caractéristiques média (MDN)](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries#caract%C3%A9ristiques_m%C3%A9dia_media_features)

## Appliquer des styles selon la largeur de l'écran

Dans la majeure partie des cas, on souhaite adapter les styles selon la largeur de l'écran sur lequel on visualise la page. Pour cela, nous avons 2 stratégies possibles :

- écrire les styles pour les petits écrans en dehors de toute media query, puis ajouter des media query pour les plus grands écrans : méthodologie "mobile-first"
- écrire les styles pour les grands écrans en dehors de toute media query, puis ajouter des media query pour les plus petits écrans : méthodologie "desktop-first"

Il n'y a pas de méthodologie meilleure qu'une autre dans l'absolu. Cela dépend du contexte de chaque projet.

### Mobile first

Il est question ici d'écrire d'abord le style pour les petits écrans. Prenons un exemple simple, dans lequel on souhaite simplement modifier la couleur de fond de l'élément `body` de la page en fonction de la largeur de l'écran. On souhaite que :

- par défaut : la couleur de fond doit être `#81ecec`
- si l'écran a une largeur supérieure ou égale à `600px` : la couleur de fond doit être `#ffeaa7`
- si l'écran a une largeur supérieure ou égale à `800px` : la couleur de fond doit être `#ff7675`

Pour faire ceci, on peut écrire le CSS suivant :

```css
/* Styles par défaut, pas de media query */
body {
	background-color: #81ecec;
}

/* Si la largeur de l'écran est au minimum 600px */
@media screen and (min-width: 600px) {
	/* On applique les styles suivants à l'élément body */
	body {
		background-color: #ffeaa7;
	}
}

/* Si la largeur de l'écran est au minimum 800px */
@media screen and (min-width: 800px) {
	/* On applique les styles suivants à l'élément body */
	body {
		background-color: #ff7675;
	}
}
```

[Voir un exemple intéractif](https://codesandbox.io/s/mobile-first-5xnj9q).

### Desktop first

On souhaite obtenir le même résultat, mais cette fois-ci en inversant le sens de la méthode :

- par défaut : la couleur de fond doit être `#ff7675`
- si l'écran a une largeur inférieure à `800px` : la couleur de fond doit être `#ffeaa7`
- si l'écran a une largeur inférieure à `600px` : la couleur de fond doit être `#81ecec`

On écrirait donc le CSS suivant :

```css
/* Styles par défaut, pas de media query */
body {
	background-color: #ff7675;
}

/* Si la largeur de l'écran est au maximum 800px */
@media screen and (max-width: 800px) {
	/* On applique les styles suivants à l'élément body */
	body {
		background-color: #81ecec;
	}
}

/* Si la largeur de l'écran est au maximum 600px */
@media screen and (max-width: 600px) {
	/* On applique les styles suivants à l'élément body */
	body {
		background-color: #ffeaa7;
	}
}
```

[Voir un exemple interactif](https://codesandbox.io/s/desktop-first-uc2wpb)

## Le viewport

Pour des raisons historiques, les navigateurs mobiles une zone d'affichage (viewport) virtuelle pour afficher les sites. Généralement, cette zone d'affichage virtuelle fait `960px` de large. Une fois le site affiché dans ce viewport virtuel, il est redimensionné pour être affiché dans le viewport (l'écran). Il en résulte que les sites apparaissent comme tout petits, dézoomés.

Pour éviter cela et faire en sorte que le site ait les bonnes proportions, il faut dire au navigateur que la taille du viewport virtuel doit être la même que la taille de l'écran de l'utilisateur.

Pour cela, on ajoute une balise `<meta />` dans le `<head>` de la page web :

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Ainsi, on aura tendance à ajouter cette balise sur toutes nos pages.

Pour en savoir plus, vous pouvez lire [Concepts relatifs au viewport sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Viewport_concepts).
