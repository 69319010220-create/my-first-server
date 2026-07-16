res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CR7 Web Server</title>

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

/* พื้นหลัง */
body::before{
    content:"";
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url("ronaldo.jpg") center center/cover no-repeat;
    filter:brightness(40%);
    animation:zoom 20s infinite alternate;
    z-index:-2;
}

/* Overlay */
body::after{
    content:"";
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6));
    z-index:-1;
}

@keyframes zoom{
    from{
        transform:scale(1);
    }
    to{
        transform:scale(1.15);
    }
}

.card{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(255,255,255,.12);
    backdrop-filter:blur(10px);
    padding:40px;
    border-radius:20px;
    text-align:center;
    color:white;
    box-shadow:0 0 30px rgba(0,0,0,.5);
    animation:fade 1s;
}

h1{
    font-size:42px;
    color:#FFD700;
}

h2{
    margin-top:20px;
}

p{
    margin-top:15px;
    font-size:20px;
}

.status{
    color:#00ff88;
    font-weight:bold;
    margin-top:25px;
}

@keyframes fade{
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

<div class="card">

<h1>⚽ CR7 WEB SERVER ⚽</h1>

<h2>นายรพีพัทธ์ เจริญรัญวุฒิกุล</h2>

<p>รหัสนักศึกษา : 123456789</p>

<p class="status">
🚀 Railway Server Online
</p>

</div>

</body>
</html>
`);
