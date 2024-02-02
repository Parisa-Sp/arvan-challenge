const menubtn = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar-container');

const container = document.getElementById('container');

menubtn.onclick = () => {
  sidebar.style.width = sidebar.style.width === '15%' ? '10%' : '15%';
};

const deletebtn = document.getElementById('delete');
const deletetoast = document.getElementById('delete-toast');

deletebtn.addEventListener('click', () => {
  const DeleteToast = bootstrap.Toast.getOrCreateInstance(deletetoast);
  DeleteToast.show();
  setTimeout(() => {
    DeleteToast.hide();
  }, 3000);
});

document.getElementById('Logout').addEventListener('click', function () {
  location.href = './login.html';
});

const QParams = new URLSearchParams(document.location.search);
const edit = QParams.get('edit');


const toastLiveExample = document.getElementById('edit-toast');

if (edit === 'success') {
  const toast = new bootstrap.Toast(toastLiveExample);

  toast.show();

  setTimeout(() => {
    toast.hide();
  }, 3000);
}

const create = QParams.get('create');

const createtoast = document.getElementById('create-toast');

if (create === 'success') {
  const toast = new bootstrap.Toast(createtoast);

  toast.show();

  setTimeout(() => {
    toast.hide();
  }, 3000);
}

 
 
