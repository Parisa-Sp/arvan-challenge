const menubtn = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar-container');

const container = document.getElementById('container');

menubtn.onclick = () => {
  sidebar.style.width = sidebar.style.width === '15%' ? '10%' : '15%';
};

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    document.location.replace('./articles.html?create=success');
  }
  form.classList.add('was-validated');
});

document.getElementById('Logout').addEventListener('click', function () {
  location.href = './login.html';
});

 