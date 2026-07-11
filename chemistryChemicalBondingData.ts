export interface TopicData {
  id: string;
  title: string;
  concept: string;
  explanation: string;
  realLifeExample: string;
  commonMistakes: string;
  icseBoardTip: string;
}

export interface LewisStructureDetail {
  molecule: string;
  stepByStep: string[];
  electronArrangement: string;
  bondFormation: string;
  finalStructure: string; // Text representation or visual representation of the final Lewis structure
  explanation: string;
}

export interface ChemicalBondingChapterData {
  title: string;
  chapterIntro: {
    importance: string;
    whyAtomsFormBonds: string;
    icseImportance: string;
  };
  learningObjectives: string[];
  topics: TopicData[];
  lewisIntro: {
    introduction: string;
    steps: string[];
    rules: string[];
    commonMistakes: string;
    examTips: string;
  };
  lewisExamples: LewisStructureDetail[];
  chapterSummary: string[];
}

export const CHEMICAL_BONDING_CHAPTER_DATA: ChemicalBondingChapterData = {
  title: "Chemical Bonding",
  chapterIntro: {
    importance: "Chemical bonding is the fundamental force that holds the universe together. It explains how individual, isolated elements combine to form the infinite variety of substances we see around us—from the water we drink to the DNA that encodes life itself. Without chemical bonding, the world would be nothing but a chaotic dispersion of 118 individual types of atoms. Understanding bonding is the key to unlocking the physical states, boiling points, conductivity, and chemical reactivities of all matter.",
    whyAtomsFormBonds: "Atoms form chemical bonds to achieve electronic stability. Most isolated atoms have incomplete outermost electron shells, which represent high energy and high instability. By exchanging (losing or gaining) or sharing electrons with other atoms, they attempt to achieve a stable, low-energy electronic configuration similar to that of the nearest inert (noble) gas. In chemistry, stability is synonymous with lower energy, and chemical bonding is the natural mechanism through which atoms shed excess potential energy.",
    icseImportance: "In the ICSE Class 10 Board Examination, 'Chemical Bonding' is one of the highest-yielding chapters. It is a core pillar of the syllabus, bridging the gap between atomic structures and chemical reactions. Board exams heavily test the differences between electrovalent, covalent, and coordinate bonds; the conditions required for their formation; properties of these compounds; and most importantly, drawing precise Lewis electron-dot structures. Mastery of this chapter ensures scoring full marks in multiple compulsory structured questions in Section I and Section II."
  },
  learningObjectives: [
    "Explain the fundamental cause of chemical bonding in terms of energy and electronic configuration.",
    "Define and differentiate between the Octet Rule and the Duplet Rule with suitable examples.",
    "Describe the formation of Electrovalent (Ionic), Covalent, and Coordinate (Dative) bonds.",
    "State the essential conditions required for the formation of ionic, covalent, and coordinate bonds.",
    "Compare the physical and chemical properties of ionic and covalent compounds and justify these differences based on inter-particle forces.",
    "Draw flawless Lewis electron-dot structures for key molecules (H₂, Cl₂, O₂, N₂, HCl, H₂O, NH₃, CH₄, CO₂, CCl₄, H₃O⁺, NH₄⁺) as prescribed by the ICSE syllabus.",
    "Correlate everyday applications of chemical substances to their underlying bonding types."
  ],
  topics: [
    {
      id: "cb-topic-1",
      title: "Why Atoms Form Chemical Bonds",
      concept: "Atoms combine to decrease their potential energy and achieve a stable, minimum-energy state by attaining a completely filled valence shell.",
      explanation: "Except for the noble gases (He, Ne, Ar, Kr, Xe, Rn), atoms of all elements have incomplete outermost shells. This makes them chemically active and unstable. When atoms interact, their valence electrons rearrange to form a stable configuration. During this process, energy is released. The bound state of atoms represents a lower potential energy level than the state of separated atoms. Therefore, chemical bond formation is always an exothermic process that leads to stability.",
      realLifeExample: "Imagine a heavy boulder perched precariously at the peak of a steep hill. It is highly unstable because of its high potential energy. If it rolls down to the valley, it reaches a state of minimum potential energy and maximum stability. Similarly, unstable isolated atoms 'roll down' to a stable, bonded state.",
      commonMistakes: "Students often think atoms form bonds 'willingly' or with conscious intent. Remember, bonding is governed entirely by the laws of physics—specifically, electrostatic forces and the universal drive toward the lowest possible energy state.",
      icseBoardTip: "If asked in the board exam why noble gases do not form chemical bonds under ordinary conditions, your answer must contain the key phrase: 'Because they possess a completely stable, closed-shell electronic configuration (duplet in Helium, octet in others) and therefore have zero chemical affinity.'"
    },
    {
      id: "cb-topic-2",
      title: "The Octet Rule",
      concept: "The principle that atoms tend to gain, lose, or share electrons until they have eight electrons in their outermost (valence) shell.",
      explanation: "Formulated by Gilbert N. Lewis and Walther Kossel, the Octet Rule states that an atom achieves maximum stability when its outermost shell contains eight electrons, mimicking the configuration of stable noble gases like Neon (2, 8) or Argon (2, 8, 8). To reach this 'magic number,' active metals (like Sodium, Group 1) easily lose their excess outer electrons, while non-metals (like Chlorine, Group 17) greedily gain or share electrons. This rule explains the specific valencies and ratios in which elements combine.",
      realLifeExample: "Think of a popular card game where having exactly 8 cards in your hand represents a complete set. Players will discard (lose), pick up (gain), or trade (share) cards with other players until they have exactly 8 cards to win the game.",
      commonMistakes: "Do not assume the Octet Rule is absolute. It has major exceptions (like Hydrogen and Lithium, which follow the Duplet Rule, and transition metals which have expanded octets). However, for the representative elements in the ICSE syllabus (atomic numbers 1–20), the octet rule is highly reliable.",
      icseBoardTip: "When defining the Octet Rule, always state that atoms do this to attain the 'stable electronic configuration of the nearest noble gas.' This precise wording is heavily favored by board examiners."
    },
    {
      id: "cb-topic-3",
      title: "The Duplet Rule",
      concept: "The principle that lighter atoms with a single electron shell achieve chemical stability by having exactly two electrons in that shell.",
      explanation: "Lighter elements like Hydrogen (atomic number 1), Lithium (3), and Beryllium (4) have only the K-shell as their valence shell. The maximum capacity of the K-shell is mathematically limited to 2 electrons (following the 2n² rule, where n=1). Therefore, these elements cannot hold 8 electrons. Instead, they achieve stability by acquiring a stable duplet configuration—mimicking Helium (which has 2 electrons in its single K-shell). For example, Hydrogen shares its single electron with another hydrogen atom to form a stable H₂ molecule containing a shared duplet.",
      realLifeExample: "A small tandem bicycle that is designed to seat exactly two people. It is perfectly balanced and stable with exactly two riders, and trying to load eight riders on it would be impossible.",
      commonMistakes: "Students sometimes apply the octet rule to Hydrogen or Hydride ions (H⁻), expecting them to acquire 8 electrons. Remember, Hydrogen can never accommodate more than 2 electrons because its only active shell is the K-shell.",
      icseBoardTip: "Ensure you can identify elements that follow the duplet rule in short-answer questions. Lithium (Li) achieves stability by losing 1 electron to form Li⁺ (2), while Hydrogen gains or shares 1 electron to form H⁻ (2) or covalent bonds."
    },
    {
      id: "cb-topic-4",
      title: "Valence Electrons",
      concept: "The electrons present in the outermost shell of an atom that participate directly in chemical bonding.",
      explanation: "The inner electrons of an atom are tightly held by the positive nucleus and shielded by outer layers, so they remain completely uninvolved in chemical bonding. Only the electrons in the outermost shell—called the valence shell—can interact with other atoms. The number of valence electrons determines whether an element is a metal (1, 2, or 3 valence electrons, which it tends to lose) or a non-metal (5, 6, or 7 valence electrons, which it tends to gain or share).",
      realLifeExample: "The outer boundary wall of an amusement park. Only the visitors standing directly at the outermost ticket counters can interact with the outside world, while the visitors inside the park are isolated from the entrance.",
      commonMistakes: "Do not confuse valence electrons (total count in the outer shell) with valency (the actual number of electrons gained, lost, or shared). For Oxygen, valence electrons = 6, but valency = 2 (8 - 6 = 2).",
      icseBoardTip: "In Lewis structures, you must draw ONLY the valence electrons of an atom. Never draw the inner shell electrons. Doing so will make your diagrams cluttered and lead to deduction of marks."
    },
    {
      id: "cb-topic-5",
      title: "Noble Gas Configuration",
      concept: "The highly stable electron arrangement of Group 18 elements, characterized by a completely filled outer shell (duplet for Helium, octets for others) that possesses exceptionally low energy.",
      explanation: "Noble gases (He, Ne, Ar, Kr, Xe, Rn) exist almost exclusively as monoatomic gases in nature because their electron shells are completely filled. Helium has 2 electrons, while all other noble gases have 8 electrons in their valence shell. Because their electronic configuration is extremely symmetric and low-energy, they have no urge to gain, lose, or share electrons. They represent the thermodynamic 'ideal' that all other elements seek to achieve through chemical bonding.",
      realLifeExample: "A financially independent person who has zero debt and plenty of savings. They do not need to borrow (gain), lend (lose), or enter into joint business ventures (share) with anyone to remain stable.",
      commonMistakes: "Thinking that noble gases never form compounds. While they do not form compounds in the Class 10 syllabus, heavier noble gases like Xenon can form compounds with highly electronegative elements under extreme conditions. For your syllabus, treat them as completely inert.",
      icseBoardTip: "When asked to write the electronic configuration of a noble gas, remember Helium is 2 (duplet) and Neon is 2, 8. These are often used as benchmarks to explain the ionic structures of Na⁺ (2, 8) and Cl⁻ (2, 8, 8)."
    },
    {
      id: "cb-topic-6",
      title: "Chemical Bond",
      concept: "The attractive force that binds atoms, ions, or molecules together in a chemical species.",
      explanation: "A chemical bond is not a physical link or a wire connecting two spheres. It is purely an electrostatic attractive force. When two atoms approach each other, there are attractive forces between the nucleus of one atom and the electrons of the other, alongside repulsive forces between the two nuclei and the two electron clouds. A chemical bond forms only if the attractive forces outweigh the repulsive forces, pulling the atoms together to a specific, stable bonding distance where potential energy is minimized.",
      realLifeExample: "A powerful magnetic pull between two opposite poles. There is no physical string holding them together, yet they are locked in a strong, cohesive partnership.",
      commonMistakes: "Believing that a chemical bond is a physical structural beam. Always describe it in terms of 'electrostatic forces of attraction.'",
      icseBoardTip: "The syllabus classifies bonding into three main types: Electrovalent (Ionic), Covalent, and Coordinate. Make sure you can write the definition of a chemical bond using the phrase 'force of attraction holding chemical constituents together.'"
    },
    {
      id: "cb-topic-7",
      title: "Electrovalent (Ionic) Bond",
      concept: "A chemical bond formed by the complete transfer of one or more electrons from the valence shell of a metallic atom to the valence shell of a non-metallic atom, resulting in strong electrostatic forces between the oppositely charged ions.",
      explanation: "In an electrovalent bond, a metal atom (which has low ionization energy and easily loses electrons) transfers its valence electron(s) to a non-metal atom (which has high electronegativity and electron affinity). This transfer converts the metal into a positively charged cation and the non-metal into a negatively charged anion. These oppositely charged ions are then locked together by powerful, non-directional electrostatic forces of attraction. An example is NaCl, where Na transfers 1 electron to Cl, forming Na⁺ and Cl⁻.",
      realLifeExample: "A wealthy, generous donor who has a surplus item they want to get rid of, transferring it completely to a needy recipient who desperately wants it. Both parties end up highly satisfied and bonded in a mutual arrangement.",
      commonMistakes: "Students often draw covalent sharing lines for ionic compounds. In NaCl or MgCl₂, there is *no sharing*. It is a complete transfer. Cations and anions must be enclosed in square brackets with their respective charges clearly indicated.",
      icseBoardTip: "State the conditions for ionic bond formation: 1. Low ionization potential of the metal. 2. High electron affinity of the non-metal. 3. Large electronegativity difference between the two elements. High lattice energy also stabilizes the resulting crystal."
    },
    {
      id: "cb-topic-8",
      title: "Covalent Bond",
      concept: "A chemical bond formed by the mutual sharing of one or more pairs of electrons between two non-metallic atoms, allowing both to complete their valence shells.",
      explanation: "When two non-metals combine, neither is willing to give up its electrons because both have high ionization energies. Therefore, they compromise by sharing electrons. If they share one pair of electrons, a Single Covalent Bond forms (e.g., H–H, H–Cl). If they share two pairs, a Double Covalent Bond forms (e.g., O=O). If they share three pairs, a Triple Covalent Bond forms (e.g., N≡N). Covalent bonds can be Polar (unequal sharing due to electronegativity differences, like H₂O or HCl) or Non-polar (equal sharing, like H₂ or O₂).",
      realLifeExample: "Two roommates who both need a refrigerator but cannot afford to buy one alone. They pool their money to purchase one refrigerator, placing it in the common kitchen area so both can share it equally.",
      commonMistakes: "Assuming all covalent compounds share electrons equally. Remember that in polar covalent molecules (like H₂O or HCl), the more electronegative atom pulls the shared pair closer, acquiring a partial negative charge (δ⁻) while the other gets a partial positive charge (δ⁺).",
      icseBoardTip: "Explain why covalent compounds are generally gases or liquids: 'Because the intermolecular forces of attraction (van der Waals forces) between covalent molecules are weak, requiring little thermal energy to overcome, unlike the strong electrostatic forces in ionic crystals.'"
    },
    {
      id: "cb-topic-9",
      title: "Coordinate Bond",
      concept: "A special type of covalent bond in which the shared pair of electrons is contributed entirely by only one of the participating atoms; also known as a Dative Bond.",
      explanation: "For a coordinate bond to form, two essential conditions must be met: 1. One donor atom must possess at least one 'lone pair' of electrons (a pair of valence electrons not involved in any other bonding). 2. The recipient atom or ion must be electron-deficient, needing a pair of electrons to complete its shell. When they combine, the donor shares its lone pair with the recipient. Once formed, a coordinate bond is identical to a covalent bond, but it is represented with an arrow (→) pointing from the donor to the acceptor. Classic ICSE examples include the Hydronium ion (H₃O⁺) and Ammonium ion (NH₄⁺).",
      realLifeExample: "An incredibly wealthy person who pays the entire down-payment for a joint business franchise, but both partners share the profits and run the business together equally.",
      commonMistakes: "Forgetting the arrow symbol! A coordinate bond must be represented by an arrow (→) starting from the donor atom (like Oxygen in H₂O) and pointing to the acceptor ion (like H⁺). Do not use a regular dash.",
      icseBoardTip: "The formation of Hydronium (H₃O⁺) and Ammonium (NH₄⁺) are guaranteed board questions. Ensure you can draw their complete electron-dot diagrams showing the coordinate bond. Identify H₂O and NH₃ as the donors, and H⁺ as the acceptor."
    },
    {
      id: "cb-topic-10",
      title: "Properties of Ionic Compounds",
      concept: "The unique physical behavior of electrovalent compounds resulting from their highly ordered, strong electrostatic crystal lattice structures.",
      explanation: "Because ionic compounds are composed of oppositely charged ions bound by incredibly strong electrostatic forces: 1. They are hard, brittle crystalline solids. 2. They have extremely high melting and boiling points (large amounts of heat are needed to break the lattice). 3. They are highly soluble in polar solvents (like water) but insoluble in non-polar organic solvents (like benzene). 4. They do not conduct electricity in the solid state (ions are locked in fixed positions), but are excellent conductors in molten or aqueous states because the thermal or solvent action frees the ions to migrate.",
      realLifeExample: "Common table salt (NaCl). It is a hard crystal that you cannot melt on a normal kitchen stove. If you dissolve it in water, it conducts electricity perfectly and can light up a bulb in a science experiment.",
      commonMistakes: "Writing that ionic compounds 'conduct electricity in the solid state.' Always specify that solid ionic compounds are insulators, and they only conduct when *molten* or in *aqueous solution*.",
      icseBoardTip: "You may be asked to explain why ionic compounds have high melting points. Your answer must include: 'Due to strong electrostatic forces of attraction between the oppositely charged ions, which require a massive amount of thermal energy to break.'"
    },
    {
      id: "cb-topic-11",
      title: "Properties of Covalent Compounds",
      concept: "The unique physical behavior of covalent molecular compounds resulting from weak intermolecular forces between neutral molecules.",
      explanation: "Unlike ionic compounds, covalent compounds are made of neutral molecules. The forces holding these molecules together are weak van der Waals forces: 1. They are generally gases, volatile liquids, or soft solids. 2. They have low melting and boiling points (very little heat is needed to separate the molecules). 3. They are insoluble in polar solvents like water (unless they are polar and react with water) but highly soluble in organic solvents (like alcohol, ether, toluene). 4. They are non-conductors (insulators) of electricity in all states because they do not contain free ions or mobile electrons.",
      realLifeExample: "Wax or oil. Cooking oil is a liquid at room temperature and candle wax melts easily with a tiny flame. Neither of them conducts electricity or dissolves in a glass of water.",
      commonMistakes: "Assuming all covalent compounds are complete non-conductors. Polar covalent compounds like HCl gas do not conduct electricity, but when dissolved in water, they ionize completely to form H⁺ and Cl⁻ ions and conduct electricity exceptionally well.",
      icseBoardTip: "In comparison questions, remember that 'like dissolves like'. Polar solutes dissolve in polar solvents (water), and non-polar solutes dissolve in non-polar solvents (organic solvents). Covalent compounds are generally non-polar, hence their solubility in benzene or ether."
    },
    {
      id: "cb-topic-12",
      title: "Comparison: Ionic vs. Covalent",
      concept: "A structured comparative analysis highlighting how the mode of bond formation dictates the physical and chemical characteristics of compounds.",
      explanation: "The core difference lies in the nature of the constituent particles and the binding forces. Ionic compounds consist of ions bound by strong electrovalent forces, leading to high density, high melting points, and electrolytic properties. Covalent compounds consist of molecules bound by weak intermolecular forces, leading to low melting points, non-polar characteristics, and molecular reactions. Chemically, ionic reactions are instantaneous ion-exchanges, while covalent reactions are slow molecular rearrangements that require breaking existing bonds and forming new ones.",
      realLifeExample: "A steel skyscraper where structural beams are welded and bolted with incredible strength (representing ionic lattices) versus a temporary tent held together by simple nylon cords and pegs (representing covalent molecules).",
      commonMistakes: "Stating that covalent compounds have weak *intramolecular* bonds. The covalent bonds *inside* the molecule are very strong; it is the *intermolecular* forces (between different molecules) that are weak. Understand this distinction clearly!",
      icseBoardTip: "Expect a direct tabular comparison question in Section I of your board paper. Create a table comparing bonding particles (ions vs. molecules), state (crystalline solids vs. gases/liquids), melting/boiling points (high vs. low), and electrical conductivity (conducts in molten/aq vs. non-conductor)."
    },
    {
      id: "cb-topic-13",
      title: "Applications in Daily Life",
      concept: "Recognizing how the specific properties of ionic and covalent substances are utilized in consumer products, medicine, and industrial manufacturing.",
      explanation: "We interact with chemical bonds constantly. Electrovalent substances like Sodium Fluoride are added to toothpaste to strengthen enamel. Calcium Chloride is used to de-ice frozen winter roads due to its high ionic ionic solubility that lowers the freezing point of water. Covalent substances like Ethanol are utilized in hand sanitizers and fuels because of their volatility and organic solvent power. Plastics (polymers like polyethylene) are enormous networks of covalent carbon chains that are durable and lightweight.",
      realLifeExample: "Washing your hands with soap. Soap molecules have a covalent, non-polar carbon tail that dissolves in grease, and an ionic, polar head that dissolves in water, allowing dirt to be washed away.",
      commonMistakes: "Forgetting that water itself is a polar covalent compound. Its polarity is the reason it acts as the 'universal solvent' of life, dissolving both ionic salts and polar sugars.",
      icseBoardTip: "Be prepared to classify everyday items mentioned in exam problems. For example, glucose (sugar) is covalent and doesn't conduct electricity in water, whereas vinegar (acetic acid) is a weak polar covalent acid that partially ionizes."
    }
  ],
  lewisIntro: {
    introduction: "A Lewis Electron-Dot Structure is a simplified representation of the valence shell electrons in a molecule. Named after G.N. Lewis, these diagrams represent valence electrons as dots or crosses surrounding the chemical symbol of the element. They are the primary visual tool used by chemists to show how atoms share or transfer electrons during chemical bond formation, and are a mandatory component of the ICSE chemistry syllabus.",
    steps: [
      "Find the total number of valence electrons for each atom using their atomic numbers (e.g., H has 1, Cl has 7).",
      "Represent the individual atoms by writing their chemical symbols, surrounded by their valence electrons as dots (•) or crosses (x).",
      "Identify the central atom (usually the least electronegative element, excluding Hydrogen).",
      "Arrange the surrounding atoms around the central atom and place electron pairs between them to represent chemical bonds.",
      "For Ionic Compounds: Draw the electron transfer from the metal to the non-metal. Enclose the resulting ions in square brackets and write their charges as superscripts (e.g., Na⁺ [•Cl•]⁻).",
      "For Covalent Compounds: Arrange the shared pairs between the combining atoms so that each atom completes its octet (or duplet for Hydrogen)."
    ],
    rules: [
      "Only valence electrons must be represented. Inner-shell electrons must NEVER be drawn.",
      "Use different symbols (like dots '•' for one atom and crosses 'x' for the other) to easily distinguish the source of the valence electrons.",
      "The total number of electrons drawn in the final diagram must match the sum of the valence electrons of the starting atoms.",
      "Ensure every hydrogen atom is surrounded by exactly 2 electrons (duplet) and other representative atoms have 8 electrons (octet) in their shared or ionic states."
    ],
    commonMistakes: "Drawing complete circles for electron shells. In Lewis dot structures, you do NOT draw the circular orbits—only the symbols and the dots/crosses. Another common mistake is forgetting to show the charges and brackets on ionic compounds, or drawing shared bonds for ionic substances.",
    examTips: "In ICSE board exams, always use dots (•) for one element and crosses (x) for the other element to get full marks. Label the structures clearly, showing the state 'before combination' with an arrow leading to the state 'after combination'. This dual representation is highly appreciated by board examiners."
  },
  lewisExamples: [
    {
      molecule: "Hydrogen Molecule (H₂)",
      stepByStep: [
        "Each Hydrogen atom (atomic number 1) has 1 valence electron: H• and Hx.",
        "To achieve a stable duplet, each hydrogen atom requires 1 more electron.",
        "They bring their single electrons close together to share them: H • x H.",
        "This shared pair forms a single covalent bond, creating a stable H₂ molecule: H–H."
      ],
      electronArrangement: "1 shared pair of electrons (2 shared electrons in total). Both hydrogen atoms achieve a stable duplet configuration.",
      bondFormation: "Single Covalent Bond (H–H)",
      finalStructure: "H •x H   or   H–H",
      explanation: "Each Hydrogen atom contributes 1 electron. By mutually sharing this pair, both atoms complete their K-shells, reaching the stable electronic configuration of Helium."
    },
    {
      molecule: "Chlorine Molecule (Cl₂)",
      stepByStep: [
        "Each Chlorine atom (atomic number 17, electronic configuration 2, 8, 7) has 7 valence electrons.",
        "To achieve a stable octet, each chlorine atom needs 1 more electron.",
        "They mutually share one electron each, keeping their other 6 electrons (3 lone pairs) unshared.",
        "This shared pair forms a single covalent bond between the two Chlorine atoms."
      ],
      electronArrangement: "1 shared pair of electrons and 6 unshared lone pairs (3 on each Chlorine atom). Each Cl achieves an octet.",
      bondFormation: "Single Covalent Bond (Cl–Cl)",
      finalStructure: "xx     ••\nx Cl •x Cl •\nxx     ••",
      explanation: "By sharing one pair of electrons, both Chlorine atoms reach a stable octet (2, 8, 8), attaining the electronic configuration of Argon."
    },
    {
      molecule: "Oxygen Molecule (O₂)",
      stepByStep: [
        "Each Oxygen atom (atomic number 8, configuration 2, 6) has 6 valence electrons.",
        "To achieve a stable octet, each oxygen atom requires 2 more electrons.",
        "Therefore, they mutually share 2 electrons each, contributing a total of 4 shared electrons (2 pairs).",
        "The sharing of two pairs of electrons results in a double covalent bond."
      ],
      electronArrangement: "2 shared pairs of electrons (4 shared electrons) and 4 unshared lone pairs (2 on each Oxygen atom).",
      bondFormation: "Double Covalent Bond (O=O)",
      finalStructure: "xx     ••\nx O •x•x O •\nxx     ••",
      explanation: "By mutually sharing two pairs of electrons, both Oxygen atoms complete their L-shells with 8 electrons, achieving the stable electronic configuration of Neon (2, 8)."
    },
    {
      molecule: "Nitrogen Molecule (N₂)",
      stepByStep: [
        "Each Nitrogen atom (atomic number 7, configuration 2, 5) has 5 valence electrons.",
        "To achieve a stable octet, each nitrogen atom requires 3 more electrons.",
        "They mutually share 3 electrons each, contributing a total of 6 shared electrons (3 pairs).",
        "The sharing of three pairs of electrons results in an exceptionally strong triple covalent bond."
      ],
      electronArrangement: "3 shared pairs of electrons (6 shared electrons) and 2 unshared lone pairs (1 on each Nitrogen atom).",
      bondFormation: "Triple Covalent Bond (N≡N)",
      finalStructure: "xx       ••\nx N •x•x•x N •\n         ••",
      explanation: "The mutual sharing of three pairs of electrons allows both Nitrogen atoms to attain a stable octet, mimicking Neon. This triple bond is extremely strong, making gaseous nitrogen highly inert."
    },
    {
      molecule: "Hydrogen Chloride (HCl)",
      stepByStep: [
        "Hydrogen (1) has 1 valence electron (•). Chlorine (2, 8, 7) has 7 valence electrons (x).",
        "Hydrogen needs 1 electron to complete its duplet; Chlorine needs 1 to complete its octet.",
        "They mutually share one pair of electrons: H •x Cl (with Cl keeping its remaining 6 crosses).",
        "Because Chlorine is far more electronegative, the shared pair is pulled closer to Cl, making HCl a polar covalent molecule (δ+ H – Cl δ-)."
      ],
      electronArrangement: "1 shared pair of electrons. Hydrogen completes its duplet, and Chlorine completes its octet.",
      bondFormation: "Polar Single Covalent Bond (H–Cl)",
      finalStructure: "    xx\nH •x Cl x\n    xx",
      explanation: "Hydrogen shares its electron with Chlorine's unpaired valence electron. This satisfies both the duplet rule for Hydrogen and the octet rule for Chlorine."
    },
    {
      molecule: "Water Molecule (H₂O)",
      stepByStep: [
        "Oxygen (2, 6) has 6 valence electrons and needs 2 more. Each of the two Hydrogen atoms has 1 valence electron and needs 1 more.",
        "The Oxygen atom acts as the central atom, sharing one of its electrons with each of the two Hydrogen atoms.",
        "Oxygen forms two separate single covalent bonds with the Hydrogen atoms, leaving 4 electrons (2 lone pairs) unshared on the Oxygen atom."
      ],
      electronArrangement: "2 shared pairs of electrons (forming 2 single covalent bonds) and 2 unshared lone pairs on the central Oxygen atom.",
      bondFormation: "Two Polar Single Covalent Bonds (H–O–H)",
      finalStructure: "   ••\nH x• O •x H\n   ••",
      explanation: "By sharing electrons, Oxygen completes its stable octet (2, 8) while both Hydrogen atoms complete their stable duplets (2), mimicking Neon and Helium respectively."
    },
    {
      molecule: "Ammonia Molecule (NH₃)",
      stepByStep: [
        "Nitrogen (2, 5) has 5 valence electrons and needs 3 more. Three Hydrogen atoms have 1 valence electron each.",
        "Nitrogen acts as the central atom, sharing one electron with each of the three Hydrogen atoms.",
        "This forms three separate single covalent bonds, leaving 1 unshared lone pair on the Nitrogen atom."
      ],
      electronArrangement: "3 shared pairs of electrons (3 single covalent bonds) and 1 unshared lone pair on the central Nitrogen atom.",
      bondFormation: "Three Polar Single Covalent Bonds",
      finalStructure: "   ••\nH x• N •x H\n    x•\n    H",
      explanation: "The central Nitrogen atom completes its stable octet, and the three Hydrogen atoms complete their stable duplets, achieving maximum stability."
    },
    {
      molecule: "Methane Molecule (CH₄)",
      stepByStep: [
        "Carbon (atomic number 6, configuration 2, 4) has 4 valence electrons and is tetravalent.",
        "Four Hydrogen atoms have 1 valence electron each.",
        "Carbon acts as the central atom, sharing its 4 valence electrons individually with each of the 4 Hydrogen atoms.",
        "This results in the formation of four separate single covalent bonds."
      ],
      electronArrangement: "4 shared pairs of electrons (4 single covalent bonds). There are zero lone pairs on the central Carbon atom.",
      bondFormation: "Four Non-polar Single Covalent Bonds",
      finalStructure: "    H\n    x•\nH x• C •x H\n    x•\n    H",
      explanation: "Carbon satisfies its tetravalency by forming four covalent bonds, completing its stable octet. All four Hydrogen atoms complete their stable duplets."
    },
    {
      molecule: "Carbon Dioxide (CO₂)",
      stepByStep: [
        "Carbon (2, 4) has 4 valence electrons and needs 4. Each of the two Oxygen atoms (2, 6) has 6 valence electrons and needs 2.",
        "Carbon acts as the central atom. It shares 2 of its valence electrons with the left Oxygen atom, and its other 2 valence electrons with the right Oxygen atom.",
        "This results in the formation of two double covalent bonds (O=C=O)."
      ],
      electronArrangement: "4 shared pairs of electrons in total (2 double bonds) and 4 unshared lone pairs (2 on each Oxygen atom).",
      bondFormation: "Two Double Covalent Bonds (O=C=O)",
      finalStructure: "••         xx\n• O •x•x C x•x• O •\n••         xx",
      explanation: "By forming double bonds on both sides, the central Carbon completes its octet. Both surrounding Oxygen atoms also successfully complete their stable octets."
    },
    {
      molecule: "Carbon Tetrachloride (CCl₄)",
      stepByStep: [
        "Carbon (2, 4) has 4 valence electrons. Each of the four Chlorine atoms (2, 8, 7) has 7 valence electrons.",
        "Carbon acts as the central atom, sharing one electron with each of the four Chlorine atoms.",
        "This forms four separate single covalent bonds, leaving 24 unshared electrons (6 lone pairs on each of the 4 Chlorine atoms)."
      ],
      electronArrangement: "4 shared pairs of electrons (4 single covalent bonds). The central Carbon has zero lone pairs, while each Cl atom has 3 lone pairs.",
      bondFormation: "Four Non-polar Single Covalent Bonds",
      finalStructure: "     Cl\n     x•\nCl x• C •x Cl\n     x•\n     Cl",
      explanation: "The central Carbon atom achieves a stable octet by sharing with four Chlorine atoms, and all four Chlorine atoms complete their stable octets as well."
    }
  ],
  chapterSummary: [
    "Cause of Bonding: Atoms undergo chemical bonding to decrease potential energy and achieve a stable noble gas electronic configuration.",
    "Octet & Duplet Rules: Atoms attempt to acquire 8 valence electrons (octet rule) or 2 valence electrons in the K-shell (duplet rule) to become stable.",
    "Electrovalent (Ionic) Bonds: Formed by the complete transfer of electrons from a metal (cation) to a non-metal (anion). They are held by strong, non-directional electrostatic forces.",
    "Covalent Bonds: Formed by the mutual sharing of electron pairs between non-metals. They can be single, double, or triple, and polar or non-polar.",
    "Coordinate (Dative) Bonds: A special covalent bond where the shared pair is provided entirely by a single donor atom possessing a lone pair.",
    "Ionic Properties: High melting/boiling points, soluble in water, conduct electricity only in molten or aqueous states due to mobile ions.",
    "Covalent Properties: Low melting/boiling points, insoluble in water (generally), non-conductors of electricity in all states due to lack of ions.",
    "Lewis Dot Structures: Highly precise diagrams showing valence electrons as dots or crosses to illustrate electron transfer or sharing during bond formation."
  ]
};
