# HTML - Listes

Il existe trois types de listes : les listes non ordonnées (liste à puces), les
listes ordonnées (avec un indicateur ordinal : nombre, lettre, chiffre
romain...) et les listes de descriptions (associant un terme à une définition).

## Listes non ordonnées

On utilise la balise `<ul></ul>`. Et pour chaque élément de la liste, on
utilise la balise `<li></li>`. Exemple :

```html
<h1>Pâte à pizza</h1>

<p>Vous aurez besoin des ingrédients suivants :</p>

<ul>
	<li>De la farine</li>
	<li>De l'huile d'olive</li>
	<li>Du sel</li>
	<li>De la levure</li>
	<li>De l'eau</li>
</ul>
```

Dans cette liste, l'ordre n'a aucune importance. Elle est donc non ordonnée, et
par défaut elle est affichée avec des puces en début de chaque item. On pourra
modifier l'aspect de la puce en CSS.

[Documentation de l'élément `ul`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul)

## Listes ordonnées

On utilise la balise `<ol></ol>`. Et toujours `<li></li>` pour les items.
Exemple :

```html
<h1>Pâte à pizza</h1>

<p>Suivez les étapes suivantes :</p>

<ol>
	<li>Versez l'eau dans un saladier</li>
	<li>Délayez la levure dans l'eau</li>
	<li>Ajoutez la farine</li>
	<li>Ajoutez le sel</li>
	<li>Versez l'huile</li>
	<li>Pétrissez jusqu'à l'obtention d'une boule homogène</li>
</ol>
```

Ici, l'ordre des éléments est important. La liste est donc ordonnée. Par défaut
un numéro incrémental s'affiche au début de chaque item. On peut modifier ça
avec l'attribut `type`:

* `type="a"` pour des lettres minuscules
* `type="A"` pour des lettres majuscules
* `type="i"` pour des chiffres romains minuscules
* `type="I"` pour des chiffres romains majuscules
* `type="l"` pour des chiffres (valeur par défaut)

On peut aussi modifier ça en CSS.

[Documentation de l'élément `ol`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol)

## Listes imbriquées

Il est possible d'imbriquer des listes les unes dans les autres. Par défaut le
style donné aux items reflète cette imbrication :

```html
<ul>
	<li>1. Titre 1</li>
	<li>
		2. Titre 2
		<ul>
			<li>2.1. Titre 2.1</li>
			<li>2.2. Titre 2.2</li>
		</ul>
	</li>
	<li>3. Titre 3</li>
</ul>
```

Ca peut être intéressant pour créer des menus avec des sous-menus, par
exemple...

## Listes de descriptions

Ces listes permettent d'associer des termes avec leur description (ou
définiton). Elles mettent en jeu trois balises :

* `<dl></dl>` : délimite la liste
* `<dt></dt>` : délimite un terme
* `<dd></dd>` : délimite une description

On peut par exemple afficher des données d'une recette de cuisine sous forme de
paires clé / valeur :

```html
<dl>
	<dt>Nombre de personnes</dt>
	<dd>4</dd>
	<dt>Temps de cuisson</dt>
	<dd>1h30</dd>
	<dt>Temps de préparation</dt>
	<dd>30 minutes</dd>
	<dt>Temps de repos</dt>
	<dd>4h</dd>
</dl>
```

[Documentation de l'élément `dl`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/dl)
