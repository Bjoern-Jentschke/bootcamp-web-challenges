console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

// utility function creates and throws errors
async function getUser(url) {
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error ("Network issue");
  }
  try{
    const json = await response.json();
    return json.data;
  } catch (error){
    throw new Error ("Parsing Error");
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
button.addEventListener("click", async (event) => {
  userElement.innerHTML ="";
  errorElement.innerHTML ="";
  try {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  } catch (error){
    console.log("Ain't no connection or data whatsoever");
    userElement.innerHTML ="Nada aquí jefa"
    errorElement.innerHTML = error.message;
  }
  })
);
