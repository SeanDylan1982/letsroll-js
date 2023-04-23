const layout = require('../layout');

module.exports = ({ contact }) => {
  const renderedContact = `
    <div class="contact-container" id="contact-container">
      <img src="./img/contact.png" alt="contact logo" id="contact-img">
      <div class="disclaimer" id="contact-disclaimer">
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
    </div>
      `;
    };

return layout({
  content: `
    <section>
      <div class="container">
        <div class="columns">
          <div class="column "></div>
          <div class="column is-four-fifths">
            <div>
              <div class="columns posts">
                ${renderedContact}
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `
});
