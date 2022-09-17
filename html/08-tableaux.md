# HTML - Tableaux

> Un tableau est un ensemble structuré de données (table de données) présentées
> en lignes et colonnes. Un tableau vous permet de retrouver rapidement et
> facilement des valeurs au croisement entre différents types de données, par
> exemple : une personne et son âge, ou un jour et la semaine, ou les horaires
> d'ouverture de la piscine du quartier.

Un tableau ne doit être utilisé **uniquement** pour afficher des données
structurées. Il y a longtemps ils étaient utilisés pour faire le design de
pages (une ligne pour l'entête, une ligne avec 2 colonnes pour le contenu + une
sidebar, une ligne pour le footer). Ca pose de gros problèmes d'accessibilité
et ça allourdi considérablement le code d'utiliser des tableaux pour faire du
layout. Personne n'y gagne à faire ça aujourd'hui : tout est plus simple avec
des éléments sémantiques et du CSS.

Un tableau commence par la balise `<table>` :

```html
<table>
</table>
```

Pour afficher des choses, il faut qu'on crée des cellules, avec la balise
`<td>` (pour Table Data):

```html
<table>
	<td>Voici une première cellule</td>
	<td>Voici une deuxième cellule</td>
</table>
```

Pour délimiter des lignes, on utilise la balise `<tr>` (pour Table Row):

```html
<table>
	<tr>
		<td>Voici une première cellule sur la première ligne</td>
		<td>Voici une deuxième cellule sur la première ligne</td>
	</tr>
	<tr>
		<td>Voici une première cellule sur la deuxième ligne</td>
		<td>Voici une deuxième cellule sur la deuxième ligne</td>
	</tr>
</table>
```

Un tableau est plus facile à lire si on indique les en-têtes nécessaires sur
chaque colonne et chaque ligne. Disons qu'on souhaite afficher un tableau de
personnes, avec pour chaque personne son nom, sa taille et son age.

On peut utiliser des lignes et des cellules pour indiquer les entêtes :

```html
<table>
	<tr>
		<td>&nbsp;</td>
		<td>Léa</td>
		<td>Marin</td>
		<td>Tom</td>
	</tr>
	<tr>
		<td>Age</td>
		<td>26</td>
		<td>24</td>
		<td>22</td>
	</tr>
	<tr>
		<td>Taille</td>
		<td>161cm</td>
		<td>175cm</td>
		<td>177cm</td>
	</tr>
</table>
```

Ca fonctionne, mais l'affichage ne rend pas la lecture du tableau simple. Et
sémantiquement, rien ne distingue les cellules d'entête des autres cellules.
Pour distinguer les cellules d'entêtes, on peut utiliser la balise `<th>`:

```html
<table>
	<tr>
		<td>&nbsp;</td>
		<th>Léa</th>
		<th>Marin</th>
		<th>Tom</th>
	</tr>
	<tr>
		<th>Age</th>
		<td>26</td>
		<td>24</td>
		<td>22</td>
	</tr>
	<tr>
		<th>Taille</th>
		<td>161cm</td>
		<td>175cm</td>
		<td>177cm</td>
	</tr>
</table>
```

L'affichage rend maintenant la lecture du tableau plus simple. Par défaut les
entêtes sont en gras. Mais il reste un soucis : les cellules d'entêtes sont
elles liées à la ligne ou à la colonne ? Pour spécifier ça, on peut utiliser
l'attribut `scope` sur les éléments `<th>`;

```html
<table>
	<tr>
		<td>&nbsp;</td>
		<th scope="col">Léa</th>
		<th scope="col">Marin</th>
		<th scope="col">Tom</th>
	</tr>
	<tr>
		<th scope="row">Age</th>
		<td>26</td>
		<td>24</td>
		<td>22</td>
	</tr>
	<tr>
		<th scope="row">Taille</th>
		<td>161cm</td>
		<td>175cm</td>
		<td>177cm</td>
	</tr>
</table>
```

Chaque entête est maintenant bien distinguée du reste du tableau, et la ligne
ou la colonne à laquelle elle s'applique est clairement indiquée.

Parfois il peut être nécessaire d'ajouter un titre à un tableau, pour que son
contenu soit plus facilement compréhensible par l'utilisateur. On peut utiliser
la balise `<caption>` pour ça :

```html
<table>
	<caption>
		Caractéristiques de la population du groupe témoin
	</caption>
	<tr>
		<td>&nbsp;</td>
		<th scope="col">Léa</th>
		<th scope="col">Marin</th>
		<th scope="col">Tom</th>
	</tr>
	<tr>
		<th scope="row">Age</th>
		<td>26</td>
		<td>24</td>
		<td>22</td>
	</tr>
	<tr>
		<th scope="row">Taille</th>
		<td>161cm</td>
		<td>175cm</td>
		<td>177cm</td>
	</tr>
</table>
```

Lorsqu'un tableau devient plus complexe, il peut être utile d'y ajouter un peu
de structure. De la même manière qu'on a ajouté des éléments `<header>`,
`<main>` et `<footer>` à nos pages pour les structurer, un tableau peut
utiliser les balises `<thead>`, `<tbody>` et `<tfoot>`:

```html
<table>
	<caption>
		Caractéristiques de la population du groupe témoin
	</caption>
	<thead>
		<tr>
			<td>&nbsp;</td>
			<th scope="col">Léa</th>
			<th scope="col">Marin</th>
			<th scope="col">Tom</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Age</th>
			<td>26</td>
			<td>24</td>
			<td>22</td>
		</tr>
		<tr>
			<th scope="row">Taille</th>
			<td>161cm</td>
			<td>175cm</td>
			<td>177cm</td>
		</tr>
	</tbody>
</table>
```

Ces balises sont uniquement vouées à rendre le code HTML plus facilement
lisible et maintenable, elles ne changent en rien la sémantique des différentes
parties du tableau.

Parfois on a besoin de fusionner des cellules sur plusieurs lignes et / ou
colonnes. On a les attributs `colspan` et `rowspan` sur les `<th>` et `<td>`
pour ça :

```html
<table border="1">
	<tr>
		<th scope="col">Produit</th>
		<th scope="col">Quantité</th>
		<th scope="col">Prix unitaire</th>
		<th scole="col">Prix total</th>
	</tr>
	<tr>
		<td>Produit 1</td>
		<td>2</td>
		<td>3,72€</td>
		<td>7,44€</td>
	</tr>
	<tr>
		<td>Produit 2</td>
		<td>10</td>
		<td>1,57€</td>
		<td>15,70€</td>
	</tr>
	<tr>
		<th colspan="3" scope="row">Sous-total</th>
		<td>23,14€</td>
	</tr>
	<tr>
		<th colspan="2" scope="row">TVA</th>
		<td>10%</td>
		<td>2,32€</td>
	</tr>
	<tr>
		<th colspan="3" scope="row">Total</th>
		<td>25,46€</td>
	</tr>
</table>
```

<hr />

* Précédent : [Elements de regions](07-regions.md)
* Suivant : [Formulaires](09-formulaires.md)

