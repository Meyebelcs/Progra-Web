var Hashtag = (function() {

	if (!Array.prototype.forEach) {
	  Array.prototype.forEach = function(fun)
	  {
	    var len = this.length;
	    if (typeof fun != "function")
	      throw new TypeError();
	
	    var thisp = arguments[1];
	    for (var i = 0; i < len; i++)
	    {
	      if (i in this)
	        fun.call(thisp, this[i], i, this);
	    }
	  };
	} 
	
	var template = '<span class="tag">{#}</span>';
	var templates = {};
	
	function repl(elem, t) {
		var elems = document.querySelectorAll(elem);
		[].forEach.call(elems, function(elem) {
			var html = elem.innerHTML;
			var matched = html.match(/(\S*#\[[^\]]+\])|(\S*#\S+)/gi); //Guarda en un arreglo todas las coincidencias, osea si es q se repite algun hashtag
			[].forEach.call(matched, function(m) { //se recorre el arreglo
				var templ;
				if(t) templ = templates[t];
				else templ = template;
				templ = templ.replace('{#}', m);
				templ = templ.replace('{#n}', m.slice(1)); //lo q hace es traer todo el texto sin el simbolo #
                var regex = new RegExp(m, 'g'); //si el hashtag se repite permite q se aplique tmn el modo link al q se repite
				html = html.replace(regex, templ);
			});
			elem.innerHTML = html; //aaqui ya se traduce al html
		});	
	}
	
	function setopts(opts) {
		if(opts.template) template = opts.template;
		if(opts.templates) templates = opts.templates;
	}
	
	return {
		replaceTags: repl,
		setOptions: setopts
	}
	
}());