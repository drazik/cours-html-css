# CSS - les couleurs

De nombreuses couleurs peuvent être définies via CSS voici quelques exemples :

* Couleur de texte : propriété `color`
* Couleur de fond : propriété `background-color`
* Couleur de bordure : propriété `border-color`
* Couleur de contour : propriété `outline-color`

## Formats de couleurs

### Couleur nommée

Lorsqu'on spécifie `color: blue`, on utilise une valeur de couleur prédéfinie et associée au mot-clé `blue` par le navigateur. Il existe de nombreuses couleurs nommées : voir [la liste sur le MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color). Mais avec les couleurs nommées, on ne peut utiliser qu'un petit sous-ensemble de toutes les couleurs possibles. Il serait trop fastidieux de donner un nom à toutes les couleurs représentables.

### Hexadecimal `#RRGGBB[AA]`

C'est le format de couleur le plus répandu. Certainement parce que c'est le plus succint car chaque couleur peut s'écrire sur 8 caractères. C'est une représentation en héxadécimal de chaque composant (rouge, vert, bleu, alpha) d'une couleur. Chaque composant est sur 2 caractère héxadécimaux (de `0` à `F`). La partie `AA` représente l'alpha (opacité) de la couleur (`00` = 100% transparent, `FF` = 100% opaque). Elle est optionnelle, par défaut une couleur est complètement opaque.

Exemples :

<div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: #55A3FF;</pre></code>
		<div style="color: #55A3FF; font-size: 1.5em;">Hello world</div>
	</div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: #55A3FF80;</pre></code>
		<div style="color: #55A3FF80; font-size: 1.5em;">Hello world</div>
	</div>
</div>

### `rgb(red green blue [/alpha])`

* `red` est la "part" de rouge dans la couleur finale : nombre allant de `0` à `255`
* `green` est la "part" de vert dans la couleur finale : nombre allant de `0` à `255`
* `blue` est la "part" de bleu dans la couleur finale : nombre allant de `0` à `255`
* `/ alpha` est optionnel et permet de définir l'opacité de la couleur. C'est soit un nombre allant de `0` à `1` (`0` = complètement transparent, `1` = complètement opaque). Soit un pourcentage (`0%` = complètement transparent, `100%` = complètement opaque)

Exemples :

<div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: rgb(85 163 255);</pre></code>
		<div style="color: rgb(85 163 255); font-size: 1.5em;">Hello world</div>
	</div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: rgb(85 163 255 50%);</pre></code>
		<div style="color: rgb(85 163 255 50%); font-size: 1.5em;">Hello world</div>
	</div>
</div>

### `hsl(hue saturation lightness [/ alpha])`

* `hue` est un angle de la roue des couleurs (en unité `deg`, `rad`, `grad` ou `turn`)
* `saturation` est un pourcentage de saturation de la couleur (100% = complètement saturé, 0 % = complètement désaturé, gris)
* `lightness` est un pourcentage de luminosité de la couleur (100% = blanc, 0% = noir, 50% = couleur "normale")
* `alpha` fonctionne de la même manière que pour `rgb`

Exemples :

<div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: hsl(212 100 67);</pre></code>
		<div style="color: hsl(212 100 67); font-size: 1.5em;">Hello world</div>
	</div>
	<div style="display: flex; align-items: center;">
		<code><pre>color: hsl(212 100 67 50%);</pre></code>
		<div style="color: hsl(212 100 67 50%); font-size: 1.5em;">Hello world</div>
	</div>
</div>

C'est un format qui rend "facile" la déclinaison des couleurs. Si on veut une couleur plus ou moins saturée, on joue sur le paramètre `saturation`, si on veut une couleur plus ou moins "claire" (lumineuse) on joue sur le paramètre `lightness`. Chaque paramètre a un rôle facilement identifiable plus facilement visualisable que pour `rgb()` où il est difficile de se représenter ce qu'est une couleur avec plus ou moins de rouge, de vert ou de bleu.

### `currentColor`

`currentColor` est une valeur un peu spéciale qui agit comme une variable. Elle référence la couleur de texte de l'élément. Elle est utile si on veut utiliser la couleur du texte de l'élément pour une autre couleur de cet élément. Par exemple si on veut que la couleur de contour soit la même que la couleur de texte, on peut écrire `outline-color: currentColor`. Ce qui nous évite d'écrire plusieurs fois la même couleur.

## Contraste et accessibilité

Lorsqu'on applique des couleurs sur nos éléments, il faut faire attention au ratio de contraste qui existe entre deux couleurs qui vont se superposer (par exemple couleur de fond et couleur de texte). Pour qu'un texte soit lisible, il faut qu'il ait un ratio de contraste suffisant par rapport à la couleur de fond sur laquelle il se trouve.

Le ratio de contraste se note sous la forme `N:1` où `N` est un nombre pouvant aller de `1` à `21`. `1:1` correspond au contraste entre du blanc et du blanc (plus généralement, entre une couleur et elle-même). `21:1` correspond au contraste entre du noir et du blanc.

Pour obtenir le ratio de contraste entre deux couleurs, on peut utiliser le [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

[Le guide d'accessibilité WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (Web Content Accessibility Guidelines) propose deux niveaux de critères : niveau AA et niveau AAA.

Pour le niveau AA, il est conseillé un ratio minimal de `4.5:1` pour du texte normal et de `3:1` pour du grand texte.

Pour le niveau AAA, il est conseillé un ratio minimal de `7:1` pour du texte normal et de `4.5:1` pour du grand texte.

Dans les deux cas, du grand texte est du texte en gras avec une taille d'au moins `18px` ou du texte d'au moins `24px`.
