export interface TopicData {
  id: string;
  title: string;
  concept: string;
  explanation: string;
  realLifeExample: string;
  commonMistakes: string;
  icseBoardTip: string;
}

export interface IdentificationChartItem {
  ion: string;
  reagent: string;
  observation: string;
  inference: string;
}

export interface AnalyticalChemistryChapterData {
  title: string;
  chapterIntro: {
    importance: string;
    aboutAnalyticalChemistry: string;
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
  cationCharts: IdentificationChartItem[];
  anionCharts: IdentificationChartItem[];
}

export const ANALYTICAL_CHEMISTRY_CHAPTER_DATA: AnalyticalChemistryChapterData = {
  title: "Analytical Chemistry",
  chapterIntro: {
    importance: "Analytical Chemistry is the branch of chemistry that deals with the qualitative and quantitative analysis of chemical substances. It is the bedrock of forensic investigation, medical diagnostics, pharmaceutical quality control, and environmental monitoring. In the laboratory, it equips us with the tools to identify unknown salts, determine heavy metal contaminations, and decode chemical mixtures with precision using simple bench-top reagents.",
    aboutAnalyticalChemistry: "Qualitative analysis involves the identification of the chemical species (cations and anions) present in a substance, primarily through characteristic chemical tests like precipitation, flame tests, and gas evolution observations. Quantitative analysis determines the precise concentration or mass of these components. ICSE Class 10 focuses intensely on qualitative analysis using Sodium Hydroxide (NaOH), Ammonium Hydroxide (NH₄OH), and specific diagnostic reagents.",
    icseImportance: "In the ICSE Class 10 Board Exam, 'Analytical Chemistry' is a compulsory, high-scoring section. Direct questions are frequently asked on the distinguishing test between heavy metal cations (especially Fe²⁺, Fe³⁺, Cu²⁺, Zn²⁺, and Pb²⁺) using alkalis, write balanced chemical equations with coordinate complex formulas, detail precautions, and identify unknown salts from a sequence of observations."
  },
  learningObjectives: [
    "Understand the principle of qualitative chemical analysis.",
    "Master the action of Sodium Hydroxide (NaOH) and Ammonium Hydroxide (NH₄OH) on metallic salt solutions.",
    "Distinguish between colored heavy metal cations based on precipitation color and solubility in excess alkali.",
    "Recall the amphoteric nature of Zinc, Aluminium, and Lead metals, their oxides, and their hydroxides.",
    "Learn the flame tests for sodium, potassium, calcium, and copper cations.",
    "Identify unknown anions (CO₃²⁻, SO₃²⁻, S²⁻, Cl⁻, NO₃⁻, SO₄²⁻) through systematic gas evolution and wet tests.",
    "Write balanced chemical equations with state symbols representing coordination complex formation.",
    "Implement safe laboratory precautions when working with concentrated acids and toxic salt solutions."
  ],
  topics: [
    {
      id: "ac-topic-1",
      title: "Action of Sodium Hydroxide (NaOH) on Salt Solutions",
      concept: "Sodium Hydroxide acts as a source of hydroxyl ions (OH⁻) that precipitate insoluble metal hydroxides with distinctive colors. Some precipitates are amphoteric and dissolve in excess NaOH.",
      explanation: "When dilute NaOH solution is added dropwise to metallic salt solutions, a precipitate of the corresponding metal hydroxide is formed:\n\n**1. Calcium Salts (Ca²⁺):**\n* Reaction: Ca(NO₃)₂ + 2NaOH ⎯→ Ca(OH)₂↓ (White) + 2NaNO₃\n* In Excess NaOH: The white precipitate remains **insoluble**.\n\n**2. Iron(II) / Ferrous Salts (Fe²⁺):**\n* Reaction: FeSO₄ + 2NaOH ⎯→ Fe(OH)₂↓ (Dirty Green) + Na₂SO₄\n* In Excess NaOH: The dirty green precipitate is **insoluble**.\n\n**3. Iron(III) / Ferric Salts (Fe³⁺):**\n* Reaction: FeCl₃ + 3NaOH ⎯→ Fe(OH)₃↓ (Reddish-Brown) + 3NaCl\n* In Excess NaOH: The reddish-brown precipitate is **insoluble**.\n\n**4. Copper(II) Salts (Cu²⁺):**\n* Reaction: CuSO₄ + 2NaOH ⎯→ Cu(OH)₂↓ (Pale Blue) + Na₂SO₄\n* In Excess NaOH: The pale blue precipitate is **insoluble**.\n\n**5. Zinc Salts (Zn²⁺):**\n* Reaction: ZnSO₄ + 2NaOH ⎯→ Zn(OH)₂↓ (Gelatinous White) + Na₂SO₄\n* In Excess NaOH: The precipitate **dissolves** to form a clear, colorless solution of soluble **Sodium Zincate**:\n* Zn(OH)₂ + 2NaOH (excess) ⎯→ Na₂ZnO₂ (aq) + 2H₂O\n\n**6. Lead Salts (Pb²⁺):**\n* Reaction: Pb(NO₃)₂ + 2NaOH ⎯→ Pb(OH)₂↓ (Chalky White) + 2NaNO₃\n* In Excess NaOH: The precipitate **dissolves** to form a clear, colorless solution of soluble **Sodium Plumbite**:\n* Pb(OH)₂ + 2NaOH (excess) ⎯→ Na₂PbO₂ (aq) + 2H₂O",
      realLifeExample: "Precipitation chemistry is used in municipal wastewater treatment plants to remove toxic heavy metals from industrial effluents before discharging water back into rivers.",
      commonMistakes: "Confusing the gelatinous white precipitate of Zinc Hydroxide with the chalky white precipitate of Lead Hydroxide, or forgetting that both dissolve in excess NaOH.",
      icseBoardTip: "Always write state symbols like (s) or ↓ for precipitates, and (aq) for soluble complex salts like sodium zincate (Na₂ZnO₂) and sodium plumbite (Na₂PbO₂)."
    },
    {
      id: "ac-topic-2",
      title: "Action of Ammonium Hydroxide (NH₄OH) on Salt Solutions",
      concept: "Ammonium Hydroxide is a weak alkali. It behaves similarly to NaOH for precipitation, but shows unique coordination solubility behavior in excess.",
      explanation: "When dilute NH₄OH solution is added dropwise to salt solutions, it precipitates metal hydroxides. However, in excess, it exhibits highly selective coordination chemistry due to the formation of stable amine complexes:\n\n**1. Calcium Salts (Ca²⁺):**\n* Reaction: No precipitate is formed even with excess NH₄OH because the concentration of OH⁻ ions is too low to exceed the solubility product of Calcium Hydroxide.\n\n**2. Iron(II) / Ferrous Salts (Fe²⁺):**\n* Reaction: FeSO₄ + 2NH₄OH ⎯→ Fe(OH)₂↓ (Dirty Green) + (NH₄)₂SO₄\n* In Excess NH₄OH: **Insoluble**.\n\n**3. Iron(III) / Ferric Salts (Fe³⁺):**\n* Reaction: FeCl₃ + 3NH₄OH ⎯→ Fe(OH)₃↓ (Reddish-Brown) + 3NH₄Cl\n* In Excess NH₄OH: **Insoluble**.\n\n**4. Copper(II) Salts (Cu²⁺):**\n* Reaction: CuSO₄ + 2NH₄OH ⎯→ Cu(OH)₂↓ (Pale Blue) + (NH₄)₂SO₄\n* In Excess NH₄OH: The pale blue precipitate **dissolves** to form a stunning, intensely deep inky-blue solution of **Tetraamminecopper(II) sulphate** complex:\n* Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₃ ⎯→ [Cu(NH₃)₄]SO₄ (aq) + 2H₂O\n\n**5. Zinc Salts (Zn²⁺):**\n* Reaction: ZnSO₄ + 2NH₄OH ⎯→ Zn(OH)₂↓ (Gelatinous White) + (NH₄)₂SO₄\n* In Excess NH₄OH: The gelatinous white precipitate **dissolves** to form a clear, colorless solution of **Tetraamminezinc(II) sulphate** complex:\n* Zn(OH)₂ + (NH₄)₂SO₄ + 2NH₃ ⎯→ [Zn(NH₃)₄]SO₄ (aq) + 2H₂O\n\n**6. Lead Salts (Pb²⁺):**\n* Reaction: Pb(NO₃)₂ + 2NH₄OH ⎯→ Pb(OH)₂↓ (Chalky White) + 2NH₄NO₃\n* In Excess NH₄OH: **Insoluble** (unlike NaOH, where it dissolves). This is a critical diagnostic distinction!",
      realLifeExample: "The deep-blue color of the copper-amine complex is utilized in industrial dye and fabric manufacturing processes to dissolve cellulose fibers.",
      commonMistakes: "Writing that Lead Hydroxide dissolves in excess Ammonium Hydroxide. Remember, Pb(OH)₂ is insoluble in excess NH₄OH, but soluble in excess NaOH.",
      icseBoardTip: "The distinction between Zn²⁺ and Pb²⁺ is highly tested. Zinc precipitate dissolves in excess NH₄OH, whereas Lead precipitate remains insoluble in excess NH₄OH."
    },
    {
      id: "ac-topic-3",
      title: "Amphoteric Metals, Oxides and Hydroxides",
      concept: "Certain metals (Zn, Al, Pb), their oxides, and their hydroxides are amphoteric—reacting with both strong acids and strong bases to yield salt and water/hydrogen.",
      explanation: "Amphoteric substances exhibit dual chemical nature, reacting with strong mineral acids as bases, and with strong alkalis as acids.\n\n**1. Action of Boiling Alkalis on Amphoteric Metals:**\nBoiling concentrated Sodium Hydroxide reacts with active amphoteric metals to liberate Hydrogen gas:\n* Zn + 2NaOH ⎯Δ→ Na₂ZnO₂ (Sodium Zincate) + H₂↑\n* 2Al + 2NaOH + 2H₂O ⎯Δ→ 2NaAlO₂ (Sodium Aluminate) + 3H₂↑\n* Pb + 2NaOH ⎯Δ→ Na₂PbO₂ (Sodium Plumbite) + H₂↑\n\n**2. Amphoteric Oxides (ZnO, Al₂O₃, PbO):**\nThese react with acids and boiling alkalis to form salt and water:\n* **Zinc Oxide (ZnO):**\n  * As a Base: ZnO + 2HCl ⎯→ ZnCl₂ + H₂O\n  * As an Acid: ZnO + 2NaOH ⎯Δ→ Na₂ZnO₂ + H₂O\n* **Aluminium Oxide (Al₂O₃):**\n  * As a Base: Al₂O₃ + 6HCl ⎯→ 2AlCl₃ + 3H₂O\n  * As an Acid: Al₂O₃ + 2NaOH ⎯Δ→ 2NaAlO₂ + H₂O\n* **Lead(II) Oxide (PbO):**\n  * As a Base: PbO + 2HNO₃ ⎯→ Pb(NO₃)₂ + H₂O\n  * As an Acid: PbO + 2NaOH ⎯Δ→ Na₂PbO₂ + H₂O\n\n**3. Amphoteric Hydroxides [Zn(OH)₂, Al(OH)₃, Pb(OH)₂]:**\nThese react similarly with acids and alkalis to yield salt and water:\n* Zn(OH)₂ + 2HCl ⎯→ ZnCl₂ + 2H₂O\n* Zn(OH)₂ + 2NaOH ⎯→ Na₂ZnO₂ + 2H₂O",
      realLifeExample: "Aluminium cookware must never be washed with strong alkaline dishwashing powders or soaps because the alkali destroys the protective oxide layer and dissolves the metal, releasing toxic Al³⁺ ions.",
      commonMistakes: "Assuming all metal oxides are basic. Remember that Zn, Al, and Pb form amphoteric oxides that actively react with bases.",
      icseBoardTip: "Writing equations with Aluminium can be tricky. Make sure to balance the water molecules in: 2Al + 2NaOH + 2H₂O ⎯→ 2NaAlO₂ + 3H₂↑."
    },
    {
      id: "ac-topic-4",
      title: "Identification of Cations by Flame Tests",
      concept: "Flame tests are a rapid qualitative dry method where metal cations impart a characteristic brilliant color to a non-luminous Bunsen burner flame.",
      explanation: "When a metal salt is moistened with concentrated Hydrochloric Acid (to form volatile metal chlorides) on a platinum wire and heated in a non-luminous flame, the electrons in the metal cations absorb thermal energy, excite to higher energy shells, and emit specific wavelengths of visible light as they relax back to ground state:\n\n**1. Sodium (Na⁺):**\n* Flame Color: **Brilliant, persistent golden yellow**.\n\n**2. Potassium (K⁺):**\n* Flame Color: **Lilac / Violet** (viewed through cobalt blue glass, it appears pinkish-red).\n\n**3. Calcium (Ca²⁺):**\n* Flame Color: **Brick Red**.\n\n**4. Copper (Cu²⁺):**\n* Flame Color: **Greenish Blue / Peacock Green**.\n\n**5. Barium (Ba²⁺) (Reference only):**\n* Flame Color: **Apple Green**.",
      realLifeExample: "The brilliant colors seen in festive fireworks are directly produced by combining chemical salts of sodium (yellow), strontium/calcium (red), and copper (blue-green).",
      commonMistakes: "Forgetting to moisten the salt with concentrated HCl. Dilute HCl or other acids do not form highly volatile chloride salts, yielding faint or inaccurate colors.",
      icseBoardTip: "In Section I of the board exam, flame test colors are frequently asked in matching, multiple-choice, or one-word answer questions. Memorize: Calcium is Brick Red, Copper is Peacock Green!"
    },
    {
      id: "ac-topic-5",
      title: "Identification of Anions (Qualitative Chemistry)",
      concept: "Anions are identified systematically by treating the unknown solid with acids and performing confirming wet precipitation reactions on salt solutions.",
      explanation: "Anions in the ICSE syllabus are classified and detected as follows:\n\n**1. Carbonate (CO₃²⁻):**\n* Test: Add dilute HCl / H₂SO₄ to the solid carbonate.\n* Observation: Brisk effervescence; a colorless, odorless gas (CO₂) is evolved.\n* Gas Test: CO₂ turns lime water milky, but has no effect on acidified potassium dichromate.\n\n**2. Sulphite (SO₃²⁻):**\n* Test: Add dilute acid.\n* Observation: Colorless gas with a suffocating smell of burning sulphur (SO₂).\n* Gas Test: SO₂ turns lime water milky AND reduces orange acidified potassium dichromate to clear green.\n\n**3. Sulphide (S²⁻):**\n* Test: Add dilute acid.\n* Observation: Colorless gas with a foul rotten-egg smell (H₂S).\n* Gas Test: H₂S gas turns lead acetate paper silvery-black (forming PbS).\n\n**4. Chloride (Cl⁻):**\n* Test: Heat the solid salt with concentrated Sulphuric Acid.\n* Observation: Evolvement of a colorless, pungent gas (HCl) that forms thick white fumes with a glass rod dipped in Ammonia.\n* Wet Test: To salt solution, add Nitric Acid and Silver Nitrate (AgNO₃). A **curdy white precipitate** of AgCl is formed, which dissolves completely in excess Ammonium Hydroxide.\n\n**5. Nitrate (NO₃⁻):**\n* Brown Ring Test: To salt solution, add freshly prepared Ferrous Sulphate (FeSO₄) solution, then carefully pour concentrated Sulphuric Acid down the side of the tube.\n* Observation: A brown ring of Nitroso-ferrous sulphate [Fe(H₂O)₅(NO)]SO₄ forms at the junction of the two liquids.\n\n**6. Sulphate (SO₄²⁻):**\n* Wet Test: To salt solution, add dilute HCl and Barium Chloride (BaCl₂) solution.\n* Observation: A dense **insoluble white precipitate** of Barium Sulphate (BaSO₄) is formed which does not dissolve in any concentrated mineral acids.",
      realLifeExample: "The Brown Ring test is used in agricultural laboratories to detect nitrate concentrations in soil and well water to prevent fertilizer runoff contamination.",
      commonMistakes: "Mistaking CO₂ for SO₂ because both turn lime water milky. Remember: only SO₂ turns orange acidified potassium dichromate green.",
      icseBoardTip: "The Barium Chloride test for Sulphate is a classic. Always emphasize that the white precipitate of BaSO₄ is *insoluble in concentrated hydrochloric acid*."
    },
    {
      id: "ac-topic-6",
      title: "Laboratory Precautions and Common Experimental Mistakes",
      concept: "Analytical chemistry involves corrosive acids, toxic reagents, and delicate indicators, requiring strict experimental precautions and precise protocol handling.",
      explanation: "Maintaining accuracy and safety in the laboratory is paramount:\n\n**1. Cleanliness of Glassware:**\n* Implements like platinum wire for flame tests or test tubes must be washed thoroughly with distilled water and rinsed with pure concentrated HCl before use to avoid contamination (especially from highly persistent sodium ions which mask other flame colors).\n\n**2. Handling Concentrated Acids:**\n* Concentrated Sulphuric Acid (H₂SO₄) must be poured extremely slowly down the sides of the test tube when performing the Brown Ring test. Do not shake or heat the tube, as the heat generated will decompose the unstable nitroso complex, destroying the brown ring.\n\n**3. Freshly Prepared Solutions:**\n* Ferrous Sulphate (FeSO₄) solution used in the Nitrate test must always be freshly prepared. Otherwise, atmospheric oxygen oxidizes Fe²⁺ to Fe³⁺, making it useless for reducing nitrate ions to nitric oxide.\n\n**4. Reagent Addition:**\n* When testing with NaOH or NH₄OH, always add the reagent **dropwise first**, observe and record the initial precipitate color, and only then add it in **excess** to observe solubility changes. Adding excess reagent directly will bypass the initial precipitation phase.",
      realLifeExample: "Professional forensic labs use double-blind reagent protocols and clean-room setups to ensure trace contamination does not produce false-positive identification reports.",
      commonMistakes: "Shaking the test tube during the Brown Ring test, which causes the dense concentrated sulphuric acid layer to mix violently, releasing heat and ruining the brown ring.",
      icseBoardTip: "Board questions often ask: 'Why must Ferrous Sulphate be freshly prepared?' The answer is: 'To prevent its oxidation by atmospheric oxygen into Ferric Sulphate.'"
    }
  ],
  dailyLifeApplications: [
    {
      title: "Forensic Toxicology",
      desc: "Detecting trace quantities of heavy metal poisons (such as Lead or Arsenic) in biological samples using selective precipitation and atomic absorption spectrometry.",
      example: "Investigating cases of industrial poisonings or pesticide contamination by analyzing chemical compounds in water tables."
    },
    {
      title: "Soil Chemistry Assessment",
      desc: "Agricultural scientists test soil pH and the presence of essential mineral ions (like Nitrate, Sulphate, Calcium, and Potassium) using simple wet tests to advise farmers on fertilizer dosage.",
      example: "Diagnosing calcium deficiency (which causes brick-red flame traces) to treat blossom-end rot in crop fields."
    },
    {
      title: "Metallurgical Quality Control",
      desc: "Smelting and casting foundries perform spot-precipitation tests with alkalis on raw metal alloys to verify composition purity and prevent heavy-metal stress fractures.",
      example: "Testing structural steel frames for optimal iron-to-zinc galvanization ratios."
    },
    {
      title: "Environmental Water Audits",
      desc: "Municipal drinking water authorities use barium chloride precipitation tests to monitor sulphate levels, ensuring water is safe and does not cause digestive ailments.",
      example: "Analyzing well-water runoffs near coal mines for acidic sulphite leachate contaminants."
    }
  ],
  chapterSummary: [
    "Analytical chemistry involves qualitative analysis (identification of chemical species) and quantitative analysis (determining concentrations).",
    "Sodium Hydroxide (NaOH) added dropwise to metal salts precipitates distinctive metallic hydroxides (Ca²⁺ white, Fe²⁺ dirty green, Fe³⁺ reddish brown, Cu²⁺ pale blue, Zn²⁺ gelatinous white, Pb²⁺ chalky white).",
    "In excess NaOH, Zinc Hydroxide dissolves to form soluble Sodium Zincate [Na₂ZnO₂], and Lead Hydroxide dissolves to form soluble Sodium Plumbite [Na₂PbO₂].",
    "Ammonium Hydroxide (NH₄OH) precipitates similar hydroxides, but Calcium does not precipitate, and Lead Hydroxide remains insoluble in excess.",
    "Copper Hydroxide dissolves in excess NH₄OH to form an intensely deep inky-blue solution of Tetraamminecopper(II) complex [Cu(NH₃)₄]²⁺, while Zinc Hydroxide dissolves to form a colorless Ammine complex.",
    "Amphoteric metals (Zn, Al, Pb) and their oxides/hydroxides react with both strong mineral acids and strong boiling alkalis to form salts and water/hydrogen.",
    "Flame tests utilize volatile metal chlorides on a platinum wire to impart distinct colors (Sodium: golden yellow, Potassium: lilac, Calcium: brick red, Copper: peacock green).",
    "Anions are identified systematically: Carbonates (CO₂ gas), Sulphites (SO₂ gas), Sulphides (H₂S gas), Chlorides (HCl gas / AgNO₃ curdy white ppt), Nitrates (Brown Ring test), and Sulphates (insoluble BaSO₄ precipitate)."
  ],
  cationCharts: [
    {
      ion: "Calcium (Ca²⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH)",
      observation: "White, sparingly soluble precipitate forms dropwise; remains insoluble in excess NaOH.",
      inference: "Calcium Hydroxide [Ca(OH)₂] is formed, which is basic and insoluble in excess alkali."
    },
    {
      ion: "Calcium (Ca²⁺)",
      reagent: "Dilute Ammonium Hydroxide (NH₄OH)",
      observation: "No precipitate or visual change observed even in excess.",
      inference: "Low concentration of hydroxyl ions in NH₄OH cannot exceed the solubility product of Ca(OH)₂."
    },
    {
      ion: "Iron(II) / Ferrous (Fe²⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH) or NH₄OH",
      observation: "Dirty green, gelatinous precipitate forms; remains completely insoluble in excess of both.",
      inference: "Ferrous Hydroxide [Fe(OH)₂] is formed, which is non-amphoteric and insoluble in excess."
    },
    {
      ion: "Iron(III) / Ferric (Fe³⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH) or NH₄OH",
      observation: "Reddish-brown precipitate forms; remains completely insoluble in excess of both.",
      inference: "Ferric Hydroxide [Fe(OH)₃] is formed, which is non-amphoteric and insoluble in excess."
    },
    {
      ion: "Copper(II) (Cu²⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH)",
      observation: "Pale blue precipitate forms; remains completely insoluble in excess NaOH.",
      inference: "Copper(II) Hydroxide [Cu(OH)₂] is formed, which is non-amphoteric."
    },
    {
      ion: "Copper(II) (Cu²⁺)",
      reagent: "Dilute Ammonium Hydroxide (NH₄OH)",
      observation: "Pale blue precipitate forms dropwise; dissolves completely in excess to form a deep inky-blue solution.",
      inference: "Soluble coordinate complex Tetraamminecopper(II) complex, [Cu(NH₃)₄]²⁺, is formed."
    },
    {
      ion: "Zinc (Zn²⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH)",
      observation: "Gelatinous white precipitate forms dropwise; dissolves completely in excess to give a clear, colorless solution.",
      inference: "Zinc Hydroxide [Zn(OH)₂] is amphoteric, reacting with excess NaOH to form soluble Sodium Zincate [Na₂ZnO₂]."
    },
    {
      ion: "Zinc (Zn²⁺)",
      reagent: "Dilute Ammonium Hydroxide (NH₄OH)",
      observation: "Gelatinous white precipitate forms dropwise; dissolves completely in excess to give a clear, colorless solution.",
      inference: "Zinc Hydroxide reacts with excess NH₄OH to form a soluble coordination complex Tetraamminezinc(II) [Zn(NH₃)₄]²⁺."
    },
    {
      ion: "Lead (Pb²⁺)",
      reagent: "Dilute Sodium Hydroxide (NaOH)",
      observation: "Chalky white precipitate forms dropwise; dissolves completely in excess to give a clear, colorless solution.",
      inference: "Lead Hydroxide [Pb(OH)₂] is amphoteric, reacting with excess NaOH to form soluble Sodium Plumbite [Na₂PbO₂]."
    },
    {
      ion: "Lead (Pb²⁺)",
      reagent: "Dilute Ammonium Hydroxide (NH₄OH)",
      observation: "Chalky white precipitate forms; remains completely insoluble in excess NH₄OH.",
      inference: "Lead Hydroxide [Pb(OH)₂] is formed, which does not form a soluble ammine complex, thus remaining insoluble."
    }
  ],
  anionCharts: [
    {
      ion: "Carbonate (CO₃²⁻)",
      reagent: "Treat solid with dilute Hydrochloric Acid (HCl)",
      observation: "Brisk effervescence occurs; colorless, odorless gas evolved turns lime water milky; no effect on acidified potassium dichromate.",
      inference: "Carbon Dioxide (CO₂) gas is released, confirming the presence of Carbonate ions."
    },
    {
      ion: "Sulphite (SO₃²⁻)",
      reagent: "Treat solid with dilute Hydrochloric Acid (HCl)",
      observation: "Brisk effervescence; colorless gas with suffocating smell of burning sulphur turns lime water milky AND turns orange potassium dichromate paper green.",
      inference: "Sulphur Dioxide (SO₂) gas is released, confirming the presence of Sulphite ions."
    },
    {
      ion: "Sulphide (S²⁻)",
      reagent: "Treat solid with dilute Hydrochloric Acid (HCl)",
      observation: "Colorless gas with highly offensive rotten-egg smell evolved; turns lead acetate paper silvery black.",
      inference: "Hydrogen Sulphide (H₂S) gas is released, confirming the presence of Sulphide ions."
    },
    {
      ion: "Chloride (Cl⁻)",
      reagent: "Treat solid with conc. Sulphuric Acid (H₂SO₄); add Silver Nitrate (AgNO₃) to the aqueous salt solution.",
      observation: "Pungent acid fumes (HCl) forming thick white fumes with ammonia-dipped rod; AgNO₃ gives a curdy white precipitate soluble in excess NH₄OH.",
      inference: "Hydrochloric acid gas and Silver Chloride (AgCl) precipitate are formed, confirming Chloride ions."
    },
    {
      ion: "Nitrate (NO₃⁻)",
      reagent: "Brown Ring Test: Salt solution + fresh FeSO₄ + concentrated H₂SO₄ down the side of the tube.",
      observation: "A distinctive brown coordinate ring forms slowly at the junction of the two liquid layers.",
      inference: "Nitroso-ferrous sulphate complex [Fe(H₂O)₅(NO)]SO₄ is formed, confirming Nitrate ions."
    },
    {
      ion: "Sulphate (SO₄²⁻)",
      reagent: "Barium Chloride (BaCl₂) solution added to acidified salt solution.",
      observation: "A thick, heavy, dense white precipitate is formed; remains completely insoluble on adding concentrated mineral acids.",
      inference: "Barium Sulphate (BaSO₄) precipitate is formed, confirming Sulphate ions."
    }
  ]
};
