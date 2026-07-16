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
<title>Football Server</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background:linear-gradient(-45deg,#006400,#228B22,#004d00,#0a2e0a);
    background-size:400% 400%;
    animation:bg 15s ease infinite;
}

@keyframes bg{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

/* เอฟเฟกต์ลูกฟุตบอล */
.ball{
    position:absolute;
    font-size:50px;
    animation:float 12s linear infinite;
    opacity:.25;
}

.ball:nth-child(1){left:10%;top:10%;}
.ball:nth-child(2){left:85%;top:20%;animation-delay:2s;}
.ball:nth-child(3){left:15%;top:80%;animation-delay:5s;}
.ball:nth-child(4){left:80%;top:70%;animation-delay:7s;}

@keyframes float{
    from{
        transform:translateY(0) rotate(0deg);
    }
    to{
        transform:translateY(-120vh) rotate(720deg);
    }
}

.card{
    width:700px;
    max-width:90%;
    padding:40px;
    text-align:center;
    color:white;
    background:rgba(255,255,255,.1);
    border:2px solid rgba(255,255,255,.2);
    border-radius:25px;
    backdrop-filter:blur(15px);
    box-shadow:0 0 35px rgba(255,215,0,.6);
    animation:show 1s;
}

@keyframes show{
    from{
        opacity:0;
        transform:scale(.8);
    }
    to{
        opacity:1;
        transform:scale(1);
    }
}

h1{
    color:#FFD700;
    font-size:42px;
    text-shadow:0 0 15px gold;
}

h2{
    margin-top:15px;
}

.info{
    margin-top:15px;
    font-size:20px;
}

.status{
    margin-top:25px;
    color:#00ff99;
    font-size:24px;
    font-weight:bold;
}

.clock{
    margin-top:25px;
    font-size:20px;
    color:#fff;
}

.footer{
    margin-top:25px;
    color:#ddd;
    font-size:15px;
}

</style>
</head>

<body>

<div class="ball">⚽</div>
<div class="ball">⚽</div>
<div class="ball">⚽</div>
<div class="ball">⚽</div>

<div class="card">

<h1>🏆 FOOTBALL WEB SERVER 🏆</h1>

<h2>⚽ ยินดีต้อนรับ ⚽</h2>

<div class="info">
<b>ชื่อ :</b> นายชิณกฤช พจนาพันธ์
</div>

<div class="info">
<b>รหัสนักศึกษา :</b> 69319010220
</div>

<div class="status">
🟢 Railway Server Online
</div>

<div class="clock" id="clock"></div>

<div class="footer">
⚽ Powered by Node.js • Railway • Football Theme
</div>

</div>

<script>
function updateClock(){
    const now = new Date();
    document.getElementById("clock").innerHTML =
        "🕒 " + now.toLocaleString("th-TH");
}
setInterval(updateClock,1000);
updateClock();
</script>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log(\`🚀 Server Running on Port \${port}\`);
});
