
'use strict';
import d3 from 'd3';

let width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight),
    i = 0,
    svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height);

svg.insert("text")
    .attr("x", (width/2)-45 ) 
    .attr("y", (height/2)+10 )
    .style("font-size", 20)
    .style("stroke", d3.hsl("#ABFAF3"))
    .style("fill", d3.hsl("#66D9EF"))
    .text("l o a d i n g")
    .style("opacity", 1)

function particle() {

  svg.insert("circle", "rect")
      .attr("cx", width/2)
      .attr("cy", height/2)
      .attr("r", 80)
      .style("stroke", d3.hsl("#66D9EF"))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("r", 150)
      .style("stroke-opacity", 1e-6)
      .remove();

  svg.insert("text")
      .attr("x", (width/2)-45 ) 
      .attr("y", (height/2)+10 )
      .style("font-size", 20)
      .style("stroke", d3.hsl("#ABFAF3"))
      .style("fill", d3.hsl("#66D9EF"))
      .text("l o a d i n g")
      .style("opacity", 1)
    .transition()
      .duration(1000)
      .ease(Math.sqrt)
      .style("font-size", 25)
      .attr("x", (width/2)-57 ) 
      .attr("y", (height/2)+12 )
      .style("opacity", 1e-6)
      .remove();

}

setInterval(particle, 1000);