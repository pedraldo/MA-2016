# MA-2016

#Consignes pour intégrer le contenu dans une page HTML

Tout d'abord, bien vérifier qu'on se trouve sur la bonne page (et oui c'est important)
Ensuite, tout le contenu va se placer dans la balise <div> de classe "section-container"

Vous pouvez si vous le souhaiter créer différentes sections par pages qui seront séparées par un trait horizontal. Chaque section est représenté par la balise <section> de classe "section" (je peux pas faire plus explicite ^^). La <div> "wrapper" doit toujours être juste en dssous !!

Ensuite si vous voulez mettre un titre à votre section (ce qui est mieux), dans la div "wrapper" encapsuler votre titre comme ceci : <div class="title">Titre</div>
De même pour un sous-titre (en dessous de la div "title": <div class="subtitle">Little useful subtitle</div>

Tout ce qui concerne du texte en masse se passe dans la balise <di> de classe "text". Essayer de faire des paragraphes que vous encapsulerez dans des balises <p>.

Si le contenu comporte des listes voici un exemple :
<p>
	<ul>
		<li>premier element</li>
		<li>deuxieme element</li>
		<li>...</li>
	</ul>
</p>

Pour les images, une simple balise <img src="chemin_vers_image"/> fera l'affaire. Le chemin de l'image démarre au même endroit que la page html (php) concernée.

Voilà je crois n'avoir rien oublié.
Si ce n'est pas le cas dites le moi ou si vous avez des soucis, pareil parlez en moi ;)