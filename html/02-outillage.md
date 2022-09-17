# HTML - Outillage

HTML est un langage qui est régi par une spécification. Cette spécification
définit les balises qui existent, les attributs qui peuvent être utilisés sur
chacune d'elles, les balises qui peuvent être imbriquées ou non, etc. Pour
savoir si notre code est valide, on peut le passer dans [le validateur proposé
sur le site du W3C](https://validator.w3.org/) (c'est le consortium qui
s'occupe d'établir la spécification de HTML). 

Le validateur sort un avertissement et une erreur sur notre fichier `index.html`.

L'avertissement nous suggère d'ajouter un attribut `lang` sur notre balise
`html`. Notre page est en français, donc on peut spécifier l'attribut
`lang="fr"`. A savoir que l'attribut `lang` peut être utilisé sur n'importe
quel élément HTML (on parle d'attribut "Global"). Donc si au milieu d'une page
en français on a un paragraphe en anglais, on peut ajouter un attribut
`lang="en"` sur le paragraphe en question :

```html
<!DOCTYPE html>
<html lang="fr">
	<head>
		...
	</head>
	
	<body>
		<p>Bien le bonjour !</p>
		<p lang="en">Hello world!</p>
	</body>
</html>
```

La valeur donnée à l'attribut `lang` peut être plus complexe, pour spécifier
une langue plus complète. Voir
https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/lang pour plus
d'infos.

L'erreur concerne une vague histoire de "Doctype". Elle nous explique que le
validateur s'attend à voir la ligne `<!DOCTYPE html>` avant la balise `<html>`.
Pour faire court, cette ligne indique au navigateur la "version" de HTML
utilisée par le document. Il y a de nombreux doctypes quii existent, plus ou
moins alambiqués. Aujourd'hui ce doctype est celui qu'on utilise partout, il
indique simplement qu'on utilise la dernière version de HTML. Ajoutez la ligne
suivante avant la balise `<html>` :

```html
<!DOCTYPE html>
```

Si on soumet à nouveau notre fichier au validateur, celui-ci ne relève plus de
problème dans notre fichier.

HTML est un langage très permissif, et certaines erreurs sont soit ignorées par
les navigateurs, soit corrigées automatiquement. Par exemple, le code suivant
est OK :

```html
<p>Hello world
<p>Second paragraphe
```

Pour s'en convraincre, tentons d'afficher une page avec ce code dans le `body`.
Le navigateur affiche deux paragraphes tout à fait normalement, alors qu'on n'a
mit aucune balise fermante. Le navigateur sait que deux paragraphes ne peuvent
pas être imbriqués (c'est défini dans la spécification du langage), et a donc
déterminé qu'il pouvait ajouter automatiquement une balise fermante avant la
2ème balise ouvrante.

C'est bien aimable de sa part, mais si on commence à ommettre des balises,
notre code va vite devenir difficile à maintenir. Et on ne peut pas compter sur
le navigateur pour nous dire où sont nos erreurs. On va donc installer un peu
d'outillage dans notre éditeur. Vous pouvez installer l'extension "HTMLHint".
Celle-ci va analyser les fichiers HTML et y appliquer un certain nombre de
règles permettant d'éviter certaines erreurs courantes. Dans le cas présent,
elle va détecter que nos balises `<p>` ne sont pas fermées correctement.

Tant que nous sommes dans l'outillage, profitons-en pour parler d'indentation
et de "style" de code. Vous l'aurez remarqué, à chaque fois qu'on imbrique une
balise dans une autre, on revient à la ligne et on ajoute un espacement au
début de la nouvelle ligne. On appelle ça l'indentation. Il y a deux écoles
pour l'indentation : les espaces et les tabulations. Il y a débat, chaque
"camp" a ses arguments. Moi-même j'ai été dans le camp des espaces, pour
finalement préférer utiliser des tabulations. L'important n'est pas lequel on
utilise, mais d'utiliser toujours le même style dans tous les fichiers d'un
projet. Pour ça, chaque développeur peut configurer son éditeur. Dans VSCode,
on peut définir la "taille" d'une tabulation (en espaces), ainsi que si on veut
utiliser des tabulations ou des espaces. Le problème est que si deux personnes
travaillant sur un même fichier n'ont pas la même configuration, on peut se
retrouver avec des styles de code différents dans un même projet voir dans un
même fichier. Pour éviter ça, nous allons installer un outil permettant de
définir au niveau du projet les préférences de style : Editor config. On va
commencer par installer l'extension dans VSCode. Puis on va créer un fichier
`.editorconfig` dans le dossier du projet :

```
root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8

[*.html]
indent_style = tab
indent_size = 4
```

L'extension va détecter ce fichier et modifier automatiquement les paramètres
de VSCode pour coller aux paramètres définis dans le fichier. Lorsqu'on
travaille sur un projet avec un fichier `.editorconfig` on n'a donc pas à se
soucier du style d'indentation : l'extension s'occupe de définir la bonne pour
nous.

Pour aller un peu plus loin, on peut aussi activer le formattage à la
sauvegarde dans les paramètres de VSCode. Pour ça, ouvrez les paramètres de
l'éditeur avec le raccourci `ctrl + ,`, puis recherchez le paramètre "Format on
save" et activez-le.

Dernière chose : quand on est dev on est faignants et tout ce qu'on peut
automatiser on l'automatise. On est tellement faignants que recharger notre
page web à chaque fois qu'on la modifie nous ennuie. Du coup on fait en sorte
que la page se recharge à chaque fois qu'on sauvegarde le fichier html. Pour
ça, dans VSCode on peut utiliser l'extension "Live server". Une fois
l'extension installée, on peut fait un click droit sur un fichier HTML puis
sélectionner "Open with Live Server". La page va automatiqement s'ouvrir dans
un nouvel onglet de navigateur. Si on fait une modification et qu'on la
sauvegarde, la page va automatiquement se recharger dans le navigateur.

Voilà, nous avons vu la structure d'une page web et mis en place un peu
d'outillage nous permettant d'écrire du code HTML dans de bonnes conditions.

<hr />

* Précédent : [Introduction](01-introduction.md)
* Suivant : [Elements de texte](03-elements-de-texte.md)
