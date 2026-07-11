import { Question } from './physicsQuestions';

export const ALL_CHAPTERS_QUESTIONS: Record<string, Record<string, Question[]>> = {
  'p-1': {
    mcq: [
      {
        id: 'p1-mcq-1',
        questionText: 'The moment of a force of 10 N acting on a pivoted body is 5 N·m. Calculate the perpendicular distance of the line of action of force from the pivot.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '0.5 m',
        options: ['0.2 m', '0.5 m', '1.0 m', '2.0 m'],
        explanation: 'Using Torque = Force × perpendicular distance (τ = F × d). Given τ = 5 N·m, F = 10 N. Hence, d = 5 / 10 = 0.5 m.',
        topic: 'Torque (Moment of Force)'
      },
      {
        id: 'p1-mcq-2',
        questionText: 'A body moving in a circular path with constant speed has a change in:',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Velocity',
        options: ['Speed', 'Velocity', 'Mass', 'Kinetic Energy'],
        explanation: 'In uniform circular motion, the speed remains constant, but the direction of motion changes continuously. Since velocity is a vector, velocity changes and the motion is accelerated.',
        topic: 'Uniform Circular Motion'
      },
      {
        id: 'p1-mcq-3',
        questionText: 'Which physical quantity is represented by the rate of change of angular momentum?',
        marks: 1,
        difficulty: 'Hard',
        correctAnswer: 'Torque',
        options: ['Force', 'Torque', 'Linear Momentum', 'Work'],
        explanation: 'Just as force is the rate of change of linear momentum, torque is the rate of change of angular momentum (τ = dL/dt).',
        topic: 'Torque (Moment of Force)'
      },
      {
        id: 'p1-mcq-4',
        questionText: 'The position of the centre of gravity of a solid right circular cone of height h from its flat base lies at a distance of:',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'h/4',
        options: ['h/2', 'h/3', 'h/4', '3h/4'],
        explanation: 'For a solid right circular cone, the center of gravity lies on its axis of symmetry at a distance of h/4 from its flat circular base.',
        topic: 'Centre of Gravity'
      }
    ],
    fill: [
      {
        id: 'p1-fill-1',
        questionText: 'The Centre of Gravity of a uniform circular ring lies at its __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'geometric center',
        options: ['rim', 'geometric center', 'circumference', 'outside the plane'],
        explanation: 'For a circular ring, the center of gravity lies at its geometric center, which is a point in space containing no actual material of the ring.',
        topic: 'Centre of Gravity'
      },
      {
        id: 'p1-fill-2',
        questionText: 'When a rigid body is in static equilibrium under coplanar forces, the net turning moment acting on it about any point is __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'zero',
        options: ['maximum', 'minimum', 'zero', 'infinite'],
        explanation: 'According to the Principle of Moments, for static equilibrium, the sum of clockwise moments must equal the sum of anticlockwise moments, making the net moment zero.',
        topic: 'Conditions for Equilibrium'
      }
    ],
    tf: [
      {
        id: 'p1-tf-1',
        questionText: 'State True or False: Centrifugal force is a real action-reaction force pair with centripetal force.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'Centrifugal force is a pseudo-force acting outwards, experienced only in a rotating non-inertial frame. It is not a real force and does not form an action-reaction pair with centripetal force.',
        topic: 'Centripetal & Centrifugal Force'
      },
      {
        id: 'p1-tf-2',
        questionText: 'State True or False: The algebraic sum of moments of forces in a clockwise direction is taken as positive.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'By standard convention, anticlockwise moments are taken as positive (+), whereas clockwise moments are taken as negative (-).',
        topic: 'Turning Effect of Force'
      }
    ],
    match: [
      {
        id: 'p1-match-1',
        questionText: 'Match the units: 1 kilogram-force (kgf) in terms of Newtons is equivalent to:',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '9.8 N',
        options: ['1 N', '9.8 N', '980 N', '10 N'],
        explanation: '1 kgf is the gravitational pull of the earth on a mass of 1 kg. Since g = 9.8 m/s², 1 kgf = 1 kg × 9.8 m/s² = 9.8 Newtons.',
        topic: 'Turning Effect of Force'
      },
      {
        id: 'p1-match-2',
        questionText: 'Match the concept: The anticlockwise moment of a force is conventionally considered as __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'positive',
        options: ['negative', 'positive', 'zero', 'neutral'],
        explanation: 'By convention, anticlockwise turning moments are taken as positive (+) and clockwise ones as negative (-).',
        topic: 'Turning Effect of Force'
      }
    ],
    ar: [
      {
        id: 'p1-ar-1',
        questionText: 'Assertion (A): Spanners have long handles.\nReason (R): Long handles increase the perpendicular distance of the line of action of force, producing a larger turning moment with a smaller effort.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Both A and R are true and R is correct explanation of A',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'Since Torque = Force × Perpendicular distance, increasing the handle length increases the perpendicular distance. Consequently, a smaller effort produces the same necessary turning torque.',
        topic: 'Torque (Moment of Force)'
      },
      {
        id: 'p1-ar-2',
        questionText: 'Assertion (A): The position of the center of gravity of a body does not change even if its shape is deformed.\nReason (R): Center of gravity depends purely on the mass distribution of the body, and deforming the shape alters this distribution.',
        marks: 1,
        difficulty: 'Hard',
        correctAnswer: 'A is false but R is true',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'Center of gravity depends heavily on shape and mass distribution. Deforming the shape changes the distribution, thereby shifting the center of gravity.',
        topic: 'Centre of Gravity'
      }
    ],
    vshort: [
      {
        id: 'p1-vshort-1',
        questionText: 'State the direction of centripetal force acting on a body in uniform circular motion.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Radially inwards towards the center of the circular path.',
        explanation: 'Centripetal force must act along the radius and be directed towards the center of rotation to sustain uniform circular motion.',
        topic: 'Centripetal & Centrifugal Force'
      },
      {
        id: 'p1-vshort-2',
        questionText: 'Write the SI unit of moment of force (torque).',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Newton-meter (N·m)',
        explanation: 'Moment of Force = Force × Distance, so the unit is Newton (N) × meter (m) = N·m.',
        topic: 'Torque (Moment of Force)'
      }
    ],
    short: [
      {
        id: 'p1-short-1',
        questionText: 'State the two conditions for a rigid body to remain in static equilibrium under multiple coplanar forces.',
        marks: 2,
        difficulty: 'Easy',
        correctAnswer: '1. The algebraic vector sum of all translational forces acting on the body must be zero (ΣF = 0).\n2. The algebraic sum of moments of all forces about any point must be zero (Principle of Moments: Στ = 0).',
        explanation: 'These conditions ensure the absence of both linear acceleration and angular acceleration.',
        topic: 'Conditions for Equilibrium'
      },
      {
        id: 'p1-short-2',
        questionText: 'Why does a passenger sitting in a moving car fall outwards when the car takes a sudden sharp turn?',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'When the car turns, the passenger experiences a outward centrifugal force in the car\'s non-inertial frame of reference (or due to directional inertia, the passenger\'s body tends to continue moving in a straight line while the car curves inwards, creating the effect of falling outwards).',
        explanation: 'Inertia of direction causes the body to resist curve curvature, which is perceived as centrifugal displacement.',
        topic: 'Centripetal & Centrifugal Force'
      }
    ],
    long: [
      {
        id: 'p1-long-1',
        questionText: 'Explain the turning effect of force. State the factors on which the moment of force depends, and explain how a single force pivoted at a point produces rotation.',
        marks: 4,
        difficulty: 'Medium',
        correctAnswer: 'When a force acts on a body pivoted at a point, it turns the body about an axis passing through that point. This rotational effect is called the moment of force.\nIt depends on: (1) The magnitude of the force applied (F). (2) The perpendicular distance of the line of action of the force from the axis of rotation (d).\nWhen a single force is applied at a distance from the pivot, an equal and opposite reaction force is generated at the pivot. These two equal, parallel, and opposite forces acting along different lines form a couple, which rotates the body.',
        explanation: 'A single force cannot produce pure rotation by itself. The pivot generates a structural reaction, creating a mechanical couple.',
        topic: 'Torque (Moment of Force)'
      },
      {
        id: 'p1-long-2',
        questionText: 'Differentiate between uniform linear motion and uniform circular motion on the basis of: (i) Speed, (ii) Velocity, (iii) Acceleration, and (iv) Direction of motion.',
        marks: 4,
        difficulty: 'Medium',
        correctAnswer: '(i) Speed: Constant in both motions.\n(ii) Velocity: Constant in uniform linear motion, but variable in uniform circular motion due to changing direction.\n(iii) Acceleration: Zero in uniform linear motion, but non-zero (centripetal acceleration exists) in uniform circular motion.\n(iv) Direction: Unchanged in linear motion, but continuously changing at every instant along the tangent in circular motion.',
        explanation: 'Uniform circular motion is an accelerated motion with constant speed but variable velocity due to directional change.',
        topic: 'Uniform Circular Motion'
      }
    ],
    reason: [
      {
        id: 'p1-reason-1',
        questionText: 'Give a scientific reason why the steering wheel of a car is made large in diameter.',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'A steering wheel with a larger diameter increases the distance from the steering column (axis of rotation). Since Torque = Force × Distance, a larger diameter provides a larger perpendicular distance, meaning the driver can apply a smaller force to produce the same turning moment (torque) needed to steer the car.',
        explanation: 'Increasing the diameter increases the couple arm, reducing the muscular effort required to rotate the steering assembly.',
        topic: 'Couple and Moment of Couple'
      },
      {
        id: 'p1-reason-2',
        questionText: 'Why is it easier to open a heavy door by pushing it near its free outer edge rather than near the hinges?',
        marks: 2,
        difficulty: 'Easy',
        correctAnswer: 'The turning moment of force is the product of force and perpendicular distance from the pivot (hinge). By pushing near the outer edge, the perpendicular distance (d) is maximum, so a much smaller force is needed to produce the required turning moment. Near the hinges, d is very small, requiring a huge force.',
        explanation: 'Minimizing distance requires massive force to produce equivalent torque, while maximizing distance makes rotation effortless.',
        topic: 'Torque (Moment of Force)'
      }
    ],
    num: [
      {
        id: 'p1-num-1',
        questionText: 'A uniform meter rule of weight 100 gf is pivoted at its C.G. (50 cm mark). If a weight of 50 gf is suspended at the 10 cm mark, where should a weight of 80 gf be suspended to balance the rule horizontally?',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: 'At the 75 cm mark (25 cm from the pivot on the other side).',
        explanation: 'Pivot is at 50 cm. Left weight = 50 gf at 10 cm. Distance = 50 - 10 = 40 cm. Anticlockwise moment = 50 × 40 = 2000 gf·cm.\nTo balance, we need a clockwise moment of 2000 gf·cm on the right side. Right weight = 80 gf at distance x.\n80 × x = 2000 => x = 25 cm from pivot.\nThus, suspend the 80 gf weight at 50 + 25 = 75 cm mark.',
        topic: 'Principle of Moments'
      },
      {
        id: 'p1-num-2',
        questionText: 'A uniform meter scale balances horizontally on a knife-edge placed at the 60 cm mark when a mass of 10 g is suspended at its 90 cm mark. Find the mass of the meter scale.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '30 g',
        explanation: 'Let mass of rule be M. Weight Mg acts at its center of gravity (50 cm mark). The pivot is at 60 cm.\nAnticlockwise load arm (from 50 cm to 60 cm) = 10 cm. Anticlockwise moment = M × 10.\nClockwise suspended mass = 10 g at 90 cm. Clockwise load arm (from 60 cm to 90 cm) = 30 cm. Clockwise moment = 10 × 30 = 300 g·cm.\nFor balance: M × 10 = 300 => M = 30 g.',
        topic: 'Principle of Moments'
      }
    ],
    diagram: [
      {
        id: 'p1-diag-1',
        questionText: 'Look at the balancing beam pivoted at the center. If a mass of 40 g is suspended at 15 cm to the left of the pivot, and another mass of 30 g is suspended at d cm to the right of the pivot to keep the beam balanced, find the distance d.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: 'd = 20 cm',
        explanation: 'By the Principle of Moments, Left Moment = Right Moment.\n40 g × 15 cm = 30 g × d cm\n600 = 30 × d => d = 600 / 30 = 20 cm.',
        topic: 'Principle of Moments'
      },
      {
        id: 'p1-diag-2',
        questionText: 'A see-saw of length 4 m is pivoted at its center. A boy of weight 30 kgf sits at a distance of 1.5 m from the pivot on the left. Where should a man of weight 45 kgf sit on the right side to keep the see-saw balanced?',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '1.0 m from the pivot',
        explanation: 'For see-saw equilibrium: Left Moment = Right Moment.\n30 kgf × 1.5 m = 45 kgf × x\n45 = 45 × x => x = 1.0 m from pivot.',
        topic: 'Principle of Moments'
      }
    ],
    board: [
      {
        id: 'p1-board-1',
        questionText: 'A uniform half-meter scale of weight 50 gf is pivoted at the 30 cm mark. (i) In which direction will it tilt when left free? (ii) What minimum force should be applied at the 50 cm mark to balance it horizontally?',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) It will tilt clockwise towards the 50 cm end.\n(ii) 12.5 gf acting downwards.',
        explanation: '(i) A uniform half-meter scale (0 to 50 cm) has its CG at the 25 cm mark. Its weight of 50 gf acts downwards at 25 cm. Since the pivot is at 30 cm, this weight is to the left of the pivot, producing an anticlockwise moment of 50 gf × (30 - 25) = 250 gf·cm. The scale will tilt anticlockwise (downwards on the left).\n(ii) To balance, we need a clockwise moment of 250 gf·cm. Placing a force F at the 50 cm end (distance from pivot = 50 - 30 = 20 cm) produces a clockwise moment of F × 20.\nF × 20 = 250 => F = 12.5 gf acting downwards.',
        topic: 'Principle of Moments'
      },
      {
        id: 'p1-board-2',
        questionText: 'A uniform meter rule of mass 100 g is balanced horizontally on a pivot at the 40 cm mark by suspending a weight W at the 20 cm mark. (i) Find the value of W. (ii) To which side will the rule tilt if the weight W is shifted to the 10 cm mark?',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) W = 50 gf\n(ii) It will tilt anticlockwise (towards the 0 cm side).',
        explanation: '(i) The rule weight (100 gf) acts at the 50 cm mark (CG). Pivot is at 40 cm.\nClockwise moment = 100 gf × (50 - 40) = 1000 gf·cm.\nW is suspended at 20 cm. Anticlockwise load arm = 40 - 20 = 20 cm. Anticlockwise moment = W × 20.\nFor balance: W × 20 = 1000 => W = 50 gf.\n(ii) If W is moved to 10 cm, anticlockwise arm becomes 40 - 10 = 30 cm. New anticlockwise moment = 50 gf × 30 = 1500 gf·cm.\nSince anticlockwise moment (1500 gf·cm) is greater than clockwise moment (1000 gf·cm), the rule tilts anticlockwise.',
        topic: 'Principle of Moments'
      }
    ]
  },
  'p-2': {
    mcq: [
      {
        id: 'p2-mcq-1',
        questionText: 'A body of mass 4 kg is moving with a constant velocity of 5 m/s. Calculate its kinetic energy.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '50 J',
        options: ['10 J', '20 J', '50 J', '100 J'],
        explanation: 'Using Kinetic Energy K = 1/2 m v². Given m = 4 kg, v = 5 m/s. K = 1/2 × 4 × (5)² = 2 × 25 = 50 Joules.',
        topic: 'Kinetic Energy and Momentum'
      },
      {
        id: 'p2-mcq-2',
        questionText: 'Which of the following is the correct mathematical unit conversion for 1 Kilowatt-hour (kWh)?',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: '3.6 × 10^6 J',
        options: ['3.6 × 10^3 J', '3.6 × 10^5 J', '3.6 × 10^6 J', '3.6 × 10^9 J'],
        explanation: '1 kWh = 1 kW × 1 hour = 1000 W × 3600 seconds = 3,600,000 Joules = 3.6 × 10⁶ Joules.',
        topic: 'Units of Work and Power'
      },
      {
        id: 'p2-mcq-3',
        questionText: 'A force of 15 N acts on a body and displaces it by 2 m in a direction making an angle of 60 degrees with the force. Calculate the work done.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: '15 J',
        options: ['15 J', '30 J', '7.5 J', '0 J'],
        explanation: 'Work W = F × d × cos(θ). Given F = 15 N, d = 2 m, θ = 60°. W = 15 × 2 × cos(60°) = 30 × 0.5 = 15 Joules.',
        topic: 'Work and its conditions'
      },
      {
        id: 'p2-mcq-4',
        questionText: 'Two bodies of masses 1 kg and 9 kg have equal kinetic energies. Find the ratio of their linear momenta.',
        marks: 1,
        difficulty: 'Hard',
        correctAnswer: '1:3',
        options: ['1:1', '1:3', '1:9', '3:1'],
        explanation: 'Linear momentum p = √(2mK). Since kinetic energy K is same for both: p1/p2 = √(m1/m2) = √(1/9) = 1/3. Hence, the ratio is 1:3.',
        topic: 'Kinetic Energy and Momentum'
      }
    ],
    fill: [
      {
        id: 'p2-fill-1',
        questionText: 'Work done by a force is negative when the angle between force and displacement is __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '180 degrees',
        options: ['0 degrees', '90 degrees', '180 degrees', '45 degrees'],
        explanation: 'W = F d cos(θ). When θ = 180 degrees, cos(180°) = -1, making the work done negative, e.g., work done by friction.',
        topic: 'Work and its conditions'
      },
      {
        id: 'p2-fill-2',
        questionText: 'When a body falls freely under gravity, its gravitational potential energy is converted into __________ energy.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'kinetic',
        options: ['kinetic', 'chemical', 'heat', 'sound'],
        explanation: 'According to the law of conservation of mechanical energy, potential energy decreases and is transformed into kinetic energy during free fall.',
        topic: 'Conservation of Mechanical Energy'
      }
    ],
    tf: [
      {
        id: 'p2-tf-1',
        questionText: 'State True or False: Kilowatt is a unit of energy while Kilowatt-hour is a unit of power.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'Kilowatt (kW) is a unit of power, while Kilowatt-hour (kWh) is a unit of electrical energy.',
        topic: 'Units of Work and Power'
      },
      {
        id: 'p2-tf-2',
        questionText: 'State True or False: The total mechanical energy of a body remains conserved even when non-conservative forces like friction are present.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'Friction converts some mechanical energy into non-mechanical forms like heat and sound. Therefore, mechanical energy is not conserved, though total energy remains constant.',
        topic: 'Conservation of Mechanical Energy'
      }
    ],
    match: [
      {
        id: 'p2-match-1',
        questionText: 'What is the equivalent value of 1 Horsepower (hp) in Watts?',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '746 W',
        options: ['500 W', '746 W', '1000 W', '1.5 kW'],
        explanation: 'Horsepower is an engineering unit of power. 1 hp is defined as exactly equal to 746 Watts.',
        topic: 'Units of Work and Power'
      },
      {
        id: 'p2-match-2',
        questionText: 'Match the energy converter: An electric motor is a device that converts __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Electrical Energy into Mechanical Energy',
        options: [
          'Electrical Energy into Mechanical Energy',
          'Mechanical Energy into Electrical Energy',
          'Chemical Energy into Electrical Energy',
          'Heat Energy into Mechanical Energy'
        ],
        explanation: 'An electric motor takes in electricity and produces rotary mechanical work.',
        topic: 'Energy Sources and Conversions'
      }
    ],
    ar: [
      {
        id: 'p2-ar-1',
        questionText: 'Assertion (A): No work is done by the centripetal force on a body moving in a circular path.\nReason (R): Centripetal force is always perpendicular to the instantaneous displacement of the body.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Both A and R are true and R is correct explanation of A',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'Centripetal force acts towards the center, whereas displacement is tangential (at 90 degrees). Since θ = 90°, cos(90°) = 0, work done is exactly zero.',
        topic: 'Work and its conditions'
      },
      {
        id: 'p2-ar-2',
        questionText: 'Assertion (A): A compressed spring possesses elastic potential energy.\nReason (R): Work done in compressing the spring against the restoring force is stored in the form of potential energy.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Both A and R are true and R is correct explanation of A',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'Any configuration change against restoring forces requires work input, which is completely stored as potential energy.',
        topic: 'Potential Energy'
      }
    ],
    vshort: [
      {
        id: 'p2-vshort-1',
        questionText: 'State the relationship between linear momentum (p) and kinetic energy (K) of a body of mass m.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'K = p² / (2m) or p = √(2mK)',
        explanation: 'K = 1/2 m v². Since p = mv => v = p/m. Substituting gives K = p² / (2m).',
        topic: 'Kinetic Energy and Momentum'
      },
      {
        id: 'p2-vshort-2',
        questionText: 'Under what condition is the work done by a force on a body zero, even when both force and displacement are non-zero?',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'When the angle between the applied force and displacement is exactly 90 degrees (cos 90° = 0).',
        explanation: 'Since Work = F × d × cos(θ), if θ = 90°, the work is zero (e.g. gravitational force on a horizontal satellite).',
        topic: 'Work and its conditions'
      }
    ],
    short: [
      {
        id: 'p2-short-1',
        questionText: 'State the Work-Energy Theorem and write its mathematical equation.',
        marks: 2,
        difficulty: 'Easy',
        correctAnswer: 'The Work-Energy Theorem states that the work done by a net force acting on a body is equal to the change in its kinetic energy.\nEquation: W = ΔK = K_final - K_initial = 1/2 m v² - 1/2 m u².',
        explanation: 'Work done is converted entirely into mechanical motion energy.',
        topic: 'Work-Energy Theorem'
      },
      {
        id: 'p2-short-2',
        questionText: 'Define Power. State its SI unit and differentiate it from Work.',
        marks: 2,
        difficulty: 'Easy',
        correctAnswer: 'Power is the rate at which work is done (P = W/t). Its SI unit is the Watt (W).\nWork is independent of the time taken, whereas power depends directly on the time taken to complete the work.',
        explanation: 'Power measures how fast energy is spent; work measures the total energy spent.',
        topic: 'Units of Work and Power'
      }
    ],
    long: [
      {
        id: 'p2-long-1',
        questionText: 'Prove that for a body of mass m falling freely under gravity from a height h, the total mechanical energy remains constant at any point of its motion.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: 'Let the body be at height h (Position A). Here, velocity u = 0. Potential Energy (U) = mgh, Kinetic Energy (K) = 0. Total Energy E_A = mgh.\n\nLet it fall a distance x to Position B. Height = h - x. Velocity v² = u² + 2gx = 2gx.\nU_B = mg(h - x), K_B = 1/2 m (2gx) = mgx.\nTotal Energy E_B = U_B + K_B = mgh - mgx + mgx = mgh.\n\nAt the ground (Position C), height = 0. Velocity v² = 2gh.\nU_C = 0, K_C = 1/2 m (2gh) = mgh.\nTotal Energy E_C = mgh.\n\nSince E_A = E_B = E_C = mgh, total mechanical energy is conserved.',
        explanation: 'As the body falls, potential energy decreases and kinetic energy increases proportionally, keeping the sum constant.',
        topic: 'Conservation of Mechanical Energy'
      },
      {
        id: 'p2-long-2',
        questionText: 'State the law of conservation of mechanical energy. Discuss the energy transformations in a swinging simple pendulum, and explain where the potential and kinetic energies are maximum and minimum.',
        marks: 4,
        difficulty: 'Medium',
        correctAnswer: 'The law states that in the absence of friction or dissipative forces, the total mechanical energy (sum of potential and kinetic energy) of a system remains constant.\nIn a swinging simple pendulum:\n1. At the mean position, the bob is at the lowest point. Its height h = 0, so Potential Energy (U) is minimum (zero), and Kinetic Energy (K) is maximum.\n2. At the extreme positions, the bob is at its maximum height h. It momentarily stops, so its velocity v = 0. Kinetic Energy is minimum (zero), and Potential Energy is maximum.\nAt any intermediate point, the energy is partly potential and partly kinetic, but the total energy remains constant throughout.',
        explanation: 'Energy continuously cycles between gravity-bound potential states and velocity-bound kinetic states.',
        topic: 'Conservation of Mechanical Energy'
      }
    ],
    reason: [
      {
        id: 'p2-reason-1',
        questionText: 'Give a scientific reason why a coolie carrying a heavy bag on his head does no work against gravity while walking on a horizontal railway platform.',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'The weight of the bag acts vertically downwards (gravitational force). The displacement of the coolie is horizontal. The angle between the force and the displacement is 90 degrees. Since Work = F × d × cos(90°) and cos(90°) = 0, the work done against gravity is zero.',
        explanation: 'Even though effort is exerted, no work is done under physical definitions since force and displacement are orthogonal.',
        topic: 'Work and its conditions'
      },
      {
        id: 'p2-reason-2',
        questionText: 'Why is the kinetic energy of a fast-moving bullet much larger than that of a slow-moving heavy truck?',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'Kinetic energy is given by K = 1/2 m v². It is directly proportional to mass (m) but directly proportional to the square of velocity (v²). Because velocity is squared, an extremely high velocity (as in a bullet) yields a far larger kinetic energy compared to a large mass moving at a very slow pace.',
        explanation: 'Velocity scales exponentially in energy calculations compared to the linear contribution of mass.',
        topic: 'Kinetic Energy and Momentum'
      }
    ],
    num: [
      {
        id: 'p2-num-1',
        questionText: 'An electric pump of power 2 kW lifts 100 kg of water to a height of 10 m in 10 seconds. Calculate: (i) the work done, and (ii) the efficiency of the pump. (Take g = 10 m/s²)',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '(i) Work done = mgh = 100 × 10 × 10 = 10,000 J.\n(ii) Efficiency = Work Output / Work Input.\nWork Input = Power × Time = 2000 W × 10 s = 20,000 J.\nEfficiency = 10,000 / 20,000 = 0.50 or 50%.',
        explanation: 'Work output is the potential energy given to water. Input is total electric energy supplied.',
        topic: 'Units of Work and Power'
      },
      {
        id: 'p2-num-2',
        questionText: 'A crane lifts a block of mass 150 kg vertically upwards with a uniform velocity of 2 m/s. Calculate: (i) the force exerted by the crane, and (ii) the power developed by the crane. (Take g = 10 m/s²)',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '(i) Force F = weight = m × g = 150 kg × 10 m/s² = 1500 N.\n(ii) Power P = Force × Velocity = 1500 N × 2 m/s = 3000 W = 3 kW.',
        explanation: 'Under constant velocity, the pulling force equals the load weight, and the rate of work is simply F × v.',
        topic: 'Units of Work and Power'
      }
    ],
    diagram: [
      {
        id: 'p2-diag-1',
        questionText: 'Look at a swinging simple pendulum. At the extreme left swing, its height is 20 cm above the low mean position. If g = 10 m/s², what is the maximum velocity of the pendulum bob as it passes through the mean position?',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '2 m/s',
        explanation: 'By conservation of energy, P.E. at extreme position = K.E. at mean position.\nmgh = 1/2 m v² => v = √(2gh).\nHeight h = 20 cm = 0.2 m.\nv = √(2 × 10 × 0.2) = √(4) = 2 m/s.',
        topic: 'Conservation of Mechanical Energy'
      },
      {
        id: 'p2-diag-2',
        questionText: 'A roller coaster car of mass 200 kg is at the top of a peak of height 30 m (Point A). It rolls down a friction-free track to a lower trough of height 10 m (Point B). What is its kinetic energy at Point B? (Take g = 10 m/s²)',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '40,000 J',
        explanation: 'By Conservation of Mechanical Energy, Total Energy at A = Total Energy at B.\nAt A, K_A = 0, U_A = mgh1 = 200 × 10 × 30 = 60,000 J. Total Energy = 60,000 J.\nAt B, U_B = mgh2 = 200 × 10 × 10 = 20,000 J.\nHence, K_B = Total Energy - U_B = 60,000 - 20,000 = 40,000 J.',
        topic: 'Conservation of Mechanical Energy'
      }
    ],
    board: [
      {
        id: 'p2-board-1',
        questionText: 'A bullet of mass 50 g moving with velocity 100 m/s strikes a wooden block and penetrates 20 cm into it before coming to rest. Calculate: (i) the initial kinetic energy of the bullet, (ii) the work done by the bullet on the block, and (iii) the average resistive force offered by the block.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) Initial KE = 250 J.\n(ii) Work done = 250 J.\n(iii) Resistive Force = 1250 N.',
        explanation: '(i) m = 50 g = 0.05 kg. KE = 1/2 m v² = 1/2 × 0.05 × (100)² = 0.025 × 10000 = 250 J.\n(ii) By Work-Energy Theorem, work done equals change in KE = 250 J (bullet does 250 J of work on block to stop).\n(iii) Work = Force × distance => 250 = F × 0.20 m (since 20 cm = 0.2 m).\nF = 250 / 0.20 = 1250 N.',
        topic: 'Work-Energy Theorem'
      },
      {
        id: 'p2-board-2',
        questionText: 'A ball of mass 0.5 kg is dropped from a height of 20 m. (i) Calculate the potential energy of the ball before release. (ii) Calculate the kinetic energy and velocity of the ball after falling through a distance of 15 m. (Take g = 10 m/s²)',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) Potential Energy = 100 J.\n(ii) Kinetic Energy = 75 J, Velocity = 17.32 m/s.',
        explanation: '(i) Initial P.E. = mgh = 0.5 × 10 × 20 = 100 J.\n(ii) Falling 15 m leaves it at height h\' = 20 - 15 = 5 m. Potential Energy here U\' = mgh\' = 0.5 × 10 × 5 = 25 J.\nBy Conservation of Energy, Kinetic Energy K\' = Total Energy - U\' = 100 - 25 = 75 J.\nSince K\' = 1/2 m v² => 75 = 1/2 × 0.5 × v² => v² = 300 => v = √300 ≈ 17.32 m/s.',
        topic: 'Conservation of Mechanical Energy'
      }
    ]
  },
  'p-3': {
    mcq: [
      {
        id: 'p3-mcq-1',
        questionText: 'A machine has a mechanical advantage of 4 and velocity ratio of 5. Calculate its efficiency.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '80%',
        options: ['20%', '50%', '80%', '100%'],
        explanation: 'Efficiency η = MA / VR = 4 / 5 = 0.80 = 80%.',
        topic: 'Efficiency & Principle of Machines'
      },
      {
        id: 'p3-mcq-2',
        questionText: 'For a class II lever, which of the following is always true?',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'MA > 1',
        options: ['MA < 1', 'MA = 1', 'MA > 1', 'MA can be anything'],
        explanation: 'In a Class II lever, the load is in the middle (between Fulcrum and Effort). This ensures that the effort arm is always greater than the load arm. Since MA = Effort Arm / Load Arm, MA is always greater than 1.',
        topic: 'Levers of Class I, II, and III'
      },
      {
        id: 'p3-mcq-3',
        questionText: 'In a block and tackle system with 4 pulleys, the velocity ratio is 4. If a load of 150 kgf is raised by applying an effort of 50 kgf, find its efficiency.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: '75%',
        options: ['50%', '75%', '80%', '100%'],
        explanation: 'Mechanical Advantage MA = Load / Effort = 150 / 50 = 3. Efficiency η = MA / VR = 3 / 4 = 0.75 = 75%.',
        topic: 'Block and Tackle Pulley System'
      },
      {
        id: 'p3-mcq-4',
        questionText: 'Which class of lever always has a mechanical advantage less than 1 (acting as a speed multiplier)?',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Class III lever',
        options: ['Class I lever', 'Class II lever', 'Class III lever', 'None of these'],
        explanation: 'In a Class III lever, the effort is in the middle, making the effort arm always smaller than the load arm. Hence, MA = Effort Arm / Load Arm is always less than 1.',
        topic: 'Levers of Class I, II, and III'
      }
    ],
    fill: [
      {
        id: 'p3-fill-1',
        questionText: 'The Velocity Ratio of a block and tackle pulley system having 5 pulleys is __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '5',
        options: ['1', '2.5', '4', '5'],
        explanation: 'For a block and tackle pulley system with n pulleys, the velocity ratio is geometrically fixed and always equal to n.',
        topic: 'Block and Tackle Pulley System'
      },
      {
        id: 'p3-fill-2',
        questionText: 'For an ideal machine with no friction and negligible weight of moving parts, the efficiency is exactly __________.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: '100%',
        options: ['50%', '75%', '90%', '100%'],
        explanation: 'An ideal machine has no energy losses, meaning Work Output = Work Input, resulting in an efficiency of 100% (or 1).',
        topic: 'Efficiency & Principle of Machines'
      }
    ],
    tf: [
      {
        id: 'p3-tf-1',
        questionText: 'State True or False: In a practical machine, both mechanical advantage and velocity ratio decrease due to friction.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'Velocity Ratio is a geometric property and remains constant. Only the Mechanical Advantage decreases due to friction, which in turn reduces efficiency.',
        topic: 'Mechanical Advantage & Velocity Ratio'
      },
      {
        id: 'p3-tf-2',
        questionText: 'State True or False: A single fixed pulley acts as a force multiplier because its mechanical advantage is greater than 1.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'False',
        options: ['True', 'False'],
        explanation: 'A single fixed pulley has an ideal mechanical advantage of exactly 1. It does not multiply force, but merely changes the direction of the applied effort to a convenient direction.',
        topic: 'Single Fixed Pulley'
      }
    ],
    match: [
      {
        id: 'p3-match-1',
        questionText: 'The primary mechanical advantage of using a single fixed pulley is:',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'To change direction of effort',
        options: ['To act as force multiplier', 'To multiply speed', 'To change direction of effort', 'To reduce friction'],
        explanation: 'A single fixed pulley has MA = 1 and VR = 1. It provides no force multiplication, but changes the direction of effort to a convenient downwards direction.',
        topic: 'Single Fixed Pulley'
      },
      {
        id: 'p3-match-2',
        questionText: 'Match the device: A nutcracker belongs to which class of levers?',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Class II lever',
        options: ['Class I lever', 'Class II lever', 'Class III lever', 'None of these'],
        explanation: 'In a nutcracker, the nut (load) is in the middle, the pivot (fulcrum) is at one end, and force (effort) is applied at the free handles. This configuration is a Class II lever.',
        topic: 'Levers of Class I, II, and III'
      }
    ],
    ar: [
      {
        id: 'p3-ar-1',
        questionText: 'Assertion (A): Sugar tongs belong to Class III levers and have a mechanical advantage less than 1.\nReason (R): Class III levers act as speed multipliers because the effort arm is always smaller than the load arm.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Both A and R are true and R is correct explanation of A',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'In sugar tongs, the effort is applied in the middle (Class III). The effort arm is less than the load arm, so MA = Effort Arm / Load Arm < 1. It acts as a speed/displacement multiplier.',
        topic: 'Levers of Class I, II, and III'
      },
      {
        id: 'p3-ar-2',
        questionText: 'Assertion (A): The mechanical advantage of a Class II lever is always greater than 1.\nReason (R): In Class II levers, the load lies in the middle, ensuring the effort arm is always longer than the load arm.',
        marks: 1,
        difficulty: 'Medium',
        correctAnswer: 'Both A and R are true and R is correct explanation of A',
        options: [
          'Both A and R are true and R is correct explanation of A',
          'Both A and R are true but R is not correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        explanation: 'Since MA = Effort Arm / Load Arm, and the effort arm is geometrically larger than the load arm in any Class II lever, the MA is always greater than 1, making it a force multiplier.',
        topic: 'Levers of Class I, II, and III'
      }
    ],
    vshort: [
      {
        id: 'p3-vshort-1',
        questionText: 'Write the mathematical relation connecting Mechanical Advantage, Velocity Ratio, and Efficiency.',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'MA = η × VR or η = MA / VR',
        explanation: 'Efficiency η = Work Output / Work Input = (Load × d_L) / (Effort × d_E) = (Load/Effort) / (d_E/d_L) = MA / VR.',
        topic: 'Efficiency & Principle of Machines'
      },
      {
        id: 'p3-vshort-2',
        questionText: 'Why is the efficiency of a practical machine always less than 100%?',
        marks: 1,
        difficulty: 'Easy',
        correctAnswer: 'Due to friction in moving parts, weight of the moving parts of the machine, and the elasticity of strings.',
        explanation: 'Energy is always lost as heat and sound in overcoming friction and lifting auxiliary machine components, making output work less than input work.',
        topic: 'Efficiency & Principle of Machines'
      }
    ],
    short: [
      {
        id: 'p3-short-1',
        questionText: 'Differentiate between Class I, Class II, and Class III levers based on the relative position of Fulcrum, Load, and Effort.',
        marks: 2,
        difficulty: 'Easy',
        correctAnswer: '1. Class I: Fulcrum (F) is in the middle, between Load (L) and Effort (E).\n2. Class II: Load (L) is in the middle, between Fulcrum (F) and Effort (E).\n3. Class III: Effort (E) is in the middle, between Fulcrum (F) and Load (L).',
        explanation: 'A helpful mnemonic is "FLE in the Middle" (Class 1: F, Class 2: L, Class 3: E).',
        topic: 'Levers of Class I, II, and III'
      },
      {
        id: 'p3-short-2',
        questionText: 'State two methods by which the mechanical advantage of a practical block and tackle system can be increased.',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: '1. Lubricating the bearings of the pulleys to reduce friction.\n2. Making the lower movable block of pulleys as light as possible.',
        explanation: 'Reducing frictional resistance and dead-weight of movable pulleys maximizes the active force transfer, increasing MA and efficiency.',
        topic: 'Block and Tackle Pulley System'
      }
    ],
    long: [
      {
        id: 'p3-long-1',
        questionText: 'Derive the Velocity Ratio and ideal Mechanical Advantage of a Single Movable Pulley supported by two segments of string.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: 'In a single movable pulley, the load L is suspended from the axle. The pulley is supported by two segments of a single string. Tension T acts vertically upwards in both segments.\nTherefore, Load L is balanced by two tension forces: L = 2T.\nEffort E is applied at the free end of the string, balanced by single tension: E = T.\nIdeal Mechanical Advantage MA = Load / Effort = 2T / T = 2.\n\nLet the load move upwards by distance x. To raise the pulley by x, both segments must be shortened by x. Thus, the effort string must be pulled up by distance 2x.\nVelocity Ratio VR = d_E / d_L = 2x / x = 2.',
        explanation: 'Since the displacement of effort is twice that of the load, the velocity ratio is 2, making it a force multiplier.',
        topic: 'Single Movable Pulley'
      },
      {
        id: 'p3-long-2',
        questionText: 'Draw a schematic diagram of a block and tackle system of 5 pulleys with velocity ratio 5. Clearly show: (i) the tackle winding starting from the correct hook, (ii) the direction of tension in each segment, and (iii) the application points of load and effort.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '1. Draw 3 pulleys in the upper fixed block and 2 pulleys in the lower movable block.\n2. Since the velocity ratio is 5 (odd), the string must be tied to the hook of the lower movable block.\n3. Wind the string around the top pulley of the upper block, then the top of the lower block, and so on.\n4. Show the free end of the string exiting the top block with effort E pointing downwards.\n5. Mark tension T acting vertically upwards in all five segments supporting the lower block.\n6. Suspended load L acts downwards from the lower block axle. Tension relation: L = 5T, E = T. Hence, ideal MA = 5, VR = 5.',
        explanation: 'For systems with an odd number of pulleys, the string must tie to the lower block to gain the extra supporting segment.',
        topic: 'Block and Tackle Pulley System'
      }
    ],
    reason: [
      {
        id: 'p3-reason-1',
        questionText: 'Give a scientific reason why the efficiency of a practical block and tackle pulley system decreases as the weight of the lower block of pulleys increases.',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'When lifting a load, the effort must lift not only the useful load but also the heavy lower movable block of pulleys. The work done in lifting the lower block is wasted (useless work). As the weight of the lower block increases, the wasted work increases, which reduces the useful work output per unit input work, thereby decreasing efficiency.',
        explanation: 'Efficiency is η = 1 - w/(E·VR). Larger movable block weight w directly reduces efficiency.',
        topic: 'Block and Tackle Pulley System'
      },
      {
        id: 'p3-reason-2',
        questionText: 'Why is a single movable pulley always used in combination with a single fixed pulley in practice?',
        marks: 2,
        difficulty: 'Medium',
        correctAnswer: 'A single movable pulley acts as a force multiplier (MA = 2), but the effort must be applied in an inconvenient upward direction. By combining it with a single fixed pulley, the direction of the effort can be changed to a convenient downward direction (using gravity/body weight) without altering the mechanical advantage.',
        explanation: 'Ergonomic convenience is achieved by pairing the movable pulley with a fixed turning node.',
        topic: 'Single Movable Pulley'
      }
    ],
    num: [
      {
        id: 'p3-num-1',
        questionText: 'A block and tackle system of 4 pulleys is used to lift a load of 300 kgf. If the efficiency of the system is 75%, calculate: (i) the velocity ratio, (ii) mechanical advantage, and (iii) the effort required.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '(i) Velocity Ratio = 4.\n(ii) MA = 3.\n(iii) Effort = 100 kgf.',
        explanation: '(i) For block and tackle, VR = number of pulleys = 4.\n(ii) η = MA / VR => 0.75 = MA / 4 => MA = 3.\n(iii) MA = L / E => 3 = 300 / E => E = 100 kgf.',
        topic: 'Block and Tackle Pulley System'
      },
      {
        id: 'p3-num-2',
        questionText: 'A crowbar of length 150 cm is used as a Class I lever to lift a heavy rock. The rock is at a distance of 30 cm from the fulcrum. Find: (i) the load arm, (ii) the effort arm, (iii) the mechanical advantage of the crowbar, and (iv) the effort needed to lift a rock of weight 120 kgf.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '(i) Load arm = 30 cm.\n(ii) Effort arm = 120 cm.\n(iii) MA = 4.\n(iv) Effort needed = 30 kgf.',
        explanation: '(i) Rock is load, distance to fulcrum = 30 cm.\n(ii) Effort arm = Total length - Load arm = 150 - 30 = 120 cm.\n(iii) MA = Effort Arm / Load Arm = 120 / 30 = 4.\n(iv) MA = Load / Effort => 4 = 120 / Effort => Effort = 30 kgf.',
        topic: 'Levers of Class I, II, and III'
      }
    ],
    diagram: [
      {
        id: 'p3-diag-1',
        questionText: 'A crowbar of length 120 cm is used as a Class I lever to displace a heavy stone. If the fulcrum is placed at a distance of 20 cm from the stone, find the mechanical advantage of the crowbar.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '5',
        explanation: 'Total length of crowbar = 120 cm.\nFulcrum is placed at 20 cm from the load (stone).\nLoad Arm = 20 cm.\nEffort Arm = Total length - Load Arm = 120 - 20 = 100 cm.\nMechanical Advantage MA = Effort Arm / Load Arm = 100 / 20 = 5.',
        topic: 'Levers of Class I, II, and III'
      },
      {
        id: 'p3-diag-2',
        questionText: 'A lever of length 120 cm has its fulcrum at one end. A load of 60 kgf is placed at 30 cm from the fulcrum. (i) Identify the class of lever. (ii) Calculate the effort arm. (iii) Calculate the effort needed to balance the lever when applied at the other end.',
        marks: 3,
        difficulty: 'Medium',
        correctAnswer: '(i) Class II lever\n(ii) Effort arm = 120 cm\n(iii) Effort = 15 kgf',
        explanation: '(i) Load is between the fulcrum (at the end) and effort (at the other end), which is a Class II lever.\n(ii) Effort is applied at the very end, so distance from fulcrum is the total length = 120 cm.\n(iii) By moments: Effort × 120 = 60 × 30 => Effort = 1800 / 120 = 15 kgf.',
        topic: 'Levers of Class I, II, and III'
      }
    ],
    board: [
      {
        id: 'p3-board-1',
        questionText: 'A fire tongs (Class III lever) has arms of length 20 cm. An effort is applied in the middle of the arm to lift a coal of weight 2 kgf. (i) Draw the schematic diagram. (ii) Calculate the effort arm and load arm. (iii) Find the mechanical advantage. (iv) Calculate the effort needed.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) Fulcrum at pivot, effort in middle (10 cm), load at tip (20 cm).\n(ii) Effort arm = 10 cm, Load arm = 20 cm.\n(iii) MA = 0.5.\n(iv) Effort = 4 kgf.',
        explanation: '(i) Schematic shows Fulcrum at one end, Effort at the center (10 cm from fulcrum), and Load at the other end (20 cm from fulcrum).\n(ii) Distance from fulcrum to effort = 10 cm. Distance from fulcrum to load = 20 cm.\n(iii) MA = Effort Arm / Load Arm = 10 / 20 = 0.5.\n(iv) MA = Load / Effort => 0.5 = 2 kgf / Effort => Effort = 2 / 0.5 = 4 kgf.',
        topic: 'Levers of Class I, II, and III'
      },
      {
        id: 'p3-board-2',
        questionText: 'A practical machine is driven by a 100 kgf effort. The displacement of the effort is 8 m, while a load of 300 kgf is raised by 2 m. Calculate: (i) the mechanical advantage, (ii) the velocity ratio, (iii) the efficiency of the machine, and (iv) the energy lost in overcoming friction.',
        marks: 4,
        difficulty: 'Hard',
        correctAnswer: '(i) MA = 3\n(ii) VR = 4\n(iii) Efficiency = 75%\n(iv) Lost work = 200 kgf·m.',
        explanation: '(i) MA = Load / Effort = 300 / 100 = 3.\n(ii) VR = d_E / d_L = 8 m / 2 m = 4.\n(iii) η = MA / VR = 3 / 4 = 75%.\n(iv) Work Input = Effort × d_E = 100 kgf × 8 m = 800 kgf·m. Work Output = Load × d_L = 300 kgf × 2 m = 600 kgf·m. Lost Work = Work Input - Work Output = 800 - 600 = 200 kgf·m.',
        topic: 'Efficiency & Principle of Machines'
      }
    ]
  }
};
