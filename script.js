document.addEventListener('DOMContentLoaded', () => {
    const registrationTable = document.getElementById('registrationTable').getElementsByTagName('tbody')[0];
    const registrationForm = document.getElementById('registrationForm');
    let rowCount = 0;

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        addRow(name);
        document.getElementById('name').value = '';
    });

    function addRow(name) {
        rowCount++;
        const row = registrationTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        cell1.textContent = rowCount;
        cell2.textContent = name;
        cell3.textContent = '₹150';
        cell4.textContent = 'Cash';
        cell5.textContent = '9th March 2025, Sunday';
        cell6.textContent = 'SHAKHA PARK\n7AM TO 8AM';
    }
});
