export default function StudentResult() {
  return (
    <div className="content-long">

      <section className="card text-center">
        <h2>📊 Academic Result</h2>
        <p className="lead">Session 2024 – 2025</p>
      </section>

      <section className="card">
        <h3> Subject Wise Marks</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Max</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Mathematics</td><td>100</td><td>92</td><td>A+</td></tr>
            <tr><td>Science</td><td>100</td><td>88</td><td>A</td></tr>
            <tr><td>English</td><td>100</td><td>85</td><td>A</td></tr>
            <tr><td>Social Science</td><td>100</td><td>81</td><td>B+</td></tr>
            <tr><td>Computer</td><td>100</td><td>95</td><td>A+</td></tr>
          </tbody>
        </table>
      </section>

      <section className="card">
        <h3>📈 Performance Summary</h3>
        <p><strong>Total Marks:</strong> 441 / 500</p>
        <p><strong>Percentage:</strong> 88.2%</p>
        <p><strong>Overall Grade:</strong> A</p>
        <p><strong>Result Status:</strong> Pass ✅</p>
      </section>

      <section className="card">
        <h3>📝 Class Teacher Remark</h3>
        <p>
          Rahul has shown consistent improvement throughout the academic year.
          Excellent analytical skills and discipline.
        </p>
      </section>

      <section className="card">
        <h3>⬇ Download</h3>
        <button className="btn btn-primary">Download Marksheet (PDF)</button>
      </section>

    </div>
  )
}
