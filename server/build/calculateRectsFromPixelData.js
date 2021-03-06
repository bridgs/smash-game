define(function() {
	return function calculatRectsFromPixelData(data, width, height) {
		var rects = [];

		//find the "first" data point that is true
		for(var y = 0; y < height; y++) {
			for(var x = 0; x < width; x++) {
				if(data[x][y]) {
					var x2, y2;
					//figure out how wide of a rect could possibly fit into that space
					var maxX;
					for(maxX = x + 1; maxX < width; maxX++) {
						if(data[maxX][y] !== data[x][y]) {
							break;
						}
					}

					//figure out how tall of a rect could possibly fit into that space
					var hasFoundRectDimensions = false;
					var maxY;
					for(maxY = y + 1; maxY < height; maxY++) {
						for(x2 = x; x2 < maxX; x2++) {
							if(data[x2][maxY] !== data[x][y]) {
								hasFoundRectDimensions = true;
								break;
							}
						}
						if(hasFoundRectDimensions) {
							break;
						}
					}

					//we now know the dimensions of the rect (note maxX and maxY are exclusive)
					rects.push({ x: x, y: y, width: maxX - x, height: maxY - y, value: data[x][y] });

					//clear out the values so we don't have overlappting rects
					for(x2 = x; x2 < maxX; x2++) {
						for(y2 = y; y2 < maxY; y2++) {
							data[x2][y2] = false;
						}
					}
				}
			}
		}

		//sort the rectangles by their value
		rects = rects.sort(function(a, b) { return b.value - a.value; });

		return rects;
	};
});