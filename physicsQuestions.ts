export const CURRENT_ELECTRICITY_TOPICS = [
  'Electric Current',
  'Conventional Current',
  'Potential Difference',
  'Ohm\'s Law',
  'Resistance',
  'Resistivity',
  'Factors affecting Resistance',
  'Series Combination of Resistances',
  'Parallel Combination of Resistances',
  'Electrical Power',
  'Electrical Energy',
  'Household Electricity Applications'
];

export interface Question {
  id: string;
  questionText: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  correctAnswer: string;
  options?: string[]; // only for MCQ
  explanation: string;
  topic: string;
}

export const PRE_SEEDED_QUESTIONS: Record<string, Question[]> = {
  mcq: [
    {
      id: 'mcq-1',
      questionText: 'Which of the following is the correct SI unit of specific resistance (resistivity)?',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'ohm-meter',
      options: ['ohm', 'ohm-meter', 'ohm per meter', 'mho'],
      explanation: 'Resistivity (ρ) is calculated from R = ρ(l/A) which gives ρ = RA/l. The units are Ω × m² / m = Ω·m (ohm-meter).',
      topic: 'Resistivity'
    },
    {
      id: 'mcq-2',
      questionText: 'When the length of a uniform metallic wire is doubled and its area of cross-section is halved, its resistance becomes:',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: '4 times',
      options: ['2 times', '4 times', '1/2 times', 'remains unchanged'],
      explanation: 'Since R = ρ(l/A), the new resistance R\' = ρ(2l / (A/2)) = 4 × ρ(l/A) = 4R. Thus, the resistance increases to four times.',
      topic: 'Factors affecting Resistance'
    },
    {
      id: 'mcq-3',
      questionText: 'A wire of resistance 9 ohms is cut into three equal parts and connected in parallel. What is the equivalent resistance of the combination?',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: '1 ohm',
      options: ['3 ohms', '1 ohm', '9 ohms', '27 ohms'],
      explanation: 'Cutting a wire of 9 Ω into 3 equal pieces yields 3 resistors of 3 Ω each. Connecting them in parallel gives 1/Rp = 1/3 + 1/3 + 1/3 = 1 Ω. Hence, Rp = 1 Ω.',
      topic: 'Parallel Combination of Resistances'
    },
    {
      id: 'mcq-4',
      questionText: 'Which material has a negative temperature coefficient of resistance (i.e. resistance decreases with rise in temperature)?',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'Silicon',
      options: ['Copper', 'Silicon', 'Silver', 'Manganin'],
      explanation: 'Silicon is a semiconductor. For semiconductors, a rise in temperature increases the concentration of free charge carriers, which decreases their electrical resistance.',
      topic: 'Factors affecting Resistance'
    }
  ],
  fill: [
    {
      id: 'fill-1',
      questionText: 'The rate of flow of electric charge through any cross-section of a conductor is called __________.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'electric current',
      options: ['electric current', 'potential difference', 'resistance', 'power'],
      explanation: 'Electric current is defined as the rate of flow of charge (I = Q/t).',
      topic: 'Electric Current'
    },
    {
      id: 'fill-2',
      questionText: 'An ammeter used to measure current is always connected in __________ with the circuit component.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'series',
      options: ['series', 'parallel', 'both series and parallel', 'none of these'],
      explanation: 'An ammeter has a very low resistance and must be connected in series to measure the full current passing through a branch without significantly changing its value.',
      topic: 'Household Electricity Applications'
    },
    {
      id: 'fill-3',
      questionText: 'An ideal voltmeter should possess __________ electrical resistance.',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: 'infinite',
      options: ['zero', 'low', 'infinite', 'moderate'],
      explanation: 'A voltmeter is connected in parallel across components and must draw negligible current to measure true voltage. Hence, an ideal voltmeter has infinite resistance.',
      topic: 'Potential Difference'
    }
  ],
  tf: [
    {
      id: 'tf-1',
      questionText: 'State True or False: A safety fuse wire must always be connected in the neutral wire of a household circuit.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'False',
      options: ['True', 'False'],
      explanation: 'A safety fuse wire must always be connected in the live wire. If it is connected in the neutral wire and the fuse blows, the appliance remains connected to the high voltage live terminal, which is highly hazardous.',
      topic: 'Household Electricity Applications'
    },
    {
      id: 'tf-2',
      questionText: 'State True or False: Specific resistance (resistivity) of a wire is independent of its length and thickness.',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: 'True',
      options: ['True', 'False'],
      explanation: 'Specific resistance is a characteristic property of the material of the conductor at a given temperature and does not change when dimensions (length or area) are modified.',
      topic: 'Resistivity'
    }
  ],
  match: [
    {
      id: 'match-1',
      questionText: 'Match the device function: A voltmeter is primarily used for measuring __________.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'Potential Difference',
      options: ['Electric Current', 'Potential Difference', 'Specific Resistance', 'Electric Power'],
      explanation: 'A voltmeter measures the potential difference between two points in an electrical circuit.',
      topic: 'Potential Difference'
    },
    {
      id: 'match-2',
      questionText: 'Match the commercial unit: The Kilowatt-hour (kWh) is the commercial unit of __________.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'Electrical Energy',
      options: ['Electrical Power', 'Electrical Energy', 'Electric Force', 'Electric Current'],
      explanation: 'Kilowatt-hour represents the electrical energy consumed when 1 kilowatt of power is used for 1 hour.',
      topic: 'Electrical Energy'
    }
  ],
  ar: [
    {
      id: 'ar-1',
      questionText: 'Assertion (A): Household appliances are always connected in parallel combination.\nReason (R): In a parallel connection, all appliances operate at the same rated voltage and can be controlled independently by their respective switches.',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: 'Both A and R are true and R is correct explanation of A',
      options: [
        'Both A and R are true and R is correct explanation of A',
        'Both A and R are true but R is not correct explanation of A',
        'A is true but R is false',
        'A is false but R is true'
      ],
      explanation: 'In parallel circuits, every branch receives the source potential difference, and if one appliance is turned off, the remaining branches continue to function normally.',
      topic: 'Household Electricity Applications'
    },
    {
      id: 'ar-2',
      questionText: 'Assertion (A): Constantan or Manganin is used for making standard electrical resistance coils.\nReason (R): These alloys possess high resistivity and a very low temperature coefficient of resistance.',
      marks: 1,
      difficulty: 'Medium',
      correctAnswer: 'Both A and R are true and R is correct explanation of A',
      options: [
        'Both A and R are true and R is correct explanation of A',
        'Both A and R are true but R is not correct explanation of A',
        'A is true but R is false',
        'A is false but R is true'
      ],
      explanation: 'Standard coils require resistance values that do not change significantly with small temperature variations caused by current passage. Manganin has a negligible temperature coefficient.',
      topic: 'Factors affecting Resistance'
    }
  ],
  vshort: [
    {
      id: 'vshort-1',
      questionText: 'Define the SI unit of electric current (ampere) in terms of charge flow.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'One ampere is the current flowing through a conductor when one coulomb of electric charge passes through any cross-section in exactly one second (1 A = 1 C / 1 s).',
      explanation: 'Applying the equation I = Q/t, when Q = 1 C and t = 1 s, the current is 1 A.',
      topic: 'Electric Current'
    },
    {
      id: 'vshort-2',
      questionText: 'Name the material used as a heating element in household electrical appliances like geysers and toasters.',
      marks: 1,
      difficulty: 'Easy',
      correctAnswer: 'Nichrome (an alloy of nickel and chromium).',
      explanation: 'Nichrome has high resistivity, a high melting point, and does not oxidize (burn) easily at high temperatures.',
      topic: 'Household Electricity Applications'
    }
  ],
  short: [
    {
      id: 'short-1',
      questionText: 'State Ohm\'s Law and specify its mathematical form.',
      marks: 2,
      difficulty: 'Easy',
      correctAnswer: 'Ohm\'s Law states that the current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided the temperature and other physical conditions of the conductor remain constant. Mathematically, V = IR.',
      explanation: 'For Ohm\'s Law to hold, physical conditions like temperature, mechanical strain, and material structure must remain strictly constant.',
      topic: 'Ohm\'s Law'
    },
    {
      id: 'short-2',
      questionText: 'Differentiate between Ohmic and Non-ohmic resistors with one example of each.',
      marks: 2,
      difficulty: 'Medium',
      correctAnswer: 'Ohmic resistors obey Ohm\'s law (their V-I graph is a straight line passing through the origin), e.g., copper wire. Non-ohmic resistors do not obey Ohm\'s law (their V-I graph is non-linear), e.g., semiconductor diode or vacuum tube.',
      explanation: 'Ohmic resistors maintain constant resistance. Non-ohmic resistors have dynamic, variable resistance depending on applied voltage.',
      topic: 'Resistance'
    },
    {
      id: 'short-3',
      questionText: 'What is a superconductor? Give one example.',
      marks: 2,
      difficulty: 'Medium',
      correctAnswer: 'A superconductor is a material whose electrical resistance drops to exactly zero when it is cooled below a certain critical temperature. Example: Mercury behaves as a superconductor below 4.2 K.',
      explanation: 'At critical temperatures, lattice-electron scattering drops to zero, allowing continuous charge flow without energy dissipation.',
      topic: 'Resistance'
    },
    {
      id: 'short-4',
      questionText: 'State two factors on which the internal resistance of an electrochemical cell depends.',
      marks: 2,
      difficulty: 'Medium',
      correctAnswer: '1. The distance between the electrodes (directly proportional).\n2. The common area of electrodes immersed in the electrolyte (inversely proportional).',
      explanation: 'Increased distance raises ion path lengths, increasing resistance. Larger surface area provides more paths, decreasing resistance.',
      topic: 'Potential Difference'
    }
  ],
  long: [
    {
      id: 'long-1',
      questionText: 'Derive the expression for the equivalent resistance of three resistors R1, R2, and R3 connected in parallel.',
      marks: 4,
      difficulty: 'Medium',
      correctAnswer: 'In a parallel combination, the potential difference V across each resistor is the same. The total current I drawn from the source is the sum of currents through individual branches: I = I1 + I2 + I3. According to Ohm\'s law, I = V/Rp, I1 = V/R1, I2 = V/R2, and I3 = V/R3. Substituting these values gives: V/Rp = V/R1 + V/R2 + V/R3. Dividing the entire equation by V yields: 1/Rp = 1/R1 + 1/R2 + 1/R3.',
      explanation: 'The reciprocal of the equivalent resistance of resistors in parallel equals the sum of the reciprocals of the individual resistances.',
      topic: 'Parallel Combination of Resistances'
    },
    {
      id: 'long-2',
      questionText: 'State three differences between the electromotive force (EMF) and the terminal potential difference of an electrical cell.',
      marks: 3,
      difficulty: 'Medium',
      correctAnswer: '1. EMF is the potential difference across the cell terminals in an open circuit (no current is drawn), while terminal voltage is measured in a closed circuit (when current is drawn).\n2. EMF is independent of the external circuit resistance, whereas terminal voltage depends on the external resistance.\n3. EMF is a characteristic property of the cell and is always greater than the terminal voltage when discharging (EMF = V + lost volts).',
      explanation: 'Terminal voltage includes the internal IR drop of the cell, while EMF is the total energetic potential generated.',
      topic: 'Potential Difference'
    }
  ],
  reason: [
    {
      id: 'reason-1',
      questionText: 'Give a scientific reason why the resistance of a metallic conductor increases with a rise in its temperature.',
      marks: 2,
      difficulty: 'Medium',
      correctAnswer: 'When temperature increases, the thermal kinetic energy of free electrons and the amplitude of vibration of the positive metal ions in the lattice increase. This leads to more frequent, chaotic collisions between the moving electrons and vibrating ions. This decrease in relaxation time (average time between collisions) increases the opposition to electron flow, raising the electrical resistance.',
      explanation: 'Resistance is inversely proportional to relaxation time (τ). High temperature causes aggressive ion vibration, which scatters charge carriers faster.',
      topic: 'Factors affecting Resistance'
    },
    {
      id: 'reason-2',
      questionText: 'Why is a fuse wire made of an alloy of lead and tin rather than pure copper?',
      marks: 2,
      difficulty: 'Medium',
      correctAnswer: 'A fuse wire needs to melt easily and break the circuit when safe current is exceeded. An alloy of lead and tin has a low melting point (around 200°C) and high specific resistance. Copper has a very high melting point and low resistance, which would allow hazardous currents to pass without melting, rendering it useless as a safety fuse.',
      explanation: 'Fuses require high heat generation (H = I²Rt) and a low thermal threshold to trigger rapid breaking.',
      topic: 'Household Electricity Applications'
    }
  ],
  num: [
    {
      id: 'num-1',
      questionText: 'An electric heater of rating "220V, 1100W" is connected to a standard 220V mains supply. Calculate: (i) the safe current drawn, and (ii) the resistance of the heating element.',
      marks: 3,
      difficulty: 'Medium',
      correctAnswer: '(i) Current I = P/V = 1100W / 220V = 5 A. (ii) Resistance R = V²/P = (220 × 220) / 1100 = 44 Ω (or using Ohm\'s law: R = V/I = 220/5 = 44 Ω).',
      explanation: 'Apply standard power relations: P = VI for electrical currents, and R = V/I or R = V²/P for element resistance.',
      topic: 'Electrical Power'
    },
    {
      id: 'num-2',
      questionText: 'Two resistors of resistances 4 Ω and 6 Ω are connected in parallel across a 12V battery of negligible internal resistance. Calculate the total current drawn from the battery.',
      marks: 3,
      difficulty: 'Medium',
      correctAnswer: 'First, find equivalent resistance Rp: 1/Rp = 1/4 + 1/6 = (3+2)/12 = 5/12. Therefore, Rp = 12/5 = 2.4 Ω. Total current drawn I = V/Rp = 12V / 2.4Ω = 5 A.',
      explanation: 'Determine equivalent branch resistance of the parallel network first, then use Ohm\'s Law to compute total current.',
      topic: 'Series Combination of Resistances'
    },
    {
      id: 'num-3',
      questionText: 'An electrical bulb is rated "100 W, 250 V". If the mains voltage drops to 200 V, calculate: (i) the resistance of the filament, and (ii) the actual power consumed by the bulb.',
      marks: 3,
      difficulty: 'Medium',
      correctAnswer: '(i) Resistance R = V²/P = (250 × 250) / 100 = 625 Ω.\n(ii) Power consumed at 200 V: P\' = V\'²/R = (200 × 200) / 625 = 40000 / 625 = 64 W.',
      explanation: 'Filament resistance is constant. Power consumed changes proportionally to the square of the applied operating voltage.',
      topic: 'Electrical Power'
    }
  ],
  diagram: [
    {
      id: 'diag-1',
      questionText: 'In a parallel electrical network, three resistors of 2 Ω, 3 Ω, and 6 Ω are connected across a potential. If the total main current entering the parallel node is 3 A, calculate the branch current passing specifically through the 6 Ω resistor.',
      marks: 3,
      difficulty: 'Medium',
      correctAnswer: '1. Equivalent resistance of parallel system Rp: 1/Rp = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1 Ω.\n2. Common voltage across combination V = I_total × Rp = 3 A × 1 Ω = 3 V.\n3. Current through the 6 Ω resistor: I_6 = V / R_6 = 3 V / 6 Ω = 0.5 A.',
      explanation: 'First evaluate the combined parallel resistance to locate the common node voltage, then apply Ohm\'s law to the specific branch.',
      topic: 'Parallel Combination of Resistances'
    }
  ],
  board: [
    {
      id: 'board-1',
      questionText: 'A cell of EMF 1.5 V and internal resistance 1.2 Ω is connected to an external resistor of 11.8 Ω. Calculate: (i) the total circuit current, (ii) the terminal voltage of the cell, and (iii) the voltage drop (lost volts).',
      marks: 4,
      difficulty: 'Hard',
      correctAnswer: '(i) Total circuit current I = E / (R + r) = 1.5V / (11.8Ω + 1.2Ω) = 1.5 / 13 = 0.1154 A. (ii) Terminal voltage V = I × R = 0.1154 A × 11.8 Ω = 1.362 V. (iii) Voltage drop (lost volts) v = I × r = 0.1154 A × 1.2 Ω = 0.138 V. Verification: V + v = 1.362 + 0.138 = 1.5 V (which equals the cell EMF).',
      explanation: 'The circuit current depends on external load plus internal resistance. Terminal voltage is the potential across load, and lost volts is the potential dropped internally.',
      topic: 'Potential Difference'
    },
    {
      id: 'board-2',
      questionText: 'An air conditioner of power rating 3.0 kW is used for 5 hours daily. Calculate: (i) the electrical energy consumed in 30 days in kWh, and (ii) the cost of running it for 30 days if the rate of electricity is ₹6 per unit.',
      marks: 4,
      difficulty: 'Medium',
      correctAnswer: '(i) Energy consumed per day = Power × Time = 3.0 kW × 5 h = 15 kWh.\nEnergy consumed in 30 days = 15 kWh × 30 = 450 kWh (or units).\n(ii) Cost = Total units × Rate = 450 × ₹6 = ₹2,700.',
      explanation: 'Multiply power in kilowatts by time in hours to obtain units of energy (kWh), then multiply by rate to evaluate monetary cost.',
      topic: 'Electrical Energy'
    }
  ]
};
