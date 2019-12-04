import * as d3 from "d3";

const histogramWomen = () => {
    var models = [
        {
            "age":"18-29 ans",
            "insult":20.4,
            "violence":4.6,

        },
        {
            "age":"30-49 ans",
            "insult":15.8,
            "violence":1.7,

        },
        {
            "age":"50-75 ans",
            "insult":8.3,
            "violence":0,

        },
        {
            "age":"Ensemble",
            "insult":13.4,
            "violence":1.8,

        }
    ];
    models = models.map(i => {
        i.age = i.age;
        return i;
    });

    var container = d3.select('#streetWomen'),
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

    xScale0.domain(models.map(d => d.age));
    xScale1.domain(['insult', 'violence']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, d3.max(models, d => d.violence > d.insult ? d.violence : d.insult)]);

    var model_name = svg.selectAll(".model_name")
        .data(models)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => `translate(${xScale0(d.age)},0)`);

    /* Add field1 bars */
    model_name.selectAll(".bar.insult")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar insult")
        .style("fill","red")
        .attr("x", d => xScale1('insult'))
        .attr("y", d => yScale(d.insult))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.insult)
        });

    model_name.selectAll(".bar.violence")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar violence")
        .style("fill","blue")
        .attr("x", d => xScale1('violence'))
        .attr("y", d => yScale(d.violence))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.violence)
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

export default histogramWomen;