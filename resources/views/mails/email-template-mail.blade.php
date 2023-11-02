<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    >
    <meta
        http-equiv="X-UA-Compatible"
        content="ie=edge"
    >
    <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
    >
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    >
    <title>Mail Form Pika Sharing</title>
    <style>
        * {
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
        }

        .mail-layout-container {
            width: 95%;
            margin: 0 auto;
        }

        @media (min-width: 600px) {
            .mail-layout-container {
                width: 500px;
            }
        }
    </style>
</head>

<body>
<div class="mail-layout-container">
    <div style="text-align: left;margin:20px auto;padding-bottom: 15px;border-bottom: 1px solid #ddd">
        <img
            src="https://i.postimg.cc/PJDvZzZX/Asset-14-300x-1.jpg"
            width="127"
            height="auto"
        >
    </div>

    <div>
        {!! $body !!}
    </div>


</div>
</body>

</html>
