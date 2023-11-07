let keyframes = [
    {
        activeVerse: 1,
        activeLines: [1, 2, 3, 4],
        svgUpdate: drawUSMap
    },
    {
        activeVerse: 2,
        activeLines: [1, 2, 3, 4],
        svgUpdate: drawGeorgiaMap
    },
    {
        activeVerse: 3,
        activeLines: [1],
        svgUpdate: () => drawBarGraph(0) 
    },
    {
        activeVerse: 3,
        activeLines: [2],
        svgUpdate: () => drawBarGraph(1) 
    },
    {
        activeVerse: 3,
        activeLines: [3],
        svgUpdate: () => drawBarGraph(2) 
    },
    {
        activeVerse: 3,
        activeLines: [4],
        svgUpdate: () => drawBarGraph(3)
    },
    {

        activeVerse: 4,
        activeLines: [1,2,3,4],
    },
]

const width = 500;
const height = 400;
const margin = { top: 20, right: 30, bottom: 40, left: 40 }

const countiesToHighlight = [
    "Appling", "Atkinson", "Bacon", "Baker", "Baldwin", "Ben Hill", "Berrien", "Bibb", "Bleckley",
    "Brantley", "Brooks", "Bulloch", "Burke", "Butts", "Calhoun", "Candler", "Charlton", "Chattahoochee",
    "Clarke", "Clay", "Clinch", "Coffee", "Colquitt", "Cook", "Crisp", "Decatur", "Dodge", "Dooly",
    "Dougherty", "Early", "Elbert", "Emanuel", "Evans", "Franklin", "Grady", "Hancock", "Irwin",
    "Jefferson", "Jenkins", "Johnson", "Lanier", "Laurens", "Lincoln", "Lowndes", "McDuffie", "McIntosh",
    "Macon", "Meriwether", "Miller", "Mitchell", "Montgomery", "Muscogee", "Peach", "Pulaski", "Quitman",
    "Randolph", "Richmond", "Schley", "Screven", "Seminole", "Spalding", "Stewart", "Sumter", "Talbot",
    "Taliaferro", "Tattnall", "Taylor", "Telfair", "Terrell", "Thomas", "Tift", "Toombs", "Treutlen",
    "Troup", "Turner", "Twiggs", "Upson", "Ware", "Warren", "Washington", "Webster", "Wheeler", "Wilcox",
    "Wilkes", "Wilkinson", "Worth"
  ];
  

const budgetShortfallData = {
    "Appling": "$1,414,000.00", "Atkinson": "$626,000.00", "Bacon": "$894,000.00", "Baker": "$284,000.00",
    "Baldwin": "$3,598,000.00", "Banks": "$1,117,000.00", "Barrow": "$4,244,000.00", "Bartow": "$6,083,000.00",
    "Ben Hill": "$1,688,000.00", "Berrien": "$1,694,000.00", "Bibb": "$13,514,000.00", "Bleckley": "$1,050,000.00",
    "Brantley": "$1,658,000.00", "Brooks": "$1,376,000.00", "Bryan": "$2,424,000.00", "Bulloch": "$6,276,000.00",
    "Burke": "$1,789,000.00", "Butts": "$2,226,000.00", "Calhoun": "$618,000.00", "Camden": "$3,548,000.00",
    "Candler": "$1,031,000.00", "Carroll": "$7,895,000.00", "Catoosa": "$3,520,000.00", "Charlton": "$1,237,000.00",
    "Chatham": "$21,511,000.00", "Chattahoochee": "$883,000.00", "Chattooga": "$1,871,000.00", "Cherokee": "$10,341,000.00",
    "Clarke": "$10,769,000.00", "Clay": "$377,000.00", "Clayton": "$19,309,000.00", "Clinch": "$703,000.00",
    "Cobb": "$38,998,000.00", "Coffee": "$3,331,000.00", "Colquitt": "$3,596,000.00", "Columbia": "$6,881,000.00",
    "Cook": "$1,465,000.00", "Coweta": "$7,285,000.00", "Crawford": "$914,000.00", "Crisp": "$2,270,000.00",
    "Dade": "$1,110,000.00", "Dawson": "$1,330,000.00", "Decatur": "$2,390,000.00", "DeKalb": "$53,247,000.00",
    "Dodge": "$1,812,000.00", "Dooly": "$1,262,000.00", "Dougherty": "$9,119,000.00", "Douglas": "$8,371,000.00",
    "Early": "$992,000.00", "Echols": "$304,000.00", "Effingham": "$2,877,000.00", "Elbert": "$1,534,000.00",
    "Emanuel": "$1,897,000.00", "Evans": "$932,000.00", "Fannin": "$1,829,000.00", "Fayette": "$4,662,000.00",
    "Floyd": "$6,817,000.00", "Forsyth": "$7,814,000.00", "Franklin": "$2,017,000.00", "Fulton": "$80,042,000.00",
    "Gilmer": "$2,016,000.00", "Glascock": "$193,000.00", "Glynn": "$6,906,000.00", "Gordon": "$3,917,000.00",
    "Grady": "$2,007,000.00", "Greene": "$1,384,000.00", "Gwinnett": "$41,211,000.00", "Habersham": "$2,569,000.00",
    "Hall": "$10,163,000.00", "Hancock": "$761,000.00", "Haralson": "$2,013,000.00", "Harris": "$1,783,000.00",
    "Hart": "$1,715,000.00", "Heard": "$842,000.00", "Henry": "$11,436,000.00", "Houston": "$9,897,000.00",
    "Irwin": "$865,000.00", "Jackson": "$3,879,000.00", "Jasper": "$961,000.00", "Jeff Davis": "$1,059,000.00",
    "Jefferson": "$1,350,000.00", "Jenkins": "$778,000.00", "Johnson": "$769,000.00", "Jones": "$1,666,000.00",
    "Lamar": "$1,310,000.00", "Lanier": "$883,000.00", "Laurens": "$4,181,000.00", "Lee": "$1,795,000.00",
    "Liberty": "$4,524,000.00", "Lincoln": "$616,000.00", "Long": "$1,333,000.00", "Lowndes": "$9,520,000.00",
    "Lumpkin": "$2,068,000.00", "McDuffie": "$1,740,000.00", "McIntosh": "$1,161,000.00", "Macon": "$1,297,000.00",
    "Madison": "$2,084,000.00", "Marion": "$661,000.00", "Meriwether": "$1,932,000.00", "Miller": "$446,000.00",
    "Mitchell": "$1,875,000.00", "Monroe": "$1,613,000.00", "Montgomery": "$696,000.00", "Morgan": "$1,021,000.00",
    "Murray": "$2,498,000.00", "Muscogee": "$18,300,000.00", "Newton": "$7,514,000.00", "Oconee": "$1,546,000.00",
    "Oglethorpe": "$1,020,000.00", "Paulding": "$7,217,000.00", "Peach": "$2,644,000.00", "Pickens": "$1,790,000.00",
    "Pierce": "$1,334,000.00", "Pike": "$920,000.00", "Polk": "$2,717,000.00", "Pulaski": "$1,026,000.00",
    "Putnam": "$1,321,000.00", "Quitman": "$214,000.00", "Rabun": "$1,163,000.00", "Randolph": "$833,000.00",
    "Richmond": "$17,734,000.00", "Rockdale": "$5,433,000.00", "Schley": "$421,000.00", "Screven": "$1,178,000.00",
    "Seminole": "$773,000.00", "Spalding": "$4,979,000.00", "Stephens": "$1,767,000.00", "Stewart": "$656,000.00",
    "Sumter": "$2,871,000.00", "Talbot": "$533,000.00", "Taliaferro": "$183,000.00", "Tattnall": "$2,035,000.00",
    "Taylor": "$773,000.00", "Telfair": "$1,406,000.00", "Terrell": "$929,000.00", "Thomas": "$4,043,000.00",
    "Tift": "$3,364,000.00", "Toombs": "$2,302,000.00", "Towns": "$793,000.00", "Treutlen": "$580,000.00",
    "Troup": "$5,200,000.00", "Turner": "$805,000.00", "Twiggs": "$772,000.00", "Union": "$1,456,000.00",
    "Upson": "$1,977,000.00", "Walker": "$5,126,000.00", "Walton": "$5,305,000.00", "Ware": "$2,789,000.00",
    "Warren": "$450,000.00", "Washington": "$1,809,000.00", "Wayne": "$2,151,000.00", "Websterm": "$229,000.00",
    "Wheeler": "$734,000.00", "White": "$1,725,000.00", "Whitfield": "%5,935,000", "Wilcox": "$691,000.00",
    "Wilkes": "$943,000.00", "Wilkinson": "$736,000.00", "Worth": "$1,519,000.00"
  };



const bardata = [
    { county: "Cobb", value: 19260 },
    { county: "Dekalb", value: 29010 },
    { county: "Fulton", value: 34300 },
    { county: "Gwinett", value: 26980 }
];

let svg = d3.select("#svg");
let keyframeIndex = 0; 
let USMapData;
let stateMapData;
let countiesMapData;

document.getElementById("forward-button").addEventListener("click", forwardClicked);
document.getElementById("backward-button").addEventListener("click", backwardClicked);


async function loadData() {
    try {
        USMapData = await d3.json("https://d3js.org/us-10m.v1.json");
        stateMapData = await d3.json("states-10m.json");
        countiesMapData = await d3.json("counties-10m.json");
    } catch (error) {
        console.error('Error loading the map data:', error);
    }
}
function drawBarGraph(activeLineIndex) {
    const adjustedLeftMargin = margin.left + 20; 

    svg.attr("viewBox", "0 0 975 610");

    svg.selectAll("*").remove();

    const xScale = d3.scaleBand()
        .domain(bardata.map(d => d.county))
        .range([adjustedLeftMargin, 975 - margin.right])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bardata, d => d.value)])
        .range([610 - margin.bottom, margin.top]);

    const xAxis = svg.append("g")
        .attr("transform", `translate(0, ${610 - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .attr("font-size", '10px');

    xAxis.selectAll("path.domain, g.tick line, g.tick text")
        .attr("stroke", "black")
        .attr("color", "black"); 

    const yAxis = svg.append("g")
        .attr("transform", `translate(${adjustedLeftMargin}, 0)`)
        .call(d3.axisLeft(yScale))
        .attr("font-size", '10px');

    yAxis.selectAll("path.domain, g.tick line, g.tick text")
        .attr("stroke", "black")
        .attr("color", "black"); 

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("x", adjustedLeftMargin + (975 - margin.right - adjustedLeftMargin) / 2)
        .attr("y", 610 - margin.bottom / 4)
        .text("Counties")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .attr("fill", "black");

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .attr("y", adjustedLeftMargin / 2 - 15) 
        .attr("x", -610 / 2)
        .text("Number of Food Insecure Children")
        .attr("font-weight", "bold")
        .attr("font-size", "12px")
        .attr("fill", "black");

   
    svg.selectAll(".bar")
        .data(bardata.slice(0, activeLineIndex + 1)) 
        .join(
            enter => enter.append("rect")
                          .attr("class", "bar")
                          .attr("x", d => xScale(d.county))
                          .attr("y", yScale(0)) 
                          .attr("width", xScale.bandwidth())
                          .attr("fill", "orange")
                          .transition() 
                          .duration(800) 
                          .attr("y", d => yScale(d.value)) 
                          .attr("height", d => yScale(0) - yScale(d.value)), 
            update => update.call(update => update.transition().duration(800)),
            exit => exit.call(exit => exit.transition().duration(800).remove()) 
        );
        
    svg.selectAll(".label")
        .data(bardata.slice(0, activeLineIndex + 1)) 
        .join("text")
        .attr("class", "label")
        .attr("x", d => xScale(d.county) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.value) - 4)
        .attr("text-anchor", "middle")
        .text(d => d.value)
        .attr("fill", "black")
        .attr("font-size", "12px");
}

function drawGeorgiaMap() {
    svg.selectAll("*").remove();

    const geoGeorgiaState = topojson.feature(stateMapData, stateMapData.objects.states).features.find(d => d.id === "13");

    const projectionGeorgia = d3.geoAlbersUsa().fitSize([975, 610], geoGeorgiaState);
    const pathGeorgia = d3.geoPath().projection(projectionGeorgia);

   
    svg.append("path")
        .datum(geoGeorgiaState)
        .attr("d", pathGeorgia)
        .attr("fill", "#e0e0e0")
        .attr("stroke", "black");

    const geoGeorgiaCounties = topojson.feature(countiesMapData, countiesMapData.objects.counties).features.filter(d => String(d.id).startsWith("13"));


svg.selectAll("path.county")
    .data(geoGeorgiaCounties)
    .enter().append("path")
    .attr("class", "county")
    .attr("stroke", "black")
    .attr("d", pathGeorgia)
    .attr("fill", d => countiesToHighlight.includes(d.properties.name) ? "orange" : "#ccc")
    .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "red");
        const budgetShortfall = budgetShortfallData[d.properties.name.replace(' County', '')] || 'Data not available';
        d3.select("#county-name")
          .html(`<strong>${d.properties.name}:</strong> ${budgetShortfall}`)
          .style("visibility", "visible");
    })
    .on("mouseout", function(event, d) {
        d3.select(this).attr("fill", d => countiesToHighlight.includes(d.properties.name) ? "orange" : "#ccc");
        d3.select("#county-name").style("visibility", "hidden");
    });
}


function drawUSMap() {
    svg.selectAll("*").remove();
    svg.attr("viewBox", "0 0 975 610");

    svg.attr("id", "usMap")
       .attr("viewBox", "0 0 975 610");

    svg.selectAll("*").remove();

    let g = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round");

    g.append("path")
        .attr("stroke", "#aaa")
        .attr("stroke-width", "0.5")
        .attr("id", "counties");

    g.append("g")
        .attr("id", "statePaths");

    g.append("path")
        .attr("stroke-width", "0.5")
        .attr("id", "states");

    g.append("path")
        .attr("id", "nation");

    const path = d3.geoPath();
    g.select("#counties")
        .attr("d", path(topojson.mesh(USMapData, USMapData.objects.counties, (a, b) => a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0))));

    g.select("#statePaths")
        .selectAll("path")
        .data(topojson.feature(USMapData, USMapData.objects.states).features)
        .join("path")
        .attr("d", path)
        .style("fill", d => d.id == 13 ? "orange" : "none");  

    g.select("#states")
        .attr("d", path(topojson.mesh(USMapData, USMapData.objects.states, (a, b) => a !== b)));

    g.select("#nation")
        .attr("d", path(topojson.feature(USMapData, USMapData.objects.nation)));
}


function forwardClicked() {
   
    if (keyframeIndex < keyframes.length - 1) {
        keyframeIndex++;
        drawKeyframe(keyframeIndex);
    }

}

function backwardClicked() {
    if (keyframeIndex > 0) {
        keyframeIndex--;
        drawKeyframe(keyframeIndex);
      }
}

function drawKeyframe(kfi) {
    let kf = keyframes[kfi];
    resetActiveLines();
    updateActiveVerse(kf.activeVerse);
  
    for (line of kf.activeLines) {
          updateActiveLine(kf.activeVerse, line);
    }
    if(kf.svgUpdate){
        kf.svgUpdate();
    }
}

function resetActiveLines() {
    d3.selectAll(".line").classed("active-line", false);
}

function updateActiveVerse(id) {
    d3.selectAll(".verse").classed("active-verse", false);

    d3.select("#verse" + id).classed("active-verse", true);
}

function updateActiveLine(vid, lid) {
    let thisVerse = d3.select("#verse" + vid);
    thisVerse.select("#line" + lid).classed("active-line", true);
}

function scrollLeftColumnToActiveVerse(id) {
    var leftColumn = document.querySelector(".left-column-content");


    var activeVerse = document.getElementById("verse" + id);

    var verseRect = activeVerse.getBoundingClientRect();
    var leftColumnRect = leftColumn.getBoundingClientRect();

    var desiredScrollTop = verseRect.top + leftColumn.scrollTop - leftColumnRect.top - (leftColumnRect.height - verseRect.height) / 2;

    leftColumn.scrollTo({
        top: desiredScrollTop,
        behavior: 'smooth'
    })
}

function updateActiveVerse(id) {
    d3.selectAll(".verse").classed("active-verse", false);

    d3.select("#verse" + id).classed("active-verse", true);

    scrollLeftColumnToActiveVerse(id);
}

async function initialise() {
    await loadData();
    drawKeyframe(keyframeIndex);
}

initialise();
