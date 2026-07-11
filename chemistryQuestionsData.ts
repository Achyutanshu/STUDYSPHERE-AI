export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string; // e.g., "A", "B", "C", "D"
  explanation: string;
}

export interface ShortAnswerQuestion {
  id: string;
  question: string;
  modelAnswer: string;
}

export interface FreeResponseQuestion {
  id: string;
  question: string;
  modelAnswer: string;
}

export interface ChemistryChapterQuestions {
  mcqs: MCQQuestion[];
  shortAnswers: ShortAnswerQuestion[];
  freeResponses: FreeResponseQuestion[];
}

export const CHEMISTRY_QUESTIONS_DATA: Record<string, ChemistryChapterQuestions> = {
  'c-1': {
    mcqs: [
      {
        id: 'c1-mcq-1',
        question: 'Which of the following properties increases down a group in the periodic table?',
        options: [
          'A) Ionization Potential',
          'B) Electron Affinity',
          'C) Electronegativity',
          'D) Atomic Radius'
        ],
        correctAnswer: 'D',
        explanation: 'Atomic radius increases down a group because new electron shells are added, which increases the physical distance between the nucleus and the outermost valence shell.'
      },
      {
        id: 'c1-mcq-2',
        question: 'An element with high electronegativity will generally have:',
        options: [
          'A) Large atomic size',
          'B) Low electron affinity',
          'C) High ionization potential',
          'D) Strong metallic character'
        ],
        correctAnswer: 'C',
        explanation: 'Electronegativity and ionization potential both increase across a period as nuclear charge increases and atomic size decreases. Thus, a highly electronegative element typically has a high ionization potential.'
      },
      {
        id: 'c1-mcq-3',
        question: 'Across a period (left to right), the non-metallic character of elements:',
        options: [
          'A) Decreases',
          'B) Increases',
          'C) Remains same',
          'D) First increases then decreases'
        ],
        correctAnswer: 'B',
        explanation: 'Across a period, atomic size decreases and nuclear charge increases, making it easier for atoms to attract and gain electrons, which increases their non-metallic character.'
      },
      {
        id: 'c1-mcq-4',
        question: 'Which of the following elements has the highest electron affinity in the periodic table?',
        options: [
          'A) Fluorine',
          'B) Chlorine',
          'C) Bromine',
          'D) Iodine'
        ],
        correctAnswer: 'B',
        explanation: 'Although Fluorine is more electronegative, Chlorine has the highest electron affinity in the periodic table because Fluorine is exceptionally small, which causes high inter-electronic repulsion in its compact outer shell, opposing incoming electrons.'
      },
      {
        id: 'c1-mcq-5',
        question: 'In the modern periodic table, elements are arranged in the increasing order of their:',
        options: [
          'A) Mass number',
          'B) Atomic number',
          'C) Atomic mass',
          'D) Number of neutrons'
        ],
        correctAnswer: 'B',
        explanation: 'Henry Moseley proved that atomic number (the number of protons in the nucleus) is the fundamental property of an element, which serves as the basis of the modern periodic table.'
      },
      {
        id: 'c1-mcq-6',
        question: 'The elements of Group 17 are collectively known as:',
        options: [
          'A) Alkali metals',
          'B) Alkaline earth metals',
          'C) Halogens',
          'D) Chalcogens'
        ],
        correctAnswer: 'C',
        explanation: 'Group 17 elements (F, Cl, Br, I) react with metals to produce salts, and are therefore named "halogens" (salt-formers).'
      },
      {
        id: 'c1-mcq-7',
        question: 'Moving from left to right across a period, the electron affinity generally:',
        options: [
          'A) Increases',
          'B) Decreases',
          'C) Remains unchanged',
          'D) First decreases then increases'
        ],
        correctAnswer: 'A',
        explanation: 'As nuclear charge increases and atomic radius decreases across a period, the attraction of the nucleus for an incoming electron increases, releasing more energy (higher electron affinity).'
      },
      {
        id: 'c1-mcq-8',
        question: 'Which element has the electronic configuration 2, 8, 8, 2?',
        options: [
          'A) Magnesium',
          'B) Calcium',
          'C) Potassium',
          'D) Barium'
        ],
        correctAnswer: 'B',
        explanation: 'Calcium has an atomic number of 20, which corresponds to the electronic configuration 2, 8, 8, 2.'
      },
      {
        id: 'c1-mcq-9',
        question: 'With reference to the periodic table, which of the following is the strongest reducing agent?',
        options: [
          'A) Fluorine',
          'B) Sodium',
          'C) Lithium',
          'D) Caesium'
        ],
        correctAnswer: 'D',
        explanation: 'Reducing agents react by losing electrons. Down Group 1, atomic size increases and ionization energy decreases, making it easiest for Caesium to lose its valence electron and act as the strongest reducing agent.'
      },
      {
        id: 'c1-mcq-10',
        question: 'The energy released when an electron is added to a neutral gaseous atom is called:',
        options: [
          'A) Ionization energy',
          'B) Electron affinity',
          'C) Electronegativity',
          'D) Lattice energy'
        ],
        correctAnswer: 'B',
        explanation: 'Electron affinity is defined as the amount of energy released when an electron is added to an isolated gaseous atom in its ground state.'
      }
    ],
    shortAnswers: [
      {
        id: 'c1-sa-1',
        question: 'Define Ionization Potential (IP). State how it varies across a period from left to right.',
        modelAnswer: 'Ionization Potential is the minimum energy required to remove the most loosely bound electron from an isolated, neutral gaseous atom in its ground state to form a positively charged univalent cation.\n\nAcross a period (left to right), Ionization Potential increases because the atomic size decreases and the nuclear charge increases. This increases the force of attraction between the nucleus and the valence electrons, requiring more energy to remove an electron.'
      },
      {
        id: 'c1-sa-2',
        question: 'Explain why the electron affinity of Fluorine is less than that of Chlorine.',
        modelAnswer: 'Fluorine has an extremely small atomic size compared to Chlorine. Due to this small size, the electron density in Fluorine\'s valence shell is very high, leading to significant inter-electronic repulsion.\n\nThis strong repulsion opposes the addition of an incoming electron. Consequently, the net energy released during electron addition (electron affinity) is less for Fluorine than for Chlorine.'
      },
      {
        id: 'c1-sa-3',
        question: 'Explain why inert gases have zero electron affinity.',
        modelAnswer: 'Inert gases (Group 18 elements like He, Ne, Ar) have completely filled, stable electronic configurations (duplet for Helium, octet for others).\n\nSince their shells are already completely stable and full, they have no chemical affinity to accept any additional electrons. Therefore, no energy is released, resulting in an electron affinity of zero.'
      },
      {
        id: 'c1-sa-4',
        question: 'Arrange the following elements in increasing order of their atomic size, and justify your answer: Na, Mg, K.',
        modelAnswer: 'Increasing order of atomic size: Mg < Na < K\n\nJustification:\n1. Across Period 3, atomic size decreases from left to right due to increased nuclear charge pulling the electron shells closer. Therefore, Mg (atomic number 12) is smaller than Na (atomic number 11).\n2. Down Group 1, atomic size increases because a new electron shell is added. Therefore, K (Period 4) is larger than Na (Period 3).'
      },
      {
        id: 'c1-sa-5',
        question: 'State three key characteristics of the Modern Periodic Table.',
        modelAnswer: 'The three key characteristics are:\n1. Arrangement: Elements are arranged in the increasing order of their atomic numbers, resolving several defects of Mendeleev\'s table.\n2. Periods: There are 7 horizontal rows called periods. The period number represents the total number of electron shells in the atoms of those elements.\n3. Groups: There are 18 vertical columns called groups. Elements in the same group share the same number of valence electrons (for representative elements), resulting in similar chemical properties.'
      },
      {
        id: 'c1-sa-6',
        question: 'What is Electronegativity? Name the element with the highest electronegativity value in the periodic table.',
        modelAnswer: 'Electronegativity is the relative tendency of an atom in a chemically bonded molecule to attract the shared pair of electrons towards itself.\n\nFluorine (F) has the highest electronegativity value in the periodic table, rated at 4.0 on the Pauling scale.'
      },
      {
        id: 'c1-sa-7',
        question: 'Why do alkali metals behave as strong reducing agents?',
        modelAnswer: 'Alkali metals (Group 1 elements) have large atomic sizes and very low ionization potentials. This means they have a very strong tendency to lose their single valence electron to achieve a stable octet configuration.\n\nSince they lose electrons extremely easily (oxidation), they act as highly effective electron donors, behaving as strong reducing agents.'
      },
      {
        id: 'c1-sa-8',
        question: 'How does metallic character change (a) down a group, and (b) across a period? Explain why.',
        modelAnswer: '(a) Down a group: Metallic character increases because atomic size increases, which weakens the nuclear pull on valence electrons, allowing them to be lost more easily.\n\n(b) Across a period: Metallic character decreases because nuclear charge increases and atomic size decreases. This increases the nuclear hold on valence electrons, making them much harder to lose.'
      },
      {
        id: 'c1-sa-9',
        question: 'Explain why the atomic size of Noble Gases (Group 18) is larger than Halogens (Group 17) of the same period.',
        modelAnswer: 'Noble gases have completely filled outer electron shells. This complete filling leads to maximum inter-electronic repulsion, which causes the electron cloud to expand slightly.\n\nAdditionally, because noble gases do not form covalent bonds under normal conditions, their size is measured using the van der Waals radius, which is inherently larger than the covalent radius measured for halogens.'
      },
      {
        id: 'c1-sa-10',
        question: 'What are Transition Elements? State where they are placed in the modern periodic table.',
        modelAnswer: 'Transition elements are elements that have partially filled d-subshells (or d-orbitals) in their neutral state or in their common oxidation states. They typically show variable valencies, form colored compounds, and act as catalysts.\n\nThey are placed in the middle d-block of the modern periodic table, extending from Group 3 to Group 12.'
      }
    ],
    freeResponses: [
      {
        id: 'c1-fr-1',
        question: 'An element X has an atomic number of 17.\n(a) Write its electronic configuration and state its group and period.\n(b) Will it form a cation or an anion? Write the corresponding equation.\n(c) Compare its electronegativity and atomic radius with element Y (atomic number 15) in the same period, giving reasons.',
        modelAnswer: '(a) Electronic Configuration of X (Z=17): 2, 8, 7.\n- Group: Group 17 (since it has 7 valence electrons).\n- Period: Period 3 (since it has 3 electron shells).\n\n(b) X will form an anion (Cl⁻) because it needs 1 electron to complete its stable octet.\n- Equation: X + e⁻ ➔ X⁻ + energy\n\n(c) Comparison with Y (Z=15, configuration 2, 8, 5):\n- Atomic Radius: X has a smaller atomic radius than Y. Reasoning: Across Period 3, from Y to X, nuclear charge increases (more protons in the nucleus) while electrons are added to the same third shell. This stronger nuclear pull contracts the shell, making X smaller.\n- Electronegativity: X has a higher electronegativity than Y. Reasoning: Because X has a smaller atomic size and a higher nuclear charge than Y, its nucleus exerts a much stronger attraction on shared bonding pairs of electrons.'
      },
      {
        id: 'c1-fr-2',
        question: 'Study the periodic properties of elements and answer the following:\n(a) State the basic differences between electron affinity and electronegativity.\n(b) Why does electronegativity decrease down a group?\n(c) Identify the groups in the periodic table that contain elements representing: (i) strong reducing agents, (ii) strong oxidizing agents, (iii) chemically unreactive elements.',
        modelAnswer: '(a) Differences:\n1. Definition: Electron affinity is a quantitative measurement representing the energy released when an isolated, neutral gaseous atom gains an electron. Electronegativity is a qualitative, relative property representing the tendency of an atom in a bonded molecule to attract shared electron pairs.\n2. State: Electron affinity applies to isolated individual gaseous atoms, whereas electronegativity applies to bonded atoms within a molecule.\n3. Units: Electron affinity is measured in eV/atom or kJ/mol, while electronegativity is a dimensionless scale (Pauling scale).\n\n(b) Electronegativity decreases down a group because:\n1. Atomic radius increases as new shells are added.\n2. The shielding effect of inner-shell electrons increases.\nThese factors increase the distance between the positive nucleus and the shared bonding pair of electrons, weakening the nuclear attraction and decreasing electronegativity.\n\n(c) Group Identification:\n- (i) Strong reducing agents: Group 1 (Alkali metals).\n- (ii) Strong oxidizing agents: Group 17 (Halogens).\n- (iii) Chemically unreactive elements: Group 18 (Noble/Inert gases).'
      },
      {
        id: 'c1-fr-3',
        question: 'Analyze the properties of Group 17 (Halogens) and answer the following:\n(a) Name the halogens in order of their increasing atomic mass.\n(b) Describe the physical state and color of the first three halogens at room temperature.\n(c) Discuss how their oxidizing power and electronegativity vary down the group, providing scientific reasoning.',
        modelAnswer: '(a) Halogens in increasing order of atomic mass: Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I).\n\n(b) Physical state and color at room temperature:\n1. Fluorine (F₂): Pale yellow gas.\n2. Chlorine (Cl₂): Greenish-yellow gas.\n3. Bromine (Br₂): Reddish-brown volatile liquid.\n\n(c) Trends and Reasoning:\n- Oxidizing Power decreases down the group. Oxidizing agents act by attracting and gaining electrons. Down Group 17, atomic size increases and shielding increases, weakening the positive nucleus\'s pull on incoming electrons. Therefore, Fluorine gains electrons easiest (strongest oxidizing power), while Iodine gains them with difficulty.\n- Electronegativity decreases down the group. As the atomic size increases, the valence shell containing bonding pairs is pushed further away from the nucleus, and inner shells shield the nuclear charge, reducing the atom\'s pull on shared electron pairs.'
      },
      {
        id: 'c1-fr-4',
        question: 'Provide a comprehensive analysis of Atomic Radius as a periodic property:\n(a) Define atomic radius. Why is it difficult to measure the exact atomic radius of an isolated atom?\n(b) Detail how it varies: (i) across a period, and (ii) down a group, explaining the underlying nuclear and shielding factors.\n(c) Quantitatively relate atomic radius to first ionization energy.',
        modelAnswer: '(a) Atomic radius is defined as half the distance between the nuclei of two identical, covalently bonded atoms of an element. It is extremely difficult to measure the exact radius of an isolated atom because an atom does not have a sharp, well-defined physical boundary; its electron probability cloud density theoretically approaches zero only at infinity.\n\n(b) Variations:\n- (i) Across a period: Atomic radius decreases from left to right. This is because nuclear charge (number of protons) increases steadily, while electrons are added to the same outermost shell. This increases the effective nuclear charge, pulling the electron cloud closer to the nucleus.\n- (ii) Down a group: Atomic radius increases. Although nuclear charge increases down a group, a new electron shell is added at each step. This adds significant physical size and increases the inner-shell shielding effect, which completely overrides the increased nuclear pull.\n\n(c) Relationship: Atomic radius is inversely proportional to first ionization energy. As the atomic size increases, valence electrons are located further from the positive nucleus. The electrostatic force of attraction holding these valence electrons decreases exponentially, requiring significantly less energy to remove them (lower ionization energy).'
      },
      {
        id: 'c1-fr-5',
        question: 'Explain the term "Periodicity of Properties". Describe the root cause behind this phenomenon and explain the exact role electronic configuration plays in maintaining this periodicity in the modern periodic table.',
        modelAnswer: 'Periodicity of Properties refers to the systematic recurrence of similar chemical and physical properties of elements after definite regular intervals, when elements are arranged in increasing order of their atomic numbers.\n\nRoot Cause of Periodicity:\n- Periodicity is caused directly by the periodic recurrence of similar valence shell electronic configurations (i.e., the same number of outer-shell electrons) in elements.\n- For example, all alkali metals (Li, Na, K, Rb, Cs) have a single electron in their outermost shell (ns¹). Since chemical properties are determined by valence electrons participating in reactions, these elements exhibit highly similar chemical behaviors (such as forming univalent basic oxides and reacting vigorously with water).\n\nRole of Electronic Configuration:\n- The electronic configuration determines both the number of electron shells (which dictates the period number) and the number of valence electrons (which dictates the group number).\n- Across a period, as atomic numbers increase, valence electronic configurations change systematically from ns¹ to ns²np⁶. This drives a gradual, predictable transition from metallic to metalloid to non-metallic properties.\n- Once an outer octet (ns²np⁶) is filled in a noble gas, the next electron must enter a new, higher energy shell (n+1)s¹ in the next period, resetting the outer electron count to 1 and initiating the same chemical trends again.'
      },
      {
        id: 'c1-fr-6',
        question: 'Write a comprehensive review of the Group 2 elements (Alkaline Earth Metals):\n(a) State their exact position, outer configuration, and chemical valency.\n(b) Compare their reactivity with oxygen, water, and dilute acids to that of Group 1 elements.\n(c) Describe the trend in the solubility and thermal stability of their hydroxides down the group.',
        modelAnswer: '(a) Position: Group 2 elements are located in the s-block of the modern periodic table.\n- Outer Configuration: ns² (2 valence electrons).\n- Chemical Valency: +2 (they lose 2 valence electrons to form stable divalent M²⁺ cations).\n\n(b) Reactivity Comparison with Group 1:\n- Oxygen: Group 2 metals burn in oxygen to form basic oxides (MO), but their reaction is less vigorous than Group 1 metals, which form oxides, peroxides, or superoxides spontaneously at room temperature.\n- Water: Group 2 elements react much slower than Group 1. Calcium reacts slowly with cold water, Magnesium reacts only with boiling water or steam, whereas Group 1 metals like Sodium and Potassium react explosively with cold water.\n- Dilute Acids: They react vigorously with dilute acids (such as HCl) to produce metal chlorides and release hydrogen gas, but the reactions are less violent than those of Group 1.\n\n(c) Hydroxide Trends down Group 2:\n- Solubility: The solubility of Group 2 hydroxides [M(OH)₂] in water increases down the group. Mg(OH)₂ is sparingly soluble, while Ba(OH)₂ is highly soluble and behaves as a strong alkali.\n- Thermal Stability: The thermal stability of their hydroxides increases down the group because the metal ion size increases, reducing its charge density and polarizing power, which makes the O-H bonds in hydroxide ions harder to decompose under heat.'
      },
      {
        id: 'c1-fr-7',
        question: 'Analyze and provide detailed scientific justifications for each of the following observations:\n(a) The second ionization potential of an element is always substantially higher than its first ionization potential.\n(b) Halogens are exceptionally reactive non-metals.\n(c) Chemical reactivity of Group 1 elements increases down the group, while that of Group 17 decreases down the group.',
        modelAnswer: '(a) The first ionization potential removes an electron from a neutral gaseous atom. The second ionization potential removes an electron from a positively charged univalent cation.\n- In a cation, the number of positive protons in the nucleus exceeds the number of negative electrons. This increases the effective nuclear charge, pulling the remaining electrons much closer and binding them more tightly.\n- Overcoming this stronger electrostatic hold requires vastly more energy, making the second ionization potential always higher.\n\n(b) Halogens are highly reactive non-metals because:\n1. They have 7 valence electrons, requiring only 1 electron to achieve a highly stable inert gas octet.\n2. They have very small atomic sizes and exceptionally high effective nuclear charges, giving them the highest electronegativities and electron affinities in their respective periods.\n3. Consequently, they vigorously attract and capture electrons from other substances to achieve octet stability.\n\n(c) Reactivity trends:\n- Group 1 metals react by losing electrons. Down Group 1, atomic size increases and ionization energy decreases, making it easier for valence electrons to be lost, thereby increasing metallic reactivity down the group.\n- Group 17 non-metals react by gaining electrons. Down Group 17, atomic size increases and shielding increases, weakening the nuclear pull on incoming electrons. This decreases electronegativity and electron affinity, reducing non-metallic reactivity down the group.'
      },
      {
        id: 'c1-fr-8',
        question: 'Compare the representative elements of Period 2 and Period 3 with respect to:\n(a) The total number of elements present and the reason for this capacity.\n(b) The systematic change in metallic to non-metallic character across both periods.\n(c) The systematic change in the nature (basic, amphoteric, acidic) of their oxides from left to right.',
        modelAnswer: '(a) Elements present: Both Period 2 and Period 3 contain exactly 8 elements.\n- Reason: The maximum capacity of the outer valence shells is dictated by quantum numbers, where the s and p subshells have a combined maximum capacity of 8 electrons (s²p⁶), representing octet completion in noble gases (Neon and Argon).\n\n(b) Metallic to Non-metallic Character:\n- In both periods, elements on the far left are highly electropositive metals (Li, Na) with 1 valence electron.\n- Moving left to right, metallic character decreases and non-metallic character increases as atomic sizes contract and nuclear charges increase.\n- This creates a transition from metals (Li, Be / Na, Mg, Al) to metalloids (B / Si) to non-metals (C, N, O, F / P, S, Cl) and ends with inert noble gases (Ne / Ar).\n\n(c) Nature of Oxides:\n- Far Left: Highly basic ionic oxides (e.g., Na₂O and MgO, which dissolve in water to form strong alkalis like NaOH and Mg(OH)₂).\n- Middle: Amphoteric covalent oxides (e.g., Al₂O₃, which reacts with both strong acids and strong bases to form salts).\n- Right: Acidic covalent oxides (e.g., SiO₂ is weakly acidic; P₄O₁₀, SO₃, and Cl₂O₇ are highly acidic, dissolving in water to form strong mineral acids like H₃PO₄, H₂SO₄, and HClO₄).'
      },
      {
        id: 'c1-fr-9',
        question: 'Explain the joint influence of shielding effect and nuclear charge on the periodic trends of representative elements:\n(a) Define Nuclear Charge and Screening (Shielding) Effect.\n(b) Evaluate how they combine to determine the Effective Nuclear Charge (Z_eff) down a group and across a period.\n(c) Illustrate this joint influence using the periodic trends of atomic radius and electronegativity.',
        modelAnswer: '(a) Definitions:\n- Nuclear Charge: The total positive charge in the nucleus, determined by the number of protons (atomic number Z).\n- Screening (Shielding) Effect: The electrostatic repulsion exerted by inner-shell electrons that shields the outer valence electrons from the full attractive positive charge of the nucleus.\n\n(b) Combined Influence:\n- Down a group: Both nuclear charge and shielding increase because new electron shells are added. The added inner shells provide substantial shielding that compensates for the additional protons. As a result, the Effective Nuclear Charge (Z_eff) experienced by valence electrons remains relatively constant or decreases slightly.\n- Across a period: Nuclear charge increases as protons are added to the nucleus, but shielding remains relatively constant because electrons are added to the same outermost shell. This leads to a sharp increase in Effective Nuclear Charge (Z_eff).\n\n(c) Illustration:\n- Atomic Radius: Across a period, increasing Z_eff pulls the outer shell closer, decreasing radius. Down a group, the addition of new shells overrides Z_eff, increasing radius.\n- Electronegativity: Across a period, increasing Z_eff attracts shared electron pairs more strongly, increasing electronegativity. Down a group, the physical size expansion and inner shielding distance reduce the nuclear pull on shared electrons, decreasing electronegativity.'
      },
      {
        id: 'c1-fr-10',
        question: 'Trace the historical development of the Periodic Table:\n(a) Detail Dobereiner\'s Triads and Newlands\' Law of Octaves, including their primary scientific contributions and limitations.\n(b) State Mendeleev\'s Periodic Law and explain three major defects of Mendeleev\'s Periodic Table.\n(c) State the Modern Periodic Law and explain how it successfully resolved Mendeleev\'s anomalies.',
        modelAnswer: '(a) Early Historical Classifications:\n- Dobereiner\'s Triads (1817): Grouped elements in threes where the atomic mass of the middle element was the arithmetic mean of the outer two (e.g., Li=7, Na=23, K=39). Contribution: First systematic attempt to group elements by atomic weight. Limitation: Only a few elements fit into triads.\n- Newlands\' Law of Octaves (1866): Arranged elements in increasing atomic mass, where every eighth element had similar properties, resembling musical notes. Contribution: Recognized a repeating periodic nature. Limitation: Failed completely for elements heavier than Calcium.\n\n(b) Mendeleev\'s Periodic Table (1869):\n- Mendeleev\'s Periodic Law: Properties of elements are a periodic function of their atomic masses.\n- Major Defects:\n1. Anomalous Pairs: Placing a heavier element before a lighter one to group them by chemical similarity (e.g., Cobalt Z_mass=58.9 before Nickel Z_mass=58.7, Argon before Potassium).\n2. Position of Isotopes: Since isotopes of an element have different atomic masses, they should occupy separate slots, which was chemically absurd.\n3. Position of Hydrogen: Hydrogen showed properties of both alkali metals (losing 1e⁻) and halogens (gaining 1e⁻), and its position was not fixed.\n\n(c) Modern Periodic Table Resolution:\n- Modern Periodic Law: Properties of elements are a periodic function of their atomic numbers.\n- Resolutions:\n1. Since elements are ordered by atomic number (Z), anomalous pairs vanish. Argon (Z=18) naturally precedes Potassium (Z=19) regardless of atomic mass.\n2. Isotopes have the same atomic number (same Z), so they naturally occupy the exact same slot in the table, resolving the isotope dilemma.\n3. Elements are arranged by electronic configuration, which cleanly grouped hydrogen with alkali metals in Group 1 due to its 1s¹ configuration, although it is treated as a non-metal.'
      }
    ]
  },
  'c-2': {
    mcqs: [
      {
        id: 'c2-mcq-1',
        question: 'When a metallic atom combines with a non-metallic atom, the bond formed is generally:',
        options: [
          'A) Covalent',
          'B) Coordinate',
          'C) Electrovalent (Ionic)',
          'D) Metallic'
        ],
        correctAnswer: 'C',
        explanation: 'Metals have low ionization energies and lose electrons easily, while non-metals have high electron affinities and gain electrons easily. This results in electron transfer and the formation of an electrovalent (ionic) bond.'
      },
      {
        id: 'c2-mcq-2',
        question: 'Which of the following is NOT a characteristic property of ionic compounds?',
        options: [
          'A) High melting and boiling points',
          'B) Conduction of electricity in solid state',
          'C) High solubility in water',
          'D) Occurrence as crystalline solids'
        ],
        correctAnswer: 'B',
        explanation: 'In the solid state, ions in an ionic compound are locked in fixed positions within a rigid crystal lattice by strong electrostatic forces and cannot migrate. Therefore, they only conduct electricity in molten or aqueous states where ions are free.'
      },
      {
        id: 'c2-mcq-3',
        question: 'Which of the following molecules contains a triple covalent bond?',
        options: [
          'A) Oxygen (O₂)',
          'B) Nitrogen (N₂)',
          'C) Carbon dioxide (CO₂)',
          'D) Water (H₂O)'
        ],
        correctAnswer: 'B',
        explanation: 'A Nitrogen atom (2, 5) has 5 valence electrons and needs 3 electrons to complete its octet. Two Nitrogen atoms mutually share 3 pairs of electrons to form a triple covalent bond (N≡N).'
      },
      {
        id: 'c2-mcq-4',
        question: 'The bond formed by sharing a pair of electrons contributed entirely by one of the combining atoms is called:',
        options: [
          'A) Electrovalent bond',
          'B) Non-polar covalent bond',
          'C) Coordinate (Dative) bond',
          'D) Polar covalent bond'
        ],
        correctAnswer: 'C',
        explanation: 'A coordinate (dative) bond is a special type of covalent bond where the shared pair of electrons is donated by a single atom (the donor) to an electron-deficient atom (the acceptor).'
      },
      {
        id: 'c2-mcq-5',
        question: 'Which of the following contains both covalent and coordinate bonds, but no ionic bond?',
        options: [
          'A) Ammonium chloride (NH₄Cl)',
          'B) Hydronium ion (H₃O⁺)',
          'C) Sodium hydroxide (NaOH)',
          'D) Calcium carbonate (CaCO₃)'
        ],
        correctAnswer: 'B',
        explanation: 'The Hydronium ion (H₃O⁺) is a molecular ion containing two single covalent bonds and one coordinate bond. Ammonium chloride (NH₄Cl) contains ionic, covalent, and coordinate bonds.'
      },
      {
        id: 'c2-mcq-6',
        question: 'A polar covalent compound among the following is:',
        options: [
          'A) Methane (CH₄)',
          'B) Water (H₂O)',
          'C) Carbon tetrachloride (CCl₄)',
          'D) Hydrogen gas (H₂)'
        ],
        correctAnswer: 'B',
        explanation: 'Water (H₂O) is a polar covalent compound because Oxygen is highly electronegative compared to Hydrogen, attracting the shared pairs strongly and creating a net dipole moment.'
      },
      {
        id: 'c2-mcq-7',
        question: 'Which of the following conditions highly favors the formation of an electrovalent bond?',
        options: [
          'A) High ionization potential of the metal',
          'B) High electronegativity difference between atoms',
          'C) Low electron affinity of the non-metal',
          'D) Low lattice energy'
        ],
        correctAnswer: 'B',
        explanation: 'A high electronegativity difference (typically > 1.7) ensures that one atom can completely pull electrons away from the other, resulting in complete electron transfer and ionic bond formation.'
      },
      {
        id: 'c2-mcq-8',
        question: 'Covalent compounds are generally highly soluble in:',
        options: [
          'A) Water',
          'B) Benzene',
          'C) Dilute mineral acids',
          'D) Liquid ammonia'
        ],
        correctAnswer: 'B',
        explanation: 'Covalent compounds are mostly non-polar and follow the solubility principle "like dissolves like." They dissolve readily in non-polar organic solvents like benzene, ether, or toluene.'
      },
      {
        id: 'c2-mcq-9',
        question: 'During the formation of a coordinate bond, the atom that contributes the electron pair for sharing is known as:',
        options: [
          'A) Acceptor',
          'B) Donor',
          'C) Radical',
          'D) Ligand'
        ],
        correctAnswer: 'B',
        explanation: 'The atom possessing a lone pair of electrons that it contributes to the shared bond is called the donor, while the electron-deficient partner is the acceptor.'
      },
      {
        id: 'c2-mcq-10',
        question: 'Carbon tetrachloride (CCl₄) has a dipole moment of zero because:',
        options: [
          'A) It contains ionic bonds',
          'B) It has a completely linear structure',
          'C) It has a highly symmetrical tetrahedral structure',
          'D) Carbon and chlorine have identical electronegativity'
        ],
        correctAnswer: 'C',
        explanation: 'CCl₄ has a highly symmetrical tetrahedral geometry where the four polar C-Cl bond dipoles point in opposite directions, completely canceling each other out to yield a net dipole moment of zero.'
      }
    ],
    shortAnswers: [
      {
        id: 'c2-sa-1',
        question: 'Explain why covalent compounds generally have low melting and boiling points compared to ionic compounds.',
        modelAnswer: 'Covalent compounds consist of molecules held together by weak intermolecular forces (such as van der Waals or dipole-dipole forces). Very little thermal energy is required to overcome these forces and separate the molecules.\n\nIn contrast, ionic compounds consist of positive and negative ions held by strong electrostatic forces throughout a rigid three-dimensional crystal lattice, requiring immense energy to break.'
      },
      {
        id: 'c2-sa-2',
        question: 'Differentiate between a "lone pair" and a "shared pair" of electrons.',
        modelAnswer: '1. Lone Pair: A pair of valence electrons on an atom that does not participate in chemical bonding or sharing with other atoms. It remains localized entirely on that single atom (e.g., the pair on Nitrogen in NH₃).\n\n2. Shared Pair: A pair of valence electrons shared mutually between two combining atoms, forming a covalent bond and helping both atoms achieve stability.'
      },
      {
        id: 'c2-sa-3',
        question: 'Why does an aqueous solution of Sodium Chloride conduct electricity, while a sugar solution does not?',
        modelAnswer: 'Sodium Chloride (NaCl) is an ionic compound. When dissolved in water, the high dielectric constant of water weakens the electrostatic forces holding the lattice. NaCl dissociates into free, mobile Na⁺ and Cl⁻ ions which carry electrical current.\n\nSugar is a covalent compound. It dissolves in water as neutral molecules rather than ions. Since there are no free charged particles (ions) to carry charge, sugar solution is a non-conductor.'
      },
      {
        id: 'c2-sa-4',
        question: 'Draw the Lewis electron-dot structure of a stable Nitrogen (N₂) molecule.',
        modelAnswer: 'A nitrogen atom has 5 valence electrons (configuration 2, 5). To complete its octet, each nitrogen atom shares 3 electrons, forming a stable triple covalent bond.\n\nStructure Representation:\n  :N ≡ N:\n\n(Each nitrogen atom retains one lone pair and shares three pairs, representing a stable triple bond containing 6 shared electrons).'
      },
      {
        id: 'c2-sa-5',
        question: 'What are the three essential conditions for two atoms to form an electrovalent (ionic) bond?',
        modelAnswer: 'The three essential conditions are:\n1. Low Ionization Potential: One atom (usually a metal) must require very little energy to lose its valence electrons.\n2. High Electron Affinity: The other atom (usually a non-metal) must release high energy when gaining electrons.\n3. High Electronegativity Difference: There must be a large difference in electronegativity (greater than 1.7) between the two elements to ensure complete electron transfer.'
      },
      {
        id: 'c2-sa-6',
        question: 'Under what condition does a covalent bond become polar? Provide a suitable example.',
        modelAnswer: 'A covalent bond becomes polar when it is formed between two non-identical non-metal atoms with a significant difference in their electronegativities.\n\nThe more electronegative atom attracts the shared pair of electrons more strongly, acquiring a fractional negative charge (δ⁻), while the other atom acquires a fractional positive charge (δ⁺).\n\nExample: HCl (Hydrogen is δ⁺ and Chlorine is δ⁻).'
      },
      {
        id: 'c2-sa-7',
        question: 'Explain the formation of a coordinate (dative) bond in the Ammonium ion (NH₄⁺).',
        modelAnswer: 'The Ammonia molecule (NH₃) has a central Nitrogen atom with a completely filled octet and one unused lone pair of electrons.\n\nWhen NH₃ encounters an electron-deficient Hydrogen ion (H⁺, which has a vacant K-shell and zero electrons), Nitrogen donates its lone pair of electrons to be shared mutually with H⁺. This forms a coordinate bond (N ➔ H), resulting in the stable Ammonium ion (NH₄⁺).'
      },
      {
        id: 'c2-sa-8',
        question: 'Why is Carbon Tetrachloride (CCl₄) an absolute non-conductor of electricity?',
        modelAnswer: 'Carbon Tetrachloride (CCl₄) is a covalent compound. It consists entirely of neutral, symmetrical molecules held together by weak intermolecular forces.\n\nSince it contains neither free mobile ions (like ionic salts) nor free mobile electrons (like metals) to transport charge, it cannot conduct electricity under any conditions.'
      },
      {
        id: 'c2-sa-9',
        question: 'Compare electrovalent and covalent compounds based on: (a) volatility, (b) solubility, and (c) rate of chemical reaction.',
        modelAnswer: '(a) Volatility: Electrovalent compounds are non-volatile with extremely high boiling points, while covalent compounds are highly volatile with low boiling points.\n\n(b) Solubility: Electrovalent compounds are soluble in polar solvents (like water) but insoluble in organic solvents. Covalent compounds are insoluble in polar water but highly soluble in organic solvents (like benzene).\n\n(c) Rate of Reaction: Electrovalent compounds react instantaneously in solution because reactions involve simple ion combinations. Covalent compounds react slowly because reactions require breaking existing covalent bonds and forming new ones.'
      },
      {
        id: 'c2-sa-10',
        question: 'State why a coordinate bond is also referred to as a "dative" or "semi-polar" bond.',
        modelAnswer: '1. Dative Bond: It is called "dative" (from Latin dare, "to give") because one atom unilaterally gives or donates both electrons for the shared pair.\n\n2. Semi-polar Bond: It is called "semi-polar" because the sharing is unequal. The donor atom transfers a share of its electron density, developing a formal positive charge, while the acceptor atom gains a formal negative charge, creating partial ionic character within a covalent framework.'
      }
    ],
    freeResponses: [
      {
        id: 'c2-fr-1',
        question: 'Conduct an in-depth study of Hydronium Ion (H₃O⁺) formation:\n(a) Identify the molecules/ions involved in its formation.\n(b) State the electronic configuration and number of valence electrons of the central atom before and after bonding.\n(c) Illustrate its formation using a detailed Lewis electron-dot diagram and explain the role of lone pairs.',
        modelAnswer: '(a) Molecules/Ions involved:\n- Water molecule (H₂O), which contains covalent bonds.\n- Hydrogen ion (H⁺), which is a bare proton released by an acid.\n\n(b) Central Oxygen Atom:\n- Before Bonding (Isolated Oxygen): Z=8, electronic configuration is 2, 6 (6 valence electrons).\n- After covalent bonding in water (H₂O): Oxygen shares 2 electrons with two Hydrogen atoms, completing its stable octet (8 valence electrons: 4 shared in bonds, 4 remaining as two lone pairs).\n- In Hydronium Ion (H₃O⁺): Oxygen still maintains 8 valence electrons, but one of its lone pairs is now shared as a coordinate bond with H⁺.\n\n(c) Formation Explanation & Diagram:\nOxygen in water has two lone pairs of electrons. The H⁺ ion has zero electrons and a vacant K-shell. Oxygen donates one of its lone pairs to the vacant shell of H⁺, forming a coordinate covalent bond (dative bond).\n\nLewis Dot Diagram Representation:\n  H - Ö - H  +  H⁺  ➔  [ H - Ö(➔H) - H ]⁺\n\n(The arrow points from Oxygen to the third Hydrogen, indicating that the central Oxygen atom donated both electrons of the shared pair).'
      },
      {
        id: 'c2-fr-2',
        question: 'Compare physical properties and provide scientific justifications based on chemical bonding structures:\n(a) NaCl and HCl are both compounds of Chlorine. Explain why NaCl is a hard crystalline solid at room temperature, while HCl is a volatile gas.\n(b) Explain why ionic compounds exhibit high density and brittleness.\n(c) Discuss why covalent compounds are generally insoluble in water but highly soluble in organic solvents like alcohol or benzene.',
        modelAnswer: '(a) NaCl is an ionic compound formed by complete electron transfer from Sodium to Chlorine. It consists of oppositely charged Na⁺ and Cl⁻ ions bound by extremely strong electrostatic forces of attraction in a rigid, repeating three-dimensional crystal lattice. Immense thermal energy is needed to disrupt this lattice, so it is a solid. HCl is a polar covalent compound consisting of individual neutral molecules. The molecules are held together by relatively weak dipole-dipole intermolecular forces. These forces are easily overcome by ambient thermal energy, making HCl a volatile gas at room temperature.\n\n(b) Properties of Ionic Solids:\n- High Density: Oppositely charged ions are tightly pulled and packed closely together by strong electrostatic forces, reducing empty space and yielding high density.\n- Brittleness: Applying a mechanical force shifts the layers of ions in the crystal. This shifting brings ions of like charges (e.g., positive next to positive, negative next to negative) into close contact. The resulting sudden electrostatic repulsion shatters the crystal, making it brittle.\n\n(c) Solubility:\n- Insoluble in water: Water is highly polar. Covalent compounds are generally non-polar and cannot form strong electrostatic attractions or hydrogen bonds with polar water molecules to break water-water attractions.\n- Soluble in Organic Solvents: Organic solvents (benzene, alcohol, ether) are non-polar or weakly polar. Non-polar covalent solute molecules can easily interact with non-polar solvent molecules through van der Waals forces, allowing them to dissolve easily ("like dissolves like").'
      },
      {
        id: 'c2-fr-3',
        question: 'Chlorine (atomic number 17) and Calcium (atomic number 20) react to form a chemical compound:\n(a) Write down the electronic configurations of both Calcium and Chlorine.\n(b) Describe the electron transfer process that occurs between these atoms to achieve stable octets.\n(c) Write down the chemical formula and illustrate its formation using a detailed Lewis electron-dot structure.',
        modelAnswer: '(a) Electronic Configurations:\n- Calcium (Z = 20): 2, 8, 8, 2 (contains 2 valence electrons in its N-shell).\n- Chlorine (Z = 17): 2, 8, 7 (contains 7 valence electrons in its M-shell).\n\n(b) Electron Transfer Process:\n- Calcium needs to lose 2 valence electrons to attain the stable electronic configuration of Argon (2, 8, 8).\n- Each Chlorine atom needs to gain exactly 1 electron to complete its stable octet configuration (2, 8, 8).\n- Therefore, 1 Calcium atom reacts with 2 Chlorine atoms. Calcium transfers 1 valence electron to each of the two Chlorine atoms, forming 1 Calcium cation (Ca²⁺) and 2 Chloride anions (Cl⁻).\n\n(c) Chemical Formula: CaCl₂ (Calcium Chloride)\n\nLewis Dot structure of formation:\n\n         [   • ]                     [ •• ]\n  :Cl̇• + [ Ca  ] + •̇Cl:  ➔   Ca²⁺ + 2 [ :Cl̈: ]⁻   ➔   CaCl₂\n         [   • ]                     [ •• ]\n\n(Calcium transfers its two dots to the two Chlorine atoms, completing the octets of both chlorine atoms and yielding a stable ionic crystal bond).'
      },
      {
        id: 'c2-fr-4',
        question: 'Compare Methane (CH₄) and Carbon Tetrachloride (CCl₄):\n(a) Identify the type of chemical bonding present in both molecules.\n(b) Explain why both molecules are completely non-polar, despite containing highly polar individual bonds.\n(c) Compare their physical states and boiling points, and explain the difference using intermolecular concepts.',
        modelAnswer: '(a) Bonding Type: Both Methane (CH₄) and Carbon Tetrachloride (CCl₄) contain non-polar covalent molecules with single covalent bonds formed by electron sharing.\n\n(b) Non-Polar Nature: In both CH₄ and CCl₄, the central Carbon atom forms four single covalent bonds directed symmetrically towards the four corners of a regular tetrahedron. Although C-H and C-Cl bonds are polar due to electronegativity differences, the symmetrical tetrahedral shape causes the individual bond dipoles to pull equally in opposite directions. These individual dipole moments cancel each other out completely, leaving the net dipole moment of both molecules as zero.\n\n(c) Physical States & Boiling Points:\n- Methane (CH₄): A highly volatile gas at room temperature with a boiling point of -161.5°C.\n- Carbon Tetrachloride (CCl₄): A volatile liquid at room temperature with a boiling point of 76.7°C.\n- Reasoning: Since both are non-polar, they are held by weak van der Waals dispersion forces. The strength of van der Waals forces is directly proportional to the molecular mass and the size of the electron cloud. CCl₄ has a much larger molecular weight (154 g/mol) than CH₄ (16 g/mol) and a much larger size. This creates significantly stronger van der Waals dispersion forces, requiring much more thermal energy to vaporize CCl₄, resulting in its liquid state and higher boiling point.'
      },
      {
        id: 'c2-fr-5',
        question: 'Review Coordinate Bonding in chemical systems:\n(a) Define a coordinate bond. What are the two essential structural pre-requisites for its formation?\n(b) Illustrate the step-by-step formation of the Ammonium ion (NH₄⁺) from Ammonia (NH₃).\n(c) Ammonium Chloride (NH₄Cl) contains three different types of chemical bonds. Identify these bonds and specify where each is present.',
        modelAnswer: '(a) A coordinate (dative) bond is a special covalent bond in which the shared electron pair is contributed entirely by one of the combining atoms.\n- Pre-requisites:\n1. The donor atom must possess at least one lone pair of electrons (a pair of valence electrons not involved in bonding).\n2. The acceptor atom or ion must be electron-deficient with an empty valence orbital capable of accommodating the shared electron pair.\n\n(b) Formation of NH₄⁺:\n- Step 1: Nitrogen (2, 5) covalently bonds with three Hydrogen atoms in Ammonia (NH₃), achieving an octet but retaining one unshared lone pair of electrons on the Nitrogen atom.\n- Step 2: In the presence of acid, a Hydrogen ion (H⁺, bare proton with zero electrons and a vacant K-shell) approaches.\n- Step 3: Nitrogen donates its lone pair of electrons to the vacant shell of H⁺. Both atoms now share this pair, forming a coordinate covalent bond.\n- Representation: NH₃ + H⁺ ➔ [NH₃ ➔ H]⁺ or NH₄⁺.\n\n(c) Three Bonds in NH₄Cl:\n1. Covalent Bonds: Present between the central Nitrogen atom and three Hydrogen atoms in the ammonia core (formed by mutual electron sharing).\n2. Coordinate Bond: Present between the Nitrogen atom and the fourth Hydrogen ion (formed by Nitrogen donating its lone pair).\n3. Ionic (Electrovalent) Bond: Present between the complex Ammonium cation (NH₄⁺) and the Chloride anion (Cl⁻), held by electrostatic attraction in the salt lattice.'
      },
      {
        id: 'c2-fr-6',
        question: 'Detail the differences between Polar and Non-Polar Covalent Compounds:\n(a) Define a dipole and illustrate using the HCl molecule as an example.\n(b) Contrast three key physical properties of polar and non-polar covalent compounds.\n(c) Explain why liquid water has an exceptionally high boiling point (100°C) compared to Hydrogen Sulfide (H₂S, -60°C).',
        modelAnswer: '(a) A dipole consists of two equal and opposite electrical charges separated by a small distance. In the polar HCl molecule, Chlorine is highly electronegative compared to Hydrogen. It pulls the shared covalent electron pair closer to itself. This unequal sharing creates a fractional negative charge (δ⁻) on Chlorine and a fractional positive charge (δ⁺) on Hydrogen, forming a molecular dipole: H^δ⁺ — Cl^δ⁻.\n\n(b) Property Contrast:\n1. Dielectric Constant: Polar covalent compounds have high dielectric constants, while non-polar compounds have very low dielectric constants.\n2. Intermolecular Forces: Polar compounds are held by stronger dipole-dipole attraction forces, while non-polar compounds are held by weaker van der Waals dispersion forces.\n3. Electrical Conductivity: Polar compounds can dissociate slightly in water to conduct electricity (e.g., HCl in water), whereas non-polar compounds never conduct electricity.\n\n(c) Water vs. Hydrogen Sulfide:\n- Oxygen is extremely small and highly electronegative, creating highly polar O-H bonds in water. This allows water molecules to form extensive, strong intermolecular Hydrogen Bonds.\n- Sulfur is larger and less electronegative, so H₂S has weak polar character and cannot form hydrogen bonds; its molecules are held only by weak dipole-dipole forces.\n- Breaking the strong hydrogen bonds in water requires much more thermal energy, resulting in water\'s high boiling point of 100°C compared to H₂S (-60°C).'
      },
      {
        id: 'c2-fr-7',
        question: 'Apply the Electronic Theory of Valency to explain the following chemical phenomena:\n(a) Why a Helium atom is chemically inert with just 2 valence electrons, while a Neon atom requires 8.\n(b) Why covalent compounds undergo chemical reactions at slower rates compared to ionic compounds.\n(c) Why certain ionic compounds are capable of exhibiting Isomorphism.',
        modelAnswer: '(a) Helium has only one electron shell (the K-shell, n=1). According to quantum rules, the maximum capacity of the K-shell is 2n² = 2(1)² = 2 electrons. Therefore, Helium has a completely filled outer shell (stable duplet), giving it a stable, inert noble gas configuration. Neon has two shells, and its outer L-shell (n=2) has a maximum capacity of 8 electrons (octet). Neon requires 8 electrons to complete its outer shell to achieve the same stable configuration.\n\n(b) Covalent chemical reactions take place between molecules and require breaking strong localized covalent bonds within the reactant molecules and forming new bonds in the product molecules. This bond rearrangement requires significant activation energy and time, making reactions slow.\n- Ionic reactions occur in solution between already dissociated, mobile ions. No bonds need to be broken; oppositely charged ions simply attract each other instantaneously to form precipitates or compounds, making reactions extremely rapid.\n\n(c) Isomorphism is the occurrence of different chemical compounds crystallizing in identical crystal structures. Ionic compounds are composed of positive and negative ions arranged in regular lattices. When two different ionic compounds have identical ratios of cations to anions, and the corresponding ions have similar electronic configurations and ionic sizes (e.g., NaF and MgO), they form identical crystal geometries, exhibiting isomorphism.'
      },
      {
        id: 'c2-fr-8',
        question: 'Investigate the electronic structures and bond formations of:\n(a) Methane (CH₄)\n(b) Carbon Dioxide (CO₂)\n(c) Magnesium Oxide (MgO)\nDetail the valencies, electron sharing or transfer mechanisms, and final molecular structures.',
        modelAnswer: '(a) Methane (CH₄):\n- Bonding: Covalent.\n- Formation: Carbon (2, 4) needs 4 electrons, and Hydrogen (1) needs 1 electron. Carbon mutually shares its 4 valence electrons with 4 different Hydrogen atoms, forming 4 single covalent bonds.\n- Structure: Symmetrical tetrahedral geometry, non-polar.\n\n(b) Carbon Dioxide (CO₂):\n- Bonding: Covalent.\n- Formation: Carbon (2, 4) shares 2 of its valence electrons with one Oxygen atom (2, 6) and the other 2 valence electrons with another Oxygen atom. This forms two stable double covalent bonds.\n- Structure: Symmetrical linear geometry (O = C = O), non-polar.\n\n(c) Magnesium Oxide (MgO):\n- Bonding: Ionic (Electrovalent).\n- Formation: Magnesium (2, 8, 2) has a low ionization energy and transfers its 2 valence electrons completely to Oxygen (2, 6), which has a high electron affinity.\n- Result: Magnesium forms Mg²⁺ (2, 8) and Oxygen forms O²⁻ (2, 8). These oppositely charged ions attract electrostatically to form a rigid ionic solid.\n- Structure: Cubic ionic crystal lattice.'
      },
      {
        id: 'c2-fr-9',
        question: 'Analyze Covalent Bonding in detail:\n(a) State the precise conditions under which covalent bonding is preferred over ionic bonding.\n(b) Differentiate between single, double, and triple covalent bonds using suitable examples from the ICSE syllabus.\n(c) Explain the concept of Covalency and explain why Carbon is strictly tetravalent.',
        modelAnswer: '(a) Covalent bonding is preferred when:\n1. Both combining atoms have high ionization energies (cannot lose electrons easily).\n2. Both atoms have high electron affinities and electronegativities (cannot transfer electrons completely).\n3. The electronegativity difference between the combining elements is small or zero.\n\n(b) Bond Types:\n- Single Covalent Bond: Formed by sharing 1 pair of electrons (e.g., H-Cl or Cl-Cl). Each atom contributes 1 electron.\n- Double Covalent Bond: Formed by sharing 2 pairs of electrons (e.g., O = O or O = C = O). Each atom contributes 2 electrons.\n- Triple Covalent Bond: Formed by sharing 3 pairs of electrons (e.g., N ≡ N). Each atom contributes 3 electrons.\n\n(c) Covalency is defined as the number of shared electron pairs an atom forms with other atoms to complete its valence octet or duplet.\n- Carbon (Z=6) has the configuration 2, 4. With 4 valence electrons, it needs 4 more to achieve a stable octet. It accomplishes this by sharing all 4 of its valence electrons with other atoms, forming 4 covalent bonds. Therefore, Carbon is strictly tetravalent (covalency of 4).'
      },
      {
        id: 'c2-fr-10',
        question: 'Explore the solid-state chemistry of ionic crystals:\n(a) Define a crystal lattice and describe the NaCl lattice structure.\n(b) Why do ionic crystals fracture or shatter under stress, whereas metals undergo plastic deformation (malleability)?\n(c) Explain how the electrostatic attraction force between ions is affected by the solvent\'s dielectric constant, referencing vacuum versus water.',
        modelAnswer: '(a) A crystal lattice is a highly ordered, repeating three-dimensional array of particles (ions, atoms, or molecules) in a solid. In a Sodium Chloride (NaCl) crystal lattice, each Na⁺ cation is symmetrically surrounded by 6 Cl⁻ anions, and each Cl⁻ anion is surrounded by 6 Na⁺ cations, forming a stable face-centered cubic (FCC) electrostatic lattice.\n\n(b) Cleavage & Brittleness: Applying mechanical stress to an ionic crystal causes planes of ions to slide past one another. This sliding displacement shifts ions of identical charges directly adjacent to each other (e.g., Na⁺ adjacent to Na⁺). The resulting massive electrostatic repulsion shatters the crystal structure, causing cleavage. In metals, atoms are held by non-directional metallic bonds in a "sea of mobile electrons," allowing atomic layers to slide smoothly without electrostatic disruption, exhibiting malleability.\n\n(c) Influence of Solvent: According to Coulomb\'s Law, the electrostatic force (F) between ions is inversely proportional to the dielectric constant (k) of the medium: F = (q₁·q₂) / (k·r²).\n- In a vacuum, k = 1, resulting in the maximum possible electrostatic attraction force.\n- In water, k ≈ 80, which reduces the attractive force between the ions by a factor of 80. This significant reduction in force allows water molecules to break the ionic lattice, causing the compound to dissociate into free hydrated ions.'
      }
    ]
  },
  'c-3': {
    mcqs: [
      {
        id: 'c3-mcq-1',
        question: 'Which of the following indicators turns yellow in a basic (alkaline) solution?',
        options: [
          'A) Blue Litmus',
          'B) Phenolphthalein',
          'C) Methyl Orange',
          'D) Red Litmus'
        ],
        correctAnswer: 'C',
        explanation: 'Methyl Orange turns pinkish-red in acidic solutions, remains orange in neutral, and turns yellow in basic (alkaline) solutions.'
      },
      {
        id: 'c3-mcq-2',
        question: 'What is the basicity of Phosphoric Acid (H₃PO₄)?',
        options: [
          'A) 1 (Monobasic)',
          'B) 2 (Dibasic)',
          'C) 3 (Tribasic)',
          'D) 4 (Tetrabasic)'
        ],
        correctAnswer: 'C',
        explanation: 'Phosphoric acid has three replaceable hydrogen atoms per molecule, meaning it ionizes in three steps to yield three hydronium ions, making it tribasic.'
      },
      {
        id: 'c3-mcq-3',
        question: 'Which gas is released when dilute hydrochloric acid reacts with calcium carbonate?',
        options: [
          'A) Hydrogen',
          'B) Carbon Dioxide',
          'C) Sulphur Dioxide',
          'D) Chlorine'
        ],
        correctAnswer: 'B',
        explanation: 'Acids decompose metal carbonates to liberate Carbon Dioxide (CO₂) gas with brisk effervescence.'
      },
      {
        id: 'c3-mcq-4',
        question: 'Which gas turns lime water milky AND turns acidified potassium dichromate solution from orange to green?',
        options: [
          'A) Carbon Dioxide',
          'B) Oxygen',
          'C) Nitrogen Dioxide',
          'D) Sulphur Dioxide'
        ],
        correctAnswer: 'D',
        explanation: 'Both CO₂ and SO₂ turn lime water milky, but only SO₂ reduces orange acidified potassium dichromate to clear green chromium sulphate.'
      },
      {
        id: 'c3-mcq-5',
        question: 'Which of the following salts is classified as an acid salt?',
        options: [
          'A) NaCl',
          'B) NaHSO₄',
          'C) Pb(OH)Cl',
          'D) K₄[Fe(CN)₆]'
        ],
        correctAnswer: 'B',
        explanation: 'Sodium bisulphate (NaHSO₄) contains a replaceable hydrogen atom, formed by the partial neutralization of dibasic sulphuric acid, making it an acid salt.'
      },
      {
        id: 'c3-mcq-6',
        question: 'Which of the following compounds is a soluble base (alkali)?',
        options: [
          'A) Cu(OH)₂',
          'B) Fe(OH)₃',
          'C) NaOH',
          'D) Al(OH)₃'
        ],
        correctAnswer: 'C',
        explanation: 'Sodium Hydroxide (NaOH) is highly soluble in water, making it a strong alkali. Cu(OH)₂, Fe(OH)₃, and Al(OH)₃ are insoluble bases.'
      },
      {
        id: 'c3-mcq-7',
        question: 'Which method is used to prepare the insoluble salt Lead Chloride (PbCl₂)?',
        options: [
          'A) Simple Displacement',
          'B) Titration',
          'C) Direct Combination',
          'D) Double Decomposition (Precipitation)'
        ],
        correctAnswer: 'D',
        explanation: 'Insoluble salts like PbCl₂ are prepared by mixing solutions of two soluble salts (like Lead Nitrate and Sodium Chloride) to trigger a precipitation reaction.'
      },
      {
        id: 'c3-mcq-8',
        question: 'Which of the following substances undergoes deliquescence when exposed to moist air?',
        options: [
          'A) Concentrated Sulphuric Acid',
          'B) Anhydrous Calcium Chloride',
          'C) Ferric Chloride crystals',
          'D) Blue Copper Sulphate'
        ],
        correctAnswer: 'C',
        explanation: 'Ferric chloride (FeCl₃) is deliquescent; it absorbs atmospheric moisture, dissolves in it, and turns into a liquid. CaCl₂ is hygroscopic (absorbs moisture but doesn\'t dissolve).'
      },
      {
        id: 'c3-mcq-9',
        question: 'Concentrated Sulphuric Acid is used to dry gases because of its hygroscopic nature. However, it CANNOT be used to dry which gas?',
        options: [
          'A) Carbon Dioxide',
          'B) Sulphur Dioxide',
          'C) Hydrogen',
          'D) Ammonia'
        ],
        correctAnswer: 'D',
        explanation: 'Ammonia is a basic gas and reacts chemically with acidic Concentrated Sulphuric Acid to form Ammonium Sulphate, rendering it useless as a drying agent.'
      },
      {
        id: 'c3-mcq-10',
        question: 'What is the pH value of a strong acid solution?',
        options: [
          'A) 1 - 2',
          'B) 6 - 7',
          'C) 7 - 8',
          'D) 13 - 14'
        ],
        correctAnswer: 'A',
        explanation: 'Strong acids dissociate completely to release a high concentration of hydronium ions, resulting in a low pH value (1-2). Neutral is 7, and strong bases have a pH of 13-14.'
      }
    ],
    shortAnswers: [
      {
        id: 'c3-sa-1',
        question: 'Define an acid and a base according to the Arrhenius theory, supporting your answer with relevant chemical dissociation equations.',
        modelAnswer: 'According to Arrhenius theory:\n1. An Acid is a hydrogen-containing substance which, when dissolved in water, dissociates to produce hydronium ions (H₃O⁺):\n* HCl + H₂O ⇌ H₃O⁺ + Cl⁻\n2. A Base is a substance which reacts with hydronium ions to form salt and water, or an alkali which dissociates in water to produce hydroxyl ions (OH⁻):\n* NaOH ⎯⎯H₂O⎯⎯→ Na⁺ + OH⁻'
      },
      {
        id: 'c3-sa-2',
        question: 'Differentiate clearly between a strong acid and a concentrated acid with suitable explanations.',
        modelAnswer: '1. Strong Acid refers to the strength of the acid, which is determined by its degree of ionization in water. A strong acid (like HCl or HNO₃) ionizes almost completely in aqueous solution to produce a high concentration of hydronium ions.\n2. Concentrated Acid refers to the concentration of the acid, which is determined by the ratio of acid solute to water solvent. A concentrated acid contains a very high percentage of acid solute and very little water, regardless of whether it is strong or weak.'
      },
      {
        id: 'c3-sa-3',
        question: 'Write balanced chemical equations for the action of dilute hydrochloric acid on:\n(a) Magnesium metal\n(b) Calcium Carbonate\n(c) Sodium Sulphite',
        modelAnswer: '(a) Mg + 2HCl (dil) ⎯→ MgCl₂ + H₂↑\n(b) CaCO₃ + 2HCl (dil) ⎯→ CaCl₂ + H₂O + CO₂↑\n(c) Na₂SO₃ + 2HCl (dil) ⎯→ 2NaCl + H₂O + SO₂↑'
      },
      {
        id: 'c3-sa-4',
        question: 'What is neutralization? Write a balanced chemical equation showing the neutralization of an insoluble metal oxide (base) by a dilute mineral acid.',
        modelAnswer: 'Neutralization is a chemical reaction between an acid and a base to form salt and water only, where hydronium ions (H₃O⁺) from the acid combine with hydroxyl ions (OH⁻) or oxide ions (O²⁻) from the base to form water molecules.\nEquation with insoluble oxide:\n* CuO (black insoluble oxide) + H₂SO₄ (dil) ⎯→ CuSO₄ (soluble blue salt) + H₂O'
      },
      {
        id: 'c3-sa-5',
        question: 'Identify the gas evolved and give a specific identifying chemical test for each when:\n(a) Ammonium chloride is heated with Sodium Hydroxide.\n(b) Dilute Sulphuric acid is added to Iron(II) Sulphide.\n(c) Dilute Nitric acid is added to Potassium Carbonate.',
        modelAnswer: '(a) Gas evolved: Ammonia (NH₃). Test: It has a pungent choking smell and produces dense white fumes of NH₄Cl when a glass rod dipped in conc. HCl is brought near it.\n(b) Gas evolved: Hydrogen Sulphide (H₂S). Test: It has a rotten-egg smell and turns lead acetate paper silvery black (forming PbS).\n(c) Gas evolved: Carbon Dioxide (CO₂). Test: Brisk effervescence occurs; the gas turns lime water milky but has no effect on acidified potassium dichromate.'
      },
      {
        id: 'c3-sa-6',
        question: 'Define the term "basicity" of an acid. Write down the basicity of (a) Nitric Acid (HNO₃), (b) Sulphuric Acid (H₂SO₄), and (c) Phosphoric Acid (H₃PO₄).',
        modelAnswer: 'Basicity is defined as the number of replaceable hydrogen atoms present in one molecule of an acid which can be released as hydronium ions (H₃O⁺) in its aqueous solution.\n(a) Nitric Acid: 1 (Monobasic)\n(b) Sulphuric Acid: 2 (Dibasic)\n(c) Phosphoric Acid: 3 (Tribasic)'
      },
      {
        id: 'c3-sa-7',
        question: 'How would you distinguish between Carbon Dioxide (CO₂) and Sulphur Dioxide (SO₂) gases in a laboratory using chemical indicators?',
        modelAnswer: 'Both CO₂ and SO₂ are acidic, colorless gases that turn moist blue litmus red and turn lime water milky. However, they can be distinguished using acidified potassium dichromate paper or solution:\n1. SO₂ reduces the orange acidified potassium dichromate solution to clear green (due to Cr³⁺ ion formation).\n2. CO₂ has no effect on acidified potassium dichromate solution (remains orange).'
      },
      {
        id: 'c3-sa-8',
        question: 'Define (a) Efflorescence and (b) Deliquescence, and give one distinct example of each with chemical formulas.',
        modelAnswer: '(a) Efflorescence: The phenomenon where a hydrated crystal loses its water of crystallization partially or completely when exposed to dry air, turning into an amorphous powder.\n* Example: Washing soda, Na₂CO₃·10H₂O.\n(b) Deliquescence: The phenomenon where a crystalline solid absorbs moisture from moist air, dissolves in it, and forms a concentrated solution.\n* Example: Anhydrous Calcium Chloride (CaCl₂) or Ferric Chloride (FeCl₃).'
      },
      {
        id: 'c3-sa-9',
        question: 'Write the chemical formulas and common names of Potash Alum and Mohr\'s Salt. Under which specific category of salts do they fall?',
        modelAnswer: '1. Potash Alum: K₂SO₄·Al₂(SO₄)₃·24H₂O\n2. Mohr\'s Salt: FeSO₄·(NH₄)₂SO₄·6H₂O\nBoth salts fall under the category of **Double Salts** because they are formed by combining two simple salts in equimolar proportions, crystallizing them together, and dissociating completely into individual simple ions in water.'
      },
      {
        id: 'c3-sa-10',
        question: 'Why is concentrated sulphuric acid used as a dehydrating agent for sucrose (sugar), but basic Quicklime (CaO) is used as a drying agent for Ammonia gas?',
        modelAnswer: '1. Concentrated Sulphuric Acid is an extremely powerful dehydrating agent. It chemically removes elements of water (H and O in a 2:1 ratio) from sucrose, leaving behind a black spongy mass of carbon (sugar charcoal).\n2. For drying Ammonia gas, H₂SO₄ cannot be used because it is an acid and would react chemically with basic Ammonia to form Ammonium Sulphate salt. Quicklime (CaO) is basic, so it dries Ammonia physically without reacting with it.'
      }
    ],
    freeResponses: [
      {
        id: 'c3-fr-1',
        question: 'Complete Study of Salt Preparation:\nOutline the experimental procedures, reaction types, and balanced chemical equations (with state symbols) for preparing:\n(a) Sodium Chloride (NaCl) using neutralization (titration).\n(b) Zinc Sulphate (ZnSO₄) using simple displacement.\n(c) Lead Chloride (PbCl₂) using double decomposition (precipitation).',
        modelAnswer: '(a) Preparation of Sodium Chloride (NaCl) by Titration:\n- Reaction Type: Neutralization of a soluble base (alkali) by a soluble acid.\n- Procedure: Add a measured volume of Sodium Hydroxide (NaOH) to a conical flask with a phenolphthalein indicator. Slowly add dilute Hydrochloric Acid (HCl) from a burette until the pink color just disappears (endpoint). Heat the resulting neutral solution to evaporate water, yielding white sodium chloride crystals.\n- Equation: NaOH (aq) + HCl (aq) ⎯→ NaCl (aq) + H₂O (l)\n\n(b) Preparation of Zinc Sulphate (ZnSO₄) by Simple Displacement:\n- Reaction Type: Simple displacement of hydrogen from an acid by an active metal.\n- Procedure: Add granulated Zinc metal to dilute Sulphuric Acid. Brisk effervescence of Hydrogen gas occurs. Keep adding Zinc until no more dissolves (ensuring all acid is consumed). Filter the excess zinc. Heat the filtrate to crystallize hydrated Zinc Sulphate (ZnSO₄·7H₂O).\n- Equation: Zn (s) + H₂SO₄ (dil) ⎯→ ZnSO₄ (aq) + H₂ (g)↑\n\n(c) Preparation of Lead Chloride (PbCl₂) by Double Decomposition:\n- Reaction Type: Precipitation of an insoluble salt from two soluble reactants.\n- Procedure: Mix equal volumes of soluble Lead Nitrate [Pb(NO₃)₂] solution and soluble Sodium Chloride (NaCl) solution. A thick white precipitate of Lead Chloride immediately forms. Filter the precipitate, wash it thoroughly with cold water to remove soluble sodium nitrate, and dry it.\n- Equation: Pb(NO₃)₂ (aq) + 2NaCl (aq) ⎯→ PbCl₂ (s)↓ + 2NaNO₃ (aq)'
      },
      {
        id: 'c3-fr-2',
        question: 'Detailed Analysis of Indicators and pH:\n(a) Define the term pH. What does a pH of 2, 7, and 13 indicate about a solution?\n(b) Create a structured table showing the color changes of Litmus, Phenolphthalein, and Methyl Orange in Acidic, Neutral, and Basic solutions.\n(c) Explain the concept of a Universal Indicator and why it is superior to single chemical indicators in diagnostic chemistry.',
        modelAnswer: '(a) pH definition: pH is defined as the negative logarithm (to the base 10) of the hydrogen ion (or hydronium ion) concentration in a solution: pH = -log₁₀[H⁺].\n- pH = 2: Represents a strongly acidic solution with a high concentration of hydronium ions.\n- pH = 7: Represents a neutral solution (like pure water) where [H⁺] = [OH⁻].\n- pH = 13: Represents a strongly alkaline solution with a high concentration of hydroxyl ions.\n\n(b) Indicator Color Change Table:\n\n| Indicator | Acidic Medium | Neutral Medium | Basic Medium |\n| :--- | :--- | :--- | :--- |\n| Litmus | Red | Purple | Blue |\n| Phenolphthalein | Colorless | Colorless | Pink |\n| Methyl Orange | Pinkish-red | Orange | Yellow |\n\n(c) Universal Indicator:\nA Universal Indicator is a mixture of several organic dye indicators that exhibits a continuous smooth spectrum of different colors over a wide range of pH values (from 1 to 14).\n- Why it is superior: Simple indicators like litmus only tell whether a solution is acidic or basic (binary information). They cannot tell how strong or weak the acid/base is. Universal indicator displays a specific color (e.g. red for strong acid, yellow for weak acid, green for neutral, blue for weak alkali, violet for strong alkali) which corresponds directly to a precise pH value, making it extremely useful in diagnostic and soil analysis.'
      },
      {
        id: 'c3-fr-3',
        question: 'Reaction of Heavy Metal Salt Solutions with Soluble Alkalis:\n(a) Detail the chemical precipitation reactions (colors of precipitates and balanced equations) when dilute Sodium Hydroxide (NaOH) is added in small amounts and then in excess to solutions of Copper Sulphate, Iron(II) Sulphate, and Zinc Sulphate.\n(b) Contrast this with the action of Ammonium Hydroxide (NH₄OH) added in small amounts and then in excess to Copper Sulphate solution, explaining the coordinate complex formed.',
        modelAnswer: '(a) Precipitation with Sodium Hydroxide (NaOH):\n1. Copper Sulphate (CuSO₄):\n- Small amount: Forms a pale blue precipitate of Copper Hydroxide.\n  * CuSO₄ + 2NaOH ⎯→ Cu(OH)₂↓ (pale blue) + Na₂SO₄\n- In excess: The pale blue precipitate remains completely insoluble.\n2. Iron(II) Sulphate (FeSO₄):\n- Small amount: Forms a dirty green precipitate of Ferrous Hydroxide.\n  * FeSO₄ + 2NaOH ⎯→ Fe(OH)₂↓ (dirty green) + Na₂SO₄\n- In excess: The dirty green precipitate remains insoluble.\n3. Zinc Sulphate (ZnSO₄):\n- Small amount: Forms a gelatinous white precipitate of Zinc Hydroxide.\n  * ZnSO₄ + 2NaOH ⎯→ Zn(OH)₂↓ (gelatinous white) + Na₂SO₄\n- In excess: The precipitate dissolves completely to form a clear, colorless solution of soluble Sodium Zincate complex salt because Zn(OH)₂ is amphoteric:\n  * Zn(OH)₂ + 2NaOH (excess) ⎯→ Na₂ZnO₂ (soluble sodium zincate) + 2H₂O\n\n(b) Contrast with Ammonium Hydroxide (NH₄OH) on Copper Sulphate:\n- Small amount: Dilute NH₄OH reacts with CuSO₄ to form a pale blue precipitate of Copper Hydroxide.\n  * CuSO₄ + 2NH₄OH ⎯→ Cu(OH)₂↓ (pale blue) + (NH₄)₂SO₄\n- In excess: Unlike NaOH, the pale blue precipitate dissolves completely in excess NH₄OH to form an intensely deep ink-blue (or Prussian blue) solution. This is due to the formation of a soluble coordinate complex salt, Tetraamminecopper(II) sulphate:\n  * Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₃ (from excess NH₄OH) ⎯→ [Cu(NH₃)₄]SO₄ (soluble complex) + 2H₂O'
      },
      {
        id: 'c3-fr-4',
        question: 'Soluble vs Insoluble substances and hydration behavior:\n(a) Define Water of Crystallization. Name and write chemical formulas for two distinct hydrated salts.\n(b) Explain why blue copper sulphate crystals turn white on heating, and then turn blue again when water is added. Identify whether this is a physical or chemical process.\n(c) Define and contrast efflorescent, deliquescent, and hygroscopic substances with appropriate examples.',
        modelAnswer: '(a) Water of Crystallization is the fixed number of water molecules that chemically combine with a salt during crystallization from its aqueous solution, forming part of its crystalline structure.\n- Examples:\n1. Blue Vitriol (Copper Sulphate Pentahydrate): CuSO₄·5H₂O\n2. Green Vitriol (Ferrous Sulphate Heptahydrate): FeSO₄·7H₂O\n\n(b) Copper Sulphate Thermal Behavior:\n- Heating: Blue crystalline CuSO₄·5H₂O loses its 5 water molecules of crystallization, turning into dirty-white amorphous anhydrous Copper Sulphate:\n  * CuSO₄·5H₂O (blue, crystalline) ⎯⎯Δ⎯⎯→ CuSO₄ (white, amorphous) + 5H₂O↑\n- Hydration: Adding water to the white powder restores the blue color because the copper ions form coordination complexes with water molecules, restoring the crystalline structure.\n- Nature of process: It is a reversible physical/chemical hydration change (reversible chemical bonding of water).\n\n(c) Contrasting Atmospheric Behaviors:\n1. Efflorescent Substances: Crystalline hydrated salts which, when exposed to dry air, lose some or all of their water of crystallization to the atmosphere physically, turning into an amorphous powder.\n   - Example: Washing soda crystals (Na₂CO₃·10H₂O) lose water to become a monohydrate powder Na₂CO₃·H₂O.\n2. Deliquescent Substances: Water-soluble solids which absorb moisture from the humid atmosphere, dissolve in it, and form a concentrated liquid solution.\n   - Example: Anhydrous Ferric Chloride (FeCl₃) or Sodium Hydroxide (NaOH) pellets.\n3. Hygroscopic Substances: Solids or liquids which absorb moisture from the atmosphere without dissolving in it, undergoing liquefaction, or changing their physical state.\n   - Example: Quicklime (CaO), Concentrated Sulphuric Acid (H₂SO₄), or Silica Gel.'
      },
      {
        id: 'c3-fr-5',
        question: 'Basicity and Stepwise Ionization of Polybasic Acids:\n(a) Explain why dilute Sulphuric Acid (H₂SO₄) is classified as a dibasic acid. Show its detailed step-by-step ionization in water.\n(b) Write balanced chemical equations to show how dilute Sulphuric Acid forms both an Acid Salt (Sodium Bisulphate) and a Normal Salt (Sodium Sulphate) when reacted with Sodium Hydroxide under different temperature and concentration conditions.\n(c) Explain why Hydrochloric acid (HCl) can never form acid salts.',
        modelAnswer: '(a) Dilute Sulphuric Acid (H₂SO₄) is dibasic because it contains two replaceable hydrogen atoms per molecule. It ionizes in water in two distinct, sequential steps:\n- Step 1: H₂SO₄ + H₂O ⇌ H₃O⁺ + HSO₄⁻ (Bisulphate ion)\n- Step 2: HSO₄⁻ + H₂O ⇌ H₃O⁺ + SO₄²⁻ (Sulphate ion)\nEach step yields one hydronium ion, making a total of two hydronium ions per molecule.\n\n(b) Salt Formation of H₂SO₄:\n1. Formation of Acid Salt (Sodium Bisulphate): Occurs when there is an insufficient/limited amount of NaOH, or at low temperatures (< 200°C):\n   * H₂SO₄ (dil) + NaOH ⎯⎯<200°C⎯⎯→ NaHSO₄ (acid salt) + H₂O\n2. Formation of Normal Salt (Sodium Sulphate): Occurs when there is an excess of NaOH, or at higher temperatures (> 200°C):\n   * H₂SO₄ (dil) + 2NaOH ⎯⎯>200°C⎯⎯→ Na₂SO₄ (normal salt) + 2H₂O\n\n(c) Hydrochloric Acid (HCl) cannot form acid salts because it is a monobasic acid. It has only one replaceable hydrogen atom per molecule (HCl + H₂O ⎯→ H₃O⁺ + Cl⁻). Since its ionization occurs in a single step and is complete, it can only undergo complete replacement, yielding normal chloride salts (like NaCl) and never partial/acidic salts.'
      },
      {
        id: 'c3-fr-6',
        question: 'Amphoteric Oxides and Hydroxides:\n(a) What are amphoteric oxides? Name two distinct examples from the ICSE Class 10 syllabus.\n(b) Write balanced chemical equations to prove that Zinc Oxide (ZnO) is an amphoteric oxide by showing its reactions with both a strong acid and a strong alkali.\n(c) How can you chemically distinguish Zinc Hydroxide precipitate [Zn(OH)₂] from Lead Hydroxide precipitate [Pb(OH)₂] in the laboratory?',
        modelAnswer: '(a) Amphoteric Oxides are metal oxides which exhibit both acidic and basic characteristics, reacting with both acids and strong alkalis to form salt and water.\n- Examples: Zinc Oxide (ZnO) and Lead Oxide (PbO) [Aluminium Oxide (Al₂O₃) is also amphoteric].\n\n(b) ZnO Reactions:\n1. ZnO behaving as a Base (reacting with Hydrochloric acid):\n   * ZnO (s) + 2HCl (aq) ⎯→ ZnCl₂ (aq) + H₂O (l)\n2. ZnO behaving as an Acid (reacting with strong alkali Sodium Hydroxide):\n   * ZnO (s) + 2NaOH (aq) ⎯⎯Δ⎯⎯→ Na₂ZnO₂ (aq) (Sodium Zincate) + H₂O (l)\n\n(c) Distinguishing Zn(OH)₂ from Pb(OH)₂:\nBoth form white precipitates which dissolve in excess Sodium Hydroxide. To distinguish them, add dilute Ammonium Hydroxide (NH₄OH):\n1. Zinc Hydroxide [Zn(OH)₂] precipitate dissolves completely in excess Ammonium Hydroxide to form a clear, colorless solution of tetraamminezinc(II) sulphate coordinate complex:\n   * Zn(OH)₂ + 4NH₄OH ⎯→ [Zn(NH₃)₄](OH)₂ + 4H₂O\n2. Lead Hydroxide [Pb(OH)₂] precipitate remains completely insoluble in excess Ammonium Hydroxide.'
      },
      {
        id: 'c3-fr-7',
        question: 'Acid-Base Chemistry in Daily Life:\nExplain the scientific principles and chemical equations underlying the following occurrences:\n(a) Indigestion and the action of common antacids (e.g. Milk of Magnesia).\n(b) Treatment of wasp stings (alkaline) versus bee stings (acidic).\n(c) How bacterial fermentation of sugars leads to tooth decay, and how modern toothpastes prevent it.',
        modelAnswer: '(a) Stomach Indigestion & Antacids:\n- Cause: The stomach produces dilute Hydrochloric Acid (HCl) to aid digestion. Overeating spicy food can cause hyperacidity (excess HCl release), leading to acid reflux and burning pain.\n- Treatment: Antacids are mild, non-corrosive basic compounds. Taking an antacid like Milk of Magnesia [Magnesium Hydroxide, Mg(OH)₂] neutralizes the excess acid to form a neutral salt and water, relieving pain.\n- Equation: Mg(OH)₂ + 2HCl ⎯→ MgCl₂ + 2H₂O\n\n(b) Bee Stings versus Wasp Stings:\n- Bee Sting: The venom of a honeybee is acidic (contains formic acid). Thus, it is treated by applying a mild basic paste like Baking Soda (Sodium Bicarbonate, NaHCO₃) to neutralize the acid and reduce pain.\n- Wasp Sting: The venom of a wasp is alkaline. Therefore, treating it with basic baking soda does not help. Instead, it must be treated with a mild acid like Vinegar (containing dilute acetic acid) or lemon juice to neutralize the basic venom.\n\n(c) Tooth Decay & Toothpaste:\n- Cause: Bacteria in our mouth ferment sugar residues from food particles, producing organic acids. If the pH inside the mouth drops below 5.5, these acids react with the tooth enamel (calcium hydroxyapatite, the hardest substance in the human body), slowly dissolving and decaying it.\n- Prevention: Modern toothpastes are slightly basic (alkaline pH 8-9) and contain sodium fluoride. Brushing neutralizes the residual mouth acids, raises the pH, and forms a strong fluoroapatite layer that resists acid decay.'
      },
      {
        id: 'c3-fr-8',
        question: 'Preparation and Properties of Standard Gases from Acids:\nDescribe the laboratory preparation and specific identification tests (with balanced chemical equations) for gases evolved when dilute Sulphuric Acid (H₂SO₄) reacts with:\n(a) Active Zinc metal\n(b) Sodium Carbonate\n(c) Iron(II) Sulphide',
        modelAnswer: '(a) Reaction with Active Zinc Metal:\n- Gas evolved: Hydrogen (H₂).\n- Equation: Zn (s) + H₂SO₄ (dil) ⎯→ ZnSO₄ (aq) + H₂ (g)↑\n- Identification Test: Hydrogen is a colorless, odorless gas. When a burning wooden splinter is brought near the mouth of the gas jar, the gas burns with a characteristic pale blue flame and a distinct "pop" sound.\n\n(b) Reaction with Sodium Carbonate:\n- Gas evolved: Carbon Dioxide (CO₂).\n- Equation: Na₂CO₃ (s) + H₂SO₄ (dil) ⎯→ Na₂SO₄ (aq) + H₂O (l) + CO₂ (g)↑\n- Identification Test: CO₂ is a colorless, odorless gas that escapes with rapid effervescence. It does not support combustion (extinguishes a burning splinter). When bubbled through clear lime water [Ca(OH)₂], it turns the lime water milky due to insoluble Calcium Carbonate precipitation:\n  * Ca(OH)₂ + CO₂ ⎯→ CaCO₃↓ (white ppt) + H₂O\n\n(c) Reaction with Iron(II) Sulphide:\n- Gas evolved: Hydrogen Sulphide (H₂S).\n- Equation: FeS (s) + H₂SO₄ (dil) ⎯→ FeSO₄ (aq) + H₂S (g)↑\n- Identification Test: H₂S is a colorless gas with an extremely offensive odor resembling rotten eggs. When exposed to a paper dipped in lead acetate solution, it instantly turns the paper a shiny silvery-black color due to the formation of lead sulphide precipitate:\n  * (CH₃COO)₂Pb + H₂S ⎯→ PbS↓ (black) + 2CH₃COOH'
      },
      {
        id: 'c3-fr-9',
        question: 'Detailed Study of Salt Classification:\n(a) Distinguish between a normal salt, an acid salt, and a basic salt. Provide the chemical formula, systematic name, and formation equation of one example for each.\n(b) Define a Double Salt and a Complex Salt. Explain why Potash Alum behaves differently from Potassium Ferrocyanide when dissolved in water.',
        modelAnswer: '(a) Distinguishing Salts:\n1. Normal Salt: Formed by the complete replacement of all replaceable hydrogen ions of an acid by a metal or ammonium ion. It does not contain replaceable H⁺ or OH⁻.\n   - Example: Sodium Sulphate (Na₂SO₄).\n   - Equation: H₂SO₄ + 2NaOH ⎯→ Na₂SO₄ + 2H₂O\n2. Acid Salt: Formed by the partial replacement of replaceable hydrogen ions of a polybasic acid by a metal ion. It contains replaceable hydrogen and reacts as an acid in water.\n   - Example: Sodium Bisulphate (NaHSO₄).\n   - Equation: H₂SO₄ + NaOH ⎯→ NaHSO₄ + H₂O\n3. Basic Salt: Formed by the partial neutralization of a polyacidic base by an acid. It contains replaceable hydroxyl groups.\n   - Example: Basic Lead Chloride [Pb(OH)Cl].\n   - Equation: Pb(OH)₂ + HCl ⎯→ Pb(OH)Cl + H₂O\n\n(b) Double Salt versus Complex Salt:\n- Double Salt: Formed by combining two simple salts in equimolar proportions. It completely dissociates into its constituent simple ions in water and loses its crystalline identity.\n- Complex Salt: Formed by coordinate bonding around a central metal atom. It does not break down into simple ions in water, but dissociates into a simple ion and a stable complex ion.\n- Analysis of Alum versus Potassium Ferrocyanide:\n1. Potash Alum [K₂SO₄·Al₂(SO₄)₃·24H₂O] is a double salt. In water, it dissociates completely to give K⁺, Al³⁺, and SO₄²⁻ ions. It answers qualitative identification tests for both aluminium and sulphate ions.\n2. Potassium Ferrocyanide [K₄[Fe(CN)₆]] is a complex salt. In water, it dissociates into simple K⁺ cations and a stable complex Ferrocyanide anion [[Fe(CN)₆]⁴⁻]. It does not release free Fe²⁺ or CN⁻ ions, so it fails tests for simple iron or cyanide ions.'
      },
      {
        id: 'c3-fr-10',
        question: 'Drying and Dehydrating Behavior of Concentrated Sulphuric Acid:\n(a) Contrast the drying action of concentrated H₂SO₄ on moist gases with its dehydrating action on crystalline Copper Sulphate and Cane Sugar, providing balanced equations where applicable.\n(b) Explain why dilute Sulphuric Acid can never be used as a drying or dehydrating agent in chemical synthesis.',
        modelAnswer: '(a) Drying versus Dehydrating Action:\n1. Drying Action: Concentrated H₂SO₄ is highly hygroscopic. When moist gases (like HCl, CO₂, or H₂) are bubbled through it, it physically absorbs and removes the suspended water vapor/moisture without undergoing any chemical reaction with the gas.\n2. Dehydrating Action on crystalline Copper Sulphate: Concentrated H₂SO₄ chemically breaks the crystal structure of hydrated Copper Sulphate by stripping away its chemically combined water of crystallization, turning the blue crystals into a dirty-white anhydrous powder:\n   * CuSO₄·5H₂O (blue crystals) ⎯⎯Conc. H₂SO₄⎯⎯→ CuSO₄ (white powder) + 5H₂O (absorbed by acid)\n3. Dehydrating Action on Cane Sugar: Concentrated H₂SO₄ is extremely violent with cane sugar (sucrose). It pulls out hydrogen and oxygen as water from the sugar molecules, leaving behind a black, bloated carbon residue known as sugar charcoal:\n   * C₁₂H₂₂O₁₁ ⎯⎯Conc. H₂SO₄⎯⎯→ 12C (black spongy mass) + 11H₂O (absorbed by acid)\n\n(b) Why dilute H₂SO₄ is ineffective:\nDilute Sulphuric acid contains a very high concentration of water. Therefore, its vapor pressure is high and it has no thermodynamic affinity to absorb further water molecules. Since its molecules are already fully hydrated, it cannot act as a drying agent. Dehydration requires breaking strong chemical bonds to strip water, which requires the massive protonation and electrostatic pulling power of concentrated, anhydrous H₂SO₄ molecules, which is completely absent in dilute acid.'
      }
    ]
  },
  'c-4': {
    mcqs: [
      {
        id: 'c4-mcq-1',
        question: 'Which of the following cations forms a pale blue precipitate with Sodium Hydroxide which is insoluble in excess?',
        options: [
          'A) Fe²⁺',
          'B) Cu²⁺',
          'C) Zn²⁺',
          'D) Pb²⁺'
        ],
        correctAnswer: 'B',
        explanation: 'Copper(II) ions react with NaOH to precipitate pale blue Copper Hydroxide [Cu(OH)₂] which is insoluble in excess NaOH.'
      },
      {
        id: 'c4-mcq-2',
        question: 'Which of the following precipitates dissolves in excess Ammonium Hydroxide to form a deep inky-blue solution?',
        options: [
          'A) Zinc Hydroxide',
          'B) Lead Hydroxide',
          'C) Copper Hydroxide',
          'D) Ferric Hydroxide'
        ],
        correctAnswer: 'C',
        explanation: 'Copper Hydroxide [Cu(OH)₂] reacts with excess Ammonium Hydroxide to form the soluble coordination complex Tetraamminecopper(II) sulphate, [Cu(NH₃)₄]SO₄, which is deep inky-blue.'
      },
      {
        id: 'c4-mcq-3',
        question: 'A certain metal salt solution gives a gelatinous white precipitate with NaOH which dissolves in excess. With NH₄OH, it also gives a gelatinous white precipitate that is soluble in excess. The cation present is:',
        options: [
          'A) Calcium (Ca²⁺)',
          'B) Lead (Pb²⁺)',
          'C) Zinc (Zn²⁺)',
          'D) Aluminium (Al³⁺)'
        ],
        correctAnswer: 'C',
        explanation: 'Zinc (Zn²⁺) forms gelatinous white Zn(OH)₂ which is soluble in excess of both NaOH (forming sodium zincate) and NH₄OH (forming tetraamminezinc complex).'
      },
      {
        id: 'c4-mcq-4',
        question: 'Which cation can be identified by a brick-red flame test?',
        options: [
          'A) Sodium (Na⁺)',
          'B) Potassium (K⁺)',
          'C) Calcium (Ca²⁺)',
          'D) Copper (Cu²⁺)'
        ],
        correctAnswer: 'C',
        explanation: 'Calcium ions (Ca²⁺) impart a characteristic brick-red color to a non-luminous flame.'
      },
      {
        id: 'c4-mcq-5',
        question: 'Which gas has a characteristic rotten-egg smell and turns lead acetate paper silvery-black?',
        options: [
          'A) Sulphur Dioxide (SO₂)',
          'B) Hydrogen Sulphide (H₂S)',
          'C) Carbon Dioxide (CO₂)',
          'D) Nitrogen Dioxide (NO₂)'
        ],
        correctAnswer: 'B',
        explanation: 'Hydrogen Sulphide gas (H₂S) has a rotten-egg smell and reacts with lead acetate to form a black precipitate of Lead Sulphide (PbS).'
      },
      {
        id: 'c4-mcq-6',
        question: 'When dilute HCl is added to an unknown salt, a gas with a suffocating smell of burning sulphur is evolved. The gas reduces acidified potassium dichromate from orange to green. The anion is:',
        options: [
          'A) Carbonate (CO₃²⁻)',
          'B) Sulphite (SO₃²⁻)',
          'C) Sulphide (S²⁻)',
          'D) Sulphate (SO₄²⁻)'
        ],
        correctAnswer: 'B',
        explanation: 'Sulphite ions (SO₃²⁻) react with dilute acids to release Sulphur Dioxide (SO₂) gas, which reduces orange potassium dichromate to green chromium sulphate.'
      },
      {
        id: 'c4-mcq-7',
        question: 'Which reagent is used to confirm the presence of Sulphate ions (SO₄²⁻) by producing an insoluble white precipitate?',
        options: [
          'A) Silver Nitrate (AgNO₃)',
          'B) Barium Chloride (BaCl₂)',
          'C) Lead Acetate',
          'D) Fresh Ferrous Sulphate'
        ],
        correctAnswer: 'B',
        explanation: 'Barium Chloride (BaCl₂) reacts with sulphate ions in solution to form a dense white precipitate of Barium Sulphate (BaSO₄) which is insoluble in mineral acids.'
      },
      {
        id: 'c4-mcq-8',
        question: 'Why must Ferrous Sulphate solution be freshly prepared for the Brown Ring test for Nitrate ions?',
        options: [
          'A) It is highly volatile.',
          'B) It absorbs CO₂ from air.',
          'C) It is slowly oxidized by air to Ferric Sulphate.',
          'D) It decomposes into oxide on standing.'
        ],
        correctAnswer: 'C',
        explanation: 'Ferrous sulphate (containing Fe²⁺) is oxidized by atmospheric oxygen to ferric sulphate (containing Fe³⁺), which cannot form the nitroso-ferrous complex required for the brown ring.'
      },
      {
        id: 'c4-mcq-9',
        question: 'Which of the following metals is amphoteric and dissolves in hot concentrated NaOH releasing Hydrogen gas?',
        options: [
          'A) Copper',
          'B) Iron',
          'C) Magnesium',
          'D) Zinc'
        ],
        correctAnswer: 'D',
        explanation: 'Zinc is an amphoteric metal. It reacts with boiling concentrated Sodium Hydroxide to form soluble Sodium Zincate and release Hydrogen gas.'
      },
      {
        id: 'c4-mcq-10',
        question: 'A chalky-white precipitate formed on adding NaOH dropwise to an unknown solution dissolves in excess NaOH. However, when NH₄OH is added, a chalky-white precipitate forms but does NOT dissolve in excess. The cation is:',
        options: [
          'A) Ca²⁺',
          'B) Zn²⁺',
          'C) Pb²⁺',
          'D) Al³⁺'
        ],
        correctAnswer: 'C',
        explanation: 'Lead (Pb²⁺) forms Lead Hydroxide [Pb(OH)₂] which is soluble in excess NaOH (forming sodium plumbite) but insoluble in excess NH₄OH.'
      }
    ],
    shortAnswers: [
      {
        id: 'c4-sa-1',
        question: 'State the observations when Sodium Hydroxide (NaOH) solution is added dropwise and then in excess to a solution of Ferric Chloride (FeCl₃). Write the balanced chemical equation.',
        modelAnswer: 'Observations:\n1. On adding NaOH dropwise, a reddish-brown precipitate of Ferric Hydroxide [Fe(OH)₃] is formed.\n2. In excess NaOH, the reddish-brown precipitate remains completely insoluble.\n\nEquation:\nFeCl₃ (aq) + 3NaOH (aq) ⎯→ Fe(OH)₃ (s)↓ + 3NaCl (aq)'
      },
      {
        id: 'c4-sa-2',
        question: 'How does Ammonium Hydroxide (NH₄OH) help in distinguishing between Zinc and Lead salt solutions in the laboratory?',
        modelAnswer: '1. On adding NH₄OH dropwise to both salt solutions, both form white precipitates (gelatinous white Zinc Hydroxide and chalky white Lead Hydroxide respectively).\n2. When NH₄OH is added in excess, the Zinc Hydroxide precipitate dissolves completely to form a clear, colorless coordination complex solution (tetraamminezinc(II) complex).\n3. The Lead Hydroxide precipitate remains completely insoluble in excess NH₄OH. This distinguishes the two cations.'
      },
      {
        id: 'c4-sa-3',
        question: 'Why does no precipitate form when Ammonium Hydroxide is added to a Calcium salt solution?',
        modelAnswer: 'Ammonium Hydroxide (NH₄OH) is a weak electrolyte and dissociates only partially in water. The concentration of hydroxyl ions (OH⁻) yielded is extremely low, such that the ionic product [Ca²⁺][OH⁻]² does not exceed the solubility product (Ksp) of Calcium Hydroxide. Therefore, no precipitation of Ca(OH)₂ occurs.'
      },
      {
        id: 'c4-sa-4',
        question: 'Write a balanced chemical equation to show the action of boiling concentrated Sodium Hydroxide on Aluminium metal.',
        modelAnswer: 'Boiling concentrated NaOH reacts with amphoteric Aluminium metal to form soluble Sodium Aluminate and liberate Hydrogen gas:\n\n2Al (s) + 2NaOH (aq) + 2H₂O (l) ⎯Δ⎯→ 2NaAlO₂ (aq) + 3H₂ (g)↑'
      },
      {
        id: 'c4-sa-5',
        question: 'Describe how a flame test is performed and state the flame colors for Calcium and Potassium.',
        modelAnswer: 'Procedure: A platinum wire is cleaned by dipping in concentrated Hydrochloric Acid and heating in a non-luminous Bunsen burner flame. The wire is then dipped in concentrated HCl, touched to the unknown salt, and placed back in the non-luminous flame. Chlorides are highly volatile and volatilize to give characteristic emissions.\n- Calcium (Ca²⁺) gives a Brick Red flame.\n- Potassium (K⁺) gives a Lilac/Violet flame.'
      },
      {
        id: 'c4-sa-6',
        question: 'How can you chemically distinguish between Carbonate (CO₃²⁻) and Sulphite (SO₃²⁻) ions when treated with dilute Hydrochloric Acid?',
        modelAnswer: 'Both release colorless gases with acid (CO₂ and SO₂ respectively) which turn lime water milky. However:\n1. Carbon Dioxide (from carbonate) has no odor and has no effect on acidified potassium dichromate.\n2. Sulphur Dioxide (from sulphite) has a suffocating smell of burning sulphur and turns orange acidified potassium dichromate green.'
      },
      {
        id: 'c4-sa-7',
        question: 'State the chemistry and the final observation of the Barium Chloride test for Sulphate ions (SO₄²⁻).',
        modelAnswer: 'When Barium Chloride (BaCl₂) solution is added to an acidified sulphate solution, a dense white precipitate of Barium Sulphate (BaSO₄) is formed. This precipitate is highly stable and remains completely insoluble on adding concentrated mineral acids like HCl or HNO₃:\n\nBaCl₂ (aq) + Na₂SO₄ (aq) ⎯→ BaSO₄ (s)↓ (white) + 2NaCl (aq)'
      },
      {
        id: 'c4-sa-8',
        question: 'What is the "Brown Ring Test" used to identify, and what is the chemical formula of the brown coordinate ring compound?',
        modelAnswer: 'The Brown Ring Test is used to identify Nitrate ions (NO₃⁻) in qualitative analysis. The brown ring forms at the junction of the two liquids and consists of a complex coordinate ion, Nitroso-ferrous sulphate:\n\nFormula: [Fe(H₂O)₅(NO)]SO₄'
      },
      {
        id: 'c4-sa-9',
        question: 'Define an amphoteric oxide and write two balanced equations illustrating the dual nature of Zinc Oxide (ZnO).',
        modelAnswer: 'An amphoteric oxide is a metal oxide that reacts with both acids and bases to produce salt and water.\n\n1. Reacting as a Base with HCl:\nZnO (s) + 2HCl (aq) ⎯→ ZnCl₂ (aq) + H₂O (l)\n\n2. Reacting as an Acid with NaOH:\nZnO (s) + 2NaOH (aq) ⎯Δ⎯→ Na₂ZnO₂ (aq) (Sodium Zincate) + H₂O (l)'
      },
      {
        id: 'c4-sa-10',
        question: 'State three key precautions to take when executing the Brown Ring test in the laboratory.',
        modelAnswer: '1. Use freshly prepared Ferrous Sulphate (FeSO₄) solution so that the Fe²⁺ ions are not oxidized to Fe³⁺.\n2. Add concentrated Sulphuric Acid slowly and carefully down the side of the test tube to prevent mixing and overheating.\n3. Keep the test tube completely cold and still; do not shake or heat, as heat instantly decomposes the unstable brown nitroso complex.'
      }
    ],
    freeResponses: [
      {
        id: 'c4-fr-1',
        question: 'Analyze Cation Identification using Sodium Hydroxide (NaOH):\n(a) Detail the physical appearances (precipitate color) and solubility behaviors in excess NaOH for the following five cations: Ca²⁺, Fe²⁺, Fe³⁺, Cu²⁺, and Zn²⁺.\n(b) Write balanced chemical equations for the precipitation reactions of Fe²⁺ and Zn²⁺.\n(c) Write the chemical formula and systematic name of the soluble complex formed when Zinc precipitate dissolves in excess NaOH.',
        modelAnswer: '(a) Cation Precipitate Colors & Solubility in excess NaOH:\n1. Calcium (Ca²⁺): White precipitate of Ca(OH)₂; insoluble in excess NaOH.\n2. Iron(II) (Fe²⁺): Dirty green precipitate of Fe(OH)₂; insoluble in excess NaOH.\n3. Iron(III) (Fe³⁺): Reddish-brown precipitate of Fe(OH)₃; insoluble in excess NaOH.\n4. Copper(II) (Cu²⁺): Pale blue precipitate of Cu(OH)₂; insoluble in excess NaOH.\n5. Zinc (Zn²⁺): Gelatinous white precipitate of Zn(OH)₂; soluble in excess NaOH to form a clear, colorless solution.\n\n(b) Chemical Equations:\n- Ferrous Precipitation:\n  FeSO₄ (aq) + 2NaOH (aq) ⎯→ Fe(OH)₂ (s)↓ (dirty green) + Na₂SO₄ (aq)\n- Zinc Precipitation:\n  ZnSO₄ (aq) + 2NaOH (aq) ⎯→ Zn(OH)₂ (s)↓ (gelatinous white) + Na₂SO₄ (aq)\n\n(c) Soluble complex formed in excess NaOH:\n- Formula: Na₂ZnO₂ (aq)\n- Systematic Name: Sodium Zincate (a colorless, water-soluble complex salt formed due to the amphoteric nature of zinc hydroxide).'
      },
      {
        id: 'c4-fr-2',
        question: 'Investigate the Coordination Chemistry of Ammonium Hydroxide (NH₄OH):\n(a) Explain why Copper Hydroxide, which is completely insoluble in excess Sodium Hydroxide, dissolves readily in excess Ammonium Hydroxide. Write the step-by-step chemical equations.\n(b) Write the chemical formula and name of the brilliant coordinate complex formed when Copper Hydroxide dissolves in excess NH₄OH.\n(c) Outline the distinctive reactions of Lead (Pb²⁺) with both NaOH and NH₄OH, highlighting how this difference serves as a diagnostic lab identifier.',
        modelAnswer: '(a) Copper Hydroxide [Cu(OH)₂] is basic but non-amphoteric, so it cannot react with strong alkali NaOH. However, Ammonium Hydroxide contains neutral ammonia (NH₃) molecules which acts as a ligand. When excess NH₄OH is added, these NH₃ ligands form coordinate bonds with copper ions, wrapping around Cu²⁺ to form a highly stable and highly soluble coordination cation. This shifts the solubility equilibrium, completely dissolving the precipitate.\nEquations:\n1. Dropwise addition: CuSO₄ + 2NH₄OH ⎯→ Cu(OH)₂↓ (pale blue) + (NH₄)₂SO₄\n2. Excess addition: Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₃ (aq) ⎯→ [Cu(NH₃)₄]SO₄ (aq) + 2H₂O\n\n(b) Coordinate complex:\n- Formula: [Cu(NH₃)₄]SO₄ (or [Cu(NH₃)₄]²⁺ cation)\n- Name: Tetraamminecopper(II) sulphate (which gives an intensely deep inky-blue solution).\n\n(c) Diagnostic distinction for Lead (Pb²⁺):\n- With NaOH: Lead salt forms a chalky white precipitate of Pb(OH)₂ which dissolves in excess NaOH to form soluble Sodium Plumbite (Na₂PbO₂).\n- With NH₄OH: Lead salt forms a chalky white precipitate of Pb(OH)₂ which is completely insoluble in excess NH₄OH because lead cannot form stable amine complex cations. This allows us to distinguish Lead from Zinc, which dissolves in both.'
      },
      {
        id: 'c4-fr-3',
        question: 'Comprehensive Study of Amphoteric Metals and Their Oxides:\n(a) What is meant by the "amphoteric" nature of metal oxides? Contrast this with basic and acidic oxides.\n(b) Write balanced chemical equations showing the dual behavior of Aluminium Oxide (Al₂O₃) with Hydrochloric acid and hot concentrated Potassium Hydroxide.\n(c) Explain the practical chemical reason why strong alkaline detergents or soaps are never used to clean brass or aluminium cooking utensils.',
        modelAnswer: '(a) Amphoteric oxides are metal oxides that react with both acids (behaving as bases) and bases (behaving as acids) to form salt and water. In contrast, basic oxides (like Na₂O or CaO) only react with acids, and acidic oxides (like CO₂ or SO₂) only react with bases.\n\n(b) Aluminium Oxide dual equations:\n- Reaction as a Base with Hydrochloric Acid:\n  Al₂O₃ (s) + 6HCl (aq) ⎯→ 2AlCl₃ (aq) + 3H₂O (l)\n- Reaction as an Acid with boiling Potassium Hydroxide:\n  Al₂O₃ (s) + 2KOH (aq) ⎯Δ⎯→ 2KAlO₂ (aq) (Potassium Aluminate) + H₂O (l)\n\n(c) utensils cleaning hazard:\nBoth brass (an alloy of Copper and Zinc) and Aluminium contain metals that are amphoteric (Zinc and Aluminium). If these utensils are treated with strongly alkaline soaps or detergents containing NaOH/KOH, the alkali actively reacts with the metals. For aluminium, it dissolves the protective Al₂O₃ oxide layer and slowly eats away the underlying metal, releasing flammable hydrogen gas and highly toxic dissolved ions. Similarly, the zinc in brass is leached out, leading to corrosion and structural weakening of the brass utensil.'
      },
      {
        id: 'c4-fr-4',
        question: 'Practical Qualitative Analysis of Unknown Salts (Sequencing Challenge):\nAn unknown salt "X" is subjected to several diagnostic qualitative tests. Observe the sequence and deduce the identity of "X":\n(a) Salt X is a light green solid. On heating dry X in a boiling tube, a gas "Y" with a smell of burning sulphur is evolved which turns acidified potassium dichromate green, and a dark brown residue "Z" is left behind.\n(b) A solution of X in distilled water is prepared. Adding Barium Chloride (BaCl₂) to this solution yields a dense white precipitate which remains insoluble on adding dilute Hydrochloric Acid.\n(c) Adding Sodium Hydroxide dropwise to the solution of X yields a dirty green precipitate which is insoluble in excess.\nDeduce the chemical formulas and names for X, Y, Z, and write balanced equations for reactions (a), (b), and (c).',
        modelAnswer: 'Analysis & Deduction:\n- From observation (c), the cation that forms a dirty green precipitate insoluble in excess NaOH is Fe²⁺ (Iron(II) or Ferrous ion).\n- From observation (b), the anion that forms an insoluble white precipitate with Barium Chloride is Sulphate (SO₄²⁻).\n- Therefore, the unknown salt "X" is Hydrated Ferrous Sulphate (FeSO₄·7H₂O).\n- Heating dry X drives off water of crystallization, and thermal decomposition of anhydrous FeSO₄ releases Sulphur Dioxide gas (Y) along with SO₃, leaving behind a dark brown Ferric Oxide residue (Z).\n\nIdentities:\n- X: Ferrous Sulphate (FeSO₄) or Green Vitriol (FeSO₄·7H₂O)\n- Y: Sulphur Dioxide (SO₂)\n- Z: Iron(III) Oxide / Ferric Oxide (Fe₂O₃)\n\nEquations:\n(a) Thermal decomposition:\n2FeSO₄ (s) ⎯Δ⎯→ Fe₂O₃ (s) (brown Z) + SO₂ (g) (Y)↑ + SO₃ (g)↑\n\n(b) Barium Chloride test:\nFeSO₄ (aq) + BaCl₂ (aq) ⎯→ BaSO₄ (s)↓ (white ppt) + FeCl₂ (aq)\n\n(c) Sodium Hydroxide reaction:\nFeSO₄ (aq) + 2NaOH (aq) ⎯→ Fe(OH)₂ (s)↓ (dirty green ppt) + Na₂SO₄ (aq)'
      },
      {
        id: 'c4-fr-5',
        question: 'The Chemistry and Mechanics of Flame Emission Spectroscopy:\n(a) Explain the thermodynamic and quantum-mechanical mechanism of flame emission in metal cations. Why do we observe a distinct color?\n(b) Why is Platinum wire preferred for flame tests, and why must the wire and salt be treated with concentrated Hydrochloric Acid (HCl) instead of other acids?\n(c) Detail the exact observations when Sodium, Potassium, and Copper are subjected to a flame test, and explain why Calcium cannot be distinguished from Barium using simple yellow glasses.',
        modelAnswer: '(a) Mechanism of Flame Emission:\nWhen a metal salt is introduced into a high-temperature flame, the thermal energy vaporizes the salt and dissociates it into gaseous atoms or ions. The valence electrons of these metal cations absorb specific packets of thermal energy, exciting them from low-energy ground states to unstable, higher-energy excited orbitals. When these excited electrons relax back to their stable ground state, they emit the absorbed energy as electromagnetic radiation of a single, precise wavelength. If this wavelength falls within the visible region (380-750 nm), we perceive it as a distinct flame color.\n\n(b) Platinum wire & Concentrated HCl:\n- Platinum Wire: Platinum is highly inert, has an extremely high melting point, and does not vaporize or impart any color of its own to the flame, preventing contamination.\n- Concentrated HCl: Concentrated HCl reacts with the metal salt to form metal chlorides. Chloride salts are highly volatile compared to nitrates, carbonates, or sulphates. These volatile chlorides vaporize rapidly in the Bunsen flame, yielding a bright, consistent, and easily observable atomic emission.\n\n(c) Observations and Glasses:\n- Sodium (Na⁺) gives a Brilliant Golden Yellow flame (highly persistent and intense).\n- Potassium (K⁺) gives a Lilac / Violet flame.\n- Copper (Cu²⁺) gives a Peacock Green / Greenish-Blue flame.\n- Calcium (Ca²⁺) gives a Brick Red flame, while Barium (Ba²⁺) gives an Apple Green flame. Under yellow or regular glasses, high-intensity emissions from sodium impurities can mask both colors. Viewing through cobalt blue glass filters out yellow light, allowing the faint lilac of Potassium (appearing pinkish-red) or red of Calcium to be seen, preventing diagnostic confusion.'
      },
      {
        id: 'c4-fr-6',
        question: 'Deductive Reasoning Challenge (Multi-Step Salt Investigation):\nAn anhydrous crystalline powder "A" is heated in a dry test tube. A reddish-brown gas "B" and a colorless gas "C" that rekindles a glowing wooden splinter are evolved, leaving behind a yellow residue "D" which fuses with the glass. Residue D is cold-checked and turns white. A solution of salt A in distilled water is divided into three test tubes:\n- Tube 1: Adding Sodium Hydroxide dropwise gives a chalky-white precipitate which is soluble in excess.\n- Tube 2: Adding Ammonium Hydroxide dropwise gives a chalky-white precipitate which is insoluble in excess.\n- Tube 3: Adding Potassium Iodide (KI) solution gives a bright yellow precipitate.\nDeduce the identities of A, B, C, D, and the yellow precipitate. Write balanced chemical equations for all steps.',
        modelAnswer: 'Analysis & Deduction:\n1. The gas "C" which rekindles a glowing splinter is Oxygen (O₂).\n2. The reddish-brown gas "B" evolved on heating is Nitrogen Dioxide (NO₂). This indicates that the salt "A" is a metal nitrate.\n3. The yellow residue "D" when hot, which turns white when cold, is Lead(II) Oxide (PbO).\n4. Tube 1 and 2 observations match the Pb²⁺ cation exactly: Lead Hydroxide [Pb(OH)₂] chalky white precipitate which is soluble in NaOH but insoluble in excess NH₄OH.\n5. Tube 3 reaction of Pb²⁺ with Iodide forms a bright yellow precipitate of Lead Iodide (PbI₂), confirming Lead.\n6. Therefore, powder "A" is Lead Nitrate [Pb(NO₃)₂].\n\nIdentities:\n- A: Lead Nitrate [Pb(NO₃)₂]\n- B: Nitrogen Dioxide (NO₂)\n- C: Oxygen (O₂)\n- D: Lead(II) Oxide (PbO)\n- Yellow Precipitate: Lead Iodide (PbI₂)\n\nEquations:\n1. Thermal decomposition of Lead Nitrate:\n2Pb(NO₃)₂ (s) ⎯Δ⎯→ 2PbO (s) (yellow residue D) + 4NO₂ (g) (brown B)↑ + O₂ (g) (colorless C)↑\n\n2. Tube 1 - Reaction with NaOH:\nPb(NO₃)₂ (aq) + 2NaOH (aq) ⎯→ Pb(OH)₂ (s)↓ (chalky white) + 2NaNO₃ (aq)\nPb(OH)₂ (s) + 2NaOH (excess) ⎯→ Na₂PbO₂ (aq) (soluble Sodium Plumbite) + 2H₂O (l)\n\n3. Tube 3 - Reaction with KI:\nPb(NO₃)₂ (aq) + 2KI (aq) ⎯→ PbI₂ (s)↓ (bright yellow ppt) + 2KNO₃ (aq)'
      },
      {
        id: 'c4-fr-7',
        question: 'Differentiate and Identify Anions by Wet Chemical Tests:\n(a) Contrast the wet tests for Chloride (Cl⁻) and Sulphate (SO₄²⁻) ions using specific silver and barium reagents. Write balanced equations with state symbols.\n(b) Detail the solubility behavior of the resulting Silver Chloride precipitate in Ammonium Hydroxide solution.\n(c) Describe the diagnostic test used to identify Sulphide (S²⁻) anions in the laboratory, including color changes and chemical reactions.',
        modelAnswer: '(a) Wet tests for Chloride versus Sulphate:\n- Chloride (Cl⁻) Test: To the acidified salt solution, add Silver Nitrate (AgNO₃) solution. A curdy white precipitate of Silver Chloride (AgCl) is formed.\n  * AgNO₃ (aq) + NaCl (aq) ⎯→ AgCl (s)↓ (curdy white) + NaNO₃ (aq)\n- Sulphate (SO₄²⁻) Test: To the acidified salt solution, add Barium Chloride (BaCl₂) solution. A dense, heavy white precipitate of Barium Sulphate (BaSO₄) is formed.\n  * BaCl₂ (aq) + Na₂SO₄ (aq) ⎯→ BaSO₄ (s)↓ (dense white) + 2NaCl (aq)\n\n(b) Solubility of AgCl in NH₄OH:\nThe curdy white Silver Chloride precipitate is completely soluble in dilute Ammonium Hydroxide. This is due to the formation of a soluble coordinate complex compound, Diamminesilver(I) chloride:\n* AgCl (s) + 2NH₄OH (aq) ⎯→ [Ag(NH₃)₂]Cl (aq) (colorless solution) + 2H₂O (l)\n\n(c) Detection of Sulphide (S²⁻):\n- Treatment: Treat the solid sulphide salt with dilute Hydrochloric Acid or dilute Sulphuric Acid.\n- Gas Evolved: Hydrogen Sulphide (H₂S) gas is evolved with a highly characteristic, offensive rotten-egg smell.\n- Confirmation: Bring a filter paper dipped in Lead Acetate solution [(CH₃COO)₂Pb] near the mouth of the tube. The paper turns a metallic silvery-black due to the formation of insoluble Lead Sulphide (PbS):\n  * FeS (s) + H₂SO₄ (dil) ⎯→ FeSO₄ (aq) + H₂S (g)↑\n  * (CH₃COO)₂Pb (aq) + H₂S (g) ⎯→ PbS (s)↓ (black) + 2CH₃COOH (aq)'
      },
      {
        id: 'c4-fr-8',
        question: 'Action of Alkalis on Oxides and Hydroxides of Amphoteric Metals:\n(a) Write balanced chemical equations representing the reactions of hot concentrated Sodium Hydroxide with: (i) Zinc Oxide (ZnO) and (ii) Lead(II) Hydroxide [Pb(OH)₂].\n(b) Write balanced equations for the same compounds reacting with dilute Nitric Acid (HNO₃).\n(c) Explain why we classify these compounds as "amphoteric" rather than "basic" or "acidic," and why this represents a bridge in the periodic trends of metallic character.',
        modelAnswer: '(a) Reactions with Sodium Hydroxide (acting as Acid):\n- Zinc Oxide:\n  ZnO (s) + 2NaOH (aq) ⎯Δ⎯→ Na₂ZnO₂ (aq) (Sodium Zincate) + H₂O (l)\n- Lead Hydroxide:\n  Pb(OH)₂ (s) + 2NaOH (aq) ⎯→ Na₂PbO₂ (aq) (Sodium Plumbite) + 2H₂O (l)\n\n(b) Reactions with Nitric Acid (acting as Base):\n- Zinc Oxide:\n  ZnO (s) + 2HNO₃ (aq) ⎯→ Zn(NO₃)₂ (aq) + H₂O (l)\n- Lead Hydroxide:\n  Pb(OH)₂ (s) + 2HNO₃ (aq) ⎯→ Pb(NO₃)₂ (aq) + 2H₂O (l)\n\n(c) Classification and Periodic Trends:\nThese compounds are classified as amphoteric because they possess both acidic and basic properties, neutralizing both strong acids and strong alkalis. In the periodic table, metallic oxides are highly basic (left side, e.g. Na₂O, MgO) because they readily release oxide ions or form hydroxides. Non-metallic oxides are acidic (right side, e.g. SO₂, P₂O₅) because they react with water to form acids. Amphoteric oxides (formed by metalloids or post-transition metals like Al, Zn, Pb located in the border regions) represent a transitional chemical bridge. Their electronegativity and ionic lattice energy are perfectly balanced, allowing them to participate in proton-transfer or coordination chemistry with both highly electropositive and highly electronegative elements.'
      },
      {
        id: 'c4-fr-9',
        question: 'Quantitative vs Qualitative Chemistry & Indentification of Unknown Gases:\n(a) Differentiate clearly between qualitative analysis and quantitative analysis. Under which category does the ICSE Class 10 practical syllabus fall?\n(b) Outline laboratory tests to distinguish between: (i) Sulphur Dioxide (SO₂) gas and Carbon Dioxide (CO₂), and (ii) Hydrogen Sulphide (H₂S) gas and Sulphur Dioxide (SO₂).\n(c) Write chemical equations for the reduction of Potassium Dichromate (K₂Cr₂O₇) by Sulphur Dioxide gas.',
        modelAnswer: '(a) Distinctions:\n- Qualitative Analysis involves identifying the chemical constituents, ions, or functional groups present in an unknown sample (answering "WHAT is present?").\n- Quantitative Analysis involves determining the exact chemical concentration, percentage, or weight of the constituents in a sample (answering "HOW MUCH is present?").\n- ICSE Practical Syllabus: Falls almost entirely under the category of **Qualitative Analysis**, focused on cation/anion dry/wet testing.\n\n(b) Distinguishing Gases:\n- (i) SO₂ versus CO₂:\n  * Indicator: Bubble both into acidified potassium dichromate solution.\n  * Observation: SO₂ turns the orange solution green. CO₂ does not change the orange color (remains orange).\n- (ii) H₂S versus SO₂:\n  * Indicator: Use Lead Acetate paper.\n  * Observation: H₂S turns lead acetate paper black. SO₂ has no effect on lead acetate paper (but reduces potassium dichromate to green).\n\n(c) Potassium Dichromate reduction equation:\nK₂Cr₂O₇ (aq) + H₂SO₄ (aq) + 3SO₂ (g) ⎯→ K₂SO₄ (aq) + Cr₂(SO₄)₃ (aq) (green) + H₂O (l)'
      },
      {
        id: 'c4-fr-10',
        question: 'Practical Lab Diagnostics & Distinguishing Salts:\nWrite down the systematic steps, observations, and equations to chemically distinguish between the following pairs of dry salts using simple chemical tests:\n(a) Copper Sulphate (CuSO₄) and Ferrous Sulphate (FeSO₄).\n(b) Sodium Chloride (NaCl) and Ammonium Chloride (NH₄Cl).\n(c) Zinc Nitrate [Zn(NO₃)₂] and Lead Nitrate [Pb(NO₃)₂].',
        modelAnswer: '(a) Copper Sulphate vs Ferrous Sulphate:\n- Test: Dissolve in distilled water and add Sodium Hydroxide (NaOH) dropwise.\n- Observation:\n  1. Copper Sulphate gives a pale blue precipitate [Cu(OH)₂] which is insoluble in excess NaOH.\n  2. Ferrous Sulphate gives a dirty green precipitate [Fe(OH)₂] which is insoluble in excess NaOH.\n- Equation:\n  * CuSO₄ + 2NaOH ⎯→ Cu(OH)₂↓ + Na₂SO₄\n  * FeSO₄ + 2NaOH ⎯→ Fe(OH)₂↓ + Na₂SO₄\n\n(b) Sodium Chloride vs Ammonium Chloride:\n- Test: Heat the dry salts in separate test tubes with concentrated NaOH.\n- Observation:\n  1. Ammonium Chloride evolves Ammonia (NH₃) gas, which has a pungent smell, turns red litmus paper blue, and gives dense white fumes with a glass rod dipped in HCl.\n  2. Sodium Chloride does not evolve any basic gas; it only imparts a persistent golden yellow color in a flame test, whereas Ammonium Chloride leaves no residue.\n- Equation:\n  * NH₄Cl (s) + NaOH (aq) ⎯Δ⎯→ NaCl (aq) + H₂O (l) + NH₃ (g)↑\n\n(c) Zinc Nitrate vs Lead Nitrate:\n- Test: Prepare salt solutions and add dilute Ammonium Hydroxide (NH₄OH) dropwise and then in excess.\n- Observation:\n  1. Zinc Nitrate forms a gelatinous white precipitate [Zn(OH)₂] which dissolves completely in excess NH₄OH to form a colorless solution.\n  2. Lead Nitrate forms a chalky white precipitate [Pb(OH)₂] which remains insoluble in excess NH₄OH.\n- Equation:\n  * Zn(NO₃)₂ + 2NH₄OH ⎯→ Zn(OH)₂↓ + 2NH₄NO₃\n  * Pb(NO₃)₂ + 2NH₄OH ⎯→ Pb(OH)₂↓ + 2NH₄NO₃'
      }
    ]
  }
};


