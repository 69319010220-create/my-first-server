// เรียกใช้งาน Module http
const http = require('http');

// กำหนด Port
const port = process.env.PORT || 3000;

// สร้าง Server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Railway Web Server</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(-45deg,#000428,#004e92,#1f1c2c,#000000);
    background-size:400% 400%;
    animation:bg 10s ease infinite;
}

@keyframes bg{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.card{
    width:600px;
    max-width:90%;
    padding:40px;
    border-radius:20px;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(15px);
    text-align:center;
    color:white;
    box-shadow:0 0 40px rgba(0,255,255,.5);
    animation:show 1s;
}

@keyframes show{
    from{
        transform:translateY(50px);
        opacity:0;
    }
    to{
        transform:translateY(0);
        opacity:1;
    }
}

.logo{
    font-size:70px;
}

h1{
    margin:15px 0;
    color:#00ffff;
    text-shadow:0 0 20px cyan;
}

h2{
    margin-bottom:10px;
}

.info{
    font-size:20px;
    margin:15px 0;
}

.status{
    color:#00ff66;
    font-size:22px;
    font-weight:bold;
}

.footer{
    margin-top:25px;
    color:#ddd;
    font-size:15px;
}

</style>

</head>

<body>

<div class="card">

<div class="logo">🚀</div>

<h1>NODE.JS WEB SERVER</h1>

<h2>นายรพีพัทธ์ เจริญรัญวุฒิกุล</h2>

<div class="info">
รหัสนักศึกษา : <b>123456789</b>
</div>

<div class="status">
🟢 Railway Server Online
</div>

<div class="footer">
⚡ Powered by Node.js & Railway
</div>

</div>

</body>
</html>
`);
});

// เริ่มต้น Server
server.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
