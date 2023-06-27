// Define link in a variable
const dataSet = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(dataSet).then(function(data) {
    let dropdownMenu = d3.select("#selDataset");
  
    // Get the id's
    let names = data.names;
   
    // Append the id's as options
    names.forEach(function(id) {
        dropdownMenu.append("option")
        .text(id)
        .property("value", id);
    });

    console.log(names);
});

// Function to update the bar chart
function updateBarChart(sample) {
    d3.json(dataSet).then(function(data) {
        // Filter samples
        let sampleId = data.samples;
        let value = sampleId.filter(function(result) {
            return result.id == sample;
    })[0];

    // Get the top 10 OTUs and reverse the order
    let otu_ids = value.otu_ids.slice(0, 10).reverse();
    let otu_labels = value.otu_labels.slice(0, 10).reverse();
    let sample_values = value.sample_values.slice(0, 10). reverse();

    // Log the data to the console
    console.log(sample_values,otu_labels,sample_values);

    // Set up the trace for the bar chart
    let trace = {
        x: sample_values,
        y: otu_ids.map(function(id) {
            return 'OTU ${id}';
        }),
        text: otu_labels,
        title: "Top 10 OTUs for Individual",
        type: "bar",
        orientation: "h"
    };

    // Call Plotly to plot the bar chart
    Plotly.newPlot("bar", [trace]);
    });
} 