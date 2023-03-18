walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	const names = ["Meatball Ron", "Tiny D", "Puddin' Fingers", "Ron DaDouche", "Ronda Santis, Drag Queen Extraordinaire", "Pretty Boots Ron"];
	const titles = ["Florida Man", "Meth Wrangler", "Less Exciting Trump", "Psychopathic Swampman", "Florida Governor and sad little manchild"];
	const descriptions = ["who thinks Gilead is a utopia", "who loves the poorly educated", "a boring Patrick Bateman", "man with the cutest wittle boots east of the Mississippi", "notorious Trump fellator", "Trump's FUPA rest"]
	const terms = ["Fascist", "Hilter-Loving", "Neo-Nazi", "Putin-Fellator", "Pro-Slavery"];
	let whichRon = Math.floor(Math.random() * names.length);
	let whichTitle = Math.floor(Math.random() * titles.length);
	let whichDesc = Math.floor(Math.random() * descriptions.length);
	let whichTerm = Math.floor(Math.random() * terms.length);
	
	v = v.replace(/\bRon DeSantis’\b/g, names[whichRon] + "'s, " +descriptions[whichDesc] + ",");
	v = v.replace(/\bDeSantis’\b/g, names[whichRon] + "'s, " +descriptions[whichDesc] + ",");
	v = v.replace(/\bRon DeSantis'\b/g, names[whichRon] + "'s, " +descriptions[whichDesc] + ",");
	v = v.replace(/\bDeSantis'\b/g, names[whichRon] + "'s, " +descriptions[whichDesc] + ",");
	v = v.replace(/\bRon DeSantis\b/g, names[whichRon] + ", " +descriptions[whichDesc] + ",");
	v = v.replace(/\bRon Desantis\b/g, names[whichRon] + ", " +descriptions[whichDesc] + ",");
	v = v.replace(/\bDeSantis\b/g, names[whichRon]);
	v = v.replace(/\bGovernor Ron DeSantis\b/g, titles[whichTitle]);
	v = v.replace(/\bFlorida governor\b/g, titles[whichTitle]);
	v = v.replace(/\bFlorida Gov\b/g, titles[whichTitle]);
	v = v.replace(/\bRepublican\b/g, terms[whichTerm]);
	textNode.nodeValue = v;
}




