const layout = require('../layout');

module.exports = ({ popia }) => {
  const renderedPopia = `
    <div class="popia-container" id="popia-container">
      <img src="./img/popia.png" alt="popia act logo" id="popi-img">
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
                ${renderedPopia}
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `
});
