// ─────────────────────────────────────────────────────────────────
//  LIVE PROBLEMS — SITE DATA
//  Edit this file to add, update, or remove entries across the site.
//  Each entry needs: id, page, title, label, desc, tags, image, link
//  Tags must come from the TAGS vocabulary below.
// ─────────────────────────────────────────────────────────────────

const TAGS = [
  'place-based',
  'data',
  'embodied',
  'analog-digital',
  'game',
  'posthumanist',
  'collaborative',
  'interdisciplinary',
  'public',
  'global'
];

const SITE_DATA = [

  // ── MAKING ──────────────────────────────────────────────────────

  {
    id: 'soundscape-classifier',
    page: 'making',
    pageUrl: 'making.html?project=soundscape-classifier',
    title: 'Soundscape Classifier',
    label: 'data · place-based',
    desc: 'A machine learning tool that listens. Developed as part of the NSF EPSCoR SOCKS grant in collaboration with undergraduate students in Computer Science, Cybersecurity, Data Science, and Digital Humanities, the classifier analyzes field recordings from Vermont\'s acoustic ecology survey and identifies what sounds are present — birds, wind, traffic, human activity, silence. The work asks not just what a place sounds like but what the machine hears, what it misses, and what those gaps reveal. The repository is in active development.',
    tags: ['place-based', 'data', 'collaborative', 'public'],
    image: 'images/mic-soundscape-KW.jpg',
    link: 'https://socks.w3.uvm.edu/socks/#about',
    linkText: 'SOCKS Project →'
  },
  {
    id: 'algorithmic-sidewalk',
    page: 'making',
    pageUrl: 'making.html?project=algorithmic-sidewalk',
    title: 'The Algorithmic Sidewalk',
    label: 'locative · place-based · data',
    desc: 'A locative game for civic AI literacy, currently in development. The Algorithmic Sidewalk invites participants to walk a stretch of Market Street in South Burlington and document what the city\'s algorithmic infrastructure cannot capture about the people moving through it. At six marked locations, hanging tags explain what each algorithm does, prompt a physical action that makes the participant temporarily legible as data, and ask a question about what the data misses.',
    tags: ['place-based', 'data', 'game', 'public', 'collaborative'],
    image: 'images/sidewalk-surveillance-sign.webp',
    link: null,
    linkText: null
  },
  {
    id: 'street-printing-kits',
    page: 'making',
    pageUrl: 'making.html?project=street-printing-kits',
    title: 'Mobile Street Printing Kits',
    label: 'analog-digital · instructional-artifact · community',
    desc: 'A set of portable printmaking kits designed for making in public. The kits support three approaches: urban relief printing, gel plate monoprinting, and a no-emulsion screen printing process. Funded through Experiential Learning grants and professional development funds, the kits were used in workshops for students and faculty and made available for checkout through the library.',
    tags: ['analog-digital', 'collaborative', 'public', 'place-based', 'embodied'],
    image: 'images/mud-print-aiken.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'mobile-kitchen',
    page: 'making',
    pageUrl: 'making.html?project=mobile-kitchen',
    title: 'CH3F: Champlain College\'s Mobile Kitchen',
    label: 'instructional-artifact · food · embodied',
    desc: 'A mobile kitchen cart built to bring making into rooms not designed for it. CH3F approximates a mobile makerspace, giving faculty across disciplines access to cooking equipment wherever they teach. The project involved one-on-one conversations with every faculty member using food in their courses, a needs survey, and the development of a full checkout, storage, and cleaning workflow.',
    tags: ['embodied', 'collaborative', 'interdisciplinary'],
    image: 'images/meat-cart-2.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'working-with-ruins',
    page: 'making',
    pageUrl: 'making.html?project=working-with-ruins',
    title: 'Working with the Ruins of Liberal Education',
    label: 'game · place-based',
    desc: 'A file folder game for working with what remains. Eighty cards name the ruins of liberal education — the view from nowhere, peer review, the grade, the career path, belonging, tenure, artificial intelligence, and the loneliness epidemic. Players move through six movements: Reveal, Locate, Render, Speculate, Reconfigure, and Question. There are no winners. There is no correct configuration.',
    tags: ['game', 'analog-digital', 'posthumanist', 'interdisciplinary'],
    image: 'images/ruins-folder-cover.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'bodies-companion',
    page: 'making',
    pageUrl: 'making.html?project=bodies-companion',
    title: 'Bodies: A Digital Companion',
    label: 'analog-digital · instructional-artifact · community',
    desc: 'A collaborative digital textbook built on the Scalar platform for the general education course Bodies, co-authored with colleague Kristin Novotny. The development process was as much about building a faculty community of practice as it was about building a textbook. Over three months, ten to fifteen faculty volunteered their summers to learn Scalar, author chapters, and workshop each other\'s writing.',
    tags: ['analog-digital', 'collaborative', 'interdisciplinary'],
    image: 'images/bodies-companion-title.png',
    link: 'https://scalar.usc.edu/works/bodies/index',
    linkText: 'View the Companion →'
  },
  {
    id: 'flight-routes',
    page: 'making',
    pageUrl: 'making.html?project=flight-routes',
    title: 'Flight Routes, Spring 2023',
    label: 'place-based · analog-digital · embodied · locative',
    desc: 'A personal analog map documenting the flight routes taken between Vermont, Baltimore, and Florida from late April through June 2023, during the final weeks of my mother\'s life, and also my dog\'s life. The map was made from materials gathered during an evening walk through my backyard laid out under the tree where my dog Ella used to rest.',
    tags: ['place-based', 'analog-digital', 'embodied'],
    image: 'images/flight-routes-still.jpg',
    link: null,
    linkText: null
  },

  // ── TEACHING ────────────────────────────────────────────────────

  {
    id: 'printmaking',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Field Methods: Printmaking in Public',
    label: 'field methods',
    desc: 'Burlington becomes the canvas. Students learn monoprinting, urban screen printing, and eco-art as field methods for analyzing local places, power, and access. Working in situ across the city, they carry mobile print kits to different sites, collect images from surfaces, and bring what they encounter back for collaborative digital mapping and analysis.',
    tags: ['place-based', 'embodied', 'analog-digital', 'public', 'collaborative'],
    image: 'images/campus-print-technique.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'args',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'First Year Inquiry: Making Alternate Reality Games',
    label: 'first year inquiry',
    desc: 'ARGs are interactive narratives that mix digital platforms, physical objects, and real locations into worlds players inhabit together. Students analyze existing ARGs, develop proposals, and build and launch one on campus. The game is not the assignment. It is the course.',
    tags: ['game', 'analog-digital', 'collaborative', 'place-based', 'interdisciplinary'],
    image: 'images/rock-creatures.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'fakemeat',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Interdisciplinary Perspectives: Fake Meat and the Future of Food',
    label: 'interdisciplinary perspectives',
    desc: 'How will climate change and global food insecurity shape what humans eat? This course takes fake meat seriously as a site of cultural, scientific, economic, and ethical inquiry. Students cook in class, visit City Market, and build infographics synthesizing research across disciplines.',
    tags: ['embodied', 'interdisciplinary', 'collaborative', 'public'],
    image: 'images/speculative-charcuterie.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'sonic',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Field Methods: Sonic Data Worlds',
    label: 'field methods · ongoing',
    desc: 'We live in a world of sonic datafication. AI models are trained on millions of audio samples, smart cities are monitored acoustically, and biodiversity is tracked through sound recognition. Using Vermont\'s soundscapes as our laboratory, we go into the field to record, sense, and collect sonic evidence then bring it back to ask important questions about whose worlds get heard, and what remains silent.',
    tags: ['place-based', 'data', 'collaborative', 'public'],
    image: 'images/sonic-data-campus.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'escaperooms',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Interdisciplinary Perspectives: Escape Rooms and Collaborative Design',
    label: 'interdisciplinary perspectives · new',
    desc: 'From alternate reality games to escape rooms, some of today\'s most compelling experiences unfold in real spaces, real communities, and real time. This course explores the design, theory, and cultural significance of these experiences, culminating in collaboratively designing and implementing an original escape room in partnership with a local community organization.',
    tags: ['game', 'collaborative', 'place-based', 'interdisciplinary', 'public'],
    image: 'images/pigs-arg.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'sandbox',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Interdisciplinary Sandbox',
    label: 'general education',
    desc: 'A small seminar capped at eight students, co-taught with colleagues, where students carry out independent research or creative projects of their own design. Students from across the college bring their work into the same room and move through a shared interdisciplinary research process together.',
    tags: ['interdisciplinary', 'collaborative'],
    image: 'images/sand-painting-global-seminar.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'globalsenior',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Global Studies Senior Seminar',
    label: 'global studies · senior capstone',
    desc: 'This capstone course for the Global Studies minor interrogates the concept of global citizenship from multiple perspectives. Students examine thinking by scholars and practitioners including Paulo Freire, bell hooks, and Suzy Hansen alongside their own accumulated intercultural experiences.',
    tags: ['global', 'interdisciplinary', 'collaborative'],
    image: 'images/global-table.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'placeidentity',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Connecting Place and Identity',
    label: 'general education',
    desc: 'Where we are shapes how we understand ourselves. This course teaches students to think spatially, examining how identity is constructed through movement across natural and built environments, urban and rural spaces, and actual and virtual worlds.',
    tags: ['place-based', 'global', 'embodied', 'interdisciplinary'],
    image: 'images/drift-map-place-identity.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'globalcondition',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'The Global Condition',
    label: 'general education · global',
    desc: 'Is the world getting better? This course examines the idea of progress from theoretical, cultural, and marginalized perspectives, asking how progress has been defined, by whom, and by which standards. Students apply frameworks including hybridity, neoliberalism, and power geometry to contemporary global phenomena.',
    tags: ['global', 'interdisciplinary'],
    image: 'images/globalization-chalkboard.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'bodies',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Bodies: The Posthuman',
    label: 'general education · course coordinator',
    desc: 'Are you into cyborgs, animal-human hybrids, and biotechnology? This section of Bodies explores the significance of posthuman bodies in popular culture, moving through philosophy and film from Ex Machina and Ghost in the Shell to Black Panther and Okja. Students research an embodied experience related to posthumanism and build toward a phenomenological project.',
    tags: ['posthumanist', 'embodied', 'interdisciplinary'],
    image: 'images/bodies-project.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'bodieswalking',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Bodies: Walking',
    label: 'general education',
    desc: 'This section of Bodies takes embodiment outdoors, examining the cultural significance of walking through Solnit, Thoreau, Debord, and Cheryl Strayed\'s Wild. Field trips to Red Rocks Park, Church Street, and the U-Mall become sites of inquiry.',
    tags: ['embodied', 'place-based', 'posthumanist'],
    image: 'images/red-rocks-collaborative-map.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'heroines',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Heroines and Heroes',
    label: 'general education',
    desc: 'I co-developed this general education course with colleagues, and taught several versions including a focus on feminist theory. The course moves through structuralist frameworks, Jungian archetypes, and feminist theory alongside examples of the heroic in popular culture.',
    tags: ['interdisciplinary', 'collaborative'],
    image: 'images/heroines-whiteboard-notes.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'posthumanism',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Theoretical Perspectives: Posthumanism Goes to the Movies',
    label: 'theoretical perspectives',
    desc: 'Moving from Metropolis to Gattaca to Okja to Raw, the course asks what happens when you learn posthuman theory by watching films. Students create their own posthuman characters using a design process similar to D&D, then collaborate on a film treatment incorporating all their characters.',
    tags: ['posthumanist', 'interdisciplinary', 'collaborative'],
    image: 'images/posthuman-board.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'scifi',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Scientific Revolutions: SyFy',
    label: 'general education',
    desc: 'This section of Scientific Revolutions uses television as its primary lens, examining how popular culture represents the philosophical, cultural, and ethical implications of modern science. Students move from Aristotle to Darwin while analyzing Sherlock, Cosmos, Stranger Things, Star Trek, and The Twilight Zone.',
    tags: ['interdisciplinary'],
    image: 'images/enterprise.JPG',
    link: null,
    linkText: null
  },
  {
    id: 'mediapsych',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Media Psychology',
    label: 'psychology program',
    desc: 'I developed this course for the Psychology program as an upper-division elective. Students read Marshall McLuhan and other cultural theorists alongside psychological research on social media, AI, haptic technology, and screen culture, and design a semester-long self study researching an aspect of their own media psychology.',
    tags: ['interdisciplinary', 'data'],
    image: 'images/media-data.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'introdh',
    page: 'teaching',
    pageUrl: 'teaching.html',
    title: 'Introduction to Digital Humanities',
    label: 'digital humanities',
    desc: 'This course introduces students to interdisciplinary inquiry through the lens of digital humanities, asking what it means to think like a digital humanist. Students examine the ethics of algorithms, digitization as a social and cultural process, and speculative futures through hands-on workshops.',
    tags: ['interdisciplinary', 'data', 'analog-digital', 'collaborative'],
    image: 'images/haraway-cats-cradle.jpg',
    link: null,
    linkText: null
  },

  // ── WRITING ─────────────────────────────────────────────────────

  {
    id: 'speculative-education',
    page: 'writing',
    pageUrl: 'writing.html',
    title: 'Speculative Education: Making Knowledge from the Ruins',
    label: 'book · in preparation',
    desc: 'Develops a theory of knowledge-making under conditions of uncertainty, introducing rendering as the practice of making new knowledge alongside live problems, structural integrity, and relational debt as critical posthumanist pedagogical frameworks for reimagining teaching and learning.',
    tags: ['posthumanist', 'interdisciplinary'],
    image: 'images/speculative-education-trail.jpg',
    link: null,
    linkText: null
  },
  {
    id: 'new-heroines',
    page: 'writing',
    pageUrl: 'writing.html',
    title: 'The New Heroines: Female Embodiment and Technology in 21st Century Popular Culture',
    label: 'book · Praeger, 2016',
    desc: 'Examines teen and young adult female heroines across popular culture genres and media, tracing a new feminist ideal emerging at the intersection of embodiment, technology, and posthuman subjectivity.',
    tags: ['posthumanist', 'embodied'],
    image: 'images/new-heroines-cover.jpg',
    link: 'https://www.bloomsbury.com/uk/new-heroines-9781440832796/',
    linkText: 'Publisher →'
  },
  {
    id: 'unbecoming-maker',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Unbecoming the Maker: Rendering and Posthuman Pedagogies in Digital Humanities"',
    label: 'article · under review',
    desc: 'Maker-based pedagogies expand the scope of learning but leave the humanist subject intact. This article introduces rendering as a posthumanist alternative, relocating the politics of making from who makes to what the making does.',
    tags: ['posthumanist', 'analog-digital', 'place-based'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'modular-curriculum',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"A Modular Curriculum for Uncertain Times"',
    label: 'article · under review',
    desc: 'Curriculum design is a structure for making knowledge, not just delivering it. This article argues for a modular approach organized around skills and knowledge domains rather than disciplines.',
    tags: ['interdisciplinary', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'making-arg',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Making an Alternate Reality Game"',
    label: 'chapter · ACRL, forthcoming',
    desc: 'ARGs mix digital platforms with physical objects and locations to build worlds players inhabit in real time. This chapter offers a practical and theoretical guide to ARG design as a digital humanities pedagogy.',
    tags: ['game', 'place-based', 'analog-digital', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'fake-meat',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Teaching Fake Meat as New Media"',
    label: 'article · Digest, 2023',
    desc: 'Food as a medium for interdisciplinary inquiry. This article outlines how posthuman theory, cultural studies, and experiential learning combine in a course examining alternative protein and food culture.',
    tags: ['embodied', 'interdisciplinary', 'posthumanist'],
    image: null,
    link: 'https://scholarworks.iu.edu/journals/index.php/digest/article/view/38231',
    linkText: 'Read →'
  },
  {
    id: 'remaking-gen-ed',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Re-Making General Education: Envisioning Gen Ed as a Digital Humanities Makerspace"',
    label: 'article · Impact, 2020',
    desc: 'What would it look like to redesign general education through the lens of the digital humanities? This article argues for a makerspace model of gen ed.',
    tags: ['interdisciplinary', 'collaborative', 'analog-digital'],
    image: null,
    link: 'https://sites.bu.edu/impact/previous-issues/impact-summer-2020/',
    linkText: 'Read →'
  },
  {
    id: 'safety-paradox',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"The Safety Paradox"',
    label: 'essay · Hybrid Pedagogy, 2017',
    desc: 'Two competing visions of campus safety — rhetorical and bodily — collide in this essay, arguing that the ability to access the unsafe spaces of critical inquiry is contingent on the physical safety of the bodies in the room.',
    tags: ['embodied', 'posthumanist', 'public'],
    image: null,
    link: 'https://hybridpedagogy.org/the-safety-paradox/',
    linkText: 'Read →'
  },
  {
    id: 'video-stores',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Be Kind, Please Rewind: Video Stores, Algorithmic Recommendation Systems, and the Ethical Commitments of Media Curation"',
    label: 'chapter · Media Studies Press, in preparation',
    desc: 'The video store was a community before algorithms made curation invisible. This chapter traces the shift from the ethics of the video store to the ethics of the algorithm, asking what is lost when AI recommendation systems replace the relational practice of human curation.',
    tags: ['data', 'analog-digital', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'dark-tourism',
    page: 'writing',
    pageUrl: 'writing.html',
    title: '"Pop Culture Pilgrimage and the Politics of Place"',
    label: 'chapter · CABI, 2020',
    desc: 'An autoethnography of a visit to Kunta Kinteh Island in The Gambia. This chapter considers the site through dark tourism and pop culture pilgrimage, examining how place, memory, and media representation layer into each other at sites of historical trauma.',
    tags: ['place-based', 'global', 'embodied'],
    image: null,
    link: null,
    linkText: null
  },

  // ── DESIGNING ───────────────────────────────────────────────────

  {
    id: 'modular-curriculum-design',
    page: 'designing',
    pageUrl: 'designing.html',
    title: 'Modular Curriculum',
    label: 'institutional design',
    desc: 'Conceptualized and led development of a modular curricular framework organized around skills and knowledge domains rather than disciplines. The committee adopted that proposal as the foundation for a college-wide academic redesign now rolling out in Fall 2026.',
    tags: ['interdisciplinary', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'general-education',
    page: 'designing',
    pageUrl: 'designing.html',
    title: 'General Education',
    label: 'institutional design',
    desc: 'Directed the collaborative development of twelve new interdisciplinary courses that every student at the college takes, built alongside over forty faculty across disciplines. Supporting faculty through that process was as much the work as the curriculum itself.',
    tags: ['interdisciplinary', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'dh-program',
    page: 'designing',
    pageUrl: 'designing.html',
    title: 'Digital Humanities Program',
    label: 'program design',
    desc: 'The development of Vermont\'s first Digital Humanities major was a provocation to integrate the humanities into professional education. Built the program from the ground up, developing curriculum, advising practices, a research network, and community connections.',
    tags: ['interdisciplinary', 'collaborative', 'public'],
    image: null,
    link: null,
    linkText: null
  },
  {
    id: 'global-campuses',
    page: 'designing',
    pageUrl: 'designing.html',
    title: 'Global Campuses',
    label: 'program design',
    desc: 'As Director of Study Abroad, oversaw global learning across three campuses — Burlington, Dublin, and Montreal — managing two campus directors, twenty-five staff, and a two million dollar budget. Led post-COVID recovery that grew participation to meet and exceed pre-COVID levels within two years.',
    tags: ['global', 'collaborative'],
    image: null,
    link: null,
    linkText: null
  }

];
