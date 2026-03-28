import { Curriculum } from '../../types';

export const uwHcde: Curriculum = {
  schoolId: 'uw',
  program: 'Human Centered Design & Engineering (HCDE)',
  degreeRequirements: {
    totalCredits: 180,
    majorCredits: 85,
    genEdCredits: 60,
    electiveCredits: 35,
    majorCourses: [
      'HCDE200', 'HCDE201', 'HCDE210', 'HCDE300', 'HCDE301',
      'HCDE308', 'HCDE310', 'HCDE318', 'HCDE400', 'HCDE410',
      'HCDE411', 'HCDE418', 'HCDE419', 'HCDE496',
      'MATH124', 'MATH125', 'STAT220', 'ENGL182',
    ],
    genEdCategories: [
      { id: 'writing', name: 'Writing (C)', creditsRequired: 10, satisfiedBy: ['ENGL111', 'ENGL121', 'ENGL182', 'ENGL131'] },
      { id: 'quantitative', name: 'Quantitative & Symbolic Reasoning (QSR)', creditsRequired: 5, satisfiedBy: ['MATH124', 'MATH125', 'STAT220', 'STAT290'] },
      { id: 'natural-science', name: 'Natural World (NW)', creditsRequired: 10, satisfiedBy: ['ASTR101', 'BIOL100', 'CHEM110', 'PHYS114', 'ESS101'] },
      { id: 'social-science', name: 'Individuals & Societies (I&S)', creditsRequired: 10, satisfiedBy: ['ECON200', 'PSYCH101', 'SOC101', 'AAS101', 'POL101', 'HIST111'] },
      { id: 'humanities', name: 'Visual, Literary & Performing Arts (VLPA)', creditsRequired: 10, satisfiedBy: ['ART134', 'ENGL242', 'DXARTS200', 'MUSIC116', 'DRAMA101'] },
      { id: 'diversity', name: 'Diversity (DIV)', creditsRequired: 5, satisfiedBy: ['AAS101', 'GWSS200', 'AIS200', 'ANTH215'] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
    {
      termLabel: 'Fall Year 1',
      courses: ['MATH124', 'HCDE200', 'ENGL111', 'ASTR101'],
      locked: [true, true, false, false],
      slotLabels: ['Major req (Calc I)', 'Major req (Intro HCDE)', 'Writing gen-ed (choose one)', 'NW gen-ed (choose one)'],
    },
    {
      termLabel: 'Winter Year 1',
      courses: ['MATH125', 'HCDE201', 'PSYCH101', 'ENGL242'],
      locked: [true, true, false, false],
      slotLabels: ['Major req (Calc II)', 'Major req (Technical Foundations)', 'I&S gen-ed (choose one)', 'VLPA gen-ed (choose one)'],
    },
    {
      termLabel: 'Spring Year 1',
      courses: ['STAT220', 'ENGL182', 'AAS101', 'MUSIC116'],
      locked: [true, true, false, false],
      slotLabels: ['Major req (Statistics)', 'Major req (Technical Writing)', 'I&S/DIV gen-ed (choose one)', 'VLPA gen-ed (choose one)'],
    },
    {
      termLabel: 'Fall Year 2',
      courses: ['HCDE210', 'HCDE300', 'HCDE308', 'SOC101'],
      locked: [true, true, true, false],
      slotLabels: ['Major req (Explorations in HCD)', 'Major req (User Research)', 'Major req (Data Visualization)', 'I&S gen-ed (choose one)'],
    },
    {
      termLabel: 'Winter Year 2',
      courses: ['HCDE301', 'HCDE310', 'HCDE400', 'HCDE411'],
      locked: [true, true, true, true],
      slotLabels: ['Major req (Adv Design Methods)', 'Major req (Content Strategy)', 'Major req (Directed Research)', 'Major req (Info Assurance)'],
    },
    {
      termLabel: 'Spring Year 2',
      courses: ['HCDE318', 'DXARTS200', 'ECON200', 'ENGL131'],
      locked: [true, false, false, false],
      slotLabels: ['Major req (UI Design)', 'VLPA gen-ed (choose one)', 'I&S gen-ed (choose one)', 'Writing gen-ed (choose one)'],
    },
  ],
  },
  courses: [
    // ===== HCDE MAJOR REQUIRED =====
    { id: 'HCDE200', title: 'Foundations of Human Centered Design', description: 'Introduction to HCD principles, user research methods, and design thinking. Students learn to identify user needs and translate them into design requirements.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE201', title: 'Technical Foundations of Informatics', description: 'Web technologies, HTML/CSS/JavaScript fundamentals for building interactive prototypes and understanding technical constraints.', credits: 5, category: 'major-required', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'HCDE210', title: 'Explorations in HCD', description: 'Studio-based exploration of design methods. Students work through design challenges using sketching, prototyping, and user testing.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE200'], genEdReqs: [] },
    { id: 'HCDE300', title: 'Foundations of User Research', description: 'Qualitative and quantitative user research methods. Interviews, surveys, contextual inquiry, usability testing, and data analysis.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE200'], genEdReqs: [] },
    { id: 'HCDE301', title: 'Advanced Design Methods', description: 'Advanced prototyping, interaction design patterns, design systems, and iterative design processes.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE210'], genEdReqs: [] },
    { id: 'HCDE308', title: 'Data Visualization', description: 'Principles and techniques for visualizing data. Information design, interactive visualizations, and storytelling with data.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE201', 'STAT220'], genEdReqs: [] },
    { id: 'HCDE310', title: 'Content Strategy', description: 'Information architecture, content design, writing for interfaces, and organizing information for user comprehension.', credits: 5, category: 'major-required', interestTags: ['design', 'literature'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE318', title: 'Introduction to User Interface Design', description: 'UI design principles, visual hierarchy, typography, color theory, and responsive design. Students create high-fidelity mockups and prototypes.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE301'], genEdReqs: [] },
    { id: 'HCDE400', title: 'Directed Research in HCD', description: 'Faculty-mentored research project applying HCDE methods to a real-world problem. Literature review, methodology, findings.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE410', title: 'Inclusive Design', description: 'Designing for diverse populations, accessibility standards, assistive technologies, and universal design principles.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE318'], genEdReqs: [] },
    { id: 'HCDE411', title: 'Information Assurance & Cybersecurity', description: 'Privacy by design, security considerations in UX, ethical implications of data collection, and trust in interactive systems.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE418', title: 'Professional Practices in HCD', description: 'Design portfolios, professional communication, project management, working with stakeholders, and career preparation.', credits: 3, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE318'], genEdReqs: [] },
    { id: 'HCDE419', title: 'Capstone Project', description: 'Year-long team capstone project with an industry or community partner. Full design cycle from research to final deliverable.', credits: 5, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE400'], genEdReqs: [] },
    { id: 'HCDE496', title: 'Capstone Seminar', description: 'Seminar accompanying capstone project. Presentations, peer review, and professional development.', credits: 2, category: 'major-required', interestTags: ['design'], prereqs: ['HCDE419'], genEdReqs: [] },
    { id: 'MATH124', title: 'Calculus with Analytic Geometry I', description: 'Limits, derivatives, and integrals of single-variable functions. Applications to science and engineering.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH125', title: 'Calculus with Analytic Geometry II', description: 'Integration techniques, applications of integrals, sequences and series.', credits: 5, category: 'major-required', interestTags: [], prereqs: ['MATH124'], genEdReqs: ['quantitative'] },
    { id: 'STAT220', title: 'Principles of Statistical Reasoning', description: 'Statistical literacy, probability, distributions, hypothesis testing, confidence intervals.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'ENGL182', title: 'Technical Writing', description: 'Writing for technical and professional audiences. Reports, proposals, documentation, and visual communication.', credits: 5, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['writing'] },

    // ===== HCDE ELECTIVES =====
    { id: 'HCDE451', title: 'Prototyping Interactions', description: 'Advanced physical and digital prototyping. Arduino, sensors, and tangible interaction design.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE301'], genEdReqs: [] },
    { id: 'HCDE452', title: 'Designing for Behavior Change', description: 'Applying behavioral science to design. Persuasive technology, gamification, and habit formation.', credits: 5, category: 'major-elective', interestTags: ['design', 'game-theory'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE453', title: 'Game Design for Social Impact', description: 'Designing games and interactive experiences that address social issues. Game mechanics, narrative design, and playtesting.', credits: 5, category: 'major-elective', interestTags: ['design', 'video-games', 'game-theory'], prereqs: ['HCDE301'], genEdReqs: [] },
    { id: 'HCDE454', title: 'Service Design', description: 'Designing end-to-end service experiences. Journey mapping, service blueprints, stakeholder ecosystems.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE455', title: 'Design for Health', description: 'UX/UI design for healthcare applications. Patient experience, clinical workflows, health equity.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE300'], genEdReqs: [] },
    { id: 'HCDE456', title: 'Design & AI', description: 'Designing with and for AI systems. Explainability, fairness, human-AI interaction patterns.', credits: 5, category: 'major-elective', interestTags: ['design'], prereqs: ['HCDE301'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'ART134', title: 'Introduction to Ceramics', description: 'Hand-building and wheel-throwing techniques. Clay preparation, glazing, and kiln firing. Studio access included.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ART234', title: 'Intermediate Ceramics: Wheel Throwing', description: 'Focus on wheel-throwing skills, form development, and surface decoration. Exploration of functional pottery.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART134'], genEdReqs: ['humanities'] },
    { id: 'ART334', title: 'Advanced Ceramics: Sculpture & Installation', description: 'Large-scale ceramic sculpture, mixed-media approaches, and installation art. Kiln operation and glaze chemistry.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART234'], genEdReqs: [] },
    { id: 'ART335', title: 'Ceramics: Raku & Alternative Firing', description: 'Raku, pit firing, saggar, and other alternative firing techniques. Emphasis on experimentation and process.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART234'], genEdReqs: [] },
    { id: 'ART130', title: 'Introduction to Drawing', description: 'Observational drawing fundamentals. Line, value, composition, and perspective using various media.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ART131', title: 'Introduction to Sculpture', description: 'Three-dimensional art making using wood, metal, plaster, and found objects. Additive and subtractive processes.', credits: 5, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'ASTR101', title: 'Astronomy', description: 'Survey of modern astronomy: the solar system, stars, galaxies, and cosmology. Night sky observation sessions.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ASTR102', title: 'Introduction to Astrophysics', description: 'Physical principles governing astronomical phenomena. Light, gravity, nuclear fusion, and the evolution of stars.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['ASTR101'], genEdReqs: ['natural-science'] },
    { id: 'ASTR150', title: 'The Planets', description: 'Comparative planetology: formation, geology, atmospheres, and potential for life on planets and moons in our solar system.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ASTR322', title: 'Astrobiology', description: 'The science of life in the universe. Origin of life on Earth, extremophiles, biosignatures, and the search for extraterrestrial life.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['ASTR101'], genEdReqs: [] },
    { id: 'ESS101', title: 'Introduction to Earth Science', description: 'Earth systems, plate tectonics, minerals, rocks, geologic time, and the dynamic processes shaping our planet.', credits: 5, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ESS102', title: 'Space & Space Travel', description: 'Rocketry, orbital mechanics, space exploration history, current missions, and the future of human spaceflight.', credits: 5, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ATM101', title: 'Weather & Climate', description: 'Atmospheric science, weather patterns, climate systems, and climate change science.', credits: 5, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },

    // ===== HISTORY =====
    { id: 'HIST111', title: 'World History: Ancient Civilizations', description: 'Major civilizations from prehistory to 1500 CE. Mesopotamia, Egypt, China, India, Greece, Rome, and the Americas.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST112', title: 'World History: The Modern World', description: 'Global history from 1500 to present. Colonialism, industrialization, world wars, decolonization, and globalization.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST215', title: 'History of East Asia', description: 'China, Japan, and Korea from ancient times to the present. Cultural, political, and economic developments.', credits: 5, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST225', title: 'Japanese History', description: 'Japan from ancient times to the present. Samurai culture, Meiji modernization, WWII, and contemporary Japan.', credits: 5, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST312', title: 'History of the Pacific Northwest', description: 'Indigenous peoples, exploration, settlement, timber and fishing industries, environmental history, and cultural development of the PNW.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST231', title: 'History of Science', description: 'Development of scientific thought from ancient Greece to modern times. Scientific revolutions, paradigm shifts, and science in society.', credits: 5, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HSTRY111', title: 'Ancient Greece & Rome', description: 'Greek city-states, Roman Republic and Empire. Democracy, philosophy, conquest, and legacy.', credits: 5, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HSTRY112', title: 'Medieval Europe', description: 'Feudalism, the Church, Crusades, plague, Renaissance, and the transition to the modern world.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HSTRY135', title: 'Modern Europe: 1789 to Present', description: 'French Revolution through the EU. Nationalism, industrialization, world wars, and European integration.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HSTRY213', title: 'History of the Middle East', description: 'Ottoman Empire to the Arab Spring. Colonialism, nationalism, oil, and conflict in the modern Middle East.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HSTRY231', title: 'Latin American History', description: 'Pre-Columbian civilizations through modern revolutions. Colonialism, independence, and contemporary challenges.', credits: 5, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN STUDIES =====
    { id: 'AAS101', title: 'Introduction to Asian American Studies', description: 'History, culture, and contemporary experiences of Asian Americans. Immigration, identity, community, and activism.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity'] },
    { id: 'AAS200', title: 'Asian Americans and the Arts', description: 'Asian American artistic expression in literature, film, visual art, and performance. Identity, representation, and cultural production.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['humanities', 'diversity'] },
    { id: 'AAS310', title: 'Asian American Communities & Health', description: 'Health disparities, mental health, intergenerational trauma, and wellness in Asian American communities.', credits: 5, category: 'elective', interestTags: ['cultural-studies'], prereqs: ['AAS101'], genEdReqs: ['diversity'] },
    { id: 'AAS320', title: 'Asian Americans in the Pacific Northwest', description: 'Japanese American incarceration, Filipino cannery workers, Chinese exclusion, and contemporary Asian American life in the PNW.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity'] },
    { id: 'AAS330', title: 'Race, Technology & Society', description: 'How race shapes and is shaped by technology. Algorithmic bias, digital divide, surveillance, and tech workforce diversity.', credits: 5, category: 'elective', interestTags: ['cultural-studies', 'design'], prereqs: [], genEdReqs: ['diversity'] },

    // ===== GAME DESIGN / VIDEO GAMES =====
    { id: 'CSE142', title: 'Computer Programming I', description: 'Introduction to programming in Java. Variables, control flow, arrays, methods, and basic object-oriented programming.', credits: 5, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CSE143', title: 'Computer Programming II', description: 'Data structures, recursion, sorting, searching, and intermediate OOP. Foundation for game development.', credits: 5, category: 'elective', interestTags: ['video-games'], prereqs: ['CSE142'], genEdReqs: [] },
    { id: 'CSE481', title: 'Game Development Capstone', description: 'Team-based game development project. Game engines, graphics, AI, physics, sound, and production pipeline.', credits: 5, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['CSE143'], genEdReqs: [] },
    { id: 'INFO200', title: 'Intellectual Foundations of Informatics', description: 'Information in society, human-information interaction, data ethics, and the social impact of technology.', credits: 5, category: 'elective', interestTags: ['design'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'INFO343', title: 'Client-Side Web Development', description: 'Modern web development with React, responsive design, accessibility, and interactive web applications.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: ['CSE142'], genEdReqs: [] },
    { id: 'DXARTS200', title: 'Digital Arts: Interdisciplinary Foundations', description: 'Creative coding, interactive art, digital fabrication. Intersection of art and technology.', credits: 5, category: 'elective', interestTags: ['design', 'video-games'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'DXARTS490', title: 'Game Art & Interactive Narrative', description: 'Creating art assets for games. Narrative design, world-building, and environmental storytelling in interactive media.', credits: 5, category: 'elective', interestTags: ['video-games', 'design', 'literature'], prereqs: ['DXARTS200'], genEdReqs: [] },
    { id: 'COM271', title: 'Interactive Media Design', description: 'Designing interactive experiences for web, mobile, and emerging platforms. User engagement and interactive storytelling.', credits: 5, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: [] },

    // ===== LITERATURE =====
    { id: 'ENGL242', title: 'Reading Fiction', description: 'Close reading of novels and short stories. Narrative structure, characterization, and literary analysis.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL243', title: 'Reading Poetry', description: 'Study of poetic forms, techniques, and traditions. Close reading and interpretation of poetry across periods.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL262', title: 'Asian American Literature', description: 'Literature by Asian American writers exploring identity, immigration, belonging, and cultural negotiation.', credits: 5, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: ['humanities', 'diversity'] },
    { id: 'ENGL283', title: 'Introduction to Creative Writing', description: 'Workshop-based introduction to writing fiction and poetry. Peer critique and revision process.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL302', title: 'Science Fiction', description: 'The genre of science fiction from its origins to present. Utopia, dystopia, technology, and social commentary.', credits: 5, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL363', title: 'Studies in World Literature', description: 'Comparative literature spanning multiple traditions. Global perspectives on storytelling and literary craft.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLIT270', title: 'Introduction to Graphic Narrative', description: 'Comics, manga, and graphic novels as literary and visual art forms. Storytelling through sequential art.', credits: 5, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL260', title: 'The Novel', description: 'History of the novel from Cervantes to contemporary fiction. Form, narrative technique, and cultural context.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLIT240', title: 'Classical Literature in Translation', description: 'Homer, Virgil, Ovid, and Sappho. Epic, lyric, and drama from the ancient Mediterranean world.', credits: 5, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLIT250', title: 'Russian Literature in Translation', description: 'Dostoevsky, Tolstoy, Chekhov, and Bulgakov. The Russian literary tradition and its global influence.', credits: 5, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== GAME THEORY (Math/Econ) =====
    { id: 'ECON300', title: 'Introduction to Game Theory', description: 'Strategic decision-making. Nash equilibrium, dominant strategies, repeated games, and applications to economics and social sciences.', credits: 5, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH124'], genEdReqs: [] },
    { id: 'MATH381', title: 'Discrete Mathematical Modeling', description: 'Graph theory, combinatorics, game theory, and network models. Mathematical approaches to strategic problems.', credits: 5, category: 'elective', interestTags: ['game-theory'], prereqs: ['MATH125'], genEdReqs: [] },

    // ===== OTHER GEN-ED OPTIONS =====
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Scientific study of behavior and mental processes. Perception, learning, memory, personality, and social psychology.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'SOC101', title: 'Introduction to Sociology', description: 'Social structures, institutions, inequality, culture, and how society shapes individual behavior.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON200', title: 'Introduction to Microeconomics', description: 'Supply and demand, market structures, consumer behavior, and economic efficiency.', credits: 5, category: 'gen-ed', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PHIL100', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, ethics, and the good life. Reading classic and contemporary philosophers.', credits: 5, category: 'gen-ed', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'BIOL100', title: 'Introductory Biology', description: 'Cell biology, genetics, evolution, and ecology. How living systems function and change over time.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CHEM110', title: 'Preparation for General Chemistry', description: 'Atomic structure, chemical bonding, stoichiometry, and basic chemistry principles.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS114', title: 'Mechanics', description: 'Classical mechanics: motion, forces, energy, and momentum. Algebra-based physics for non-majors.', credits: 5, category: 'gen-ed', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'ENGL111', title: 'Composition: Literature', description: 'College-level writing through analysis of literary texts. Argumentation, evidence, and revision.', credits: 5, category: 'gen-ed', interestTags: ['literature'], prereqs: [], genEdReqs: ['writing'] },
    { id: 'ENGL131', title: 'Composition: Exposition', description: 'Expository writing for academic audiences. Research, analysis, and clear argumentation.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'POL101', title: 'Introduction to Political Science', description: 'Political systems, institutions, ideologies, and power. Comparative politics and international relations.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'MUSIC116', title: 'Introduction to Music', description: 'Elements of music, historical periods, genres, and listening skills. No musical background required.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'DRAMA101', title: 'Introduction to Theater', description: 'Theater as an art form. Acting, directing, design, and dramatic literature. Attendance at live performances.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ANTH215', title: 'Peoples & Cultures of Southeast Asia', description: 'Cultural diversity, religions, arts, and social change in Southeast Asian societies.', credits: 5, category: 'gen-ed', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['social-science', 'diversity'] },
    { id: 'GWSS200', title: 'Introduction to Gender, Women & Sexuality Studies', description: 'Gender and sexuality as social constructs. Feminist theory, intersectionality, and social justice.', credits: 5, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science', 'diversity'] },

    // ===== PHILOSOPHY =====
    { id: 'PHIL100', title: 'Introduction to Philosophy', description: 'Fundamental questions about knowledge, reality, ethics, and the good life. Reading classic and contemporary philosophers.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL114', title: 'Ethics', description: 'Major moral theories and contemporary ethical dilemmas. Utilitarianism, deontology, virtue ethics, and applied ethics.', credits: 5, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL115', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, personal identity, and the mind-body problem. Deeply relevant to HCDE.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL120', title: 'Introduction to Logic', description: 'Formal and informal logic, valid arguments, fallacies, and truth tables.', credits: 5, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL240', title: 'Philosophy of Science', description: 'What makes science scientific? Theory change, realism, values in science, and scientific revolutions.', credits: 5, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL340', title: 'Ethics of Technology', description: 'AI ethics, algorithmic bias, privacy, surveillance, and designing ethical technology. Connects directly to HCDE practice.', credits: 5, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL100'], genEdReqs: [] },
    { id: 'PHIL360', title: 'Existentialism', description: 'Freedom, authenticity, and meaning. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 5, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: ['humanities'] },
  ],
};
