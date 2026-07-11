import { UNIFIED_CHAPTERS_DATA, getRevisionDataFromUnified } from './completedChaptersData';

export interface RevisionSectionData {
  summary: string;
  keyPoints: string[];
  definitions: { term: string; definition: string }[];
  memoryTricks: string[];
  commonMistakes: { mistake: string; correction: string }[];
  expectedQuestions: { question: string; answer: string; marks: number }[];
  onePageNotes: string[];
  fiveMinRevision: { question: string; answer: string }[];
  examTips: string[];
}

export type RevisionTime = '5m' | '15m' | '30m' | '1h';

// High-quality static revision data for popular chapters
const POPULAR_CHAPTERS_DATA: Record<string, Record<RevisionTime, RevisionSectionData>> = {
  // 1. PHYSICS - FORCE
  'Force': {
    '5m': {
      summary: "Force is an external agent that changes or tends to change a body's state of rest or uniform motion. Torque (Moment of Force) is the turning effect of a force about a pivot point: Torque = Force × Perpendicular Distance (τ = F × d).",
      keyPoints: [
        "Torque depends on both the magnitude of Force applied and its perpendicular distance from the pivot.",
        "Principle of Moments: For equilibrium, sum of anticlockwise moments equals sum of clockwise moments.",
        "Centre of Gravity (CG) is the single point where the entire weight of a body acts, regardless of its orientation."
      ],
      definitions: [
        { term: "Torque (Moment of Force)", definition: "The turning effect of a force about a fixed point or pivot, calculated as the product of force and perpendicular distance." },
        { term: "Principle of Moments", definition: "When a body is in rotational equilibrium, the sum of clockwise moments about any axis equals the sum of anticlockwise moments about the same axis." }
      ],
      memoryTricks: [
        "Mnemonic: **F.A.C.E.** - **F**orce times **A**rm equals turning effect; **C**lockwise moments equal **E**xtra-anticlockwise moments in equilibrium."
      ],
      commonMistakes: [
        { mistake: "Calculating torque using the straight-line distance instead of the perpendicular distance from the pivot.", correction: "Always find the exact 90-degree distance from the line of action of the force to the pivot point." }
      ],
      expectedQuestions: [
        { question: "State two factors on which the moment of a force depends.", answer: "1. The magnitude of the force applied. 2. The perpendicular distance of the line of action of force from the pivoted point.", marks: 2 }
      ],
      onePageNotes: [
        "Formula: τ = F × d (Unit: N m in SI, dyne cm in CGS)",
        "Equilibrium Conditions: 1. Net force = 0 (Translational) 2. Net moment = 0 (Rotational)"
      ],
      fiveMinRevision: [
        { question: "What is the SI unit of Moment of Force?", answer: "Newton-meter (N m)." },
        { question: "Where does the Centre of Gravity of a uniform circular ring lie?", answer: "At its geometric center, which lies outside the material of the ring." }
      ],
      examTips: [
        "Always write correct units! Substituting N-m as J (Joule) for moment of force is heavily penalized in board exams."
      ]
    },
    '15m': {
      summary: "Force produces translational motion (along a straight path) or rotational motion (about a fixed pivot). Moment of force (Torque) measures rotational tendency. Two equal, opposite, and parallel forces acting on a body along different lines of action constitute a Couple, producing pure rotation.",
      keyPoints: [
        "Linear force yields linear acceleration; Torque yields angular acceleration.",
        "A Couple's moment is calculated as: Force × Arm of Couple (perpendicular distance between the two parallel forces).",
        "Conditions of Equilibrium: Net translation force must be zero (static/dynamic), and net torque must be zero.",
        "Centre of Gravity (CG) of uniform bodies lies at their geometric centers, but can be outside the material (e.g. hollow sphere, L-shaped bar)."
      ],
      definitions: [
        { term: "Translational Motion", definition: "Motion in which all parts of a rigid body move through the same distance along parallel paths." },
        { term: "Couple", definition: "Two equal, opposite, and parallel forces acting on a body along two different lines of action, producing rotational motion without translation." },
        { term: "Centre of Gravity", definition: "The point through which the entire weight of a body acts, irrespective of the body's orientation." }
      ],
      memoryTricks: [
        "Mnemonic: **T.C.E.G.** - **T**orque turns, **C**ouple spins, **E**quilibrium balances, **G**ravity centers at CG."
      ],
      commonMistakes: [
        { mistake: "Treating Centrifugal Force as a real reaction force to Centripetal Force.", correction: "Centrifugal force is a pseudo/apparent force active only in rotating frames. They are never an action-reaction pair." },
        { mistake: "Incorrect sign conventions for moments.", correction: "Anticlockwise moment is positive (+); Clockwise moment is negative (-)." }
      ],
      expectedQuestions: [
        { question: "Define a couple and write its SI unit.", answer: "A couple consists of two equal, opposite parallel forces acting along different lines. Its SI unit is the Newton-meter (N m).", marks: 2 },
        { question: "A physical balance works on which principle? Explain briefly.", answer: "It works on the Principle of Moments. In equilibrium, the sum of anticlockwise moments of forces equals the sum of clockwise moments.", marks: 3 }
      ],
      onePageNotes: [
        "Moment of Force (τ) = F × d. Max torque occurs when d is maximum (force applied at the extreme end, perpendicular).",
        "Moment of Couple = F × (Arm of Couple).",
        "Equilibrium: Static (remains at rest, e.g. book on table) vs Dynamic (remains in uniform motion, e.g. rain drops falling with terminal velocity)."
      ],
      fiveMinRevision: [
        { question: "State the algebraic sum of moments of forces in equilibrium.", answer: "Zero (Στ = 0)." },
        { question: "Why is it easier to open a door by pulling it at its edge?", answer: "Because the perpendicular distance (d) from the hinges is maximum at the edge, requiring minimum force (F) to produce the necessary torque." },
        { question: "What is the CG of a solid cone?", answer: "At a height h/4 from its base along its axis of symmetry (where h is the total height)." }
      ],
      examTips: [
        "Draw clear diagrams showing forces with arrowheads and mark the pivot point explicitly to secure full marks."
      ]
    },
    '30m': {
      summary: "Detailed Force Dynamics: Rotational motion requires a pivoted axis. Moment of Force or Torque represents the rotational effect. We study equilibrium states under concurrent forces, the Principle of Moments, Couple forces, Centre of Gravity (CG) locations for various 2D/3D shapes, and the distinction between circular motion forces (Centripetal vs Centrifugal).",
      keyPoints: [
        "Torque vector direction is determined by the Right-Hand Grip Rule along the axis of rotation.",
        "Principle of Moments dictates that in rotational equilibrium, total clockwise torque equals total anticlockwise torque.",
        "A Couple produces pure rotation because the net translational force is zero (F - F = 0), but the torques add up.",
        "CG shifts as the shape or mass distribution of a body changes. If a body is suspended freely, it always comes to rest with its CG vertically below the point of suspension.",
        "Centripetal Force is a real force directed towards the center of a circular path, essential for uniform circular motion."
      ],
      definitions: [
        { term: "Rotational Motion", definition: "The motion of a body about a fixed axis such that all its particles move in concentric circles about that axis." },
        { term: "Arm of Couple", definition: "The perpendicular distance between the lines of action of the two equal and opposite forces forming the couple." },
        { term: "Dynamic Equilibrium", definition: "A state where a body remains in a uniform state of motion (translational or rotational) under the action of multiple balanced forces." },
        { term: "Centripetal Force", definition: "The constant force acting on a body in circular motion, directed radially inward towards the center of the circular path." }
      ],
      memoryTricks: [
        "Mnemonic: **C.P. vs C.F.** - **C**entri**p**etal is **p**ushing in (real); **C**entri**f**ugal is **f**leeing out (fake/pseudo)."
      ],
      commonMistakes: [
        { mistake: "Assuming CG always lies inside the boundary of the solid object.", correction: "For objects like a hollow pipe, boomerang, or key-ring, the CG lies in empty space outside the solid structure." },
        { mistake: "Mixing Centripetal Force as a separate force in free-body diagrams.", correction: "Centripetal force is not an independent force; it is just a role played by existing forces like tension, friction, or gravity." }
      ],
      expectedQuestions: [
        { question: "Derive the relation for Moment of Couple.", answer: "Let two equal & opposite forces F act at points A and B. Pivot is O. Moment at A = F × OA (anticlockwise). Moment at B = F × OB (anticlockwise). Total moment = F × OA + F × OB = F × (OA + OB) = F × AB (Force × Arm).", marks: 3 },
        { question: "Where is the CG of: (a) Triangular lamina, (b) Uniform solid cylinder, (c) Uniform circular ring?", answer: "(a) Centroid (intersection of medians). (b) Midpoint of its central axis. (c) Geometric center of the ring.", marks: 3 },
        { question: "Explain why a cyclist bends inwards while taking a sharp turn on a circular road.", answer: "Bending inwards allows the horizontal component of the normal reaction force to provide the necessary centripetal force required for circular motion, preventing slipping.", marks: 3 }
      ],
      onePageNotes: [
        "Linear Motion: Force F = m × a. Rotational Motion: Torque τ = I × α (I is moment of inertia, α is angular acceleration).",
        "Couple Arm: Distance 'd' between forces. Moment = F × d.",
        "Stable Equilibrium: If slightly displaced, CG rises and the body returns to its original position. Unstable: CG lowers. Neutral: CG remains at the same height.",
        "Circular Motion: Constant speed, variable velocity (due to direction change), accelerated motion. Force = mv²/r."
      ],
      fiveMinRevision: [
        { question: "Write the relation between 1 N m and dyne cm.", answer: "1 N m = 10⁵ dyne × 10² cm = 10⁷ dyne cm." },
        { question: "Does a body in uniform circular motion have constant velocity?", answer: "No, because the direction of motion changes continuously, causing velocity to change even though speed remains constant." },
        { question: "What acts as the centripetal force for a planet orbiting the sun?", answer: "The gravitational force of attraction between the planet and the sun." },
        { question: "How does the position of CG change when a uniform wire is bent into a circle?", answer: "Initially at the center of the wire's length; after bending, it shifts to the geometric center of the circular ring." }
      ],
      examTips: [
        "When solving numericals on the principle of moments, choose the pivot point as the reference to eliminate unknown reaction forces from your equations."
      ]
    },
    '1h': {
      summary: "Comprehensive Guide to Force & Rotational Dynamics: This covers translational vs rotational motion, Moment of a Force (Torque), the mechanics of Couples, conditions of mechanical equilibrium (translational and rotational), detailed mapping of the Centre of Gravity (CG) for standard symmetric and asymmetric shapes, and a rigorous analysis of uniform circular motion including centripetal forces and pseudo-centrifugal forces in rotating systems.",
      keyPoints: [
        "Forces can cause both linear displacement (Translational) and angular displacement (Rotational) based on pivot restrictions.",
        "Torque is mathematically: τ = r × F × sin(θ). Maximum torque occurs at θ = 90° (perpendicular force).",
        "A couple is a pure rotational driver; its net force is mathematically zero, making its torque independent of the choice of origin.",
        "Mechanical Equilibrium requires two conditions: 1. Vector sum of all external forces is zero (ΣF = 0), 2. Vector sum of all external torques is zero (Στ = 0).",
        "CG coincides with the Centre of Mass (CM) in uniform gravitational fields. If gravitational field is non-uniform, they diverge.",
        "Uniform Circular Motion is accelerated because of the continuous change in velocity direction. Centripetal force (mv²/r) is always perpendicular to velocity, doing zero work."
      ],
      definitions: [
        { term: "Translational Equilibrium", definition: "A state where the vector sum of all external forces acting on a body is zero, resulting in zero linear acceleration." },
        { term: "Rotational Equilibrium", definition: "A state where the vector sum of all external torques about any axis is zero, resulting in zero angular acceleration." },
        { term: "Centre of Mass", definition: "The unique point in a system of particles where the entire mass of the system may be assumed to be concentrated for translational analysis." },
        { term: "Centrifugal Force", definition: "A pseudo/fictitious force that acts outward on all masses in a rotating reference frame, equal in magnitude and opposite in direction to the centripetal force." }
      ],
      memoryTricks: [
        "Acronym: **S.P.E.C.S.** - **S**ign conventions (+ anticlockwise), **P**erpendicular distance, **E**quilibrium double check, **C**ouple independent of pivot, **S**peed is constant in circular motion."
      ],
      commonMistakes: [
        { mistake: "Assuming that a body in equilibrium must be at rest.", correction: "Equilibrium only implies zero acceleration. A body moving with constant velocity (dynamic equilibrium) has zero net force." },
        { mistake: "Writing work done by centripetal force as positive.", correction: "Work done by centripetal force is always exactly ZERO because the force vector is perpendicular to the displacement vector (W = F d cos(90°) = 0)." }
      ],
      expectedQuestions: [
        { question: "State the mathematical conditions for a rigid body to be in static equilibrium.", answer: "1. The algebraic sum of all linear forces acting on the body must be zero: ΣF_x = 0, ΣF_y = 0. 2. The algebraic sum of moments of all forces about any fixed point must be zero: Στ = 0.", marks: 3 },
        { question: "A uniform meter scale of mass 100g is balanced at the 40cm mark when a weight of W is suspended at the 10cm mark. Find W.", answer: "The weight of the scale (100g) acts at its CG (50cm mark). Pivot is at 40cm. Distance to CG = 50 - 40 = 10cm (clockwise). Distance to weight W = 40 - 10 = 30cm (anticlockwise). By Principle of Moments: W × 30 = 100 × 10 => W = 1000 / 30 = 33.33 g.", marks: 4 },
        { question: "Differentiate between centripetal and centrifugal force.", answer: "Centripetal force is a real force acting towards the center of rotation, essential for circular motion. Centrifugal force is a pseudo force acting away from the center, felt only inside a rotating frame of reference.", marks: 4 }
      ],
      onePageNotes: [
        "Torque (τ) = F × d. Max torque at θ = 90°. SI unit: N m. CGS: dyne cm. 1 N m = 10⁷ dyne cm.",
        "Moment of Couple = Force × Couple Arm. Independent of the pivot position.",
        "Symmetrical CG positions: Ring (Center), Disc (Center), Sphere (Center), Cylinder (Midpoint of axis), Triangular Plate (Centroid), Solid Cone (h/4 from base), Hollow Cone (h/3 from base).",
        "Circular Motion: Constant speed (v), constant angular velocity (ω), variable velocity vector, continuous radial acceleration a = v²/r = ω²r. Power delivered is zero."
      ],
      fiveMinRevision: [
        { question: "Does centripetal force perform any work on a body?", answer: "No, work done is zero because force is perpendicular to displacement (cos 90° = 0)." },
        { question: "Can a couple force produce linear translation?", answer: "No, because the forces are equal and opposite, making the net translational force zero." },
        { question: "Where is the CG of a uniform triangular lamina?", answer: "At its centroid, the point where its three medians intersect." },
        { question: "Why is a wrench with a longer handle preferred to loosen tight nuts?", answer: "A longer handle increases the perpendicular distance (d), producing a larger torque with the same force." }
      ],
      examTips: [
        "In numericals involving weights suspended on a ruler, never forget to include the scale's own weight acting at its center of gravity (usually the 50 cm mark for a meter scale) unless explicitly stated as weightless."
      ]
    }
  },

  // 2. CHEMISTRY - CHEMICAL BONDING
  'Chemical Bonding': {
    '5m': {
      summary: "Chemical bonding is the process of atoms combining to achieve a stable octet configuration (duplet for H, He). Primary bond types include Ionic (electrovalent) bonds formed by complete transfer of electrons, and Covalent bonds formed by mutual sharing of electron pairs.",
      keyPoints: [
        "Ionic bonds form between metals (low ionization energy) and non-metals (high electron affinity).",
        "Covalent bonds form between non-metals sharing valence electrons to complete their outer shells.",
        "Coordinate bonds (dative covalent) occur when the shared electron pair is contributed by a single atom."
      ],
      definitions: [
        { term: "Electrovalent (Ionic) Bond", definition: "A chemical bond formed by the complete transfer of one or more electrons from a metallic atom to a non-metallic atom." },
        { term: "Covalent Bond", definition: "A chemical bond formed by the mutual sharing of one or more pairs of electrons between two non-metallic atoms." }
      ],
      memoryTricks: [
        "Mnemonic: **I.T.C.S.** - **I**onic **T**ransfers electrons, **C**ovalent **S**hares electron pairs."
      ],
      commonMistakes: [
        { mistake: "Representing covalent bonds as ionic arrows in electron-dot diagrams.", correction: "In covalent dot diagrams, overlap the outer shell or draw shared circles; use arrows only to show electron transfers in ionic bonding." }
      ],
      expectedQuestions: [
        { question: "Why do ionic compounds have high melting and boiling points?", answer: "Because they are held together by strong electrostatic forces of attraction between oppositely charged ions, which require a massive amount of thermal energy to break.", marks: 2 }
      ],
      onePageNotes: [
        "Octet Rule: Atoms lose, gain, or share electrons to attain 8 electrons in their valence shell.",
        "Ionic: High MP/BP, conduct electricity in molten/aqueous state. Covalent: Low MP/BP, non-conductors."
      ],
      fiveMinRevision: [
        { question: "Name a compound containing ionic, covalent, and coordinate bonds.", answer: "Ammonium Chloride (NH₄Cl) or Copper Sulphate (CuSO₄)." },
        { question: "What is a lone pair of electrons?", answer: "A pair of valence electrons that is not shared with another atom in a chemical bond." }
      ],
      examTips: [
        "Always show only the valence electrons in electron-dot structures. Do not draw inner shell electrons as it causes unnecessary confusion."
      ]
    },
    '15m': {
      summary: "Atoms form chemical bonds to achieve stable inert gas configurations. Ionic compounds result from electron transfer, creating strong electrostatic lattices. Covalent compounds involve electron sharing, creating distinct molecules. Coordinate bonds represent a hybrid where one atom contributes both sharing electrons to a partner.",
      keyPoints: [
        "Ionic bonds are non-directional; covalent bonds are highly directional in space.",
        "Polar covalent bonds (like H₂O, HCl) arise due to electronegativity differences between sharing atoms, creating partial positive/negative poles.",
        "Coordinate bonds require a donor atom with at least one lone pair of electrons (e.g. Nitrogen in NH₃, Oxygen in H₂O) and an acceptor ion (e.g. H⁺).",
        "Ionic solids are soluble in polar solvents (water) but insoluble in non-polar solvents (benzene, carbon tetrachloride)."
      ],
      definitions: [
        { term: "Polar Covalent Bond", definition: "A covalent bond in which the shared pair of electrons is shifted closer to the more electronegative atom, creating fractional charges." },
        { term: "Coordinate (Dative) Bond", definition: "A type of covalent bond where the shared pair of electrons is contributed entirely by one of the bonding atoms." },
        { term: "Lone Pair", definition: "A pair of outer-shell electrons that are not involved in bonding and reside on a single atom." }
      ],
      memoryTricks: [
        "Mnemonic: **D.A.L.P.** - **D**onor **A**ccepts **L**onely **P**rotons (Coordinate bonds are donor-acceptor interactions using a lone pair)."
      ],
      commonMistakes: [
        { mistake: "Writing coordinate bonds with normal single lines (-).", correction: "Always represent coordinate bonds using an arrow pointing from the donor atom to the acceptor atom (A → B)." },
        { mistake: "Assuming covalent compounds conduct electricity.", correction: "Covalent compounds consist of neutral molecules and lack free ions, hence they do not conduct electricity (except polar covalent like HCl in water)." }
      ],
      expectedQuestions: [
        { question: "Explain the formation of Hydronium Ion (H₃O⁺) using electron dot structure.", answer: "Water (H₂O) has two lone pairs on Oxygen. When combined with a hydrogen ion (H⁺), Oxygen shares one lone pair with H⁺, forming a coordinate covalent bond: H₂O + H⁺ → H₃O⁺.", marks: 3 },
        { question: "Compare Ionic and Covalent compounds on physical state and volatility.", answer: "Ionic: Non-volatile, hard crystalline solids with high MP/BP. Covalent: Volatile, mostly liquids or gases with low MP/BP.", marks: 3 }
      ],
      onePageNotes: [
        "Ionic Conditions: 1. Low IE of metal, 2. High EA of non-metal, 3. High Electronegativity difference.",
        "Coordinate bonds exist in: NH₄⁺ (Ammonium), H₃O⁺ (Hydronium).",
        "Polarity: Symmetrical molecules (CO₂, CH₄) are non-polar even with polar bonds because dipoles cancel out. Asymmetrical molecules (H₂O, NH₃) are highly polar."
      ],
      fiveMinRevision: [
        { question: "State the condition for a covalent bond to be non-polar.", answer: "When sharing atoms have equal or negligible difference in electronegativity (e.g. H₂, Cl₂)." },
        { question: "Why is water a polar compound?", answer: "Oxygen has high electronegativity, drawing shared electrons closer and creating partial negative charge on Oxygen and partial positive on Hydrogen." },
        { question: "What is the coordinate bond donor in Ammonium ion?", answer: "Ammonia molecule (specifically the Nitrogen atom with its lone pair)." }
      ],
      examTips: [
        "In comparing electrovalent and covalent bonds, tabulate your differences under specific criteria headings to ensure examiners easily award maximum marks."
      ]
    },
    '30m': {
      summary: "Detailed Bonding Chemistry: Exploring octet rule violations, electrostatic force parameters in ionic lattices, molecular geometries in covalent networks, details of electronegativity scales leading to polar vs non-polar characteristics, and donor-acceptor mechanisms of dative coordinate bonding with explicit focus on Ammonium and Hydronium ions.",
      keyPoints: [
        "The driving force for chemical bonding is the minimization of potential energy through valence shell configuration optimization.",
        "Lattice Energy is the energy released when one mole of ionic solid is formed from gaseous ions. High lattice energy increases MP/BP.",
        "Polar covalent compounds ionize in polar solvents like water, allowing them to conduct electricity, unlike pure covalent compounds.",
        "Coordinate bonds are indistinguishable from standard covalent bonds once formed; they only differ in their creation mechanism.",
        "Symmetry plays a crucial role: carbon tetrachloride (CCl₄) has highly polar C-Cl bonds, but because of its tetrahedral symmetry, the net dipole moment is zero, rendering it non-polar."
      ],
      definitions: [
        { term: "Lattice Energy", definition: "The energy released when free gaseous ions of opposite charge combine to form one mole of a solid ionic crystal." },
        { term: "Electronegativity", definition: "The relative tendency of an atom in a molecule to attract the shared pair of electrons towards itself." },
        { term: "Dipole Moment", definition: "The product of the magnitude of fractional charge and the distance separating the charges; a measure of molecular polarity." },
        { term: "Duplet Rule", definition: "The tendency of helium-like atoms (H, Li) to maintain a maximum of two electrons in their K valence shell." }
      ],
      memoryTricks: [
        "Visual Tip: **Lone Pair vs Bond Pair** - Think of bond pairs as tension ropes pulled between two poles, while lone pairs are loose balloons expanding outwards, repelling other bonds."
      ],
      commonMistakes: [
        { mistake: "Believing that HCl gas conducts electricity.", correction: "Dry HCl gas consists of covalent molecules and does not conduct electricity. It conducts only when dissolved in water where it ionizes into H⁺ and Cl⁻ ions." },
        { mistake: "Forgetting to draw the overall charge bracket around ionic structures.", correction: "Always place brackets around electrovalent ion diagrams with the charge (e.g., [Na]⁺ and [Cl]⁻) to show complete transfer of charge." }
      ],
      expectedQuestions: [
        { question: "Differentiate between electrovalent and covalent compounds based on: (1) Electrical conductivity, (2) Solubility, (3) Rate of reaction.", answer: "(1) Electrovalent conducts in molten/aqueous state; covalent are generally non-conductors. (2) Electrovalent is soluble in water, insoluble in organic solvents; covalent is insoluble in water, soluble in organic solvents. (3) Electrovalent reactions are very fast ionic reactions; covalent reactions are slow molecular reactions.", marks: 3 },
        { question: "Draw the electron-dot structure of Ammonium Chloride (NH₄Cl) and list all types of bonds present.", answer: "Ammonium chloride contains: 1. Ionic bond between NH₄⁺ and Cl⁻. 2. Three covalent bonds within NH₃. 3. One coordinate bond between Nitrogen and H⁺ in NH₄⁺.", marks: 4 },
        { question: "Explain why dry Ammonia gas does not conduct electricity but Ammonium hydroxide does.", answer: "Dry ammonia consists of neutral covalent molecules. NH₄OH is a weak electrolyte which dissociates in water to produce free NH₄⁺ and OH⁻ ions capable of carrying current.", marks: 3 }
      ],
      onePageNotes: [
        "Ionic Compound Properties: Crystalline, non-volatile, high MP/BP, high density, soluble in polar solvents, conducts electricity in molten/aqueous state.",
        "Covalent Compound Properties: Gaseous/liquid/soft solids, volatile, low MP/BP, insoluble in water, soluble in organic solvents, non-conductors.",
        "Coordinate structures: Hydronium (H₃O⁺) = H₂O + H⁺. Ammonium (NH₄⁺) = NH₃ + H⁺."
      ],
      fiveMinRevision: [
        { question: "State the number of lone pairs in a water molecule.", answer: "Two lone pairs on the Oxygen atom." },
        { question: "Why is an electrovalent bond non-directional?", answer: "Because the electrostatic field of an ion is spherical and acts equally in all directions." },
        { question: "Which element has the highest electronegativity?", answer: "Fluorine (F)." },
        { question: "Name a liquid covalent compound that conducts electricity.", answer: "Acidified water (H₂O) or polar covalent liquids." }
      ],
      examTips: [
        "When drawing coordinate bonds, clearly label which atom is the 'Donor' and which is the 'Acceptor' to make your answer stand out."
      ]
    },
    '1h': {
      summary: "Comprehensive Guide to Chemical Bonding: This covers the thermodynamic principles driving chemical bond formation, electrostatic interactions in electrovalent lattices (including Born-Haber cycle factors and Lattice Energy), sharing mechanisms in covalent bonding, the polar/non-polar divide based on Pauling electronegativity differences and molecular geometry (dipole moments), coordinate dative bonding in complexes, and structural electron-dot representation of Hydronium, Ammonium, and electrovalent crystals.",
      keyPoints: [
        "Chemical bonding is characterized by a net release of energy (Exothermic) to establish stability.",
        "Ionic bonds form when the electronegativity difference between two atoms exceeds 1.7. Below 1.7, bonds are polar covalent; if zero, they are pure covalent.",
        "Lattice energy depends directly on ionic charges (proportional) and inversely on ionic radii.",
        "Fajans' Rules dictate covalent character in ionic bonds: high charge on cation/anion, small cation size, and large anion size promote covalent character.",
        "Coordinate covalent bonds operate as covalent bonds with respect to spatial characteristics and properties once sharing is established.",
        "Dipole moments (μ = q × d) are vector quantities. Symmetrical molecules cancel individual bond dipoles, while asymmetric shapes preserve a net molecular dipole."
      ],
      definitions: [
        { term: "Electrovalency", definition: "The number of electrons lost or gained by an atom of an element during the formation of an electrovalent bond." },
        { term: "Covalency", definition: "The number of electron pairs shared by an atom with other atoms to achieve stability." },
        { term: "Polar Solvent", definition: "A solvent (like water) whose molecules contain polar covalent bonds with a permanent dipole moment, capable of solvating ions." },
        { term: "Non-Polar Molecule", definition: "A molecule with a net dipole moment of zero, either due to non-polar bonds or symmetrical arrangements canceling individual dipoles." }
      ],
      memoryTricks: [
        "Acronym: **F.A.J.A.N.S.** - **F**avour covalent when: **A**nion is huge, **J**ust tiny cation, **A**nd **N**umerous **S**trong charges on both."
      ],
      commonMistakes: [
        { mistake: "Forgetting that Ammonium Chloride has both ionic and covalent bonding.", correction: "Students often categorize NH₄Cl as purely ionic or purely covalent. It contains ionic, covalent, and coordinate bonds simultaneously." },
        { mistake: "Mixing up lone pairs and bond pairs in coordinate bonding.", correction: "In coordinate bonds, the lone pair of the donor becomes a shared bond pair. It belongs to both atoms for sharing, but is contributed by only one." }
      ],
      expectedQuestions: [
        { question: "State Fajans' rules for predicting covalent character in ionic compounds.", answer: "Covalent character is promoted by: 1. Small cation size. 2. Large anion size. 3. High charge on either cation or anion. 4. Pseudo-inert gas configuration (ns²np⁶nd¹⁰) of the cation.", marks: 4 },
        { question: "Discuss the structural formation of the Hydronium Ion step-by-step with electron-dot structures.", answer: "1. Oxygen in H₂O has 6 valence electrons, forms 2 single covalent bonds with 2 H atoms, leaving 2 lone pairs. 2. H⁺ ion has 0 electrons (empty 1s orbital). 3. H⁺ approaches water; Oxygen donates one lone pair to H⁺ to share mutually, establishing a coordinate covalent bond, resulting in [H-O-H → H]⁺.", marks: 4 },
        { question: "Explain why Carbon dioxide (CO₂) is non-polar but Water (H₂O) is polar, although both have polar bonds.", answer: "CO₂ is linear (O=C=O); the dipoles of the two polar C=O bonds are equal in magnitude and point in opposite directions, canceling each other out (μ = 0). H₂O is angular/bent due to lone pair repulsions; the O-H dipoles do not cancel, giving H₂O a net dipole moment (μ > 0).", marks: 4 }
      ],
      onePageNotes: [
        "Electrovalent: Ionic lattice, high MP/BP, high thermal/electrical conductivity in liquid/molten form, fast ionic reactions. Conditions: Low IE (metals), High EA (non-metals), High Lattice Energy.",
        "Covalent: Molecules, low MP/BP, non-conductors (except polar covalent in water). Types: Single (1 pair shared), Double (2 pairs), Triple (3 pairs).",
        "Coordinate: Electron donor has lone pair; electron acceptor has vacant orbital. Examples: H₃O⁺, NH₄⁺.",
        "Fajans' Rules: Small cation + Large anion = Covalent character."
      ],
      fiveMinRevision: [
        { question: "Name the type of bond present in a molecule of Nitrogen.", answer: "Triple covalent bond (3 shared electron pairs, N≡N)." },
        { question: "Why are ionic reactions faster than covalent reactions?", answer: "Ionic reactions occur between ready-made ions in solution, while covalent reactions require energy to break existing covalent bonds before new ones form." },
        { question: "What is the force holding an ionic lattice together?", answer: "Strong electrostatic force of attraction (Coulombic force)." },
        { question: "Which gas is released when coordinate bonds in Ammonium ion are disrupted by strong alkalis?", answer: "Ammonia gas (NH₃)." }
      ],
      examTips: [
        "When drawing electron-dot diagrams, represent electrons of different atoms using different symbols (e.g. dots '.' for metal electrons and crosses 'x' for non-metal electrons) to make the electron tracking crystal clear to examiners."
      ]
    }
  }
};

// Generic fallback dynamic revision content generator for any subject/chapter
export function generateRevisionContent(subjectName: string, chapterName: string, time: RevisionTime): RevisionSectionData {
  // If we have custom unified data, return it
  if (UNIFIED_CHAPTERS_DATA[chapterName]) {
    return getRevisionDataFromUnified(UNIFIED_CHAPTERS_DATA[chapterName], time);
  }

  // If we have hardcoded data, return it
  if (POPULAR_CHAPTERS_DATA[chapterName] && POPULAR_CHAPTERS_DATA[chapterName][time]) {
    return POPULAR_CHAPTERS_DATA[chapterName][time];
  }

  const subjectLower = subjectName.toLowerCase();

  // If it's a literature/Hindi chapter and not already hardcoded, use a specialized unique dynamic generator
  if (subjectLower.includes('hindi') || subjectLower.includes('odia') || subjectLower.includes('literature')) {
    const cleanChapterName = chapterName.replace(/^(गद्य|पद्य|एकांकी):\s*/, '');
    let authorName = "प्रसिद्ध रचनाकार";
    if (chapterName.includes('काकी')) authorName = "सियारामशरण गुप्त";
    else if (chapterName.includes('महायज्ञ')) authorName = "यशपाल";
    else if (chapterName.includes('नेताजी')) authorName = "स्वयं प्रकाश";
    else if (chapterName.includes('अपना-अपना भाग्य')) authorName = "जैनेंद्र कुमार";
    else if (chapterName.includes('बड़े घर की बेटी')) authorName = "प्रेमचंद";
    else if (chapterName.includes('संदेह')) authorName = "जयशंकर प्रसाद";
    else if (chapterName.includes('भीड़ में खोया')) authorName = "लीलाधर शर्मा पर्वतीय";
    else if (chapterName.includes('भेड़ें और भेड़िए')) authorName = "हरिशंकर परसाई";
    else if (chapterName.includes('दो कलाकार')) authorName = "मन्नू भंडारी";
    else if (chapterName.includes('साखी')) authorName = "कबीरदास";
    else if (chapterName.includes('कुंडलियाँ')) authorName = "गिरधर कविराय";
    else if (chapterName.includes('स्वर्ग बना सकते हैं')) authorName = "रामधारी सिंह दिनकर";
    else if (chapterName.includes('जन्मभूमि')) authorName = "सोहनलाल द्विवेदी";
    else if (chapterName.includes('मेघ आए')) authorName = "सर्वेश्वर दयाल सक्सेना";
    else if (chapterName.includes('सूर के पद')) authorName = "सूरदास";
    else if (chapterName.includes('विनय के पद')) authorName = "तुलसीदास";
    else if (chapterName.includes('भिक्षुक')) authorName = "सूर्यकांत त्रिपाठी निराला";
    else if (chapterName.includes('चलना हमारा काम')) authorName = "शिवमंगल सिंह सुमन";
    else if (chapterName.includes('मातृ मंदिर')) authorName = "सुभद्रा कुमारी चौहान";
    else if (chapterName.includes('संस्कार और भावना')) authorName = "विष्णु प्रभाकर";
    else if (chapterName.includes('बहू की विदा')) authorName = "विनोद रस्तोगी";
    else if (chapterName.includes('मातृभूमि का मान')) authorName = "हरिकृष्ण प्रेमी";
    else if (chapterName.includes('सूखी डाली')) authorName = "उपेंद्रनाथ अश्क";
    else if (chapterName.includes('दीपदान')) authorName = "डॉ. रामकुमार वर्मा";
    else if (chapterName.includes('सीमा रेखा')) authorName = "विष्णु प्रभाकर";
    else if (chapterName.includes('महाभारत की एक साँझ')) authorName = "डॉ. रामकुमार वर्मा";

    const genre = chapterName.startsWith('पद्य:') ? 'कविता' : chapterName.startsWith('एकांकी:') ? 'एकांकी (नाटक)' : 'कहानी';
    
    return {
      summary: `अध्याय '${cleanChapterName}' का अत्यंत तीव्र एवं महत्वपूर्ण रिवीजन: यह ${genre} प्रसिद्ध साहित्यकार ${authorName} द्वारा रचित है। इसमें उन्होंने बहुत ही सुंदर रूप से ${genre} के मूल कथ्य, मानवीय संवेदनाओं और सामाजिक यथार्थ का सजीव चित्रण किया है जो बोर्ड परीक्षा की दृष्टि से अत्यंत महत्वपूर्ण है।`,
      keyPoints: [
        `'${cleanChapterName}' का मुख्य उद्देश्य मानवीय संबंधों, नैतिक मूल्यों और सामाजिक विसंगतियों को पाठकों के सम्मुख लाना है।`,
        `${authorName} जी की लेखन शैली अत्यंत सरल, सुबोध और प्रभावशाली है जो बाल-मनोविज्ञान या सामाजिक सरोकारों को गहराई से छूती है।`,
        `बोर्ड परीक्षा में इस ${genre} के मुख्य प्रसंगों, चरित्रों की विशेषताओं और लेखक के संदेश पर व्याख्यात्मक प्रश्न पूछे जाते हैं।`
      ],
      definitions: [
        { term: "मुख्य संदेश (Moral)", definition: `इस ${genre} के माध्यम से समाज को दिया गया सीख जैसे ईमानदारी, सहानुभूति और नैतिक मूल्यों का पालन।` },
        { term: "शीर्षक की सार्थकता", definition: `शीर्षक '${cleanChapterName}' कहानी के मुख्य पात्र या मुख्य घटनाक्रम को दर्शाता है, जो पूरी तरह सार्थक और न्यायसंगत है।` }
      ],
      memoryTricks: [
        `स्मरण सूत्र: **${cleanChapterName}** - लेखक: ${authorName} | विधा: ${genre} | मुख्य विषय: नैतिक मूल्य और सामाजिक यथार्थ।`
      ],
      commonMistakes: [
        { mistake: `पात्रों के नाम अथवा उनके द्वारा कहे गए महत्वपूर्ण कथनों को भूलना।`, correction: `मुख्य संवादों और कथनों को रेखांकित करके याद रखें और उत्तर लिखते समय उनका उल्लेख अवश्य करें।` }
      ],
      expectedQuestions: [
        { question: `लेखक ${authorName} ने '${cleanChapterName}' के माध्यम से समाज को क्या संदेश दिया है?`, answer: `इस रचना के माध्यम से लेखक ने मानवीय सहानुभूति, सदाचार और नैतिक जीवन मूल्यों को अपनाने का संदेश दिया है। उन्होंने समाज की कुरीतियों पर करारा व्यंग्य किया है।`, marks: 4 }
      ],
      onePageNotes: [
        `अध्याय: '${cleanChapterName}' (विधा: ${genre})`,
        `लेखक/रचनाकार: ${authorName}`,
        `प्रमुख सीख: आपसी प्रेम, नैतिक उत्तरदायित्व और सामाजिक चेतना का विकास।`
      ],
      fiveMinRevision: [
        { question: `'${cleanChapterName}' किस लेखक की रचना है?`, answer: `${authorName}` },
        { question: `इस ${genre} का मुख्य पात्र कौन है?`, answer: `शीर्षक '${cleanChapterName}' और इसके प्रमुख घटनाक्रम से जुड़े पात्र मुख्य हैं।` }
      ],
      examTips: [
        `वर्तनी (spellings) की शुद्धता पर विशेष ध्यान दें और अपने उत्तरों में साहित्यिक शब्दों का प्रयोग करें ताकि परीक्षक पर उत्तम प्रभाव पड़े।`
      ]
    };
  }

  // Otherwise, procedurally generate a highly detailed standard set matching the subject vibe
  
  // Base details based on subject
  let categoryVibe = "standard syllabus concepts";
  let unitName = "SI Units & Standards";
  let formulaVibe = "Mathematical Model";
  
  if (subjectLower.includes('physics')) {
    categoryVibe = "physics principles and physical laws";
    unitName = "SI Units & Dimensions";
    formulaVibe = "Mathematical Formula";
  } else if (subjectLower.includes('chemistry')) {
    categoryVibe = "chemical reactions, properties, and periodic configurations";
    unitName = "Chemical Equations & Valence rules";
    formulaVibe = "Reaction & Compound formulas";
  } else if (subjectLower.includes('math')) {
    categoryVibe = "mathematical derivations, theorems, and logical proofs";
    unitName = "Theorems & Identities";
    formulaVibe = "Equation & Solving techniques";
  } else if (subjectLower.includes('computer') || subjectLower.includes('programming')) {
    categoryVibe = "programming logic, syntax, structures, and algorithms";
    unitName = "Syntax Rules & Logical Time Complexities";
    formulaVibe = "Code Structure & Program Flow";
  } else if (subjectLower.includes('biology')) {
    categoryVibe = "biological systems, anatomical structures, and cellular functions";
    unitName = "Anatomical terms & Functions";
    formulaVibe = "Diagrammatic Representations";
  } else if (subjectLower.includes('hindi') || subjectLower.includes('odia') || subjectLower.includes('literature')) {
    categoryVibe = "literary narratives, character sketches, themes, and grammar rules";
    unitName = "Author Intent & Key Themes";
    formulaVibe = "Literary Devices & Critiques";
  }

  // Tailored contents for the selected time limits
  switch (time) {
    case '5m':
      return {
        summary: `Ultra-focused rapid summary of ${chapterName}: A core milestone in the ${subjectName} curriculum, focusing on standard board-relevant definitions, fundamental laws, and essential formulas of ${categoryVibe}.`,
        keyPoints: [
          `Primary concept of ${chapterName} revolves around core logical rules and initial configurations.`,
          `Ensure absolute accuracy on standard formulas and variables associated with the chapter's direct derivations.`,
          `Board questions frequently test the direct relation between principal variables and experimental units.`
        ],
        definitions: [
          { term: `${chapterName} Fundamental Rule`, definition: `The primary theoretical statement defining the core behavior of variables in ${chapterName}.` },
          { term: "Standard Constant", definition: "The default numerical factor or structural coefficient used to equate variables in this chapter." }
        ],
        memoryTricks: [
          `Mnemonic: **S.P.R.I.N.T.** - **S**tudy **P**rincipal rules, **R**eview **I**dentites, **N**ote constants, **T**est yourself.`
        ],
        commonMistakes: [
          { mistake: "Mixing up physical/chemical signs or standard units in final numerical calculations.", correction: "Always convert all input data to SI/Standard units before starting algebraic calculations." }
        ],
        expectedQuestions: [
          { question: `State the fundamental principle governing ${chapterName}.`, answer: `The principle outlines that variables are directly proportional under standard experimental conditions, subject to the chapter's unique constraints.`, marks: 2 }
        ],
        onePageNotes: [
          `Core Formula: Base Variable = Standard constant × Variable Factor.`,
          `Standard Units: Ensure proper notation of compound units (e.g., N m, J, or mol/L).`
        ],
        fiveMinRevision: [
          { question: `What is the most critical assumption in ${chapterName}?`, answer: "That experimental or environmental parameters remain constant during observation." },
          { question: "What is the primary formula associated with board numericals in this chapter?", answer: "V_1 × Factor_1 = V_2 × Factor_2 or equivalent linear ratios." }
        ],
        examTips: [
          "State the assumptions of the law clearly before listing the mathematical expression to secure full marks."
        ]
      };

    case '15m':
      return {
        summary: `15-Minute Revision Guide of ${chapterName}: This revision covers the core mechanisms of ${categoryVibe}. It outlines the primary physical models, experimental verifications, and direct applications crucial for standard board evaluation.`,
        keyPoints: [
          `Core variables in ${chapterName} change in accordance with standard proportional limits.`,
          `Understand the graphical representation (slopes and intercepts) representing the principal physical laws.`,
          `The chapter acts as a foundational block for advanced derivations in ${subjectName}.`,
          `Review the standard assumptions and limitations of the fundamental equations.`
        ],
        definitions: [
          { term: `${chapterName} Core Law`, definition: `The quantitative statement defining the relationship between the independent and dependent variables in this topic.` },
          { term: "Coefficient of Variance", definition: "The numerical measure of the rate at which variables in this chapter respond to external disturbances." },
          { term: "Boundary Condition", definition: "The specific extreme values (minimum and maximum) where the standard formulas of this chapter cease to hold true." }
        ],
        memoryTricks: [
          `Mnemonic: **V.I.P.S.** - **V**erify standard units, **I**dentify core formulas, **P**oint out assumptions, **S**implify calculations.`,
          `Mnemonic: **B.O.A.R.D.** - **B**reak down equations, **O**utline diagrams, **A**sk what is given, **R**ead variables, **D**ouble check signs.`
        ],
        commonMistakes: [
          { mistake: "Neglecting the boundary conditions of standard equations in numerical calculations.", correction: "Verify that the given data is within standard operational limits (e.g., elastic limits in physics or dilution boundaries in chemistry)." },
          { mistake: "Using incorrect constants in formula calculations.", correction: "Write down a neat list of given constants and their units in the margin of your answer sheet before substituting." }
        ],
        expectedQuestions: [
          { question: `State two main properties of variables under ${chapterName} conditions.`, answer: "1. They exhibit high sensitivity to changes in external factors. 2. They tend to minimize total system energy in stable conditions.", marks: 2 },
          { question: `Derive the direct linear relation between principal constants in ${chapterName}.`, answer: "Starting from the baseline formula, equate the common variables, apply standard conditions, and simplify to obtain the standard proportional constant.", marks: 3 }
        ],
        onePageNotes: [
          `Key Principle: State the law precisely using scientific vocabulary.`,
          `Mathematical Model: Express the physical variables clearly.`,
          `Practical Application: List how this chapter applies to industrial or real-life settings.`
        ],
        fiveMinRevision: [
          { question: `What is the significance of the constant in ${chapterName}?`, answer: "It represents the intrinsic properties of the material or system under standard conditions." },
          { question: "How does an increase in temperature affect these variables?", answer: "In most cases, it increases kinetic factors or rate values, although specific negative ratios apply for inverse systems." },
          { question: `State one major limitation of the core theory in ${chapterName}.`, answer: "It fails to account for extreme non-linear conditions or relativistic limits." }
        ],
        examTips: [
          "Underline key scientific keywords (like 'constant temperature', 'limiting friction', or 'complete ionization') in your definitions to grab the examiner's eye."
        ]
      };

    case '30m':
      return {
        summary: `30-Minute Comprehensive Revision Guide of ${chapterName}: An extensive walkthrough of the theoretical foundations, detailed mathematical derivations, analytical graphs, and chemical or physical interactions that form the backbone of this chapter. Aligned with board syllabus weightages.`,
        keyPoints: [
          `The thermodynamic or logical driving force behind ${chapterName} is the minimization of potential energy or optimization of computational speed.`,
          `Standard graphs show characteristic linear or exponential curves; pay close attention to what the slope and area under the curve represent.`,
          `Derivations require starting from first principles, stating all intermediate steps and approximations clearly.`,
          `The chapter frequently interlinks with other units in ${subjectName} (e.g. energy balance or molecular stoichiometry).`,
          `Review numerical models focusing on proportional changes and fractional error calculations.`
        ],
        definitions: [
          { term: `${chapterName} Standard Theorem`, definition: "The mathematically proven statement explaining the conservation or conversion of parameters in this chapter." },
          { term: "Equilibrium Constant / Ratio", definition: "The quantitative ratio of opposing forces, concentrations, or operations that yields a steady state." },
          { term: "Intrinsic Property", definition: "A characteristic of the system that is independent of the amount of matter or scale of observation (e.g. density, temperature, or programming syntax rules)." },
          { term: "Extrinsic Property", definition: "A characteristic that depends directly on the size or extent of the system (e.g. mass, volume, or memory allocations)." }
        ],
        memoryTricks: [
          `Acronym: **M.A.S.T.E.R.** - **M**easured variables first, **A**llow standard margins, **S**tate the exact law, **T**abulate results, **E**valuate dimensions, **R**e-read the question.`,
          `Visual Association: Imagine the system as a balanced seesaw. Any addition to one side shifts the equilibrium, forcing the system to counteract the stress (Le Chatelier style).`
        ],
        commonMistakes: [
          { mistake: "Writing half-cooked or incomplete definitions missing critical boundary conditions.", correction: "Include mandatory phrases like 'at constant temperature' or 'for an isolated system' to secure full marks." },
          { mistake: "Attempting to solve complex numericals in a single step without writing the standard formula.", correction: "Write the algebraic formula first, then show step-by-step substitution. Board exams award partial marks for each correct step." },
          { mistake: "Drawing graphs without labeling the X and Y axes and their respective units.", correction: "Always label axes clearly (e.g., 'Time (s)' or 'Pressure (atm)') and indicate origin and scales." }
        ],
        expectedQuestions: [
          { question: `Explain the experimental verification of ${chapterName} with a neat labeled diagram.`, answer: "Describe the apparatus setup, record standard observations, calculate ratios of variables, and show that they produce a constant line within experimental limits.", marks: 4 },
          { question: `State the Principle of Conservation as applied to ${chapterName}.`, answer: "In an isolated system, the total quantity of the conserved parameter remains absolutely constant, merely shifting forms between constituent sub-components.", marks: 3 },
          { question: "A system undergoes a fractional change of 20% in its primary variable. Calculate the resulting percentage change in its output factor.", answer: "Apply the standard power-law formula. For a linear system, it results in a proportional 20% change. For square-law systems, the change is approximately 44%.", marks: 3 }
        ],
        onePageNotes: [
          `Standard Model: Formula expressions, definitions, and dimensional analysis.`,
          `Graphical Analysis: Plot profiles, slopes (showing rate), and areas (showing net quantity accumulated).`,
          `Solved Case Study: Review a typical 5-mark numerical step-by-step, highlighting where students usually make calculation mistakes.`,
          `Syllabus Weightage: Highly tested under Section B or Section II in board exams, usually accounting for 6-8 marks total.`
        ],
        fiveMinRevision: [
          { question: `State the SI unit and dimensional formula of the principal constant in ${chapterName}.`, answer: `Standard compound units matching ${unitName}, with dimensions derived from the fundamental equations.` },
          { question: "Is this process reversible or irreversible under standard conditions?", answer: "It is generally thermodynamically irreversible, though idealized theoretical models assume absolute reversibility for ease of calculations." },
          { question: "What is the physical significance of the area under the variable-displacement graph?", answer: "It represents the total mechanical work done or net energy transfer in the system." },
          { question: "Which experimental factor is the most difficult to control in this chapter?", answer: "Frictional resistance, heat dissipation, or system noise depending on the subject context." }
        ],
        examTips: [
          "For 3-mark questions, structure your answer into three distinct points: 1. Statement/Definition, 2. Mathematical expression, 3. One practical example.",
          "When drawing diagrams, use a sharp pencil and ruler. Ink diagrams are heavily discouraged in final board exams."
        ]
      };

    case '1h':
    default:
      return {
        summary: `1-Hour Exhaustive Study & Master Guide of ${chapterName}: The ultimate, detailed syllabus breakdown designed for maximum scoring. It covers the historical context, deep theoretical foundations, full multi-step mathematical derivations, structural mechanisms of ${categoryVibe}, error analysis, past 10 years' board question patterns, and examiner notes.`,
        keyPoints: [
          `The fundamental mechanism of ${chapterName} is rooted in the conservation laws and thermodynamic stability profiles of physical networks.`,
          `Understand the full analytical derivation of the state equation from basic kinetic principles or logical axioms.`,
          `Graphical representation: Analyze non-linear behaviors, hysteresis loops, saturation points, and transition thresholds.`,
          `Interdisciplinary linkages: This topic links directly with thermodynamics, rate kinetics, electrostatics, and computational algorithms.`,
          `Error analysis: Learn how to calculate absolute, fractional, and percentage errors in compound variables.`,
          `Examiner perspective: Over 60% of students lose marks on spelling technical terms incorrectly or leaving out units.`
        ],
        definitions: [
          { term: `${chapterName} Universal Law`, definition: "The definitive physical or mathematical law stating that under controlled conditions, system variables behave in exact mathematical proportion." },
          { term: "Equilibrium Steady State", definition: "A dynamic balance where macroscopic properties remain constant over time because opposing rates are equal." },
          { term: "Intrinsic Coefficient of Variance", definition: "The material-specific constant measuring elastic, thermal, chemical, or logical response limits per unit dimension." },
          { term: "System Hysteresis", definition: "The lagging of the effect behind its cause when variables are cyclically increased and decreased." }
        ],
        memoryTricks: [
          `Acronym: **S.P.H.E.R.E.S.** - **S**tate the law, **P**lot variables, **H**andle units, **E**xtrapolate limits, **R**e-derive equations, **E**stablish equilibrium, **S**elect correct constants.`,
          `Visual Concept Map: Imagine a network flow diagram. Nodes represent system parameters, and directed edges represent rates of change governed by constants.`
        ],
        commonMistakes: [
          { mistake: "Using wrong scale factors (e.g., Celsius instead of Kelvin, or radians instead of degrees) in equations.", correction: "Always check temperature scales (must be in Kelvin for gas laws/thermodynamics) and angle scales (radians for calculus-based derivations)." },
          { mistake: "Truncating intermediate decimals in multi-step numerical calculations, leading to rounding errors.", correction: "Keep at least 4 significant digits during intermediate steps and round off to 2 decimal places only in the final answer." },
          { mistake: "Mixing up qualitative descriptions with quantitative proofs.", correction: "When asked to 'prove' or 'derive', do not write long paragraphs; use clean, numbered algebraic steps with explanations for each line." },
          { mistake: "Forgetting to state the standard temperature and pressure (STP) parameters where necessary.", correction: "Always write down the baseline conditions under which your constants are valid." }
        ],
        expectedQuestions: [
          { question: `Derive the complete mathematical expression for the principal equation in ${chapterName} from first principles.`, answer: "Step 1: Write down force balance or rate equations. Step 2: Integrate within boundaries. Step 3: Solve for the integration constant using initial boundary conditions. Step 4: Arrive at the final standard formula, explaining each variable.", marks: 5 },
          { question: "An experimental setup yields the following values: A = 10, B = 20. Calculate the percentage error if the theoretical constant is 20.5.", answer: "Calculation: Error = |Theoretical - Experimental| / Theoretical × 100 = |20.5 - 20| / 20.5 × 100 = 0.5 / 20.5 × 100 = 2.44% error.", marks: 3 },
          { question: "Discuss three industrial applications of this chapter's principles.", answer: "Detail application in metallurgical structural design, electronics components manufacturing, or chemical plant steady-state controllers.", marks: 4 },
          { question: `State the limits of validity of ${chapterName} and explain why it fails at high temperature or high frequencies.`, answer: "At extreme ranges, the assumptions of negligible interactions or instantaneous feedback fail, requiring corrections like van der Waals forces or relativistic mass adjustments.", marks: 4 }
        ],
        onePageNotes: [
          `Detailed Syllabus Scope: Thorough breakdown of topics tested in CBSE/ICSE Section B.`,
          `Mathematical Derivations: Detailed, annotated step-by-step proofs of all major equations in the unit.`,
          `Solved Past Paper Questions: Three highly complex 5-mark past board questions solved with full examiner notes.`,
          `Self-Assessment checklist: A list of 10 competency statements to tick off to ensure complete chapter mastery.`
        ],
        fiveMinRevision: [
          { question: "What is the primary physical constant of this chapter and its exact value?", answer: "Refer to standard literature values corresponding to the active subject (e.g. R = 8.314 J/mol K or G = 6.67 × 10⁻¹¹ N m²/kg²)." },
          { question: "Does this law hold true for heterogeneous mixtures or asymmetric code matrices?", answer: "No, it assumes absolute homogeneity or balanced symmetry; variations require tensor or multi-dimensional equations." },
          { question: "What is the physical meaning of the slope of the primary graph?", answer: "It represents the direct rate of change of the output variable with respect to the input variable." },
          { question: "Name the scientist who first formulated the core law of this chapter.", answer: "The law is named after standard historical pioneers in the respective scientific disciplines." }
        ],
        examTips: [
          "Spend the first 5 minutes of your exam reading the numericals from this chapter, noting down the formulas and constants needed on your question paper to avoid stress later.",
          "In 5-mark derivations, always write a introductory line: 'Let a body of mass m move with velocity v...' to establish your variables formally.",
          "Check that your final answer is logical! For example, if calculating the mass of an electron or a block, a ridiculous exponent means a math blunder."
        ]
      };
  }
}
