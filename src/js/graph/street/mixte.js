import * as d3 from "d3";

const streetMixte = () => {
    var modelsMen = [
        {
            "age":"18-29 ans",
            "insult":17.1,
            "violence":0

        },
        {
            "age":"30-49 ans",
            "insult":15.3,
            "violence":1.9,

        },
        {
            "age":"50-75 ans",
            "insult":8.9,
            "violence":0,

        },
        {
            "age":"Ensemble",
            "insult":13,
            "violence":0.95,

        }
    ];
    modelsMen = modelsMen.map(i => {
        i.age = i.age;
        return i;
    });

    var container = d3.select('#streetMixteMen'),
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

    xScale0.domain(modelsMen.map(d => d.age));
    xScale1.domain(['insult', 'violence']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, 35]);

    var model_name = svg.selectAll(".model_name")
        .data(modelsMen)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => `translate(${xScale0(d.age)},0)`);

    /* Add field1 bars */
    model_name.selectAll(".bar.insult")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar insult")
        .style("fill","#FFAB33")
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
        .style("fill","#FFE091")
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


    var modelsWomen = [
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
    modelsWomen = modelsWomen.map(i => {
        i.age = i.age;
        return i;
    });

    var containerW = d3.select('#streetMixteWomen'),
        widthW = 500,
        heightW = 300,
        marginW = {top: 30, right: 20, bottom: 30, left: 50},
        barPaddingW = .2,
        axisTicksW = {qty: 5, outerSize: 0, dateFormat: '%m-%d'};

    var svgW = containerW
        .append("svg")
        .attr("width", widthW)
        .attr("height", heightW)
        .append("g")
        .attr("transform", `translate(${marginW.left},${marginW.top})`);

    var xScale0W = d3.scaleBand().range([0, widthW - marginW.left - marginW.right]).padding(barPaddingW);
    var xScale1W = d3.scaleBand();
    var yScaleW = d3.scaleLinear().range([heightW - marginW.top - marginW.bottom, 0]);

    var xAxisW = d3.axisBottom(xScale0W).tickSizeOuter(axisTicksW.outerSize);
    var yAxisW = d3.axisLeft(yScaleW).ticks(axisTicksW.qty).tickSizeOuter(axisTicksW.outerSize);

    xScale0W.domain(modelsWomen.map(d => d.age));
    xScale1W.domain(['insult', 'violence']).range([0, xScale0W.bandwidth()]);
    yScaleW.domain([0, 35]);

    var model_nameW = svgW.selectAll(".model_name")
        .data(modelsWomen)
        .enter().append("g")
        .attr("class", "model_name")
        .attr("transform", d => `translate(${xScale0W(d.age)},0)`);

    /* Add field1 bars */
    model_nameW.selectAll(".bar.insult")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar insult")
        .style("fill","#FF614C")
        .attr("x", d => xScale1W('insult'))
        .attr("y", d => yScaleW(d.insult))
        .attr("width", xScale1W.bandwidth())
        .attr("height", d => {
            return heightW - marginW.top - marginW.bottom - yScaleW(d.insult)
        });

    model_nameW.selectAll(".bar.violence")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar violence")
        .style("fill","#FFB4AB")
        .attr("x", d => xScale1W('violence'))
        .attr("y", d => yScaleW(d.violence))
        .attr("width", xScale1W.bandwidth())
        .attr("height", d => {
            return heightW - marginW.top - marginW.bottom - yScaleW(d.violence)
        });

    /* Add field2 bars */


// Add the X Axis
    svgW.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${heightW - marginW.top - marginW.bottom})`)
        .call(xAxisW);

// Add the Y Axis
    svgW.append("g")
        .attr("class", "y axis")
        .call(yAxisW);


}

export default streetMixte;