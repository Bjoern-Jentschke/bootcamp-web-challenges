console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch (url);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    const found = data.results.find((item) => item.name === "R2-D2")
    console.log(found.eye_color);
    console.log(data.results[2].eye_color);
    return data;
}

fetchData();



