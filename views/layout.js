

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
            <div class="collapse navbar-collapse " id="collapsibleNavId">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="/"> <i class="fa fa-home"></i> Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> <i class="fa fa-newspaper"></i> News </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> <i class="fa fa-image"></i> Gallery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> <i class="fa fa-phone"></i> Contact Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> <i class="fa fa-file"></i> Club Constitution</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=""> <i class="fa fa-location-arrow"></i> Directions</a>
                </li>
              </ul>
            </div>
            <p style="position: absolute; right: 200px; top: 10px; font-size: 1.5rem;"><a class="nav-link" href="/login"> Sign up <i class="fa fa-user"></i> Log in </a></p>
            <div class="popi-container" id="popi-container">
              <div class="news-container" id="news-container">
                <img src="./assets/img/news.png" alt="news logo" id="news-img">
                <div class="disclaimer hidden" id="news-disclaimer">
                  <div class="intro" id="intro">
                    <h2>News</h2>
                    <h3>NORTHMEAD CLUB CHAMPIONSHIPS 2023/2024</h3>
                    <p>
                      Games may be played during the week providing that tabs are in - take preference.
                      Please Inform me beforehand so that I can prepare the cards. I can be contacted on on 0672564909.
                      Score Cards must please be placed in the Competition Box on the wall on completion of all games.
                      Score Cards will be available at the Bar.
                    </p>
                  </div>
                  <div class="mens-open" id="mens-open">
                    <h3>Men's Open Singles Championship</h3>
                    <p>
                      Format is:
                      TWO SETS OF NINE ENDS (3 END TIEBREAKER)
                    </p>
                    <ul>
                      <li>1.First round is sections of three.
                        <ul>
                          <li>Round Robin - Guaranteed of two games.</li>
                          <li>1 Point for a win then shot aggregate.</li>
                        </ul>
                      </li>
                      <li>2. Player 1 vs Player 2 (Player 3 Marks)
                        <ul>
                          <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                          <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
                        </ul>
                      </li>
                      <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
                      </li>
                    </ul>
                  </div>
                  <div class="mens-open" id="ladies-open">
                    <h3>Ladies Open Singles Championship</h3>
                    <p>
                      Format is:
                      TWO SETS OF NINE ENDS (3 END TIEBREAKER)
                    </p>
                    <ul>
                      <li>1.First round is sections of three.
                        <ul>
                          <li>Round Robin - Guaranteed of two games.</li>
                          <li>1 Point for a win then shot aggregate.</li>
                        </ul>
                      </li>
                      <li>2. Player 1 vs Player 2 (Player 3 Marks)
                        <ul>
                          <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                          <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
                        </ul>
                      </li>
                      <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
                      </li>
                    </ul>
                  </div>
                  <div class="mens-open" id="senior-mens-open">
                    <h3>Mens Senior Singles</h3>
                    <p>
                    <ul>
                      <li>21 Shots</li>
                      <li>KNOCK OUT</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="senior-ladies-open">
                    <h3>Ladies Senior Singles</h3>
                    <p>
                    <ul>
                      <li>21 Shots</li>
                      <li>KNOCK OUT</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="mens-novice-open">
                    <h4>Men's Novice Singles</h4>
                    <p>
                    <ul>
                      <li>Format Depending on Number of entries</li>
                      <li>Round Robin</li>
                      <li>21 SHOTS</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="ladies-novice-open">
                    <h4>Ladies Novice Singles</h4>
                    <p>
                    <ul>
                      <li>Format Depending on Number of entries</li>
                      <li>Round Robin</li>
                      <li>21 SHOTS</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="handicapped-open">
                    <h4>Handicap Singles</h4>
                    <p>
                    <ul>
                      <li>21 Ends (Knockout)</li>
                      <li>All Pairs: 21 Ends (Four Bowls)</li>
                      <li>Trips: 21 Ends</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div class="cardings-container" id="cardings-container">
                <img src="./assets/img/cardings.png" alt="cardings logo" id="cardings-img">
                <div class="disclaimer hidden" id="cardings-disclaimer">
                  <div class="intro" id="cardings-intro">
                    <h2>Cardings</h2>
                    <h3>NORTHMEAD CLUB CHAMPIONSHIPS 2023/2024</h3>
                    <p>
                      Games may be played during the week providing that tabs are in - take preference.
                      Please Inform me beforehand so that I can prepare the cards. I can be contacted on on 0672564909.
                      Score Cards must please be placed in the Competition Box on the wall on completion of all games.
                      Score Cards will be available at the Bar.
                    </p>
                  </div>
                  <div class="mens-open" id="cardings-mens-open">
                    <h3>Men's Open Singles Championship</h3>
                    <p>
                      Format is:
                      TWO SETS OF NINE ENDS (3 END TIEBREAKER)
                    </p>
                    <ul>
                      <li>1.First round is sections of three.
                        <ul>
                          <li>Round Robin - Guaranteed of two games.</li>
                          <li>1 Point for a win then shot aggregate.</li>
                        </ul>
                      </li>
                      <li>2. Player 1 vs Player 2 (Player 3 Marks)
                        <ul>
                          <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                          <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
                        </ul>
                      </li>
                      <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
                      </li>
                    </ul>
                  </div>
                  <div class="mens-open" id="cardings-ladies-open">
                    <h3>Ladies Open Singles Championship</h3>
                    <p>
                      Format is:
                      TWO SETS OF NINE ENDS (3 END TIEBREAKER)
                    </p>
                    <ul>
                      <li>1.First round is sections of three.
                        <ul>
                          <li>Round Robin - Guaranteed of two games.</li>
                          <li>1 Point for a win then shot aggregate.</li>
                        </ul>
                      </li>
                      <li>2. Player 1 vs Player 2 (Player 3 Marks)
                        <ul>
                          <li>Looser Game 1 vs The Marker (Winner of Game 1 Marks)</li>
                          <li>Marker vs Winner Game 1 (Looser Game 1 Marks)</li>
                        </ul>
                      </li>
                      <li>3. Thereafter knock out (Same Format 2 Sets of 9 Ends)
                      </li>
                    </ul>
                  </div>
                  <div class="mens-open" id="cardings-senior-mens-open">
                    <h3>Mens Senior Singles</h3>
                    <p>
                    <ul>
                      <li>21 Shots</li>
                      <li>KNOCK OUT</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="cardings-senior-ladies-open">
                    <h3>Ladies Senior Singles</h3>
                    <p>
                    <ul>
                      <li>21 Shots</li>
                      <li>KNOCK OUT</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="cardings-mens-novice-open">
                    <h4>Men's Novice Singles</h4>
                    <p>
                    <ul>
                      <li>Format Depending on Number of entries</li>
                      <li>Round Robin</li>
                      <li>21 SHOTS</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="cardings-ladies-novice-open">
                    <h4>Ladies Novice Singles</h4>
                    <p>
                    <ul>
                      <li>Format Depending on Number of entries</li>
                      <li>Round Robin</li>
                      <li>21 SHOTS</li>
                    </ul>
                    </p>
                  </div>
                  <div class="mens-open" id="cardings-handicapped-open">
                    <h4>Handicap Singles</h4>
                    <p>
                    <ul>
                      <li>21 Ends (Knockout)</li>
                      <li>All Pairs: 21 Ends (Four Bowls)</li>
                      <li>Trips: 21 Ends</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div class="tooltip-gallery-container" id="tooltip-gallery-container-icon">
                <img src="./assets/img/gallery.png" alt="gallery logo" id="tooltip-gallery-img">
                <div class="disclaimer hidden" id="tooltip-gallery-disclaimer">
                  <h2>Gallery</h2>
                  <p>
                  <div class="tooltip-slider-container">
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/nbc-4.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/nbc-1.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/nbc-3.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/nbc-2.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/mural.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/nbc-5.png" alt="an image" class="tooltip-slide-image">
                    </div>
                    <div class="tooltip-slide">
                      <img src="./assets/gallery/banner/modderfontein-trips.png" alt="an image" class="tooltip-slide-image">
                    </div>
                  </div>
                  </p>
                </div>
              </div>
              <div class="contact-container" id="contact-container">
                <img src="./assets/img/contact.png" alt="contact logo" id="contact-img">
                <div class="disclaimer hidden" id="contact-disclaimer">
                  <div class="intro" id="contact-intro">
                    <h2>NORTHMEAD BOWLING CLUB CONTACT DETAILS</h2>
                    <p>
                    <div class="contact-details" id="tooltip-executive-details">
                      <div class="club-details" id="tooltip-club-details">
                        <br>
                        <div id="club-phone"> <i class="fa fa-phone"> </i> <strong> Telephone:</strong> +27 11 849 9919
                        </div>
                        <div id="club-address"> <i class="fa fa-location"> </i> <strong> Physical address:</strong> Cnr 8th
                          Av
                          and 5th St,
                          Northmead Benoni, 1501, Gauteng Province, South Africa</div>
                        <div id="club-postal"> <i class="fa fa-envelope"> </i> <strong> Postal address:</strong> P.O. Box
                          15570, Farrarmere,
                          1518, Gauteng, South Africa</div>
                      </div>
                      <br>
                      <br>
                      <table>
                        <h2>Executive Leadership</h2>
                        <tr class="light">
                          <td>Club Chairman</td>
                          <td>Andrew Flemming</td>
                          <td>chairman@northmeadbowls.co.za</td>
                        </tr>
                        <tr>
                          <td>Vice-Chair</td>
                          <td>---Vacant---</td>
                          <td></td>
                        </tr>
                        <tr class="light">
                          <td>Club Treasurer</td>
                          <td>Lloyd Cameron</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Club Secretary</td>
                          <td>Stephanie Hill</td>
                          <td>secretary@northmeadbowls.co.za</td>
                        </tr>
                        <tr class="light">
                          <td>Competition Secretary</td>
                          <td>Rodney Winnan</td>
                          <td>competitionsecretary@northmeadbowls.co.za</td>
                        </tr>
                        <tr>
                          <td>Committee</td>
                          <td>Elize Fritz</td>
                          <td></td>
                        </tr>
                        <tr class="light">
                          <td></td>
                          <td>Rob Clough</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Chantal Grotto Henn</td>
                          <td></td>
                        </tr>
                        <tr class="light">
                          <td></td>
                          <td>Deon Henn</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Ellen Zungu</td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                    </p>
                    <br>
                    <div class="map" id="tooltip-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1853.2867336870258!2d28.32212660978699!3d-26.174228827693916!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1671890179137!5m2!1sen!2sza"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        id="tooltip-map-iframe">
                      </iframe>
                    </div>
                    <br>
                    <div class="form-control" id="tooltip-form-control">
                      <h2>Get in touch...</h2>
                      <form action="" method="post" name="contact-form" id="tooltip-contact-form">
                        <label for="name">Your full name here</label>
                        <input type="text" name="name" id="tooltip-name" placeholder="Your full name...">
                        <label for="email">Your Email address</label>
                        <input type="email" name="email" id="tooltip-email" placeholder="Email address...">
                        <label for="title">A Title for your message</label>
                        <input type="text" name="title" id="tooltip-title" placeholder="Title...">
                        <label for="message">Your message goes in here</label>
                        <textarea type="text" name="message" id="tooltip-message" rows="5" cols="3"
                          placeholder="Message..."></textarea>
                        <button type="submit" name="submit" id="tooltip-submit-btn" class="btn btn-success">Send <i
                            class="fa fa-paper-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="popia-container" id="popia-container">
                  <img src="./assets/img/popia.png" alt="popia act logo" id="popi-img">
                  <div class="disclaimer hidden" id="popi-disclaimer">
                    <h2>Protection of Personal Information Act Notice</h2>
                    <p>
                      Northmead Bowing club, the company who “owns” this website we wish
                      to advise and confirm that by accessing or using this website, you
                      acknowledge that you have read all of the privacy terms and the POPI
                      disclaimer wherein you understand and agree that all information
                      provided, whether personal or otherwise, may be used and processed by
                      the “owner” of this website and such use may include placing such
                      information in the public domain.
                    </p>
                    <p>
                      Further by continuing to access this website you specifically agree that
                      the Northmead Bowling club will use such information provided by you,
                      irrespective of the nature of such information. However the Webmaster
                      will use its best endeavours and take all reasonable precautions to ensure
                      that any information provided, is only used for the purposes it has been
                      provided.
                    </p>
                    <p>
                      Please note that by submitting information via this Website, you consent
                      to the collection, collation, processing, and storing of such information
                      and the use and disclosure of such information in accordance with this
                      policy.
                    </p>
                    <p>
                      If you do not agree to be bound by these terms, please exit this page and
                      do not access or use the website.
                    </p>
                  </div>
                </div>
          </nav>
        </header>
        ${content}
      </body>
      <script src="../app.js"></script>
    </html>
  `;
};
