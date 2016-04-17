
var jss = require( 'jss' );

console.log( jss );
var SpriteSheet = function(){

	this.style = null;

};

SpriteSheet.prototype = {

	load: function( json ){


		if( typeof json === 'string' ){
			json = JSON.parse( json );
		}

		if( json.frames ){

			var styles = {};
			var frame;

			var className;
			var image = 'example/sprites/' + json.meta.image;
			var background = 'url(' + image + ');';

			var scale = 0.5;
			var sW = json.meta.size.w * scale;
			var sH = json.meta.size.h * scale;

			for( var key in json.frames ){

				frame = json.frames[key].frame;

				console.log( "FRAMES: ", frame );

				className = 'sprite-' + key.replace( '.', '' );

				styles[ className ] = {

					background: background,
					'background-position': -( frame.x * scale ) + 'px ' + -( frame.y * scale ) + 'px',
					'background-size': sW + 'px ' + sH + 'px',
					width: ( frame.w * scale ) + 'px',
					height: ( frame.h * scale ) + 'px',
					//width: '100px',
					//height: '100px',
					display: 'inline-block'
					//position:'absolute',
					//left: '0px',
					//top: '0px',
					//'background-color': '#fff'

				};

			}

			this.style = jss.createStyleSheet(styles);
			this.style.attach();

			console.log( json );
			console.log( styles );
			console.log( this.style );


		}
	}

};

module.exports = SpriteSheet;