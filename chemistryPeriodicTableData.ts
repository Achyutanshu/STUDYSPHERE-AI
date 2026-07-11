export interface TopicData {
  id: string;
  title: string;
  concept: string;
  explanation: string;
  realLifeExample: string;
  commonMistakes: string;
  icseBoardTip: string;
}

export interface ChemistryChapterData {
  title: string;
  chapterIntro: {
    importance: string;
    needForClassification: string;
    icseImportance: string;
  };
  learningObjectives: string[];
  topics: TopicData[];
  dailyLifeApplications: {
    title: string;
    desc: string;
    example: string;
  }[];
  chapterSummary: string[];
}

export const PERIODIC_TABLE_CHAPTER_DATA: ChemistryChapterData = {
  title: "Periodic Table",
  chapterIntro: {
    importance: "The Periodic Table is the cornerstone of modern chemistry. It is not just an arbitrary list of chemical elements; it is an elegant, structured catalog that unifies the fundamental building blocks of our universe. By organizing elements based on their atomic structures, the periodic table reveals profound mathematical and physical patterns. For scientists, educators, and students alike, it acts as a predictive engine—allowing us to anticipate the reactivity, bonding behavior, and physical properties of elements before we even observe them in a laboratory.",
    needForClassification: "In the early days of chemistry, elements were discovered in isolation. By the 19th century, as the number of known elements grew, chemists found themselves overwhelmed by a chaotic sea of unstructured data. Attempting to memorize the melting points, boiling points, reactivities, and compound formulas of dozens of individual elements was practically impossible. Classification was born out of a critical necessity to find order in this chaos, to group similar elements together, and to identify the underlying principles that govern chemical behavior.",
    icseImportance: "In the ICSE Class 10 Board Examination, the 'Periodic Table, Periodic Properties and Variations of Properties' chapter is of paramount importance. It serves as the foundation for the entire chemistry syllabus. Many subsequent topics—including Chemical Bonding, Metallurgy, Electrolysis, and the Study of Acids, Bases, and Salts—rely on a deep conceptual understanding of periodic trends. This chapter carries significant weight in both Section I (compulsory short questions) and Section II (structured questions) of the board paper, frequently featuring trend-prediction grids, definition-based questions, and reasoning items."
  },
  learningObjectives: [
    "Understand the historical attempts at classifying elements and their contributions (Dobereiner, Newlands, Mendeleev).",
    "Define and state the Modern Periodic Law and explain how it resolved historical anomalies.",
    "Describe the structural features of the Long Form Periodic Table, including the organization of groups, periods, and blocks.",
    "Relate the position of an element in the periodic table to its electronic configuration and valence electrons.",
    "Define and analyze the horizontal and vertical periodic trends of key physical and chemical properties.",
    "Master the physical justification of periodic trends using nuclear charge and the number of electron shells.",
    "Identify common errors in board-style chemistry questions and formulate precise, high-scoring explanations."
  ],
  topics: [
    {
      id: "topic-1",
      title: "Need for Classification",
      concept: "Classification is the systematic arrangement of elements with similar properties into groups or families to simplify their study and predict the behavior of new elements.",
      explanation: "With 118 elements known today, studying each element and its thousands of compounds individually is an insurmountable task. Grouping elements that share common chemical behaviors transforms a random collection of items into a structured scientific map. By classifying elements, we can study an entire family of elements (such as the alkali metals or halogens) by understanding just a single representative element, making the study of chemistry highly systematic and logical.",
      realLifeExample: "Imagine walking into a massive modern library containing millions of books. If the books were piled in random heaps, finding a specific novel would take days. However, libraries classify books by genre (Fiction, History, Science) and arrange them alphabetically. This systematic organization allows you to find any book in seconds.",
      commonMistakes: "Students often believe classification was only done because the number of elements is large. Remember, it was also done to find mathematical relations, understand the atomic nature of matter, and predict yet-to-be-discovered elements.",
      icseBoardTip: "In exams, if asked about the necessity of classification, always highlight two key points: 1. It systematizes the study of elements and their compounds. 2. It helps in predicting the properties of undiscovered elements based on their group characteristics."
    },
    {
      id: "topic-2",
      title: "Dobereiner's Triads",
      concept: "When chemically similar elements are arranged in groups of three (triads) in increasing order of their atomic masses, the atomic mass of the middle element is approximately the arithmetic mean of the atomic masses of the other two elements.",
      explanation: "In 1817, German chemist Johann Wolfgang Döbereiner made the first significant step towards periodic classification. He identified groups of three elements that exhibited remarkably similar chemical properties. He observed a mathematical relation: if you take the atomic mass of the lightest element and the heaviest element in a triad and calculate their average (mean), the result is extremely close to the atomic mass of the middle element. For example, in the Lithium (Li), Sodium (Na), Potassium (K) triad, Lithium's mass is 7 and Potassium's is 39. Their average is (7 + 39) / 2 = 23, which is exactly the atomic mass of Sodium!",
      realLifeExample: "Think of three sequential stepping stones across a pond. The position of the middle stone is exactly halfway between the first and the third stone. Dobereiner showed that atomic mass followed a similar progression.",
      commonMistakes: "Do not assume that Dobereiner's law applied to all elements known at that time. It was restricted to only a few elements, and as heavier or newly discovered elements were tested, the relation broke down.",
      icseBoardTip: "Memorize the three classic triads: 1. Li (7), Na (23), K (39) | 2. Ca (40), Sr (88), Ba (137) | 3. Cl (35.5), Br (80), I (127). You may be asked to prove Dobereiner's Law of Triads by calculating the arithmetic mean of a given pair in a 2-mark question."
    },
    {
      id: "topic-3",
      title: "Newlands' Law of Octaves",
      concept: "When elements are arranged in increasing order of their atomic masses, the properties of every eighth element are a repetition of the properties of the first element, similar to the octaves in music.",
      explanation: "In 1866, John Newlands arranged the then-known 56 elements in ascending order of their atomic masses. He noticed a striking pattern: the eighth element starting from any given element had properties very similar to the first one, just like the eighth note in a musical octave (Sa, Re, Ga, Ma, Pa, Dha, Ni, Sa). For instance, Lithium was the first element, and the eighth element after it was Sodium, which shares the same reactive, metallic nature. This was the first attempt that showed a periodic repetition of properties.",
      realLifeExample: "Think of a weekly calendar. If today is Sunday, the eighth day from now is also Sunday. It marks a repetition of the weekly cycle.",
      commonMistakes: "Students often fail to realize the critical limitations of Newlands' law. It was only applicable up to Calcium (lighter elements). After Calcium, the heavier elements did not show this eighth-element similarity. Additionally, Newlands assumed only 56 elements existed and left no blank spaces.",
      icseBoardTip: "State the two main drawbacks of Newlands' Law of Octaves: 1. It worked only up to Calcium. 2. It did not accommodate newly discovered elements (noble gases, when discovered, broke the octave pattern completely)."
    },
    {
      id: "topic-4",
      title: "Mendeleev's Periodic Table",
      concept: "The physical and chemical properties of elements are periodic functions of their atomic masses.",
      explanation: "In 1869, Russian chemist Dmitri Mendeleev published a highly revolutionary periodic table containing 63 elements. He arranged elements in rows (periods) and columns (groups) based on increasing atomic masses. Crucially, he prioritized chemical reactivity—grouping elements that formed similar oxides and hydrides. Mendeleev was a visionary; he realized some elements were yet undiscovered, so he boldly left gaps in his table and accurately predicted the atomic mass and properties of elements like 'Eka-Aluminium' (later discovered as Gallium) and 'Eka-Silicon' (discovered as Germanium).",
      realLifeExample: "Like compiling a calendar for a leap year where you leave specific blank boxes for future events, knowing exactly what day of the week those dates will fall on.",
      commonMistakes: "A common mistake is forgetting the basis of Mendeleev's classification. He used *atomic mass* as his primary organizing factor. This led to serious anomalies like 'anomalous pairs' where Tellurium (mass 128) had to be placed before Iodine (mass 127) to preserve group properties.",
      icseBoardTip: "Questions on Mendeleev's contributions and anomalies are very common. Remember his major contribution: leaving gaps for undiscovered elements and predicting their properties. His major defect: unable to assign a correct position to Hydrogen or isotopes, and the presence of anomalous pairs of elements."
    },
    {
      id: "topic-5",
      title: "Modern Periodic Law",
      concept: "The physical and chemical properties of elements are periodic functions of their atomic numbers.",
      explanation: "In 1913, English physicist Henry Moseley studied the X-ray spectra of various elements and discovered that the atomic number (number of protons in an atom's nucleus) is a far more fundamental and unique property of an element than its atomic mass. When elements were rearranged in ascending order of their atomic numbers, the anomalies of Mendeleev's table resolved themselves naturally. For example, isotopes (which have different atomic masses but the same atomic number) now occupied a single, logical slot.",
      realLifeExample: "In a school database, organizing students by their unique Student ID (which never changes and perfectly identifies them) is far superior to organizing them by their body weight, which can change or overlap.",
      commonMistakes: "When writing the definition of the Modern Periodic Law, do not accidentally write 'atomic mass'. The defining word is *atomic number*.",
      icseBoardTip: "Ensure you can state this law word-for-word. It is a recurring 1-mark or 2-mark question: 'State the Modern Periodic Law.'"
    },
    {
      id: "topic-6",
      title: "Long Form Periodic Table",
      concept: "The systematic graphical representation of the Modern Periodic Law based on the electronic configuration of elements, organizing them into s, p, d, and f blocks.",
      explanation: "The Long Form of the Periodic Table is the layout we use today. Created based on Bohr's atomic model, it is arranged in order of increasing atomic numbers. The table consists of 18 vertical columns called Groups and 7 horizontal rows called Periods. The structure of the table is a direct reflection of how electrons are distributed in shells and subshells (s, p, d, f blocks). This configuration highlights that elements in the same group have identical valence shell structures, explain their matching chemical traits.",
      realLifeExample: "Think of an apartment complex organized by floors (periods) and vertical stacks (groups). All apartments in a vertical stack have the exact same floor plan and window view, while moving up floors represents adding height (shells).",
      commonMistakes: "Thinking that Hydrogen has a perfectly settled, unchallenged position. Even in the Modern Periodic Table, Hydrogen's position is still debated because it shares properties with Group 1 (Alkali Metals, losing 1 electron) and Group 17 (Halogens, needing 1 electron to complete its shell).",
      icseBoardTip: "Identify the unique placement of Inner Transition elements (Lanthanides and Actinides) at the bottom of the periodic table. They are kept separate to prevent the table from becoming awkwardly wide."
    },
    {
      id: "topic-7",
      title: "Groups and Periods",
      concept: "Groups are the 18 vertical columns representing families of elements with similar valence electrons, while Periods are the 7 horizontal rows representing elements with the same number of electron shells.",
      explanation: "There are 18 Groups. Group 1 contains the highly reactive Alkali Metals (Li, Na, K...). Group 2 contains the Alkaline Earth Metals. Groups 3 to 12 contain Transition Elements. Group 17 consists of the highly reactive Halogens (F, Cl, Br, I), and Group 18 consists of the stable, unreactive Noble Gases. There are 7 Periods. Period 1 is the shortest period (contains only H and He). Period 2 and 3 are short periods (8 elements each). Period 4 and 5 are long periods (18 elements each). Period 6 is the longest period (32 elements, including Lanthanides). Period 7 is incomplete but highly radioactive (including Actinides).",
      realLifeExample: "In a class timetable, a vertical column represents a specific time block across days (e.g. always Math), while a horizontal row shows the progression of different subjects throughout a single day.",
      commonMistakes: "Swapping groups and periods! Remember: Group = Vertical Column (like a Greek column holding up a temple), Period = Horizontal Row.",
      icseBoardTip: "Be familiar with the special names of the groups. You might be asked: 'To which group do halogens belong?' (Group 17) or 'What is the common name of Group 1 elements?' (Alkali metals)."
    },
    {
      id: "topic-8",
      title: "Electronic Configuration",
      concept: "The systematic distribution of electrons in different energy shells (K, L, M, N...) surrounding an atom's nucleus.",
      explanation: "The electronic configuration of an atom is the key to its chemical identity. The shell filling follows Bohr-Bury rules, where the maximum capacity of the nth shell is 2(n^2). The period number of an element in the periodic table directly corresponds to the total number of electron shells it possesses. The group number of representative elements (Groups 1, 2, 13-17) corresponds to its valence electrons. For example, Chlorine (Cl, atomic number 17) has a configuration of 2, 8, 7. Because it has 3 shells, it is in Period 3. Because it has 7 valence electrons, it is in Group 17 (7 + 10).",
      realLifeExample: "Placing passengers in a tour bus where rows represent electron shells. The front row (K shell) has 2 seats, the second row (L shell) has 8 seats, and you must fill the closer rows before passengers sit further back.",
      commonMistakes: "Be careful when writing the electronic configuration of ions versus neutral atoms. For example, Calcium atom is 2, 8, 8, 2, but Calcium ion (Ca2+) is 2, 8, 8. Read the question carefully to see if it asks for the atom or the ion.",
      icseBoardTip: "The ICSE syllabus strictly focuses on elements with atomic numbers 1 to 20 (Hydrogen to Calcium). Ensure you have absolute fluency in writing configurations for these 20 elements. This is a guaranteed scoring area!"
    },
    {
      id: "topic-9",
      title: "Valence Electrons",
      concept: "The electrons residing in the outermost shell (valence shell) of an atom that determine its combining capacity and chemical reactivity.",
      explanation: "Valence electrons are the ones involved in chemical bonding. Across a period (left to right), the number of valence electrons increases step-by-step from 1 to 8 (except Period 1, which ends at 2). Down a group (top to bottom), the number of valence electrons remains identical. For instance, all Group 1 elements have exactly 1 valence electron in their outermost shell, which explains why they share almost identical chemical properties and reactivities. Valency, on the other hand, is the combining capacity, which increases from 1 to 4 and then decreases to 0 across a period, remaining constant down a group.",
      realLifeExample: "Consider the outermost layer of a castle's defense wall. Only the guards stationed on this outer wall can shake hands with visitors or engage with challengers. The inner guards remain unexposed.",
      commonMistakes: "Do not confuse 'valence electrons' with 'valency'. For example, Nitrogen has 5 valence electrons, but its valency is 3 (8 - 5 = 3) because it needs 3 electrons to complete its octet.",
      icseBoardTip: "Questions often ask for the variation of valency across a period. Always specify that it 'increases from 1 to 4 and then decreases to 0' (referring to Group 18 inert gases which have valency 0)."
    },
    {
      id: "topic-10",
      title: "Atomic Radius",
      concept: "The distance from the center of the nucleus to the outermost electron shell of an isolated neutral atom.",
      explanation: "Atomic radius is a measure of the size of an atom. Across a period, atomic radius decreases. This happens because the nuclear charge (number of protons) increases, drawing the electron shells closer to the nucleus with a stronger electrostatic pull. Down a group, atomic radius increases. This is because a new electron shell is added with each consecutive period, which outweighs the increased nuclear pull and physically expands the size of the atom.",
      realLifeExample: "Think of an onion. Adding new layers (shells) down a group makes the onion noticeably larger. Conversely, across a period, imagine a stronger magnet at the core pulling the exact same layers tighter, shrinking the overall volume.",
      commonMistakes: "Students often incorrectly assume that atomic size must increase across a period because the number of electrons increases. Remember, these electrons are added to the *same* outermost shell, while the nuclear proton charge increases, squeezing the atom.",
      icseBoardTip: "When explaining trends in atomic size, you MUST mention two factors: 1. Nuclear Charge (increases across a period, pulling shells closer) and 2. Number of Shells (increases down a group, overriding nuclear charge). Skipping these core keywords will result in lost marks."
    },
    {
      id: "topic-11",
      title: "Metallic Character",
      concept: "The tendency of an atom to lose its valence electrons easily and form positive ions (cations); also known as electropositive character.",
      explanation: "Metallic character is directly linked to an atom's ability to shed electrons. Across a period, metallic character decreases. As atomic size shrinks and nuclear charge increases, the outermost electrons are held very tightly, making it extremely difficult to lose them. Down a group, metallic character increases. The addition of shells increases atomic size, meaning the valence electrons are far from the nuclear pull and are easily lost. This is why elements at the bottom-left of the table (like Cesium) are the most metallic.",
      realLifeExample: "A parent keeping watch over their children at a playground. If the playground is tiny (small atomic radius), the parent keeps a tight grip (non-metallic). If the park is massive and the children are far away (large radius), they can easily drift away (metallic, electron loss).",
      commonMistakes: "Confusing metallic character with physical state. Do not think of 'metallic' only as shiny hardness. In chemistry, it refers strictly to the *ease of losing electrons*.",
      icseBoardTip: "Remember that alkali metals are the most electropositive elements. If you are asked to arrange elements in increasing order of metallic character, check their positions in the periodic table: bottom-left elements are always the strongest metals."
    },
    {
      id: "topic-12",
      title: "Non-metallic Character",
      concept: "The tendency of an atom to gain electrons easily and form negative ions (anions); also known as electronegative character.",
      explanation: "Non-metals are 'electron-grabbers.' Across a period, non-metallic character increases. This is because atomic size decreases and nuclear charge increases, allowing the nucleus to attract external electrons with immense force. Down a group, non-metallic character decreases. As atomic size increases, the nucleus is shielded by inner shells and is too far away to effectively attract extra electrons. Elements at the top-right of the table (like Fluorine) are the most reactive non-metals.",
      realLifeExample: "A strong, compact magnet easily pulling in iron paperclips from its surroundings, versus a bulky magnet wrapped in layers of thick cloth that struggles to attract anything.",
      commonMistakes: "Do not include Noble Gases (Group 18) when discussing trends in non-metallic reactivity. Although they are gaseous non-metals, they have completely stable configurations (duplet/octet) and have zero tendency to gain or lose electrons.",
      icseBoardTip: "Fluorine is the most non-metallic and reactive halogen. Always remember that non-metallic oxides are acidic in nature, while metallic oxides are basic. You might be asked to predict the pH or chemical nature of oxides based on periodic positions."
    },
    {
      id: "topic-13",
      title: "Ionisation Energy",
      concept: "The minimum energy required to remove an electron from the outermost shell of an isolated gaseous atom in its ground state (expressed in kJ/mol or eV).",
      explanation: "Ionisation Energy (IE) is a measure of how tightly an atom holds onto its valence electrons. If the nucleus has a strong grip on outer electrons, the energy required to rip one away is exceptionally high. Across a period, IE increases because the atomic size decreases and nuclear charge increases, locking the electrons in place. Down a group, IE decreases because the atomic size increases and shielding increases, allowing the outermost electron to be removed with minimal energy effort.",
      realLifeExample: "Snatched a toy from a child. If the child is holding the toy tightly against their chest (small atomic size, high nuclear pull), it is very hard to take. If the child is holding it loosely at arm's length (large size), you can take it easily.",
      commonMistakes: "When writing the definition of Ionisation Energy, students often omit the crucial terms: *isolated*, *gaseous atom*, and *ground state*. These words are non-negotiable in the ICSE marking scheme.",
      icseBoardTip: "Helium has the highest Ionisation Energy in the entire periodic table because it is extremely small and has a stable duplet. Cesium has the lowest Ionisation Energy."
    },
    {
      id: "topic-14",
      title: "Electron Affinity",
      concept: "The amount of energy released when an electron is added to an isolated gaseous atom in its ground state to form a negative gaseous ion (anion).",
      explanation: "Electron Affinity (EA) measures an atom's willingness to accept an extra electron. When an electron is introduced to a small atom with a high nuclear pull, the electron is strongly attracted, releasing a substantial amount of energy. Across a period, EA increases. Down a group, EA decreases because the incoming electron is placed further from the nucleus, feeling less attractive force and releasing less energy.",
      realLifeExample: "An avid collector's excitement (released energy) when they receive a highly desired, missing stamp for their compact album, compared to a collector with a huge, cluttered house who barely notices a new addition.",
      commonMistakes: "The Fluorine vs. Chlorine anomaly is a classic pitfall! Fluorine is smaller than Chlorine, so you would expect Fluorine to have a higher EA. However, Fluorine's atom is *so* compact that its existing electrons repel the incoming electron. Thus, Chlorine actually has a higher Electron Affinity than Fluorine!",
      icseBoardTip: "The Chlorine-Fluorine anomaly is an extremely popular ICSE question. Answer it by stating: 'Due to Fluorine's exceptionally small atomic size, there is high inter-electronic repulsion in its outer shell, which opposes the incoming electron. Thus, less energy is released compared to Chlorine.'"
    },
    {
      id: "topic-15",
      title: "Electronegativity",
      concept: "The tendency of an atom in a covalent molecule to attract the shared pair of electrons towards itself.",
      explanation: "Unlike Ionisation Energy or Electron Affinity, Electronegativity is not a measured laboratory energy. Instead, it is a relative scale (formulated by Linus Pauling) that describes the 'tug-of-war' strength of an atom when it is bonded to another atom. Across a period, Electronegativity increases due to decreasing atomic size and increasing nuclear charge. Down a group, Electronegativity decreases because the expanding atomic size reduces the nuclear pull on the shared bonding pair.",
      realLifeExample: "In a game of tug-of-war, a muscular, strong player (Fluorine) easily pulls the center of the rope towards themselves, while a weaker player (Sodium) loses their grip immediately.",
      commonMistakes: "Do not confuse Electronegativity with Electron Affinity. EA refers to an isolated, single gaseous atom attracting an electron to form an ion. Electronegativity refers to an atom *within a molecule* pulling a shared pair of electrons in a covalent bond.",
      icseBoardTip: "Fluorine is the most electronegative element in the entire periodic table, assigned a maximum value of 4.0 on the Pauling Scale. Cesium has the lowest electronegativity (0.7). Inert gases have zero electronegativity because they do not form covalent bonds."
    },
    {
      id: "topic-16",
      title: "Importance of the Periodic Table",
      concept: "The periodic table is a predictive map that unifies inorganic chemistry, guides the discovery of new elements, and enables the engineering of modern materials.",
      explanation: "The Periodic Table is far more than a decorative poster in a science lab. It is a powerful conceptual engine. By knowing the position of an unknown element, we can immediately deduce its physical state, reactivity, chemical formula of its oxides/halides, and metallic character. It is used daily by material scientists to design super-alloys, discover catalysts for green energy, synthesize pharmaceuticals, and develop advanced semiconductors for microchips and quantum computing.",
      realLifeExample: "A complete geological map of the world. Without it, travelers would be lost at sea. With it, we can plan precise flight paths, predict climate behaviors, and navigate safely.",
      commonMistakes: "Do not view the periodic table as a static historical relic. It is a living, breathing scientific guide that is constantly used to synthesize new super-heavy elements and innovate in nanotechnology.",
      icseBoardTip: "Understanding these periodic properties is the key to mastering the next few chapters. If you understand why atomic size shrinks across a period, you will instantly understand why elements form covalent bonds instead of ionic bonds in the Chemical Bonding chapter."
    }
  ],
  dailyLifeApplications: [
    {
      title: "Semiconductor Technology",
      desc: "Silicon and Germanium, located along the metalloid border of the periodic table, are the backbone of all modern microchips, smartphones, and computers. Their unique intermediate conductivity makes them perfect switches for digital binary code.",
      example: "The processor in your computer or mobile phone is made of billions of microscopic silicon transistors."
    },
    {
      title: "Medical Imaging and Radioisotopes",
      desc: "Heavier elements and transition metals are utilized in advanced medical diagnostics. For example, Barium (Group 2) is used as a contrast agent in gastrointestinal X-rays, and Technetium (Transition metal) is used in radioactive tracking.",
      example: "A barium meal swallow highlights the digestive tract on an X-ray screen due to Barium's high atomic number."
    },
    {
      title: "Rechargeable Batteries",
      desc: "Lithium, being the lightest metal in Group 1 with an incredibly low density and high electrochemical potential, is the primary element used in high-capacity rechargeable batteries.",
      example: "The lithium-ion battery in electric cars, laptops, and smartphones that keeps them running for hours."
    },
    {
      title: "Lighting and Signage",
      desc: "Noble gases in Group 18, such as Neon, Argon, and Xenon, are inert but emit brilliant, vibrant colors when electrical currents are passed through them in vacuum tubes.",
      example: "The colorful, glowing neon signs used in storefronts, advertisements, and runway lighting."
    }
  ],
  chapterSummary: [
    "Need for Classification: Grouping elements with similar properties systematically simplifies the vast field of chemical reactions and compounds.",
    "Early Chemists: Döbereiner grouped elements in triads of mass averages; Newlands discovered musical octaves of repeating traits up to Calcium; Mendeleev arranged by atomic mass, leaving vital gaps for future discoveries.",
    "The Modern breakthrough: Henry Moseley proved that atomic number, not atomic mass, is the fundamental periodic property of chemical elements.",
    "Long Form Table structure: Comprises 18 vertical columns (Groups) representing chemical families, and 7 horizontal rows (Periods) representing shell counts.",
    "Electronic configuration: Dictates placement. Period number equals total electron shells; Group number dictates valence electrons of representative elements.",
    "Atomic Radius: Shrinks across a period due to increased nuclear pull; expands down a group as new electron shells are added.",
    "Metallic & Electropositive Character: Decreases across a period (harder to lose electrons) and increases down a group (easier to shed outer electrons).",
    "Non-metallic & Electronegative Character: Increases across a period (stronger nuclear pull on outer electrons) and decreases down a group.",
    "Ionisation Energy, Electron Affinity, and Electronegativity: These energy barriers and electronegative tugs generally increase across periods and decrease down groups.",
    "The Fluorine-Chlorine exception: Chlorine has the highest Electron Affinity in the table because Fluorine's extremely compact size causes high inter-electronic repulsion, opposing incoming electrons."
  ]
};
