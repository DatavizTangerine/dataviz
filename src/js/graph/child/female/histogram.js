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

   const promise = [];

   promise.push(d3.json("dist/data/female_contraception.json"));

   Promise.all(promise).then(function (value) {
       const response = value[0];

    const d = response.adolescence.datas;

    x.domain(d.map(function (d) { return d.name;}));
    y.domain([0, 100]);

       svg.append("g")
           .attr("transform", "translate(0," + height + ")")
           .call(d3.axisBottom(x).tickSize(0))
           .selectAll("text")
           .style("text-anchor", "end")
           .attr("dx", "-.8em")
           .attr("dy", ".15em")
           .attr("transform", "rotate(-65)");

       // Ajout de l'axe Y au SVG avec 6 éléments de légende en utilisant la fonction ticks (sinon D3JS en place autant qu'il peut).
       svg.append("g")
           .call(d3.axisLeft(y).ticks(6));

       // Ajout des bars en utilisant les données de notre fichier data.tsv
       // La largeur de la barre est déterminée par la fonction x
       // La hauteur par la fonction y en tenant compte de la population
       // La gestion des events de la souris pour le popup
       svg.selectAll(".bar")
           .data(d)
           .enter().append("rect")
           .attr("class", "bar")
           .attr("x", function(d) { return x(d.name); })
           .attr("width", x.bandwidth())
           .attr("y", function(d) { return y(d.value); })
           .attr("height", function(d) { return height - y(d.value); })
           .on("mouseover", function(d) {
               div.transition()
                   .duration(200)
                   .style("opacity", .9);
               div.html("Population : " + d.value)
                   .style("left", (d3.event.pageX + 10) + "px")
                   .style("top", (d3.event.pageY - 50) + "px");
           })
           .on("mouseout", function(d) {
               div.transition()
                   .duration(500)
                   .style("opacity", 0);
           });

   })

}

export default histogram;