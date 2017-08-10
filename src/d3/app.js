import * as d3 from './d3'

d3.select("body")
	.selectAll("#app")
	.data([4, 8, 15, 16, 23, 42])
	.enter().append("p")
	.text(function(d) { return "I’m number " + d + "!"; });
