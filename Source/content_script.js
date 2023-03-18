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
	const titles = ["Florida Man", "Meth Wrangler", "Less Exciting Trump"];
	const descriptions = ["less interesting Patrick Batman", "man with the cutest wittle boots east of the Mississippi", "try-hard", "notorious Trump fellator"]
	let whichRon = Math.floor(Math.random() * names.length);
	let whichTitle = Math.floor(Math.random() * names.length);

	v = v.replace(/\bRon DeSantis\b/g, whichRon);
	v = v.replace(/\bRon Desantis\b/g, whichRon);
	v = v.replace(/\bGovernor Ron DeSantis\b/g, whichTitle);
	v = v.replace(/\bFlorida governor\b/g, whichTitle);
	v = v.replace(/\bRepublican\b/g, "Fascist");
	textNode.nodeValue = v;
}




