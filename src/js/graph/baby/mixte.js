import * as d3 from "d3";

const mixteBaby = () => {
    const margin = {top: 20, right: 20, bottom: 90, left: 120},
        width = 740 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    const overlap = -10;
    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height, 0]);

    const svg = d3.select("#babyMixte").append("svg")
        .attr("id", "svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    const promise = [];

    promise.push(d3.json("data/mixte_baby.json"));

    Promise.all(promise).then(function (value) {
        const response = value[0];

        const d = response.baby.datas;

        x.domain(d.map(function (d) { return d.name;}));
        y.domain([0, d3.max(d, function(d) { return d.value; })]);


        svg.selectAll(".bar")
            .data(d)
            .enter().append("rect")
            .style("fill", function(d) { return d.color; })
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); });

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(0))
            .selectAll("text")
            .attr("dy", "21px");

        svg.append("g")
            .call(d3.axisLeft(y).ticks(4))
            .selectAll("line")
            .attr("stroke", "#7A7A7A")
            .attr("x2", width);

    })

}

export default mixteBaby;