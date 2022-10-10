# CSS - Images

CSS nous permet d'inclure des médias dans notre page web (notamment des images, mais aussi des polices de caractères par exemple). L'utilisation la plus commune des médias en CSS est d'inclure une image de fond sur un élément.

## Attribuer une image de fond à un élément

Pour attribuer une image de fond à un élément, on utilise la propriété `background-image`. La valeur associée peut être de plusieurs formes :

### Fichier image : `url()`

La fonction `url()` nous permet d'inclure une image en spécifiant son chemin. Par exemple : `background-image: url("./images/mon-image.jpg")`. Lorsque ce style sera utilisé sur un élément, l'image sera chargée par le navigateur.

On peut aussi passer en paramètre de `url()` la représentation [base64](https://fr.wikipedia.org/wiki/Base64) d'une image. Par exemple `background-image: url("data:image/png;base64,iRxVB0…")` (la chaîne base64 est volontairement tronquée car elles sont généralement assez longues). Base64 est une représentation d'une donnée sous forme de chaîne de caractère.

Exemples :

<div style="display: flex; align-items: stretch; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0"><code>background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);"></div>
</div>


[Documentation de `url()`](https://developer.mozilla.org/en-US/docs/Web/CSS/url)

### Dégradés

Il existe plusieurs types de dégradés :

* Linéaire : [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) / [`repeating-linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient)
* Radial : [`radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient) / [`repeating-radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient)
* Conique : [`conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)

Chaque fonction de dégradé prend des paramètres différents. Vous trouverez le détail dans [la documentation sur les dégradés](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient#formal_syntax). Mais voici quelques exemples :

<div style="display: flex; align-items: stretch; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0"><code>background-image: linear-gradient(
	to bottom,
	hsl(360 100% 70%) 0%,
	hsl(115 100% 54%) 100%
);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: linear-gradient(to bottom, hsl(360 100% 70%), hsl(115 100% 54%))"></div>
</div>

<div style="display: flex; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0;"><code>background-image: linear-gradient(
	to right,
	hsl(360 100% 70%) 0%,
	hsl(115 100% 54%) 100%
);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: linear-gradient(to right, hsl(360 100% 70%) 0%, hsl(115 100% 54%) 100%)"></div>
</div>

<div style="display: flex; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0;"><code>background-image: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
          	      linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);"></div>
</div>

<div style="display: flex; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0;"><code>background-image: radial-gradient(
	#e66465 0%,
	#9198e5 100%
);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: radial-gradient(#e66465 0%, #9198e5 100%);"></div>
</div>

<div style="display: flex; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0;"><code>background-image: conic-gradient(
	red 0%,
	orange 25%,
	yellow 50%,
	green 75%,
	blue 100%
);</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: conic-gradient(red 0%,orange 25%,yellow 50%,green 75%,blue 100%);"></div>
</div>

## Dimensions d'une image de fond

Par défaut, une image de fond couvre sa propre taille. Par exemple, une image de 640\*457 pixels sera "coupée" si elle est en image de fond d'un élément de 300\*200 pixels :

<div style="margin-bottom: 64px; width: 300px; height: 200px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);"></div>

A l'opposé, si l'image est plus petite que l'élément auquel elle est attribuée, elle sera répétée :

<div style="margin-bottom: 64px; width: 750px; height: 600px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);"></div>

Pour éviter que l'image de fond soit répétée, on peut utiliser la propriété [`background-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) :

```css
background-repeat: no-repeat;
```

Pour modifier la taille de l'image de fond, on peut utiliser la propriété [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size). Cette propriété peut prendre en valeur n'importe quelle valeur de taille (en `%`, `px`, `em`, `rem`...). Si on spécifie une seule valeur elle est utilisée pour la largeur et la hauteur. Si on en spécifie 2, alors la première est utilisée pour la largeur et la seconde pour la hauteur.

Dans l'exemple suivant, on demande au navigateur de faire en sorte que l'image de fond prenne 50% de la largeur de l'élément et 25% de sa hauteur. Comme l'image couvre 50% de la largeur et 25% de la hauteur, elle est répétée 2 fois horizontalement et 4 fois verticalement pour remplir l'élément.

<div style="margin-bottom: 64px; display: flex; align-items: stretch; margin: 32px 0;">
	<pre style="flex-grow: 1; flex-basis: 50%; margin-bottom: 0"><code>background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);
background-size: 50% 25%;</code></pre>
	<div style="flex-basis: 50%; flex-grow: 1; height: 200px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640); background-size: 50% 25%;"></div>
</div>

Mais `background-size` peut aussi prendre en valeur des mots-clé :

* `contain` : fait en sorte que l'entièreté de l'image soit visible, quitte à la rétrécir (mais toujours en gardant le ratio original de l'image)
* `cover` : fait en sorte que l'image couvre l'élément en entier, même si elle est plus petite que l'élément, quitte à l'aggrandir et à la couper (mais toujours en gardant le ratio original de l'image)

```css
background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);
background-size: contain;
background-repeat: no-repeat;
```

<div style="height: 200px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640); background-size: contain; background-repeat: no-repeat;"></div>


```css
background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640);
background-size: cover;
background-repeat: no-repeat;
```

<div style="height: 700px; background-image: url(https://unsplash.com/photos/rKoOne_aUak/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1NDA1ODQ0&force=true&w=640); background-size: cover; background-repeat: no-repeat;"></div>

## Position d'une image de fond

Par défaut une image se positionne en haut à droite de l'élément. Pour modifier ce comportement, on peut utiliser [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Cette propriété peut prendre une ou deux valeurs.

Si on spécifie une seule valeur, elle peut être soit un mot-clé, soit une valeur de longueur. Si c'est un mot-clé, il doit être parmi `center`, `top`, `left`, `bottom` et `right`. Dans ce cas, l'autre dimension aura automatiquement la valeur `center`. Si c'est une valeur de longueur, elle sera utilisée pour le positionnement sur l'axe `X` (horizontal), et la valeur pour l'axe `Y` (vertical) sera automatiquement `50%`.

Si on spécifie deux valeurs, alors il y a plusieurs possibilités :

* Si un mot-clé (`center`, `top`, `left`, `bottom` et `right`) est utilisé (en tant que 1ère ou 2ème valeur), alors l'autre valeur sera utilisée pour l'autre axe. Par exemple `20px top` fera que `20px` sera utilisé pour l'axe X. Ce sera aussi le cas pour `top 20px`. Mais `20px left` ou `left 20px` fera que `20px` sera utilisé pour l'axe Y
* Si les deux valeurs sont des longueurs, elles seront utilisées pour l'axe X et l'axe Y respectivement

## Combiner taille et positionnement

En combinant la taille d'une image et fond et son positionnement, on peut obtenir des résultats intéressants pour afficher des images dont on ne connait pas les dimensions dans un élément.

Par exemple, si on veut qu'une image s'affiche au centre de l'élément et soit toujours entièrement visible, on peut écrire :

```css
background-size: contain;
background-repeat: no-repeat;
background-position: center;
```

Si on veut qu'une image s'affiche au centre de l'élément et couvre l'élément :

```css
background-size: cover;
background-position: center;
```
