
var jss = require( 'jss' );

var SpriteSheet = function(){


};

SpriteSheet.prototype = {

	load: function( json ){


		if( typeof json === 'string' ){
			json = JSON.parse( json );
		}

		if( json.frames ){

			var style = {};

			for( var key in json.frames ){

				style[ key ] = {

				}

			}
		}

	}

};

module.exports = SpriteSheet;