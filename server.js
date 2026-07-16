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
    font-family:Arial, sans-serif;
    overflow:hidden;
}

/* พื้นหลังวิดีโอ */
video{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
    z-index:-1;
}

/* กล่องข้อความ */
.box{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(0,0,0,.6);
    color:white;
    padding:40px;
    border-radius:20px;
    text-align:center;
    backdrop-filter:blur(5px);
    animation:show 1s ease;
}

h1{
    color:#00c3ff;
}

p{
    margin-top:10px;
    font-size:18px;
}

@keyframes show{
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

<video autoplay muted loop>
    <source src="ronaldo.mp4" type="video/mp4">
</video>

<div class="box">
    <h1>⚽ Cristiano Ronaldo Fan Page</h1>
    <h2>นายชิณกฤช พจนาพันธ์</h2>
    <p>รหัสนักศึกษา : 69319010220</p>
    <br>
    <p>🚀 Railway Server ทำงานปกติ</p>
</div>

</body>
</html>
`);
