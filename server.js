const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();

    let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Student Database</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI,Arial,sans-serif;
}

body{
    background:#0f172a;
    color:white;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
}

body::before{
    content:"";
    position:fixed;
    width:600px;
    height:600px;
    background:#00bfff55;
    filter:blur(180px);
    top:-150px;
    left:-100px;
}

body::after{
    content:"";
    position:fixed;
    width:500px;
    height:500px;
    background:#2563eb55;
    filter:blur(170px);
    bottom:-120px;
    right:-120px;
}

.container{
    width:90%;
    max-width:900px;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(18px);
    border:1px solid rgba(255,255,255,.2);
    border-radius:20px;
    padding:35px;
    box-shadow:0 0 30px rgba(0,191,255,.3);
    z-index:10;
}

h1{
    text-align:center;
    color:#38bdf8;
    margin-bottom:10px;
    font-size:34px;
}

.subtitle{
    text-align:center;
    color:#cbd5e1;
    margin-bottom:30px;
}

table{
    width:100%;
    border-collapse:collapse;
    overflow:hidden;
    border-radius:15px;
}

thead{
    background:linear-gradient(90deg,#0ea5e9,#2563eb);
}

th{
    padding:18px;
    color:white;
    font-size:18px;
}

td{
    padding:16px;
    text-align:center;
    border-bottom:1px solid rgba(255,255,255,.1);
}

tbody tr{
    transition:.35s;
}

tbody tr:nth-child(even){
    background:rgba(255,255,255,.03);
}

tbody tr:hover{
    background:#0ea5e955;
    transform:scale(1.01);
}

.footer{
    margin-top:30px;
    text-align:center;
    color:#94a3b8;
}

.badge{
    display:inline-block;
    margin-top:15px;
    padding:10px 22px;
    background:#2563eb;
    border-radius:30px;
    color:white;
    font-weight:bold;
    box-shadow:0 0 20px #2563eb;
}

</style>

</head>

<body>

<div class="container">

<h1>🎓 STUDENT DATABASE</h1>

<div class="subtitle">
ระบบฐานข้อมูลนักศึกษา PostgreSQL
</div>

<table>

<thead>
<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อนักศึกษา</th>
</tr>
</thead>

<tbody>
`;

    result.rows.forEach(row => {
      html += `
<tr>
<td>${row.student_id}</td>
<td>${row.student_name}</td>
</tr>
`;
    });

    html += `
</tbody>

</table>

<div class="footer">
<div class="badge">
✅ Connected to PostgreSQL
</div>

<br><br>

พัฒนาโดย <b>ชิณกฤช พจนาพันธ์</b><br>
วิทยาลัยเทคโนโลยีชลบุรี
</div>

</div>

</body>
</html>
`;

    res.end(html);

  } catch (err) {
    console.error(err);

    res.end(`
    <body style="
    background:#111827;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Segoe UI;">
        <div style="text-align:center">
            <h1 style="color:#ef4444;">❌ ERROR</h1>
            <p>${err.message}</p>
        </div>
    </body>
    `);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
