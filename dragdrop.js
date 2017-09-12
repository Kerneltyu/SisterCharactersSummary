function onDragStart(event) {
	if(event.target.tagName.toLowerCase() == "img"){
		event.dataTransfer.setData("listItemId", event.target.id);
	}else{
		event.preventDefault();
	}
}

function onDrop(event){
	var id = event.dataTransfer.getData("listItemId");
	var li = document.getElementById(id);
	event.currentTarget.appendChild(li);
	event.preventDefault();
	/*
	if(li & li.parentNode != event.currentTarget){
		li.parentNode.removeChild(li);
		event.currentTarget.appendChild(li);
	}
	event.stopPropagation();
	*/
}

function onDragOver(event){
	event.preventDefault();
}

function onDragEnter(event){
	var types = event.dataTransfer.types;
	for(var i = 0; i<types.length; i++){
		if(types[i] == "listItemId"){
			event.preventDefault();
			return;
		}
	}
}