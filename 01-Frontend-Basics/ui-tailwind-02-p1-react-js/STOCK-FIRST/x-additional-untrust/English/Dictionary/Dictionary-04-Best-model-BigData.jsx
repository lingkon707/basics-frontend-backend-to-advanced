import React, { useState, useEffect } from "react";

// Updated example JSON data (no letters)
const data = {
  "2025-08-01": ["Abortion", "Affirmative Action", "Cow", "Algorithms", "Aspiration", "Achievement", "Ambition", "Attitude", "Action", "Authenticity", "Awareness", "Adventure", "Alignment", "Aims", "Aspire", "Attain", "Arise", "Awaken", "Adversity", "Adventure"],
  "2025-08-02": ["Health Care", "Healthcare Online", "Alex", "Healing", "Honor", "Happiness", "Hard Work", "Heart", "Humility", "Holistic", "Harmony", "Helpfulness", "Healing Power", "Holistic", "Hustle", "Horizon", "Hub", "Hero", "Holistic Health", "Humility"],
  "2025-08-03": ["Race & Ethnicity", "Religion & Government", "Atleast", "Respect", "Recovery", "Resourcefulness", "Rise", "Revolution", "Reinvigorate", "Renew", "Recharge", "Rebirth", "Realization", "Reaffirm", "Rejuvenate", "Reach", "Revolutionize", "Radical", "Radiance", "Resolution"],
  "2025-08-04": ["Success", "Strength", "Stamina", "Skill", "App", "Synergy", "Self-Motivation", "Support", "Satisfaction", "Self-Belief", "Spirituality", "Serenity", "Strategy", "Start", "Structure", "Sustain", "Stretch", "Strive", "Self-Improvement", "Shine"],
  "2025-08-05": ["Growth", "Gratitude", "Goals", "Boll", "Grind", "Generosity", "Glory", "Grace", "Genuine", "Guts", "Grounded", "Gracious", "Glorious", "Gain", "Guidance", "Glow", "Gratefulness", "Glimmer", "Glisten", "Gearing Up"],
  "2025-08-06": ["Perseverance", "Patience", "Passion", "Power", "Purpose", "Pride", "Progress", "Pioneering", "Potential", "Positivity", "Persistence", "Performance", "Prosperity", "Principles", "Play", "Pursuit", "Pioneering Spirit", "Pace", "Ponder", "Push"],
  "2025-08-07": ["Courage", "Confidence", "Apple", "Commitment", "Clarity", "Creativity", "Conquer", "Consistency", "Concentration", "Caring", "Collaboration", "Contribution", "Cleverness", "Cure", "Calm", "Change", "Champion", "Clear Vision", "Climbing", "Clarity of Mind"],
  "2025-08-08": ["Innovation", "Impact", "Integrity", "Insight", "Inspiration", "Independence", "Intensity", "Initiative", "Invent", "Ignite", "Intuition", "Influence", "Indomitable", "Instinct", "Intelligence", "Invest", "Interaction", "Improvement", "Immense", "Imagination"],
  "2025-08-09": ["Balance", "Brilliance", "Breakthrough", "Bravery", "Belief", "Boldness", "Bliss", "Breathe", "Boost", "Bridging", "Boundaries", "Blessings", "Benevolence", "Bright Future", "Begin", "Bend", "Being", "Bounce", "Brisk", "Build"],
  "2025-08-10": ["Vision", "Victory", "Valiant", "Vibrance", "Venture", "Vigor", "Virtue", "Vow", "Value", "Venture", "Vocal", "Vibe", "Vast", "Vanguard", "Volition", "Vitality", "Vow to Win", "Vibrant Energy", "Victory Dance", "Viral Success"],
  "2025-08-11": ["Empathy", "Enthusiasm", "Empower", "Enlighten", "Elevate", "Energy", "Enjoyment", "Efficiency", "Expand", "Excellence", "Excelsior", "Envision", "Endurance", "Ease", "Energize", "Engage", "Endless", "Euphoria", "Elevation", "Eminence"],
  "2025-08-12": ["Integrity", "Influence", "Inspire", "Independence", "Impress", "Introspection", "Intent", "Initiate", "Imagine", "Infinite", "Inventiveness", "Instinct", "Innovation", "Indomitable", "Immortality", "Invest", "Industrious", "Invention", "Intense Focus", "Immense Courage"],
  "2025-08-13": ["Mindset", "Motivation", "Momentum", "Mission", "Mastery", "Might", "Mindfulness", "Magnificent", "Mystery", "Manifestation", "Mellow", "Magnetism", "Marvel", "Move Forward", "Mastery of Self", "Maneuver", "Maximize", "Melodic", "Motivate", "Momentum Building"],
  "2025-08-14": ["Trust", "Teamwork", "Triumph", "Tenacity", "Transform", "Tactics", "Thriving", "Thoughtful", "Transcend", "Tolerate", "Talent", "True Self", "Tether", "Transfiguration", "Thrive", "Tension", "Time", "Togetherness", "Trust the Process", "Tackle"],
  "2025-08-15": ["Change", "Challenge", "Climb", "Courageous", "Caring", "Consistency", "Create", "Compassion", "Confidence", "Catalyst", "Contribute", "Cleverness", "Conviction", "Compete", "Collaborate", "Curiosity", "Clear Path", "Consciousness", "Cumulative Progress", "Celebrate"],
  "2025-08-16": ["Awareness", "Affirmation", "Abundance", "Aspiration", "Action", "Affluence", "Authenticity", "Admire", "Adapt", "Adventure", "Amplify", "Achieve", "Adaptability", "Aspire Higher", "Authentic Self", "Astonishing", "Alive", "Amaze", "All In", "Attract Success"],
  "2025-08-17": ["Belief", "Bravery", "Brilliance", "Balance", "Brisk", "Breathe", "Bountiful", "Betterment", "Big Dreams", "Blaze", "Bloom", "Be Courageous", "Benevolent", "Brighten", "Breathe Life", "Blessed", "Bold Choices", "Break Boundaries", "Be You", "Brave Heart"],
  "2025-08-18": ["Momentum", "Mindfulness", "Meditation", "Mission", "Mastermind", "Manifest", "Motive", "Moxie", "Mastery of Time", "Mental Clarity", "Magnetize", "Move Forward", "Minds Open", "Maximize Impact", "Motivate Action", "Momentous", "Manifest Dreams", "Meaningful", "Mold", "Mindset Shift"],
  "2025-08-19": ["Purpose", "Persistence", "Pride", "Passion", "Positivity", "Potential", "Progress", "Pursuit", "Push", "Pragmatic", "Precise", "Pioneer", "Patience", "Practicality", "Peak Performance", "Pillar of Strength", "Positive Vibes", "Powerful Decisions", "Perfection", "Pace"],
  "2025-08-20": ["Diligence", "Dedication", "Determination", "Drive", "Dream", "Discipline", "Daring", "Destiny", "Deliver", "Dependability", "Deeds", "Dedicate", "Dare to Dream", "Determined", "Defy Limits", "Dare", "Divine", "Dynamic", "Depth", "Dazzling"],
  "2025-08-21": ["Focus", "Fearless", "Fortitude", "Flourish", "Faith", "Fearless Pursuit", "Fly High", "Fulfillment", "Fire", "Fortune", "Fast Track", "Fear Not", "Forward", "Find Yourself", "Finesse", "Favour", "Flexibility", "Fighter", "Faithful", "Fulfilling"],
  "2025-08-22": ["Grind", "Growth", "Gratitude", "Glory", "Glance", "Gracious", "Grit", "Glimmer", "Goal-Driven", "Give", "Gift", "Gravitate", "Glowing", "Gather", "Glow", "Gains", "Glimpse", "Give Back", "Greater", "Gracious Heart"],
  "2025-08-23": ["Intention", "Inspire", "Independence", "Integrity", "Intuition", "Ignite", "Immense", "Indomitable", "Increase", "Influence", "Infuse", "Invent", "Immense Power", "Invest", "Intelligence", "Innovate", "Inclusion", "Imagination", "Impress", "Intensify"],
  "2025-08-24": ["Unity", "Upward", "Uplift", "Understand", "Undeniable", "Unique", "Unlimited", "Unstoppable", "Unveil", "Upgrade", "Unite", "Unlock", "Uplifting", "Urgency", "Undaunted", "Use Power", "Unfold", "Undeniable Force", "Unveil Potential", "Ultimate"],
  "2025-08-25": ["Victory", "Vision", "Vitality", "Vibe", "Valiant", "Vast", "Vibrancy", "Valuable", "Vocalize", "Vanguard", "Vastness", "Vivid", "Venture", "Vigorous", "Value", "Virtuous", "Viral", "Vibrant", "Veneration", "Victory Achieved"],
  "2025-08-26": ["Wisdom", "Winning", "Wellness", "Wonders", "Willpower", "Worthy", "Wander", "Wealth", "Well-Being", "Wield", "Willingness", "Woke", "Worship", "Work Ethic", "Wholeness", "Worry-Free", "Whirlwind", "Wave", "Wealth of Knowledge", "Well-Deserved Success"],
  "2025-08-27": ["X-factor", "Xcellence", "Xcite", "Xpress", "Xpert", "Xcel", "Xpose", "Xecute", "Xtreme", "Xclusive", "Xtraordinary", "Xistence", "Xpert Advices", "Xpress Purpose", "Xperience", "Xchange", "Xpertise", "Xceed", "Xplore", "Xponential"],
  "2025-08-28": ["You", "Yearning", "Youth", "Yields", "Yoke", "Yours", "Yen", "Yes", "You are Enough", "Yielding", "Yogic", "Yes We Can", "Yourself", "Yummy", "Yellow", "Yippee", "Yard", "Yogurt", "Yoke of Success", "Yearning for Change"],
  "2025-08-29": ["Zest", "Zen", "Zeal", "Zodiac", "Zoom", "Zing", "Zillionaire", "Zipped", "Zippy", "Zenith", "Zero Limits", "Zebra", "Zest for Life", "Zealous", "Zingy", "Zodiac Goals", "Zamboni", "Zumba", "Zen Mode", "Zion"],
  "2025-08-30": ["Undefeated", "Unity in Diversity", "Unyielding", "Understanding", "Ultimate Goal", "Unbroken", "Underestimated", "Undistracted", "Unperturbed", "Uprising", "Unconquered", "Unimaginable", "Undeterred", "Upward Movement", "Unstoppable Force", "Unified Strength", "Unlock Success", "Understanding the Self", "Uptake of New Skills"],
  "2025-08-31": ["Success", "Sustainability", "Strength", "Sustain", "Success Path", "Strategize", "Self-Realization", "Self-Love", "Strength in Adversity", "Step Up", "Soar", "Solution-Oriented", "Stay Strong", "Survival", "Smart Moves", "Sow Growth", "Start Fresh", "Seek Excellence", "Serve Others"]
};


const FilterList = () => {
  // Set the default selected date to "all"
  const [selectedDate, setSelectedDate] = useState("all");
  const [letterFilter, setLetterFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Get all unique dates for dropdown options
  const availableDates = Object.keys(data);

  // Effect to apply filtering when selectedDate or letterFilter changes
  useEffect(() => {
    filterData(selectedDate, letterFilter);
  }, [selectedDate, letterFilter]);

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date and filter data
  };

  const handleLetterChange = (e) => {
    const letter = e.target.value.toUpperCase(); // Normalize the input to uppercase
    setLetterFilter(letter);
  };

  const handleAllLettersClick = () => {
    setLetterFilter(""); // Clear letter filter
    filterData(selectedDate, ""); // Show all letters
  };

  const filterData = (date, letter) => {
    let filtered = [];

    if (date === "all") {
      // If "All Dates" is selected, show data from all dates
      availableDates.forEach((date) => {
        filtered = [
          ...filtered,
          ...data[date].filter((item) => item.toUpperCase().startsWith(letter)),
        ];
      });
    } else if (date && letter) {
      // Filter by both date and letter
      filtered = data[date].filter((item) =>
        item.toUpperCase().startsWith(letter)
      );
    } else if (date) {
      // Filter by date only
      filtered = data[date];
    } else if (letter) {
      // Filter by letter only (across all dates)
      availableDates.forEach((date) => {
        filtered = [
          ...filtered,
          ...data[date].filter((item) => item.toUpperCase().startsWith(letter)),
        ];
      });
    }

    setFilteredData(filtered);
  };

  return (
    <div className="bg-sky-800 min-h-screen">
      <div className="container px-4 py-3 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
            {/* Date Selection Dropdown */}
            <div className="flex-1">
              <select
                className="w-full md:w-64 px-4 text-white bg-blue-900 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
              >
                <option value="all">All Dates</option> {/* Default is "All Dates" */}
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Input for Letter Filter */}
            <div className="flex-1">
              <input
                type="text"
                className="w-full md:w-64 px-4 py-3 text-black bg-white rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Filter by letter"
                value={letterFilter}
                onChange={handleLetterChange}
              />
            </div>
          </div>

          {/* Display Filtered Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-lg font-semibold text-gray-700">{item}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-white text-2xl">
                No data found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
