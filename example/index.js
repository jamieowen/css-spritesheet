var SpriteSheet = require( '../SpriteSheet' );

var Loader = require( 'resource-loader' );

window.onload = function(){

	var loader = new Loader();
	loader.add( 'example/sprites/spritesheet@2.json' );
	loader.load( function( res ){

		console.log( 'LOAD', res );

		var json = loader.resources[ 'example/sprites/spritesheet@2.json'].data;

		var spritesheet = new SpriteSheet();
		spritesheet.load( json );

		console.log( json );

	})

};