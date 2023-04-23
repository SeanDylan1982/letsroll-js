const layout = require('../layout');

module.exports = ({ news }) => {
  const renderedNews = `
    <div class="news-container" id="news-container">
      <img src="./img/news.png" alt="news logo" id="news-img">
      <div class="disclaimer" id="news-disclaimer">
        <div class="news-intro" id="news-intro">
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
                ${renderedNews}
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `
});
