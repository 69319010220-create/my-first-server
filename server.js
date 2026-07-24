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
        <title>ฐานข้อมูลนักศึกษา</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
            }

            body{
                background:linear-gradient(135deg,#4facfe,#00f2fe);
                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .container{
                width:90%;
                max-width:900px;
                background:#fff;
                padding:30px;
                border-radius:20px;
                box-shadow:0 15px 30px rgba(0,0,0,.25);
            }

            h1{
                text-align:center;
                color:#0d6efd;
                margin-bottom:10px;
            }

            p{
                text-align:center;
                color:#666;
                margin-bottom:25px;
            }

            table{
                width:100%;
                border-collapse:collapse;
                overflow:hidden;
                border-radius:12px;
            }

            thead{
                background:#0d6efd;
                color:white;
            }

            th,td{
                padding:15px;
                text-align:center;
            }

            tbody tr:nth-child(even){
                background:#f5f5f5;
            }

            tbody tr:hover{
                background:#dbeafe;
                transition:.3s;
            }

            .footer{
                text-align:center;
                margin-top:20px;
                color:#666;
                font-size:14px;
            }

            .badge{
                display:inline-block;
                background:#198754;
                color:white;
                padding:8px 18px;
                border-radius:20px;
                margin-bottom:20px;
                font-weight:bold;
            }
        </style>
    </head>

    <body>

    <div class="container">

        <h1>🎓 ฐานข้อมูลนักศึกษา</h1>

        <p>
            <span class="badge">เชื่อมต่อ PostgreSQL สำเร็จ</span>
        </p>

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
            👨‍💻 พัฒนาโดย ชิณกฤช พจนาพันธ์ <br>
            วิทยาลัยเทคโนโลยีชลบุรี | สาขาเทคโนโลยีสารสนเทศ
        </div>

    </div>

    </body>
    </html>
    `;

    res.end(html);

  } catch (err) {
    console.error(err);

    res.end(`
      <h1 style="color:red;text-align:center">
        ❌ เกิดข้อผิดพลาด
      </h1>
      <p style="text-align:center">${err.message}</p>
    `);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
