# TD CSS : Responsive design

Dans ce TD, nous allons nous servir des techniques vues en cours pour améliorer
l'affichage de la page réalisée lors du TD précédent sur les petits écran.

## Ajouter la meta viewport

Reprenons le code du TD précédent : soit le votre, soit [l'exemple
fournit](https://github.com/drazik/cours-html-css/tree/master/04-box-model-positionnement/TD/example).

Actuellement, notre page se voit appliquer un zoom arrière par le navigateur
afin qu'elle puisse être contenue dans la fenêtre du navigateur. Comme vu dans
le cours, il convient d'ajouter une balise `meta` au `head` de notre page pour
que ce comportement ne soit plus appliqué :

```html
<meta name="viewport" value="width=device-width, initial-scale=1.0" />
```

## Relever les anomalies

Afin d'optimiser notre page au mieux, il convient de relever l'ensemble des
anomalies visuelles qui arrivent lorsqu'on redimensionne la fenêtre de
notre navigateur. Commencez par une taille qui offre un bon affichage, puis
de la rapeticer au fur et à mesure jusqu'à voir apparaître un problème.

Relevez ainsi les anomalies que vous voyez, ainsi que la largeur de fenêtre à
laquelle elles apparaissent. Nous mettrons ensuite en commun nos trouvailles.

## Régler les anomalies

Pour chaque anomalie qui a été relevée, essayer de la résoudre. La solution ne
passe pas forcément par une media query. Essayez d'abord d'envisager une autre
solution. Faire ainsi permet d'éviter d'avoir un trop grand nombre de
breakpoints et de code spécifique à certaines tailles d'écran.
