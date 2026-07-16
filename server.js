const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>World Cup Server</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow:hidden;
    background:linear-gradient(-45deg,#006400,#008000,#0b6623,#1b4332);
    background-size:400% 400%;
    animation:bg 12s ease infinite;
}

@keyframes bg{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.card{
    background:rgba(255,255,255,.12);
    backdrop-filter:blur(12px);
    padding:40px;
    border-radius:20px;
    text-align:center;
    color:white;
    width:650px;
    box-shadow:0 0 30px rgba(255,215,0,.6);
    animation:fade 1s;
}

@keyframes fade{
    from{
        opacity:0;
        transform:translateY(50px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.ball{
    font-size:70px;
    animation:spin 5s linear infinite;
}

@keyframes spin{
    from{transform:rotate(0deg);}
    to{transform:rotate(360deg);}
}

h1{
    color:#FFD700;
    margin:15px 0;
}

h2{
    margin-bottom:15px;
}

.status{
    color:#00ff88;
    font-size:22px;
    margin-top:20px;
}

.footer{
    margin-top:25px;
    color:#ddd;
}

</style>

</head>

<body>

<div class="card">

<div class="ball">⚽</div>

<h1>FIFA WORLD CUP</h1>

<h2>🌍 Welcome to My Web Server 🌍</h2>

<p><strong>ชื่อ :</strong> นายชิณกฤช พจนาพันธ์</p>

<p><strong>รหัสนักศึกษา :</strong> 69319010220</p>

<div class="status">
🏆 Railway Server Online
</div>

<div class="footer">
⚽ Powered by Node.js • Railway • World Cup Theme ⚽
</div>

</div>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log(`🚀 Server Running on Port ${port}`);
});
