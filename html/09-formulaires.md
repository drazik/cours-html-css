# HTML - Formulaires

Les formulaires fournissent un moyen à l'utilisateur d'envoyer des données à un
site web. Ils permettent de mettre à disposition de l'utilisateur différents
types de champs pour qu'il puisse saisir des données dans de bonnes conditions.
Chaque type de champ de formulaire est adapté à un cas d'usage.

## Créer un formulaire

Pour afficher un formulaire, on a besoin de la balise `<form>`. Elle prend 2
attributs :

* `action` : URL vers laquelle les données seront envoyées
* `method` : méthode HTTP utilisée pour envoyer les données. On utilisera principalement 2 méthodes : `get` et `post`. Mais on expliquera la différence entre ces méthodes dans un second temps

Pour tous ces exemples, on va utiliser l'URL
`https://http-mirror.vercel.app/api/mirror`. Cette URL peut être appelée à la
fois avec la méthode `get` et la méthode `post` et elle affiche simplement les
données qu'elle a reçu.

Commençons par afficher un formulaire sans aucun champ, mais avec un bouton
permettant de l'envoyer :

```html
<form action="https://http-mirror.vercel.app/api/mirror" method="get">
	<button type="submit">Envoyer</button>
</form>
```

Si on envoie ce formulaire, ça fonctionne et on constate que le serveur n'a
reçu aucune donnée. C'est normal puisqu'il n'y a aucun champ dans le formulaire
pour le moment.

## Ajouter un champ de texte au formulaire

On va donc ajouter un champ texte au formulaire. Pour ça, on a besoin de la
balise `<input />`. Sur celle-ci, on a besoin de spécifier l'attribut `name`.
Cet attribut permet de définir le nom de la valeur qui va être envoyée. Un peu
comme pour une variable. Par exemple :

```html
<form method="https://http-mirror.vercel.app/api/mirror" method="get">
	<input name="firstname" />
	<button type="submit">Envoyer</button>
</form>
```

Si on tape quelque chose dans le champ, on voit que le serveur nous dit qu'il a
reçu pour le champ `firstname` la valeur qu'on a tapé dans le champ. Si on n'a
rien tapé, le serveur reçoit une chaîne de caractères vide.

Attention, les champs de formulaire qui n'ont pas d'attribut `name` ne sont pas
envoyés au serveur. Pensez donc bien a spécifier un `name` sur tous vos champs
pour qu'ils soient envoyés.

Un champ de formulaire doit toujours être accompagné d'un label indiquant à
l'utilisateur la saisie qui est attendue de sa part pour le champ. Pour
indiquer ce label, on utilise la balise `<label>`. Le lien entre un `<label>`
et un `<input />` se fait via l'attribut `for` du `<label>` qui doit contenir
la même chose que l'attribut `id` de l'input auquel il correspond :

```html
<form method="https://http-mirror.vercel.app/api/mirror" method="get">
	<label for="firstname">Prénom</label>
	<input name="firstname" id="firstname" />
	<button type="submit">Envoyer</button>
</form>
```

On répète deux fois `firstname` dans l'input en valeur des attributs `name` et
`id`, mais c'est un choix. Ces deux attributs n'ont pas le même rôle. Les
valeurs de chacun sont indépendantes, même si on choisit ici d'utiliser les
mêmes.

L'utilisation de la balise `<label>` est importante. Elle permet entre autre à
l'utilisateur de cliquer sur le label pour donner le focus au champ
correspondant.

Dans un `<input />` on peut saisir de nombreuses choses : un simple texte, un
nombre, un mot de passe, une adresse e-mail... Pour adapter au mieux le
comportement de l'élément `input`, on peut utiliser l'attribut `type`. Vous
pouvez voir la liste complète sur la [documentation de l'élément
`input`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input#les_diff%C3%A9rents_types_de_champs_input).

Certaines valeurs donnent une forme très différente à l'élément : `checkbox` et
`radio` par exemple. On parlera des spécificités de ces types de champs après.

Si on veut spécifier une valeur par défaut au champ, on peut utiliser l'attribut `value` :

```html
<label for="firstname">Prénom</label>
<input name="firstname" id="firstname" value="Cyrille" />
```

On peut aussi spécifier un texte qui s'affiche dans le champ lorsque sa valeur
est vide, par exemple pour indiquer à l'utilisateur le type de valeur qu'on
attend de lui. On appelle ça un "placeholder", et on utilise l'attribut
`placeholder` pour le spécifier :

```html
<label for="firstname">Prénom</label>
<input name="firstname" id="firstname" placeholder="George, Isabelle..." />
```

[Documentation de l'élément `input`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)

## Champ de texte multiligne

L'élément `<input type="text" />` est fait pour saisir un texte court sur une
seule ligne. Lorsque le focus est dans le champ, si on appuie sur la touche
`Entrée`, le formulaire est envoyé. Il est donc impossible d'ajouter un retour
à la ligne dans un tel champ.

Pour créer un champ de texte multiligne, il faut utiliser la balise `<textarea>` :

```html
<label for="description">Description</label>
<textarea name="description" id="description"></textarea>
```

Pour spécifier une valeur par défaut, cet élément ne prend pas en charge
l'attribut `value`. Il faut plutôt mettre la valeur en contenu de la balise :

```html
<label for="description">Description</label>
<textarea name="description" id="description">Hello world</textarea>
```

La raison à cela est que les retours à la ligne dans les attributs ne sont pas
pris en compte. Donc si la valeur était spécifiée dans l'attribut `value`, on
ne pourrait pas spécifier une valeur par défaut avec des retours à la ligne.

```html
<label for="description">Description</label>
<textarea name="description" id="description">
Hello
world
</textarea>
```

Attention, dans ce cas les espaces, tabulations, retours à la ligne sont tous
pris en compte dans l'affichage.

[Documentation de l'élément `textarea`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Textarea)

## Les champs de choix

Il existe plusieurs manières de proposer à l'utilisateur de choisir une valeur
parmi une liste finie :

* les checkboxes : permettent de sélectionner aucune, une ou plusieurs valeurs
* les boutons radio : permettent de sélectionner aucune ou une seule valeur
* les select : par défaut permettent de sélectionner aucune ou une seule valeur, mais peuvent être définis comme "multiple", auquel cas plusieurs valeurs peuvent être sélectionnées

Chaque type de champ a ses spécificités et ses cas d'usage.

### Les checkboxes

> Les éléments `<input>` de type checkbox sont affichés sous la forme de boîtes à
> cocher qui sont cochées lorsqu'elles sont activées. Elles permettent de
> sélectionner une ou plusieurs valeurs dans un formulaire.

Pour afficher une checkbox, on utilise l'élément `<input>` avec l'attribut
`type="checkbox"` :

```html
<input type="checkbox" />
```

On peut utiliser une checkbox simple pour proposer à l'utilisateur de
s'inscrire à une newsletter dans un formulaire d'inscription par exemple :

```html
<input type="checkbox" name="subscribe" id="subscribe" />
<label for="subscribe">Je souhaite m'inscrire à la newsletter</label>
```

Dans ce cas, lorsque l'utilisateur coche la checkbox et envoie le formulaire,
le serveur recevra la valeur `"on"` pour le champ `subscribe`. Si l'utilisateur
ne coche pas la checkbox, le champ ne sera pas envoyé au serveur.

Il est possible de spécifier la valeur qui sera envoyée si l'utilisateur coche
la checkbox grâce à l'attribut `value` :

```html
<input type="checkbox" name="subscribe" id="subscribe" value="newsletter" />
<label for="subscribe">Je souhaite m'inscrire à la newsletter</label>
```

Dans ce cas, le serveur recevra `subscribe=newsletter` si l'utilisateur coche
la checkbox.

Il est aussi possible de spécifier l'état par défaut de la checkbox avec
l'attribut `checked`. Cet attribut est un booléen, on n'a pas besoin de lui
passer une valeur. Si il est présent, la checkbox sera cochée par défaut, sinon
elle ne sera pas cochée.

```html
<input type="checkbox" name="subscribe" id="subscribe" value="newsletter" checked />
<label for="subscribe">Je souhaite m'inscrire à la newsletter</label>
```

On peut aussi avoir plusieurs checkbox pour un seul champ. Par exemple, si on
est sur un formulaire pour commander une glace et qu'on propose à l'utilisateur
de choisir des suppléments. Dans ce cas, on peut afficher plusieurs checkbox
qui ont le même attribut `name` :

```html
<input type="checkbox" name="extras" id="chocolate" />
<label for="chocolate">Pépites de chocolat</label>

<input type="checkbox" name="extras" id="caramel" />
<label for="caramel">Nappage caramel</label>

<input type="checkbox" name="extras" id="nuts" />
<label for="nuts">Eclats de noisettes</label>
```

Dans un tel cas d'usage, il convient de lier sémantiquement les checkboxes.
Pour ça, on peut les imbriquer dans un élément `<fieldset>`, et de spécifier un
label avec l'élément `<legend>` :

```html
<fieldset>
	<legend>Suppléments</legend>

	<input type="checkbox" name="extras" id="chocolate" value="chocolate" />
	<label for="chocolate">Pépites de chocolat</label>

	<input type="checkbox" name="extras" id="caramel" value="caramel" />
	<label for="caramel">Nappage caramel</label>

	<input type="checkbox" name="extras" id="nuts" value="nuts" />
	<label for="nuts">Eclats de noisettes</label>
</fieldset>
```

Lorsque plusieurs éléments ont le même `name`, le serveur recevra plusieurs
valeurs. Par exemple, si l'utilisateur sélectionne "Pépites de chocolat" et
"Nappage caramel", le serveur recevra `extras=chocolate&extras=caramel`. Charge
au serveur de récupérer correctement toutes les valeurs qui lui sont envoyées.

[Documentation de l'élément input avec le type checkbox](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/checkbox)

### Les boutons radio

Ces boutons tiennent leur nom des boutons qu'on trouvait sur les vieilles radio
: c'étaient des boutons qu'on pouvait pousser, et le fait d'en pousser un
désactivait celui qui était éventuellement déjà poussé. On ne pouvait donc
avoir qu'un seul bouton poussé à la fois. L'objectif est le même ici : on
n'attend de l'utilisateur qu'il ne choisisse qu'une seule valeur parmi toutes
celles proposées. Et si il change d'avis, alors la sélection de la nouvelle
valeur désactive la sélection précédente.

La structure est la même que pour les checkbox, seul le comportement est
différent. Par exemple, si on souhaite que l'utilisateur puisse choisir entre
une glace dans un cornet et une glace en pot, on peut lui proposer ces deux
choix sous forme de boutons radio :

```html
<fieldset>
	<legend>Choisissez un contenant</legend>

	<input type="radio" name="container" id="cone" value="cone" />
	<label for="cone">Cone en gaufrette</label>

	<input type="radio" name="container" id="pot" value="pot" />
	<label for="cone">Pot</label>
</fieldset>
```

[Documentation de l'élément input avec le type radio](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/radio)

### Les boîtes de selection

Les boîtes de sélection permettent de faire exactement la même chose que les
checkbox et les boutons radio : proposer à l'utilisateur de choisir une ou
plusieurs valeurs parmi un ensemble fini. Seul le rendu est différent. Les
boîtes de sélection affiche un champ que l'utilisateur peut activer pour voir
une liste déroulante de tous les choix possibles et faire sa sélection. Elles
sont particulièrement utiles lorsque la liste de choix possibles est grande,
car elles permettent d'éviter d'allourdir la page.

Par exemple, si on veut permettre à notre utilisateur de sélectionner son
parfum de glace parmi un grand nombre de parfums proposés, on peut utiliser une
boîte de sélection :

```html
<label for="flavour">Parfum</label>
<select name="flavour" id="flavour">
	<option value="chocolate">Chocolat</option>
	<option value="strawberry">Fraise</option>
	<option value="raspberry">Framboise</option>
	<option value="lemon">Citron</option>
	<!-- ... -->
	<option value="pistachio">Pistache</option>
</select>
```

Par défaut, on ne peut choisir qu'une seule valeur. Mais si on ajoute
l'attribut `multiple` (attribut booléen), alors on peut choisir plusieurs
valeurs. Toutefois, l'affichage natif des boîtes de sélection multiples est
difficile à utiliser. Il faut maintenir la touche `Shift` ou `Ctrl` pour
sélectionner plusieurs valeurs, et il est difficile de voir d'un coup d'oeil
combien / quelles valeurs sont sélectionnées. [Voir un exemple de select
multiple](https://sgllk6.csb.app/). On utilise donc très peu souvent les select
multiples natifs. En général on utilise des widgets javascript qui améliorent
l'expérience utilisateur.

[Documentation de l'élément select](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Select)

## Validation

Il est possible de faire une pré-validation de la saisie de l'utilisateur côté
client. Attention toutefois, ça ne doit pas se substituer à une validation en
bonne et due forme côté serveur. Un utilisateur peut très facilement altérer la
requête envoyée au serveur. La validation HTML permet donc de vite donner un
feedback instantané à l'utilisateur d'un formulaire sur une page web, mais ne
garantit en rien que les données reçues par un serveur seront valides.

Il existe plusieurs attributs permettant d'ajouter une couche de validation sur
un élément de formulaire :

* `required` : permet de spécifier que le champ doit absolument avoir une valeur pour que le formulaire puisse être envoyé
* `minlength` : permet de spécifier la longueur minimum de la valeur du champ (champ de texte uniquement)
* `maxlength` : permet de spécifier la longueur maximum de la valeur du champ (champ de texte uniquement)
* `min` : permet de spécifier la valeur minimum d'un champ numérique
* `max` : permet de spécifier la valeur maximum d'un champ numérique
* `type` : des règles de validation peuvent être appliquées selon le type sélectionné. Par exemple pour `type="email"`, le navigateur vérifie que la valeur correspond bien au format d'une adresse e-mail
* `pattern` : permet de spécifier une expression régulière pour valider la valeur fournie par l'utilisateur

[Documentation de la validation de formulaires en HTML](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)

<hr />

* Précédent : [Tableaux](08-tableaux.md)

