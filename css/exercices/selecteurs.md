# Exercice CSS - Selecteurs

Le site [CSS Diner](https://flukeout.github.io/) est un "jeu" décliné sur 32 niveaux qui permet de s'éxercer à sélectionner des éléments avec des sélecteurs CSS.

Ici, les éléments représentent une table sur laquelle sont placés des assiettes, des bento, des pommes, des oranges, etc. Chaque type d'objet est représenté par une balise HTML. Et chaque niveau demande de cibler des éléments bien précis en utilisant un sélecteur CSS. Sur la droite de l'écran, le type de sélecteur à utiliser est indiqué et le comportement du sélecteur est expliqué.

Essayez de trouver la solution à chaque niveau vous-même. Si vous êtes bloqué(e), vous pouvez consulter la solution de chaque niveau ci-dessous :

<details>
  <summary>Niveau 1</summary>
  
  ```css
  plate
  ```
  
</details>

<details>
  <summary>Niveau 2</summary>
  
  ```css
  bento
  ```
  
</details>

<details>
  <summary>Niveau 3</summary>
  
  ```css
  #fancy
  ```
  
</details>

<details>
  <summary>Niveau 4</summary>
  
  ```css
  plate apple
  ```
  
</details>

<details>
  <summary>Niveau 5</summary>
  
  ```css
  #fancy pickle
  ```
  
</details>

<details>
  <summary>Niveau 6</summary>
  
  ```css
  .small
  ```
  
</details>

<details>
  <summary>Niveau 7</summary>
  
  ```css
  orange.small
  ```
  
</details>

<details>
  <summary>Niveau 8</summary>
  
  ```css
  bento orange.small
  ```
  
</details>

<details>
  <summary>Niveau 9</summary>
  
  ```css
  plate, bento
  ```
  
</details>

<details>
  <summary>Niveau 10</summary>
  
  ```css
  *
  ```
  
</details>

<details>
  <summary>Niveau 11</summary>
  
  ```css
  plate *
  ```
  
</details>

<details>
  <summary>Niveau 12</summary>
  
  ```css
  plate + apple
  ```
  
</details>

<details>
  <summary>Niveau 13</summary>
  
  ```css
  bento ~ pickle
  ```
  
</details>

<details>
  <summary>Niveau 14</summary>
  
  ```css
  plate > apple
  ```
  
</details>

<details>
  <summary>Niveau 15</summary>
  
  ```css
  plate :first-child
  ```
  
</details>

<details>
  <summary>Niveau 16</summary>
  
  ```css
  plate :only-child
  ```
  
</details>

<details>
  <summary>Niveau 17</summary>
  
  ```css
  .small:last-child
  ```
  
</details>

<details>
  <summary>Niveau 18</summary>
  
  ```css
  :nth-child(3)
  ```
  
</details>

<details>
  <summary>Niveau 19</summary>
  
  ```css
  bento:nth-last-child(3)
  ```
  
</details>

<details>
  <summary>Niveau 20</summary>
  
  ```css
  apple:first-of-type
  ```
  
</details>

<details>
  <summary>Niveau 21</summary>
  
  ```css
  :nth-of-type(even)
  ```

	```css
	:nth-of-type(2n)
	```
  
</details>

<details>
  <summary>Niveau 22</summary>
  
  ```css
  :nth-of-type(2n + 3)
  ```
  
</details>

<details>
  <summary>Niveau 23</summary>
  
  ```css
  apple:only-of-type
  ```
  
</details>

<details>
  <summary>Niveau 24</summary>
  
  ```css
  .small:last-of-type
  ```
  
</details>

<details>
  <summary>Niveau 25</summary>
  
  ```css
  bento:empty
  ```
  
</details>

<details>
  <summary>Niveau 26</summary>
  
  ```css
  apple:not(.small)
  ```
  
</details>

<details>
  <summary>Niveau 27</summary>
  
  ```css
  [for]
  ```
  
</details>

<details>
  <summary>Niveau 28</summary>
  
  ```css
  plate[for]
  ```
  
</details>

<details>
  <summary>Niveau 29</summary>
  
  ```css
  [for="Vitaly"]
  ```
  
</details>

<details>
  <summary>Niveau 30</summary>
  
  ```css
  [for^="Sa"]
  ```
  
</details>

<details>
  <summary>Niveau 31</summary>
  
  ```css
  [for$="ato"]
  ```
  
</details>

<details>
  <summary>Niveau 32</summary>
  
  ```css
  [for*="obb"]
  ```
  
</details>
