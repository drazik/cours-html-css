# TD CSS : Box Model et positionnement

Le but de ce TD est de réaliser une page web complète, à partir d'une maquette.
C'est le travail quotidien d'un(e) intégrateur(rice) web : recevoir une image
statique des pages composant un site web, et utiliser ses compétences en
HTML/CSS pour la « transformer » en page web visionnable dans un navigateur.

## 1ère étape

En premier lieu, vous pouvez récupérer la maquette [ici](maquette.png).
Regardez-la et analysez-la quelques instants afin de réfléchir à la manière
dont vous allez pouvoir en intégrer chaque partie.

Une version finale est disponible sur
[https://example-hrcesarxtg.now.sh/](https://example-hrcesarxtg.now.sh/).

Je vous conseille de découper la maquette en plusieurs partie dans votre tête,
afin d'être confronté(e)s à plusieurs petits problèmes, plutôt qu'un énorme.

Ici, la maquette est un fichier PNG. Ce fichier ne vous permet pas de récupérer
les différentes tailles de police, de marges, espacements, etc. simplement.
Pour compenser ce manque, voici différentes valeurs qui vous seront utiles :

### Zone utile

On apelle « zone utile » la largeur qu'occupe le contenu de la page. Ici, la zone utile est de `864px`

### Header

* La taille de la police du texte « Blog » est `24px` et sa couleur est `#707070`
* La taille de la police des éléments du menu est `18px` et leur couleur est `#707070`
* La couleur de l'élément du menu mis en valeur est `#83ddfe`
* La marge entre chaque élément du menu du header est `32px`

### Bannière

* La hauteur de la bannière (bloc avec l'image de fond) est `384px`

### Bloc article

* La marge interne du bloc est `50px`
* Le bloc est décalé vers le haut de `165px`
* La marge entre le header de l'article (infos de l'auteur + titre + date) et son contenu est de `40px`
* La photo de l'auteur de l'article est un carré de `50px` de côté
* Les informations de l'auteur sont séparés de sa photo par une marge de `16px`
* La taille de la police du titre est `32px`
* La hauteur de ligne du contenu est de `1.5`
* Les images du contenu sont séparées des éléments qui l'entourent par une marge de `24px`
* La taille de police des légendes d'images est `14px`

### Bloc « Articles similaires »

* La couleur de fond est `#f6f6f6`
* Le bloc a une marge interne en haut de `70px` et en bas de `90px`
* Le titre est séparé des éléments suivants par une marge de `48px`

### Carte « Article similaire »
* La hauteur de l'image d'illustration est de `160px`
* Le contenu a une marge interne de `8px` en haut et `16px` sur les côtés et en bas
* La taille de la police de l'auteur et de la date est de `12px`
* La taille de la police du titre est de `18px`

### Footer

* La footer a une marge interne en haut et en bas de `32px` La largeur de
* l'icône présente dans le footer est de `50px` (sa largeur s'adaptera
  automatiquement)

## 2ème étape

Une fois que vous avez pris connaissance de la maquette, et visualisé les
différents éléments qui la composent, vous pouvez commencer à écrire du code.

Deux « techniques » sont possibles ici :

* Écrire tout le code HTML d'un trait, puis ajouter le CSS afin de styliser la
* page petit à petit Écrire le HTML et le CSS pour chaque « partie » de la page
  au fur et à mesure : le header, puis la bannière, puis l'article, puis...

Quelle que soit la technique qui vous convient le mieux : allez à l'essentiel,
faites en sorte que ça fonctionne, même si votre code vous semble « sale » dans
un premier temps.

> Make it work, make it right, make it fast

## 3ème étape

Une fois la maquette intégrée (c'est à dire que l'affichage dans le navigateur
vous convient), vous pouvez repasser sur votre code afin d'améliorer les
parties qui ne vous semblent pas optimales. On apelle cette étape le «
refactoring ». C'est une étape essentielle pour obtenir quelque chose qui
fonctionne, et avec du code propre (c'est la partie « make it right » de la
citation précédente).
