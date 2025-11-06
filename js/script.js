let students = [];

function renderStudents() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';

    if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="no-data">No students added yet</td></tr>`;
        return;
    }

    students.forEach((student, i) => {
        const row = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>
                        <button class="edit-btn" onclick="editStudent(${i})">Edit</button>
                        <button class="delete-btn" onclick="deleteStudent(${i})">Delete</button>
                    </td>
                </tr>`;
        tbody.innerHTML += row;
    });
}

function openModal(isEdit = false) {
    document.getElementById('studentModal').style.display = 'flex';
    document.getElementById('modalTitle').textContent = isEdit ? 'Edit Student' : 'Add Student';
}

function closeModal() {
    document.getElementById('studentModal').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('studentIndex').value = '';
}

function saveStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const index = document.getElementById('studentIndex').value;

    if (!name || !age || !grade) {
        alert('Please fill in all fields');
        return;
    }

    const student = { name, age, grade };

    if (index === '') {
        students.push(student);
    } else {
        students[index] = student;
    }

    renderStudents();
    closeModal();
}

function editStudent(index) {
    const s = students[index];
    document.getElementById('name').value = s.name;
    document.getElementById('age').value = s.age;
    document.getElementById('grade').value = s.grade;
    document.getElementById('studentIndex').value = index;
    openModal(true);
}

function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(index, 1);
        renderStudents();
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('studentModal');
    if (event.target === modal) closeModal();
}