var SpriteSheet = require( '../SpriteSheet' );

var Loader = require( 'resource-loader' );

window.onload = function(){

	document.body.style.backgroundColor = '#000';

	var loader = new Loader();
	loader.add( 'example/sprites/spritesheet@2.json' );
	loader.load( function( res ){

		console.log( 'LOAD', res );

		var json = loader.resources[ 'example/sprites/spritesheet@2.json'].data;

		var spritesheet = new SpriteSheet();
		spritesheet.load( json );


		var classes = Object.keys( spritesheet.style.classes );

		classes.forEach( function( className ){

			className = spritesheet.style.classes[ className ];
			var ele = document.createElement( 'div' );
			//ele.style.position = 'absolute';
			//ele.style.display = 'block';
			ele.classList.add( className );
			document.body.appendChild( ele );

		} );

		console.log( classes );

		console.log( json );

		console.log( spritesheet );

	})

};