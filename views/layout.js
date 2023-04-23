module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lets Roll ⚪ Home</title>
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>
      <body>
        <header>
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="logo-container">
              <a class="navbar-brand" href="/">
                <h2> Lets </h2> <img src="./assets/img/logo2.png" alt=""> <h2> roll </h2>
              </a>
            </div>
            <button type="submit" style="position: absolute; right: 50px; top: 15px; font-size: 1.5rem;"><a href="/signin"> Sign up <i class="fa fa-user"></i> Log in </a></button>
            <div class="popi-container" id="popi-container">
            <div class="collapse navbar-collapse " id="collapsibleNavId">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/"> <i class="fa fa-home"></i>
                  <span> Home </a></span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./news.js"> <i class="fa fa-newspaper"></i>
                  <span> News </a></span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./carding.js"> <i class="fa fa-clipboard"></i>
                  <span> Cardings </a></span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./gallery.js"> <i class="fa fa-image"></i>
                  <span> Gallery </a></span>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./constitution.js"> <i class="fa fa-file"></i>
                <span> Constitution </span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./directions.js"> <i class="fa fa-location-arrow"></i> 
                <span> Directions </span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./contact.js"> <i class="fa fa-phone"></i>
                  <span> Contact Us </a></span>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        ${content}
      </body>
    </html>
  `;
};
