import React from 'react';

export interface TheoryTopic {
  title: string;
  content: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  description: string;
}

export interface DefinitionItem {
  term: string;
  text: string;
}

export interface LawItem {
  name: string;
  text: string;
}

export interface UnitItem {
  quantity: string;
  unit: string;
  symbol: string;
}

export interface DiagramItem {
  title: string;
  description: string;
  svg: React.ReactNode;
}

export interface MistakeItem {
  title: string;
  error: string;
  fix: string;
}

export interface TipItem {
  id: number;
  text: string;
}

export interface WorkedExample {
  title: string;
  question: string;
  solution: string;
}

export interface ApplicationItem {
  title: string;
  description: string;
}

export interface ChapterContent {
  overview: string;
  theoryTopics: TheoryTopic[];
  formulae: FormulaItem[];
  definitions: DefinitionItem[];
  laws: LawItem[];
  units: UnitItem[];
  diagrams: DiagramItem[];
  mistakes: MistakeItem[];
  tips: TipItem[];
  workedExamples: WorkedExample[];
  applications: ApplicationItem[];
  summary: string;
}

export const PHYSICS_CHAPTERS_DATA: Record<string, ChapterContent> = {
  'p-1': {
    overview: 'Force is a fundamental physical quantity that changes or tends to change the state of rest or motion of a body. This chapter explores the turning effect of force, torque, couples, equilibrium criteria, the Principle of Moments, the Centre of Gravity, and uniform circular motion driven by centripetal forces.',
    theoryTopics: [
      {
        title: 'Translation vs. Rotational Motion',
        content: 'When a force acts on a stationary rigid body that is free to move, the body moves in a straight path in the direction of the force. This is translational or linear motion. However, if the body is pivoted or fixed at a point, the applied force turns the body about an axis passing through the pivoted point. This turning motion is called rotational motion.'
      },
      {
        title: 'Moment of a Force (Torque)',
        content: 'The moment of a force (or torque) is the turning effect of the force about the pivot. It depends on two factors: (1) The magnitude of the force applied (F), and (2) The perpendicular distance of the line of action of the force from the axis of rotation (d). Mathematically, Moment of Force = F × d. For a given force, a larger perpendicular distance produces a greater turning effect.'
      },
      {
        title: 'Couple & Moment of Couple',
        content: 'A single force applied to a pivoted body cannot produce pure rotation; an equal and opposite reaction force is always generated at the pivot. A pair of equal, opposite, and parallel forces acting along different lines is called a couple. The moment of a couple is calculated as the product of the magnitude of either force and the perpendicular distance between their lines of action (called the couple arm). Moment of Couple = Force (F) × Couple Arm (d).'
      },
      {
        title: 'Equilibrium of Rigid Bodies',
        content: 'When a number of forces acting on a body produce no change in its state of rest or motion, the body is said to be in equilibrium. (1) Static Equilibrium: A body remains at rest under the action of several forces (e.g., a book lying on a table). (2) Dynamic Equilibrium: A body remains in its state of constant linear or rotational motion (e.g., a rain drop falling at terminal velocity, or a planet orbiting the sun). The conditions of equilibrium are: (a) The vector sum of all translational forces is zero, and (b) The algebraic sum of moments of all forces about any point is zero.'
      },
      {
        title: 'Principle of Moments',
        content: 'According to the Principle of Moments, when a body is in rotational equilibrium under the action of several forces, the algebraic sum of moments of all forces about any point is zero. In simpler terms, the sum of anticlockwise moments is equal to the sum of clockwise moments. Anticlockwise moments are conventionally taken as positive, while clockwise moments are negative.'
      },
      {
        title: 'Centre of Gravity (C.G.)',
        content: 'The Centre of Gravity of a body is the point through which the entire weight of the body acts vertically downwards, in whatever orientation the body is placed. The algebraic sum of moments of weights of all individual particles of the body about its C.G. is zero. For uniform regularly-shaped bodies, the C.G. coincides with their geometric center (e.g., center of a sphere, intersection of diagonals of a rectangular plate, or the centroid of a triangular lamina). C.G. can also lie outside the material of the body, as in the case of a circular ring or a hollow cylinder.'
      },
      {
        title: 'Uniform Circular Motion',
        content: 'When a body moves with constant speed in a circular path, its motion is called uniform circular motion. Although speed is constant, the direction of motion changes continuously. Consequently, velocity changes continuously, making uniform circular motion an accelerated motion. The acceleration is directed towards the center of the circular path and is called centripetal acceleration.'
      },
      {
        title: 'Centripetal and Centrifugal Forces',
        content: 'To keep a body moving in a circular path, a force directed towards the center of the path must act on it. This is the Centripetal Force, which is a real force (e.g., frictional force between tires and road, or gravitational force between a planet and the sun). Conversely, Centrifugal Force is a pseudo (or virtual) force acting radially outwards, experienced only by an observer situated within the rotating system. It is equal in magnitude and opposite in direction to the centripetal force.'
      }
    ],
    formulae: [
      { name: 'Moment of Force (Torque)', formula: 'τ = F × d', description: 'F is the applied force in Newtons, d is the perpendicular distance from pivot in meters.' },
      { name: 'Moment of Couple', formula: 'M_couple = F × d', description: 'F is the magnitude of either force, d is the couple arm (perpendicular distance between forces).' },
      { name: 'Principle of Moments', formula: 'Σ Anticlockwise Moments = Σ Clockwise Moments', description: 'For rotational equilibrium, the sum of positive turning forces equals negative turning forces.' },
      { name: 'Centripetal Force', formula: 'F_c = (m × v²) / r', description: 'm is mass, v is speed, r is radius of the circular path.' }
    ],
    definitions: [
      { term: 'Moment of Force', text: 'The turning effect of a force on a pivoted body, measured as the product of the force and the perpendicular distance of its line of action from the pivot.' },
      { term: 'Couple', text: 'Two equal and opposite parallel forces acting on a body along different lines of action.' },
      { term: 'Static Equilibrium', text: 'The state of a body which remains at rest under the action of multiple external forces.' },
      { term: 'Dynamic Equilibrium', text: 'The state of a body which remains in constant motion (constant linear or angular velocity) under the action of multiple forces.' },
      { term: 'Centre of Gravity', text: 'The point through which the entire weight of a body acts vertically downwards, regardless of the body\'s position.' },
      { term: 'Centripetal Force', text: 'The force directed towards the center of a circular path that is required to maintain a body in uniform circular motion.' },
      { term: 'Centrifugal Force', text: 'A pseudo-force acting radially outwards from the center of a circular path, experienced only in a rotating non-inertial frame of reference.' }
    ],
    laws: [
      { name: 'Principle of Moments', text: 'When a body is in rotational equilibrium, the algebraic sum of moments of all forces acting on it about any axis of rotation is zero (Sum of Anticlockwise Moments = Sum of Clockwise Moments).' }
    ],
    units: [
      { quantity: 'Force', unit: 'Newton / Kilogram-force', symbol: 'N / kgf' },
      { quantity: 'Moment of Force (Torque)', unit: 'Newton-meter', symbol: 'N·m' },
      { quantity: 'Moment of Couple', unit: 'Newton-meter', symbol: 'N·m' },
      { quantity: 'Centripetal Force', unit: 'Newton', symbol: 'N' }
    ],
    diagrams: [
      {
        title: 'Principle of Moments Lever Balancing',
        description: 'A uniform meter rule balanced at its center of gravity (50 cm mark) under two suspended weights producing clockwise and anticlockwise moments.',
        svg: (
          <svg className="w-full h-44 bg-slate-900/60 rounded-xl border border-slate-800 p-4 text-slate-300" viewBox="0 0 400 180">
            {/* The Lever */}
            <rect x="40" y="80" width="320" height="12" fill="#475569" rx="2" />
            {/* Graduation lines */}
            <line x1="40" y1="80" x2="40" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="120" y1="80" x2="120" y2="92" stroke="#94a3b8" strokeWidth="1" />
            <line x1="200" y1="80" x2="200" y2="92" stroke="#f43f5e" strokeWidth="2.5" /> {/* Pivot */}
            <line x1="280" y1="80" x2="280" y2="92" stroke="#94a3b8" strokeWidth="1" />
            <line x1="360" y1="80" x2="360" y2="92" stroke="#94a3b8" strokeWidth="1.5" />
            
            {/* Labels for meter rule */}
            <text x="35" y="72" fill="#94a3b8" className="text-[9px] font-mono">0 cm</text>
            <text x="190" y="72" fill="#f43f5e" className="text-[9px] font-mono font-bold">50 cm</text>
            <text x="345" y="72" fill="#94a3b8" className="text-[9px] font-mono">100 cm</text>

            {/* Fulcrum / Knife-edge */}
            <polygon points="200,92 188,125 212,125" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
            <text x="186" y="140" fill="#f43f5e" className="text-[10px] font-mono font-bold">Pivot</text>

            {/* Mass W1 on Left */}
            <line x1="100" y1="92" x2="100" y2="120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 1" />
            <rect x="85" y="120" width="30" height="20" fill="#1d4ed8" rx="2" />
            <text x="94" y="133" fill="#ffffff" className="text-[9px] font-mono font-bold">W₁</text>
            {/* Anticlockwise moment arrow */}
            <path d="M 80 60 A 60 60 0 0 1 140 60" fill="none" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="65" y="50" fill="#3b82f6" className="text-[9px] font-semibold">Anticlockwise (+)</text>

            {/* Mass W2 on Right */}
            <line x1="290" y1="92" x2="290" y2="120" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 1" />
            <rect x="275" y="120" width="30" height="20" fill="#047857" rx="2" />
            <text x="284" y="133" fill="#ffffff" className="text-[9px] font-mono font-bold">W₂</text>
            {/* Clockwise moment arrow */}
            <path d="M 320 60 A 60 60 0 0 0 260 60" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <text x="265" y="50" fill="#10b981" className="text-[9px] font-semibold">Clockwise (-)</text>
          </svg>
        )
      }
    ],
    mistakes: [
      { title: 'Moment Distance Error', error: 'Multiplying force by direct distance instead of perpendicular distance.', fix: 'Always compute the perpendicular distance from the line of action of the force to the axis of rotation.' },
      { title: 'CG Misconception', error: 'Believing the Centre of Gravity must always lie inside the physical mass of the body.', fix: 'Remember that CG can lie outside the body, e.g., at the center of a hollow ring, hollow cylinder, or a bent wire.' }
    ],
    tips: [
      { id: 1, text: 'For equilibrium problems, choose a convenient pivot point to take moments, which eliminates forces acting directly through that pivot.' },
      { id: 2, text: 'Anticlockwise torque is positive; clockwise torque is negative.' }
    ],
    workedExamples: [
      {
        title: 'Finding weight of meter rule',
        question: 'A uniform meter rule balances horizontally on a knife-edge at the 60 cm mark when a weight of 10 gf is suspended at the 90 cm mark. Calculate the weight of the meter rule.',
        solution: 'Let W be the weight of the uniform meter rule. Since the meter rule is uniform, its entire weight (W) acts at its Centre of Gravity, which is at the 50 cm mark.\n\nPivot is at the 60 cm mark.\nDistance of C.G. (50 cm) from the pivot (60 cm) = 60 - 50 = 10 cm. This weight W tends to rotate the rule anticlockwise.\nAnticlockwise Moment = W × 10 gf·cm.\n\nSuspended mass (10 gf) is at the 90 cm mark.\nDistance of suspended mass from pivot = 90 - 60 = 30 cm. This mass tends to rotate the rule clockwise.\nClockwise Moment = 10 × 30 = 300 gf·cm.\n\nBy the Principle of Moments (rotational equilibrium):\nAnticlockwise Moment = Clockwise Moment\nW × 10 = 300\nW = 30 gf.\n\nTherefore, the weight of the meter rule is 30 gf.'
      }
    ],
    applications: [
      { title: 'Long Spanner Handles', description: 'Spanners have long handles to increase the perpendicular distance from the nut. This reduces the effort required to produce the necessary torque to turn it.' },
      { title: 'Steering Wheel Rotation', description: 'A steering wheel is turned using a couple. Two equal and opposite forces applied with both hands produce a pure turning moment with zero translation.' }
    ],
    summary: 'The turning effect of a force is torque, equal to force times perpendicular distance. Pure rotational motion is caused by a couple. For rotational equilibrium, the Principle of Moments states that anticlockwise moments equal clockwise moments. Weight of any body acts through its Centre of Gravity. Uniform circular motion is accelerated, driven by a real centripetal force directed inwards.'
  },
  'p-2': {
    overview: 'Work is defined as energy transfer occurring when a force displaces a body. This chapter covers the definitions, conditions, and units of work, power, kinetic and potential energy, the Work-Energy Theorem, conservation of mechanical energy (free fall and pendulums), and various power generation systems.',
    theoryTopics: [
      {
        title: 'Concept of Work',
        content: 'In physics, work is said to be done only when a force applied on a body produces a displacement. The work done is measured by the product of the component of force in the direction of displacement and the magnitude of displacement. Mathematically, W = F × d × cos(θ), where θ is the angle between the force vector and the displacement vector.'
      },
      {
        title: 'Conditions for Zero Work',
        content: 'Work done is zero in three conditions: (1) If the applied force is zero. (2) If the displacement is zero (e.g., pushing a solid wall). (3) If the force is perpendicular to the displacement (cos 90° = 0). Examples of zero work include a coolie carrying a heavy box on his head while walking on a horizontal platform (gravity acts downwards, displacement is horizontal), or a planet orbiting the sun in a circular path.'
      },
      {
        title: 'Power and its relation to Force & Velocity',
        content: 'Power is defined as the rate of doing work. It represents how fast work is accomplished. Power = Work / Time (P = W / t). Since Work = Force × Displacement, Power = Force × (Displacement / Time) = Force × Velocity (P = F × v). This relationship is highly useful in calculating engine capacities and mechanical work rates.'
      },
      {
        title: 'Kinetic and Potential Energy',
        content: 'Mechanical energy exists in two forms: (1) Potential Energy (U): The energy possessed by a body by virtue of its position or elastic configuration. Gravitational Potential Energy U = mgh. (2) Kinetic Energy (K): The energy possessed by a body by virtue of its motion. K = 1/2 m v². The relation between Kinetic Energy (K) and linear momentum (p = mv) is K = p² / (2m).'
      },
      {
        title: 'Work-Energy Theorem',
        content: 'The Work-Energy Theorem states that the work done by the net force acting on a body is equal to the change in its kinetic energy. Work Done (W) = Final Kinetic Energy (K_f) - Initial Kinetic Energy (K_i). This theorem simplifies complex problems involving non-constant forces by relating initial and final states directly.'
      },
      {
        title: 'Conservation of Mechanical Energy',
        content: 'The law of conservation of mechanical energy states that in the absence of friction and air resistance, the total mechanical energy (sum of potential and kinetic energy) of a system remains constant: E = K + U = constant. In a freely falling body, G.P.E. decreases and converts entirely into K.E., such that the sum (mgh) is constant at any point. In a simple pendulum, energy oscillates between pure P.E. at extreme positions and pure K.E. at the mean position.'
      }
    ],
    formulae: [
      { name: 'Work Done', formula: 'W = F × d × cos(θ)', description: 'F is force, d is displacement, θ is the angle between force and displacement.' },
      { name: 'Power', formula: 'P = W / t = F × v', description: 'Rate of doing work. Equal to Force multiplied by velocity.' },
      { name: 'Gravitational Potential Energy', formula: 'U = m × g × h', description: 'm is mass, g is gravitational acceleration, h is height above the reference level.' },
      { name: 'Kinetic Energy', formula: 'K = 1/2 × m × v² = p² / (2m)', description: 'm is mass, v is velocity, p is linear momentum.' }
    ],
    definitions: [
      { term: 'Work', text: 'The scalar product of the applied force and displacement of a body in the direction of the force.' },
      { term: 'Power', text: 'The rate at which work is done or the rate of energy conversion.' },
      { term: 'Energy', text: 'The capacity of a body to do work.' },
      { term: 'Work-Energy Theorem', text: 'The statement that net work done on a body is equal to the change in its kinetic energy.' },
      { term: 'Conservative Force', text: 'A force for which work done in moving a particle between two points is independent of the path taken.' }
    ],
    laws: [
      { name: 'Law of Conservation of Energy', text: 'Energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains constant.' }
    ],
    units: [
      { quantity: 'Work / Energy', unit: 'Joule / erg / Kilowatt-hour', symbol: 'J / erg / kWh' },
      { quantity: 'Power', unit: 'Watt / Horsepower', symbol: 'W / hp' }
    ],
    diagrams: [
      {
        title: 'Conservation of Energy in Simple Pendulum',
        description: 'A simple pendulum showing the interconversion of kinetic energy (K.E.) and potential energy (P.E.) at different points in its path.',
        svg: (
          <svg className="w-full h-44 bg-slate-900/60 rounded-xl border border-slate-800 p-4 text-slate-300" viewBox="0 0 400 180">
            {/* Ceiling */}
            <line x1="120" y1="20" x2="280" y2="20" stroke="#94a3b8" strokeWidth="3" />
            <line x1="130" y1="20" x2="120" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="150" y1="20" x2="140" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="170" y1="20" x2="160" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="190" y1="20" x2="180" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="210" y1="20" x2="200" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="230" y1="20" x2="220" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="250" y1="20" x2="240" y2="25" stroke="#475569" strokeWidth="1" />
            <line x1="270" y1="20" x2="260" y2="25" stroke="#475569" strokeWidth="1" />

            {/* Pivot */}
            <circle cx="200" cy="20" r="4" fill="#f43f5e" />

            {/* Path Arc */}
            <path d="M 100 90 A 120 120 0 0 0 300 90" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Position A: Extreme Left */}
            <line x1="200" y1="20" x2="100" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="100" cy="90" r="12" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
            <text x="96" y="93" fill="#ffffff" className="text-[8px] font-bold font-mono">A</text>
            <text x="45" y="115" fill="#3b82f6" className="text-[9px] font-mono font-bold">Max P.E. (mgh)</text>
            <text x="55" y="125" fill="#94a3b8" className="text-[9px] font-mono">K.E. = 0</text>

            {/* Position B: Mean Position (Center) */}
            <line x1="200" y1="20" x2="200" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="200" cy="135" r="12" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="196" y="138" fill="#ffffff" className="text-[8px] font-bold font-mono">B</text>
            <text x="175" y="158" fill="#10b981" className="text-[9px] font-mono font-bold">Max K.E. (1/2mv²)</text>
            <text x="185" y="168" fill="#94a3b8" className="text-[9px] font-mono">P.E. = 0</text>

            {/* Position C: Extreme Right */}
            <line x1="200" y1="20" x2="300" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="300" cy="90" r="12" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
            <text x="296" y="93" fill="#ffffff" className="text-[8px] font-bold font-mono">C</text>
            <text x="295" y="115" fill="#3b82f6" className="text-[9px] font-mono font-bold">Max P.E. (mgh)</text>
            <text x="305" y="125" fill="#94a3b8" className="text-[9px] font-mono">K.E. = 0</text>
          </svg>
        )
      }
    ],
    mistakes: [
      { title: 'kWh Unit Confusion', error: 'Confusing Kilowatt-hour (kWh) as a unit of power.', fix: 'Kilowatt (kW) is a unit of power, but Kilowatt-hour (kWh) is a unit of electrical energy (1 kWh = 3.6 × 10⁶ Joules).' },
      { title: 'Zero Work Identification', error: 'Thinking work is done when carrying a load horizontally at a constant speed.', fix: 'Since gravity acts vertically downwards and displacement is horizontal, the angle is 90° and cos 90° = 0. Hence, work done against gravity is zero.' }
    ],
    tips: [
      { id: 1, text: 'Convert all non-standard units (e.g., km/h to m/s by multiplying with 5/18, grams to kg) before substituting into formulas.' },
      { id: 2, text: 'Remember that 1 Horsepower (hp) is equal to 746 Watts.' }
    ],
    workedExamples: [
      {
        title: 'Kinetic energy and momentum calculation',
        question: 'A body of mass 2 kg has a linear momentum of 10 kg·m/s. Calculate its kinetic energy.',
        solution: 'Mass (m) = 2 kg\nMomentum (p) = 10 kg·m/s\n\nUsing the relation between Kinetic Energy (K) and Momentum (p):\nK = p² / (2m)\nK = (10)² / (2 × 2)\nK = 100 / 4\nK = 25 Joules.\n\nAlternatively:\np = mv => 10 = 2 × v => v = 5 m/s.\nK = 1/2 m v² = 1/2 × 2 × (5)² = 25 Joules.\n\nTherefore, the kinetic energy of the body is 25 J.'
      }
    ],
    applications: [
      { title: 'Hydroelectric Power Plants', description: 'Water stored in a reservoir possesses gravitational potential energy. When it falls, GPE converts to kinetic energy, which turns turbines to generate electrical power.' },
      { title: 'Pile Driver', description: 'A heavy hammer is raised to a certain height, gaining gravitational potential energy. When dropped, this energy does work to drive a heavy steel pile deep into the ground.' }
    ],
    summary: 'Work requires both force and displacement. Power is the rate of doing work. Gravitational Potential Energy is position-based, whereas Kinetic Energy is velocity-based. Total mechanical energy is conserved in the absence of dissipative forces (like friction). Energy converters shift energy between chemical, electrical, potential, and kinetic forms.'
  },
  'p-3': {
    overview: 'A machine is a mechanical device that helps overcome a heavy resistive load at some point by applying a comparatively smaller effort at another point, or multiplies speed, or changes the direction of force. This chapter details mechanical terms, levers, and pulley systems.',
    theoryTopics: [
      {
        title: 'Functions of a Simple Machine',
        content: 'Simple machines serve four primary purposes: (1) As a Force Multiplier: Overcoming a large load by applying a small effort (e.g., jack, crowbar). (2) As a Speed Multiplier: Gaining speed by displacing load more than effort (e.g., scissors, bread knife). (3) Changing the Direction of Effort: Applying force in a convenient direction (e.g., pulling a rope downwards using a single fixed pulley to lift water). (4) Safety: Applying effort at a safe distance from the load.'
      },
      {
        title: 'Mechanical Advantage, Velocity Ratio, and Efficiency',
        content: 'Three parameters define any machine: (1) Mechanical Advantage (MA): The ratio of Load (L) to Effort (E). MA = L / E. (2) Velocity Ratio (VR): The ratio of displacement of effort (d_E) to displacement of load (d_L). VR = d_E / d_L. (3) Efficiency (η): The ratio of work output to work input. η = Work Output / Work Input. They are related by: η = MA / VR. For an ideal machine (frictionless and weightless parts), efficiency is 100% and MA = VR. For practical machines, efficiency is always less than 100% because work is lost overcoming friction.'
      },
      {
        title: 'Levers: Classes and Principle of Lever',
        content: 'A lever is a rigid bar capable of turning about a pivot called the fulcrum (F). It works on the Principle of Moments. For a balanced lever, Effort × Effort Arm = Load × Load Arm. This gives MA = Effort Arm / Load Arm. Levers are divided into three classes: (1) Class I: Fulcrum is between Load and Effort (e.g., crowbar, scissors). MA can be > 1, = 1, or < 1. (2) Class II: Load is between Fulcrum and Effort (e.g., nutcracker, wheelbarrow). Effort arm is always larger than load arm, so MA is always > 1. (3) Class III: Effort is between Fulcrum and Load (e.g., sugar tongs, forceps). Effort arm is shorter than load arm, so MA is always < 1 (acts as speed multiplier).'
      },
      {
        title: 'Single Fixed and Single Movable Pulleys',
        content: 'Pulleys are of two basic types: (1) Single Fixed Pulley: The axle of rotation is fixed. Its Velocity Ratio is 1, and Mechanical Advantage is ideally 1. It is used to change the direction of force downwards, which is easier as we can use our own body weight. (2) Single Movable Pulley: Axle moves up and down with the load. The load is supported by two segments of string, so VR = 2, and ideally MA = 2. It acts as a force multiplier.'
      },
      {
        title: 'Block and Tackle Pulley System',
        content: 'A Block and Tackle system consists of two blocks of pulleys: an upper fixed block and a lower movable block. A single continuous string is wound around all pulleys. The Velocity Ratio (VR) of the system is equal to the total number of segments of string (n) supporting the movable block. If there are n pulleys, VR = n. Ideally, MA is also n. However, due to the weight of the lower block (w) and friction, the practical Mechanical Advantage is MA = n - w/E. Thus, to maximize efficiency, the lower block must be made as light as possible.'
      }
    ],
    formulae: [
      { name: 'Mechanical Advantage', formula: 'MA = L / E', description: 'Load overcome (L) divided by effort applied (E). It is a pure ratio with no units.' },
      { name: 'Velocity Ratio', formula: 'VR = d_E / d_L', description: 'Displacement of effort (d_E) divided by displacement of load (d_L) in the same time.' },
      { name: 'Efficiency', formula: 'η = MA / VR × 100%', description: 'Efficiency represents the percentage of input work converted to useful output work.' },
      { name: 'Principle of Lever', formula: 'MA = Effort Arm / Load Arm', description: 'Effort arm is the distance from Fulcrum to Effort, load arm is distance from Fulcrum to Load.' },
      { name: 'Practical Block and Tackle MA', formula: 'MA = n - w/E', description: 'n is velocity ratio (pulley count), w is weight of the lower block, E is effort.' }
    ],
    definitions: [
      { term: 'Machine', text: 'A device by which we can overcome a large resistive force (load) at some point by applying a comparatively small force (effort) at another point.' },
      { term: 'Mechanical Advantage', text: 'The ratio of the load (resistive force overcome) to the effort (applied force).' },
      { term: 'Velocity Ratio', text: 'The ratio of the velocity of the effort to the velocity of the load, which is equal to the ratio of effort displacement to load displacement.' },
      { term: 'Efficiency', text: 'The ratio of useful work done by a machine (work output) to the total work done on the machine (work input).' },
      { term: 'Fulcrum', text: 'The fixed point or pivot about which a lever rotates.' }
    ],
    laws: [
      { name: 'Principle of Machines', text: 'For any machine, the Work Output is equal to Work Input minus work done against friction and weight of moving parts. For an ideal machine, Work Output = Work Input.' }
    ],
    units: [
      { quantity: 'Mechanical Advantage (MA)', unit: 'No Unit', symbol: 'Pure Ratio' },
      { quantity: 'Velocity Ratio (VR)', unit: 'No Unit', symbol: 'Pure Ratio' },
      { quantity: 'Efficiency (η)', unit: 'Percentage', symbol: '%' }
    ],
    diagrams: [
      {
        title: 'Block and Tackle Pulley System (n = 4)',
        description: 'An ideal block and tackle system with 4 pulleys (two fixed in upper block, two movable in lower block). The Velocity Ratio is 4.',
        svg: (
          <svg className="w-full h-44 bg-slate-900/60 rounded-xl border border-slate-800 p-4 text-slate-300" viewBox="0 0 400 180">
            {/* Rigid Support */}
            <line x1="140" y1="10" x2="260" y2="10" stroke="#94a3b8" strokeWidth="4" />
            
            {/* Upper Fixed Block */}
            <rect x="180" y="10" width="40" height="40" fill="#334155" rx="2" />
            <circle cx="190" cy="30" r="12" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="210" cy="30" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            
            {/* Lower Movable Block */}
            <rect x="180" y="100" width="40" height="40" fill="#475569" rx="2" />
            <circle cx="190" cy="120" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="210" cy="120" r="12" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />

            {/* String Segments */}
            {/* Segment 1 */}
            <line x1="182" y1="30" x2="182" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
            {/* Segment 2 */}
            <line x1="198" y1="30" x2="198" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
            {/* Segment 3 */}
            <line x1="202" y1="30" x2="202" y2="120" stroke="#f59e0b" strokeWidth="1.5" />
            {/* Segment 4 */}
            <line x1="218" y1="30" x2="218" y2="120" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Effort String pulled downwards */}
            <path d="M 226 30 L 250 140" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="254" y="145" fill="#f59e0b" className="text-[9px] font-mono font-bold">Effort (E)</text>

            {/* Hook & Load */}
            <line x1="200" y1="140" x2="200" y2="155" stroke="#f43f5e" strokeWidth="2" />
            <rect x="185" y="155" width="30" height="18" fill="#e11d48" rx="2" />
            <text x="190" y="167" fill="#ffffff" className="text-[8px] font-bold">LOAD</text>

            {/* Tension Arrows */}
            <text x="165" y="75" fill="#94a3b8" className="text-[8px] font-mono font-bold">T</text>
            <path d="M 178 70 L 178 60" fill="none" stroke="#94a3b8" strokeWidth="1" />
            
            {/* Specifications Label */}
            <text x="50" y="50" fill="#38bdf8" className="text-[10px] font-mono font-bold">4 Pulleys</text>
            <text x="50" y="65" fill="#94a3b8" className="text-[9px] font-mono">VR = 4</text>
            <text x="50" y="80" fill="#94a3b8" className="text-[9px] font-mono">MA = 4 (Ideal)</text>
          </svg>
        )
      }
    ],
    mistakes: [
      { title: 'Lever Arm Miscalculation', error: 'Measuring Load Arm and Effort Arm from each other instead of from the Fulcrum.', fix: 'Load Arm is the distance from Fulcrum to Load. Effort Arm is the distance from Fulcrum to Effort.' },
      { title: 'Velocity Ratio Constancy', error: 'Assuming that Velocity Ratio decreases in a practical machine due to friction.', fix: 'Velocity Ratio (VR) depends purely on geometry and string arrangement. It remains constant; only Mechanical Advantage (MA) decreases due to friction.' }
    ],
    tips: [
      { id: 1, text: 'To maximize efficiency, keep the movable block of pulleys as light as possible.' },
      { id: 2, text: 'Levers of Class II always have MA > 1 and act as force multipliers. Levers of Class III always have MA < 1 and act as speed multipliers.' }
    ],
    workedExamples: [
      {
        title: 'Pulley system efficiency calculation',
        question: 'A block and tackle system has 5 pulleys. If an effort of 200 N is needed to lift a load of 800 N, calculate the efficiency of the pulley system.',
        solution: 'Total number of pulleys (n) = 5\nVelocity Ratio (VR) = n = 5\nApplied Effort (E) = 200 N\nLoad lifted (L) = 800 N\n\nFirst, find the Mechanical Advantage (MA):\nMA = Load / Effort = 800 / 200 = 4.\n\nNow, calculate Efficiency (η):\nη = MA / VR\nη = 4 / 5 = 0.80\nIn percentage, η = 0.80 × 100% = 80%.\n\nTherefore, the efficiency of the pulley system is 80%.'
      }
    ],
    applications: [
      { title: 'Nutcracker (Class II Lever)', description: 'The nut is placed between the fulcrum and handles. This ensures the effort arm is always greater than the load arm, acting as a powerful force multiplier.' },
      { title: 'Sailing Ship Rigging', description: 'Sailors use block and tackle pulley systems to hoist massive sails and change rigging configurations safely under intense wind tension.' }
    ],
    summary: 'A machine is a device to multiply force, multiply speed, or change direction. Mechanical Advantage is L/E. Velocity Ratio is d_E/d_L. Efficiency is MA/VR. Levers are pivoted bars working on the Principle of Moments. Class I fulcrum is central, Class II load is central (MA > 1), and Class III effort is central (MA < 1). Pulley systems use multiple fixed and movable segments to gain high force multipliers.'
  }
};
