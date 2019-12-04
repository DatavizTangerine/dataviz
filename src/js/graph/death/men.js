import * as d3 from "d3";

const menDeath = () => {
    var models = [
        {
            "name":"Tumeurs",
            "men":34,
            "women":25,

        },
        {
            "name":"Accidents",
            "men":1,
            "women":0,

        },
        {
            "name":"Suicides",
            "men":3,
            "women":1,

        }
    ];
    models = models.map(i => {
        i.name = i.name;
        return i;
    });

    var container = d3.select('#deathMen'),
        width = 500,
        height = 300,
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        barPadding = .2,
        axisTicks = {qty: 5, outerSize: 0, dateFormat: '%m-%d'};

    var svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
    var xScale1 = d3.scaleBand();
    var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

    var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

    xScale0.domain(models.map(d => d.name));
    xScale1.domain(['men', 'women']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, 40]);

    var model_name = svg.selectAll(".model_name")
        .data(models)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => `translate(${xScale0(d.name)},0)`);

    /* Add field1 bars */
    model_name.selectAll(".bar.men")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar men")
        .style("fill","#FFAB33")
        .attr("x", d => xScale1('men'))
        .attr("y", d => yScale(d.men))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.men)
        });

    model_name.selectAll(".bar.women")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar women")
        .style("fill","#FF614C")
        .attr("x", d => xScale1('women'))
        .attr("y", d => yScale(d.women))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.women)
        });

    /* Add field2 bars */


// Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
        .call(xAxis);

// Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

}

export default menDeath;