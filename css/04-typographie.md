# CSS - Typographie

Dans le chapitre sur les couleurs on a vu qu'on pouvait modifier la couleur du texte avec la propriété `color`. Dans ce chapitre, on va parler de taille de texte, de graisse, de style, d'interlignage et de polices externes...

## Modifier la graisse du texte

Pour modifier la graisse d'un texte, on utilie la propriété [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). Cette propriété prend en valeur soit un mot-clé, soit un nombre.

Les nombres ne sont pas libres, il s'agit des valeurs suivantes :

* `100` : thin (ou hairline)
* `200` : extra light (ou ultra light) 
* `300` : light
* `400` : normal (ou regular)
* `500` : medium
* `600` : semi bold
* `700` : bold
* `800` : extra bold (ou ultra bold)
* `900` : black (ou heavy)
* `950` : extra black (ou ultra black)

Les mots-clé disponibles sont :

* `normal` : valeur par défaut, graisse "normale", équivalent de la valeur numérique `400`
* `bold` : équivalent de la valeur numérique `700`
* `lighter` : valeur relative, baisse le niveau de graisse d'un niveau par rapport à la graisse de l'élément parent
* `bolder` : valeur relative, augmente le niveau de graisse d'un niveau par rapport à la graisse de l'élément parent

[Documentation de `font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

## Modifier le style du texte

La propriété `font-style` peret globalement de rendre un texte en italique. Elle peut prend les valeurs suivantes :

* `normal` : le texte ne sera pas en italique
* `italic` : le texte sera en italique

Il existe aussi la valeur `oblique`, mais la plupart du temps la différence entre `italic` et `oblique` est très faible, donc nous ne prendrons pas le temps de détailler ici. Disons juste qu'une police de caractère peut présenter un style italique, oblique ou les deux. Lorsqu'on spécifie `font-style: italic`, le navigateur essaye d'utiliser la version "italic" de la police de caractère. Si elle n'en a pas, le style italique sera simulé artificiellement.

[Documentation de `font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)

## Taille de texte

La taille d'un texte est gérée avec la propriété `font-size`. Cette propriété prend comme valeur une longueur ou un mot-clé.

## Mots-clés

Dans un premier temps, parlons des mots-clé. Il y a d'abord un ensemble de mot-clé correspondant à des valeurs définies à partir de la taille de police de base définie par l'utilisateur dans les paramètres de son navigateur :

* `xx-small` : `9px` par défaut
* `x-small` : `10px` par défaut
* `small` : `13px` par défaut
* `medium` : `16px` par défaut (valeur définie par l'utilisateur dans ses paramètres)
* `large` : `18px` par défaut
* `x-large` : `24px` par défaut
* `xx-large` : `32px` par défaut
* `xxx-large` : `48px` par défaut

Et il y a deux mots-clé permettant de définir la `font-size` de manière relative à celle de l'élément parent :

* `smaller` : baisse la `font-size` d'un niveau par rapport à l'élément parent (`medium` => `small` par exemple)
* `larger` : augmente la `font-size` d'un niveau par rapport à l'élément parent (`small` => `medium` par exemple)

Ces mots-clés sont assez rarement utilisés, mais ils peuvent être utiles pour une phase de prototypage par exemple, quand on ne veut pas passer du temps à prendre des décisions quant à la taille des textes.

## Longueurs

### Pixels (`px`)

`px` est une unité absolue. Lorsqu'on définit la taille d'un texte en `px`, cette taille ne dépend d'aucun autre élément : on demande au navigateur d'afficher le texte avec une hauteur bien précise en pixels. C'est donc l'unité qui permet d'arriver au résultat le plus précis.

En revanche, quand on utilise `px` pour définir la taille d'un texte, on cause des problèmes d'accessibilité. Car on surcharge le choix de l'utilisateur dans les paramètres de son navigateur. Si celui-ci a configuré son navigateur pour avoir une taille de texte de base à `20px`, alors ce choix sera totalement ignoré et la valeur qu'on aura choisie sera utilisée à la place. Cela peut causer des problèmes à cet utilisateur qui a besoin d'une taille de police minimale plus élevée pour pouvoir lire correctement les textes sur les pages web.

### em

`em` est une unité relative. C'est un multiple de la `font-size` héritée de l'élément.

Par exemple, si on a le HTML suivant :

```html
<section class="outer">
	<p class="inner">Lorem ipsum dolor sit amet</p>
</section>
```

Et le CSS suivant :

```css
.outer {
	/* On définit la font-size en px pour l'exemple, à éviter ! */
	font-size: 20px;
}

.inner {
	font-size: 2em;
}
```

Alors la `font-size` finale de l'élément `.inner` sera de `2 * 20px = 40px`.

Attention : les multiplications se cumulent. Si on garde le HTML de l'exemple précédent, et qu'on modifie juste le CSS :

```css
.outer {
	font-size: 1.5em;
}

.inner {
	font-size: 2em;
}
```

Si on part du principe qu'aucun autre élément ne redéfinit sa `font-size`, donc que la `font-size` héritée sera celle définie par l'utilisateur dans ses paramètres (par défaut `16px`), alors :

* `.outer` aura une `font-size` de `1.5 * 16px = 24px`
* `.inner` aura une `font-size` de `2 * 24px = 48px` (soit `1.5 * 2 * 16px`)

Le calcul peut donc rapidement devenir difficile quand on veut revenir à une valeur précise dans un élément qui est à l'intérieur d'un autre qui définit sa `font-size` en `em`, surtout sans utiliser l'unité `px`.

### rem

L'unité `rem` a été inventée pour éviter les problèmes liés à l'imbrication de calculs de l'unité `em`. C'est aussi une unité relative et c'est aussi un multiple d'une autre `font-size`, mais cette fois-ci plutôt de la `font-size` de l'élément racine ("root", d'où le "r"). Dans une page web, l'élément racine est `html`, et à moins qu'on ait redéfinit la `font-size` de cet élément, elle sera égale à la `font-size` définie par l'utilisateur dans ses paramètres. Par défaut `16px`, donc.

Cette unité nous permet de plus facilement revenir à une valeur de `font-size` précise, sans avoir à prendre en compte toute la chaîne de `font-size` des éléments parents. Si la `font-size` de la racine est `16px`, alors `2rem` vaudront toujours `32px`, peu importe où est placé l'élément et la `font-size` de ses éléments parents.

Si on reprend le HTML précédent :

```html
<section class="outer">
	<p class="inner">Lorem ipsum dolor sit amet</p>
</section>
```

Et qu'on y applique le CSS suivant :

```css
.outer {
	font-size: 1.5em;
}

.inner {
	font-size: 2rem;
}
```

La `font-size` de l'élément `.inner` sera égale à `32px` (par défaut). La `font-size: 1.5em` de son élément parent (`.outer`) n'aura aucun effet dans le calcul.

[Documentation de `font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)

## Modifier la police de caractères

La propriété `font-family` permet de modifier la police de caractères utilisée sur un élément. Elle permet de spécifier une ou plusieurs polices à utiliser pour afficher le texte de l'élément.

On peut spécifier plusieurs noms de police car une police peut ne pas être disponible sur la machine de l'utilisateur. Auquel cas le navigateur essayera d'utiliser la suivante, ainsi de suite.

Par exemple :

```css
font-family: Georgia, "Times New Roman", "DejaVu Serif";
```

Le navigateur essayera de charger la police Georgia. Si elle n'est pas disponible, il tentera de charger Times New Roman. Si elle n'est pas disponible non plus, il tentera de charger DejaVu Serif. Si aucune police demandée n'est disponible sur la machine de l'utilisateur, la police par défaut sera utilisée.

En spécifiant une famille de police (`serif`, `sans-serif`, `monospace`...) en dernière valeur, on peut s'assurer d'au moins utiliser la police par défaut du système pour une famille donnée. Ainsi, si les polices souhaitées sont des polices de la famille `sans-serif`, alors on peut spécifier `sans-serif` en dernière valeur :

```css
font-family: Roboto, "Open Sans", sans-serif;
```

On s'assure ainsi que la police de secours sera au moins de la même famille que les polices qu'on aurait aimé utiliser idéalement. Il est donc conseillé de toujours fournir une famille de police en dernière valeur.

[Documentation de `font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

## Polices de caractères externes

TODO
