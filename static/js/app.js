const optionChanged = () =>
  d3.json("samples.json").then(({ metadata, samples }) => {
    let option = d3.select("select").node().value;

    let meta = metadata.filter((obj) => obj.id == option)[0];
    let sample = samples.filter((obj) => obj.id == option)[0];

    console.log(meta, sample);
  });

d3.json("samples.json").then(({ names }) => {
  names.forEach((id) => {
    d3.select("select").append("option").text(id);
  });

  optionChanged();
});
