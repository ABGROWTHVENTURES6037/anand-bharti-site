/* ============================================================
   SITE DATA  -  edit this file to add or change colleges,
   courses and exams. Keep the commas and quote marks exactly
   as they are. Details such as dates, fees and cut-offs change
   every year, so always confirm them on the official website
   before sharing them with students.
   ============================================================ */
window.FORM_URL = "https://forms.gle/xK1oRpU3AnXViMCp9";

window.STREAMS = {
  engineering: "Engineering",
  management: "Management",
  medical: "Medical",
  law: "Law",
  it: "Computer & IT",
  arts: "Arts, Science & Commerce",
  design: "Design & Architecture"
};

window.COLLEGES = [
  { name: "IIT Bombay", city: "Mumbai", hub: "Mumbai", state: "Maharashtra", type: "Public", streams: ["engineering","it"], exams: ["JEE Advanced"], note: "Institute of National Importance" },
  { name: "IIT Delhi", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["engineering","it"], exams: ["JEE Advanced"], note: "Institute of National Importance" },
  { name: "IIT Madras", city: "Chennai", hub: "Chennai", state: "Tamil Nadu", type: "Public", streams: ["engineering","it"], exams: ["JEE Advanced"], note: "Institute of National Importance" },
  { name: "IIT Kanpur", city: "Kanpur", hub: "Kanpur", state: "Uttar Pradesh", type: "Public", streams: ["engineering","it"], exams: ["JEE Advanced"], note: "Institute of National Importance" },
  { name: "IIT Kharagpur", city: "Kharagpur", hub: "Kharagpur", state: "West Bengal", type: "Public", streams: ["engineering","it"], exams: ["JEE Advanced"], note: "Institute of National Importance" },
  { name: "NIT Tiruchirappalli", city: "Tiruchirappalli", hub: "Tiruchirappalli", state: "Tamil Nadu", type: "Public", streams: ["engineering","it"], exams: ["JEE Main"], note: "National Institute of Technology" },
  { name: "IIIT Hyderabad", city: "Hyderabad", hub: "Hyderabad", state: "Telangana", type: "Public", streams: ["it","engineering"], exams: ["JEE Main","UGEE"], note: "Computer science focus" },
  { name: "BITS Pilani", city: "Pilani", hub: "Pilani", state: "Rajasthan", type: "Private", streams: ["engineering","it","management"], exams: ["BITSAT"], note: "Deemed university" },
  { name: "VIT Vellore", city: "Vellore", hub: "Vellore", state: "Tamil Nadu", type: "Private", streams: ["engineering","it"], exams: ["VITEEE"], note: "Deemed university" },
  { name: "Manipal Academy of Higher Education", city: "Manipal", hub: "Manipal", state: "Karnataka", type: "Private", streams: ["engineering","medical","management"], exams: ["MET","NEET UG"], note: "Deemed university" },
  { name: "IIM Ahmedabad", city: "Ahmedabad", hub: "Ahmedabad", state: "Gujarat", type: "Public", streams: ["management"], exams: ["CAT"], note: "Indian Institute of Management" },
  { name: "IIM Bangalore", city: "Bengaluru", hub: "Bengaluru", state: "Karnataka", type: "Public", streams: ["management"], exams: ["CAT"], note: "Indian Institute of Management" },
  { name: "IIM Calcutta", city: "Kolkata", hub: "Kolkata", state: "West Bengal", type: "Public", streams: ["management"], exams: ["CAT"], note: "Indian Institute of Management" },
  { name: "XLRI Jamshedpur", city: "Jamshedpur", hub: "Jamshedpur", state: "Jharkhand", type: "Private", streams: ["management"], exams: ["XAT"], note: "Business and HR school" },
  { name: "SIBM Pune", city: "Pune", hub: "Pune", state: "Maharashtra", type: "Private", streams: ["management"], exams: ["SNAP"], note: "Symbiosis Institute of Business Management" },
  { name: "AIIMS New Delhi", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["medical"], exams: ["NEET UG"], note: "Institute of National Importance" },
  { name: "CMC Vellore", city: "Vellore", hub: "Vellore", state: "Tamil Nadu", type: "Private", streams: ["medical"], exams: ["NEET UG"], note: "Christian Medical College" },
  { name: "JIPMER Puducherry", city: "Puducherry", hub: "Puducherry", state: "Puducherry", type: "Public", streams: ["medical"], exams: ["NEET UG"], note: "Institute of National Importance" },
  { name: "NLSIU Bengaluru", city: "Bengaluru", hub: "Bengaluru", state: "Karnataka", type: "Public", streams: ["law"], exams: ["CLAT"], note: "National Law School of India University" },
  { name: "NLU Delhi", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["law"], exams: ["AILET"], note: "National Law University" },
  { name: "Symbiosis Law School Pune", city: "Pune", hub: "Pune", state: "Maharashtra", type: "Private", streams: ["law"], exams: ["SLAT"], note: "Symbiosis International" },
  { name: "University of Delhi", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["arts"], exams: ["CUET UG"], note: "Central university" },
  { name: "Shri Ram College of Commerce", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["arts"], exams: ["CUET UG"], note: "College of University of Delhi" },
  { name: "Jawaharlal Nehru University", city: "New Delhi", hub: "Delhi NCR", state: "Delhi", type: "Public", streams: ["arts"], exams: ["CUET UG","CUET PG"], note: "Central university" },
  { name: "University of Hyderabad", city: "Hyderabad", hub: "Hyderabad", state: "Telangana", type: "Public", streams: ["arts"], exams: ["CUET UG","CUET PG"], note: "Central university" },
  { name: "Christ University", city: "Bengaluru", hub: "Bengaluru", state: "Karnataka", type: "Private", streams: ["arts","management"], exams: ["University entrance process"], note: "Deemed university" },
  { name: "National Institute of Design", city: "Ahmedabad", hub: "Ahmedabad", state: "Gujarat", type: "Public", streams: ["design"], exams: ["NID DAT"], note: "Design institute" }
];

window.COURSES = [
  { name: "B.Tech / BE", level: "Undergraduate", years: "4 years", stream: "engineering", eligibility: "Class 12 with Physics, Chemistry and Mathematics", exams: ["JEE Main","JEE Advanced","BITSAT","VITEEE","State CETs"], careers: "Software engineer, civil, mechanical or electrical engineer, data analyst" },
  { name: "M.Tech", level: "Postgraduate", years: "2 years", stream: "engineering", eligibility: "B.Tech / BE in a relevant branch", exams: ["GATE"], careers: "Research engineer, design engineer, lecturer, public sector roles" },
  { name: "BCA", level: "Undergraduate", years: "3 years", stream: "it", eligibility: "Class 12, usually with Mathematics", exams: ["CUET UG","University entrance tests"], careers: "Software developer, web developer, system administrator" },
  { name: "MCA", level: "Postgraduate", years: "2 years", stream: "it", eligibility: "BCA or a graduation with Mathematics", exams: ["NIMCET","CUET PG"], careers: "Software architect, cloud engineer, IT consultant" },
  { name: "MBBS", level: "Undergraduate", years: "5.5 years (including internship)", stream: "medical", eligibility: "Class 12 with Physics, Chemistry and Biology", exams: ["NEET UG"], careers: "Doctor, surgeon, medical researcher, public health officer" },
  { name: "BDS", level: "Undergraduate", years: "5 years (including internship)", stream: "medical", eligibility: "Class 12 with Physics, Chemistry and Biology", exams: ["NEET UG"], careers: "Dentist, oral surgeon, dental researcher" },
  { name: "B.Pharm", level: "Undergraduate", years: "4 years", stream: "medical", eligibility: "Class 12 with Physics, Chemistry and Biology or Mathematics", exams: ["State entrance tests","University entrance tests"], careers: "Pharmacist, drug inspector, pharma research and sales" },
  { name: "BBA", level: "Undergraduate", years: "3 years", stream: "management", eligibility: "Class 12 in any stream", exams: ["CUET UG","IPMAT","University entrance tests"], careers: "Business analyst, marketing executive, entrepreneur" },
  { name: "MBA / PGDM", level: "Postgraduate", years: "2 years", stream: "management", eligibility: "Bachelor's degree in any stream", exams: ["CAT","XAT","SNAP","NMAT","MAT"], careers: "Manager, consultant, finance professional, product manager" },
  { name: "BA LLB (Integrated)", level: "Undergraduate", years: "5 years", stream: "law", eligibility: "Class 12 in any stream", exams: ["CLAT","AILET","SLAT"], careers: "Advocate, corporate lawyer, legal advisor, judiciary aspirant" },
  { name: "LLB", level: "Undergraduate", years: "3 years", stream: "law", eligibility: "Bachelor's degree in any stream", exams: ["University law entrance tests"], careers: "Advocate, legal officer, compliance professional" },
  { name: "LLM", level: "Postgraduate", years: "1 to 2 years", stream: "law", eligibility: "LLB or equivalent law degree", exams: ["CLAT PG","University entrance tests"], careers: "Legal researcher, professor, specialist counsel" },
  { name: "B.Com", level: "Undergraduate", years: "3 years", stream: "arts", eligibility: "Class 12, preferably with Commerce", exams: ["CUET UG"], careers: "Accountant, banker, chartered accountancy and company secretary aspirant" },
  { name: "B.Sc", level: "Undergraduate", years: "3 years", stream: "arts", eligibility: "Class 12 with the relevant science subjects", exams: ["CUET UG"], careers: "Scientist, lab analyst, data scientist, teacher" },
  { name: "BA", level: "Undergraduate", years: "3 years", stream: "arts", eligibility: "Class 12 in any stream", exams: ["CUET UG"], careers: "Civil services aspirant, journalist, teacher, social researcher" },
  { name: "B.Arch", level: "Undergraduate", years: "5 years", stream: "design", eligibility: "Class 12 with Physics and Mathematics", exams: ["JEE Main (Paper 2)","NATA"], careers: "Architect, urban planner, interior designer" },
  { name: "B.Des", level: "Undergraduate", years: "4 years", stream: "design", eligibility: "Class 12 in any stream", exams: ["UCEED","NID DAT","NIFT"], careers: "Product designer, UX designer, fashion or communication designer" },
  { name: "MS Abroad", level: "Postgraduate", years: "1 to 2 years", stream: "engineering", eligibility: "Bachelor's degree; requirements vary by country and university", exams: ["GRE","GMAT","IELTS","TOEFL iBT","PTE Academic"], careers: "Global careers in technology, research and industry" }
];

window.EXAMS = [
  { name: "JEE Main", full: "Joint Entrance Examination (Main)", body: "National Testing Agency (NTA)", field: "engineering", for: "B.Tech / BE and B.Arch admissions at NITs, IIITs and other institutes; qualifier for JEE Advanced" },
  { name: "JEE Advanced", full: "Joint Entrance Examination (Advanced)", body: "Organised by one of the IITs on a rotating basis", field: "engineering", for: "B.Tech admission to the Indian Institutes of Technology" },
  { name: "BITSAT", full: "BITS Admission Test", body: "BITS Pilani", field: "engineering", for: "Engineering and science programmes at BITS campuses" },
  { name: "VITEEE", full: "VIT Engineering Entrance Examination", body: "Vellore Institute of Technology", field: "engineering", for: "B.Tech admission at VIT campuses" },
  { name: "GATE", full: "Graduate Aptitude Test in Engineering", body: "Organised by the IITs and IISc on a rotating basis", field: "engineering", for: "M.Tech admission and recruitment by many public sector companies" },
  { name: "NEET UG", full: "National Eligibility cum Entrance Test (Undergraduate)", body: "National Testing Agency (NTA)", field: "medical", for: "MBBS, BDS and other medical and allied programmes" },
  { name: "NEET PG", full: "National Eligibility cum Entrance Test (Postgraduate)", body: "National Board of Examinations in Medical Sciences (NBEMS)", field: "medical", for: "MD, MS and PG diploma programmes in medicine" },
  { name: "CAT", full: "Common Admission Test", body: "Conducted by the IIMs on a rotating basis", field: "management", for: "MBA / PGDM admission at the IIMs and many other business schools" },
  { name: "XAT", full: "Xavier Aptitude Test", body: "XLRI Jamshedpur", field: "management", for: "MBA / PGDM admission at XLRI and other participating schools" },
  { name: "SNAP", full: "Symbiosis National Aptitude Test", body: "Symbiosis International", field: "management", for: "MBA admission at Symbiosis institutes" },
  { name: "NMAT by GMAC", full: "NMIMS Management Aptitude Test", body: "Graduate Management Admission Council (GMAC)", field: "management", for: "MBA admission at NMIMS and other participating schools" },
  { name: "MAT", full: "Management Aptitude Test", body: "All India Management Association (AIMA)", field: "management", for: "MBA / PGDM admission at many private business schools" },
  { name: "IPMAT", full: "Integrated Programme in Management Aptitude Test", body: "IIM Indore and IIM Rohtak (separate tests)", field: "management", for: "Five-year integrated management programmes after Class 12" },
  { name: "CLAT", full: "Common Law Admission Test", body: "Consortium of National Law Universities", field: "law", for: "Law admissions at participating National Law Universities" },
  { name: "AILET", full: "All India Law Entrance Test", body: "National Law University, Delhi", field: "law", for: "BA LLB, LLM and PhD admission at NLU Delhi" },
  { name: "SLAT", full: "Symbiosis Law Admission Test", body: "Symbiosis International", field: "law", for: "Law admission at Symbiosis Law Schools" },
  { name: "CUET UG", full: "Common University Entrance Test (Undergraduate)", body: "National Testing Agency (NTA)", field: "arts", for: "Undergraduate admission at central universities and many other participating universities" },
  { name: "CUET PG", full: "Common University Entrance Test (Postgraduate)", body: "National Testing Agency (NTA)", field: "arts", for: "Postgraduate admission at central universities and many other participating universities" },
  { name: "NATA", full: "National Aptitude Test in Architecture", body: "Council of Architecture", field: "design", for: "B.Arch admission" },
  { name: "UCEED", full: "Undergraduate Common Entrance Examination for Design", body: "IIT Bombay", field: "design", for: "B.Des admission at IITs and other participating institutes" },
  { name: "NID DAT", full: "National Institute of Design Design Aptitude Test", body: "National Institute of Design", field: "design", for: "B.Des and M.Des admission at NID" },
  { name: "GRE", full: "Graduate Record Examinations", body: "ETS", field: "abroad", for: "Master's and PhD admission abroad, mainly in the USA" },
  { name: "GMAT", full: "Graduate Management Admission Test", body: "Graduate Management Admission Council (GMAC)", field: "abroad", for: "MBA and management programmes abroad" },
  { name: "IELTS", full: "International English Language Testing System", body: "IDP, British Council and Cambridge", field: "abroad", for: "Proof of English ability for study abroad and visas" },
  { name: "TOEFL iBT", full: "Test of English as a Foreign Language", body: "ETS", field: "abroad", for: "Proof of English ability for universities abroad" },
  { name: "SAT", full: "Scholastic Assessment Test", body: "College Board", field: "abroad", for: "Undergraduate admission at universities abroad" }
];

window.EXAM_FIELDS = {
  engineering: "Engineering", medical: "Medical", management: "Management", law: "Law",
  arts: "Arts, Science & Commerce", design: "Design & Architecture", abroad: "Study Abroad"
};
