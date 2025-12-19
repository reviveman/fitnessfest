// data/events.ts
export type Sponsor = {
  id: string
  name: string
  logo: string
  tier: string // Gold, Silver, Bronze, etc.
  description: string
  website: string
  location: string
  industry: string[]
  yearsFunding?: number
  employeeCount?: number
  sponsorshipAmount?: string
  benefits?: string[]
  color: string
}

export type Event = {
  id: string
  title: string
  location: string
  date: string
  time: string
  period?: string
  timeRange?: string
  description: string
  fullDescription?: string
  image: string
  speakers?: string[]
  speakerIds?: string[]
  sponsors?: string[]
  sponsorIds?: string[]
  price?: string | number
  featured?: boolean
  startDate?: string
  endDate?: string
}

// Events data
// data/events.ts - Updated with FULL descriptions

export const events: Event[] = [
  /* -------------------------------------------------------------------------- */
  /*                               DAY 1 EVENTS                                 */
  /* -------------------------------------------------------------------------- */

  {
    id: "17",
    title: "Strength Endurance Circuit – Qualifiers",
    description: "Test of Power • Speed • Stamina • Mental Grit",
    fullDescription: `
<h2>Strength Endurance Circuit – Qualifiers</h2>
<p>The Strength Endurance Circuit – Qualifiers is a high-intensity, multi-station challenge designed to evaluate an athlete's overall fitness capacity across strength, endurance, agility, and cardiovascular performance. Competitors must complete a structured circuit involving functional strength movements within a timed format, with scoring based on total reps, time efficiency, and technique quality. Only top performers advance to the Strength Endurance Circuit – Finals on Day 2.</p>

<h3>1. Competition Format</h3>
<ul>
  <li>This is an individual competition</li>
  <li>Athletes complete a 6-station strength-endurance circuit</li>
  <li>Total workout time: 12 minutes (10 minutes active + 2 minutes transitions)</li>
  <li>Each station: 1 minute, with 20 seconds transition between stations</li>
  <li>Movements include: Kettlebell Swings, Burpee Over Marker, Goblet Squats, Battle Rope Slams, Push Press (Dumbbells), Rowing Machine (Calories)</li>
  <li>Athletes earn points based on: Total reps completed, Calories rowed, Penalty-free technique</li>
</ul>

<h3>2. Categories</h3>
<p><strong>Men:</strong> Under 70 kg, 70–85 kg, Above 85 kg</p>
<p><strong>Women:</strong> Under 55 kg, 55–70 kg, Above 70 kg</p>

<h3>3. Equipment Standards</h3>
<ul>
  <li><strong>Kettlebells:</strong> Men: 20kg, Women: 12kg</li>
  <li><strong>Dumbbells (Push Press):</strong> Men: 15kg × 2, Women: 7.5–10kg × 2</li>
  <li><strong>Battle Ropes:</strong> 38–50 mm diameter</li>
  <li><strong>Rowing Machine:</strong> Concept2 or equivalent (calories mode)</li>
</ul>

<h3>4. Participation Rules</h3>
<ol>
  <li>All participants must register online or on-site before the event</li>
  <li>Reporting time: 30 minutes before scheduled heat</li>
  <li>Mandatory safety briefing before each heat</li>
  <li>Gloves, chalk, knee sleeves, belts allowed</li>
  <li>No straps allowed for rowing or kettlebell swings</li>
  <li>Athletes must adhere to movement standards described by judges</li>
  <li>Unsportsmanlike behavior may lead to immediate disqualification</li>
</ol>

<h3>5. Movement Standards</h3>
<ol>
  <li><strong>Kettlebell Swings:</strong> KB must travel from below hips to overhead (American swing), Arms fully extended at top, No dropping</li>
  <li><strong>Burpee Over Marker:</strong> Chest touches ground, Two-foot jump or step-over allowed</li>
  <li><strong>Goblet Squats:</strong> KB held at chest level, Hip crease must go below knee level, Full extension at top</li>
  <li><strong>Battle Rope Slams:</strong> Both hands must move rope, Full amplitude waves required</li>
  <li><strong>Dumbbell Push Press:</strong> Dip + drive movement mandatory, Full lockout overhead</li>
  <li><strong>Rowing Machine:</strong> Calories count only during active station</li>
</ol>

<h3>6. Penalties</h3>
<ul>
  <li>No-rep for incomplete movement standards</li>
  <li>5-rep deduction for early start or late finish</li>
  <li>10-rep deduction for intentionally dropping equipment</li>
  <li><strong>Disqualification for:</strong> Unsafe behavior, Harsh language or misconduct, Not following judge instructions</li>
</ul>

<h3>7. Scoring System</h3>
<ul>
  <li>Each rep = 1 point</li>
  <li>Each calorie on rowing = 2 points</li>
  <li>Final score = Total Points Across All Stations</li>
  <li>Leaderboard determined by: Highest points → fastest transition times → sudden-death 1-minute Burpees Battle</li>
</ul>

<h3>8. Winning Criteria</h3>
<p><strong>Qualification to Finals:</strong> Top 10 men and 10 women overall OR Top 5 athletes per weight category</p>
<p><strong>Winners Selected Based On:</strong> Highest total points, Zero or minimal penalties, Consistent technique across stations, Superior endurance during rowing</p>

<h3>9. Safety Guidelines</h3>
<ul>
  <li>Athletes must warm up in designated zone</li>
  <li>Hydration stations available</li>
  <li>Medical team present at venue</li>
  <li>Anyone showing signs of injury or exhaustion will be stopped by officials</li>
</ul>

<h3>10. Awards & Recognition</h3>
<p>🏅 Top 3 Men & Top 3 Women receive: Trophy + Medal, Certificate, Goodie bag, Automatic entry to next year's festival finals</p>
`,
    date: "March 28, 2026",
    time: "11",
    period: "AM",
    timeRange: "11:30 AM - 1:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/four.jpg",
    featured: false,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["PowerGear", "FitLife Nutrition"],
    sponsorIds: ["1", "2"],
  },

  // FUNCTIONAL FITNESS CHALLENGE - ELIMINATIONS (id: 13)
  {
    id: "13",
    title: "Functional Fitness Challenge – Eliminations",
    description: "Test real-world strength, conditioning, endurance, and agility",
    fullDescription: `
<h2>Functional Fitness Challenge – Eliminations</h2>
<p>The Functional Fitness Challenge is one of the most exciting and intense competitions at the Bengaluru Fitness Festival, designed to test real-world strength, conditioning, endurance, agility, and overall athletic performance. The elimination round separates the top athletes from the rest through a series of fast-paced, high-intensity tasks inspired by functional training, CrossFit-style movements, and tactical fitness drills.</p>

<h3>📌 Competition Format (Elimination Round)</h3>
<p>The elimination round consists of a timed circuit with standardized movements. Athletes must complete all tasks in the shortest time, maintaining proper form to avoid penalties.</p>
<p><strong>Round Structure</strong></p>
<ul>
  <li>One athlete competes at a time (or two lanes head-to-head based on logistics)</li>
  <li>A certified judge monitors technique, repetitions, and penalties</li>
  <li>Athletes must complete all stations to qualify</li>
  <li>Top scorers advance to the Finals on Day 2</li>
</ul>

<p><strong>Typical Station Line-up (Example WOD)</strong></p>
<ol>
  <li>50m Sprint + Sandbag Carry (20kg Women / 30kg Men)</li>
  <li>Burpee Over Box / Burpee Broad Jumps</li>
  <li>Kettlebell Swings (16kg Women / 24kg Men)</li>
  <li>Wall Balls (6kg Women / 9kg Men)</li>
  <li>Sled Push or Deadball Carry</li>
  <li>Shuttle Run / Finisher Dash</li>
</ol>
<p>➤ Exact workout will be announced 7 days before the event.</p>

<h3>🧩 Participation Rules & Regulations</h3>
<p><strong>1. Registration & Eligibility</strong></p>
<ul>
  <li>Open to Men and Women aged 18+</li>
  <li>Participants must sign the waiver & medical declaration</li>
  <li>Government ID required during check-in</li>
  <li>Entry closes once all slots are filled (limited availability)</li>
</ul>

<p><strong>2. Mandatory Gear</strong></p>
<ul>
  <li>Sports shoes must be worn (no barefoot)</li>
  <li>Gloves, knee sleeves, wrist wraps optional</li>
  <li>No chalk beyond designated chalk zones</li>
  <li>No external support gear such as powerlifting suits</li>
</ul>

<p><strong>3. Movement Standards</strong></p>
<ul>
  <li>All movements must follow standard functional fitness guidelines</li>
  <li>Judges may invalidate reps if: Incomplete range of motion, Improper form, Safety violations</li>
  <li>Athletes must listen to judge commands at all times</li>
</ul>

<p><strong>4. Penalties</strong></p>
<ul>
  <li>+5 seconds for each invalidated rep (max 5 per movement)</li>
  <li>+10 seconds for skipping a movement standard (e.g., box height, no full extension)</li>
  <li><strong>Disqualification for:</strong> Skipping a station, Unsafe conduct, Misbehaviour with judges or participants</li>
</ul>

<p><strong>5. Safety Protocol</strong></p>
<ul>
  <li>Warm-up area provided</li>
  <li>Hydration stalls on standby</li>
  <li>Medical team available at the venue</li>
  <li>Judges may stop any athlete showing signs of dehydration, dizziness, or injury</li>
</ul>

<h3>🏆 Winning & Scoring Criteria – Eliminations</h3>
<p>The elimination round is purely time-based.</p>
<p><strong>Score Calculation</strong><br/>Each athlete receives: <strong>Total Time = Completion Time + Penalties</strong></p>
<p><strong>Advancement to Finals</strong><br/>Top 10 Men & Top 10 Women advance</p>
<p><strong>Tie-Break Logic</strong></p>
<ol>
  <li>Fastest final station performance wins</li>
  <li>If still tied – head-to-head tie-break sprint</li>
</ol>

<h3>🧾 Code of Conduct</h3>
<ul>
  <li>Respect judges, volunteers, and other athletes</li>
  <li>Follow event staff instructions at all times</li>
  <li>No external coaching allowed near competition lanes</li>
  <li>Unsportsmanlike behaviour may result in removal from the event</li>
</ul>

<h3>🎯 Purpose of the Competition</h3>
<p>The Functional Fitness Challenge aims to:</p>
<ul>
  <li>Promote real-world practical fitness</li>
  <li>Encourage competitive participation among enthusiasts</li>
  <li>Create a platform for emerging fitness athletes</li>
  <li>Highlight Bangalore's growing functional training community</li>
</ul>
`,
    date: "March 28, 2026",
    time: "2",
    period: "PM",
    timeRange: "2:00 PM - 4:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/eight.jpg",
    featured: true,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  // DEADLIFT CHAMPIONSHIP - HEATS (id: 14)
  {
    id: "14",
    title: "Deadlift Championship – Heats",
    description: "Raw Strength • Perfect Technique • Maximum Lift",
    fullDescription: `
<h2>🏋️‍♂️ Deadlift Championship – Heats</h2>
<p>The Deadlift Championship at the Bengaluru Fitness Festival is a test of pure strength, raw power, and flawless lifting technique. This competition brings together powerlifters, strength athletes, CrossFitters, strongmen, and fitness enthusiasts who want to prove their dominance in one of the most iconic strength movements.</p>

<h3>🔥 Competition Overview</h3>
<p>Athletes will compete to lift the maximum weight possible in a rising-bar format. With each successful lift, the weight increases until only the strongest remain.</p>
<ul>
  <li>Men's Open Category (multiple weight classes optional)</li>
  <li>Women's Open Category</li>
</ul>

<h3>📌 Competition Format</h3>
<p><strong>1. Rising Bar System</strong></p>
<ul>
  <li>The barbell starts at a base weight</li>
  <li>Weight increases in fixed increments (e.g., 10 kg)</li>
  <li>Athletes must attempt the weight currently loaded</li>
  <li>Lifters may choose to skip a weight, but cannot go back down</li>
</ul>

<p><strong>2. Attempts</strong></p>
<ul>
  <li>Each athlete receives three attempts (standard)</li>
  <li>OR Unlimited attempts until failure (festival-friendly format)</li>
</ul>

<p><strong>3. Successful Lift Criteria</strong><br/>A lift is counted as successful when:</p>
<ul>
  <li>The bar is pulled from ground to full lockout</li>
  <li>Knees and hips are fully extended</li>
  <li>Shoulders pulled back at lockout</li>
  <li>The athlete maintains full control</li>
  <li>The bar is not dropped from the top (must follow it down)</li>
</ul>

<h3>🧩 Participation Rules & Regulations</h3>
<p><strong>1. Registration & Eligibility</strong></p>
<ul>
  <li>Open to Men & Women, ages 18+</li>
  <li>Must sign waiver and medical declaration</li>
  <li>Govt. ID required at check-in</li>
  <li>Limited slots; first-come basis</li>
</ul>

<p><strong>2. Weight Classes (Optional)</strong><br/>If creating categories:</p>
<ul>
  <li>Men: U70kg, U80kg, U90kg, U100kg, 100kg+</li>
  <li>Women: U55kg, U65kg, U75kg, 75kg+</li>
</ul>

<p><strong>3. Equipment Rules</strong></p>
<p><strong>Allowed:</strong></p>
<ul>
  <li>Lifting belt</li>
  <li>Wrist straps (optional – you choose allowed or not)</li>
  <li>Knee sleeves</li>
  <li>Chalk (provided in chalk zone)</li>
  <li>Deadlift socks (recommended)</li>
</ul>

<p><strong>Not Allowed:</strong></p>
<ul>
  <li>Deadlift suits or squat suits</li>
  <li>Figure-8 straps if competing raw</li>
  <li>Tacky or grip adhesives</li>
  <li>Hitching excessively (unless you want a strongman style category)</li>
</ul>

<p><strong>4. Technique Standards</strong></p>
<ul>
  <li>No bouncing the bar</li>
  <li>No hitching (unless allowed)</li>
  <li>No downward movement of the bar during the pull</li>
  <li>Must lock out fully</li>
  <li>Must return the bar under control</li>
</ul>

<p><strong>5. Bar Type</strong><br/>Choose one: Standard powerlifting bar (recommended) OR Deadlift bar (more whip, more dramatic lifts)</p>

<p><strong>6. Attempts & Timing</strong><br/>Athletes have 60 seconds after their name is called to initiate the lift. Failure to start = attempt forfeited.</p>

<h3>🚨 Disqualification (Red Flags)</h3>
<p>A lift will be disallowed if:</p>
<ul>
  <li>The bar descends during the pull</li>
  <li>Shoulders not locked out</li>
  <li>Soft lockout or hitching (if not allowed)</li>
  <li>Dropping the bar from the top</li>
  <li>Stepping forward/backward excessively</li>
  <li>Using illegal equipment</li>
</ul>
<p>Unsportsmanlike conduct is grounds for removal.</p>

<h3>🏆 Winning & Scoring Criteria</h3>
<p><strong>Winners are determined by:</strong></p>
<ol>
  <li><strong>MAX WEIGHT LIFTED</strong> – The highest successful lift wins</li>
</ol>

<p><strong>Tie-Breaker (If Needed)</strong></p>
<ol>
  <li>Lighter bodyweight athlete wins</li>
  <li>If still tied → head-to-head single attempt at a chosen weight</li>
  <li>Final decision by head judge</li>
</ol>

<p><strong>3. Awards</strong></p>
<ul>
  <li>Men's Champion</li>
  <li>Women's Champion</li>
  <li>Best Technique Award (optional)</li>
  <li>Heaviest Lift of the Day</li>
</ul>

<h3>🏥 Safety Protocol</h3>
<ul>
  <li>Warm-up area with calibrated weights</li>
  <li>On-site physio/first aid team</li>
  <li>Spotters and loaders provided</li>
  <li>Judges may stop a lift if the athlete is at risk</li>
</ul>

<h3>🧾 Code of Conduct</h3>
<ul>
  <li>Respect judges and volunteers</li>
  <li>No coaching inside the competition zone</li>
  <li>Follow instructions strictly</li>
  <li>Fair-play and discipline mandatory</li>
</ul>

<h3>🎯 Purpose of the Deadlift Championship</h3>
<p>This event aims to:</p>
<ul>
  <li>Celebrate raw strength</li>
  <li>Provide a platform for new lifters</li>
  <li>Engage strength communities across Bengaluru</li>
  <li>Encourage safe, disciplined lifting culture</li>
</ul>
`,
    date: "March 28, 2026",
    time: "4",
    period: "PM",
    timeRange: "4:15 PM - 6:00 PM",
    location: "Competition Arena",
    price: "Free Entry",
    image: "/images/21/two.jpg",
    featured: false,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "HealthTech"],
    sponsorIds: ["2", "4"],
  },

  // PUSH-UP & PLANK ENDURANCE BATTLE – QUALIFIERS (id: 15)
  {
    id: "15",
    title: "Push-Up & Plank Endurance Battle – Qualifiers",
    description: "Strength • Stability • Stamina",
    fullDescription: `
<h2>💪 Push-Up & Plank Endurance Battle – Qualifiers</h2>
<p>The Push-Up & Plank Endurance Battle is designed to test upper-body strength, core endurance, and mental toughness. This crowd-favourite competition pits athletes against each other in two classic bodyweight challenges — maximum push-ups and maximum plank hold — to determine who possesses the perfect combination of strength, stamina, and discipline.</p>

<h3>🔥 Competition Overview</h3>
<p>The event has two segments, both of which count toward the final ranking:</p>
<ol>
  <li><strong>Push-Up Challenge</strong> – Maximum Reps in One Attempt</li>
  <li><strong>Plank Hold Challenge</strong> – Maximum Time</li>
</ol>
<p>Scoring: Both scores are combined using a points system to determine the winners.</p>

<h3>📌 Competition Format</h3>
<p><strong>Segment 1: Push-Up Challenge</strong></p>
<ul>
  <li>Athletes get one continuous attempt</li>
  <li>Once they pause for more than 2 seconds, the attempt is complete</li>
  <li>Only strict push-ups count — chest to proper depth, full extension at top</li>
</ul>

<p><strong>Segment 2: Plank Hold Challenge</strong></p>
<ul>
  <li>Athletes must hold a standard forearm plank</li>
  <li>Form must remain consistent throughout</li>
  <li>Any of the following ends the attempt:
    <ul>
      <li>Hips sagging excessively</li>
      <li>Raising hips too high</li>
      <li>Moving elbows beyond allowed area</li>
      <li>Knees touching the ground</li>
    </ul>
  </li>
</ul>

<h3>🧩 Participation Rules & Regulations</h3>
<p><strong>1. Eligibility</strong></p>
<ul>
  <li>Open to Men & Women, ages 15+</li>
  <li>Minors require guardian consent</li>
  <li>Participants must sign waiver & fitness declaration</li>
</ul>

<p><strong>2. Attire</strong></p>
<ul>
  <li>Sports attire mandatory</li>
  <li>Shoes optional (many do better barefoot)</li>
  <li>No external support gear allowed (Example: weight belts, wrist wraps, knee pads)</li>
</ul>

<p><strong>3. Push-Up Standards</strong><br/>A repetition is counted only if:</p>
<ol>
  <li>Chest drops to within one fist height from the ground (judge's hand or marker)</li>
  <li>Elbows lock out fully at the top</li>
  <li>Body remains straight—no sagging hips</li>
  <li>No worming or bouncing</li>
</ol>
<p>Invalid reps will not be counted and 3 consecutive invalid reps will end the attempt.</p>

<p><strong>4. Plank Standards</strong></p>
<p><strong>Allowed:</strong></p>
<ul>
  <li>Neutral spine</li>
  <li>Elbows under shoulders</li>
  <li>Feet hip-width</li>
  <li>Minimal body movement</li>
</ul>

<p><strong>Not allowed:</strong></p>
<ul>
  <li>Hip sagging</li>
  <li>Butt lifting</li>
  <li>Walking elbows forward</li>
  <li>Hand placement change</li>
  <li>Resting knees</li>
</ul>
<p>A judge will stop the attempt at the moment the form breaks.</p>

<h3>🚨 Penalties & Disqualifications</h3>
<p><strong>Penalties</strong></p>
<ul>
  <li>Minor form breaks in push-ups = reps not counted</li>
  <li>Small plank adjustments beyond allowed zone = attempt ended</li>
</ul>

<p><strong>Disqualification</strong></p>
<ul>
  <li>Arguing with judges</li>
  <li>Unsafe behaviour</li>
  <li>Ignoring repeated warnings</li>
  <li>Not following attempt instructions</li>
</ul>

<h3>🛡️ Safety Measures</h3>
<ul>
  <li>Warm-up area available</li>
  <li>On-site first aid team</li>
  <li>Proper flooring to prevent injuries</li>
  <li>Judges may stop an athlete for safety reasons</li>
</ul>

<h3>🏆 Winning & Scoring Criteria</h3>
<p>This is a dual-score event.</p>
<ul>
  <li><strong>Push-Up Scoring:</strong> 1 push-up = 1 point</li>
  <li><strong>Plank Scoring:</strong> Every 10 seconds = 1 point</li>
  <li><strong>Final Score:</strong> Points from both events are combined. Highest total score wins.</li>
</ul>

<p><strong>Tie-Breaker</strong></p>
<ol>
  <li>Athlete with higher push-up score wins</li>
  <li>If still tied → sudden death plank (30 sec hold)</li>
</ol>

<p><strong>Awards</strong></p>
<ul>
  <li>Men's Champion</li>
  <li>Women's Champion</li>
  <li>Best Technique Award (optional)</li>
  <li>Most Improved Performer (optional)</li>
</ul>

<h3>🎯 Purpose of This Competition</h3>
<p>The Push-Up & Plank Endurance Battle aims to:</p>
<ul>
  <li>Promote bodyweight fitness</li>
  <li>Encourage functional strength training</li>
  <li>Create an inclusive, beginner-friendly competition</li>
  <li>Engage a wide audience through simple yet challenging movements</li>
  <li>Showcase discipline, endurance, and proper form</li>
</ul>
`,
    date: "March 28, 2026",
    time: "6",
    period: "PM",
    timeRange: "6:15 PM - 7:15 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/ten.jpg",
    featured: false,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["2", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  // CALISTHENICS AMATEUR BATTLES – QUALIFIERS (id: 16)
  {
    id: "16",
    title: "Calisthenics Amateur Battles – Qualifiers",
    description: "Bodyweight Strength • Control • Creativity",
    fullDescription: `
<h2>🧗‍♂️ Calisthenics Amateur Battles – Qualifiers</h2>
<p>The Calisthenics Amateur Battles is one of the most engaging, skill-based competitions at the Bengaluru Fitness Festival, designed exclusively for non-professional, beginner, and intermediate-level athletes. This high-energy challenge emphasizes bodyweight strength, control, mobility, and basic-to-intermediate calisthenics skills.</p>

<h3>🔥 Competition Overview</h3>
<p>The competition consists of two rounds:</p>
<ol>
  <li><strong>Strength & Endurance Round (Qualifiers)</strong> – Athletes perform a set of basic calisthenics exercises for maximum reps or time</li>
  <li><strong>Freestyle Skill Showcase (Final Round)</strong> – Qualified athletes perform a 60–90 second freestyle routine demonstrating strength, control, creativity, and form</li>
</ol>

<h3>📌 Round 1: Strength & Endurance (Qualifiers)</h3>
<p>Athletes will perform a circuit of fundamental calisthenics movements, such as:</p>
<ul>
  <li>Push-ups</li>
  <li>Pull-ups</li>
  <li>Dips</li>
  <li>Hanging knee raises</li>
  <li>Squat variations</li>
  <li>Hold positions (L-sit, tuck planche, handstand hold – optional)</li>
</ul>
<p>Each movement has a set time cap or rep target.</p>

<p><strong>Judging Criteria (Qualifiers)</strong></p>
<ul>
  <li>Total valid reps</li>
  <li>Strict form (no kipping unless specified)</li>
  <li>Control and technique</li>
  <li>Time efficiency</li>
</ul>
<p>Top performers from this round qualify for the Final Battle.</p>

<h3>📌 Round 2: Freestyle Skill Battle (Finals)</h3>
<p>Each finalist gets 60–90 seconds to perform a freestyle routine on:</p>
<ul>
  <li>Pull-up bar</li>
  <li>Parallel bars</li>
  <li>Floor</li>
</ul>

<p><strong>Allowed Skills (Amateur Level):</strong></p>
<ul>
  <li>Pull-ups / muscle-up attempts</li>
  <li>Static holds: L-sit, tuck planche, elbow lever</li>
  <li>Basic handstands</li>
  <li>Bar flow combinations</li>
  <li>Dips, transitions, and swings within control</li>
  <li>Creative combos</li>
</ul>

<p><strong>Not Allowed (Professional-tier skills):</strong></p>
<ul>
  <li>Full planche</li>
  <li>Front lever for extended time</li>
  <li>Giant swings</li>
  <li>540°/360° bar spins</li>
  <li>Highly advanced flips or dangerous moves</li>
</ul>

<h3>🧩 Participation Rules & Regulations</h3>
<p><strong>✔ Eligibility</strong></p>
<ul>
  <li>Open for Amateur and Intermediate athletes only</li>
  <li>Ages 15+ (below 18 require guardian consent)</li>
  <li>Participants must not be sponsored or performing at professional level</li>
  <li>Waiver & medical declaration required</li>
</ul>

<p><strong>✔ Attire</strong></p>
<ul>
  <li>Sports attire</li>
  <li>Gloves allowed</li>
  <li>Chalk allowed</li>
  <li>Wrist wraps & sleeves optional</li>
  <li>No weighted belts or vests</li>
</ul>

<p><strong>✔ General Conduct</strong></p>
<ul>
  <li>Respect judges and competition structure</li>
  <li>No coaching inside competition zone</li>
  <li>No dangerous or unauthorized stunts</li>
  <li>Perform within your skill level</li>
</ul>

<h3>🧱 Movement Standards (Qualifiers)</h3>
<p><strong>Pull-Ups</strong></p>
<ul>
  <li>Full dead hang start</li>
  <li>Chin fully above bar</li>
  <li>No excessive kipping</li>
</ul>

<p><strong>Push-Ups</strong></p>
<ul>
  <li>Full extension at top</li>
  <li>Chest close to ground</li>
  <li>Body straight throughout</li>
</ul>

<p><strong>Dips</strong></p>
<ul>
  <li>Shoulders drop below elbow level</li>
  <li>Full lockout at the top</li>
</ul>

<p><strong>Core Movements</strong></p>
<ul>
  <li>Hangs must be active</li>
  <li>No swinging unless allowed</li>
</ul>
<p>Each rep is counted only if it meets the standard.</p>

<h3>🚨 Penalties & Disqualifications</h3>
<p><strong>Penalties</strong></p>
<ul>
  <li>Invalid reps not counted</li>
  <li>3 consecutive no-reps → movement reset</li>
  <li>Exceeding time cap → move stops automatically</li>
</ul>

<p><strong>Disqualification</strong></p>
<ul>
  <li>Attempting banned advanced skills</li>
  <li>Unsafe conduct</li>
  <li>Using weighted equipment</li>
  <li>Arguing with judges</li>
  <li>Dangerous falls due to recklessness</li>
</ul>

<h3>🛡 Safety Protocols</h3>
<ul>
  <li>Professional spotters available</li>
  <li>Crash mats in freestyle area</li>
  <li>Medical support team on standby</li>
  <li>Athletes must warm up only in designated zones</li>
  <li>Judges can stop routine for safety reasons</li>
</ul>

<h3>🏆 Winning & Scoring Criteria</h3>
<p><strong>Round 1 – Scoring</strong></p>
<ul>
  <li>Total valid reps/time</li>
  <li>Movement standard compliance</li>
  <li>Smoothness & control</li>
</ul>

<p><strong>Round 2 – Scoring</strong><br/>Judged on a 10-point criteria system:</p>
<ol>
  <li>Strength</li>
  <li>Control</li>
  <li>Creativity</li>
  <li>Flow & transitions</li>
  <li>Difficulty (Amateur-level only)</li>
  <li>Technique</li>
  <li>Routine structure</li>
  <li>Stage presence</li>
  <li>Endurance</li>
  <li>Clean execution</li>
</ol>
<p><strong>Total score = Round 1 + Round 2 scores</strong><br/>Highest total wins.</p>

<p><strong>Tie-Breakers</strong></p>
<ol>
  <li>Higher freestyle score wins</li>
  <li>If still tied → 30-second endurance hold (L-sit/plank/pull-up hold)</li>
</ol>

<p><strong>Awards</strong></p>
<ul>
  <li>Amateur Battle Champion – Men</li>
  <li>Amateur Battle Champion – Women</li>
  <li>Best Technique Award</li>
  <li>Most Promising Athlete Award</li>
</ul>

<h3>🎯 Purpose of the Competition</h3>
<p>The Calisthenics Amateur Battles aims to:</p>
<ul>
  <li>Promote beginner-friendly calisthenics culture</li>
  <li>Provide a platform for new athletes to perform</li>
  <li>Encourage skill development</li>
  <li>Strengthen Bangalore's growing calisthenics community</li>
  <li>Make the sport accessible, inclusive, and inspiring</li>
</ul>
`,
    date: "March 28, 2026",
    time: "1",
    period: "PM",
    timeRange: "1:00 PM - 3:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/nine.jpg",
    featured: false,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["3", "4"],
    sponsors: ["ActiveWear", "VitaBoost"],
    sponsorIds: ["3", "5"],
  },

  // POWERLIFTING KING/QUEEN – HEATS (id: 18)
  {
    id: "18",
    title: "Powerlifting King/Queen – Heats",
    description: "Raw Strength • Technique • Maximum Power Output",
    fullDescription: `
<h2>🏋️‍♂️ POWERLIFTING KING/QUEEN – HEATS</h2>
<p>The Powerlifting King/Queen – Heats is the qualifying round for one of the festival's most prestigious strength titles. This event tests an athlete's maximum raw strength across the three classic powerlifting lifts: Squat, Bench Press, and Deadlift. Athletes will perform in a controlled, judged environment, and the top performers qualify for the Powerlifting King/Queen Finals.</p>

<h3>1. Competition Format</h3>
<ul>
  <li>The Heats follow a 3-lift powerlifting format</li>
  <li>Each athlete performs all three lifts: Squat → Bench Press → Deadlift</li>
  <li>Each athlete receives 2 attempts per lift (reduced attempts since this is a qualifying round)</li>
  <li>The best successful attempt in each lift counts toward the total</li>
  <li>A Wilks/Glossbrenner coefficient or bodyweight category ranking will be used to ensure fair scoring across weight classes</li>
</ul>

<h3>2. Categories</h3>
<p><strong>Men</strong></p>
<ul>
  <li>Under 66 kg</li>
  <li>66–74 kg</li>
  <li>74–83 kg</li>
  <li>83–93 kg</li>
  <li>93–105 kg</li>
  <li>Above 105 kg</li>
</ul>

<p><strong>Women</strong></p>
<ul>
  <li>Under 52 kg</li>
  <li>52–63 kg</li>
  <li>63–72 kg</li>
  <li>72–84 kg</li>
  <li>Above 84 kg</li>
</ul>
<p>(Categories may be merged depending on number of entries.)</p>

<h3>3. Equipment Standards</h3>
<p>This is a RAW event.</p>
<p><strong>Allowed:</strong></p>
<ul>
  <li>Lifting belt</li>
  <li>Wrist wraps</li>
  <li>Knee sleeves</li>
  <li>Chalk</li>
  <li>Standard flat or lifting shoes</li>
</ul>

<p><strong>Not Allowed:</strong></p>
<ul>
  <li>Knee wraps</li>
  <li>Bench shirts</li>
  <li>Deadlift suits</li>
  <li>Straps</li>
  <li>Any form of assisted or supportive gear beyond RAW category norms</li>
</ul>

<h3>4. Participation Rules</h3>
<ol>
  <li>All athletes must complete registration prior to competition day</li>
  <li>Weigh-ins must be completed at least 1 hour before the heat</li>
  <li>Athletes must attend the mandatory technical briefing</li>
  <li>Once an attempt weight is declared, it cannot be reduced, only increased by a minimum of 2.5 kg</li>
  <li>Failure to attempt a lift within the given 60-second attempt window will result in a no-lift</li>
  <li>The bar must be loaded evenly and securely as per standard competition rules</li>
  <li>Judges' decisions are final</li>
</ol>

<h3>5. Lift Standards & Judging Criteria</h3>
<p><strong>A. Squat</strong><br/>A valid squat requires:</p>
<ul>
  <li>Proper depth: hip crease below knee line</li>
  <li>Bar must remain under full control throughout</li>
  <li>No downward movement during ascent</li>
  <li>Full extension at the top</li>
  <li>No stepping or re-racking before command</li>
</ul>

<p><strong>B. Bench Press</strong><br/>Valid criteria:</p>
<ul>
  <li>Full pause at chest</li>
  <li>Feet must remain flat</li>
  <li>Hips must remain in contact with bench</li>
  <li>Full lockout at the top</li>
  <li>Must follow commands: Start → Press → Rack</li>
</ul>

<p><strong>C. Deadlift</strong><br/>Valid criteria:</p>
<ul>
  <li>Single continuous motion</li>
  <li>No hitching</li>
  <li>Shoulders back and knees locked at top</li>
  <li>Controlled descent</li>
  <li>Must not drop the bar</li>
  <li>Must follow command: Down</li>
</ul>

<h3>6. Penalties & Disqualifications</h3>
<p><strong>A lift will be declared NO LIFT if:</strong></p>
<ul>
  <li>Depth/lockout is not achieved</li>
  <li>Commands are ignored</li>
  <li>Bar bounce or hitching occurs</li>
  <li>Equipment violations</li>
  <li>Support from spotters (other than safety intervention)</li>
  <li>Dropping the bar (especially deadlift)</li>
</ul>

<p><strong>Immediate Disqualification for:</strong></p>
<ul>
  <li>Unruly conduct</li>
  <li>Using banned substances or gear</li>
  <li>Deliberately endangering self or others</li>
</ul>

<h3>7. Scoring System</h3>
<ul>
  <li>The heaviest successful lift in each discipline counts</li>
  <li>Total = Best Squat + Best Bench Press + Best Deadlift</li>
  <li>Leaderboard ranking:
    <ol>
      <li>Total weight lifted</li>
      <li>Wilks/Glossbrenner score (if used)</li>
      <li>Bodyweight advantage (if tie)</li>
      <li>If still tied → Deadlift tie-breaker attempt</li>
    </ol>
  </li>
</ul>

<h3>8. Qualification to Finals</h3>
<p>The following athletes move to the finals:</p>
<ul>
  <li>Top 5 athletes per weight category OR</li>
  <li>Top 15 male and Top 10 female lifters overall (based on participation size)</li>
</ul>
<p>Qualification depends on: Total weight lifted, Clean lift execution, No penalties or failed attempts, Coach/judge validation.</p>

<h3>9. Safety Protocols</h3>
<ul>
  <li>Certified spotters present for all lifts</li>
  <li>Medical team available at venue</li>
  <li>Warm-up zone provided with lighter weights</li>
  <li>Any athlete showing signs of injury or excessive strain will be stopped</li>
</ul>

<h3>10. Awards & Recognition (Heats)</h3>
<ul>
  <li>Certificates for all participants</li>
  <li>Leaderboard announcement on the official website</li>
  <li>Social media spotlight for top performers</li>
  <li>Special "Record Breaker" mention for exceptional lifts</li>
</ul>
`,
    date: "March 28, 2026",
    time: "3",
    period: "PM",
    timeRange: "3:00 PM - 5:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/deadlift.jpg",
    featured: false,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "ActiveWear"],
    sponsorIds: ["2", "3"],
  },

  // BATTLE OF GYMS – TEAM ROUND (id: 19)
  {
    id: "19",
    title: "Battle of Gyms – Team Round",
    description: "Unite. Compete. Dominate.",
    fullDescription: `
<h2>🏆 BATTLE OF GYMS – TEAM ROUND</h2>
<p>The Battle of Gyms – Team Round is one of the most exciting highlight events of the Bengaluru Fitness Festival. Designed to showcase Bengaluru's strongest, fittest, and most disciplined gym communities, this competition brings teams of athletes together to compete in a high-intensity functional fitness relay. This is where teamwork, strategy, stamina, and gym pride come together.</p>

<h3>⭐ Competition Overview</h3>
<p>Each gym enters a team of 6 athletes:</p>
<ul>
  <li>3 Men</li>
  <li>3 Women</li>
</ul>
<p>Together, they complete a multi-phase team workout, consisting of: Strength segments, Cardio bursts, Functional training obstacles, Synchronized movements, Relay segments. The team with the fastest total completion time, after penalties, is declared the winner.</p>

<h3>👥 Team Composition & Eligibility</h3>
<ul>
  <li>1 team per gym (additional entries only if slots permit)</li>
  <li>6 athletes per team (3 men + 3 women)</li>
  <li>Optional: 1 team coach/manager</li>
  <li>Athletes must be 18+</li>
  <li>Athletes must belong to the same gym (verified by membership ID or letter from gym)</li>
</ul>

<h3>🔥 Competition Format</h3>
<p>The event consists of 4 major stages, designed to test complete team fitness:</p>

<p><strong>1️⃣ Strength Stage (3 athletes active)</strong><br/>Examples: Deadball lifts, Team sled push, Farmer carry relay</p>

<p><strong>2️⃣ Endurance Stage (All team members active)</strong><br/>Examples: Air bike calories, Rowing relay, Shuttle runs</p>

<p><strong>3️⃣ Functional/Synchronization Stage (Pairs or whole team)</strong><br/>Examples: Synchronised burpees, Wall ball sets, Synced box jumps</p>

<p><strong>4️⃣ Final Team Relay</strong><br/>A high-speed relay to the finish line including: Sandbag run, Battle rope sprint, Barbell cycling section, Final sprint</p>
<p><em>The exact workout will be announced 1 week before the festival.</em></p>

<h3>📋 Participation Rules & Regulations</h3>
<p><strong>1. Team Rules</strong></p>
<ul>
  <li>All 6 athletes must participate in at least one segment</li>
  <li>Substituting athletes in the middle of a segment is not allowed</li>
  <li>Team captain must submit the athlete order before the event begins</li>
  <li>Missing a segment or skipping a station leads to disqualification</li>
</ul>

<p><strong>2. Equipment Rules</strong></p>
<p><strong>Allowed:</strong></p>
<ul>
  <li>Wrist wraps</li>
  <li>Knee sleeves</li>
  <li>Gloves</li>
  <li>Lifting belts</li>
  <li>Chalk (in designated areas only)</li>
</ul>

<p><strong>Not Allowed:</strong></p>
<ul>
  <li>Lifting straps</li>
  <li>Powerlifting suits</li>
  <li>Assisted gear (wraps, suits, etc.)</li>
  <li>Any unsafe modification to equipment</li>
</ul>

<p><strong>3. Timing & Flow</strong></p>
<ul>
  <li>Teams report 30 minutes before start time</li>
  <li>Each stage has a maximum allowed time cap</li>
  <li>Exceeding the cap moves the team automatically to the next stage but adds a 2-minute penalty</li>
  <li>Judges will guide transitions between segments</li>
</ul>

<h3>⚖️ Judging Criteria</h3>
<p>Each team is judged on:</p>
<ul>
  <li><strong>Completion Time</strong> – The primary scoring factor</li>
  <li><strong>Movement Standards</strong> – Full range of motion, Complete reps, No shortcuts, Synchronisation where required</li>
  <li><strong>Team Coordination</strong> – Synchronized movements, Proper transitions, Communication and safety</li>
  <li><strong>Penalties</strong> – Applied for: No-reps (5 seconds each after 5 no-reps), Poor synchronization (10 seconds per violation), Dropping weights unsafely (20 seconds), False starts or early transitions (10 seconds), Interference between athletes (15 seconds)</li>
</ul>

<h3>🚨 Disqualification Criteria</h3>
<p>Teams may be disqualified for:</p>
<ul>
  <li>Skipping a full station</li>
  <li>Using unapproved equipment</li>
  <li>Aggressive behaviour towards judges/teams</li>
  <li>Unsportsmanlike conduct</li>
  <li>Unsafe lifting despite warnings</li>
  <li>Attempting to change the athlete lineup mid-event</li>
</ul>

<h3>🛡️ Safety Protocol</h3>
<ul>
  <li>Warm-up area will be provided</li>
  <li>Medical team on standby</li>
  <li>Hydration stations across venue</li>
  <li>Any athlete showing injury signs will be stopped immediately</li>
  <li>Coaches cannot enter the workout zone</li>
</ul>

<h3>🏅 Winning Criteria</h3>
<p>The Battle of Gyms Champion is decided based on:</p>
<ol>
  <li>Fastest total workout time</li>
  <li>Least penalties</li>
  <li>If tie: Time in final relay decides → if still tied: a sudden-death "team burpee-off" (30 seconds – max reps wins)</li>
</ol>

<h3>🎖️ Awards & Recognition</h3>
<p><strong>Winning Team Receives:</strong></p>
<ul>
  <li>Battle of Gyms Champion Trophy</li>
  <li>Team medals</li>
  <li>Feature on official website & social media</li>
  <li>Gym profile published on event pages</li>
  <li>Free entry into next year's event</li>
  <li>Sponsor gift hampers (optional)</li>
</ul>

<p><strong>Special Awards:</strong></p>
<ul>
  <li>Fittest Gym in Bengaluru Award</li>
  <li>Best Team Coordination Award</li>
  <li>Most Energetic Team Award</li>
</ul>

<h3>🎯 Purpose of the Event</h3>
<p>The Battle of Gyms aims to:</p>
<ul>
  <li>Build unity within gyms</li>
  <li>Promote community fitness culture</li>
  <li>Encourage friendly competition</li>
  <li>Showcase Bengaluru's fitness talent</li>
  <li>Engage both athletes and spectators in high-energy action</li>
</ul>
`,
    date: "March 28, 2026",
    time: "6",
    period: "PM",
    timeRange: "6:30 PM - 8:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/seven.jpg",
    featured: true,
    startDate: "March 28, 2026",
    endDate: "March 28, 2026",
    speakerIds: ["1", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear", "HealthTech"],
    sponsorIds: ["1", "2", "4"],
  },

  /* -------------------------------------------------------------------------- */
  /*                               DAY 2 - FINALS                               */
  /* -------------------------------------------------------------------------- */

  // FUNCTIONAL FITNESS CHALLENGE – FINALS (id: 20)
  {
    id: "20",
    title: "Functional Fitness Challenge – Finals",
    description: "Only the strongest, fastest, and most complete athletes make it here",
    fullDescription: `
<h2>🏆 FUNCTIONAL FITNESS CHALLENGE – FINALS</h2>
<p>Only the strongest, fastest, and most complete athletes make it here. The Functional Fitness Challenge – Finals is the ultimate test of elite athletic ability at the Bengaluru Fitness Festival. Athletes who qualified from the eliminations now face an advanced, multi-stage workout designed to test: Strength, Endurance, Power, Mobility, Speed, Skill, and Mental toughness. This final round crowns the festival's Fittest Man, Fittest Woman, and Overall Functional Fitness Champion.</p>

<h3>⭐ Competition Overview</h3>
<p>The Finals consist of a high-intensity, multi-station functional workout with complex movements and tougher standards than the qualifiers. The final event may include (examples): Barbell cycling (thrusters, cleans, snatches), Kettlebell complexes, Sandbag over-shoulder, Rope climbs, Box jump overs, Burpee variations, Air bike / assault runner, Sled push/pull, Double-unders, Rowing sprints.</p>
<p><em>Final workout will be revealed 24 hours before the event to ensure fairness while still challenging adaptability.</em></p>

<h3>👥 Finalist Eligibility</h3>
<ul>
  <li>Top performers from the Functional Fitness Challenge – Eliminations</li>
  <li>Men's and Women's divisions</li>
  <li>Athletes must check in at the warm-up area 30 minutes before the finals</li>
  <li>All finalists must attend the mandatory briefing before the final workout</li>
</ul>

<h3>👇 Competition Format: Finals</h3>
<p>The Finals are conducted in three advanced stages:</p>

<p><strong>1️⃣ STAGE 1 — Strength & Power Block</strong><br/>Heavy barbell or sandbag movements: Barbell snatch ladder / clean ladder, Sandbag over-shoulder repeats, Deadball lifts, Complex deadlift-push combo.<br/>Goal: complete required reps with perfect form → <strong>Top 8 advance to Stage 2</strong></p>

<p><strong>2️⃣ STAGE 2 — Skill & Conditioning Block</strong><br/>Athletes face a technical, high-intensity conditioning circuit: Double-unders, Wall balls, Box jump overs, Sled push/pull, Kettlebell swings, Rowing calories.<br/>→ <strong>Top 4 athletes with the fastest cumulative time advance to Stage 3</strong></p>

<p><strong>3️⃣ STAGE 3 — The Final Showdown</strong><br/>A brutal finisher combining strength, speed, and endurance, e.g.:<br/>
<strong>"CHAMPIONS CIRCUIT"</strong>
<ul>
  <li>500m Assault runner</li>
  <li>25 burpee box overs</li>
  <li>20 sandbag cleans</li>
  <li>15 barbell thrusters</li>
  <li>10-meter weighted sprint</li>
  <li>Final run to the finish arch</li>
</ul>
<strong>Fastest finisher = Champion</strong></p>

<h3>📋 Participation Rules & Regulations</h3>
<p><strong>1. Equipment Rules</strong></p>
<p><strong>Allowed:</strong> Wrist wraps, Knee sleeves, Lifting belt, Chalk (in chalk zones), Gloves, Functional training shoes</p>
<p><strong>Not Allowed:</strong> Lifting straps (deadlift, kettlebell, sandbag), Powerlifting suits, Grip-enhancing sprays, Any gear that provides unnatural assistance</p>

<p><strong>2. Athlete Conduct Rules</strong></p>
<ul>
  <li>Athletes must follow all judge commands</li>
  <li>Athletes must remain in assigned lanes</li>
  <li>No external coaching during the workout</li>
  <li>No skipping, modifying, or altering stations</li>
  <li>No arguing with judges; appeals must be made by an official coach after the heat</li>
</ul>

<p><strong>3. Movement Standards</strong><br/>Strict performance standards apply:</p>
<ul>
  <li>Thrusters: Full squat → full lockout overhead</li>
  <li>Box Jump Overs: Both feet must clear the box; no sitting</li>
  <li>Wall Balls: Squat crease below knee; target must be hit</li>
  <li>Sandbag Over-Shoulder: Bag must pass over the shoulder completely</li>
  <li>Burpees: Chest-to-ground; two-foot jump</li>
  <li>Double-Unders: Rope must pass twice per jump</li>
</ul>
<p>NO-REPS will be called loudly and clearly.</p>

<h3>⛔ Penalties</h3>
<ul>
  <li>5 seconds per no-rep (after 5 accumulated no-reps)</li>
  <li>10 seconds for movement standard violation</li>
  <li>15 seconds for false start</li>
  <li>20 seconds for unsafe equipment handling</li>
  <li>30 seconds for lane boundary violations</li>
</ul>
<p>3 consecutive penalties may result in station reset.</p>

<h3>❌ Disqualification Conditions</h3>
<p>An athlete may be disqualified for:</p>
<ul>
  <li>Intentional cheating</li>
  <li>Skipping stations</li>
  <li>Excessive unsafe behaviour</li>
  <li>Using banned equipment</li>
  <li>Arguing or abusing judges</li>
  <li>Ignoring medical intervention signals</li>
</ul>
<p>Judges and medical staff have full authority to stop any athlete.</p>

<h3>🛡️ Safety Protocol</h3>
<ul>
  <li>Warm-up zone compulsory</li>
  <li>Medical team and physiotherapists on standby</li>
  <li>Hydration points across the arena</li>
  <li>Judges can halt an athlete for safety reasons</li>
  <li>Severe cramping, dizziness, or form breakdown = immediate stop</li>
</ul>

<h3>🏅 Winning Criteria</h3>
<p><strong>🏆 Overall Champion = Fastest Total Time in Stage 3</strong><br/>(Total time = Workout Time + Penalties)</p>
<p><strong>If two athletes tie:</strong></p>
<ol>
  <li>Fewest penalties</li>
  <li>Stage 2 completion time</li>
  <li>Sudden-death finisher: 100m sprint + 10 burpees + 10 KB swings</li>
</ol>

<h3>🎖️ Awards & Recognition</h3>
<p><strong>Titles Awarded</strong></p>
<ul>
  <li>Functional Fitness Champion – Men</li>
  <li>Functional Fitness Champion – Women</li>
  <li>Overall Festival "Fittest Athlete" Award</li>
</ul>

<p><strong>Prizes</strong></p>
<ul>
  <li>Trophy + Medal</li>
  <li>Fitness Festival Champion Certificate</li>
  <li>Sponsor hampers</li>
  <li>Social media Spotlight</li>
  <li>FREE entry to next year's competition</li>
</ul>

<h3>🎯 Purpose of the Finals</h3>
<p>The Finals celebrate: True functional athleticism, High-performance fitness, Mental grit + physical endurance, The culture of competitive fitness in Bengaluru, The spirit of excellence, sportsmanship & community.</p>
`,
    date: "March 29, 2026",
    time: "9",
    period: "AM",
    timeRange: "9:00 AM - 12:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/eight.jpg",
    featured: true,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["1", "2", "3"],
    sponsors: ["FitLife Nutrition", "ActiveWear"],
    sponsorIds: ["1", "3"],
  },

  // DEADLIFT CHAMPIONSHIP – FINALS (id: 21)
  {
    id: "28",
    title: "Deadlift Championship – Finals",
    description: "Raw Power • Perfect Technique • Maximum Lift",
    fullDescription: `
<h2>🏆 DEADLIFT CHAMPIONSHIP – FINALS</h2>
<p>Raw Power • Perfect Technique • Maximum Lift. The Deadlift Championship – Finals brings together the strongest athletes from the preliminary rounds to battle for the title of Bengaluru's Deadlift Champion. This is a pure test of maximum strength, technique discipline, and mental grit, performed in front of a live crowd. Only the top lifters from the Heats qualify for this elite final stage.</p>

<h3>⭐ Competition Overview</h3>
<p>Finalists will attempt to lift the heaviest possible weight in a strict, RAW deadlift format.</p>
<ul>
  <li>Athletes get 3 attempts to set their maximum lift</li>
  <li>The heaviest successful lift determines final ranking</li>
  <li>Format: Traditional barbell deadlift (conventional or sumo allowed)</li>
  <li>No straps or assisted gear</li>
  <li>Strict judging standards must be followed for every lift</li>
</ul>
<p>This is a RAW lifting competition, focused entirely on the athlete's natural strength.</p>

<h3>👥 Finalist Eligibility</h3>
<ul>
  <li>Qualified athletes from the Deadlift Championship – Heats</li>
  <li>Men's and Women's categories</li>
  <li>Athletes must attend the mandatory weigh-in and technical briefing</li>
  <li>Athletes must be 18+</li>
  <li>Medical clearance recommended for anyone with prior lifting injuries</li>
</ul>

<h3>💪 Competition Format: Finals</h3>
<p><strong>Each athlete receives 3 Attempts:</strong></p>
<ol>
  <li><strong>Attempt 1</strong> → Warm, conservative lift</li>
  <li><strong>Attempt 2</strong> → Heavy, target lift</li>
  <li><strong>Attempt 3</strong> → All-out maximum lift</li>
</ol>

<p><strong>Attempt Rules</strong></p>
<ul>
  <li>Athletes must declare their attempt weight before each lift</li>
  <li>Declared weight cannot be reduced, only increased</li>
  <li>Minimum weight increase per attempt: 2.5 kg</li>
</ul>

<h3>📘 Rules & Regulations</h3>
<p><strong>Allowed Techniques</strong></p>
<ul>
  <li>Conventional deadlift</li>
  <li>Sumo deadlift</li>
  <li>Mixed grip or double overhand</li>
  <li>Chalk</li>
  <li>Standard deadlift shoes or flat shoes</li>
</ul>

<p><strong>Not Allowed</strong></p>
<ul>
  <li>Lifting straps</li>
  <li>Hooks/grip aids</li>
  <li>Deadlift suits</li>
  <li>Knee wraps (knee sleeves allowed)</li>
  <li>Hitching the bar</li>
  <li>Dropping the bar from the top</li>
</ul>

<h3>🧑‍⚖️ Judging Criteria</h3>
<p><strong>A successful lift must meet the following:</strong></p>
<p>✔ <strong>1. Smooth upward pull</strong> – The bar must be lifted in one continuous motion. Stalling is allowed, but no downward movement is permitted.</p>
<p>✔ <strong>2. Lockout position</strong> – Shoulders back, Hips fully extended, Knees locked, Athlete must demonstrate full control</p>
<p>✔ <strong>3. Command adherence</strong> – Lift begins on athlete's command, "Down" command will be given by judge, Bar must be lowered under control, Bar must be placed on the floor, NOT dropped</p>

<h3>⛔ No-Lift Violations</h3>
<p>A lift will be judged NO LIFT for:</p>
<ul>
  <li>Hitching the bar</li>
  <li>Dropping the bar</li>
  <li>Knees not locked</li>
  <li>No full lockout at top</li>
  <li>Any downward movement during lift</li>
  <li>Starting the lift after the time limit (60 seconds)</li>
  <li>Not following the "down" command</li>
  <li>Bar bouncing between reps (if multiple attempts on warm-up platform)</li>
  <li>Illegal equipment usage</li>
</ul>

<h3>⚠️ Disqualification Criteria</h3>
<p>Athlete will be disqualified for:</p>
<ul>
  <li>Using banned equipment</li>
  <li>Disrespectful conduct toward judges</li>
  <li>Deliberate rule violations</li>
  <li>Unsafe behaviour</li>
  <li>Two consecutive medical warnings</li>
  <li>Attempting lifts outside assigned order</li>
</ul>
<p>Judges' decisions are final.</p>

<h3>🛡️ Safety Protocols</h3>
<p>Safety is priority:</p>
<ul>
  <li>Certified spotters on both sides of the bar</li>
  <li>Medical team on standby</li>
  <li>Warm-up zone with lighter weight plates</li>
  <li>Immediate stop by judge if athlete shows injury signs</li>
  <li>Mandatory belt check</li>
  <li>Hydration and rest area provided</li>
</ul>

<h3>🏅 Winning Criteria</h3>
<p><strong>🏆 Deadlift Champion = Heaviest Successful Lift</strong></p>
<p>Separate champions for: Men's Category, Women's Category</p>

<p><strong>If two athletes lift the same weight, tie-breaker:</strong></p>
<p><strong>Tie-Breaker Rules</strong></p>
<ol>
  <li>Lower bodyweight wins</li>
  <li>If still tied → Athlete who completed the lift earlier in attempts wins</li>
  <li>Final tie-breaker → Sudden-death lift-off (weight selected by judges)</li>
</ol>

<h3>🎖️ Awards</h3>
<p><strong>Winners Receive:</strong></p>
<ul>
  <li>Deadlift Champion Trophy</li>
  <li>Medal + Certificate</li>
  <li>Social Media Spotlight Feature</li>
  <li>Sponsor gifts</li>
  <li>Entry into next year's Championship + VIP access</li>
</ul>

<p><strong>Special Awards</strong></p>
<ul>
  <li>Best Technique Award</li>
  <li>Heaviest Male Deadlift</li>
  <li>Heaviest Female Deadlift</li>
  <li>Crowd Favourite Lift</li>
</ul>

<h3>🎯 Purpose of the Championship</h3>
<p>The Finals celebrate: Strength excellence, Perfect technique, Mental determination, Bengaluru's growing strength-sport community, A fair, RAW lifting platform for all athletes.</p>
`,
    date: "March 29, 2026",
    time: "1",
    period: "PM",
    timeRange: "1:00 PM - 3:00 PM",
    location: "Competition Arena",
    price: "Free Entry",
    image: "/images/21/two.jpg",
    featured: true,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "HealthTech"],
    sponsorIds: ["2", "4"],
  },

  // PUSH-UP & PLANK ENDURANCE – FINALS (id: 22)
  {
    id: "29",
    title: "Push-Up & Plank Endurance – Finals",
    description: "Strength • Stability • Stamina",
    fullDescription: `
<h2>🏆 PUSH-UP & PLANK ENDURANCE – FINALS</h2>
<p>Strength • Stability • Stamina. The Push-Up & Plank Endurance Finals bring together the top performers from the preliminary rounds to compete in one of the festival's purest tests of bodyweight strength, core stability, and mental endurance. This is a battle of discipline and durability, where only the strongest—both physically and mentally—can claim victory.</p>

<h3>⭐ Competition Overview</h3>
<p>The Finals consist of two advanced endurance segments:</p>
<ol>
  <li><strong>MAX PUSH-UPS – STRICT FORM CHALLENGE</strong> – Athletes must perform the maximum number of strict push-ups within the assigned time frame.</li>
  <li><strong>PLANK HOLD – MAXIMUM TIME CHALLENGE</strong> – A test of pure core stability. Who can hold the longest, perfect-form plank without breaking?</li>
</ol>
<p>Scores from both segments are combined to determine the overall finalists and champions.</p>

<h3>👥 Eligibility</h3>
<ul>
  <li>Qualified athletes from the Eliminations Round</li>
  <li>Men's and Women's categories</li>
  <li>Minimum age: 16+</li>
  <li>Must attend pre-event briefing</li>
  <li>Medical issues (shoulder, wrist, back) must be declared in advance</li>
</ul>

<h3>💪 COMPETITION FORMAT: FINALS</h3>
<p>The Finals are conducted in two phases:</p>

<h4>PHASE 1 – PUSH-UP ENDURANCE TEST</h4>
<p><strong>Duration:</strong></p>
<ul>
  <li>Men: 2 minutes max-rep test</li>
  <li>Women: 90 seconds max-rep test</li>
</ul>

<p><strong>Rules:</strong></p>
<ul>
  <li>Strict push-up standard</li>
  <li>Chest must touch the floor (marked pad)</li>
  <li>Full lockout at the top</li>
  <li>No "worming," "bouncing," or hips dropping</li>
  <li>Only continuous reps count</li>
  <li>Resting allowed only in plank top position</li>
</ul>

<p><strong>Penalties:</strong></p>
<ul>
  <li>1 "NO-REP" = rep not counted</li>
  <li>Excessive no-reps may result in time penalty</li>
  <li>Knees touching the ground = test ends immediately</li>
</ul>

<h4>PHASE 2 – PLANK HOLD ENDURANCE</h4>
<p><strong>Goal:</strong> Hold the plank position for the maximum duration without breaking form.</p>

<p><strong>Rules:</strong></p>
<ul>
  <li>Elbows under the shoulders</li>
  <li>Core fully engaged</li>
  <li>Hips in straight line (no sagging or lifting)</li>
  <li>Feet no wider than shoulder-width</li>
  <li>No shifting weight or shaking elbows</li>
  <li>No talking or external coaching</li>
</ul>

<p><strong>Plank Breaking Causes Immediate Termination:</strong></p>
<ul>
  <li>Hips drop or rise</li>
  <li>Hands leave the floor</li>
  <li>Knees touch the floor</li>
  <li>Body twists/leans to one side</li>
  <li>Lifting elbows during hold</li>
</ul>

<h3>📋 Scoring System</h3>
<p>Final ranking is determined by the combined points from both phases.</p>
<ul>
  <li>Push-Up Score = Total valid reps</li>
  <li>Plank Score = Total seconds held</li>
  <li>Overall Champion = Highest combined points</li>
</ul>

<p><strong>Example scoring format:</strong></p>
<ul>
  <li>1 point per valid push-up</li>
  <li>1 point per second in plank hold</li>
</ul>

<p><strong>In Men & Women categories:</strong></p>
<ul>
  <li>Highest total = Champion</li>
  <li>Next highest = 1st Runner-Up</li>
  <li>Third highest = 2nd Runner-Up</li>
</ul>

<h3>🧑‍⚖️ Judging Criteria</h3>
<p><strong>Push-Ups</strong><br/>A rep is valid ONLY if:</p>
<ul>
  <li>Chest touches pad</li>
  <li>Full arm extension at top</li>
  <li>Body remains in a straight line</li>
  <li>No hip piking or sagging</li>
</ul>
<p>Judges will loudly call: "Rep!" for valid reps, "No Rep!" for invalid reps</p>

<p><strong>Plank</strong><br/>Athlete must maintain:</p>
<ul>
  <li>Straight spine</li>
  <li>Engaged core</li>
  <li>Stationary elbows</li>
  <li>Stable shoulder blades</li>
</ul>
<p>Judges will stop the attempt immediately if form breaks.</p>

<h3>⛔ Disqualification Reasons</h3>
<p>Athlete may be disqualified for:</p>
<ul>
  <li>Use of illegal techniques</li>
  <li>Repeated intense form violation</li>
  <li>Disrespect to judges</li>
  <li>Ignoring judge instructions</li>
  <li>External coaching or assistance</li>
  <li>Entering late into the finals</li>
  <li>Failure to attend briefing</li>
</ul>

<h3>🛡️ Safety Measures</h3>
<ul>
  <li>Mandatory warm-up period</li>
  <li>Wrist/knee/elbow checks</li>
  <li>Medical team available on-site</li>
  <li>Hydration stations</li>
  <li>Athletes with prior back or shoulder injuries must inform judges</li>
</ul>

<h3>🏅 Winning Criteria</h3>
<p><strong>Overall Champion = Highest Combined Score (Push-Ups + Plank Time)</strong><br/>Separate winners for: Men's Champion, Women's Champion</p>

<p><strong>Tie-Breakers:</strong><br/>If two athletes have equal total scores:</p>
<ol>
  <li>Tie-Break 1: Longer plank hold</li>
  <li>Tie-Break 2: More valid push-ups</li>
  <li>Tie-Break 3: Sudden death – 30-second max push-ups</li>
</ol>

<h3>🎖️ Awards & Recognition</h3>
<p><strong>Winners Receive:</strong></p>
<ul>
  <li>Official Push-Up & Plank Endurance Champion Trophy</li>
  <li>Medals + Certificate</li>
  <li>Social media feature</li>
  <li>Sponsor prizes</li>
</ul>

<p><strong>Special Recognition Awards:</strong></p>
<ul>
  <li>Best Form Award</li>
  <li>Longest Plank Hold</li>
  <li>Maximum Push-Ups</li>
  <li>Most Improved Athlete</li>
</ul>

<h3>🎯 Purpose of the Event</h3>
<p>The Push-Up & Plank Endurance Finals promote: Pure bodyweight strength, Functional fitness, Discipline & technique, Mental endurance, Fitness accessibility for all levels. This event is designed to be both inspiring and spectator-friendly, making it one of the festival's most crowd-attracting competitions.</p>
`,
    date: "March 29, 2026",
    time: "3",
    period: "PM",
    timeRange: "3:30 PM - 5:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/ten.jpg",
    featured: false,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["2", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  // CALISTHENICS FREESTYLE FINALS (id: 23)
  {
    id: "23",
    title: "Calisthenics Freestyle Finals",
    description: "Bodyweight Artistry • Control • Creativity",
    fullDescription: `
<h2>🏆 Calisthenics Freestyle Finals</h2>
<p>The Calisthenics Freestyle Finals celebrates bodyweight strength, control, creativity, and performance art. The top athletes from the amateur rounds compete on the big stage, showcasing advanced skills such as freestyle flows, dynamic power moves, static holds, and transitions — all judged by certified calisthenics coaches and professional athletes. This finale brings together the best performers to deliver explosive routines filled with style, technique, and high-level athleticism.</p>

<h3>🎯 Competition Format</h3>
<p><strong>1. Finalist Selection</strong><br/>Finalists qualify from the Calisthenics Amateur Battles based on: Technical execution, Difficulty of moves, Strength-to-weight performance, Creativity & flow, Attitude & crowd engagement. The top 8 finalists (or top 6 depending on entries) advance to the Freestyle Finals.</p>

<p><strong>2. Stage Performance Round</strong><br/>Each finalist gets:</p>
<ul>
  <li>90 seconds of performance time (music allowed)</li>
  <li>Use of available apparatus: Pull-up bar, Parallel bars, Low bar, Floor mat area</li>
</ul>
<p>Athletes may perform static holds, dynamic moves, bar transitions, combos, and full freestyle flow sequences.</p>

<p><strong>3. Optional Tie-Breaker Round</strong><br/>If needed, judges may call: 30-second skill hold challenge, OR One explosive move (max difficulty)</p>

<h3>📝 Participation Rules & Regulations</h3>
<p><strong>Eligibility</strong></p>
<ul>
  <li>Open to athletes aged 18+</li>
  <li>Both men and women categories</li>
  <li>Must have cleared the preliminary amateur round</li>
  <li>Participants must sign the festival waiver and medical declaration</li>
</ul>

<p><strong>General Rules</strong></p>
<ol>
  <li>Athletes must perform only bodyweight-based movements – No weighted vests, chains, dips, or belts allowed</li>
  <li>Use of chalk is permitted – No liquid chalk spray on bars unless approved</li>
  <li>No dangerous moves that pose extreme risk to self or audience – Example: uncontrolled flips, bar dismounts towards the audience</li>
  <li>Music is allowed; athletes must submit their track 30 minutes before the finals</li>
  <li>Athletes must begin their performance within 10 seconds of stepping on stage</li>
  <li>Foul language, inappropriate gestures, or offensive clothing will lead to disqualification</li>
  <li>Athletes must respect equipment reset times and judges' instructions</li>
</ol>

<p><strong>Safety Rules</strong></p>
<ul>
  <li>Spotters will be available for high-risk dynamic moves</li>
  <li>Any slip, fall, or loss of control will count as a deduction, but performance may continue</li>
  <li>If the judges deem the athlete unfit (injury or dizziness), performance will be stopped</li>
</ul>

<h3>🏅 Judging Criteria</h3>
<p>Each routine is scored out of 100 points, based on:</p>
<ol>
  <li><strong>Difficulty (30 points)</strong> – Level of static holds, Dynamic bar skills (360s, giants, switches), Transitions & combos, Strength-to-weight skill demands</li>
  <li><strong>Execution & Technique (25 points)</strong> – Clean form, Controlled movements, Lock-outs, stability & precision, Smooth landings</li>
  <li><strong>Creativity & Flow (20 points)</strong> – Unique combos, Use of the entire apparatus, Musicality and rhythm, Innovation in transitions</li>
  <li><strong>Endurance & Strength Display (15 points)</strong> – Ability to maintain intensity, Stamina throughout routine, Minimal rest breaks</li>
  <li><strong>Stage Presence & Engagement (10 points)</strong> – Confidence, Crowd interaction, Overall performance charisma</li>
</ol>

<h3>🥇 Winning Criteria</h3>
<p>The athlete with the highest total score wins.</p>
<p><strong>In case of ties:</strong></p>
<ol>
  <li>Difficulty score takes priority</li>
  <li>If still tied → 30-second skill challenge (judges' choice: front lever, muscle-up max, handstand hold, etc.)</li>
  <li>If still tied → Judges' unanimous decision</li>
</ol>

<h3>🎖 Awards</h3>
<ul>
  <li><strong>Champion:</strong> Calisthenics Freestyle King/Queen – Trophy + Certificate</li>
  <li><strong>2nd Place</strong> – Trophy + Certificate</li>
  <li><strong>3rd Place</strong> – Medal + Certificate</li>
  <li><strong>Special Awards (optional):</strong> Best Dynamic Athlete, Best Static Strength Performer, Best Freestyle Flow Artist</li>
</ul>
`,
    date: "March 29, 2026",
    time: "11",
    period: "AM",
    timeRange: "11:00 AM - 12:30 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/nine.jpg",
    featured: false,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["3", "4"],
    sponsors: ["ActiveWear", "VitaBoost"],
    sponsorIds: ["3", "5"],
  },

  // STRENGTH ENDURANCE CIRCUIT – FINALS (id: 24)
  {
    id: "24",
    title: "Strength Endurance Circuit – Finals",
    description: "Ultimate test of power, stamina, speed, and full-body athletic capability",
    fullDescription: `
<h2>🏆 Strength Endurance Circuit – Finals</h2>
<p>The Strength Endurance Circuit – Finals is the ultimate test of power, stamina, speed, and full-body athletic capability. Athletes who qualify from the heats face an intensified final round designed to push their strength and cardiovascular limits. This finale challenges competitors with a multi-station circuit that must be completed in the fastest possible time while maintaining perfect form and meeting all judging standards. The athlete who delivers the strongest combination of strength, endurance, consistency, and technique becomes the Strength Endurance Champion.</p>

<h3>🔥 Competition Format</h3>
<p><strong>1. Finalists</strong></p>
<ul>
  <li>Top 12 athletes (Men & Women categories separate) qualify from the heats</li>
  <li>Based on total time, penalties, and form quality</li>
</ul>

<p><strong>2. Final Circuit Layout</strong><br/>The finals feature 6 high-intensity stations, completed sequentially:</p>
<ol>
  <li>Deadball Ground-to-Shoulder – 12 reps</li>
  <li>Kettlebell Thrusters – 20 reps</li>
  <li>Burpee Broad Jumps – 10 lanes</li>
  <li>Sled Push → Sled Pull – 20m push + 20m pull</li>
  <li>Box Over Jump / Step-Overs – 25 reps</li>
  <li>Sandbag Carry Sprint – 40m dash to finish</li>
</ol>
<p>Athletes must complete the stations in order. Total time = event score.</p>

<p><strong>3. Time Cap</strong></p>
<ul>
  <li>Men: 12 minutes</li>
  <li>Women: 14 minutes</li>
</ul>
<p>If an athlete reaches the time cap, score is based on: Total completed reps, Distance completed (for sled/push pull), Penalty system applicable</p>

<h3>📝 Participation Rules & Regulations</h3>
<p><strong>Eligibility</strong></p>
<ul>
  <li>Participants must have completed and qualified from the preliminary heats</li>
  <li>Age 18+ for both men and women categories</li>
  <li>Athletes must sign the waiver & medical declaration prior to competing</li>
</ul>

<p><strong>General Competition Rules</strong></p>
<ol>
  <li>Athletes must follow the exact sequence of stations</li>
  <li>Judges will count only valid reps; incomplete form = no rep</li>
  <li>Athletes must handle equipment safely — dropping equipment in a dangerous manner results in penalties</li>
  <li>Shoes must remain on throughout the event</li>
  <li>Chalk is allowed; liquid chalk only in designated areas</li>
  <li>Athletes must stay within their lane</li>
  <li>Athletes cannot receive assistance from coaches or spectators</li>
</ol>

<p><strong>Movement Standards (Important)</strong></p>
<ul>
  <li><strong>Deadball Ground-to-Shoulder:</strong> Must touch ground every rep; ball must touch shoulder with control → hips must lock out</li>
  <li><strong>Kettlebell Thrusters:</strong> Full squat below parallel → overhead lockout required with both arms fully extended</li>
  <li><strong>Burpee Broad Jump:</strong> Chest-to-floor touch → two-footed jump → land safely beyond the line</li>
  <li><strong>Sled Push/Pull:</strong> Entire sled must cross the 20 m line before switching push/pull</li>
  <li><strong>Box Overs:</strong> Two feet must touch the top; stepping or jumping allowed</li>
  <li><strong>Sandbag Carry Sprint:</strong> Bag must remain on shoulders or in bear-hug position; no dragging</li>
</ul>

<h3>🚫 Penalties</h3>
<p>Each invalid rep or rule violation leads to:</p>
<ul>
  <li>+5 seconds penalty per no-rep</li>
  <li>+10 seconds penalty for safety violations</li>
  <li><strong>Immediate disqualification for:</strong> Unsportsmanlike conduct, Equipment throwing, Interference with other athletes, Ignoring judges' warnings</li>
</ul>

<h3>🏅 Judging Criteria</h3>
<p>The finals are judged strictly on performance time, adjusted with penalties:</p>
<ol>
  <li><strong>Total Completion Time (Primary Score)</strong> – Fastest time wins</li>
  <li><strong>Valid Reps</strong> – Only reps meeting full movement standards count</li>
  <li><strong>Penalties</strong> – Added to the final time</li>
  <li><strong>Form Consistency</strong> – Severe and repeated bad form may lead to disqualification</li>
</ol>

<h3>🥇 Winning Criteria</h3>
<p>The athlete with the lowest corrected time (time + penalties) is declared the champion.</p>
<p><strong>In case of a tie:</strong></p>
<ol>
  <li>Athlete with fewer penalties wins</li>
  <li>If still tied → 100m assault sprint tie-breaker</li>
  <li>Final tiebreaker → Judges' unanimous decision</li>
</ol>

<h3>🎖 Awards</h3>
<ul>
  <li><strong>Champion</strong> – Strength Endurance King/Queen (Finals) – Trophy + Medal + Certificate</li>
  <li><strong>2nd Place</strong> — Trophy + Certificate</li>
  <li><strong>3rd Place</strong> — Medal + Certificate</li>
  <li><strong>Special awards (optional):</strong> Fastest Station Performer, Best Technique Award, Iron Athlete Award</li>
</ul>
`,
    date: "March 29, 2026",
    time: "12",
    period: "PM",
    timeRange: "12:45 PM - 2:15 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/eleven.jpg",
    featured: false,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["1", "2"],
    sponsors: ["FitLife Nutrition", "PowerGear"],
    sponsorIds: ["1", "2"],
  },

  // POWERLIFTING KING/QUEEN – FINALS (id: 25)
  {
    id: "25",
    title: "Powerlifting King/Queen – Finals",
    description: "Raw Strength • Technique • Maximum Power Output",
    fullDescription: `
<h2>🏆 Powerlifting King/Queen – Finals</h2>
<p>The Powerlifting King/Queen – Finals brings together the strongest athletes from the qualifying heats to compete in a classic test of raw strength: Squat, Bench Press, and Deadlift. This championship is conducted under competition-style rules with certified judges ensuring strict standards for every lift. Finalists battle for total dominance across the three main lifts, and the athlete with the highest total weight lifted wins the prestigious title of Powerlifting King or Powerlifting Queen.</p>

<h3>💪 Competition Format</h3>
<p><strong>1. Finalist Selection</strong></p>
<ul>
  <li>Top 10 male & 10 female athletes qualify from the heats</li>
  <li>Selection based on Wilks/strength score & valid lifts</li>
</ul>

<p><strong>2. Lifts in the Finals</strong><br/>Athletes perform three lifts in this order:</p>
<ol>
  <li>Squat</li>
  <li>Bench Press</li>
  <li>Deadlift</li>
</ol>

<p><strong>3. Attempts</strong></p>
<ul>
  <li>Each athlete gets 3 attempts per lift</li>
  <li>Final score = sum of heaviest valid lift in each category</li>
  <li>Athletes must declare opening attempts before each lift session begins</li>
</ul>

<p><strong>4. Weight Progression Rules</strong></p>
<ul>
  <li>Minimum increase: 2.5 kg between attempts</li>
  <li>Decrease in attempt weight is not allowed once declared</li>
  <li>If an athlete fails an attempt, they may retry the same weight or increase it</li>
</ul>

<h3>📝 Participation Rules & Regulations</h3>
<p><strong>Eligibility</strong></p>
<ul>
  <li>Athletes must qualify from the preliminary heats</li>
  <li>Age 18+ for men & women categories</li>
  <li>Must sign the event waiver & medical declaration</li>
</ul>

<p><strong>Equipment & Gear</strong></p>
<p><strong>Allowed:</strong></p>
<ul>
  <li>Lifting belt</li>
  <li>Wrist wraps</li>
  <li>Knee sleeves</li>
  <li>Chalk (solid only)</li>
</ul>

<p><strong>Not Allowed:</strong></p>
<ul>
  <li>Lifting suits / bench shirts</li>
  <li>Knee wraps (if raw category)</li>
  <li>Straps for deadlifts</li>
  <li>Sticky adhesives or illegal grip aids</li>
</ul>
<p><em>(Event is conducted in RAW category only.)</em></p>

<h3>🔒 Movement Standards (Strict Competition Rules)</h3>
<p><strong>1. Squat</strong></p>
<ul>
  <li>Hip crease must descend below the top of the knee (full depth)</li>
  <li>No downward movement allowed during ascent</li>
  <li>Must wait for the commands: "Squat" → "Rack"</li>
</ul>

<p><strong>2. Bench Press</strong></p>
<ul>
  <li>Feet must stay flat on the floor</li>
  <li>Buttocks must remain on the bench at all times</li>
  <li>Bar must pause at the chest, then press on the "Press" command</li>
  <li>Must wait for "Rack" command to finish</li>
</ul>

<p><strong>3. Deadlift</strong></p>
<ul>
  <li>Lift must be done in one continuous motion</li>
  <li>No hitching or ramping on thighs</li>
  <li>Full lockout with knees and hips extended</li>
  <li>Control required on descent (no dropping)</li>
</ul>

<h3>🚫 Fouls / Invalid Lifts</h3>
<p>A lift is considered invalid if:</p>
<ul>
  <li>Form standards are not met</li>
  <li>Commands are ignored</li>
  <li>Equipment is used illegally</li>
  <li>Steps, stumbling, or loss of control occurs</li>
  <li>Dropping or throwing the barbell</li>
</ul>
<p>Three failed attempts in a lift = Disqualification from totals, but athlete may still perform remaining lifts (not included in scoring).</p>

<h3>⏱ Time Rules</h3>
<ul>
  <li>Athletes get 1 minute to start the lift after being called</li>
  <li>Failure to begin results in a "no lift"</li>
</ul>

<h3>🧮 Judging System</h3>
<ul>
  <li>Three certified judges evaluate each lift</li>
  <li>White light = valid</li>
  <li>Red light = invalid</li>
  <li>At least two white lights are required for a successful lift</li>
</ul>

<h3>🏅 Winning Criteria</h3>
<p>The athlete with the highest total weight (best Squat + Bench + Deadlift) is the champion.</p>
<p><strong>If two athletes tie:</strong></p>
<ol>
  <li>Athlete with lower bodyweight wins</li>
  <li>If still tied → athlete with fewer failed attempts wins</li>
  <li>Final tie-breaker → Head judge decision</li>
</ol>

<h3>🎖 Awards</h3>
<ul>
  <li>🥇 <strong>Powerlifting King / Powerlifting Queen</strong> – Trophy + Medal + Certificate</li>
  <li>🥈 <strong>2nd Place</strong> – Trophy + Certificate</li>
  <li>🥉 <strong>3rd Place</strong> – Medal + Certificate</li>
  <li><strong>Special Awards (Optional):</strong> Best Squat, Best Bench Press, Best Deadlift, Best Overall Technician, Best Rookie Lifter</li>
</ul>
`,
    date: "March 29, 2026",
    time: "2",
    period: "PM",
    timeRange: "2:30 PM - 4:30 PM",
    location: "Competition Arena",
    price: "Free Entry",
    image: "/images/21/deadlift.jpg",
    featured: true,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["2", "4"],
    sponsors: ["PowerGear", "ActiveWear"],
    sponsorIds: ["2", "3"],
  },

  // BATTLE OF GYMS – GRAND FINALE (id: 26)
  {
    id: "26",
    title: "Battle of Gyms – Grand Finale",
    description: "The ultimate team fitness showdown for Bengaluru's Fittest Gym title",
    fullDescription: `
<h2>🏆 Battle of Gyms – Grand Finale</h2>
<p>The Battle of Gyms – Grand Finale is the ultimate team fitness showdown where the strongest, fastest, and most coordinated gym teams compete for overall supremacy. Top-performing gyms from the preliminary rounds return for an explosive final stage featuring strength challenges, team relays, synchronised workouts, and a high-intensity obstacle course. This is not just about individual strength — it's about teamwork, strategy, communication, and unity. The event determines which gym takes home the title of Fittest Gym of Bengaluru.</p>

<h3>🔥 Competition Format</h3>
<p><strong>1. Finalist Selection</strong></p>
<ul>
  <li>Top 8 teams from the Battle of Gyms – Team Round qualify</li>
  <li>Each team consists of: 4 main athletes (2 men + 2 women), 1 optional substitute</li>
</ul>

<p><strong>2. Final Event Structure</strong><br/>The Grand Finale consists of 4 rounds, each testing a different aspect of fitness:</p>

<p><strong>ROUND 1 — Team Strength Gauntlet</strong><br/>Each team must complete a strength trio:</p>
<ul>
  <li>Axle Bar Deadlift Hold (Mixed pair)</li>
  <li>Synchronized Goblet Squats</li>
  <li>Team Sandbag Carry Chain</li>
</ul>
<p>Scoring: Reps + duration + synchronisation score.</p>

<p><strong>ROUND 2 — Functional Relay Race</strong><br/>A fast-paced relay challenge:</p>
<ol>
  <li>Athlete 1 → Sled Push</li>
  <li>Athlete 2 → Burpee-to-Box Jump Run</li>
  <li>Athlete 3 → Kettlebell Farmer Carry</li>
  <li>Athlete 4 → Deadball Shoulder Sprint</li>
</ol>
<p>Scoring: Total time.</p>

<p><strong>ROUND 3 — Synchronised Team Workout (STW)</strong><br/>All four athletes perform a time-capped workout together:</p>
<ul>
  <li>20 Sync Push-Ups</li>
  <li>30 Sync Sit-Ups</li>
  <li>40 Sync Wall Balls</li>
  <li>100m Sync Team Run Finish</li>
</ul>
<p>All reps count only when synchronized. Scoring: Time + penalties.</p>

<p><strong>ROUND 4 — The Ultimate Obstacle Course</strong><br/>A thrilling finale:</p>
<ul>
  <li>Over-Under Hurdles</li>
  <li>Rope Climbs / Rope Walk</li>
  <li>Tire Flip Lane</li>
  <li>Monkey Bar / Bar Traverse</li>
  <li>Sprint to Victory Arch</li>
</ul>
<p>Scoring: Fastest total course time.</p>

<h3>📝 Participation Rules & Regulations</h3>
<p><strong>Eligibility</strong></p>
<ul>
  <li>Teams representing registered gyms/fitness centres</li>
  <li>Athletes must be 18+</li>
  <li>Same athletes must compete in all rounds unless substitute is required due to injury</li>
  <li>All members must sign waivers & medical declarations</li>
</ul>

<h3>⚙️ Team Rules</h3>
<ol>
  <li>Teams must consist of 4 main competitors (mixed gender mandatory)</li>
  <li>Any swap with a substitute must be approved by judges before the round starts</li>
  <li>Teams must complete all stations in the prescribed order</li>
  <li>External assistance (coaches, friends, audience) is prohibited</li>
  <li>Uniform T-shirts recommended for professional appearance</li>
</ol>

<h3>🚫 Penalty Rules</h3>
<p>Penalties are applied for:</p>
<ul>
  <li>False starts (5 seconds)</li>
  <li>Invalid reps (5 seconds per no-rep)</li>
  <li>Synchronisation breaks in STW (10 seconds)</li>
  <li>Lane interference (10 seconds)</li>
  <li>Misconduct or unsafe handling (immediate disqualification)</li>
</ul>
<p>Judges have full authority to stop a team if unsafe behaviour is observed.</p>

<h3>🔒 Movement Standards (Key Highlights)</h3>
<ul>
  <li><strong>Deadlift Hold:</strong> Bar must be fully locked out. Any hip drop = attempt terminated</li>
  <li><strong>Goblet Squats:</strong> Hip crease must go below knee height. Synchronized depth required</li>
  <li><strong>Sandbag Carry:</strong> No dragging; bag must stay off the ground</li>
  <li><strong>Wall Balls:</strong> Ball must hit target; air balls = no rep</li>
  <li><strong>Obstacle Course:</strong> Entire team must cross each checkpoint before proceeding. Skipping obstacles = automatic disqualification</li>
</ul>

<h3>🧮 Judging & Scoring</h3>
<p>Each round awards points:</p>
<ul>
  <li>1st place – 100 points</li>
  <li>2nd place – 80 points</li>
  <li>3rd place – 60 points</li>
  <li>4th place – 40 points</li>
  <li>Remaining places – 20 points each</li>
</ul>
<p><strong>Final Ranking = Total points from all 4 rounds.</strong></p>
<p><strong>In case of a tie:</strong></p>
<ol>
  <li>Team with most first-place finishes wins</li>
  <li>If still tied → winner decided by Obstacle Course timing</li>
  <li>Final option → Head judge decision</li>
</ol>

<h3>🏅 Winning Criteria</h3>
<p>The team with the highest cumulative score across all rounds wins the title of <strong>Fittest Gym of Bengaluru – Battle of Gyms Grand Champions.</strong></p>

<h3>🎖 Awards</h3>
<ul>
  <li>🥇 <strong>Champion Gym</strong> – Trophy + Team Medals + Certificate + Recognition Spotlight</li>
  <li>🥈 <strong>2nd Place</strong> – Trophy + Medals + Certificate</li>
  <li>🥉 <strong>3rd Place</strong> – Medals + Certificate</li>
</ul>
`,
    date: "March 29, 2026",
    time: "5",
    period: "PM",
    timeRange: "5:00 PM - 7:00 PM",
    location: "Competition Arena",
    price: "Entry Fee: 100",
    image: "/images/21/seven.jpg",
    featured: true,
    startDate: "March 29, 2026",
    endDate: "March 29, 2026",
    speakerIds: ["1", "3"],
    sponsors: ["FitLife Nutrition", "PowerGear", "HealthTech"],
    sponsorIds: ["1", "2", "4"],
  },
]

// Function to get event by ID
export function getEventById(id: string) {
  return events.find((event) => event.id === id)
}

// Speaker type definition
export type Speaker = {
  id: string
  name: string
  title: string
  bio: string
  image: string
  day?: string
  timing?: string
  dateOfBirth?: string
  mobileNumber?: string
  address?: {
    line1: string
    line2?: string
  }
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
  }
  skills?: {
    [key: string]: number
  }
  color?: string
}

// Speakers data
export const speakers: Speaker[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Head Coach",
    bio: "John is a lead coach with 10+ years building functional athletes.",
    image: "/placeholder.svg?height=200&width=200",
    day: "March 28",
    timing: "10:00 AM",
    mobileNumber: "123-456-7890",
    address: {
      line1: "123 Main St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      coaching: 95,
      conditioning: 90,
    },
    color: "border-blue-500",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Strength Coach",
    bio: "Jane specializes in strength sports and powerlifting coaching.",
    image: "/placeholder.svg?height=200&width=200",
    day: "March 28",
    timing: "11:00 AM",
    mobileNumber: "456-789-0123",
    address: {
      line1: "456 Elm St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      powerlifting: 98,
      technique: 92,
    },
    color: "border-red-500",
  },
  {
    id: "3",
    name: "Mike Brown",
    title: "Calisthenics Coach",
    bio: "Mike is a specialist in bodyweight strength and calisthenics progressions.",
    image: "/placeholder.svg?height=200&width=200",
    day: "March 28",
    timing: "12:00 PM",
    mobileNumber: "789-012-3456",
    address: {
      line1: "789 Oak St",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      calisthenics: 95,
      mobility: 88,
    },
    color: "border-green-500",
  },
  {
    id: "4",
    name: "Sara Lee",
    title: "Conditioning Specialist",
    bio: "Sara focuses on conditioning and athlete preparation for competitions.",
    image: "/placeholder.svg?height=200&width=200",
    day: "March 29",
    timing: "10:30 AM",
    mobileNumber: "987-654-3210",
    address: {
      line1: "12 Park Ave",
      line2: "Bengaluru, India",
    },
    socialLinks: {
      instagram: "https://www.instagram.com",
    },
    skills: {
      conditioning: 94,
      programming: 89,
    },
    color: "border-purple-500",
  },
]

// Sponsors data
export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "FitLife Nutrition",
    logo: "/placeholder.svg?height=200&width=200",
    tier: "Gold",
    description:
      "FitLife Nutrition provides premium supplements and nutrition advice for fitness enthusiasts and athletes.",
    website: "https://www.fitlifenutrition.com",
    location: "New York, NY",
    industry: ["Nutrition", "Supplements", "Health"],
    yearsFunding: 5,
    employeeCount: 120,
    sponsorshipAmount: "$25,000",
    benefits: ["Main Stage Branding", "VIP Access", "Product Showcase"],
    color: "border-yellow-500",
  },
  {
    id: "2",
    name: "PowerGear",
    logo: "/placeholder.svg?height=200&width=200",
    tier: "Silver",
    description: "PowerGear manufactures high-quality fitness equipment for home and commercial gyms.",
    website: "https://www.powergear.com",
    location: "Los Angeles, CA",
    industry: ["Equipment", "Fitness", "Manufacturing"],
    yearsFunding: 3,
    employeeCount: 85,
    sponsorshipAmount: "$15,000",
    benefits: ["Exhibition Space", "Logo on Materials"],
    color: "border-gray-400",
  },
  {
    id: "3",
    name: "ActiveWear",
    logo: "/placeholder.svg?height=200&width=200",
    tier: "Gold",
    description: "ActiveWear designs and produces premium athletic clothing for all types of fitness activities.",
    website: "https://www.activewear.com",
    location: "Chicago, IL",
    industry: ["Apparel", "Fashion", "Retail"],
    yearsFunding: 7,
    employeeCount: 200,
    sponsorshipAmount: "$30,000",
    benefits: ["Main Stage Branding", "VIP Access", "Fashion Show"],
    color: "border-yellow-500",
  },
  {
    id: "4",
    name: "HealthTech",
    logo: "/placeholder.svg?height=200&width=200",
    tier: "Bronze",
    description: "HealthTech develops innovative wearable technology for fitness tracking and health monitoring.",
    website: "https://www.healthtech.com",
    location: "San Francisco, CA",
    industry: ["Technology", "Wearables", "Health"],
    yearsFunding: 2,
    employeeCount: 45,
    sponsorshipAmount: "$8,000",
    benefits: ["Exhibition Space"],
    color: "border-orange-700",
  },
  {
    id: "5",
    name: "VitaBoost",
    logo: "/placeholder.svg?height=200&width=200",
    tier: "Silver",
    description: "VitaBoost creates natural energy drinks and recovery beverages for fitness enthusiasts.",
    website: "https://www.vitaboost.com",
    location: "Miami, FL",
    industry: ["Beverages", "Nutrition", "Health"],
    yearsFunding: 4,
    employeeCount: 60,
    sponsorshipAmount: "$12,000",
    benefits: ["Product Sampling", "Logo on Materials"],
    color: "border-gray-400",
  },
]

export function getSponsorById(id: string) {
  return sponsors.find((sponsor) => sponsor.id === id)
}
