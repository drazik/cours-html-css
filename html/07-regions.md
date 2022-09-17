# HTML - Elements de régions

Pour organiser notre page et délimiter les différentes parties de la page
sémantiquement, il existe des éléments dis de "région".

Il existe 3 parties principales sur la plupart des pages web : l'entête (du
contenu, pas du HTML), le contenu principal et le pied de page. D'autres
régions peuvent être définies, comme une zone de navigation ou un bloc de
contenu "secondaire" / aparté.

## `<header>` pour l'en-tête

`<header>` permet de délimiter du contenu introductif. Par exemple, on peut
l'utiliser autour d'un titre et d'un texte d'introduction

```html
<header>
	<h1>Le système solaire</h1>
	<p>
		Article a propos de notre système solaire : qu'est-ce que le soleil ? Quelles sont les planètes du système solaire ?
	</p>
</header>
```

Il peut y avoir plusieurs `<header>` dans une même page. Par exemple un
`<header>` global pour la page, puis un `<header>` pour une section
particulière (cf `<section>` juste après).

[Documentation de l'élément `header`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/header)

## `<main>` pour le contenu principal

`<main>` permet de délimiter le contenu principal de la page. Il peut y avoir
plusieurs `<main>` sur une même page, mais il ne peut y avoir qu'un seul
`<main>` visible (c'est à dire sans attribut `hidden`) à la fois.

```html
<header>
	<!-- Entête de la page -->
</header>

<main>
	<!-- Contenu principal de la page -->
</main>
```

[Documentation de l'élément `main`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main)

## `<footer>` pour le pied de page

`<footer>` est "l'inverse" de `<header>` : il permet de définir un "pied de
page". Soit de la page si il est en dehors d'une section, soit de la section
courante.

```html
<header>
	<!-- Entête de la page -->
</header>

<main>
	<!-- Contenu principal de la page -->
</main>

<footer>
	<p>IUT de Paris - Rives de Seine</p>
	<nav>
		<ul>
			<li>
				<a href="contact.html">Contact</a>
			</li>
			<li>
				<a href="mentions-legales.html">Mentions légales</a>
			</li>
		</ul>
	</nav>
</footer>
```

[Documentation de l'élément `footer`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer)

## `<nav>` pour un bloc de navigation

La balise `<nav></nav>` permet de délimiter un bloc de navigation, un groupe de
liens. On peut l'utiliser, par exemple, pour faire un menu principal contenant
une liste de liens :

```html
<nav>
	<ul>
		<li>
			<a href="/index.html">Accueil</a>
		</li>
		<li>
			<a href="/about.html">A propos</a>
		</li>
		<li>
			<a href="mailto:contact@me.com">Me contacter</a>
		</li>
	</ul>
</nav>
```

Il peut y avoir plusieurs blocs de navigation sur une même page. Par exemple un
menu principal pour naviguer entre les pages du site, un menu secondaire pour
naviguer entre les différentes section de la page, et un menu dans le pied de
page.

[Documentation de l'élément `nav`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav)

## `<aside>` pour du contenu complémentaire / aparté

`<aside>` permet de délilmiter du contenu qui est complémentaire au contenu
principal, mais n'est pas nécessaire pour sa compréhension. Par exemple :

```html
<main>
  <p>
    Le film Disney <cite>La petite Sirène</cite> est
    sorti en salles en 1989.
  </p>
  <aside>
    <p>
      Le film a gagné 87 millions de dollars pendant sa sortie initiale.
    </p>
  </aside>
  <p>
    Plus d'informations sur le film…
  </p>
</main>
```

[Documentation de l'élément `aside`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside)

## `<section>` pour définir une section générique de contenu

Comme son nom l'indique, cette balise représente une section de la page.
Contrairement aux autres éléments de région, la section n'a pas de sémantique
particulière autre que d'être une section de la page. Si une section n'a pas de
titre visible, il faut au moins lui en donner un avec l'attribut `aria-label`,
de manière à ce que la section puisse être identifiable pour un utilisateur de
SR.

```html
<!-- Section avec un titre visible -->
<section>
	<h2>Ingrédients</h2>

	<ul><!-- ... --></ul>
</section>

<!-- Section avec un titre uniquement pour les screen readers -->
<section aria-label="Ingrédients">
	<ul><!-- ... --></ul>
</section>
```

[Documentation de l'élément `section`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section)
