let applications = [];

const form = document.getElementById("admissionForm");
const list = document.getElementById("applicationList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const id = "ADM" + Math.floor(Math.random() * 10000);

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  const app = { id, name, email, course };
  applications.push(app);

  displayApplications();

  form.reset();
});

function displayApplications() {
  list.innerHTML = "";

  applications.forEach((app, index) => {
    const row = `
      <tr>
        <td>${app.id}</td>
        <td>${app.name}</td>
        <td>${app.email}</td>
        <td>${app.course}</td>
        <td><button class="delete" onclick="deleteApp(${index})">Delete</button></td>
      </tr>
    `;
    list.innerHTML += row;
  });
}

function deleteApp(index) {
  applications.splice(index, 1);
  displayApplications();
}