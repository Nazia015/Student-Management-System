<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <h1>Student Management System</h1>

    <div class="container">
        <div class="header">
            <h3>Student List</h3>
            <button class="add-btn" onclick="openModal()">+ Add Student</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="studentTableBody">
                <tr><td colspan="5" class="no-data">No students added yet</td></tr>
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div class="modal" id="studentModal">
        <div class="modal-content">
            <button class="close-btn" onclick="closeModal()">✖</button>
            <h2 id="modalTitle">Add Student</h2>
            <input type="hidden" id="studentIndex">
            <input type="text" id="name" placeholder="Student Name" required>
            <input type="number" id="age" placeholder="Age" required>
            <input type="text" id="grade" placeholder="Grade" required>
            <button class="save-btn" onclick="saveStudent()">Save</button>
        </div>
    </div>
    <script src="js/scripts.js"></script>
</body>
</html>