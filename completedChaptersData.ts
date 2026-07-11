import { RevisionSectionData, RevisionTime } from './examSprintData';

export interface UnifiedChapterData {
  summary5m: string;
  summary15m: string;
  summary30m: string;
  summary1h: string;
  keyPoints: string[];
  definitions: { term: string; definition: string }[];
  memoryTricks: string[];
  commonMistakes: { mistake: string; correction: string }[];
  expectedQuestions: { question: string; answer: string; marks: number }[];
  onePageNotes: string[];
  fiveMinRevision: { question: string; answer: string }[];
  examTips: string[];
}

export const HINDI_AUTHOR_MAP: Record<string, string> = {
  'h-1': 'सुदर्शन',
  'h-2': 'सियारामशरण गुप्त',
  'h-3': 'यशपाल',
  'h-4': 'स्वयं प्रकाश',
  'h-5': 'जैनेंद्र कुमार',
  'h-6': 'प्रेमचंद',
  'h-7': 'जयशंकर प्रसाद',
  'h-8': 'लीलाधर शर्मा पर्वतीय',
  'h-9': 'हरिशंकर परसाई',
  'h-10': 'मन्नू भंडारी',
  'h-11': 'कबीरदास',
  'h-12': 'गिरधर कविराय',
  'h-13': 'रामधारी सिंह दिनकर',
  'h-14': 'सोहनलाल द्विवेदी',
  'h-15': 'सर्वेश्वर दयाल सक्सेना',
  'h-16': 'सूरदास',
  'h-17': 'तुलसीदास',
  'h-18': 'सूर्यकांत त्रिपाठी निराला',
  'h-19': 'शिवमंगल सिंह सुमन',
  'h-20': 'सुभद्रा कुमारी चौहान',
  'h-21': 'विष्णु प्रभाकर',
  'h-22': 'विनोद रस्तोगी',
  'h-23': 'हरिकृष्ण प्रेमी',
  'h-24': 'उपेंद्रनाथ अश्क',
  'h-25': 'डॉ. रामकुमार वर्मा',
  'h-26': 'विष्णु प्रभाकर',
  'h-27': 'डॉ. रामकुमार वर्मा'
};

export const UNIFIED_CHAPTERS_DATA: Record<string, UnifiedChapterData> = {
  'Work, Energy & Power': {
    summary5m: "Work is done when a force produces displacement: W = F s cos(θ). Energy is the capacity to do work (Potential mgh and Kinetic 1/2mv²). Power is the rate of doing work: P = W/t = F × v.",
    summary15m: "Work is a scalar quantity defined as the dot product of force and displacement. Energy exists in mechanical forms: Kinetic Energy (energy due to motion) and Potential Energy (energy due to position or configuration). Power measures the speed of work delivery. The work-energy theorem states work equals change in kinetic energy.",
    summary30m: "Comprehensive analysis of Work, Energy, and Power: Work requires both a force and a non-zero displacement component in the direction of the force. Power is the time derivative of work, represented practically as force times average velocity. Kinetic energy holds a direct quadratic relationship with linear momentum (K = p²/2m). Potential energy represents work stored against conservative fields (like gravity, U = mgh).",
    summary1h: "Ultimate syllabus guide for Work, Energy, & Power: Master the foundational dot-product relationship W = F · s = Fs cos θ. Understand that work can be positive, negative, or zero based on the angle θ. Power is calculated as work done per unit time (P = W/t) or instantaneous force times velocity (P = F · v). Establish the rigorous conservation of mechanical energy (E = K + U) for conservative forces, and prove that for a freely falling object, total energy remains invariant at all vertical milestones.",
    keyPoints: [
      "No work is done if force and displacement are perpendicular (θ = 90°), such as a satellite in circular orbit.",
      "Work-Energy Theorem: The net work done by external forces on a body is equal to the change in its kinetic energy.",
      "Potential Energy (U = mgh) is position-dependent; Kinetic Energy (K = 1/2 m v²) is speed-dependent.",
      "The total mechanical energy (U + K) of an isolated system remains constant in the absence of dissipative forces.",
      "The commercial unit of energy is the Kilowatt-hour (1 kWh = 3.6 × 10⁶ Joules)."
    ],
    definitions: [
      { term: "Work", definition: "The scalar product of the applied force and the displacement produced in the direction of the force." },
      { term: "Power", definition: "The rate at which work is performed or energy is converted over time." },
      { term: "Kilowatt-Hour (kWh)", definition: "The energy consumed by an electrical appliance of power 1 kilowatt operating continuously for 1 hour." },
      { term: "Conservative Force", definition: "A force for which the work done in moving a body between two points is independent of the path taken." }
    ],
    memoryTricks: [
      "Mnemonic: **W.E.P.S.** - **W**ork is force times path; **E**nergy is capacity to act; **P**ower is speed of action; **S**calar quantities for all three!"
    ],
    commonMistakes: [
      { mistake: "Confusing Kilowatt (kW) as a unit of energy.", correction: "Kilowatt is a unit of power; Kilowatt-hour (kWh) has time multiplied, making it a unit of energy." },
      { mistake: "Failing to include the negative sign for work done by friction.", correction: "Friction acts opposite to displacement (θ = 180°), so work done by friction is always negative: W = -F s." }
    ],
    expectedQuestions: [
      { question: "Prove that the total mechanical energy of a body falling freely under gravity remains constant at any point of its path.", answer: "Consider a body of mass m at height h. At point A (top): K = 0, U = mgh, Total = mgh. At point B (midway x from top): v² = 2gx, K = mgx, U = mg(h-x), Total = mgh. At point C (ground): v² = 2gh, K = mgh, U = 0, Total = mgh. Thus, total mechanical energy is conserved.", marks: 5 },
      { question: "An engine pumps 40 kg of water through a height of 10 m in 5 seconds. Calculate the power of the engine (take g = 10 m/s²).", answer: "Work done W = mgh = 40 × 10 × 10 = 4000 Joules. Power P = W/t = 4000 / 5 = 800 Watts.", marks: 3 }
    ],
    onePageNotes: [
      "Formula Cheat-sheet: W = Fs cos θ. P = W/t = F × v. K = 1/2 mv² = p²/2m. U = mgh.",
      "Units: Work (Joule, erg), Power (Watt, Horsepower: 1 HP = 746 W), Energy (Joule, eV: 1 eV = 1.6 × 10⁻¹⁹ J, kWh: 1 kWh = 3.6 MJ)."
    ],
    fiveMinRevision: [
      { question: "What is the work done by a coolie carrying luggage horizontally on his head?", answer: "Zero, because the force (gravity/reaction) acts vertically upwards while displacement is horizontal (θ = 90°)." },
      { question: "How are kinetic energy and momentum related?", answer: "K = p² / 2m where p is momentum and m is mass." }
    ],
    examTips: [
      "Always state the value of g you are using in your numericals (9.8 or 10 m/s²) and write the final units explicitly to secure full marks."
    ]
  },
  'Machines': {
    summary5m: "Machines multiply force, multiply speed, or change force direction. Mechanical Advantage (MA) = Load/Effort. Velocity Ratio (VR) = d_Effort / d_Load. Efficiency (η) = MA / VR.",
    summary15m: "A machine is a device that overcomes a large load at some point using a small effort. Mechanical Advantage (MA) is Load/Effort. Velocity Ratio (VR) is the ratio of displacement of effort to displacement of load. Efficiency (η) is the ratio of output work to input work.",
    summary30m: "Mechanical analysis of machines: For an ideal machine, work output equals work input (efficiency = 100%, MA = VR). Practical machines have efficiency < 100% and MA < VR due to friction and mass of moving parts. Lever classes are grouped by what is centered (F-L-E). Pulleys include single fixed (VR = 1) and single movable (VR = 2) configurations.",
    summary1h: "Master Class on Machines: Fully define and calculate Mechanical Advantage (MA = L/E), Velocity Ratio (VR = d_E / d_L), and Efficiency (η = Work Output / Work Input). Prove the universal relation η = MA/VR. Classify levers using the 'F-L-E' rule: Class I (Fulcrum centered, MA >, =, or < 1), Class II (Load centered, MA > 1, force multiplier), Class III (Effort centered, MA < 1, speed multiplier). Analyze pulley systems: Single Fixed Pulley (changes direction of effort, VR = 1), Single Movable Pulley (force multiplier, VR = 2), and Block and Tackle systems with n pulleys where VR = n.",
    keyPoints: [
      "Velocity Ratio (VR) is purely geometric and remains constant for a machine, while Mechanical Advantage (MA) decreases due to friction.",
      "A Class II lever always acts as a force multiplier because the effort arm is always longer than the load arm (MA > 1).",
      "A Class III lever always acts as a speed multiplier because the load arm is longer than the effort arm (MA < 1).",
      "In a block and tackle pulley system, the velocity ratio is equal to the total number of pulleys in both blocks.",
      "No machine can act as a force multiplier and speed multiplier simultaneously."
    ],
    definitions: [
      { term: "Mechanical Advantage (MA)", definition: "The ratio of the load overcome by the machine to the effort applied to it." },
      { term: "Velocity Ratio (VR)", definition: "The ratio of the velocity or displacement of the effort to the velocity or displacement of the load." },
      { term: "Efficiency (η)", definition: "The ratio of the useful work done by the machine (output) to the total work done on the machine (input)." },
      { term: "Ideal Machine", definition: "A frictionless machine with weightless moving parts where work output is exactly equal to work input." }
    ],
    memoryTricks: [
      "Mnemonic: **F.L.E. 1-2-3** - Class 1 has **F**ulcrum in middle; Class 2 has **L**oad in middle; Class 3 has **E**ffort in middle!"
    ],
    commonMistakes: [
      { mistake: "Assuming that Velocity Ratio decreases when a pulley is rusted.", correction: "Rust increases friction, which decreases MA and efficiency, but the physical string path (Velocity Ratio) remains exactly the same." },
      { mistake: "Drawing the effort arrow pointing upwards in a block and tackle pulley system when applying downward effort.", correction: "In a block and tackle, the final strand of rope comes off the top block or bottom block. If it goes downwards, the effort arrow must point downwards." }
    ],
    expectedQuestions: [
      { question: "Draw a neat labeled diagram of a block and tackle system with a velocity ratio of 4. Show the direction of load, effort, and tension.", answer: "Draw two blocks. The upper block is fixed and has 2 pulleys. The lower block is movable and has 2 pulleys. The rope is tied to the hook of the upper block, passes around lower, then upper, and final strand comes off the top pulley downwards. Effort is applied downwards. Mark 4 upward tension vectors on the string segments supporting the lower block.", marks: 4 },
      { question: "A Class II lever has an effort arm of 80 cm and load arm of 20 cm. If a load of 100 N is overcome by an effort of 30 N, calculate its MA and Efficiency.", answer: "MA = Load / Effort = 100 / 30 = 3.33. VR = Effort Arm / Load Arm = 80 / 20 = 4. Efficiency η = MA / VR = 3.33 / 4 = 83.33%.", marks: 3 }
    ],
    onePageNotes: [
      "Formulas: MA = L/E. VR = d_E / d_L. η = MA / VR = Work Output / Work Input.",
      "Levers: MA = Effort Arm / Load Arm.",
      "Pulleys: Single fixed: MA = 1, VR = 1. Single movable: MA = 2, VR = 2 (ideal). Block and Tackle: VR = n (number of pulleys)."
    ],
    fiveMinRevision: [
      { question: "Why is a single fixed pulley preferred if its MA is only 1?", answer: "It changes the direction of the applied effort from upwards to a convenient downwards direction." },
      { question: "Which class of lever always has MA < 1?", answer: "Class III lever (e.g., sugar tongs, fire tongs, human forearm)." }
    ],
    examTips: [
      "When drawing pulley diagrams, always use a compass for the circles and a scale for the strings. Neatness is heavily rewarded by examiners."
    ]
  },
  'Current Electricity': {
    summary5m: "Electric current is I = Q/t. Ohm's Law: V = IR. Resistance R = ρ L/A. In series, R = R1 + R2; in parallel, 1/R = 1/R1 + 1/R2. Power P = VI = I²R = V²/R.",
    summary15m: "Electricity revolves around charge flow (current I) driven by potential difference (V). Ohm's law relates them via resistance (R). Specific resistance (ρ) is a material property. Internal resistance (r) of a cell causes terminal voltage (V) to be less than EMF (ε) during current draw.",
    summary30m: "In-depth study of electricity: Ohmic conductors maintain constant R at constant temperature. Resistors in series divide voltage but share current; resistors in parallel divide current but share voltage. Electromotive force (EMF) is open-circuit cell voltage; terminal voltage V = ε - Ir. Electrical energy is consumed as heat (Joule heating: H = I²Rt).",
    summary1h: "Master Guide for Current Electricity: Define current I = dq/dt and Ohm's Law (V = IR). Understand factors affecting resistance: R = ρ(L/A). Differentiate resistance (depends on shape) from resistivity (material-specific, independent of shape). Analyze cell dynamics: EMF (ε) vs Terminal Voltage (V), and derive the internal resistance formula r = (ε/V - 1)R. Solve complex series-parallel resistor networks using Kirchhoff's concepts. Memorize electric power equations (P = VI = I²R = V²/R) and heat production H = I²Rt.",
    keyPoints: [
      "Ohm's Law holds true only when physical conditions like temperature of the conductor remain absolutely constant.",
      "Resistivity (specific resistance) is a material property depending only on the substance and its temperature, not on dimensions.",
      "When a wire is stretched to n times its length, its new resistance becomes n² times the original resistance due to simultaneous area decrease.",
      "EMF is a cell's characteristic property, whereas terminal voltage depends on the current drawn and internal resistance.",
      "Fuses and switches must always be connected in series with the live wire of the circuit."
    ],
    definitions: [
      { term: "Electric Current", definition: "The rate of flow of electric charge through any cross-section of a conductor (I = Q/t)." },
      { term: "Ohm's Law", definition: "The current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature remains constant." },
      { term: "Specific Resistance (Resistivity)", definition: "The resistance of a conductor of unit length and unit area of cross-section." },
      { term: "Electromotive Force (EMF)", definition: "The potential difference across the terminals of a cell when no current is drawn from it (open circuit)." }
    ],
    memoryTricks: [
      "Mnemonic: **V.I.R.P.S.** - **V**oltage drives; **I**ntensity flows; **R**esistance opposes; **P**ower heats; **S**tretching squares resistance!"
    ],
    commonMistakes: [
      { mistake: "Stating that resistivity increases when a wire is stretched.", correction: "Resistivity remains constant because the material hasn't changed. Only the resistance increases." },
      { mistake: "Adding internal resistance directly in parallel with external load.", correction: "Internal resistance r of a cell is always in series with the external equivalent resistance R." }
    ],
    expectedQuestions: [
      { question: "A wire of resistance 9 ohms is stretched to triple its original length. Calculate its new resistance.", answer: "When stretched, volume remains constant: V = L × A = Constant. If new length L' = 3L, new area A' = A/3. Original R = ρ L/A = 9. New R' = ρ L'/A' = ρ (3L)/(A/3) = 9 (ρ L/A) = 9 × R = 9 × 9 = 81 ohms.", marks: 3 },
      { question: "A cell of EMF 2 V and internal resistance 1.2 ohms is connected to an external resistor of 3.8 ohms. Find the current and terminal voltage.", answer: "Total resistance R_total = R + r = 3.8 + 1.2 = 5.0 ohms. Current I = ε / R_total = 2 / 5 = 0.4 A. Terminal Voltage V = I × R = 0.4 × 3.8 = 1.52 V (or V = ε - Ir = 2 - 0.4 × 1.2 = 1.52 V).", marks: 3 }
    ],
    onePageNotes: [
      "Formulas: I = Q/t. V = IR. R = ρ L/A. Series: R = R1 + R2. Parallel: 1/R = 1/R1 + 1/R2. Cell: ε = V + v = I(R+r). r = (ε/V - 1)R. P = VI = I²R = V²/R.",
      "Ohmic: Linear V-I graph (straight line through origin). Non-Ohmic: Curved V-I graph (e.g., vacuum tube, semiconductor diode, filament lamp)."
    ],
    fiveMinRevision: [
      { question: "What happens to the resistance of a metallic conductor when its temperature increases?", answer: "It increases due to more frequent collisions of free electrons with the vibrating lattice ions." },
      { question: "How does the resistance of a semiconductor change with temperature?", answer: "It decreases (negative temperature coefficient of resistance)." }
    ],
    examTips: [
      "In circuit problems, always find the equivalent resistance of parallel groups first, then add series resistors, and finally include internal resistance to find the main current."
    ]
  },
  'Household Circuits': {
    summary5m: "Power transmission uses high voltage to reduce heat loss. Household wiring uses a Parallel Ring system. Wire color codes: Live (brown), Neutral (blue), Earth (green/yellow). Fuse & Switch on Live.",
    summary15m: "Electric power is transmitted from power stations at high voltage (11 kV to 132 kV) to reduce line losses. In homes, appliances are wired in parallel (ring system) at 220V. Live, Neutral, and Earth wires form the core connection. Fuse and switches must always be on the Live wire.",
    summary30m: "Household electrical systems: Power transmission uses step-up transformers at the source and step-down transformers at sub-stations. Parallel ring system allows independent operation and constant voltage. Safety devices include fuses, MCBs, and grounding (earthing). Switch and fuse placement are critical on the live side to isolate appliances from high potential.",
    summary1h: "Exhaustive Guide for Household Circuits: Master the grid system: power generated at 11 kV is stepped up to 132 kV for transmission (reducing current and I²R heat loss), then stepped down. Household ring system utilizes a parallel loop feeding 220V. Study the 3-wire system: Live (Brown/Red, carries current at 220V), Neutral (Blue/Black, return path at 0V), and Earth (Green/Yellow, safety line). Explain the function of a Fuse (low melting point, high resistance safety wire) and why it must go in the Live wire. Detail Earthing (connecting appliance chassis to ground to prevent shocks) and the mechanical safety design of 3-pin plugs.",
    keyPoints: [
      "Electrical appliances in a house are connected in parallel so that each operates at the full mains voltage (220V) and can be controlled independently.",
      "The fuse is always connected in the live wire. If connected in the neutral wire and it melts, the appliance remains live and dangerous.",
      "An Earth wire connects the metallic body of high-power appliances to the ground, protecting users from electric shock due to insulation leakage.",
      "The earth pin in a three-pin plug is made longer and thicker so that it connects to ground first and cannot be inserted into live/neutral sockets.",
      "A switch must always be connected in the live wire to ensure that the appliance is completely cut off from high voltage when turned off."
    ],
    definitions: [
      { term: "Fuse", definition: "A safety device consisting of a short wire of low melting point and high resistance which melts and breaks the circuit when current exceeds a safe limit." },
      { term: "Earthing", definition: "The process of connecting the metallic casing of an electrical appliance to the earth plate buried deep underground to prevent shocks." },
      { term: "Ring System", definition: "A household wiring system where individual parallel loops originate and terminate at the main fuse box, reducing wire thickness and cost." },
      { term: "Miniature Circuit Breaker (MCB)", definition: "An electromagnetic safety switch that automatically trips and cuts off power during overloading or short circuits, and can be manually reset." }
    ],
    memoryTricks: [
      "Mnemonic: **L.N.E.S.** - **L**ive wire gets fuse; **N**eutral returns; **E**arth wire grounds; **S**witches on Live!"
    ],
    commonMistakes: [
      { mistake: "Connecting a fuse in the neutral wire.", correction: "If the fuse is in neutral and melts, current stops but the appliance remains connected to the 220V live wire, posing a fatal shock risk." },
      { mistake: "Using copper wire as a fuse wire.", correction: "Copper has a very high melting point and will not melt when excessive current flows, defeating the safety purpose of a fuse." }
    ],
    expectedQuestions: [
      { question: "Why is electrical energy transmitted at high voltage from the generating station?", answer: "Transmission power P = VI is constant. By stepping up voltage V, the current I is greatly reduced. Since line heat loss is given by H = I²Rt, reducing the current minimizes energy loss in transmission cables, allowing thin, cheaper wires to be used.", marks: 3 },
      { question: "Explain why the Earth pin of a three-pin plug is made longer and thicker than the other two pins.", answer: "1. Longer: It enters the socket first, establishing the ground connection before live contact is made, ensuring safety. 2. Thicker: It prevents accidental insertion into the live or neutral holes of the socket.", marks: 3 }
    ],
    onePageNotes: [
      "Color Codes: Live = Brown (Old: Red). Neutral = Light Blue (Old: Black). Earth = Green/Yellow (Old: Green).",
      "Switch & Fuse: Always placed in the Live wire.",
      "Ring System advantages: 1. Cost-effective (thin wires used). 2. Plugs can have separate fuses. 3. Continuous ring path."
    ],
    fiveMinRevision: [
      { question: "What is the material used for fuse wire?", answer: "An alloy of lead and tin (approx 63% tin, 37% lead) because of its low melting point and high resistivity." },
      { question: "What is the voltage and frequency of household power in India?", answer: "220 V alternating current (AC) at a frequency of 50 Hz." }
    ],
    examTips: [
      "In diagrams of household sockets, remember that looking at the socket, Earth is at the top, Neutral is on the left, and Live is on the right."
    ]
  },
  'Periodic Table': {
    summary5m: "Modern Periodic Law arranges elements by atomic number: properties are periodic functions of atomic number. Periods (7) and Groups (18). Trends depend on nuclear charge and number of shells.",
    summary15m: "Modern Periodic Table organizes elements by increasing atomic number, resolving Mendeleev's anomalies. Trends in properties (atomic size, metallic character, ionization potential, electronegativity) vary predictably across periods and down groups based on atomic structure.",
    summary30m: "Syllabus-aligned periodic trends: Down a group, shells increase, nuclear attraction decreases (atomic size and metallic character increase; IP and electronegativity decrease). Across a period, nuclear charge increases, shells remain constant (atomic size and metallic character decrease; IP and electronegativity increase). Electron affinity is highest for Chlorine.",
    summary1h: "Ultimate Guide to Periodic Table and Trends: Master the Modern Periodic Law: properties of elements are periodic functions of their atomic numbers. Study the 18 vertical columns (groups) and 7 horizontal rows (periods). Thoroughly analyze the physical basis of periodic variations: 1. Number of electron shells, 2. Nuclear charge (number of protons). Across a Period (left to right): nuclear charge increases, atomic radius decreases, non-metallic character increases, Ionization Potential (IP) increases, Electron Affinity (EA) increases, Electronegativity increases. Down a Group (top to bottom): shells increase, atomic size increases, metallic character increases, IP, EA, and Electronegativity decrease.",
    keyPoints: [
      "Modern periodic classification is based on electronic configuration, which is the root cause of periodicity.",
      "Across a period, nuclear charge increases and pulls the valence shell closer, causing atomic size to decrease.",
      "Down a group, each step adds a new electron shell, which dominates over the nuclear charge increase, causing atomic size to increase.",
      "Inert gases (Group 18) have stable, fully filled octet configurations, giving them zero electron affinity and very high ionization potentials.",
      "Fluorine is the most electronegative element, while Chlorine has the highest electron affinity."
    ],
    definitions: [
      { term: "Modern Periodic Law", definition: "The physical and chemical properties of elements are periodic functions of their atomic numbers." },
      { term: "Ionization Potential (IP)", definition: "The minimum energy required to remove the most loosely bound electron from the valence shell of an isolated gaseous atom." },
      { term: "Electron Affinity (EA)", definition: "The amount of energy released when a neutral gaseous atom gains an electron to form a negative ion." },
      { term: "Electronegativity", definition: "The tendency of an atom in a covalent molecule to attract the shared pair of electrons towards itself." }
    ],
    memoryTricks: [
      "Mnemonic: **A.M.I.E.** - **A**tomic size & **M**etallic character go together (increase down, decrease across); **I**onization & **E**lectronegativity go together (decrease down, increase across)!"
    ],
    commonMistakes: [
      { mistake: "Stating Fluorine has the highest Electron Affinity.", correction: "Chlorine has the highest Electron Affinity. Fluorine's extremely small size causes electron-electron repulsions that reduce the energy released when gaining an electron." },
      { mistake: "Explaining periodic trends without referencing both nuclear charge and number of shells.", correction: "Board answer keys strictly require mentioning both nuclear charge and shielding (number of shells) to award full marks." }
    ],
    expectedQuestions: [
      { question: "Explain why the alkali metals are strong reducing agents while halogens are strong oxidizing agents.", answer: "1. Alkali metals (Group 1) have large atomic sizes and low ionization potentials, allowing them to easily lose their 1 valence electron (oxidation), making them strong reducing agents. 2. Halogens (Group 17) have small atomic sizes and high electron affinities, allowing them to readily gain 1 electron to complete their octet (reduction), making them strong oxidizing agents.", marks: 4 },
      { question: "Arrange the following elements in increasing order of their metallic character: Na, Al, Mg, Si, P.", answer: "These elements belong to Period 3. Metallic character decreases across a period from left to right. Hence, increasing order is: P < Si < Al < Mg < Na.", marks: 3 }
    ],
    onePageNotes: [
      "Atomic Size: ↓ down (due to increasing shells), ↑ across (due to increasing nuclear charge pulling electrons tighter).",
      "Metallic Character (electropositive): ↑ down, ↓ across.",
      "Ionization Potential / Electronegativity: ↓ down (outer electrons farther from nucleus), ↑ across (stronger nuclear pull)."
    ],
    fiveMinRevision: [
      { question: "Name the element with the highest electronegativity.", answer: "Fluorine." },
      { question: "Why do noble gases have zero electron affinity?", answer: "Because they have a stable, completely filled outer shell (octet/duplet) and have no tendency to accept extra electrons." }
    ],
    examTips: [
      "When answering trend-based questions, structure your response as: 1. State the trend, 2. State the change in number of shells, 3. State the change in nuclear charge, 4. Give the final physical reason."
    ]
  },
  'Classes & Objects': {
    summary5m: "Class is a blueprint; Object is a real-world entity with state & behavior. Created using 'new'. Java OOP principles: Encapsulation, Abstraction, Inheritance, Polymorphism.",
    summary15m: "A class is a user-defined data type and template. An object is an instance of a class. Memory is allocated for variables when an object is instantiated with the 'new' keyword. OOP pillars structure Java applications.",
    summary30m: "OOP concepts in Java: Abstraction hides implementation details and shows essential features. Encapsulation wraps data (variables) and code (methods) together as a single unit (Class). Instance variables are object-specific; static variables are shared. Access specifiers (public, private, protected) control visibility.",
    summary1h: "Master OOP: Classes and Objects: Define a Class as a logical blueprint and user-defined data type. Define an Object as a physical entity with state (attributes) and behavior (methods) representing an instance of a class. Implement object creation: `ClassName obj = new ClassName();`. Master the four pillars of OOP: 1. Encapsulation (data binding using private variables and public getters/setters), 2. Abstraction (hiding implementation using interfaces/abstract classes), 3. Inheritance (code reusability with `extends`), 4. Polymorphism (method overloading and overriding). Contrast instance variables (unique per object) with static variables (shared class-wide).",
    keyPoints: [
      "A class is a template/blueprint (logical concept); an object is an instance (physical entity allocating memory).",
      "The 'new' operator is used to dynamically allocate memory for an object at runtime.",
      "Encapsulation is achieved by making variables private and providing public getter and setter methods to access them.",
      "Static variables are class-level variables shared by all objects of that class; instance variables belong solely to an object.",
      "A constructor is a special method with the same name as the class, used to initialize objects, and has no return type."
    ],
    definitions: [
      { term: "Class", definition: "A user-defined template or data type that defines the variables and methods common to all objects of its type." },
      { term: "Object", definition: "An identifiable entity with a set of attributes (state), behaviors, and a unique identity, created as an instance of a class." },
      { term: "Encapsulation", definition: "The wrapping of data (variables) and methods acting on that data into a single unit (the class) to prevent unauthorized access." },
      { term: "Data Abstraction", definition: "The process of hiding background implementation details and showing only the essential features to the user." }
    ],
    memoryTricks: [
      "Mnemonic: **A.P.I.E.** - **A**bstraction (hiding detail); **P**olymorphism (many forms); **I**nheritance (reusability); **E**ncapsulation (safe packaging)!"
    ],
    commonMistakes: [
      { mistake: "Writing a return type (even void) for a constructor.", correction: "Constructors have no return type at all, not even void. Writing void makes it a regular method, not a constructor." },
      { mistake: "Accessing non-static instance variables inside a static method directly.", correction: "Static methods belong to the class and cannot access instance variables directly without creating an object of the class." }
    ],
    expectedQuestions: [
      { question: "Differentiate between Instance Variables and Class (Static) Variables with a suitable Java code example.", answer: "1. Instance variables are declared inside a class without the 'static' keyword. Each object gets its own separate copy. 2. Class variables are declared with 'static'. A single copy is shared among all objects. Example:\nclass Demo {\n  int instVar; // Instance variable\n  static int classVar; // Class variable\n}", marks: 4 },
      { question: "What is the purpose of the 'new' operator in Java? Write a statement to create an object of a class named 'Student'.", answer: "The 'new' operator dynamically allocates memory for an object at runtime and invokes its constructor to initialize it. Statement:\nStudent s1 = new Student();", marks: 3 }
    ],
    onePageNotes: [
      "Object Instantiation: ClassName objName = new ClassName(arguments);",
      "Access Specifiers: private (class only), public (accessible everywhere), protected (package and subclasses), default (package only).",
      "Class acts as an Object Factory."
    ],
    fiveMinRevision: [
      { question: "What is default initialization value of an instance integer variable in Java?", answer: "0 (zero). Objects are initialized to null, booleans to false." },
      { question: "Why is a class called a user-defined data type?", answer: "Because it is designed by the programmer to hold custom variables and methods, extending Java's primitive data types." }
    ],
    examTips: [
      "In exam coding questions, always declare your instance variables as private and methods as public to demonstrate proper encapsulation and OOP standards."
    ]
  },
  'गद्य: बात अठन्नी की': {
    summary5m: "सुदर्शन द्वारा रचित 'बात अठन्नी की' भ्रष्ट न्याय तंत्र पर तीखा व्यंग्य है। गरीब नौकर रसीला अठन्नी की हेराफेरी के कारण छह महीने की जेल काटता है, जबकि हजारों की रिश्वत लेने वाले मालिक सुरक्षित रहते हैं।",
    summary15m: "कहानी 'बात अठन्नी की' समाज के भ्रष्ट न्याय तंत्र और अमीरों की संवेदनहीनता पर एक गहरा प्रहार है। ईमानदार नौकर रसीला और चौकीदार रमजान की मित्रता के माध्यम से लेखक ने गरीब वर्ग की विवशता तथा अमीर वर्ग की पाखंडी नैतिकता का मार्मिक चित्रण किया है।",
    summary30m: "रसीला इंजीनियर बाबू जगतसिंह का ईमानदार नौकर था, जिसका वेतन केवल 10 रुपये था। संकट में उसके मित्र रमजान ने उसकी गुप्त आर्थिक सहायता की। रसीला ने कर्ज तो चुका दिया, परंतु केवल एक अठन्नी बाकी रह गई। अठन्नी की हेराफेरी पकड़े जाने पर जगतसिंह ने उसे बेरहमी से पीटा और जिला मैजिस्ट्रेट शेख सलीमुद्दीन की अदालत में पेश किया, जो स्वयं रिश्वतखोर था। शेख ने रसीला को छह महीने की सजा सुनाई, जिससे समाज के दोहरे मापदंड उजागर होते हैं।",
    summary1h: "गहन साहित्यिक समीक्षा - बात अठन्नी की: लेखक सुदर्शन ने इस यथार्थवादी कहानी में न्याय व्यवस्था की विद्रूपता का सजीव चित्रण किया है। कहानी के दो ध्रुव हैं - एक ओर गरीब, संवेदनशील और विवश रसीला तथा उसका सच्चा मित्र रमजान, दूसरी ओर समाज के संभ्रांत और रसूखदार भ्रष्ट अधिकारी - इंजीनियर बाबू जगतसिंह और जिला मैजिस्ट्रेट शेख सलीमुद्दीन। रसीला द्वारा अपनी बीमारी की विवशता में रमजान का कर्ज उतारने के प्रयास में की गई मात्र अठन्नी की हेराफेरी को 'बड़ा अपराध' मानकर उसे छह महीने की कठोर कैद की सजा दी जाती है। वहीं दूसरी ओर, हजारों रुपये की रिश्वत लेकर न्याय और कानून का सौदा करने वाले उसके मालिक शेख सलीमुद्दीन और जगतसिंह समाज में ऊंचे पद पर प्रतिष्ठित रहते हैं। यह विरोधाभास आज की न्याय व्यवस्था पर अत्यंत गंभीर और मर्मस्पर्शी टिप्पणी है।",
    keyPoints: [
      "रसीला इंजीनियर बाबू जगतसिंह के यहाँ नौकर था, जहाँ उसे केवल दस रुपये वेतन मिलता था।",
      "रमजान जिला मैजिस्ट्रेट शेख सलीमुद्दीन का चौकीदार और रसीला का परम मित्र था।",
      "रमजान ने रसीला के परिवार की बीमारी के समय बिना किसी स्वार्थ के गुप्त रूप से रुपये देकर मदद की।",
      "रसीला ने सारा कर्ज चुका दिया, परंतु केवल अठन्नी न चुका पाने के कारण मिठाई लाते समय हेराफेरी की।",
      "स्वयं हजारों की रिश्वत लेने वाले शेख सलीमुद्दीन ने रसीला को अठन्नी की चोरी पर छह महीने की सजा सुनाई।"
    ],
    definitions: [
      { term: "भ्रष्टाचार", definition: "सत्ता और प्रभाव का अनुचित उपयोग करके व्यक्तिगत या आर्थिक लाभ कमाना, जैसा बाबू जगतसिंह और शेख सलीमुद्दीन करते हैं।" },
      { term: "सामाजिक दोहरा मापदंड", definition: "गरीबों के छोटे अपराधों पर कठोर दंड और अमीरों के बड़े-बड़े अपराधों को कानून और समाज द्वारा अनदेखा करना।" },
      { term: "निश्छल मित्रता", definition: "रमजान द्वारा रसीला की विवशता को समझकर बिना किसी लोभ के उसकी आर्थिक मदद करना।" }
    ],
    memoryTricks: [
      "स्मरण सूत्र: **अठन्नी का चक्र** - रसीला का 10 रु वेतन -> रमजान का कर्ज -> अठन्नी की हेराफेरी -> जगतसिंह का गुस्सा -> शेख सलीमुद्दीन का क्रूर न्याय (6 महीने कैद)!"
    ],
    commonMistakes: [
      { mistake: "रसीला को पेशेवर चोर मान लेना।", correction: "रसीला बहुत ईमानदार था। उसने केवल रमजान का कर्ज चुकाने की विवशता और अपनी गरीबी के कारण जीवन में पहली बार अठन्नी की हेराफेरी की थी।" },
      { mistake: "बाबू जगतसिंह को मैजिस्ट्रेट लिख देना।", correction: "बाबू जगतसिंह इंजीनियर थे, और शेख सलीमुद्दीन जिला मैजिस्ट्रेट थे। दोनों ही रिश्वतखोर थे।" }
    ],
    expectedQuestions: [
      { question: "शेख सलीमुद्दीन की अदालत द्वारा रसीला को सजा सुनाए जाने पर रमजान ने क्या प्रतिक्रिया व्यक्त की और क्यों?", answer: "सजा सुनकर रमजान की आँखें लाल हो गईं। उसने व्यंग्यपूर्वक कहा कि यह दुनिया न्याय नगरी नहीं, अंधेर नगरी है। जो लोग हजारों की रिश्वत लेते हैं, वे बड़े-बड़े महलों में ऐश करते हैं, और एक गरीब ने अठन्नी की हेराफेरी की तो उसे छह महीने की कैद मिली। यह प्रतिक्रिया समाज की भ्रष्ट और पक्षपाती न्याय व्यवस्था पर तीखा प्रहार करती है।", marks: 4 },
      { question: "रसीला और रमजान के चरित्रों में क्या समानताएं थीं जो उन्हें सच्चा मित्र बनाती हैं?", answer: "दोनों ही गरीब, मेहनती और संवेदनशील थे। उनमें धर्म और वर्ग से ऊपर उठकर मानवता की भावना थी। रमजान ने रसीला के संकट में बिना सोचे आर्थिक मदद की, और रसीला ने भी धीरे-धीरे सारा कर्ज चुकाकर अपनी कृतज्ञता और ईमानदारी का परिचय दिया। दोनों का चरित्र अमीरों की संवेदनहीनता के सामने अत्यंत उज्ज्वल है।", marks: 4 }
    ],
    onePageNotes: [
      "प्रमुख पात्र: रसीला (सीधा, विवश, ईमानदार नौकर), रमजान (चौकीदार, सच्चा मित्र), बाबू जगतसिंह (संवेदनहीन इंजीनियर), शेख सलीमुद्दीन (पाखंडी जज)।",
      "कहानी का उद्देश्य: भ्रष्ट प्रशासनिक तंत्र, रिश्वतखोरी, और गरीबों के प्रति न्यायपालिका के कठोर रवैये को उजागर करना।",
      "महत्वपूर्ण संवाद: 'बस अठन्नी की ही तो बात थी!', 'यह इंसाफ नहीं, अंधेर है।'"
    ],
    fiveMinRevision: [
      { question: "रसीला का मासिक वेतन कितना था?", answer: "केवल दस रुपये महीना।" },
      { question: "रसीला को कितने समय की सजा सुनाई गई थी?", answer: "छह महीने की कठोर कैद।" }
    ],
    examTips: [
      "उत्तर लिखते समय 'संवेदनहीनता', 'भ्रष्टाचार', 'न्याय की विद्रूपता' और 'अंधेर नगरी' जैसे शब्दों का प्रयोग करें, इससे बोर्ड परीक्षा में अधिक अंक मिलते हैं।"
    ]
  },
  'Acids, Bases & Salts': {
    summary5m: "Acids release hydronium ions (H₃O⁺) in water, bases release hydroxyl ions (OH⁻), and soluble bases are alkalis. Salts are ionic products of neutralization. Normal salts contain no replaceable H⁺/OH⁻, while acid salts retain replaceable H⁺.",
    summary15m: "According to Arrhenius, acids produce stable H₃O⁺ ions in water, while alkalis produce OH⁻ ions. Acids turn blue litmus red, whereas alkalis turn red litmus blue. Salts are formed by replacing replaceable hydrogen in acids with metal or ammonium ions. Hydrated salts contain a fixed number of water molecules of crystallization, which can be lost via efflorescence, while deliquescent salts absorb atmospheric moisture to form solutions.",
    summary30m: "Syllabus summary for Acids, Bases and Salts: Acids are classified by source (organic vs mineral), basicity (monobasic, dibasic, tribasic), and strength (degree of ionization). Alkalis are soluble bases that release OH⁻. Common reactions include acids reacting with active metals to produce hydrogen gas (except HNO₃), with carbonates to release CO₂, and with sulphites to release SO₂. Double salts (like Potash Alum) dissociate fully into simple constituent ions, whereas complex salts (like Potassium Ferrocyanide) yield stable complex ions in water.",
    summary1h: "Comprehensive ICSE Guide to Acids, Bases and Salts: Master the definition and stepwise ionization of dibasic sulphuric acid (H₂SO₄) and tribasic phosphoric acid (H₃PO₄). Know that monobasic acids like HCl form only normal salts, whereas dibasic and tribasic acids form both acid and normal salts. Understand neutralization (acid + base ⎯→ salt + water only). Insoluble salts like Lead Chloride (PbCl₂) and Barium Sulphate (BaSO₄) are prepared uniquely by precipitation (double decomposition). Hydrated salts lose water of crystallization upon heating or dry exposure (efflorescence). Deliquescent salts (FeCl₃, NaOH) dissolve in absorbed atmospheric water, while hygroscopic agents (conc. H₂SO₄, CaO) absorb water without liquefying.",
    keyPoints: [
      "Bare protons (H⁺) are highly unstable and immediately form hydronium ions (H₃O⁺) in water.",
      "An alkali is a water-soluble base (e.g., NaOH, KOH, NH₄OH). All alkalis are bases, but not all bases are alkalis.",
      "Monobasic acids have only one replaceable hydrogen ion and can only form normal salts.",
      "Dibasic and tribasic acids have multiple replaceable hydrogen ions and can form both acid and normal salts.",
      "Insoluble salts (e.g., PbCl₂, BaSO₄, AgCl) must be prepared by double decomposition/precipitation of two soluble salts.",
      "Efflorescence is the physical loss of water of crystallization to dry air (e.g. washing soda crystals).",
      "Deliquescence is the absorption of atmospheric moisture to dissolve and form a concentrated solution (e.g. anhydrous FeCl₃).",
      "Hygroscopic substances absorb moisture without liquefying or changing physical state (e.g. conc. H₂SO₄, CaO)."
    ],
    definitions: [
      { term: "Hydronium Ion (H₃O⁺)", definition: "A stable complex ion formed when a highly reactive, bare hydrogen ion (proton) chemically coordinates with a polar water molecule." },
      { term: "Basicity of an Acid", definition: "The number of replaceable hydrogen atoms present in one molecule of an acid which can be released as hydronium ions in aqueous solution." },
      { term: "Alkali", definition: "A basic hydroxide which is soluble in water, dissociating to release hydroxyl (OH⁻) ions in solution." },
      { term: "Neutralization", definition: "The chemical reaction between hydronium ions from an acid and hydroxyl ions or oxide ions from a base to form salt and water only." },
      { term: "Double Salt", definition: "A salt formed by the crystallization of a mixture of two simple salts in equimolar proportions, which completely dissociates into constituent simple ions in water." },
      { term: "Complex Salt", definition: "A salt which on dissolving in water dissociates to give simple ions and complex ions, retaining its coordinate structural identity in solution." },
      { term: "Deliquescence", definition: "The phenomenon where certain water-soluble crystalline solids absorb atmospheric moisture to dissolve and form a saturated solution." }
    ],
    memoryTricks: [
      "Mnemonic: **A.B.S.P.** - **A**cid releases Hydronium; **B**ase releases Hydroxyl; **S**oluble bases are Alkalis; **P**recipitate for insoluble salts!",
      "Indicator Cheat: **M.O.R.Y.** - **M**ethyl **O**range is **R**ed in acid, **Y**ellow in alkali!"
    ],
    commonMistakes: [
      { mistake: "Writing H⁺ (aq) instead of H₃O⁺ in dissociation reactions.", correction: "Always write H⁺ + H₂O ⎯→ H₃O⁺ because bare protons cannot exist independently in water." },
      { mistake: "Trying to prepare Lead Chloride (PbCl₂) by reacting Lead metal with dilute Hydrochloric Acid.", correction: "Since Lead Chloride is insoluble, it forms an insoluble coating on the metal surface that stops the reaction. Prepare PbCl₂ by mixing soluble Lead Nitrate and Sodium Chloride." },
      { mistake: "Using concentrated sulphuric acid to dry basic Ammonia gas.", correction: "Since ammonia is basic, it reacts with acidic H₂SO₄ to form ammonium sulphate salt. Use basic Quicklime (CaO) to dry ammonia instead." }
    ],
    expectedQuestions: [
      { question: "Write balanced chemical equations to show how dilute Sulphuric Acid behaves as a dibasic acid with Sodium Hydroxide.", answer: "Step 1 (Acid Salt formation): H₂SO₄ (dil) + NaOH ⎯⎯<200°C⎯⎯→ NaHSO₄ (sodium bisulphate) + H₂O\nStep 2 (Normal Salt formation): H₂SO₄ (dil) + 2NaOH ⎯⎯>200°C⎯⎯→ Na₂SO₄ (sodium sulphate) + 2H₂O", marks: 4 },
      { question: "State two chemical tests to distinguish between Carbon Dioxide (CO₂) and Sulphur Dioxide (SO₂) gases.", answer: "1. CO₂ has no effect on acidified potassium dichromate solution (remains orange), whereas SO₂ reduces it from orange to clear green.\n2. CO₂ has no effect on acidified potassium permanganate solution (remains pink), whereas SO₂ decolors it from pink to colorless.", marks: 3 },
      { question: "Describe how you would prepare pure crystals of Lead Chloride in the laboratory.", answer: "Add soluble Lead Nitrate solution to soluble Sodium Chloride solution. A curdy white precipitate of insoluble Lead Chloride (PbCl₂) is immediately formed. Filter the mixture, wash the precipitate with cold water to remove soluble Sodium Nitrate impurities, and dry the crystals of PbCl₂.\nPb(NO₃)₂ (aq) + 2NaCl (aq) ⎯→ PbCl₂ (s)↓ + 2NaNO₃ (aq)", marks: 3 }
    ],
    onePageNotes: [
      "Acid + Metal ⎯→ Salt + H₂↑ (except with HNO₃)",
      "Acid + Carbonate ⎯→ Salt + H₂O + CO₂↑",
      "Acid + Sulphite ⎯→ Salt + H₂O + SO₂↑",
      "Acid + Sulphide ⎯→ Salt + H₂S↑ (rotten egg smell)",
      "Ammonium Salt + Alkali ⎯⎯Δ⎯⎯→ Salt + H₂O + NH₃↑ (pungent smell)",
      "Heavy Metal Salt + Alkali ⎯→ Colored Hydroxide ppt (Fe(OH)₂ dirty green, Fe(OH)₃ reddish brown, Cu(OH)₂ blue, Zn(OH)₂ gelatinous white, Pb(OH)₂ chalky white)"
    ],
    fiveMinRevision: [
      { question: "Which acid does not liberate hydrogen gas with active metals, and why?", answer: "Nitric acid (HNO₃), because it is a powerful oxidizing agent and oxidizes the hydrogen formed to water, reducing itself to nitrogen oxides." },
      { question: "What happens when excess sodium hydroxide is added to a zinc hydroxide precipitate?", answer: "The gelatinous white precipitate dissolves to form a clear, colorless solution of soluble Sodium Zincate (Na₂ZnO₂) complex salt." }
    ],
    examTips: [
      "Always memorize the exact precipitate colors for analytical tests (Copper is pale blue, Ferrous is dirty green, Ferric is reddish brown, Zinc is gelatinous white, and Lead is chalky white) as these are highly tested in both Sections I and II!"
    ]
  },
  'Analytical Chemistry': {
    summary5m: "Analytical chemistry is the qualitative identification and quantitative estimation of chemical elements/compounds. In ICSE Class 10, it focuses on qualitative tests identifying metal cations with Sodium Hydroxide and Ammonium Hydroxide, alongside identification of key anions using wet precipitation and gas tests.",
    summary15m: "Qualitative analysis determines what chemical species are present in a sample. Metal cations in solution react with Sodium Hydroxide (NaOH) and Ammonium Hydroxide (NH₄OH) to precipitate insoluble metal hydroxides with characteristic colors. Amphoteric hydroxides (Zinc and Lead) dissolve in excess NaOH. Zinc also dissolves in excess NH₄OH forming a soluble coordination amine complex, whereas Lead remains insoluble, allowing for clean diagnostic separation. Anions like Carbonate, Sulphite, and Sulphide are identified by gas evolution with dilute acids, while Chloride, Nitrate, and Sulphate are identified via specific wet precipitation tests.",
    summary30m: "Syllabus summary for Analytical Chemistry: Focuses on the action of NaOH and NH₄OH on Ca²⁺, Fe²⁺, Fe³⁺, Cu²⁺, Zn²⁺, and Pb²⁺ ions. Memorize the precipitate colors: Cu²⁺ is pale blue, Fe²⁺ is dirty green, Fe³⁺ is reddish-brown, Zn²⁺ is gelatinous white, Pb²⁺ is chalky white, and Ca²⁺ is white (NaOH only). Zinc and Lead precipitates dissolve in excess NaOH to form soluble Sodium Zincate and Sodium Plumbite. Only Copper and Zinc precipitates dissolve in excess NH₄OH to form soluble tetraammine complex salts. Flame tests serve as a dry method to identify Na⁺ (golden yellow), K⁺ (lilac), Ca²⁺ (brick red), and Cu²⁺ (peacock green). Anion diagnostics include the Barium Chloride test for SO₄²⁻ (insoluble white precipitate of BaSO₄) and the Brown Ring test for NO₃⁻.",
    summary1h: "Ultimate ICSE Board Guide to Analytical Chemistry: Master the chemistry of qualitative salt analysis. Sodium Hydroxide (NaOH) added dropwise yields insoluble hydroxides. In excess NaOH, Zn(OH)₂ and Pb(OH)₂ dissolve to form colorless solutions of Na₂ZnO₂ and Na₂PbO₂ due to their amphoteric nature, while Ca(OH)₂, Fe(OH)₂, Fe(OH)₃, and Cu(OH)₂ remain insoluble. With Ammonium Hydroxide (NH₄OH), Calcium yields no precipitate. In excess NH₄OH, Cu(OH)₂ dissolves to form an intensely deep inky-blue solution of [Cu(NH₃)₄]SO₄, and Zn(OH)₂ dissolves to form colorless [Zn(NH₃)₄]SO₄. Lead hydroxide [Pb(OH)₂] remains insoluble in excess NH₄OH, providing a classic board-exam distinction between Zinc and Lead. Amphoteric metals (Zn, Al, Pb) react with boiling alkalis to liberate Hydrogen gas. Wet chemical tests for anions require Silver Nitrate for Chloride (curdy white AgCl precipitate soluble in NH₄OH), Barium Chloride for Sulphate (white BaSO₄ precipitate insoluble in mineral acids), and the Brown Ring test for Nitrate (forming unstable [Fe(H₂O)₅(NO)]SO₄ complex).",
    keyPoints: [
      "Sodium Hydroxide (NaOH) added to metal cations precipitates insoluble metal hydroxides with highly characteristic colors.",
      "Amphoteric hydroxides (Zinc and Lead) dissolve in excess NaOH to form soluble complex salts (sodium zincate and sodium plumbite).",
      "Ammonium Hydroxide (NH₄OH) is a weak alkali; it does not precipitate Calcium (Ca²⁺) because the OH⁻ concentration is too low.",
      "Excess NH₄OH dissolves Copper(II) to form a deep inky-blue complex [Cu(NH₃)₄]²⁺ and Zinc(II) to form a colorless complex [Zn(NH₃)₄]²⁺.",
      "Lead hydroxide is soluble in excess NaOH but insoluble in excess NH₄OH, making this the primary distinction between Zn²⁺ and Pb²⁺.",
      "Boiling concentrated NaOH reacts with amphoteric metals (Zn, Al, Pb) and their oxides/hydroxides to produce hydrogen or water and soluble aluminates/zincates.",
      "Flame tests identify cations by volatile chloride emissions: Na⁺ is golden yellow, K⁺ is lilac, Ca²⁺ is brick red, and Cu²⁺ is peacock green.",
      "Anion tests include BaCl₂ for Sulphate (insoluble white BaSO₄ ppt), AgNO₃ for Chloride (curdy white AgCl ppt soluble in NH₄OH), and the Brown Ring test for Nitrate."
    ],
    definitions: [
      { term: "Qualitative Analysis", definition: "The branch of chemistry focused on identifying the specific chemical components, ions, or functional groups present in a given substance." },
      { term: "Amphoteric Substance", definition: "A substance (metal, oxide, or hydroxide) that exhibits both acidic and basic properties, reacting with both strong mineral acids and strong alkalis." },
      { term: "Precipitation", definition: "A chemical reaction in which two soluble ionic compounds in aqueous solution combine to form an insoluble solid product called a precipitate." },
      { term: "Coordinate Complex", definition: "A compound containing a central metal atom or ion surrounded by a group of molecules or ions (ligands) bonded to it by coordinate covalent bonds." },
      { term: "Flame Test", definition: "An analytical dry test where an unknown salt is volatilized in a Bunsen burner flame, imparting a characteristic color based on the metal cation's electronic emission spectrum." },
      { term: "Brown Ring Test", definition: "A highly sensitive qualitative test for detecting Nitrate ions in solution, characterized by the formation of a brown nitroso-ferrous complex at the liquid junction." }
    ],
    memoryTricks: [
      "Precipitation Colors Mnemonic: **G.B.R.W.W.** - **G**reen Ferrous, **B**lue Copper, **R**ed-Brown Ferric, **W**hite Zinc/Lead, and **W**hite Calcium (only in NaOH)!",
      "Solubility Mnemonic: **Z.P.S.** - **Z**inc and **P**lead are **S**oluble in excess Sodium Hydroxide! But only **Z**inc and **C**opper dissolve in excess Ammonium Hydroxide!",
      "Flame Colors: **S.Y. P.L. C.R. C.G.** - **S**odium **Y**ellow, **P**otassium **L**ilac, **C**alcium brick **R**ed, **C**opper peacock **G**reen."
    ],
    commonMistakes: [
      { mistake: "Stating that Lead Hydroxide dissolves in excess Ammonium Hydroxide.", correction: "Lead Hydroxide is insoluble in excess NH₄OH. Only Zinc and Copper hydroxides dissolve in excess NH₄OH." },
      { mistake: "Assuming Barium Sulphate precipitate can be dissolved by adding concentrated Hydrochloric Acid.", correction: "Barium Sulphate is completely insoluble in concentrated mineral acids, which distinguishes it from Barium Sulphite (which reacts to release SO₂)." },
      { mistake: "Writing NaZnO₂ or NaPbO₂ as the formulas of sodium zincate and sodium plumbite.", correction: "The correct formulas have two sodium atoms: Na₂ZnO₂ (Sodium Zincate) and Na₂PbO₂ (Sodium Plumbite)." }
    ],
    expectedQuestions: [
      { question: "How will you distinguish between Zinc Nitrate and Lead Nitrate solutions using Ammonium Hydroxide?", answer: "Add Ammonium Hydroxide solution dropwise and then in excess to both salt solutions. Zinc Nitrate forms a gelatinous white precipitate of Zinc Hydroxide which dissolves completely in excess NH₄OH to form a clear, colorless solution of tetraamminezinc(II) sulphate. Lead Nitrate forms a chalky-white precipitate of Lead Hydroxide which remains completely insoluble in excess NH₄OH.", marks: 3 },
      { question: "Write balanced chemical equations representing the action of boiling concentrated Sodium Hydroxide on (a) Zinc Oxide, and (b) Aluminium metal.", answer: "(a) ZnO + 2NaOH ⎯⎯Δ⎯⎯→ Na₂ZnO₂ (sodium zincate) + H₂O\n(b) 2Al + 2NaOH + 2H₂O ⎯⎯Δ⎯⎯→ 2NaAlO₂ (sodium aluminate) + 3H₂↑", marks: 4 },
      { question: "Explain the chemistry and observation of the Barium Chloride test for identifying Sulphate ions in a solution.", answer: "Add dilute Hydrochloric Acid and Barium Chloride (BaCl₂) solution to the salt solution. A heavy, dense white precipitate of Barium Sulphate (BaSO₄) is formed which remains completely insoluble even on adding excess concentrated HCl. Equation: BaCl₂ + Na₂SO₄ ⎯→ BaSO₄↓ (white) + 2NaCl", marks: 3 }
    ],
    onePageNotes: [
      "Cu²⁺ + NaOH ⎯→ Cu(OH)₂↓ (pale blue, insoluble in excess NaOH)",
      "Fe²⁺ + NaOH ⎯→ Fe(OH)₂↓ (dirty green, insoluble in excess NaOH)",
      "Fe³⁺ + NaOH ⎯→ Fe(OH)₃↓ (reddish brown, insoluble in excess NaOH)",
      "Zn²⁺ + NaOH ⎯→ Zn(OH)₂↓ (gelatinous white, soluble in excess NaOH to Na₂ZnO₂)",
      "Pb²⁺ + NaOH ⎯→ Pb(OH)₂↓ (chalky white, soluble in excess NaOH to Na₂PbO₂)",
      "Cu²⁺ + NH₄OH ⎯→ Cu(OH)₂↓ (pale blue, soluble in excess NH₄OH to deep inky-blue [Cu(NH₃)₄]²⁺)",
      "Zn²⁺ + NH₄OH ⎯→ Zn(OH)₂↓ (gelatinous white, soluble in excess NH₄OH to colorless [Zn(NH₃)₄]²⁺)",
      "Pb²⁺ + NH₄OH ⎯→ Pb(OH)₂↓ (chalky white, insoluble in excess NH₄OH)",
      "Amphoteric Metals: Zn + 2NaOH ⎯→ Na₂ZnO₂ + H₂↑; 2Al + 2NaOH + 2H₂O ⎯→ 2NaAlO₂ + 3H₂↑"
    ],
    fiveMinRevision: [
      { question: "What is the formula of the brown ring complex?", answer: "[Fe(H₂O)₅(NO)]SO₄ (Nitroso-ferrous sulphate)." },
      { question: "Name a metal cation that forms no precipitate with Ammonium Hydroxide solution.", answer: "Calcium (Ca²⁺) ion." }
    ],
    examTips: [
      "In any qualitative analysis question, always state both the color of the precipitate and its behavior in excess reagent (soluble/insoluble) as the grading scheme awards separate marks for each part!"
    ]
  }
};

export function isChapterCompletedInStudySphere(subjectId: string, chapterId: string): boolean {
  if (subjectId === 'physics') {
    return ['p-1', 'p-2', 'p-3', 'p-8', 'p-9'].includes(chapterId);
  }
  if (subjectId === 'chemistry') {
    return ['c-1', 'c-2', 'c-3', 'c-4'].includes(chapterId);
  }
  if (subjectId === 'computer-applications') {
    return ['ca-3'].includes(chapterId);
  }
  if (subjectId === 'hindi') {
    return true; // All Hindi chapters are implemented
  }
  return false;
}

export function getRevisionDataFromUnified(data: UnifiedChapterData, time: RevisionTime): RevisionSectionData {
  let summary = data.summary1h;
  let sliceCount = 99; // Default for 1h (show all)

  if (time === '5m') {
    summary = data.summary5m;
    sliceCount = 2;
  } else if (time === '15m') {
    summary = data.summary15m;
    sliceCount = 3;
  } else if (time === '30m') {
    summary = data.summary30m;
    sliceCount = 4;
  }

  return {
    summary,
    keyPoints: data.keyPoints.slice(0, sliceCount === 2 ? 2 : sliceCount === 3 ? 3 : sliceCount === 4 ? 4 : data.keyPoints.length),
    definitions: data.definitions.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 2 : sliceCount === 4 ? 3 : data.definitions.length),
    memoryTricks: data.memoryTricks.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 1 : sliceCount === 4 ? 2 : data.memoryTricks.length),
    commonMistakes: data.commonMistakes.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 1 : sliceCount === 4 ? 2 : data.commonMistakes.length),
    expectedQuestions: data.expectedQuestions.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 2 : sliceCount === 4 ? 3 : data.expectedQuestions.length).map(q => ({
      question: q.question,
      answer: q.answer,
      marks: q.marks
    })),
    onePageNotes: data.onePageNotes.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 2 : sliceCount === 4 ? 3 : data.onePageNotes.length),
    fiveMinRevision: data.fiveMinRevision.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 2 : sliceCount === 4 ? 3 : data.fiveMinRevision.length),
    examTips: data.examTips.slice(0, sliceCount === 2 ? 1 : sliceCount === 3 ? 1 : sliceCount === 4 ? 2 : data.examTips.length)
  };
}
