export interface TopicData {
  id: string;
  title: string;
  concept: string;
  explanation: string;
  realLifeExample: string;
  commonMistakes: string;
  icseBoardTip: string;
}

export interface AcidsBasesSaltsChapterData {
  title: string;
  chapterIntro: {
    importance: string;
    aboutAcidsBases: string;
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

export const ACIDS_BASES_SALTS_CHAPTER_DATA: AcidsBasesSaltsChapterData = {
  title: "Acids, Bases and Salts",
  chapterIntro: {
    importance: "Acids, bases, and salts are the chemical pillars of our daily existence and industrial progress. From the highly corrosive hydrochloric acid in our stomachs that digests food, to the alkaline soaps we use to wash our hands, and the common salt (NaCl) that seasons our meals and acts as a raw material for countless chemical industries—these substances are omnipresent. In chemical laboratories, they define the concept of pH, drive neutralization reactions, and form the basis of qualitative and quantitative analytical procedures.",
    aboutAcidsBases: "According to the classical definition, acids are substances that taste sour and turn blue litmus red, while bases taste bitter, feel slippery, and turn red litmus blue. The modern Arrhenius theory states that acids produce hydronium ions (H₃O⁺) in water, while bases produce hydroxyl ions (OH⁻). A salt is an ionic compound formed when the hydrogen ion of an acid is replaced, wholly or partially, by a metal ion or an ammonium ion.",
    icseImportance: "In the ICSE Class 10 Board Examination, the 'Study of Acids, Bases and Salts' is a high-scoring chapter carrying significant weight. Questions frequently cover definitions, distinction between mineral and organic acids, chemical reactions of acids with metals/carbonates/bicarbonates/sulphites, classification of salts (acid, basic, normal, double, mixed, complex), and specific laboratory preparations. Many questions also require writing balanced chemical equations with state symbols and detailing specific color changes of indicators."
  },
  learningObjectives: [
    "Define acids, bases, alkalis, and salts with suitable chemical equations and examples.",
    "Classify acids and bases based on their source, concentration, strength, and basicity/acidity.",
    "Explain the Arrhenius concept and the formation of the hydronium ion (H₃O⁺) and hydroxyl ion (OH⁻).",
    "Describe the physical and chemical properties of acids and alkalis with balanced chemical equations.",
    "Understand the pH scale, its significance, and the color changes of indicators (litmus, methyl orange, phenolphthalein).",
    "Classify salts into normal, acid, basic, double, mixed, and complex salts.",
    "Master the methods of preparation of soluble and insoluble salts with relevant equations.",
    "Examine the water of crystallization, and the phenomena of efflorescence, deliquescence, and hygroscopy."
  ],
  topics: [
    {
      id: "abs-topic-1",
      title: "Classification & Ionization",
      concept: "Acids release Hydronium ions (H₃O⁺) and Bases release Hydroxyl ions (OH⁻) in aqueous solutions.basicity defines the number of H₃O⁺ ions produced per molecule of acid, while acidity defines OH⁻ ions per molecule of base.",
      explanation: "Acids can be organic (derived from plants/animals, e.g., Acetic acid, Citric acid) or inorganic/mineral (derived from minerals, e.g., HCl, HNO₃, H₂SO₄). \n\n**Arrhenius Concept of Ionization:**\nAn acid is a hydrogen-containing compound which, when dissolved in water, dissociates to produce free hydrogen ions (H⁺). Since H⁺ is a bare proton, it cannot exist independently in water and immediately combines with a water molecule to form a stable **Hydronium Ion (H₃O⁺)**:\n* HCl + H₂O ⇌ H₃O⁺ + Cl⁻\n\nSimilarly, a base is a compound which reacts with hydronium ions to form salt and water. A soluble base is called an **alkali** (e.g., NaOH, KOH, NH₄OH) and dissociates in water to produce **hydroxyl ions (OH⁻)**:\n* NaOH ⎯⎯H₂O⎯⎯→ Na⁺ + OH⁻\n\n**Basicity of Acids:**\n1. **Monobasic:** Produces one H₃O⁺ ion per molecule (e.g., HCl, HNO₃). These form only normal salts.\n2. **Dibasic:** Produces two H₃O⁺ ions per molecule (e.g., H₂SO₄, H₂CO₃). These ionize in two steps and can form both acid salts and normal salts.\n3. **Tribasic:** Produces three H₃O⁺ ions per molecule (e.g., H₃PO₄). These ionize in three steps.",
      realLifeExample: "Our stomach produces dilute hydrochloric acid (HCl) to destroy bacteria and activate digestive enzymes. When we eat extremely spicy food, excess HCl is produced, leading to 'acidity'. We take an antacid tablet containing mild bases like Magnesium Hydroxide [Mg(OH)₂] or Sodium Bicarbonate (NaHCO₃) to neutralize the excess acid.",
      commonMistakes: "Writing H⁺ (aq) instead of H₃O⁺ in official dissociation equations. ICSE examiners strictly look for the hydronium ion H₃O⁺ because bare protons (H⁺) are unstable in water. Always write H⁺ + H₂O ⎯→ H₃O⁺.",
      icseBoardTip: "Understand why concentration is different from strength! Concentration refers to the amount of water mixed with the acid (dilute vs concentrated). Strength refers to the degree of ionization (strong acids like HCl ionize completely, while weak acids like acetic acid ionize only partially)."
    },
    {
      id: "abs-topic-2",
      title: "Chemical Properties of Acids",
      concept: "Acids react characteristically with active metals, metallic oxides/hydroxides, carbonates/bicarbonates, and sulphites/bisulphites to produce specific gases and salts.",
      explanation: "Active metals (above hydrogen in the reactivity series) displace hydrogen from dilute acids to form salt and hydrogen gas:\n* Zn + 2HCl (dil) ⎯→ ZnCl₂ + H₂↑\n* Mg + H₂SO₄ (dil) ⎯→ MgSO₄ + H₂↑\n*(Note: Concentrated or dilute Nitric acid does not usually release hydrogen gas because it is a powerful oxidizing agent and oxidizes hydrogen to water, being itself reduced to nitric oxide, nitrogen dioxide, etc.)*\n\n**Reactions with Oxides and Hydroxides (Neutralization):**\nAcids react with basic oxides or hydroxides to form salt and water only:\n* CuO + 2HCl ⎯→ CuCl₂ (blue-green solution) + H₂O\n* NaOH + HCl ⎯→ NaCl + H₂O\n\n**Reactions with Carbonates and Bicarbonates:**\nAcids decompose carbonates and bicarbonates with brisk effervescence, liberating carbon dioxide (CO₂) gas:\n* CaCO₃ + 2HCl (dil) ⎯→ CaCl₂ + H₂O + CO₂↑\n* NaHCO₃ + HCl (dil) ⎯→ NaCl + H₂O + CO₂↑\n\n**Reactions with Sulphites and Bisulphites:**\nAcids decompose sulphites and bisulphites to liberate sulphur dioxide (SO₂) gas:\n* Na₂SO₃ + 2HCl (dil) ⎯→ 2NaCl + H₂O + SO₂↑\n\n**Reactions with Sulphides:**\nAcids decompose metal sulphides to liberate hydrogen sulphide (H₂S) gas, which has a rotten-egg smell:\n* FeS + H₂SO₄ (dil) ⎯→ FeSO₄ + H₂S↑",
      realLifeExample: "Baking powder contains sodium bicarbonate (NaHCO₃) and a mild solid organic acid like tartaric acid. When dry, they do not react. But when water is added to make cake batter, they dissolve, react, and release Carbon Dioxide (CO₂) bubbles, which expand on heating and make the cake extremely fluffy.",
      commonMistakes: "Attempting to react Lead Carbonate (PbCO₃) or Calcium Sulphate with dilute sulphuric acid. This forms an insoluble coating of lead sulphate (PbSO₄) or calcium sulphate (CaSO₄) on the reactant surface, stopping the reaction completely. Always use dilute hydrochloric acid or nitric acid for calcium/lead salts.",
      icseBoardTip: "Board questions frequently ask to identify gases. Remember: CO₂ turns lime water milky and has no effect on acidified potassium dichromate. SO₂ turns lime water milky AND turns acidified potassium dichromate solution from orange to clear green!"
    },
    {
      id: "abs-topic-3",
      title: "Chemical Properties of Bases",
      concept: "Soluble bases (alkalis) react with acids to form salt and water, displace ammonia from ammonium salts, and precipitate insoluble metallic hydroxides from salt solutions.",
      explanation: "Alkalis have a bitter taste, soapy touch, and strong alkaline nature. They undergo several key chemical reactions:\n\n**1. Neutralization with Acids:**\n* KOH + HNO₃ ⎯→ KNO₃ + H₂O\n* 2NaOH + H₂SO₄ ⎯→ Na₂SO₄ + 2H₂O\n\n**2. Reaction with Ammonium Salts:**\nWhen heated with ammonium salts, alkalis displace volatile Ammonia (NH₃) gas, which has a characteristic pungent choking odor and turns red litmus paper blue:\n* NH₄Cl + NaOH ⎯Δ→ NaCl + H₂O + NH₃↑\n* (NH₄)₂SO₄ + 2KOH ⎯Δ→ K₂SO₄ + 2H₂O + 2NH₃↑\n\n**3. Precipitation of Metallic Hydroxides:**\nAlkalis react with solutions of heavy metal salts to precipitate insoluble metallic hydroxides of highly characteristic colors:\n* FeSO₄ (pale green) + 2NaOH ⎯→ Fe(OH)₂↓ (dirty green precipitate) + Na₂SO₄\n* FeCl₃ (yellowish-brown) + 3NaOH ⎯→ Fe(OH)₃↓ (reddish-brown precipitate) + 3NaCl\n* CuSO₄ (blue) + 2NaOH ⎯→ Cu(OH)₂↓ (pale blue precipitate) + Na₂SO₄\n* ZnSO₄ (colorless) + 2NaOH ⎯→ Zn(OH)₂↓ (gelatinous white precipitate) + Na₂SO₄\n* Pb(NO₃)₂ (colorless) + 2NaOH ⎯→ Pb(OH)₂↓ (chalky white precipitate) + 2NaNO₃\n\n*(Note: The gelatinous white precipitate of Zn(OH)₂ and chalky white precipitate of Pb(OH)₂ dissolve in excess sodium hydroxide solution because they are amphoteric and form soluble complex salts like sodium zincate and sodium plumbite respectively.)*",
      realLifeExample: "Ammonium carbonate is a key component of traditional 'smelling salts' used to revive fainting athletes or Victorian-era individuals. The salt releases small amounts of pungent ammonia gas, which irritates the sensory nerves of the nose, triggering an inhalation reflex and sudden alertness.",
      commonMistakes: "Confusing bases with alkalis. All alkalis are bases, but not all bases are alkalis. For example, ferric hydroxide [Fe(OH)₃] and copper hydroxide [Cu(OH)₂] are bases because they react with acids, but they are not alkalis because they are insoluble in water.",
      icseBoardTip: "The analytical precipitation reactions are extremely critical for both this chapter and the 'Analytical Chemistry' chapter. Be sure to memorize the specific colors of the precipitates and whether they dissolve in excess NaOH or NH₄OH!"
    },
    {
      id: "abs-topic-4",
      title: "Classification & Types of Salts",
      concept: "Salts are categorized into Normal, Acid, Basic, Double, Mixed, and Complex salts depending on their ionization characteristics and composition.",
      explanation: "A salt is an ionic compound formed by the partial or complete replacement of the replaceable hydrogen ions of an acid by a metallic or ammonium ion.\n\n**Classification of Salts:**\n1. **Normal Salts:** Formed by the complete replacement of all replaceable hydrogen ions of an acid by a metallic or ammonium ion. These do not contain replaceable hydrogen or hydroxyl ions (e.g., NaCl, K₂SO₄, Na₃PO₄).\n2. **Acid Salts:** Formed by the partial replacement of replaceable hydrogen ions of a polybasic acid by a metal or ammonium ion. These contain replaceable hydrogen and behave as acids in aqueous solution (e.g., NaHSO₄, NaHCO₃, NaH₂PO₄).\n   * H₂SO₄ + NaOH ⎯→ NaHSO₄ (sodium bisulphate) + H₂O\n3. **Basic Salts:** Formed by the partial neutralization of a polyacidic base by an acid. These contain replaceable hydroxyl ions (OH⁻) (e.g., Pb(OH)Cl, Mg(OH)Cl, Cu(OH)CO₃).\n   * Pb(OH)₂ + HCl ⎯→ Pb(OH)Cl (basic lead chloride) + H₂O\n4. **Double Salts:** Formed by crystallization of a mixture of two simple salts in equimolar proportions (e.g., Mohr's Salt [FeSO₄·(NH₄)₂SO₄·6H₂O], Potash Alum [K₂SO₄·Al₂(SO₄)₃·24H₂O]). They dissociate completely into individual constituent ions in water.\n5. **Mixed Salts:** Contain more than one basic or acidic radical other than H⁺ or OH⁻ (e.g., Bleaching powder [Ca(OCl)Cl], Sodium Potassium Carbonate [NaKCO₃]).\n6. **Complex Salts:** Formed by complex ion formation and do not dissociate into individual constituent ions in solution, but rather into simple and complex ions (e.g., Potassium ferrocyanide [K₄[Fe(CN)₆]], Tetraamminecopper(II) sulphate [[Cu(NH₃)₄]SO₄]).",
      realLifeExample: "Mohr's Salt is a double salt widely used in standard chemistry labs for redox titrations because it resists oxidation by air far better than simple green vitriol (Iron(II) sulphate). Potash Alum is another double salt used for purifying muddy drinking water via coagulation.",
      commonMistakes: "Thinking sodium bisulphate (NaHSO₄) is a normal salt because it has sodium in it. It is actually an acid salt because it still retains a replaceable hydrogen ion, which can react further with NaOH to form normal sodium sulphate (Na₂SO₄).",
      icseBoardTip: "A classic board question asks to distinguish between double salts and complex salts. Double salts lose their identity in aqueous solution (ionize into constituent simple ions), whereas complex salts retain their identity in aqueous solution (the complex ion does not break down further)."
    },
    {
      id: "abs-topic-5",
      title: "Preparation of Soluble & Insoluble Salts",
      concept: "Soluble salts are prepared by neutralization, simple displacement, or action of acid on carbonates/sulphites. Insoluble salts are prepared via precipitation (double decomposition).",
      explanation: "The method of salt preparation depends entirely on whether the salt is soluble or insoluble in water.\n\n**I. General Methods for Soluble Salts:**\n1. **Direct Combination (Synthesis):** Two elements react directly to form a salt (used for anhydrous soluble halides):\n   * 2Fe + 3Cl₂ ⎯→ 2FeCl₃ (Ferric chloride)\n   * 2Al + 3Cl₂ ⎯→ 2AlCl₃ (Aluminium chloride)\n2. **Simple Displacement:** Active metal reacts with dilute acid:\n   * Zn + H₂SO₄ (dil) ⎯→ ZnSO₄ + H₂↑\n3. **Action of dilute acid on insoluble base (Neutralization):** Insoluble oxide or hydroxide is dissolved in dilute acid and heated:\n   * CuO + H₂SO₄ (dil) ⎯→ CuSO₄ + H₂O\n4. **Action of dilute acid on Carbonates / Sulphites:**\n   * MgCO₃ + 2HNO₃ (dil) ⎯→ Mg(NO₃)₂ + H₂O + CO₂↑\n5. **Titration (Neutralization of soluble base):** Used for sodium, potassium, and ammonium salts because both reactants and products are highly soluble:\n   * NaOH + HCl ⎯→ NaCl + H₂O\n\n**II. General Method for Insoluble Salts (Precipitation / Double Decomposition):**\nWhen two soluble salt solutions are mixed, they exchange radicals to precipitate an insoluble salt:\n* **Lead Chloride:** Pb(NO₃)₂ (aq) + 2NaCl (aq) ⎯→ PbCl₂↓ (white ppt) + 2NaNO₃ (aq)\n* **Barium Sulphate:** BaCl₂ (aq) + H₂SO₄ (aq) ⎯→ BaSO₄↓ (white insoluble ppt) + 2HCl (aq)\n* **Silver Chloride:** AgNO₃ (aq) + HCl (aq) ⎯→ AgCl↓ (curdy white ppt) + HNO₃ (aq)\n* **Lead Sulphate:** Pb(NO₃)₂ (aq) + Na₂SO₄ (aq) ⎯→ PbSO₄↓ (white ppt) + 2NaNO₃ (aq)",
      realLifeExample: "Precipitation reactions are used in municipal water treatment plants. Soluble iron and aluminum salts are treated with calcium hydroxide (lime) to precipitate gelatinous insoluble hydroxides, which trap suspended dust and bacteria and sink them to the bottom.",
      commonMistakes: "Suggesting direct combination or action of acid on metals to make lead chloride (PbCl₂). PbCl₂ is insoluble in cold water! If you add dilute HCl to Lead, the reaction stops immediately due to insoluble PbCl₂ coating. You must prepare PbCl₂ by mixing soluble Lead Nitrate with soluble Sodium Chloride.",
      icseBoardTip: "Learn the solubility rules thoroughly! 1. All nitrates, nitrites, and acetates are soluble. 2. All sodium, potassium, and ammonium salts are soluble. 3. All chlorides are soluble EXCEPT Silver Chloride (AgCl), Lead Chloride (PbCl₂ - soluble in hot water), and Mercurous Chloride. 4. All sulphates are soluble EXCEPT Barium Sulphate (BaSO₄), Lead Sulphate (PbSO₄), and Calcium Sulphate (sparingly soluble)."
    },
    {
      id: "abs-topic-6",
      title: "Water of Crystallization & Action of Heat",
      concept: "Hydrated salts contain a fixed number of water molecules chemically combined in their crystal lattice. Efflorescence, deliquescence, and hygroscopy describe salt-moisture interactions.",
      explanation: "Many salts, when crystallized from their aqueous solutions, chemically combine with a definite quantity of water, known as the **Water of Crystallization**. These are called **hydrated salts**:\n* Copper sulphate pentahydrate (Blue Vitriol): CuSO₄·5H₂O\n* Iron(II) sulphate heptahydrate (Green Vitriol): FeSO₄·7H₂O\n* Sodium carbonate decahydrate (Washing Soda): Na₂CO₃·10H₂O\n\n**Atmospheric Phenomena of Salts:**\n1. **Efflorescence:** The phenomenon where a hydrated crystalline salt, when exposed to dry air, loses its water of crystallization partially or completely to the atmosphere and turns into an amorphous powder.\n   * Na₂CO₃·10H₂O (exposed to dry air) ⎯→ Na₂CO₃·H₂O + 9H₂O↑ (monohydrate powder)\n2. **Deliquescence:** The phenomenon where certain water-soluble crystalline salts, when exposed to moist air, absorb moisture from the atmosphere to dissolve in it and form a concentrated solution (e.g., FeCl₃, MgCl₂, NaOH, KOH).\n3. **Hygroscopy:** The phenomenon where substances absorb moisture from the atmosphere without dissolving in it or changing their physical state (e.g., Concentrated Sulphuric Acid [H₂SO₄], Quicklime [CaO], Silica gel). These are used as **drying or dehydrating agents**.\n\n**Action of Heat on Hydrated Salts:**\nWhen heated, hydrated salts lose their water of crystallization and color, turning into anhydrous, dull powders:\n* CuSO₄·5H₂O (blue crystalline) ⎯⎯Δ⎯⎯→ CuSO₄ (dirty white amorphous) + 5H₂O↑\n*(Note: Adding water back to the white anhydrous CuSO₄ restores the blue color and crystalline shape, proving it is a physical and reversible process.)*",
      realLifeExample: "Potato chips get soggy if left open in humid weather. Similarly, table salt (NaCl) becomes sticky and wet during the monsoon. Pure NaCl is NOT deliquescent, but crude table salt contains impurities like Magnesium Chloride (MgCl₂) and Calcium Chloride (CaCl₂), which are highly deliquescent and absorb water from the atmosphere.",
      commonMistakes: "Using Concentrated Sulphuric Acid to dry Ammonia gas. Since H₂SO₄ is acidic and NH₃ is basic, they react to form a salt: H₂SO₄ + 2NH₃ ⎯→ (NH₄)₂SO₄. You must use basic Quicklime (CaO) to dry Ammonia gas.",
      icseBoardTip: "A classic ICSE definition question is: 'What is a drying agent versus a dehydrating agent?' A drying agent removes moisture from other substances physically (e.g., CaO drying NH₃). A dehydrating agent removes chemically combined water or hydrogen and oxygen in the ratio of 2:1 from compounds (e.g., Conc. H₂SO₄ converting sugar/ethanol to carbon/ethene)."
    }
  ],
  dailyLifeApplications: [
    {
      title: "Preservation of Food",
      desc: "Sodium Chloride (NaCl) or common salt is widely used to preserve fish, meat, and pickles. It draws water out of bacterial cells through osmosis, dehydrating and killing them.",
      example: "Traditional pickles are salted heavily to prevent fungal growth."
    },
    {
      title: "Agricultural Lime",
      desc: "Heavy rain and chemical fertilizers can make soil highly acidic, which stunt crop growth. Farmers add Quicklime (CaO) or Slaked Lime [Ca(OH)₂] to neutralize soil acidity.",
      example: "Adding powdered limestone to fields to raise soil pH to an optimal level of 6-7."
    },
    {
      title: "Baking and Cooking",
      desc: "Sodium bicarbonate (NaHCO₃) is used in baking. When heated, it decomposes to release carbon dioxide gas, which rises and makes bread and cakes rise.",
      example: "Adding baking soda to cake batters to introduce bubble pockets."
    }
  ],
  chapterSummary: [
    "Arrhenius Theory: Acids produce H₃O⁺ ions in water, while bases produce OH⁻ ions. Strong acids/bases ionize fully; weak ones ionize only partially.",
    "Indicators are complex organic dyes that exhibit different colors in acidic, basic, and neutral mediums.",
    "Acids undergo characteristic displacement and decomposition reactions, releasing gases like H₂, CO₂, SO₂, and H₂S.",
    "Alkalis react with ammonium salts to liberate Ammonia gas, and react with heavy metal solutions to form insoluble, colored metal hydroxides.",
    "Salts are ionic compounds classified as normal, acid, basic, double, mixed, or complex based on replacement patterns and structure.",
    "Soluble salts can be prepared by combination, displacement, or titration. Insoluble salts are uniquely prepared by double decomposition (precipitation).",
    "Hydrated salts hold water of crystallization. Efflorescence is the loss of water of crystallization; deliquescence is the absorption of moisture to form a solution; hygroscopy is water absorption without dissolving."
  ]
};
