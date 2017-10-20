<template>
    <div :id="comp_id"></div>
</template>

<script>
import d3 from 'd3/build/d3.min.js'
// Set the dimensions of the canvas / graph
let margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

// Set the ranges
let x = d3.time.scale().range([0, width]);
let y = d3.scale.linear().range([height, 0]);

// Define the axes
let xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

let yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);

// Define the line
let valueline = d3.svg.line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.speed); });

export default {
  props: ['comp_id', 'data_input'],
  mounted(){

    var svg = d3.select("#"+comp_id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    // Get the data
    d3.json(JSON.stringify(data_input), function(error, data) {
    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.time; }));
    y.domain([0, d3.max(data, function(d) { return d.speed; })]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    });
  }
}
</script>

<style>

</style>
