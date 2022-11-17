# CSS : Flexbox

Flexbox est une méthode de mise en page qui permet de placer des éléments sur un axe (horizontal ou vertical). Les éléments auront la possibilité de grandir ou rétrécir automatiquement afin de se répartir l'espace disponible selon les règles qu'on aura précisé.

Disons qu'on cherche à faire la barre de navigation suivante :

Avec les outils que nous avons vu jusqu'à maintenant, nous ne pouvons tout simplement pas arriver à ce résultat. Pour mettre des éléments les uns à côté des autres, nous avons vu `display: inline`, mais cela ne nous permet pas d'arriver au résultat final :

- Certaines marges sont ignorées
- On ne peut pas répartir les éléments le long de l'axe horizontal automatiquement : on pourrait utiliser une marge en dur, mais on perdrait l'aspect responsive

Il va donc nous falloir autre chose : flexbox.

## `display: flex`

La valeur `flex` de la propriété `display` va nous permettre d'activer la méthode de mise en page "flexbox" sur un élément. On dit que cet élément devient un "flex container", et ses enfants directs deviennent des "flex items".

Le simple fait d'activer flexbox fait que nous éléments se placent tous sur la même ligne. Flexbox va nous permettre de gérer plusieurs aspects sur les flex items :

- Taille
- Alignement
- Direction
- Ordre

## Direction

Flexbox permet de rendre des boîtes flexibles sur un axe : soit l'axe horizontal, soit l'axe vertical. L'axe choisit est définit avec la propriété [`flex-direction`](https://developer.mozilla.org/fr/docs/Web/CSS/flex-direction).

- `flex-direction: row` pour l'axe horizontal (valeur par défaut)
- `flex-direction: column` pour l'axe vertical

L'axe choisit est appelé "axe principal" ("main axis" en anglais). L'autre axe sera l'axe "secondaire" ("secondary axis" en anglais). Ces deux concepts auront une importance lorsqu'on parlera d'alignement des boîtes.

## Taille

La taille des éléments sur l'axe principal dans un conteneur flex est flexible. C'est à dire que les éléments vont avoir la capacité de grandir et/ou rétrécir en fonction de l'espace disponible sur cet axe, à partir d'une taille de base.

D'abord, pour définir la taille de base, on utilise la propriété [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis). Si on souhaite que la taille idéale de nos éléments soit `200px`, alors on spécifie `flex-basis: 200px`.

A partir de là, par défaut, si l'espace disponible est suffisant, alors la taille des éléments respectera la valeur de `flex-basis`. Sinon, les éléments rétréciront de manière équitable pour occuper l'espace disponible sans dépasser.

Si on souhaite que les éléments puissent grossir pour remplir l'espace disponible lorsqu'il y en a, on utilise [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow). En spécifiant `flex-grow: 1`, les éléments vont tous se voir attribuer la même portion de l'espace disponible.

Il est à noter que les valeurs de `flex-shrink` et `flex-grow` sont des facteurs. Par exemple, si un item A a `flex-grow: 1` et un autre item B a `flex-grow: 2`, alors l'item B se verra attribuer 2 portions de l'espace disponible, et l'item A une seule. Ainsi l'item B grossira plus que l'item A. Le fonctionnement est le même pour `flex-shrink`, mais pour le rétrécissement au lieu de l'aggrandissement.

L'application [flexulator](https://www.flexulator.com/) permet de visualiser ce phénomène de rétrécissement et d'aggrandissement.

## Alignement

L'alignement des items peut être géré sur les deux axes. Il y a une propriété pour chaque axe :

- [`justify-content`](https://developer.mozilla.org/fr/docs/Web/CSS/justify-content) pour l'axe principal
- [`align-items`](https://developer.mozilla.org/fr/docs/Web/CSS/align-items) pour l'axe secondaire

Par conséquent, selon la valeur de `flex-direction`, l'axe sur lequel chacune de ces propriétés agit n'est pas le même.

### Alignement sur l'axe principal

Les principales valeurs de la propriété `justify-content` sont les suivantes :

- `start` : aligne les items au début de l'axe
- `end` : aligne les items à la fin de l'axe
- `center` : center les items sur l'axe
- `space-between` : répartit les items sur l'ensemble de l'axe en répartissant l'espace disponible entre les items
- `space-around` : répartit les items sur l'ensemble de l'axe en répartissant l'espace disponible autour des items
- `space-around` : répartit les items sur l'ensemble de l'axe en répartissant l'espace disponible autour des items (de manière égale)

Vous pouvez visualiser l'effet de ces valeurs sur [cet exemple intéractif](https://codesandbox.io/s/main-axis-alignment-re7113).

### Alignement sur l'axe secondaire

Les principales valeurs de la propriété `align-items` sont les suivantes :

- `stretch` : étend les items pour qu'ils aient la même taille que l'item le plus grand
- `start` : aligne les items au début de l'axe
- `end` : aligne les items à la fin de l'axe
- `center` : centre les items sur l'axe

Vous pouvez visualiser l'effet de ces valeurs sur [cet exemple intéractif](https://codesandbox.io/s/secondary-axis-alignment-yjjdn1).

## Ordre

Flexbox permet de redéfinir l'ordre dans lequel les éléments sont affichés, indépendament de leur ordre dans le code HTML. Pour cela, on a deux possibilité :

- utiliser les valeurs `row-reverse` et `column-reverse` de la propriété `flex-direction` : l'axe principal et l'axe secondaire sont les mêmes que pour `row` et `column`, mais le sens de l'axe principal est inversé 
- utiliser la propriété [`order`](https://developer.mozilla.org/fr/docs/Web/CSS/order) : les items s'affichent dans l'ordre croissant des valeurs appliquées à la propriété `order`. Voir [un exemple intéractif](https://codesandbox.io/s/order-sgebh2) (vous pouvez modifier la valeur du champ associé à chaque item pour visualiser l'effet sur l'ordre des items).

## Retour à la ligne

Lorsque les éléments dépassent de leur conteneur dans l'axe principal, le comportement par défaut est de les faire rétrécir, comme vu précédemment. On peut aussi faire en sorte que les éléments qui dépassent passent automatiquement "à la ligne" sur l'axe secondaire. Pour cela, on utilise la propriété [`flex-wrap`](https://developer.mozilla.org/fr/docs/Web/CSS/flex-wrap).

Les valeurs possibles sont les suivantes :

- `no-wrap` (valeur par défaut) : le retour à la ligne n'est pas autorisé
- `wrap` : le retour à la ligne est autorisé
- `wrap-reverse` : le retour à la ligne est autorisé, mais le sens de l'axe secondaire est inversé

Vous pouvez voir [un exemple intéractif](https://codesandbox.io/s/wrap-ljffsl).

## Espacer les items

Par défaut nos éléments sont collés les uns aux autres. Pour appliquer un espacement, on pourrait utiliser `margin`, mais il faudrait qu'on prenne en compte la position de chaque élément pour ne pas en appliquer sur le premier et le dernier. Cela se complique d'autant plus lorsqu'on utilise `flex-wrap: wrap` et que par conséquent n'importe quel item peut passer à la ligne et devenir le 1er item de sa ligne.

Sur un flex container, on peut utiliser la propriété `gap` pour appliquer un espacement entre les éléments. On peut aussi utiliser `column-gap` et `row-gap` si on veut définir uniquement l'espacement entre les colonnes ou entre les lignes.
