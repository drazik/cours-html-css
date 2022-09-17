# HTML - Elements de texte

Le texte est la forme la plus basique et répandue de contenu qu'on peut
afficher sur une page web. Du texte peut être un simple paragraphe, un titre,
une citation... HTML propose tout un ensemble de balises permettant de décrire
le texte figurant sur une page web pour y accoler la sémantique qui y
correspond le mieux. Un titre principal et une annotation n'ont pas la même
sémantique, donc ils ne sont pas représentés par la même balise HTML.

## Les titres


Pour les titres, il existe une hiérarchie. Lorsqu'un utilisateur arrive sur une
page web aveec un long contenu textuel (par exemple un article sur Wikipedia),
il va scroller pour trouver les titres des différentes parties et s'arrêter sur
celle qui l'intéresse. Un utilisateur qui utillise une solution de restitution
auditive va écouter les différents titres puis demander à se concentrer sur le
contenu correspondant au titre qui semble l'intéresser. Il est donc important
d'avoir une bonne hiérarchie de titres.

Il existe 6 niveaux de titres en HTML, chacun désigné par sa propre balise :
`h1`, `h2`, `h3`, `h4`, `h5`, `h6`. La balise `h1` désigne un titre de niveau
1, c'est à dire le titre principal du document. Ce titre principal doit être
unique au sein du document. Après ce titre principal, on peut utiliser les
autres niveaux de titres pour organiser le document comme on le souhaite. On
peut utiliser une extension comme HeadingsMap (dans Firefox) pour visualiser la
hiérarchie de titres d'une page. L'extension pourra même vous indiquer les
problèmes de hiérarchie de titres en surlignant les titres problématiques.

```html
<h1>Cours sur HTML</h1>

<p>
	Bienvenue...
</p>

<h2>Structure d'un fichier HTML</h2>

<h3>Le doctype</h3>
<p>...</p>

<h3>La balise &lt;html&gt;</h3>
<p>...</p>

<h3>La balise &lt;head&gt;</h3>

<h4>Les métadonnées</h4>
<p>...</p>

<h2>Elements de texte</h2>

<h3>Les titres</h3>
<p>...</p>
```

## Les paragraphes

Un texte qui n'a pas de sémantique particulière autre que d'être un simple
paragraphe de texte peut aller dans une balise `<p></p>`. Si on a besoin de
faire un retour à la ligne dans un paragraphe, on peut utiliser la balise `<br
/>`. Attention, si on veut faire un espacement entre deux paragraphes, on ne
met pas plusieurs `<br />`. Ce n'est pas le rôle de cette balise que de créer
de l'espacement. On utilisera du CSS pour faire ça. Pour le moment on ne sait
pas modifier l'espacement entre deux éléments de la page car on ne sait pas
faire de CSS.

```html
<p>
	Bienvenue sur mon site !<br />
	J'y parlerais de développement web.
</p>
```

## Mettre en avant du texte

Il existe deux éléments permettant de mettre du texte en avant

* `<em></em>` (emphase) : permet de marquer une portion de texte sur laquelle on souhaite insister. On peut imbriquer les éléments `<em></em>` les uns dans les autres. Ca permet de créer des niveaux d'emphase où chaque nouveau niveau a un degré d'insistance plus important que le précédent. Par défaut le texte entouré par cette balise est affiché en italique
* `<strong></strong>` : permet de marquer une portion de texte qui a une importance particulière, un certain sérieux ou un caractère urgent. Par défaut le texte entouré par cette balise est affiché en gras

Le style par défaut de ces balises ne veut pas dire que leur seul rôle est de
modifier le style du texte. Si on souhaite mettre du texte en italique mais
sans modifier sa sémantique (ou sans que sa sémantique soit celle de la balise
`<em>`), on utilisera du CSS. De même pour du texte en gras. 

```html
<p>
	Sur ce site il sera question de <em>tennis</em>. Attention, <strong>aucun troll ne sera toléré</strong>
</p>
TODO exemples
```

Voir la [documentation de la balise
`em`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/em) ainsi que [la
documentation de la balise
`strong`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong).
