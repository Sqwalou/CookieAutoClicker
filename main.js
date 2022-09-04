(function() {
	'use strict';
	
	setInterval(function() { Game.ClickCookie(); }, 4);

	setInterval(function() {
		Game.shimmers.forEach(function(shimmer)
		{
			shimmer.wrath = 0; //remove wrath cookies
			if(shimmer.type == "golden" || shimmer.type == "reindeer")
			{
				shimmer.pop()
			}
		})
	}, 500);

	setInterval(function() {
		var wrinkCount = 0,
			wrinkEaten = 0,
			wrinkIndex = 10; // value for 10 shinies test

		for (var i in Game.wrinklers) {
			// count number of eating wrinks
			if (Game.wrinklers[i].sucked > 0) {
				wrinkCount += 1;
			}
			// find top wrink index, ignoring shiny wrinklers
			if (Game.wrinklers[i].sucked > wrinkEaten && Game.wrinklers[i].type == 0) {
				wrinkEaten = Game.wrinklers[i].sucked;
				wrinkIndex = i;
			}
		}
		// pop top wrinkler if 10 eating, unless all 12 are shiny
		if (wrinkCount >= 10 && wrinkIndex != wrinkCount) {
			Game.wrinklers[wrinkIndex].hp = 0;
		}
	}, 500);
	
	setInterval(function() {
		if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
			Game.tickerL.click();
		}
	}, 3000);

})();
