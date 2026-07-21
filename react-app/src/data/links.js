// Putnam County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-21

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point";

export const LINKS = [
  // ---------- Government ----------
  { name: "Putnam County (Official Site)", category: "Government", subcategory: "County", url: "https://putnamcountyohio.gov/", description: "Official government portal for Putnam County, Ohio (county seat: Ottawa)." },
  { name: "Putnam County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.putnamcountyohio.gov/", description: "Property records, valuations, and parcel/property search (hosted on the Pivot Point platform)." },
  { name: "Putnam County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/putnam/", description: "Voter registration, polling locations, and election administration." },
  { name: "Putnam County Commissioners", category: "Government", subcategory: "Commissioners", url: "https://putnamcountyohio.gov/commissioners/", description: "County commissioners' office: budget, resolutions, and county administration." },
  // ---------- Education ----------
  { name: "Putnam County District Library", category: "Education", subcategory: "Library", url: "https://www.mypcdl.org/", description: "Countywide public library system, headquartered in Ottawa." },
  { name: "Ottawa-Glandorf Local Schools", category: "Education", subcategory: "K-12", url: "https://www.ottawaglandorf.org/", description: "The county seat's public school district, serving Ottawa and Glandorf." },
  { name: "Rhodes State College", category: "Education", subcategory: "Higher Ed", url: "https://www.rhodesstate.edu/", description: "Public two-year college in nearby Lima serving Putnam County and the region." },
  // ---------- Health ----------
  { name: "Putnam County Health Department", category: "Health", subcategory: "Public Health", url: "https://putnamhealth.com/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Blanchard Valley Health System", category: "Health", subcategory: "Hospital", url: "https://www.bvhealthsystem.org/", description: "Regional health system (Findlay) serving Putnam County and northwest Ohio." },
  // ---------- Business & Economy ----------
  { name: "Putnam County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.putnamcountychamber.com/", description: "Business advocacy, member support, and community resources across the county." },
  { name: "Putnam County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://putnamcountyohio.gov/commissioners/economic-development/", description: "Countywide economic development, business attraction, and retention." },
  // ---------- Community & Social ----------
  { name: "Build Putnam", category: "Community & Social", subcategory: "Workforce", url: "https://buildputnam.com/", description: "Countywide talent-attraction, workforce, and community initiative." },
  // ---------- Recreation & Tourism ----------
  { name: "Putnam County Fair", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.putnamcountyfair.com/", description: "The Putnam County Fair and year-round events at the county fairgrounds in Ottawa." },
  // ---------- News & Media ----------
  { name: "Putnam County Sentinel", category: "News & Media", subcategory: "Newspaper", url: "https://www.putnamsentinel.com/", description: "Putnam County's newspaper covering local news, sports, and events." },
];
