import React, { useEffect, useState } from "react";

const studentDetails = [
  {
    name: "Patel Drashti",
    email: "drashti.patel@example.com",
    username: "drashti_patel",
    city: "Ahmedabad",
    company: "Tata Consultancy Services",
  },
  {
    name: "Patel Maharshi",
    email: "maharshi.patel@example.com",
    username: "maharshi_patel",
    city: "Surat",
    company: "Infosys India",
  },
  {
    name: "Soni Riyon",
    email: "riyon.soni@example.com",
    username: "riyon_soni",
    city: "Vadodara",
    company: "Reliance Industries",
  },
  {
    name: "Chaudhary Bhumi",
    email: "bhumi.chaudhary@example.com",
    username: "bhumi_chaudhary",
    city: "Rajkot",
    company: "Adani Group",
  },
  {
    name: "Trivedi Trisha",
    email: "trisha.trivedi@example.com",
    username: "trisha_trivedi",
    city: "Gandhinagar",
    company: "Wipro India",
  },
  {
    name: "Patel Tisha",
    email: "tisha.patel@example.com",
    username: "tisha_patel",
    city: "Bhavnagar",
    company: "HCL Technologies",
  },
  {
    name: "Padeliya Dhavni",
    email: "dhavni.padeliya@example.com",
    username: "dhavni_padeliya",
    city: "Anand",
    company: "Tech Mahindra",
  },
  {
    name: "Patel Mahik",
    email: "mahik.patel@example.com",
    username: "mahik_patel",
    city: "Jamnagar",
    company: "Larsen & Toubro",
  },
  {
    name: "Patel Mansi",
    email: "mansi.patel@example.com",
    username: "mansi_patel",
    city: "Mehsana",
    company: "Zomato",
  },
  {
    name: "Rathod Bhavy",
    email: "bhavy.rathod@example.com",
    username: "bhavy_rathod",
    city: "Junagadh",
    company: "Flipkart",
  },
];

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        const updatedStudents = data.map((student, index) => ({
          id: student.id,
          ...studentDetails[index],
        }));

        setStudents(updatedStudents);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load student records. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="student-container">
      <h1>🎓 Student Management</h1>

      <p className="subtitle">
        Student List — Read Operation with API
      </p>

      <div className="student-summary">
        <span>👨‍🎓 Total Students</span>
        <strong>{students.length}</strong>
      </div>

      {loading && (
        <p className="message">Loading student records...</p>
      )}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-avatar">
                {student.name.charAt(0)}
              </div>

              <h2>{student.name}</h2>

              <p>
                <strong>Student ID:</strong> {student.id}
              </p>

              <p>
                <strong>Email:</strong> {student.email}
              </p>

              <p>
                <strong>Username:</strong> {student.username}
              </p>

              <p>
                <strong>City:</strong> {student.city}, Gujarat
              </p>

              <p>
                <strong>Company:</strong> {student.company}
              </p>

              <span className="status-badge">
                ✓ Record Loaded
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;