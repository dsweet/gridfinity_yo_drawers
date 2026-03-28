import { Curriculum } from '../../types';

export const upsEcon: Curriculum = {
  schoolId: 'ups',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 32, // UPS uses "units" — 32 units = 128 semester credits equivalent, 1 unit = 1 course
    majorCredits: 11,
    genEdCredits: 14,
    electiveCredits: 7,
    majorCourses: [
      'ECON170', 'ECON171', 'ECON272', 'ECON273', 'ECON399',
      'MATH160', 'MATH170', 'MATH180',
    ],
    genEdCategories: [
      { id: 'writing', name: 'Written Communication (Seminars in Scholarly Inquiry)', creditsRequired: 2, satisfiedBy: ['SSI101', 'SSI102'] },
      { id: 'quantitative', name: 'Mathematical Reasoning', creditsRequired: 1, satisfiedBy: ['MATH160', 'MATH170', 'MATH180'] },
      { id: 'natural-science', name: 'Natural Scientific Approaches', creditsRequired: 2, satisfiedBy: ['PHYS109', 'BIOL101', 'CHEM110', 'GEOL101'] },
      { id: 'social-science', name: 'Social Scientific Approaches', creditsRequired: 2, satisfiedBy: ['ECON170', 'SOC100', 'PSYCH101', 'POL101'] },
      { id: 'humanities', name: 'Humanistic Approaches', creditsRequired: 2, satisfiedBy: ['ENGL220', 'PHIL101', 'HIST200', 'RELS101'] },
      { id: 'arts', name: 'Fine Arts', creditsRequired: 1, satisfiedBy: ['ART110', 'ART140', 'MUS101', 'THTR101'] },
      { id: 'diversity', name: 'Knowledge, Identity & Power', creditsRequired: 2, satisfiedBy: ['AAS200', 'AFAM200', 'GWSS201', 'HISP200'] },
      { id: 'connections', name: 'Connections', creditsRequired: 2, satisfiedBy: [] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Intro econ + calculus sequence, SSI writing seminars, gen-ed electives
      {
        termLabel: 'Fall Year 1',
        courses: ['ECON170', 'MATH170', 'SSI101', 'PHYS109'],
        locked: [true, true, true, false],
        slotLabels: ['Major req (Intro Micro)', 'Major req (Calculus I)', 'Writing gen-ed (SSI sequence)', 'Natural Science gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['ECON171', 'MATH180', 'SSI102', 'BIOL101'],
        locked: [true, true, true, false],
        slotLabels: ['Major req (Intro Macro)', 'Major req (Calculus II)', 'Writing gen-ed (SSI sequence)', 'Natural Science gen-ed (choose one)'],
      },
      // YEAR 2 — Intermediate theory + statistics, fill diversity & humanities gen-eds
      {
        termLabel: 'Fall Year 2',
        courses: ['ECON272', 'MATH160', 'ENGL220', 'AAS200'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intermediate Micro)', 'Major req (Statistics)', 'Humanities gen-ed (choose one)', 'Diversity gen-ed (choose one)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECON273', 'ART140', 'PHIL101', 'GWSS201'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Intermediate Macro)', 'Fine Arts gen-ed (choose one)', 'Humanities gen-ed (choose one)', 'Diversity gen-ed (choose one)'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECON170', title: 'Principles of Economics: Markets', description: 'Microeconomic principles: supply and demand, consumer choice, firm behavior, market structures, and market failures.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON171', title: 'Principles of Economics: National & Global', description: 'Macroeconomic principles: GDP, inflation, unemployment, monetary/fiscal policy, and international trade.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'ECON272', title: 'Intermediate Microeconomic Theory', description: 'Consumer optimization, producer theory, general equilibrium, welfare economics, and market failure analysis with mathematical rigor.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECON170', 'MATH170'], genEdReqs: [] },
    { id: 'ECON273', title: 'Intermediate Macroeconomic Theory', description: 'IS-LM model, aggregate supply/demand, growth theory, business cycles, and monetary policy in open economies.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON171', 'MATH170'], genEdReqs: [] },
    { id: 'ECON399', title: 'Senior Thesis Seminar', description: 'Capstone research project. Original economic analysis using data and theory. Presentation and defense of findings.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECON272', 'ECON273'], genEdReqs: [] },
    { id: 'MATH160', title: 'Statistics', description: 'Descriptive statistics, probability, inference, regression. Applications to social science research.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH170', title: 'Calculus I', description: 'Limits, derivatives, and applications. Optimization and rate-of-change problems.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: ['quantitative'] },
    { id: 'MATH180', title: 'Calculus II', description: 'Integration, techniques of integration, infinite series, and applications.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['MATH170'], genEdReqs: ['quantitative'] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECON310', title: 'Game Theory', description: 'Strategic interaction and decision-making. Nash equilibrium, bargaining, auctions, mechanism design, and evolutionary game theory.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON315', title: 'Behavioral Economics', description: 'How psychology influences economic decisions. Bounded rationality, prospect theory, nudges, and experimental methods.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON320', title: 'Environmental Economics', description: 'Market failures and the environment. Externalities, public goods, valuation of natural resources, and climate policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON330', title: 'International Trade', description: 'Comparative advantage, trade policy, globalization, trade agreements, and their effects on developing economies.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON340', title: 'Labor Economics', description: 'Labor markets, wage determination, human capital, discrimination, unions, and immigration economics.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON350', title: 'Economics of Education', description: 'Economic analysis of education systems. Returns to education, school choice, inequality, and education policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },
    { id: 'ECON360', title: 'Health Economics', description: 'Economics of healthcare markets, insurance, pharmaceutical industry, and health policy.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECON272'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'ART110', title: 'Drawing I', description: 'Fundamental drawing skills. Observational drawing, composition, value, and mark-making with various media.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART140', title: 'Ceramics I', description: 'Introduction to ceramic arts. Hand-building, coil, slab, and beginning wheel work. Glazing and firing processes.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART240', title: 'Ceramics II', description: 'Continued development of wheel-throwing and hand-building. Surface decoration, glaze application, and kiln loading.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART140'], genEdReqs: [] },
    { id: 'ART340', title: 'Ceramics III: Advanced Studio', description: 'Individual artistic development in ceramics. Personal aesthetic vision, exhibition preparation, and advanced techniques.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['ART240'], genEdReqs: [] },
    { id: 'ART150', title: 'Printmaking I', description: 'Relief, intaglio, and screen printing techniques. Edition printing and experimental approaches.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },
    { id: 'ART160', title: 'Sculpture I', description: 'Introduction to three-dimensional art. Wood, metal, plaster, and mixed media. Additive and subtractive processes.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: ['arts'] },

    // ===== ASTRONOMY / SPACE =====
    { id: 'PHYS109', title: 'Astronomy', description: 'Tour of the cosmos: planets, stars, galaxies, black holes, and the Big Bang. Observatory sessions included. No math prerequisite.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'PHYS110', title: 'College Physics I', description: 'Mechanics, waves, and thermodynamics. Algebra-based physics with laboratory.', credits: 1, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'GEOL101', title: 'Exploring the Earth', description: 'Earth processes: volcanoes, earthquakes, plate tectonics, minerals, and geologic history. Field trips to local geological sites.', credits: 1, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'GEOL310', title: 'Planetary Geology', description: 'Comparative geology of terrestrial planets and moons. Surface processes, craters, volcanism on other worlds.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['GEOL101'], genEdReqs: [] },

    // ===== HISTORY =====
    { id: 'HIST200', title: 'The Ancient World', description: 'Mediterranean civilizations from Mesopotamia through Rome. Politics, culture, philosophy, and daily life.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST210', title: 'Modern Europe', description: 'Europe from the French Revolution to the present. Nationalism, industrialization, world wars, Cold War, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST220', title: 'History of East Asia', description: 'China, Japan, and Korea: imperial systems, cultural traditions, modernization, and contemporary challenges.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST240', title: 'American History to 1877', description: 'Colonial America through Reconstruction. Indigenous peoples, slavery, revolution, and the Civil War.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'HIST340', title: 'History of the Pacific Rim', description: 'Transpacific connections: trade, migration, cultural exchange, and conflict across the Pacific world.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIST360', title: 'History of Science & Technology', description: 'How scientific knowledge and technological innovation have shaped societies from the Scientific Revolution to the digital age.', credits: 1, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIST201', title: 'Ancient Mediterranean World', description: 'Greece, Rome, Egypt, and Persia. Politics, philosophy, war, and cultural exchange in the ancient world.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST202', title: 'Medieval Europe', description: 'Fall of Rome through the Renaissance. Feudalism, the Church, Crusades, Black Death, and cultural revival.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST275', title: 'Modern Europe: 1789 to Present', description: 'French Revolution to the EU. Nationalism, industrialization, two world wars, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'HIST215', title: 'Latin American History', description: 'Pre-Columbian civilizations through modern revolutions. Colonialism, independence, and contemporary challenges.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST250', title: 'The Middle East in Modern Times', description: 'Ottoman Empire to the present. Nationalism, oil, the Arab-Israeli conflict, and the Arab Spring.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN / IDENTITY =====
    { id: 'AAS200', title: 'Introduction to Asian American Studies', description: 'Asian American history, identity, and experience. Immigration, exclusion, internment, activism, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'AAS250', title: 'Asian American Literature & Film', description: 'Narratives of Asian American experience through literature and cinema. Representation, stereotypes, and counter-narratives.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'literature'], prereqs: [], genEdReqs: ['diversity'] },
    { id: 'AAS300', title: 'Race & Immigration in the Pacific Northwest', description: 'How race and immigration have shaped communities in the Pacific Northwest. Japanese internment, Filipino laborers, recent immigration.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: ['diversity'] },

    // ===== LITERATURE =====
    { id: 'ENGL220', title: 'Introduction to Literary Studies', description: 'Close reading of fiction, poetry, and drama. Literary theory, interpretation, and critical writing.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL240', title: 'Creative Writing: Fiction', description: 'Workshop-based fiction writing. Short story craft, voice, character, and narrative structure. Peer critique.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL250', title: 'Creative Writing: Poetry', description: 'Workshop-based poetry writing. Form, imagery, sound, and revision. Reading contemporary poets.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL310', title: 'Japanese Literature in Translation', description: 'Major works of Japanese literature from The Tale of Genji to contemporary fiction. Cultural context and literary tradition.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL320', title: 'Science Fiction & Fantasy', description: 'Genre fiction exploring technology, society, and imagination. From Shelley to Le Guin to contemporary voices.', credits: 1, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL340', title: 'Graphic Narratives', description: 'Comics, manga, and graphic novels as literary and artistic forms. Visual storytelling and narrative structure.', credits: 1, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'ENGL235', title: 'Shakespeare', description: 'Close reading of major plays and sonnets. Tragedy, comedy, and the enduring power of Shakespeare\'s language.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL260', title: 'The Novel', description: 'Development of the novel from the 18th century to the present. Austen, Brontë, Dickens, Morrison, and beyond.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CLAS220', title: 'Greek & Roman Literature', description: 'Homer, Virgil, Ovid, Sappho. Epic, lyric, tragedy, and comedy from the ancient world.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL270', title: 'Russian Literature', description: 'Dostoevsky, Tolstoy, Chekhov in translation. The Russian literary tradition and its exploration of the human condition.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'ENGL280', title: 'World Literature', description: 'Masterworks across cultures: African, Latin American, Asian, and European voices in comparative perspective.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: ['humanities'] },

    // ===== OTHER GEN-ED OPTIONS =====
    { id: 'SSI101', title: 'Seminar in Scholarly Inquiry I', description: 'First-year writing seminar. Academic reading, research, argumentation, and writing across disciplines.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'SSI102', title: 'Seminar in Scholarly Inquiry II', description: 'Continuation of writing seminar. Extended research project and revision-intensive writing.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: ['SSI101'], genEdReqs: ['writing'] },
    { id: 'SOC100', title: 'Introduction to Sociology', description: 'Social structures, inequality, institutions, and how society shapes individual life. Research methods in sociology.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PSYCH101', title: 'Introduction to Psychology', description: 'Scientific study of mind and behavior. Perception, learning, memory, development, and social psychology.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'PHIL101', title: 'Introduction to Philosophy', description: 'Core philosophical questions: free will, knowledge, ethics, and the nature of reality. Reading classic and contemporary thinkers.', credits: 1, category: 'gen-ed', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'BIOL101', title: 'Biology: Concepts & Issues', description: 'Biology for non-majors. Genetics, evolution, ecology, and contemporary biological issues.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'MUS101', title: 'Introduction to Music', description: 'Elements of music, historical periods, and diverse traditions. Active listening and concert attendance.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'THTR101', title: 'Introduction to Theater', description: 'Theater as collaborative art. Participation in production elements. Attendance at campus performances.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['arts'] },
    { id: 'POL101', title: 'Introduction to Political Science', description: 'Political systems, ideologies, and power. American and comparative politics.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['social-science'] },
    { id: 'RELS101', title: 'Introduction to Religious Studies', description: 'Major world religions: origins, beliefs, practices, and contemporary expressions.', credits: 1, category: 'gen-ed', interestTags: ['history'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'CHEM110', title: 'General Chemistry', description: 'Atomic structure, bonding, reactions, stoichiometry, and thermodynamics. Laboratory included.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['natural-science'] },
    { id: 'CSCI161', title: 'Introduction to Computer Science', description: 'Programming fundamentals in Python. Problem solving, algorithms, data structures, and computational thinking.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'GWSS201', title: 'Introduction to Gender & Queer Studies', description: 'Gender, sexuality, and power. Feminist and queer theory, intersectionality, and social justice.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['diversity'] },

    // ===== PHILOSOPHY =====
    { id: 'PHIL101', title: 'Introduction to Philosophy', description: 'Core philosophical questions: free will, knowledge, ethics, and the nature of reality. Classic and contemporary thinkers.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL201', title: 'Ethics', description: 'Major moral theories and their application to real-world problems. Small seminar format with discussion.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL210', title: 'Logic', description: 'Formal logic: propositional and predicate logic, truth tables, and proof methods.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: ['humanities'] },
    { id: 'PHIL220', title: 'Philosophy of Mind', description: 'Mind-body problem, consciousness, AI, and personal identity. What is it like to be a mind?', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: ['PHIL101'], genEdReqs: [] },
    { id: 'PHIL250', title: 'Existentialism', description: 'Freedom, anxiety, and meaning. Kierkegaard, Nietzsche, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL260', title: 'Philosophy of Science', description: 'Scientific method, falsifiability, paradigms, and the relationship between science and society.', credits: 1, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHIL280', title: 'Environmental Ethics', description: 'Moral obligations to nature, animals, future generations. Climate ethics and sustainability philosophy.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
  ],
};
