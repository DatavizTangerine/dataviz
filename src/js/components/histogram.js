import * as d3 from "d3";

const histogram = () => {
    const margin = {top: 20, right: 20, bottom: 90, left: 120},
        width = 800 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height, 0]);

    const svg = d3.select("#chart").append("svg")
        .attr("id", "svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


}

export default histogram;