# HTML - Introduction

Dans ce cours on va créer des pages web. Pour ce faire, la brique la plus
élémentaire est le HTML. HTML signifie "HyperText Markup Language"
(litéralement "langage de balises pour l'hypertexte"). L'hypertexte désigne les
liens qui relient les pages web entre elles (au sein d'un même site ou entre
différents sites). Ces différents liens tissent d'ailleurs la toile qui donne
son nom au "web". On retrouve le terme HyperText dans HTTP (pour "HyperText
Transfer Protocol"), qui est le protocole sur lequel repoose le web. On en
reparlera très certainement, notamment lorsqu'on fera des formulaires. Si vous
souhaitez en savoir plus sur la création du web, vous pouvez lire [Le web et
ses normes
(MDN)](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards).

On va donc écrire du code dans le langage HTML. Pour ça, on va avoir besoin de
deux choses : un éditeur (pour écrire le code dans des fichiers) et un
navigateur (pour ouvrir les fichiers contenant notre code et pouvoir visualiser
nos pages).

## Installer un navigateur web

N'importe quel navigateur récent sera capable d'interpréter correctement nos pages.

* [Firefox](https://www.mozilla.org/fr/firefox/new/)
* [Chrome](https://www.google.fr/chrome/index.html)
* [Edge](https://www.microsoft.com/fr-fr/edge)
* Safari (uniquement sur macOS, installé par défaut)

Vous pouvez installer tous les navigateurs compatibles avec votre système
d'exploitation. Cela vous permettra de vérifier que vos pages fonctionnent bien
dans tous les navigateurs les plus répandus.

## Editeur

L'éditeur de code (ou IDE pour Integrated Development Environment) le plus
répandu chez les développeurs web est [Visual Studio
Code](https://code.visualstudio.com/). Si vous n'avez pas d'éditeur favori, je
vous conseille d'utiliser celui-ci. Si vous avez déjà un éditeur favori,
utilisez-le. L'important est d'être à l'aise avec ses outils, pas d'utiliser le
même que tout le monde.

## Première page web

Ouvrir VSCode, puis "Open folder". Créer un nouveau dossier, et l'ouvrir. Créer
un nouveau fichier index.html. Ce nom n'est pas choisi au hasard : pour le
moment on va directement ouvrir le fichier dans le navigateur à partir du
système de fichiers de notre machine, mais quand on enverra nos fichiers sur un
serveur pour que notre site soit accessible au monde entier, c'est par
convention ce fichier qui sera recherché quand l'utilisateur accèdera à la
racine du site. On peut d'ailleurs nommer nos fichiers comme on veut, mais il
est conseillé de n'utiliser que des minuscules, des chiffres, tirets et
underscores (pas d'espaces). Les caractères spéciaux ont parfois une
signification dans un chemin de fichier (`/` et `\` sont utilisés comme
séparateurs par exemple), et tous les systèmes de fichiers ne sont pas
sensibles à la casse.

On peut ensuite ouvrir ce fichier dans VSCode. Pour le moment il est vide, mais
on va commencer à écrire des choses dedans.

HTML est un langage de balisage. Son objectif est de décrire le contenu des
pages. Les balises permettent de donner un sens (on parle de "sémantique") au
contenu qu'on souhaite afficher sur nos pages. Tout document HTML commence par
une balise "racine" : la balise `<html></html>`. Pour aller plus vite, on peut
taper juste `html` pour appuyer sur la touche `Tab` (celle avec les deux
flèches, sous `Echap`).

On voit la structure d'une balise en HTML : une partie ouvrante (`<html>`) et
une partie fermante (`</html>`). Une balise entoure du contenu. Et il est même
possible de les imbriquer les unes dans les autres. D'ailleurs, continuons en
ajoutant une nouvelle balise. Entre la balise ouvrante et la balise fermante,
ajoutons une baliise `<body></body>`. Comme son nom l'indique, à l'intérieur de
cette balise nous allons mettre le "corps" de notre page. C'est à dire son
contenu. Ajoutons par exemple un paragraphe de texte, avec la balise `<p></p>`
:

```html
<p>Hello world!</p>
```

Sauvegardons ce fichier (en utilisant la combinaison de touches `ctrl + s`;
apprenez tout de suite ce raccourci, n'allez jamais dans les menus avec la
souris pour ça, vous perdrez trop de temps). Puis affichons notre page dans un
navigateur. Pour cela, ouvrez un explorateur de fichier, naviguez jusqu'au
dossier qui contient le fichier, puis faites un click droit et "Ouvrir avec"
sur le fichier. Sélectionnez votre navigateur préféré. Celui-ci doit s'ouvrir
et afficher votre page : vous voyez "Hello world!" s'afficher.

Vous vous demandez peut-être pouvoir mettre le contenu dans cette balise
`body`, plutôt que directement dans la balise `html`. Qu'y a-t-il d'autre dans
une page web que son contenu ? Et bien une page web peut aussi avoir tout un
lot de metadonnées. Ces données décrivent la page, mais ne participent pas à
son contenu. Parmi ces metadonnées, on peut trouver entre autres :

* le titre de la page (celui qui s'affiche dans l'onglet du navigateur, mais aussi dans les résultats des moteurs de recherche ou dans les partages sur les réseaux sociaux)
* la description de la page (le petit texte qui s'affiche sous le titre dans les résultats des moteurs de recherche ou dans les partages sur les réseaux sociaux)
* l'encodage de caractères utilisé par la page web : il en existe de nombreux. Dire au navigateur quel encodage utilise la page web lui permet de la décoder correctement. On utilisera toujours `utf-8`
* les feuilles de style (CSS) que la page doit charger
* des indications pour ouvrir des connexions vers certains serveurs avant que la page n'en ait besoin (optimisations de performancee)
* plein d'autres choses...

Ces métadonnées ne sont pas affichées dans le corps de la page, mais dans son
"en-tête". Pour décrire l'en-tête d'une page, on utilise la balise
`<head></head>`. Par convention, et parce qu'un fichier HTML est lu de haut en
bas par les navigateurs, on place cette balise avant la balise `body`. Ajoutons
cette balise à notre page, et donnons un titre à la page avec la balise
`<title></title>` :

```html
<head>
	<title>Ma page web</title>
</head>
```

Si on raffraichit notre page dans le navigateur (`F5` ou `ctrl + r`), on peut
maintenant constater que l'onglet indique "Ma page web".

Pour nous assurer que tous les caractères de notre page s'afficherons
correctement, ajoutons l'information du type d'encodage utilisé. Sans faire un
cours complet sur l'encodage de caractères (trop technique à ce stade et
surtout beaucoup trop long, mais n'hésitez pas à aller voir cette excellente
vidéo sur le sujet : https://www.youtube.com/watch?v=MijmeoH9LT4), disons
simplement que nous allons toujours utiliser l'encodage de caractère `utf-8`.
Celui-ci permet d'encoder tous les caractères dont nous aurons besoin, et même
beaucoup plus en réalité. Pour info il existe aussi `utf-16` eet `utf-32` qui
permettent d'encoder encore plus de caractères mais sont plus lourd (8 bits vs
16 bits vs 32 bits). Pour indiquer ça, on va utiliser une nouvelle balise :
`<meta />`

```html
<head>
	<meta charset="utf-8" />
	<title>Ma page web</title>
</head>
```

Vous aurez certainement remarqué que cette balise est un peu spéciale par
rapport à toutes celles qu'on a utilisé jusqu'ici. En fait, elle a deux
particularités :

* Elle n'a pas une partie ouvrante et une partie fermante : on dit que cette balise est "auto fermante". En effet, elle n'est pas vouée à entourer du contenu, mais simplement à véhiculer une information au navigateur
* Il n'y a pas que le nom de la balise, mais aussi des `x="y"` : ce sont des "attributs". Ceux-ci ne sont pas spécifiques à la balise `meta`. Il existe des tas d'attributs : certains attributs peuvent être utilisés sur n'importe quelle balise (`id`  ou `class`, par exemple); d'autres sont spécifiques à certaines balises (`value` sur un élément de formulaire `<input />`, par exemple).

Si on rafraîchit la page, on ne verra pas de changement, car tous les
navigateurs utilisent par défaut un encodage de caractère capable d'afficher
correctement la très grande majorité des caractères aujourd'hui. Mais ça n'a
pas toujours été le cas, et en ajoutant cette metadonnée on s'assure que le
programme qui va consommer notre page web utillisera le bon encodage de
caractère.

Faisons une petite pause pour faire le point sur ce qu'on a appris jusqu'ici :

* pour créer une page web, la brique fondamentale est le HTML
* HTML est un langage de balisage : il décrit le contenu de le page, permet d'apposer de la sémantique sur chaque élément qui la compose
* un document HTML a toujours une balise racine (`<html></html>`), une en-tête `<head></head>` et un corps `<body></body>`
* dans l'en-tête, on met tout ce qui est utilse pour afficher la page mais n'est pas le contenu de celle-ci : ce sont des métadonnées
* dans le corps, on met le contenu de la page
* une balise a une partie ouvrante et une partie fermante
* les balises peuvent-être imbriquées les unes dans les autres (attention il y a des règles : n'importe quelle balise ne peut pas être placée dans n'importe quelle balise)
* les balises peuvent avoir des attributs
* certaines balises sont "auto fermantes" : elles véhiculent une information mais n'ont pas vocation à décrire un contenu

