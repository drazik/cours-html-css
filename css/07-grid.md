# CSS : Grid

Flexbox nous permet de manipuler des éléments sur une dimension : ligne ou colonne. Parfois on a besoin d'organiser des éléments sur les deux dimensions à la fois, sous forme de grille. Pour cela, on peut utiliser les grilles CSS.

## `display: grid`

Pour utiliser la mise en page en grille, il faut appliquer `display: grid` sur un élément. Ainsi, l'élément devient un "grid container", et ses enfants des "grid items". Par défaut, la grille a une seule colonne et autant de lignes que d'éléments enfants.

[Voir un exemple](https://codesandbox.io/s/display-grid-wq8dyj).

## Définir le nombre et la taille des lignes et colonnes

Pour définir le nombre et la taille des lignes et colonnes qui compoosent la grille, on utilise les propriétés [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) et [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).

Pour définir une grille de 3 colonnes de 100px et 2 lignes de 200px par exemple, on peut écrire :

```css
.grid {
	display: grid;
	grid-template-columns: 100px 100px 100px;
	grid-template-rows: 200px 200px;
}
```

[Voir un exemple](https://codesandbox.io/s/grid-example-01-mvyhry).

On dit que les lignes et les colonnes qui composent la grille sont "explicites". Mais si le nombre de grid items est plus grand que le nombre de cellules explicites, alors des lignes dites "implicites" sont ajoutées. Par défaut, ces lignes ont une hauteur automatique, pas la même hauteur que les lignes explicites.

Si on veut définir la hauteur d'une ligne implicite, on peut utiliser la propriété [`grid-auto-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows). Dans certains cas, il est aussi possible d'obtenir des colonnes implicites. Leur largeur peut être définie avec [`grid-auto-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns).

[Voir un exemple](https://codesandbox.io/s/grid-example-02-etzbsd).

Pour en savoir plus sur la différence entre lignes/colonnes explicites et implicites, vous pouvez lire [The difference between explicite and implicit grid sur CSS Tricks](https://css-tricks.com/difference-explicit-implicit-grids/).

Lorsqu'on souhaite avoir plusieurs lignes/colonnes qui font la même taille, on peut utiliser la fonction [`repeat`](https://developer.mozilla.org/fr/docs/Web/CSS/repeat). Par exemple, si on veut 3 colonnes de 100px, au lieu d'écrire `grid-template-columns: 100px 100px 100px` on peut écrire `grid-template-columns: repeat(3, 100px)`.

[Voir un exemple](https://codesandbox.io/s/grid-repeat-9x2rdr).

Les colonnes et les lignes peuvent être définies avec n'importe quelle unité de mesure. Mais dans une grille, on peut aussi utiliser l'unité `fr`. Cette unité est particulièrement pratique pour créer des colonnes et lignes flexibles. L'unité `fr` représente une fraction de l'espace disponible dans le conteneur. Ainsi, pour créer 2 colonnes qui se partagent équitablement l'espace disponible, on peut écrire `grid-template-columns: repeat(2, 1fr)`. Si on souhaite avoir une colonne avec une taille fixe de 300px et une autre qui prend tout l'espace disponible, on peut écrire `grid-template-columns: 300px 1fr`.

[Voir un exemple](https://codesandbox.io/s/grid-fr-50uy8u).

Pour en savoir plus sur l'unité fr, vous pouvez lire [L'unité fr sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#lunit%C3%A9_fr).

## Espacer les lignes et les colonnes

Pour espacer les lignes et les colonnes, il est possible d'utiliser les propriétés [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap), [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) et [`row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).

[Voir un exemple](https://codesandbox.io/s/grid-gap-91y56z).
