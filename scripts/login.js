const loginBtn = document.getElementById('login');
const loginToast = document.getElementById('login-toast');
const form = document.getElementById('form');


 
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(loginToast)
  loginBtn.addEventListener('click', () => {
    toastBootstrap.show()
  })
 

form.addEventListener('submit', (e) => {
e.preventDefault();
if (form.checkValidity()) {
  location.href = './articles.html';
} else {
  toastBootstrap.show();

  setTimeout(() => {
    toastBootstrap.hide();
  }, 3000);
}
});

 