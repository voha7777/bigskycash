export interface StateInfo {
  name: string;
  abbreviation: string;
  slug: string;
  cities?: string[];
}

export const statesList: StateInfo[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    slug: "alabama",
    cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"]
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    slug: "alaska",
    cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"]
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    slug: "arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"]
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    slug: "arkansas",
    cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"]
  },
  {
    name: "California",
    abbreviation: "CA",
    slug: "california",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"]
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    slug: "colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    slug: "connecticut",
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    slug: "delaware",
    cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    slug: "georgia",
    cities: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon"]
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    slug: "hawaii",
    cities: ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Waipahu"]
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    slug: "idaho",
    cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"]
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    slug: "illinois",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"]
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    slug: "indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"]
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    slug: "iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"]
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    slug: "kansas",
    cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"]
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    slug: "kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"]
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    slug: "louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"]
  },
  {
    name: "Maine",
    abbreviation: "ME",
    slug: "maine",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    slug: "maryland",
    cities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Annapolis"]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    slug: "massachusetts",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"]
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    slug: "michigan",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"]
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    slug: "minnesota",
    cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"]
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    slug: "mississippi",
    cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"]
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    slug: "missouri",
    cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"]
  },
  {
    name: "Montana",
    abbreviation: "MT",
    slug: "montana",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"]
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    slug: "nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"]
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    slug: "nevada",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    slug: "new-hampshire",
    cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover"]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    slug: "new-jersey",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"]
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    slug: "new-mexico",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"]
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    slug: "north-carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"]
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    slug: "north-dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"]
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    slug: "ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"]
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    slug: "oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"]
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    slug: "oregon",
    cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro"]
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    slug: "pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    slug: "rhode-island",
    cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    slug: "south-carolina",
    cities: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill"]
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    slug: "south-dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"]
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    slug: "tennessee",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"]
  },
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"]
  },{
    name: "Utah",
    abbreviation: "UT",
    slug: "utah",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"]
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    slug: "vermont",
    cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier"]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    slug: "virginia",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News"]
  },
  {
    name: "Washington",
    abbreviation: "WA",
    slug: "washington",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"]
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    slug: "west-virginia",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling"]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    slug: "wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"]
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    slug: "wyoming",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"]
  }
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return statesList.find(state => state.slug === slug);
}

export function getStateByAbbreviation(abbreviation: string): StateInfo | undefined {
  return statesList.find(state => state.abbreviation === abbreviation);
}

export function getStateByName(name: string): StateInfo | undefined {
  return statesList.find(state => state.name === name);
}
