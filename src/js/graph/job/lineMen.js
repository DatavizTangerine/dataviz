import * as d3 from "d3";

const lineMen = () => {


    var width = 500;
    var height = 300;
    var margin = 50;
    var duration = 250;

    var lineStroke = "5px";

    var circleRadius = 8;
    var circleRadiusHover = 10;

    const promise = [];

    promise.push(d3.json("data/male_emploi.json"));





    Promise.all(promise).then(function (value) {

        const data = value[0];
        /* Format Data */
        var parseDate = d3.timeParse("%Y");
        data.forEach(function(d) {
            d.values.forEach(function(d) {
                d.date = parseDate(d.date);
                d.percent = +d.percent;
            });
        });


        /* Scale */
        var xScale = d3.scaleTime()
            .domain(d3.extent(data[0].values, d => d.date))
            .range([0, width-margin]);

        var yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height-margin, 0]);

        var color = "#FFAB33";

        /* Add SVG */
        var svg = d3.select("#lineMen").append("svg")
            .attr("width", (width+margin)+"px")
            .attr("height", (height+margin)+"px")
            .append('g')
            .attr("transform", `translate(${margin}, ${margin})`);


        /* Add lineWomen into SVG */
        var line = d3.line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.percent));


        let lines = svg.append('g')
            .attr('class', 'lines')

        lines.selectAll('.lineWomen-group')
            .data(data).enter()
            .append('g')
            .attr('class', 'lineWomen-group')
            .on("mouseover", function(d, i) {
                svg.append("text")
                    .attr("class", "title-text")
                    .style("fill", color)
                    .text(d.name)
                    .attr("text-anchor", "middle")
                    .attr("x", (width-margin)/2)
                    .attr("y", 5);
            })
            .on("mouseout", function(d) {
                svg.select(".title-text").remove();
            })
            .append('path')
            .attr('class', 'line')
            .attr('d', d => line(d.values))
            .style('stroke', (d, i) => color)
            .on("mouseover", function(d) {
                d3.select(this)
                    .style("cursor", "pointer");
            })
            .on("mouseout", function(d) {

                d3.select(this)
                    .style("stroke-width", lineStroke)
                    .style("cursor", "none");
            });


        /* Add circles in the lineWomen */
        lines.selectAll("circle-group")
            .data(data).enter()
            .append("g")
            .style("fill", (d, i) => color)
            .selectAll("circle")
            .data(d => d.values).enter()
            .append("g")
            .attr("class", "circle")
            .on("mouseover", function(d) {
                d3.select(this)
                    .style("cursor", "pointer")
                    .append("text")
                    .attr("x", d => xScale(d.date) + 5)
                    .attr("y", d => yScale(d.percent) - 10);
            })
            .on("mouseout", function(d) {
                d3.select(this)
                    .style("cursor", "none")
                    .transition()
                    .duration(duration)
                    .selectAll(".text").remove();
            })
            .append("circle")
            .attr("cx", d => xScale(d.date))
            .attr("cy", d => yScale(d.percent))
            .attr("r", circleRadius)
            .on("mouseover", function(d) {
                d3.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadiusHover);
            })
            .on("mouseout", function(d) {
                d3.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadius);
            });


        /* Add Axis into SVG */
        var xAxis = d3.axisBottom(xScale).ticks(5);
        var yAxis = d3.axisLeft(yScale).ticks(4);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height-margin})`)
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append('text')
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .attr("fill", "#000")
            .text("Total values");
    });

}

export default lineMen;