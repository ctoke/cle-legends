// ─────────────────────────────────────────────────────────────────────────────
// Legends of The Land — Puzzle Data
// ─────────────────────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update puzzles.
// The game rotates through puzzles in order by date — puzzle #1 on day 1,
// #2 on day 2, and so on, looping back to the start when it runs out.
//
// Each puzzle requires these fields:
//   id          – unique number (used in the share card)
//   answer      – ALL CAPS, spaces between words (e.g. "JIM BROWN")
//   category    – one of: "Player", "Coach", "Venue", "Moment"
//   team        – "Browns", "Cavaliers", "Guardians", "Cleveland" (for venues/moments)
//   era         – display string (e.g. "1957–1965")
//   difficulty  – "easy", "medium", or "hard"
//   autoclues   – array of exactly 3 strings (revealed automatically as game progresses)
//   optionalClues – array of exactly 3 objects: { label, value }
//   context     – 2–3 sentence story shown on the result screen
// ─────────────────────────────────────────────────────────────────────────────

var PUZZLES = [

  // ── BROWNS ──────────────────────────────────────────────────────────────────

  {
    id: 1,
    answer: "JIM BROWN",
    category: "Player", team: "Browns", era: "1957–1965", difficulty: "easy",
    autoclues: [
      "Played his entire career before 1970.",
      "Spent every NFL season with one franchise — right here in Cleveland.",
      "Many consider him the greatest running back the game has ever seen."
    ],
    optionalClues: [
      { label: "Position", value: "Running Back" },
      { label: "Era", value: "Late 1950s – mid 1960s" },
      { label: "Last name starts with", value: "B" }
    ],
    context: "Jim Brown starred for Cleveland from 1957 to 1965. A nine-time Pro Bowler and three-time NFL MVP, he led the league in rushing in eight of his nine seasons and helped deliver the 1964 championship before retiring at his absolute peak."
  },

  {
    id: 2,
    answer: "BERNIE KOSAR",
    category: "Player", team: "Browns", era: "1985–1993", difficulty: "medium",
    autoclues: [
      "Born in northeast Ohio — coming here was never an accident.",
      "Famous for an unconventional delivery that coaches couldn't teach or fix.",
      "Led Cleveland to three AFC Championship Games in the late 1980s."
    ],
    optionalClues: [
      { label: "Position", value: "Quarterback" },
      { label: "Era", value: "1985 – 1993" },
      { label: "Last name starts with", value: "K" }
    ],
    context: "Bernie Kosar maneuvered the supplemental draft to land exactly where he wanted — Cleveland. Famous for a sidearm delivery and a football IQ few could match, he led three AFC title runs before being released mid-season in 1993 in a move that still stings."
  },

  {
    id: 3,
    answer: "BILL BELICHICK",
    category: "Coach", team: "Browns", era: "1991–1995", difficulty: "easy",
    autoclues: [
      "His defensive philosophy was already ahead of its time in Cleveland.",
      "Built a legitimate contender here before ownership made it impossible.",
      "Was fired just days before the franchise announced it was leaving town."
    ],
    optionalClues: [
      { label: "Role", value: "Head Coach" },
      { label: "Era", value: "1991 – 1995" },
      { label: "Last name starts with", value: "B" }
    ],
    context: "Bill Belichick went 36–44 in Cleveland but was building something real — drafting well and installing a formidable defense. He was let go by the owner days before the franchise relocation to Baltimore was announced. He went on to win six Super Bowls elsewhere. Cleveland fans have complicated feelings."
  },

  {
    id: 4,
    answer: "EARNEST BYNER",
    category: "Player", team: "Browns", era: "1984–1988", difficulty: "medium",
    autoclues: [
      "A versatile, relentless presence in Cleveland's backfield for years.",
      "Formed one of the most productive running back duos in the AFC.",
      "His most painful moment came on the biggest stage — and it was not the whole story."
    ],
    optionalClues: [
      { label: "Position", value: "Running Back" },
      { label: "Era", value: "Mid–late 1980s" },
      { label: "Last name starts with", value: "B" }
    ],
    context: "Earnest Byner gave Cleveland everything he had. 'The Fumble' near the goal line in the 1988 AFC Championship overshadowed a brilliant career, but true fans remember the whole player: tough, reliable, and willing to carry the offense on big nights."
  },

  {
    id: 5,
    answer: "MYLES GARRETT",
    category: "Player", team: "Browns", era: "2017–present", difficulty: "easy",
    autoclues: [
      "The current face of the Cleveland defense.",
      "Was the first overall pick in his draft class.",
      "Named the NFL's top defensive player in a recent season."
    ],
    optionalClues: [
      { label: "Position", value: "Defensive End" },
      { label: "Era", value: "2017 – present" },
      { label: "Last name starts with", value: "G" }
    ],
    context: "Myles Garrett has established himself as one of the most dominant defenders in the NFL. The No. 1 overall pick in 2017, he has recorded double-digit sacks in multiple seasons and was named NFL Defensive Player of the Year — a consistent and imposing force on Cleveland's defense."
  },

  {
    id: 6,
    answer: "LOU GROZA",
    category: "Player", team: "Browns", era: "1946–1967", difficulty: "hard",
    autoclues: [
      "Was still performing for Cleveland well into his 40s.",
      "His nickname told you exactly what made him special.",
      "A cornerstone of the early Cleveland dynasty under Paul Brown."
    ],
    optionalClues: [
      { label: "Position", value: "Offensive Tackle / Kicker" },
      { label: "Era", value: "1946 – 1967" },
      { label: "Last name starts with", value: "G" }
    ],
    context: "Lou 'The Toe' Groza played 21 seasons in Cleveland — dominant as a lineman and the most reliable kicker of his era. He helped the franchise win four AAFC titles and the 1964 NFL Championship, and was inducted into the Pro Football Hall of Fame in 1974."
  },

  {
    id: 7,
    answer: "FRANK RYAN",
    category: "Player", team: "Browns", era: "1962–1968", difficulty: "hard",
    autoclues: [
      "Led Cleveland to its last championship.",
      "Was completing a doctoral thesis in mathematics while preparing for the postseason.",
      "Handed one of the heavily favored teams in title-game history its most shocking loss."
    ],
    optionalClues: [
      { label: "Position", value: "Quarterback" },
      { label: "Era", value: "Early–mid 1960s" },
      { label: "Last name starts with", value: "R" }
    ],
    context: "Frank Ryan quarterbacked Cleveland to the 1964 NFL Championship with a 27–0 shutout of the Baltimore Colts, throwing three touchdown passes. Off the field, he was finishing a PhD in mathematics at Rice University — one of the most unusual profiles in franchise history."
  },

  // ── CAVALIERS ───────────────────────────────────────────────────────────────

  {
    id: 8,
    answer: "LEBRON JAMES",
    category: "Player", team: "Cavaliers", era: "2003–2010, 2014–2018", difficulty: "easy",
    autoclues: [
      "Grew up less than an hour from where he played his first game.",
      "Left — then came back, and made it count.",
      "Delivered the most memorable championship moment in Cleveland sports history."
    ],
    optionalClues: [
      { label: "Position", value: "Forward" },
      { label: "Era", value: "2003–2010, 2014–2018" },
      { label: "Last name starts with", value: "J" }
    ],
    context: "LeBron James arrived in Cleveland as the hometown kid in 2003, left for Miami in 2010, and returned in 2014 with a promise. In 2016, he delivered — leading a 3–1 comeback in the NBA Finals to give Cleveland its first major professional sports title in 52 years."
  },

  {
    id: 9,
    answer: "MARK PRICE",
    category: "Player", team: "Cavaliers", era: "1986–1995", difficulty: "medium",
    autoclues: [
      "One of the most accurate shooters the franchise has ever had.",
      "Ran the point guard position with poise during a golden era in Cleveland.",
      "A four-time All-Star who helped define the Cavaliers' identity in the late 1980s."
    ],
    optionalClues: [
      { label: "Position", value: "Point Guard" },
      { label: "Era", value: "Late 1980s – mid 1990s" },
      { label: "Last name starts with", value: "P" }
    ],
    context: "Mark Price was the engine of Cleveland's excellent late-1980s teams. A four-time All-Star and one of the purest shooters and free-throw specialists in NBA history, he ran the offense alongside Brad Daugherty and Larry Nance to make the Cavaliers consistent Eastern Conference contenders."
  },

  {
    id: 10,
    answer: "BRAD DAUGHERTY",
    category: "Player", team: "Cavaliers", era: "1986–1994", difficulty: "hard",
    autoclues: [
      "Selected first overall — and spent his entire career in Cleveland.",
      "Was the anchor of one of the most underappreciated Cavaliers rosters ever.",
      "Wore number 43, which the franchise retired."
    ],
    optionalClues: [
      { label: "Position", value: "Center" },
      { label: "Era", value: "Late 1980s – early 1990s" },
      { label: "Last name starts with", value: "D" }
    ],
    context: "Brad Daugherty was the No. 1 overall pick in 1986 and spent every NBA season in Cleveland. A five-time All-Star and one of the most skilled big men of his era, his career was cut short by a back injury in 1994. The Cavaliers retired his No. 43."
  },

  {
    id: 11,
    answer: "ZYDRUNAS ILGAUSKAS",
    category: "Player", team: "Cavaliers", era: "1996–2010", difficulty: "medium",
    autoclues: [
      "Came from Europe and became one of Cleveland's most beloved players.",
      "Overcame serious injury setbacks to become a two-time All-Star.",
      "Was LeBron's teammate during both of his stints with the franchise."
    ],
    optionalClues: [
      { label: "Position", value: "Center" },
      { label: "Era", value: "Late 1990s – 2010" },
      { label: "Last name starts with", value: "I" }
    ],
    context: "Zydrunas Ilgauskas came to Cleveland from Lithuania and endured multiple serious foot injuries before blossoming into a two-time All-Star. His toughness, loyalty, and 13 seasons with the franchise made him one of the most respected figures in Cavaliers history. His No. 11 is retired."
  },

  {
    id: 12,
    answer: "LARRY NANCE",
    category: "Player", team: "Cavaliers", era: "1988–1994", difficulty: "hard",
    autoclues: [
      "Once won the NBA's slam dunk competition before arriving in Cleveland.",
      "A versatile forward who anchored the frontcourt during the Cavaliers' best years.",
      "His son later wore the same jersey number for the same franchise."
    ],
    optionalClues: [
      { label: "Position", value: "Power Forward" },
      { label: "Era", value: "Late 1980s – early 1990s" },
      { label: "Last name starts with", value: "N" }
    ],
    context: "Larry Nance was a cornerstone of Cleveland's excellent late-1980s teams, pairing with Mark Price and Brad Daugherty to form one of the East's most formidable rosters. His son, Larry Nance Jr., later played for the Cavaliers — wearing No. 22 in his father's honor."
  },

  {
    id: 13,
    answer: "AUSTIN CARR",
    category: "Player", team: "Cavaliers", era: "1971–1981", difficulty: "hard",
    autoclues: [
      "Was the first ever pick in Cavaliers franchise history.",
      "Scored in bunches during the early years of the team.",
      "Later became the voice of the franchise as a broadcaster for decades."
    ],
    optionalClues: [
      { label: "Position", value: "Guard" },
      { label: "Era", value: "Early 1970s – 1981" },
      { label: "Last name starts with", value: "C" }
    ],
    context: "Austin Carr was selected with the very first pick in Cavaliers franchise history in 1971. A gifted scorer in the early years, he later became one of the most recognizable voices in Cleveland sports as the team's television color commentator for over 30 years. His No. 34 is retired."
  },

  // ── GUARDIANS ───────────────────────────────────────────────────────────────

  {
    id: 14,
    answer: "BOB FELLER",
    category: "Player", team: "Guardians", era: "1936–1956", difficulty: "easy",
    autoclues: [
      "Came straight from an Iowa farm to a major league mound.",
      "Spent his entire career in Cleveland.",
      "Was one of the most dominant strikeout pitchers of his generation."
    ],
    optionalClues: [
      { label: "Position", value: "Starting Pitcher" },
      { label: "Era", value: "Late 1930s – 1950s" },
      { label: "Last name starts with", value: "F" }
    ],
    context: "Bob Feller signed with Cleveland at 17 and never played for anyone else. Known as 'Rapid Robert,' he threw three no-hitters and 12 one-hitters, led the AL in wins six times, and was elected to the Baseball Hall of Fame in 1962. He lost nearly four prime seasons to World War II military service."
  },

  {
    id: 15,
    answer: "LARRY DOBY",
    category: "Player", team: "Guardians", era: "1947–1955", difficulty: "medium",
    autoclues: [
      "Made history in Cleveland just eleven weeks after someone made history in Brooklyn.",
      "Was a key contributor to a World Series championship in Cleveland.",
      "His legacy in baseball is profound — and for years, too overlooked."
    ],
    optionalClues: [
      { label: "Position", value: "Center Fielder" },
      { label: "Era", value: "Late 1940s – mid 1950s" },
      { label: "Last name starts with", value: "D" }
    ],
    context: "Larry Doby broke the American League color barrier with Cleveland in July 1947, just 11 weeks after Jackie Robinson integrated the National League. He went on to become a two-time All-Star and a key part of the 1948 World Series championship team. He was inducted into the Baseball Hall of Fame in 1998."
  },

  {
    id: 16,
    answer: "KENNY LOFTON",
    category: "Player", team: "Guardians", era: "1992–1996, 1998–2001", difficulty: "medium",
    autoclues: [
      "One of the most exciting leadoff hitters Cleveland has ever had.",
      "Was a fixture atop the lineup during the great teams of the 1990s.",
      "Won multiple consecutive Gold Glove awards in center field."
    ],
    optionalClues: [
      { label: "Position", value: "Center Fielder" },
      { label: "Era", value: "1990s – early 2000s" },
      { label: "Last name starts with", value: "L" }
    ],
    context: "Kenny Lofton was the spark plug atop Cleveland's potent 1990s lineup, winning four straight Gold Gloves and using his speed to change games in every dimension. He played a central role in back-to-back World Series runs in 1995 and 1997 and remains one of the most beloved players of that era."
  },

  {
    id: 17,
    answer: "JIM THOME",
    category: "Player", team: "Guardians", era: "1991–2002", difficulty: "easy",
    autoclues: [
      "A power-hitting third baseman who became a Cleveland icon.",
      "Drove in runs by the hundreds during the franchise's most successful decade.",
      "Eventually inducted into the Baseball Hall of Fame."
    ],
    optionalClues: [
      { label: "Position", value: "First Baseman / Third Baseman" },
      { label: "Era", value: "1990s – early 2000s" },
      { label: "Last name starts with", value: "T" }
    ],
    context: "Jim Thome was the heart of Cleveland's 1990s lineup — a towering left-handed slugger with a leg kick and a signature point toward the pitcher before each at-bat. He hit 334 home runs in a Cleveland uniform and is the franchise's all-time home run leader. He was inducted into the Hall of Fame in 2018."
  },

  {
    id: 18,
    answer: "SANDY ALOMAR",
    category: "Player", team: "Guardians", era: "1990–2000", difficulty: "hard",
    autoclues: [
      "A catcher known as much for his leadership as his arm behind the plate.",
      "Had one of the most memorable moments in the 1997 All-Star Game.",
      "Spent a decade as one of Cleveland's most popular players."
    ],
    optionalClues: [
      { label: "Position", value: "Catcher" },
      { label: "Era", value: "1990 – 2000" },
      { label: "Last name starts with", value: "A" }
    ],
    context: "Sandy Alomar Jr. was the backbone of Cleveland's 1990s catching corps. A six-time All-Star, he hit the tying home run off Mariano Rivera in the 1997 All-Star Game at Jacobs Field, earning MVP honors. His decade in Cleveland spanned the franchise's most competitive and celebrated modern era."
  },

  {
    id: 19,
    answer: "BOB LEMON",
    category: "Player", team: "Guardians", era: "1941–1958", difficulty: "hard",
    autoclues: [
      "Came to Cleveland as a position player and reinvented himself on the mound.",
      "Was one of the best pitchers in the American League during the early 1950s.",
      "Helped Cleveland win the 1948 World Series and later managed in the major leagues."
    ],
    optionalClues: [
      { label: "Position", value: "Starting Pitcher" },
      { label: "Era", value: "Late 1940s – mid 1950s" },
      { label: "Last name starts with", value: "L" }
    ],
    context: "Bob Lemon arrived in Cleveland as an infielder but found his calling on the mound. He won 207 games over his career, went 7-time All-Star, and was central to the 1948 World Series title and the record-setting 1954 AL pennant team. He was inducted into the Baseball Hall of Fame in 1976."
  },

  // ── VENUES ──────────────────────────────────────────────────────────────────

  {
    id: 20,
    answer: "MUNICIPAL STADIUM",
    category: "Venue", team: "Cleveland", era: "1931–1996", difficulty: "medium",
    autoclues: [
      "Sat on the lakefront and held over 70,000 fans on a full house.",
      "Hosted both baseball and football for decades — sometimes in brutal lake-effect conditions.",
      "Was demolished in 1996 after both of its main tenants found new homes."
    ],
    optionalClues: [
      { label: "Location", value: "Lakefront, downtown Cleveland" },
      { label: "Era", value: "1930s – 1996" },
      { label: "First word", value: "Municipal" }
    ],
    context: "Cleveland Municipal Stadium was one of the largest venues in American sports history, with a capacity of over 74,000. Known as 'The Mistake by the Lake' to its detractors, it hosted decades of Browns football and baseball memories — from Bob Feller's no-hitters to Monday Night Football classics — before being demolished in 1996."
  },

  {
    id: 21,
    answer: "PROGRESSIVE FIELD",
    category: "Venue", team: "Cleveland", era: "1994–present", difficulty: "easy",
    autoclues: [
      "Opened in 1994 and helped rejuvenate the downtown sports district.",
      "Has gone by a few different names over the years as sponsors have changed.",
      "Widely regarded as one of the best ballparks in the country."
    ],
    optionalClues: [
      { label: "Sport", value: "Baseball" },
      { label: "Location", value: "Downtown Cleveland" },
      { label: "First word", value: "Progressive" }
    ],
    context: "Progressive Field opened in 1994 and immediately set a new standard for downtown ballparks. Originally known as Jacobs Field, it fueled a sellout streak of 455 consecutive home games in the 1990s and has since been renovated multiple times. It remains one of the most admired venues in Major League Baseball."
  },

  {
    id: 22,
    answer: "RICHFIELD COLISEUM",
    category: "Venue", team: "Cleveland", era: "1974–1994", difficulty: "hard",
    autoclues: [
      "Sat between Akron and Cleveland — technically in neither city.",
      "Hosted the Cavaliers' most magical regular season in franchise history.",
      "Was torn down in 1999 after standing empty for years."
    ],
    optionalClues: [
      { label: "Sport", value: "Basketball" },
      { label: "Location", value: "Richfield Township, Summit County" },
      { label: "First word", value: "Richfield" }
    ],
    context: "The Richfield Coliseum opened in 1974 and was home to the Cavaliers' beloved 1975-76 'Miracle of Richfield' season. Located in a rural stretch between Cleveland and Akron, it had a unique identity all its own. After the Cavaliers moved to Gund Arena downtown in 1994, it sat empty before being demolished in 1999."
  },

  {
    id: 23,
    answer: "JACOBS FIELD",
    category: "Venue", team: "Cleveland", era: "1994–2008", difficulty: "medium",
    autoclues: [
      "This name belongs to the opening chapter of the ballpark's history.",
      "Under this name, the team went on its historic sellout run in the 1990s.",
      "Named for the brothers who owned the franchise before it was sold."
    ],
    optionalClues: [
      { label: "Sport", value: "Baseball" },
      { label: "Era", value: "1994 – 2008" },
      { label: "First word", value: "Jacobs" }
    ],
    context: "Jacobs Field was the original name of Cleveland's downtown ballpark, named after then-owners Richard and David Jacobs. Under that name, the team set a then-MLB record with 455 consecutive sellouts between 1995 and 2001 — a stretch that coincided with the franchise's most competitive modern era."
  },

  // ── MOMENTS ─────────────────────────────────────────────────────────────────

  {
    id: 24,
    answer: "KARDIAC KIDS",
    category: "Moment", team: "Browns", era: "1979–1980", difficulty: "medium",
    autoclues: [
      "A nickname born from the anxiety of watching too many close finishes.",
      "These Cleveland teams specialized in coming back — and nearly giving fans heart attacks.",
      "The 1980 season ended with a playoff appearance built on late-game drama."
    ],
    optionalClues: [
      { label: "Sport", value: "Football" },
      { label: "Era", value: "1979 – 1980 seasons" },
      { label: "First word", value: "Kardiac" }
    ],
    context: "The 'Kardiac Kids' nickname defined the Browns of 1979 and 1980 — teams that won games in the final moments with such frequency that the phrase became shorthand for Cleveland football drama. Quarterback Brian Sipe was the engine, earning NFL MVP honors in 1980 before a heartbreaking playoff interception ended the run."
  },

  {
    id: 25,
    answer: "THE SHOT",
    category: "Moment", team: "Cavaliers", era: "2007", difficulty: "easy",
    autoclues: [
      "It happened in the final seconds of a playoff game.",
      "It silenced a building full of Detroit fans.",
      "No other explanation was needed — just two words."
    ],
    optionalClues: [
      { label: "Sport", value: "Basketball" },
      { label: "Era", value: "2007 playoffs" },
      { label: "First word", value: "The" }
    ],
    context: "In Game 5 of the 2007 Eastern Conference Semifinals, LeBron James hit a buzzer-beating jumper over multiple defenders to defeat the Detroit Pistons. The image of LeBron pumping his fist as he ran back downcourt — in an enemy arena — became one of the iconic moments in Cleveland sports history."
  },

  {
    id: 26,
    answer: "THE FUMBLE",
    category: "Moment", team: "Browns", era: "1988", difficulty: "medium",
    autoclues: [
      "It happened with Cleveland inches from the Super Bowl.",
      "The ball never touched the ground — but the season ended right there.",
      "Two words that still sting in northeast Ohio."
    ],
    optionalClues: [
      { label: "Sport", value: "Football" },
      { label: "Era", value: "January 1988" },
      { label: "First word", value: "The" }
    ],
    context: "In the 1988 AFC Championship Game against Denver, Cleveland running back Earnest Byner took a handoff inside the 10-yard line — seemingly about to score the tying touchdown — when he was stripped by Jeremiah Castille. The Browns lost 38–33. It remains one of the most heartbreaking plays in franchise history."
  },

  {
    id: 27,
    answer: "THE DRIVE",
    category: "Moment", team: "Browns", era: "1987", difficulty: "medium",
    autoclues: [
      "It started at Denver's own two-yard line with five minutes left.",
      "Cleveland had the lead — then watched ninety-eight yards of agony.",
      "Two words shared by the same franchise, one year apart."
    ],
    optionalClues: [
      { label: "Sport", value: "Football" },
      { label: "Era", value: "January 1987" },
      { label: "First word", value: "The" }
    ],
    context: "In the 1987 AFC Championship Game, John Elway led the Denver Broncos on a 98-yard touchdown drive in the final minutes to tie the game, then won in overtime. Cleveland had been minutes from the Super Bowl. The following year, 'The Fumble' completed one of the cruelest back-to-back collapses in NFL history."
  },

  {
    id: 28,
    answer: "THE BLOCK",
    category: "Moment", team: "Cavaliers", era: "2016", difficulty: "easy",
    autoclues: [
      "It happened in the final minute of the most important game Cleveland had played in decades.",
      "It preserved a lead — and ultimately a championship.",
      "The image became a poster. The city has never forgotten it."
    ],
    optionalClues: [
      { label: "Sport", value: "Basketball" },
      { label: "Era", value: "June 2016" },
      { label: "First word", value: "The" }
    ],
    context: "With 1:50 left in Game 7 of the 2016 NBA Finals, LeBron James chased down a Iguodala layup attempt from behind and pinned it against the glass. The play preserved a one-point lead that Cleveland never relinquished. The championship that followed ended a 52-year title drought for Cleveland professional sports."
  }

];
