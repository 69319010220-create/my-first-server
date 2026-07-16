res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Web Server</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    overflow:hidden;
    font-family:Arial, sans-serif;
}

/* วิดีโอพื้นหลัง */
#bg-video{
    position:fixed;
    right:0;
    bottom:0;
    min-width:100%;
    min-height:100%;
    object-fit:cover;
    z-index:-1;
}

/* กล่องข้อความ */
.card{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(0,0,0,.55);
    color:white;
    padding:40px;
    border-radius:20px;
    text-align:center;
    backdrop-filter:blur(6px);
    animation:fadeUp 1.2s;
}

h1{
    color:#00d4ff;
    margin-bottom:20px;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translate(-50%,-40%);
    }
    to{
        opacity:1;
        transform:translate(-50%,-50%);
    }
}

</style>
</head>

<body>

<!-- เปลี่ยนไฟล์นี้เป็นคลิป Ronaldo ของคุณ -->
<video autoplay muted loop id="bg-video">
    <source src="ronaldo.mp4" type="video/mp4">
</video>

<div class="card">
    <h1>⚽ Cristiano Ronaldo Fan Page</h1>

    <h2>นายชิณกฤช พจนาพันธ์</h2>

    <p>รหัสนักศึกษา 69319010220</p>

    <br>

    <h3>🚀 Railway Server Online</h3>
</div>

</body>
</html>
`);
