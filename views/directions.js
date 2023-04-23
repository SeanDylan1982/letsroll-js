const layout = require('../layout');

module.exports = ({ directions }) => {
  const renderedDirections = `
    <div class="directions-container" id="directions-container">
      <h1> DIRECTIONS TO EASTERN GAUTENG BOWLS CLUBS</h1>
      <p>
        (Based on major highways and interchanges as reference)
      </p>
      <p>
      <h4>ALBERTON BC 2nd Avenue, New Redruth, Alberton.</h4>
      </p>
      <p>
      <ul>
        <li>From Geldenhuis interchange follow N12 Vereeniging indicators.</li>
        <li>Turn off at Alberton/Voortrekker Road exit.</li>
        <li>At 1st robot in Voortrekker Road turn left into Ring Road East.</li>
        <li>At 5th robot turn left into Helston Street.</li>
        <li>At T-junction/robot turn right into 2nd Ave.</li>
        <li>Club on right side +- 300 metres</li>
      </ul>
      </p>
      <p>
      <h4>ATLAS BC Bonaero Park, Kempton Park</h4>
      <ul>
        <li>Proceed along N12 toward Witbank. Take Atlas Rd exit.</li>
        <li>Turn north along Atlas Road and pass Atlas Aircraft factory on left.</li>
        <li>Club is on left just beyond factory</li>
        <li>Approximately 3 Km from highway</li>
      </ul>
      </p>
      <p>
      <h4>AVION PARK BC Highveld Road, Kempton Park</h4>
      <ul>
        <li>Proceed along R24 towards Pretoria.</li>
        <li>Continue past Johannesburg International Airport to Kempton Park/Airfreight exit and turn left, then
          immediate right.</li>
        <li>Proceed along Albatross Rd. At first robot slip left into Highveld Road. Club is on right hand side.
        </li>
        <li>Alternate route: From Benoni proceed along Great North Rd, </li>
        <li>turn left at Van Riebeeck Rd and first left into Aloe Rd. Club is on left.</li>
      </ul>
      </p>
      <p>
      <h4>AVION PARK BC Highveld Road, Kempton Park</h4>
      <ul>
        <li>Proceed along R24 towards Pretoria.</li>
        <li>Continue past Johannesburg International Airport to Kempton Park/Airfreight exit and turn left, then
          immediate
          right.</li>
        <li>Proceed along Albatross Rd. At first robot slip left into Highveld Road. Club is on right hand side.
        </li>
        <li>Alternate route: From Benoni proceed along Great North Rd, </li>
        <li>turn left at Van Riebeeck Rd and first left into Aloe Rd. Club is on left.</li>
      </ul>
      </p>

      <p>
        BENONI BC Newlands Avenue, Benoni
        Travelling east on N12 highway, take Tom Jones/Bunyan St. exit.
        Proceed to 2nd robot, turn right into Tom Jones St. under fly-over
        turn right at next robot into Mowbray Ave. After 1st set of robots,
        turn left into Kimbolton St. Turn right at second intersection into
        Newlands Ave. Club on left
      </p>
      <p>
        BENONI COUNTRY CLUB. Morris Ave. Morehill, Benoni
        Travelling east on N12 highway, pass Atlas Road and Tom Jones
        exits and proceed to Snake Road/Brakpan turn off. Turn left and
        proceed to 4-way robots. Turn right along Morris Ave. for approx 1
        Km. Club on left.
      </p>
      <p>
        BENONI LAKE BC, Lakefield Ave. Benoni
        From N12 turn South at Atlas Rd exit. At robot intersection turn left
        into Lakefield Ave, bear right with Lakefield Ave. Club is on the left.
        Alternat route: From N17 turn north at Rondebult Rd, right into
        Leeupoort Rd and continue into Commissioner St, then left into
        Atlas Rd. At Lakefield Ave turn right, bear right with Lakefield Ave.
        Club is on left.
      </p>
      <p>
        BENONI MUNICIPAL BC, Harpur Avenue, Benoni
        From N12 (Witbank Highway) travel towards Benoni. Take the Tom
        Jones/Bunyan St exit. At 2nd robot turn right into Tom Jones St.
        and stay in right hand lane. Proceed through town (7 robots) and
        follow slip road into Harpur Ave. Immediately after 1st robot tun left
        into parking area.
        Alternate route: From N17(Toll road) take Benoni/Heidelberg exit
        proceed north on R23 to Benoni (4 sets robots). Take Tom Jones
        St. turn-off, continue to Harpur Ave. Turn left and continue to 3-way
        robot. Immediately after robot turn left into parking area.
      </p>
      <p>
        BOKSBURG BC Commissioner St, Boksburg
        From N17 turn north at Boksburg/Mapleton exit. Proceed along
        Rondebult Rd. (R21). At 6th robot turn right (Middel St.) Club is
        directly in front with entrance on far side.
        Alternative route: From N12 turn south on Rietfontein Rd. Pass
        Pick 'n Pay on left hand side. Continue to Rondebult Road (first
        large intersection) Turn right and at 4th robot (1st after railway
        bridge) turn left into Middel St. Club in directly in front with entrance
        on far side.
      </p>
      <p>
        BRACKENHURST BC, Malherbe St
        Proceed along the R59 towards Vereeniging, take the
        Swartkoppies Road exit (N0.52), turn right onto Swartkoppies Rd to
        1st robot (Vermooten St) and turn left. Continue on until KFC sign
        and turn left into Atmore St. and first right into Malherbe St. then
        straight down road to stop sign. Club on left after stop sign.
      </p>
      <p>
        BRAKPAN BC Kingsway Avenue.
        Travelling east on N12 highway, pass Tom Jones exit and proceed
        to Snake Rd/Brakpan exit. Turn right and proceed to second 4-way
        robots. Turn left into slip road, stay on right hand side of road.
        Continue for 4.6Km, under railway bridge to Smyly Circle. Go
        halfway round the circle into Prince George Avenue. (Anzac School
        on left). Proceed to 5th robot, turn left into Voortrekker Rd and
        continue to Hylands Ave (4th robot). Turn right at STOP, left into
        Kingsway Ave. Club entrance on right.
      </p>
      <p>
        BRAKPAN MINES BC
        As for Brakpan Bowling Club. At Smyly Circle. Go 3/4 way round
        and the entrance to the club is on the left.
      </p>
      <p>
        DELVILLE GERMISTON BC,.Delville Road South
        From Geldenhuis interchange (N2/M2) proceed along M2 to
        Germiston. At T-junction at end of highway turn right and proceed
        along past Rand Refinery on right. Pass Power St. and proceed
        past lake on right and follow road with railway on left to junction of
        Webber Rd. Turn left and cross railway. Proceed north along
        Webber to Delville Rd South. (Sports field on both sides). Turn right
        and proceed past tennis courts. Club is on left.
        Alternative Route: From Germiston centre proceed south along
        Webber Rd., turn left into Delville Rd South, pass tennis courts.
        Club is on left.
      </p>
      <p>
        DINWIDDIE BC
        From N3 take Grey Ave/Kritzinger exit. Turn east to Germiston. At
        robot turn right into Ingleton and proceed to T-junction at Cheam
        Crescent. Club is straight ahead.
      </p>
      <p>
        EDENVALE BC, 6TH Avenue.
        From the North, South, East and West proceed along the N3
        Pretoria and take the 116 Edenvale - M16 Linksfield Rd exit. At
        the 4th robot, (past Edenvale High School), turn left into First Ave,
        (Sasol Garage on the corner opposite) and proceed up (past the
        Police Station) and down the hill through the dip and across the
        river. Turn right into Short St at the first stop street after the dip. In
        Short St proceed to the T-junction, turn left and then immediately
        right into 11th Street. Turn left at the 3rd street (6th Ave) and through
        the gates.
      </p>
      <p>
        E.R.P.M. BC, Comet Road, Boksburg
        Proceed as for Boksburg B.C. from N17. Commissioner St. over
        railway bridge. Cross over Rondebult Rd at robot and turn
        immediately right. Club is on left.
        Alternative route: From N12 turn south at Jet Park/East Rand Mall
        exit. Proceed along Pretoria Rd past E.R.P.M. Golf Course. Cross
        Main Reef Road and turn right at robot (Rondebult Rd) right at the
        next robot (Comet Rd) and right again. Proceed and club in on left.
      </p>
      <p>
        GELDENHUIS DEEP BC, Geldenhuis Road.
        Proceed north along President St., Germiston. At T-junction turn
        left and proceed to robot at Caledonian Hotel. Turn left into
        Stanhope Rd and carry on to robot at end of Jules St. Turn right
        into Geldenhuis Rd and proceed 500 metres. Club is on right..
      </p>
      <p>
        HEIDELBERG BC
        Take N3 to Durban, exit Nigel /Jacob St.. At stop sign turn right
        and cross the N3 highway. Slip to the left to Groenfontein, turn 2nd
        road right into Viljoen St, then immediately right into sports
        complex. Bowling club is straight ahead.
      </p>
      <p>
        KEMPTON PARK BC, Kempton Park Sports Complex
        From JHB take R24 towards OR TAMBO Airport. Take Barbara Rd
        exit, at robot turn left, proceed to first robot, turn right into Brabazon
        Rd, continue straight to robot at Isando Rd, turn left. At Chestnut
        Street turn right, continue to robot at Plane Rd, continue straight
        across into Green St.
        At Country Club/Ekurhuleni - Kempton Park Bowling Club signs
        turn right. Proceed up to boom at main gate and left into bowls
        parking area. Club is straight ahead.
        From east, take N12 to East Rand Mall, take R21 Pretoria past OR
        Tambo Airport. then take Kempton Park/Airfreight exit, bear left at
        robot, under highway keeping to middle lane. At 1st robot go
        straight, down Voortrekker Rd. (ARWYP Hospital on the left), at
        3 rd robot turn right into Monument Rd, keeping to lefthand lane, at
        3 rd robot bear left into C.R Swart. Keeping in middle lane go
        straight under railway bridge, at 3rd robot, past golf course on left
        bear left into Green St. and left at Country Club / Ekuhuleni -
        Kempton Park Bowling Club signs. Proceed as above.
      </p>
      <p>
        KLEINFONTEIN BC
        Take N12 to Witbank, exit at Snake Rd (M45). At robot turn right
        and proceed through 3 sets of robots. At 4th set of robots slip to the
        left (Main Reef Rd). Take first right into Woodpecker St, then first
        right and first left. Club entrance on right.
      </p>
      <p>
        MODDERBEE C.S. BC
        On N12 turn south at Springs/Daveyton off ramp. Proceed south
        toward Springs. At New Modderbee Rd turn left, Prison on the left
        proceed past main gate then left into Darryl St and right into
        Vermont St. Club in on the right.
      </p>
      <p>
        MODDERFONTEIN BC
        From the N3 North take Modderfontein exit and turn right onto
        R25/P91 Modderfontein Road. Proceed straight through 5 sets of
        robots. Do not turn off at Modderfontein turnoff after 2nd
        robot. At 6th robot just past Engen garage, turn left into Centenary
        Road. Proceed past the Golf Club,at T-junction turn right, under the
        Gautrain bridge and straight across the roundabout into Antwerp
        Road. Take 3rd turning right into Casino Road. Drive around the
        circle and turn left so that the Old Town Hall (Heartlands) is on your
        left. The Club is on the right hand side after the Old Town Hall.
        Alternative route: From Kempton Park direction take R25/P91
        towards Edenvale. Proceed until you pass under the Gautrain
        bridge at Founders View and turn right into Centenary Road. Then
        proceed as above.
      </p>
      <p>
        NIGEL BC
        Take N17 toll road, exit at Wit Rd (R51). At stop sign, turn left into
        Wit Rd. Continue for 13Km through 3 sets of robots, at 4th robot
        turn left toward Vorsterkroon. Proceed to T-junction then turn right.
        Proceed through robot, then at next robot slip left into Northern Rd.
        Pass Vodacom Tower on your left then turn right into 4th Ave.
        Club is on the left.
      </p>
      <p>
        NORTHMEAD BC, 8th Avenue, Northmead, Benoni
        N12 - Take route for Benoni C.C. i.e. Snake Rd/Brakpan exit. Turn
        left and at robot take slip road left. Continue along 5th Ave, turn
        right into 4th St. then left into 8th Ave. Entrance to club on the left.
      </p>
      <p>
        PRIMROSE BOWLING CLUB, 4 Bluebell Avenue, Primrose.
        From R22/24 turn south at Edenvale/Germiston exit. Proceed up
        A.G.de Witt Drive to top of hill. Proceed to 2nd robot at junction of
        Churchill and Shamrock. Cross Churchill and take first left into
        Bluebell Ave. Club is on right.
      </p>
      <p>
        READING COUNTRY CLUB
        Proceed as for Alberton B.C. At first robot in Voortrekker Rd, turn
        right into Ring Road West. At the Church with the high steeple,
        turn right into Fore St. Club is further on, on the right.
      </p>
      <p>
        SPRINGS MUNICIPAL BC
        Take N12 to Witbank, exit at the Daveyton/Springs off-ramp. At the
        stop sign turn right. Proceed along Kingsway which becomes Paul
        Kruger Highway. Through 7 sets of robots and at the 8th robot slip
        left into 4th Ave (R29) (watch the speed limit). At 2nd robot turn left
        into 4th St, then first right into 5th Ave. Bowling club is on the right.
        Alternative route: Take the N17 Toll road, exit at Tonk Meter Way.
        At T-junction turn right into Springs West Rd. At the railway station
        take slip road to the left to top of bridge. Turn left into Plantation
        Rd. Proceed across robot at South Main Rd, cross railway line,
        pass Springs Town Bowling Club on your left. Plantation Rd
        becomes 3rd Street, cross robot at 4th Ave, then first left into 5th
        Ave. Club is on the left
      </p>
      <p>
        SPRINGS OLD BOYS BC, Gilgil St., Pollack Park, Springs
        From N12 (Witbank Highway) proceed past Benoni. Take the
        Springs/Daveyton turn-off. Turn right over Expressway, pass
        Modderbee Prison and continue into the industrial area (10 robots).
        Turn right at the first road after 10th robot, over the bridge. Cross
        over Ring Road West, turn right behind the sub-station and first left
        into Gilgil St. Club is on the right.
        Alternative route: From N17 take the Tonk Meter turn-off, turn right
        and continue towards Springs. Pass Pollack Park Sport Club on the
        left. At the robot turn left at Bapsfontein/Brakpan signboard, turn
        left into Tobruk Ave. Turn right into Sidi Rezegh St. and left into
        Gilgil St. Club is on the right.
      </p>
      <p>
        SPRINGS TOWN BC, Plantation Rd, Springs.
        From N12 (Witbank Highway) take Springs/Daveyton turn-off. Turn
        right over Expressway, past Modderbee to 7th robot (Fourth Ave,
        Gelduld). Turn left and continue to 3rd robot. Turn right into Third
        Street which becomes Plantation Rd. Club is on the right.
        Alternative route: From N17 take Tonk Meter off-ramp and turn
        right. Continue towards Springs. At the robot turn right into Springs
        West Rd. and take slip road onto overhead bridge. Turn left and
        continue past first robot, over level crossing to second street, turn
        left and club is on the right.
      </p>
      <p>
        SPRINGSWOOD BC
        N12 to Witbank, take Springs/Daveyton exit and turn right over
        highway. Continue along this road, past Springsgate Shopping
        Centre, cemetary and market on left. At next robot turn left and
        proceed to next robot. Turn right into Plantation Rd and proceed to
        top of bridge. Turn left past Parkland Clinic and at next robot turn
        right. Follow road until the bend and club is on the left.
        Alternative route: From N17 take Tonk Meter turn-off and turn right
        at the stop. Continue to Springs. At robot turn right into Springs
        West Rd. Continue under overhead bridge, past Springs Parkland
        Clinic to robot. Turn right into Gillespie Rd. Follow road until the
        bend and club is on the left.
      </p>
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
                ${renderedDirections}
              </div>
            </div>
          </div>
          <div class="column "></div>
        </div>
      </div>
    </section>
  `
});
