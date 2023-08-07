document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    addUserToTable(name, email);
    this.reset();
});

function addUserToTable(name, email) {
    const tableBody = document.getElementById('userTable').querySelector('tbody');
    const row = tableBody.insertRow();
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);
    nameCell.textContent = name;
    emailCell.textContent = email;
}
