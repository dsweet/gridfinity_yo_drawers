import { Curriculum } from '../../types';

export const rochesterEcon: Curriculum = {
  schoolId: 'rochester',
  program: 'Economics',
  degreeRequirements: {
    totalCredits: 32, // 128 credit hours, ~32 courses
    majorCredits: 11,
    genEdCredits: 7, // Rochester's open curriculum: only writing + 2 clusters (3 courses each in 2 areas outside major)
    electiveCredits: 14,
    majorCourses: [
      'ECO108', 'ECO207', 'ECO209', 'ECO230', 'ECO231W',
      'MTH161', 'MTH162', 'STT211',
    ],
    genEdCategories: [
      { id: 'writing', name: 'Primary Writing Requirement', creditsRequired: 1, satisfiedBy: ['WRT105'] },
      { id: 'cluster-1', name: 'Cluster 1 (3 related courses outside major)', creditsRequired: 3, satisfiedBy: [] },
      { id: 'cluster-2', name: 'Cluster 2 (3 related courses outside major)', creditsRequired: 3, satisfiedBy: [] },
    ],
  },
  recommendedSequence: {
    years: 2,
    terms: [
      // YEAR 1 — Intro econ, calc, writing requirement, begin cluster exploration
      {
        termLabel: 'Fall Year 1',
        courses: ['ECO108', 'MTH161', 'WRT105', 'HIS100'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Principles of Econ)', 'Major req (Calculus IA)', 'Writing requirement (recommended first semester)', 'Cluster 1 course (choose a 3-course cluster)'],
      },
      {
        termLabel: 'Spring Year 1',
        courses: ['STT211', 'MTH162', 'HIS150', 'PSY101'],
        locked: [true, true, false, false],
        slotLabels: ['Major req (Intro Statistics)', 'Major req (Calculus IIA)', 'Cluster 1 course (continue cluster)', 'Cluster 2 course (choose a 3-course cluster)'],
      },
      // YEAR 2 — Intermediate econ core, econometrics sequence, finish clusters
      {
        termLabel: 'Fall Year 2',
        courses: ['ECO207', 'ECO209', 'ECO230', 'HIS205'],
        locked: [true, true, true, false],
        slotLabels: ['Major req (Intermediate Micro)', 'Major req (Intermediate Macro)', 'Major req (Economic Statistics)', 'Cluster 1 course (complete cluster)'],
      },
      {
        termLabel: 'Spring Year 2',
        courses: ['ECO231W', 'PHL101', 'PHL201', 'AST104'],
        locked: [true, false, false, false],
        slotLabels: ['Major req (Econometrics — writing-intensive)', 'Cluster 2 course (continue cluster)', 'Cluster 2 course (complete cluster)', 'Free elective'],
      },
    ],
  },
  courses: [
    // ===== ECONOMICS MAJOR REQUIRED =====
    { id: 'ECO108', title: 'Principles of Economics', description: 'Unified introduction to micro and macroeconomics. Supply/demand, market structures, GDP, inflation, and policy.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'ECO207', title: 'Intermediate Microeconomics', description: 'Consumer theory, producer theory, general equilibrium, game theory, information economics, and welfare analysis.', credits: 1, category: 'major-required', interestTags: ['game-theory'], prereqs: ['ECO108', 'MTH161'], genEdReqs: [] },
    { id: 'ECO209', title: 'Intermediate Macroeconomics', description: 'Long-run growth, business cycles, monetary and fiscal policy, open economy macroeconomics, and financial markets.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECO108', 'MTH161'], genEdReqs: [] },
    { id: 'ECO230', title: 'Economic Statistics', description: 'Probability, statistical inference, and regression analysis with economic applications.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECO108', 'STT211'], genEdReqs: [] },
    { id: 'ECO231W', title: 'Econometrics', description: 'Advanced regression analysis, causal inference, panel data, and empirical research methods. Writing-intensive.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['ECO230'], genEdReqs: ['writing'] },
    { id: 'MTH161', title: 'Calculus IA', description: 'Functions, limits, derivatives, and applications. First semester of calculus sequence.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'MTH162', title: 'Calculus IIA', description: 'Integration, techniques of integration, sequences, series, and applications.', credits: 1, category: 'major-required', interestTags: [], prereqs: ['MTH161'], genEdReqs: [] },
    { id: 'STT211', title: 'Introduction to Statistics', description: 'Probability, distributions, confidence intervals, hypothesis testing, and regression basics.', credits: 1, category: 'major-required', interestTags: [], prereqs: [], genEdReqs: [] },

    // ===== ECONOMICS ELECTIVES =====
    { id: 'ECO260', title: 'Game Theory', description: 'Strategic interaction: Nash equilibrium, sequential games, repeated games, bargaining, mechanism design, and auction theory. Applications across economics and political science.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO265', title: 'Behavioral Economics', description: 'Cognitive biases, prospect theory, intertemporal choice, social preferences, and nudge policy design.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO275', title: 'Industrial Organization', description: 'Firm behavior, market power, pricing strategies, antitrust policy, and regulation.', credits: 1, category: 'major-elective', interestTags: ['game-theory'], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO280', title: 'Financial Economics', description: 'Asset pricing, portfolio theory, risk management, derivatives, and financial market microstructure.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO285', title: 'International Economics', description: 'Trade theory, trade policy, exchange rates, capital flows, and globalization.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO290', title: 'Development Economics', description: 'Economic challenges of developing countries. Poverty, growth, institutions, health, education, and aid effectiveness.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },
    { id: 'ECO295', title: 'Economics of Health & Medicine', description: 'Healthcare markets, insurance, pharmaceutical economics, health policy, and cost-effectiveness analysis.', credits: 1, category: 'major-elective', interestTags: [], prereqs: ['ECO207'], genEdReqs: [] },

    // ===== CERAMICS / STUDIO ART =====
    { id: 'SA161', title: 'Ceramics I', description: 'Hand-building and wheel-throwing techniques. Clay chemistry, glazing, and firing. Open studio access.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'SA261', title: 'Ceramics II: Form & Surface', description: 'Advanced wheel work, surface decoration, glaze formulation, and kiln firing techniques. Personal aesthetic development.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['SA161'], genEdReqs: [] },
    { id: 'SA361', title: 'Ceramics III: Advanced Projects', description: 'Independent ceramic projects. Sculptural and functional forms, alternative firing, exhibition preparation.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: ['SA261'], genEdReqs: [] },
    { id: 'SA100', title: 'Introduction to Studio Art', description: 'Fundamentals of visual art-making. Drawing, painting, sculpture, and digital media. No prior experience needed.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'SA110', title: 'Drawing I', description: 'Observational and expressive drawing. Graphite, charcoal, ink, and mixed media. Composition and visual problem-solving.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },
    { id: 'SA171', title: 'Sculpture I', description: 'Three-dimensional art: carving, casting, construction, and installation. Conceptual and material exploration.', credits: 1, category: 'elective', interestTags: ['ceramics'], prereqs: [], genEdReqs: [] },

    // ===== ASTRONOMY / SPACE (Rochester has a strong astronomy dept) =====
    { id: 'AST104', title: 'Astronomy Survey', description: 'Modern astronomy for non-scientists: planets, stars, black holes, galaxies, and the expanding universe. Planetarium visits.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'AST106', title: 'The Solar System', description: 'Planets, moons, comets, and asteroids. Planetary formation, geology, atmospheres, and the search for exoplanets.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'AST200', title: 'Observational Astrophysics', description: 'Telescope techniques, CCD imaging, spectroscopy, and astronomical data analysis. Nighttime observing sessions at the C.E.K. Mees Observatory.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['AST104'], genEdReqs: [] },
    { id: 'AST203', title: 'Origins: From the Big Bang to Life', description: 'How the universe, galaxies, stars, planets, and life formed. Cosmology, stellar evolution, and astrobiology.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'AST231', title: 'Stellar Astrophysics', description: 'Physics of stars: nuclear fusion, energy transport, stellar structure, evolution, and endpoints (white dwarfs, neutron stars, black holes).', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['AST104', 'MTH161'], genEdReqs: [] },
    { id: 'AST232', title: 'Galaxies & Cosmology', description: 'Structure and evolution of galaxies. Dark matter, dark energy, cosmic microwave background, and the fate of the universe.', credits: 1, category: 'elective', interestTags: ['astronomy', 'space'], prereqs: ['AST104', 'MTH161'], genEdReqs: [] },
    { id: 'PHY113', title: 'General Physics I', description: 'Mechanics, waves, and thermodynamics with lab. Algebra-based for non-majors.', credits: 1, category: 'elective', interestTags: ['space'], prereqs: [], genEdReqs: [] },

    // ===== HISTORY =====
    { id: 'HIS100', title: 'Methods of Historical Inquiry', description: 'How historians think: primary sources, evidence, argument, and narrative construction.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIS150', title: 'World History Since 1500', description: 'Global connections from early modern period to present. Colonialism, revolution, world wars, and decolonization.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIS205', title: 'East Asian History', description: 'China, Japan, and Korea from imperial eras to the present. Political, cultural, and economic transformations.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIS225', title: 'Modern Japan', description: 'Meiji restoration to contemporary Japan. Industrialization, militarism, postwar miracle, and cultural globalization.', credits: 1, category: 'elective', interestTags: ['history', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'HIS260', title: 'History of Science', description: 'Scientific thought from ancient Greece to quantum mechanics and beyond. Revolutions, paradigm shifts, science and society.', credits: 1, category: 'elective', interestTags: ['history', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'HIS280', title: 'The Space Age', description: 'History of space exploration from Sputnik to Mars rovers. Cold War competition, Apollo, and the future of spaceflight.', credits: 1, category: 'elective', interestTags: ['history', 'space', 'astronomy'], prereqs: [], genEdReqs: [] },
    { id: 'HIST121', title: 'Ancient Greece', description: 'Greek civilization from the Bronze Age to Alexander. Democracy, philosophy, theater, and the Greek legacy.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'HIST122', title: 'Ancient Rome', description: 'Roman Republic and Empire. Law, engineering, expansion, and the fall. What Rome built and what endured.', credits: 1, category: 'elective', interestTags: ['history', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'HIST150', title: 'Medieval Europe', description: 'Fall of Rome to 1500. Feudalism, the Church, Crusades, Black Death, and the seeds of modernity.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST200', title: 'Modern Europe: 1789 to Present', description: 'Revolutions, nationalism, world wars, the Holocaust, Cold War, and European integration.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'HIST270', title: 'Latin American History', description: 'Pre-Columbian empires to modern revolutions. Colonialism, independence, Cold War interventions, and contemporary Latin America.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },

    // ===== PHILOSOPHY =====
    { id: 'PHL101', title: 'Introduction to Philosophy', description: 'Classic questions about knowledge, reality, ethics, free will, and the meaning of life. Plato, Descartes, Hume, Kant, and contemporary thinkers.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHL201', title: 'Ethics', description: 'Moral theories and their application. Utilitarianism, deontology, virtue ethics, and contemporary moral dilemmas.', credits: 1, category: 'elective', interestTags: ['philosophy'], prereqs: [], genEdReqs: [] },
    { id: 'PHL203', title: 'Philosophy of Mind', description: 'Consciousness, artificial intelligence, free will, and the mind-body problem. What makes a mind?', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'PHL210', title: 'Logic', description: 'Formal and informal logic. Valid arguments, fallacies, propositional logic, and truth tables.', credits: 1, category: 'elective', interestTags: ['philosophy', 'game-theory'], prereqs: [], genEdReqs: [] },
    { id: 'PHL225', title: 'Philosophy of Science', description: 'What is science? Scientific method, theory change, realism vs. anti-realism, and the demarcation problem.', credits: 1, category: 'elective', interestTags: ['philosophy', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'PHL250', title: 'Existentialism', description: 'Freedom, authenticity, anxiety, and meaning. Kierkegaard, Nietzsche, Heidegger, Sartre, de Beauvoir, and Camus.', credits: 1, category: 'elective', interestTags: ['philosophy', 'literature'], prereqs: [], genEdReqs: [] },
    { id: 'PHL275', title: 'Philosophy of Technology', description: 'Ethics of AI, surveillance, social media, and algorithmic decision-making. Technology\'s impact on human life and society.', credits: 1, category: 'elective', interestTags: ['philosophy', 'design'], prereqs: [], genEdReqs: [] },

    // ===== ASIAN AMERICAN / IDENTITY =====
    { id: 'AAS100', title: 'Introduction to Asian American Studies', description: 'History, culture, and experience of Asian Americans. Immigration, exclusion, identity, and contemporary issues.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: [] },
    { id: 'AAS210', title: 'Asian Americans & Popular Culture', description: 'Representation of Asian Americans in media, film, music, and digital culture. Stereotypes and counter-narratives.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'AAS250', title: 'Race & Identity in America', description: 'Racial formation theory, intersectionality, and the construction of racial identity in the United States.', credits: 1, category: 'elective', interestTags: ['cultural-studies', 'history'], prereqs: [], genEdReqs: [] },

    // ===== GAME DESIGN / VIDEO GAMES (via CS and digital media) =====
    { id: 'CSC171', title: 'Introduction to Computer Science', description: 'Programming in Java. Problem-solving, data structures, algorithms, and object-oriented design.', credits: 1, category: 'elective', interestTags: ['video-games'], prereqs: [], genEdReqs: [] },
    { id: 'CSC170', title: 'Introduction to Web Development', description: 'HTML, CSS, JavaScript, and web application fundamentals. Building interactive websites.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'DMS103', title: 'Digital Media & Visual Culture', description: 'How digital media shapes visual culture. Photography, video, interactive media, and virtual environments.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: [], genEdReqs: [] },
    { id: 'DMS210', title: 'Interactive Digital Media', description: 'Creating interactive experiences. Animation, interactivity, game mechanics, and user engagement.', credits: 1, category: 'elective', interestTags: ['video-games', 'design'], prereqs: ['DMS103'], genEdReqs: [] },

    // ===== LITERATURE =====
    { id: 'ENG101', title: 'Introduction to Literary Studies', description: 'How to read closely and write analytically about literature. Fiction, poetry, drama, and critical theory.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENG225', title: 'Asian American Literature', description: 'Literature by Asian American writers. Immigration, identity, generational conflict, and cultural negotiation.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ENG250', title: 'Creative Writing: Fiction', description: 'Workshop in short fiction. Craft elements, peer critique, and revision. Small class, intensive feedback.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENG255', title: 'Creative Writing: Poetry', description: 'Workshop in poetry. Form, imagery, voice, and revision process.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENG275', title: 'Science Fiction', description: 'The science fiction genre from Mary Shelley to the present. Technology, society, utopia, and dystopia.', credits: 1, category: 'elective', interestTags: ['literature', 'space'], prereqs: [], genEdReqs: [] },
    { id: 'ENG290', title: 'Japanese Literature in Translation', description: 'Major Japanese literary works: The Tale of Genji, Bashō, Mishima, Murakami. Cultural context and literary innovation.', credits: 1, category: 'elective', interestTags: ['literature', 'cultural-studies'], prereqs: [], genEdReqs: [] },
    { id: 'ENG310', title: 'Graphic Novels & Visual Narrative', description: 'Comics and graphic novels as literary and artistic form. Maus, Persepolis, manga, and indie graphic novels.', credits: 1, category: 'elective', interestTags: ['literature', 'video-games'], prereqs: [], genEdReqs: [] },
    { id: 'ENG225', title: 'Shakespeare', description: 'Close reading of plays and sonnets. Performance, language, genre, and Shakespeare\'s world.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'ENG251', title: 'The Novel', description: 'Rise and evolution of the novel. Austen, Dickens, James, Woolf, and contemporary experimentalists.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'CLS210', title: 'Greek & Roman Literature', description: 'Homer, Sophocles, Virgil, Ovid. Epic, tragedy, comedy, and lyric from the ancient world.', credits: 1, category: 'elective', interestTags: ['literature', 'classics'], prereqs: [], genEdReqs: [] },
    { id: 'RUS200', title: 'Russian Literature in Translation', description: 'Pushkin, Dostoevsky, Tolstoy, Chekhov. Moral philosophy, realism, and the Russian literary imagination.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },
    { id: 'ENG260', title: 'World Literature', description: 'Comparative study of major literary works from Africa, Asia, Latin America, and Europe.', credits: 1, category: 'elective', interestTags: ['literature'], prereqs: [], genEdReqs: [] },

    // ===== GEN-ED / OTHER =====
    { id: 'WRT105', title: 'Writing & the Arts of Language', description: 'College writing seminar. Argument, evidence, revision, and rhetorical strategies. Required for all first-years.', credits: 1, category: 'gen-ed', interestTags: [], prereqs: [], genEdReqs: ['writing'] },
    { id: 'PSY101', title: 'Introduction to Psychology', description: 'Scientific study of mind and behavior. Brain, perception, learning, memory, development, and social psychology.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'MUR101', title: 'Introduction to Music', description: 'Exploring music through listening, history, and theory. Eastman School of Music connection enriches the experience.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'MUR207', title: 'History of Jazz', description: 'Jazz from its origins to the present. Blues, swing, bebop, modal jazz, free jazz, and fusion.', credits: 1, category: 'elective', interestTags: ['history'], prereqs: [], genEdReqs: [] },
    { id: 'ANT103', title: 'Cultural Anthropology', description: 'Human cultural diversity, kinship, religion, economics, and political organization across societies.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
    { id: 'PSC101', title: 'Introduction to Political Science', description: 'Political systems, theories, and institutions. Democracy, authoritarianism, and political participation.', credits: 1, category: 'elective', interestTags: [], prereqs: [], genEdReqs: [] },
  ],
};
