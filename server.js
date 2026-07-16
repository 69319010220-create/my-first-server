// เรียกใช้งาน Module http
const http = require('http');

// กำหนด Port
const port = process.env.PORT || 3000;

// สร้าง Web Server
const server = http.createServer((req, res) => {

    // ตั้งค่าการตอบกลับ
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    // วันที่และเวลาปัจจุบัน
    const today = new Date().toLocaleString('th-TH');

    // ส่งหน้าเว็บ
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Web Server</title>

<style>
    body{
        margin:0;
        font-family:Arial, Helvetica, sans-serif;
        background:linear-gradient(135deg,#0f62fe,#42a5f5);
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }

    .card{
        background:white;
        padding:40px;
        border-radius:20px;
        box-shadow:0 10px 25px rgba(0,0,0,0.25);
        text-align:center;
        max-width:700px;
        width:90%;
    }

    h1{
        color:#0f62fe;
        margin-bottom:15px;
    }

    h2{
        color:#333;
        margin:10px 0;
    }

    p{
        color:#555;
        font-size:18px;
    }

    .success{
        color:green;
        font-weight:bold;
        margin-top:20px;
    }

    .footer{
        margin-top:30px;
        font-size:14px;
        color:#777;
    }
</style>

</head>

<body>

<div class="card">

<h1>🚀 Node.js Web Server</h1>

<h2>สวัสดีครับ</h2>

<p><strong>ชื่อ :</strong> นายชิณกฤช พจนาพันธ์</p>

<p><strong>รหัสนักศึกษา :</strong> 69319010220</p>

<p class="success">
✅ เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้ว
</p>

<div class="footer">
วันที่และเวลา : ${today}
</div>

</div>

</body>
</html>
    `);
});

// เปิด Server
server.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
