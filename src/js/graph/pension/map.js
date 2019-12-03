import * as d3 from "d3";

const map = () => {
    const width = 550, height = 550;
    let id = -1;

    const path = d3.geoPath();
    const projection = d3.geoConicConformal()
        .center([2.454071, 46.279229])
        .scale(2600)
        .translate([width / 2, height / 2]);

    path.projection(projection);

    const svg = d3.select('#map').append("svg")
        .attr("id", "svg")
        .attr("width", width)
        .attr("height", height);

    const deps = svg.append("g");

    d3.json('dist/data/map.json').then(function(geojson) {
        deps.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("id", id + 1)
    .on("click", function(d) {
      d3.select(this).style("fill", "red");
        });
        id++
    });
}

export default map;