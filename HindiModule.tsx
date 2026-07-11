import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Users, Sparkles, Brain, ArrowLeft, BookMarked, HelpCircle, 
  Lightbulb, CheckCircle2, AlertTriangle, FileText, Bookmark, Search,
  Compass, Award, RefreshCw, MessageSquare, Flame, Check, Play, ArrowRight,
  BookOpenCheck
} from 'lucide-react';
import { HINDI_MAHABHARAT_DATA } from '../data/hindiMahabharatData';

interface Chapter {
  id: string;
  name: string;
}

interface HindiModuleProps {
  chapter: Chapter;
  onBack: () => void;
  colorTheme: {
    primary: string;
    text: string;
    bg: string;
    border: string;
    glow: string;
    pill: string;
  };
}

type ActiveTab = 'intro' | 'explanation' | 'characters' | 'words' | 'themes' | 'practice' | 'flashcards' | 'exam' | 'discussion';

interface DiscussionQuestionCardProps {
  key?: any;
  question: string;
  answer: string;
  learningPoint: string;
  index: number;
}

function DiscussionQuestionCard({ question, answer, learningPoint, index }: DiscussionQuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4 transition-all">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-rose-500 uppercase font-mono">चर्चा प्रश्न {index + 1}</span>
          <h4 className="font-display font-extrabold text-sm md:text-base text-slate-900 dark:text-white leading-snug">
            {question}
          </h4>
        </div>
        <button
          onClick={() => setShowAnswer(prev => !prev)}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-xl transition-all cursor-pointer shrink-0"
        >
          {showAnswer ? 'उत्तर छिपाएं' : 'उत्तर देखें'}
        </button>
      </div>

      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800/60"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider font-mono block">मॉडल उत्तर (Model Answer)</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3 border-l-2 border-indigo-500 whitespace-pre-wrap">
                {answer}
              </p>
            </div>

            <div className="bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-4 space-y-1">
              <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest font-mono block">🎯 मुख्य सीख (Key Learning Point)</span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {learningPoint}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const HINDI_AUTHORS: Record<string, { hi: string; en: string }> = {
  'h-1': { hi: 'सुदर्शन', en: 'Sudarshan' },
  'h-2': { hi: 'सियारामशरण गुप्त', en: 'Siyaramsharan Gupt' },
  'h-3': { hi: 'यशपाल', en: 'Yashpal' },
  'h-4': { hi: 'स्वयं प्रकाश', en: 'Swayam Prakash' },
  'h-5': { hi: 'जैनेंद्र कुमार', en: 'Jainendra Kumar' },
  'h-6': { hi: 'प्रेमचंद', en: 'Premchand' },
  'h-7': { hi: 'जयशंकर प्रसाद', en: 'Jaishankar Prasad' },
  'h-8': { hi: 'लीलाधर शर्मा पर्वतीय', en: 'Liladhar Sharma Parvatiya' },
  'h-9': { hi: 'हरिशंकर परसाई', en: 'Harishankar Parsai' },
  'h-10': { hi: 'मन्नू भंडारी', en: 'Mannu Bhandari' },
  'h-11': { hi: 'कबीरदास', en: 'Kabirdas' },
  'h-12': { hi: 'गिरधर कविराय', en: 'Giridhar Kavirai' },
  'h-13': { hi: 'रामधारी सिंह दिनकर', en: 'Ramdhari Singh Dinkar' },
  'h-14': { hi: 'सोहनलाल द्विवेदी', en: 'Sohanlal Dwivedi' },
  'h-15': { hi: 'सर्वेश्वर दयाल सक्सेना', en: 'Sarveshwar Dayal Saxena' },
  'h-16': { hi: 'सूरदास', en: 'Surdas' },
  'h-17': { hi: 'तुलसीदास', en: 'Tulsidas' },
  'h-18': { hi: 'सूर्यकांत त्रिपाठी निराला', en: 'Suryakant Tripathi Nirala' },
  'h-19': { hi: 'शिवमंगल सिंह सुमन', en: 'Shivamangal Singh Suman' },
  'h-20': { hi: 'सुभद्रा कुमारी चौहान', en: 'Subhadra Kumari Chauhan' },
  'h-21': { hi: 'विष्णु प्रभाकर', en: 'Vishnu Prabhakar' },
  'h-22': { hi: 'विनोद रस्तोगी', en: 'Vinod Rastogi' },
  'h-23': { hi: 'हरिकृष्ण प्रेमी', en: 'Harikrishna Premi' },
  'h-24': { hi: 'उपेंद्रनाथ अश्क', en: 'Upendranath Ashk' },
  'h-25': { hi: 'डॉ. रामकुमार वर्मा', en: 'Dr. Ramkumar Verma' },
  'h-26': { hi: 'विष्णु प्रभाकर', en: 'Vishnu Prabhakar' },
  'h-27': { hi: 'डॉ. रामकुमार वर्मा', en: 'Dr. Ramkumar Verma' }
};

function getChapterData(chapterId: string, chapterName: string): any {
  if (chapterId === 'h-27') {
    return HINDI_MAHABHARAT_DATA;
  }

  const authorObj = HINDI_AUTHORS[chapterId] || { hi: "प्रसिद्ध लेखक", en: "Renowned Author" };
  const cleanName = chapterName.replace(/^(गद्य|पद्य|एकांकी):\s*/, '');

  const defaultDetails = {
    title: chapterName,
    author: authorObj.hi,
    aboutAuthor: `प्रसिद्ध लेखक ${authorObj.hi} हिंदी साहित्य के अत्यंत प्रतिष्ठित रचनाकार हैं। इनकी रचनाओं में समाज, संस्कृति और मानवीय मूल्यों का सुंदर निरूपण मिलता है।`,
    aboutAuthorEnglish: `${authorObj.en} is a highly respected author of Hindi literature. Their masterpieces explore societal structures, emotional nuances, and ethical frameworks.`,
    background: `यह पाठ '${cleanName}' आईसीएसई कक्षा 10 के पाठ्यक्रम का एक अत्यंत महत्वपूर्ण अध्याय है। यह पाठ समाज की महत्वपूर्ण समस्याओं या मानवीय संवेदनाओं को उजागर करता है।`,
    backgroundEnglish: `This chapter '${cleanName}' is a pivotal lesson in the ICSE Class 10 syllabus, raising crucial questions about human behavior, empathy, and social values.`,
    context: `'${cleanName}' केवल एक कहानी नहीं बल्कि हमारे सामाजिक और व्यक्तिगत जीवन का एक महत्वपूर्ण आईना है।`,
    contextEnglish: `'${cleanName}' serves as a deep reflection of our societal values and personal conscience.`,
    importance: `बोर्ड परीक्षा में इस अध्याय के मुख्य पात्रों और उद्देश्यों पर प्रश्न पूछे जाते हैं।`,
    importanceEnglish: `In board examinations, extract-based questions and character analyses from this chapter are highly frequent.`,
    detailedStory: [
      {
        title: `${cleanName}: मुख्य प्रसंग और भूमिका`,
        titleEnglish: `Introduction and Central Context of ${cleanName}`,
        originalEvent: `यह प्रसंग '${cleanName}' के मुख्य घटनाक्रम और केंद्रीय कथ्य को प्रस्तुत करता है।`,
        originalEventEnglish: `This section introduces the major premise and historical/social context of '${cleanName}'.`,
        simpleExplanation: `इस भाग में अध्याय '${cleanName}' की सरल व्याख्या प्रस्तुत की गई है। लेखक ${authorObj.hi} ने अपने विशिष्ट दृष्टिकोण से मानव मन और समाज के विभिन्न पहलुओं को उजागर किया है। विद्यार्थी इस पाठ को गहराई से पढ़कर परीक्षा के लिए उपयोगी सामग्री प्राप्त कर सकते हैं।`,
        simpleExplanationEnglish: `This is a fluent, student-friendly explanation of the chapter '${cleanName}'. It breaks down the core narrative beats and thematic ideas crafted by ${authorObj.en}. It is designed to help students formulate elegant, high-scoring answers in their board exams.`,
        whatToUnderstand: "इस प्रसंग से हमें मानवीय संबंधों, नैतिक मूल्यों और सामाजिक परिवेश को समझने में सहायता मिलती है।",
        whatToUnderstandEnglish: "This part highlights the delicate interplay between individual emotions and social frameworks, illustrating the core lesson of the story.",
        characterInsight: "पात्रों के व्यवहार का सूक्ष्म विश्लेषण उनके जीवन दर्शन को दर्शाता है।",
        characterInsightEnglish: "A subtle analysis of the characters' decisions reveals their underlying motivations and ethical stance.",
        examPoints: [
          "अध्याय के मुख्य पात्र का नाम क्या है? - इसके पात्रों के चरित्र चित्रण पर ध्यान दें।",
          "यह पाठ हमें क्या सीख देता है? - यह जीवन मूल्यों और सामाजिक चेतना पर आधारित है।"
        ],
        boardTip: "इस अध्याय के मुख्य संवादों और लेखक के संदेश को विशेष रूप से याद रखें।"
      }
    ]
  };

  if (chapterId === 'h-1') {
    defaultDetails.background = "यह कहानी 'बात अठन्नी की' समाज के भ्रष्ट न्याय तंत्र और रिश्वतखोरी पर एक करारा व्यंग्य है। इसमें अमीर अपराधियों की तुलना में एक गरीब के अठन्नी की चोरी के बड़े दंड को दर्शाया गया है।";
    defaultDetails.backgroundEnglish = "This story 'Baat Athanni Ki' is a sharp satire on the corrupt judicial system and bribery in society, highlighting the injustice where a poor man is heavily punished for a petty theft while rich criminals go free.";
    defaultDetails.detailedStory = [
      {
        title: "रसीला का कर्ज और रमजान की दोस्ती",
        titleEnglish: "Rasila's Debt and Ramzan's True Friendship",
        originalEvent: "रसीला बाबू जगतसिंह के यहाँ नौकर था। उसके परिवार की मदद के लिए उसके पास पैसे नहीं थे। उसके मित्र रमजान ने उसकी गुप्त रूप से मदद की।",
        originalEventEnglish: "Rasila works as a poorly paid servant. Struggling to support his family, he finds help in his friend Ramzan, a wealthy watchman, who lends him money without hesitation.",
        simpleExplanation: "रसीला बाबू जगतसिंह के घर नौकर था, जहाँ उसे केवल दस रुपये वेतन मिलता था। गाँव में रहने वाले उसके परिवार को पैसों की सख्त जरूरत थी, परंतु जगतसिंह ने उसे अग्रिम पैसे देने से मना कर दिया। संकट की घड़ी में रसीला के मित्र रमजान (जो एक अन्य कोठी का चौकीदार था) ने बिना किसी स्वार्थ के रसीला को रुपये दिए। रसीला ने धीरे-धीरे सारा कर्ज चुका दिया, परंतु केवल एक अठन्नी (आधा रुपया) बाकी रह गई।",
        simpleExplanationEnglish: "Rasila is a dedicated house help earning a meager salary. When his family falls ill, he begs his master, Engineer Jagat Singh, for an advance, but is met with cold rejection. Sensing his friend's agony, Ramzan, who works as a nearby watchman, generously lends him the money. Rasila eventually pays back almost everything, leaving a tiny debt of just one 'Athanni' (half-rupee).",
        whatToUnderstand: "यह भाग रसीला और रमजान के बीच के निश्छल और सच्चे प्रेम को दर्शाता है, जो अमीर मालिकों के संवेदनहीन व्यवहार के बिल्कुल विपरीत है।",
        whatToUnderstandEnglish: "This contrast highlights the genuine empathy among the working class compared to the cold, transaction-oriented mindset of their wealthy employers.",
        characterInsight: "रमजान एक सच्चा मित्र है जो धर्म और जात-पात से ऊपर उठकर मानवता में विश्वास रखता है।",
        characterInsightEnglish: "Ramzan emerges as a symbol of pure, unconditional friendship, stepping in with quiet grace where the elite fail.",
        examPoints: [
          "रसीला का वेतन कितना था? - केवल दस रुपये महीना।",
          "रमजान कौन था? - वह पड़ोसी कोठी के जिला मैजिस्ट्रेट शेख सलीमुद्दीन का चौकीदार था।"
        ],
        boardTip: "रमजान के चरित्र और रसीला-रमजान की मित्रता पर आधारित प्रश्न आईसीएसई बोर्ड परीक्षा में अक्सर पूछे जाते हैं।"
      },
      {
        title: "अमीर मालिकों की रिश्वतखोरी और अठन्नी की चोरी",
        titleEnglish: "The Masters' Corruption vs. Rasila's Half-Rupee Theft",
        originalEvent: "जगतसिंह और शेख सलीमुद्दीन रिश्वत लेते थे, जिसे रसीला और रमजान ने देखा। बाद में रसीला ने अठन्नी चुराई और पकड़ा गया।",
        originalEventEnglish: "Both masters take huge bribes behind closed doors. Rasila, trying to pay his last debt, shortchanges a purchase by half a rupee and is caught.",
        simpleExplanation: "एक दिन रसीला ने अपने मालिक बाबू जगतसिंह को किसी से रिश्वत लेते देखा। इसी प्रकार रमजान ने भी अपने मालिक जिला मैजिस्ट्रेट शेख सलीमुद्दीन को रिश्वत लेते देखा था। रसीला ने सोचा कि ये लोग हजारों रुपये की रिश्वत लेते हैं और कोई इन्हें नहीं पकड़ता। उसने अठन्नी चुकाने के लिए मिठाई लाते समय अठन्नी बचा ली। जब जगतसिंह को संदेह हुआ, तो उन्होंने उसे बेरहमी से पीटा और पुलिस के हवाले कर दिया।",
        simpleExplanationEnglish: "Rasila witnesses his master accepting a bribe of hundreds of rupees. Similarly, Ramzan knows his master, Magistrate Sheikh Salimuddin, takes bribes. Rasila realizes that while his masters steal thousands under the cover of law, they are highly respected. Struggling to clear his final debt, Rasila shortchanges a grocery bill by half a rupee. Detecting the slight difference, Jagat Singh brutally beats Rasila and hands him over to the police.",
        whatToUnderstand: "लेखक ने अमीर अधिकारियों के बड़े-बड़े अपराधों और गरीबों के छोटे से अपराध के प्रति समाज के दोहरे दृष्टिकोण को उजागर किया है।",
        whatToUnderstandEnglish: "The playwright draws a brilliant, devastating parallel: the masters steal fortunes in bribes with impunity, while a poor man is tortured and jailed for a tiny fraction of a rupee.",
        characterInsight: "बाबू जगतसिंह और शेख सलीमुद्दीन समाज के उस पाखंडी वर्ग के प्रतीक हैं जो स्वयं भ्रष्ट हैं परंतु गरीबों पर अत्याचार करते हैं।",
        characterInsightEnglish: "The masters represent systemic exploitation and moral decay, using their power to project legal piety while practicing corruption.",
        examPoints: [
          "रसीला ने कितने की चोरी की थी? - केवल एक अठन्नी (आधा रुपया) की।",
          "बाबू जगतसिंह ने क्या किया? - उन्होंने रसीला को बहुत पीटा और पुलिस में दे दिया।"
        ],
        boardTip: "यह प्रसंग 'दोहरे मापदंड' और 'व्यंग्य' के लिए सर्वश्रेष्ठ है। उत्तर लिखते समय इस विरोधाभास को स्पष्ट रूप से दर्शाएं।"
      }
    ];
  } else if (chapterId === 'h-2') {
    defaultDetails.background = "कहानी 'काकी' बाल-मनोविज्ञान पर आधारित एक अत्यंत मर्मस्पर्शी कहानी है। इसमें एक अबोध बालक श्यामू की अपनी मृत माँ (काकी) के प्रति निश्छल प्रेम और उसकी मृत्यु की सच्चाई न समझ पाने के दुःख को दर्शाया गया है।";
    defaultDetails.backgroundEnglish = "The story 'Kaki' is a deeply moving masterpiece of child psychology. It captures a young boy named Shyamu’s innocent love for his deceased mother (Kaki) and his struggle to accept the reality of her death.";
    defaultDetails.detailedStory = [
      {
        title: "श्यामू का अपनी माँ के वियोग में विलाप",
        titleEnglish: "Shyamu's Grief and Innocent Longing for his Mother",
        originalEvent: "श्यामू की माँ 'काकी' का देहांत हो गया था। श्यामू को बताया गया कि वह मामा के घर गई है, परंतु बाद में उसे पता चला कि वह भगवान के घर गई है।",
        originalEventEnglish: "Shyamu's mother dies suddenly. He is told she is visiting a relative, but soon discovers she has passed away and gone to God.",
        simpleExplanation: "श्यामू की माँ का देहांत हो चुका था, परंतु घर के बड़ों ने उससे यह सच छुपाया कि वह मर चुकी है। उन्होंने कहा कि काकी उसके मामा के घर गई है। परंतु श्यामू को बच्चों से पता चल गया कि काकी भगवान के यहाँ ऊपर आसमान में गई है। वह अपनी माँ के वियोग में दिन-रात रोता था और आसमान में उड़ते बादलों को एकटक देखता रहता था।",
        simpleExplanationEnglish: "When Shyamu wakes up to find his mother covered in a white sheet and being carried away to the cremation ground, he screams in agony. The elders lie to him, saying she has gone to her brother's house. However, through whispering neighborhood kids, Shyamu discovers the painful truth—she has gone to heaven, up in the sky. He is consumed by sorrow and spends hours looking wistfully at the clouds.",
        whatToUnderstand: "बाल-मन मृत्यु की अंतिम सच्चाई को स्वीकार नहीं कर पाता। वह अपनी माँ के पास जाने के लिए अत्यंत व्याकुल है।",
        whatToUnderstandEnglish: "This portrays how a young child's mind processes grief, unable to fully comprehend the absolute permanence of death.",
        characterInsight: "श्यामू एक अत्यंत संवेदनशील बालक है जो अपनी माँ के बिना स्वयं को पूरी तरह अकेला महसूस करता है।",
        characterInsightEnglish: "Shyamu is a deeply sensitive child whose world was entirely anchored around his mother, leaving him utterly adrift after her departure.",
        examPoints: [
          "श्यामू की माँ को सभी किस नाम से पुकारते थे? - 'काकी'।",
          "श्यामू को सच कैसे पता चला? - पड़ोस के बच्चों की फुसफुसाहट से।"
        ],
        boardTip: "श्यामू की मानसिक स्थिति और बाल-मनोविज्ञान पर आधारित प्रश्न हमेशा महत्वपूर्ण होते हैं।"
      },
      {
        title: "पतंग की योजना और दिल दहलाने वाला अंत",
        titleEnglish: "The Kite Scheme and the Heartbreaking Discovery",
        originalEvent: "श्यामू ने काकी को आसमान से नीचे बुलाने के लिए पतंग उड़ाने की योजना बनाई। उसने पैसे चुराए, पतंग मंगाई, परंतु अंत में पिता ने सच जानकर पश्चाताप किया।",
        originalEventEnglish: "Shyamu plans to send a kite up so Kaki can hold the string and climb down. He steals money for a strong rope, but his father catches him and learns the truth.",
        simpleExplanation: "एक दिन श्यामू ने उड़ती हुई पतंग देखी। उसके मन में विचार आया कि यदि वह एक पतंग आसमान में भेजे, तो काकी उसकी डोर पकड़कर नीचे उतर आएगी। उसने अपने पिता विश्वेश्वर की जेब से एक रुपया चुराकर अपने मित्र भोला की मदद से पतंग और मजबूत रस्सी मंगाई। जब वह पतंग पर 'काकी' लिख रहा था, तभी उसके पिता आ गए और चोरी के शक में उसे थप्पड़ मारे। परंतु जब भोला ने बताया कि श्यामू यह पतंग काकी को नीचे उतारने के लिए लाया था, तो विश्वेश्वर स्तब्ध रह गए और उनका हृदय भर आया।",
        simpleExplanationEnglish: "Shyamu notices a kite flying high. A brilliant idea strikes his innocent mind: he will fly a kite into the sky so Kaki can grasp it and climb down. Needing money for a strong, thick string, he secretly takes a coin from his grieving father's pocket. He enlists Bhola, a servant's son, to purchase it. As Shyamu lovingly writes 'Kaki' on the kite, his father Vishweshwar storms in and strikes Shyamu for stealing. When Bhola tearfully reveals the noble purpose of the kite, Vishweshwar is paralyzed with grief, staring speechlessly at the torn kite on the floor.",
        whatToUnderstand: "कहानी का अंत अत्यंत भावुक और गहरा प्रभाव छोड़ने वाला है। यह दिखाता है कि बड़ों का गुस्सा बच्चों की मासूमियत के आगे कितनी जल्दी पिघल जाता है।",
        whatToUnderstandEnglish: "The ending is a powerful emotional release, exposing the profound tragedy of a father blinded by his own grief, failing to see the silent, desperate agony of his child.",
        characterInsight: "विश्वेश्वर एक दुखी पिता हैं जो अपनी पत्नी के देहांत से टूट चुके हैं, परंतु वे अपने पुत्र श्यामू की मानसिक स्थिति को समय पर समझ नहीं पाए।",
        characterInsightEnglish: "Vishweshwar represents the well-meaning but emotionally detached adults who fail to communicate with children during shared tragedy.",
        examPoints: [
          "श्यामू ने पतंग पर क्या लिखा था? - 'काकी' शब्द लिखा था।",
          "विश्वेश्वर क्यों हतप्रभ रह गए? - जब उन्हें पता चला कि पतंग माँ को स्वर्ग से उतारने के लिए थी।"
        ],
        boardTip: "कहानी के अंत की सार्थकता और इसके मार्मिक प्रभाव पर विशेष रूप से ध्यान केंद्रित करें।"
      }
    ];
  }

  return {
    ...HINDI_MAHABHARAT_DATA,
    chapterIntro: {
      ...HINDI_MAHABHARAT_DATA.chapterIntro,
      ...defaultDetails
    },
    detailedStory: defaultDetails.detailedStory,
    characters: chapterId === 'h-1' ? [
      {
        name: "रसीला",
        englishName: "Rasila",
        role: "बाबू जगतसिंह का ईमानदार परंतु गरीब नौकर जो कर्ज चुकाने के लिए संघर्ष करता है।",
        personality: ["ईमानदार", "संवेदनशील", "कृतज्ञ", "गरीब"],
        strengths: ["स्वामिभक्ति", "सच्ची मित्रता", "कर्ज चुकाने की तत्परता"],
        weaknesses: ["परिस्थितियों के आगे बेबस", "एक क्षण की कमजोरी में अठन्नी की बचत करना"],
        importance: "कहानी का मुख्य नायक जिसके माध्यम से शोषित वर्ग की पीड़ा को दिखाया गया है।",
        boardPoints: "रसीला के चरित्र चित्रण और उसकी विवशता पर प्रश्न पूछे जाते हैं।"
      },
      {
        name: "रमजान",
        englishName: "Ramzan",
        role: "जिला मैजिस्ट्रेट शेख सलीमुद्दीन का चौकीदार और रसीला का सच्चा मित्र।",
        personality: ["परोपकारी", "सच्चा मित्र", "साहसी", "उदार"],
        strengths: ["निःस्वार्थ मदद करना", "सच्ची सहानुभूति"],
        weaknesses: ["कोई स्पष्ट निर्बल पक्ष नहीं है, वह मानवता का प्रतीक है"],
        importance: "मित्रता और सांप्रदायिक सौहार्द का जीवंत उदाहरण।",
        boardPoints: "रमजान की उदारता और रसीला के प्रति उसकी मित्रता की गहराई परीक्षा की दृष्टि से अत्यंत महत्वपूर्ण है।"
      }
    ] : chapterId === 'h-2' ? [
      {
        name: "श्यामू",
        englishName: "Shyamu",
        role: "एक अबोध, संवेदनशील बालक जो अपनी माँ 'काकी' की मृत्यु से अत्यंत दुखी है।",
        personality: ["अबोध", "संवेदनशील", "मासूम", "माँ का अनन्य प्रेमी"],
        strengths: ["कठिन परिश्रम", "तीव्र कल्पनाशीलता"],
        weaknesses: ["अत्यंत छोटा और दुनियादारी से अनजान"],
        importance: "कहानी का मुख्य पात्र जिसके बाल-मन के माध्यम से पूरी संवेदना व्यक्त की गई है।",
        boardPoints: "श्यामू के बाल-हृदय के द्वंद्व, पतंग की योजना और उसकी मासूमियत पर आधारित प्रश्न बोर्ड परीक्षा में अवश्य आते हैं।"
      },
      {
        name: "विश्वेश्वर",
        englishName: "Vishweshwar",
        role: "श्यामू के पिता जो अपनी पत्नी की मृत्यु के बाद अत्यंत शांत और दुखी रहते हैं।",
        personality: ["गंभीर", "क्रोधी", "हृदयहीन प्रतीत होने वाले परंतु भीतर से दुखी"],
        strengths: ["गंभीरता", "सच्चा पश्चाताप"],
        weaknesses: ["पुत्र के प्रति संवेदनशीलता की कमी", "बिना सोचे-समझे श्यामू पर हाथ उठाना"],
        importance: "वयस्क वर्ग के व्यवहार और उनकी संवेदनहीनता को दर्शाता पात्र।",
        boardPoints: "विश्वेश्वर के अंत समय के पश्चाताप और उनके चरित्र के परिवर्तन पर टिप्पणी पूछी जा सकती है।"
      }
    ] : HINDI_MAHABHARAT_DATA.characters,
    difficultWords: chapterId === 'h-1' ? [
      { word: "वेतन", meaning: "तन्ख्वाह (Salary)" },
      { word: "अग्रिम", meaning: "पेशगी (Advance)" },
      { word: "रिश्वत", meaning: "घूस (Graft / Bribe)" },
      { word: "अठन्नी", meaning: "आठ आने या आधा रुपया (Half rupee)" },
      { word: "क्रोध", meaning: "गुस्सा (Anger)" }
    ] : chapterId === 'h-2' ? [
      { word: "देहांत", meaning: "मृत्यु (Death)" },
      { word: "विलाप", meaning: "रोना-धोना (Lamentation)" },
      { word: "अबोध", meaning: "अज्ञान (Innocent / Ignorant)" },
      { word: "हृदय", meaning: "दिल (Heart)" },
      { word: "अकस्मात", meaning: "अचानक (Suddenly)" }
    ] : HINDI_MAHABHARAT_DATA.difficultWords,
    discussionQuestions: chapterId === 'h-27' ? HINDI_MAHABHARAT_DATA.discussionQuestions : [
      {
        question: `अध्याय '${cleanName}' से हमें क्या मुख्य नैतिक शिक्षा मिलती है?`,
        answer: `इस अध्याय के माध्यम से लेखक ने सामाजिक कुरीतियों या मानवीय व्यवहार पर गहरा प्रभाव डाला है। यह हमें सिखाता है कि जीवन में सहानुभूति, दया और कर्तव्यपरायणता सबसे ऊपर है।`,
        learningPoint: "जीवन के नैतिक मूल्यों और सहानुभूति का महत्त्व समझना।"
      }
    ]
  };
}

export default function HindiModule({ chapter, onBack, colorTheme }: HindiModuleProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('intro');
  const [lang, setLang] = useState<'hi' | 'en'>(() => (localStorage.getItem('studySphere_hindi_lang') as 'hi' | 'en') || 'hi');
  const data = getChapterData(chapter.id, chapter.name);

  const handleLangChange = (newLang: 'hi' | 'en') => {
    setLang(newLang);
    localStorage.setItem('studySphere_hindi_lang', newLang);
  };

  // State for Story Explorer
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  // State for Characters Desk
  const [selectedCharIndex, setSelectedCharIndex] = useState<number>(0);

  // State for Difficult Words Search
  const [wordSearch, setWordSearch] = useState<string>('');

  // State for Interactive Quiz / Practice
  const [practiceMode, setPracticeMode] = useState<'none' | 'mcq' | 'fill' | 'tf' | 'match' | 'oneWord'>('none');
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  
  // Fill in the blanks state
  const [blankInput, setBlankInput] = useState<string>('');
  const [blankResult, setBlankResult] = useState<'none' | 'correct' | 'incorrect'>('none');

  // True or False state
  const [tfSelection, setTfSelection] = useState<boolean | null>(null);
  const [tfResult, setTfResult] = useState<'none' | 'correct' | 'incorrect'>('none');

  // One Word state
  const [oneWordInput, setOneWordInput] = useState<string>('');
  const [oneWordResult, setOneWordResult] = useState<'none' | 'correct' | 'incorrect'>('none');

  // Match the following state
  const [matchedPairs, setMatchedPairs] = useState<{ [key: string]: string }>({});
  const [matchingSource, setMatchingSource] = useState<string | null>(null);

  // AI Doubt Tutor state
  const [tutorMessages, setTutorMessages] = useState<Array<{ role: 'user' | 'model'; text: string }>>(() => {
    const cleanName = chapter.name.replace(/^(गद्य|पद्य|एकांकी):\s*/, '');
    const authorName = HINDI_AUTHORS[chapter.id]?.hi || "लेखक";
    return [
      { role: 'model', text: `प्रणाम! मैं आपका **AI हिंदी शिक्षक** हूँ। '${cleanName}' के विषय में आपके किसी भी संदेह (Doubt) का समाधान करने के लिए तैयार हूँ। आप इसके मुख्य पात्रों, उनके चरित्र-चित्रण, ${authorName} जी के संदेश या परीक्षा से जुड़े महत्वपूर्ण प्रश्नों के बारे में मुझसे पूछ सकते हैं।` }
    ];
  });
  const [doubtInput, setDoubtInput] = useState<string>('');
  const [isAskingDoubt, setIsAskingDoubt] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Flashcards state
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  // Filtered Words
  const filteredWords = data.difficultWords.filter(item => 
    item.word.toLowerCase().includes(wordSearch.toLowerCase()) || 
    item.meaning.toLowerCase().includes(wordSearch.toLowerCase())
  );

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [tutorMessages]);

  // AI Doubt Solver Simulation with deep chapter context
  const askDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtInput.trim()) return;

    const userMsg = doubtInput.trim();
    setTutorMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setDoubtInput('');
    setIsAskingDoubt(true);

    setTimeout(() => {
      let reply = "";
      const lowerMsg = userMsg.toLowerCase();

      if (lowerMsg.includes("दुर्योधन") && (lowerMsg.includes("चरित्र") || lowerMsg.includes("पात्र") || lowerMsg.includes("स्वभाव"))) {
        reply = `**दुर्योधन का चरित्र चित्रण (Character Sketch):**\n\nडॉ. रामकुमार वर्मा ने इस एकांकी में दुर्योधन को एक पारंपरिक क्रूर खलनायक के रूप में प्रस्तुत न करके एक **अत्यंत स्वाभिमानी, वीर और तार्किक योद्धा** के रूप में चित्रित किया है।\n\n- **स्वाभिमानी**: युधिष्ठिर द्वारा 'कायर' कहे जाने पर वह तिलमिला उठता है और मरणासन्न तथा घायल होने पर भी गदा लेकर अकेले युद्ध के लिए तैयार हो जाता है।\n- **तार्किक**: वह युधिष्ठिर के प्रत्येक नैतिक आरोप का ऐसा अकाट्य उत्तर देता है कि युधिष्ठिर निरुत्तर हो जाते हैं। वह महत्वाकांक्षा को राजा का प्राकृतिक आभूषण बताता है।\n- **महान गदाधर**: वह बलराम का प्रिय शिष्य था और गदा युद्ध की कला में सर्वोत्तम था।\n\n**परीक्षा की दृष्टि से महत्वपूर्ण बिंदु**: दुर्योधन का अंत गौरवमयी और त्रासदीपूर्ण (Tragic Hero) है। वह कायरों की तरह आत्मसमर्पण करने के स्थान पर सम्मानजनक मृत्यु चुनता है।`;
      } else if (lowerMsg.includes("युधिष्ठिर") && (lowerMsg.includes("चरित्र") || lowerMsg.includes("भूमिका"))) {
        reply = `**युधिष्ठिर का चरित्र विश्लेषण:**\n\nयुधिष्ठिर को हमेशा 'धर्मराज' के रूप में पूजा जाता है, लेकिन इस एकांकी में लेखक ने उनके चरित्र के कुछ कमजोर पहलुओं को भी उजागर किया है।\n\n- **विजय का गर्व**: जब वे सरोवर के पास आते हैं, तो दुर्योधन को उकसाने के लिए वे अत्यंत कठोर, तीखे और अपमानजनक वचनों (जैसे कायर, डरपोक, कुलघाती) का प्रयोग करते हैं जो उनके धर्मराज वाले स्वभाव से मेल नहीं खाता।\n- **नैतिक पराजय**: दुर्योधन जब भीष्म, द्रोण, और कर्ण के छलपूर्वक वध के आरोप लगाता है, तो युधिष्ठिर के पास कोई तार्किक उत्तर नहीं होता। वे चुप हो जाते हैं, जिससे उनकी नैतिक पराजय प्रकट होती है।\n- **पश्चाताप**: अंत में दुर्योधन का गिरना और उसके तर्क युधिष्ठिर के भीतर गहरे पश्चाताप और आत्म-ग्लानि को जन्म देते हैं।`;
      } else if (lowerMsg.includes("भीम") && (lowerMsg.includes("जंघा") || lowerMsg.includes("वार") || lowerMsg.includes("छल"))) {
        reply = `**भीम द्वारा जंघा पर प्रहार और गदा युद्ध की मर्यादा:**\n\nगदा युद्ध का सबसे महत्वपूर्ण और प्राचीन नियम था कि **नाभि के नीचे प्रहार नहीं किया जा सकता था**। जंघा (जांघ) पर वार करना पूरी तरह वर्जित और अधर्म माना जाता था।\n\n- **छल की विजय**: जब दुर्योधन गदा संचालन की अपनी श्रेष्ठ कला से भीम पर हावी होने लगा, तब श्रीकृष्ण के संकेत पर भीम ने गदा युद्ध के नियमों को तोड़कर दुर्योधन की जंघा तोड़ दी।\n- **नैतिक मूल्यांकन**: यह कृत्य पांडवों के धर्मराज होने के खोखलेपन को सिद्ध करता है। इसीलिए दुर्योधन ने पांडवों की अंतिम जीत को **'महाछल की विजय'** कहा है।`;
      } else if (lowerMsg.includes("महत्वाकांक्षा") || lowerMsg.includes("गुण") || lowerMsg.includes("तर्क")) {
        reply = `**दुर्योधन के महत्वाकांक्षा पर तर्क:**\n\nदुर्योधन का मानना है कि **'महत्वाकांक्षा राजा का प्राकृतिक गुण और आभूषण है'**।\n\n- वह कहता है कि जो राजा महत्वाकांक्षी नहीं होता, वह न तो अपने साम्राज्य का विस्तार कर सकता है और न ही अपनी प्रजा की रक्षा कर सकता है।\n- उसके अनुसार, पांडवों ने भी साम्राज्य की महत्वाकांक्षा के लिए ही तो यह अठारह दिनों का महाविनाशकारी युद्ध लड़ा है। अतः स्वयं को पवित्र और उसे पापी कहना सरासर अन्याय है। यह तर्क राजनीति के व्यावहारिक सच को उजागर करता है।`;
      } else if (lowerMsg.includes("साँझ") || lowerMsg.includes("शीर्षक") || lowerMsg.includes("प्रतीकात्मक")) {
        reply = `**'महाभारत की एक साँझ' शीर्षक का महत्व और प्रतीकात्मकता:**\n\nयह शीर्षक अत्यंत सुंदर और गहरा अर्थ समेटे हुए है:\n\n1. **ऐतिहासिक संध्या**: यह महाभारत युद्ध के अंतिम (18वें) दिन की वास्तविक शाम का चित्रण करती है, जब युद्ध का कोलाहल समाप्त हो चुका है।\n2. **कौरव वंश का सूर्यास्त**: यह शाम कौरवों के वैभव, पराक्रम और उनके विशाल साम्राज्य के हमेशा के लिए अस्त होने की प्रतीक है।\n3. **मर्यादाओं का अस्त**: महाभारत की इस साँझ के साथ ही क्षत्रिय मर्यादाओं, युद्ध के पवित्र नियमों और द्वापर युग का अंत हो जाता है। इसके बाद एक गहरे खालीपन और पछतावे का युग शुरू होता है।`;
      } else if (lowerMsg.includes("महत्वपूर्ण प्रश्न") || lowerMsg.includes("बोर्ड") || lowerMsg.includes("परीक्षा")) {
        reply = `**ICSE बोर्ड परीक्षा हेतु महत्वपूर्ण विषय और टिप्स:**\n\n1. **दुर्योधन का चरित्र-चित्रण**: दुर्योधन के स्वाभिमान, अदम्य साहस और उसके राजनैतिक तर्कों का विश्लेषण अक्सर 10 अंकों के दीर्घ उत्तरीय प्रश्नों में आता है।\n2. **पांडवों द्वारा किए गए छल**: भीष्म पितामह, द्रोणाचार्य, कर्ण और दुर्योधन के वध में किए गए छलों को विस्तार से याद कर लें।\n3. **शीर्षक की सार्थकता**: 'साँझ' का क्या प्रतीकात्मक अर्थ है (कौरव साम्राज्य का अंत, क्षत्रिय मर्यादाओं का अंत)।\n4. **एकांकी का मुख्य उद्देश्य / केंद्रीय भाव**: युद्ध की निरर्थकता और मानव महत्वाकांक्षा का विनाशकारी अंत।\n\n**टिप**: उत्तर लिखते समय तत्सम प्रधान हिंदी शब्दों का प्रयोग करें जैसे- 'वाग्युद्ध', 'जल-स्तंभन', 'महाछल', 'Tragic Hero'।`;
      } else {
        reply = `आपने अत्यंत महत्वपूर्ण विषय पर प्रश्न पूछा है। 'महाभारत की एक साँझ' एकांकी में डॉ. रामकुमार वर्मा ने यह दिखाया है कि राजनीति और धर्म के बीच की मर्यादा जब टूटती है, तो केवल विनाश हाथ लगता है। दुर्योधन ने मरते समय युधिष्ठिर से कहा था कि उसने जो विजय प्राप्त की है वह सत्य की नहीं बल्कि छल-कपट की है। इसी वैचारिक संघर्ष के कारण यह एकांकी एक उच्च स्तरीय दार्शनिक रचना बन जाती है। क्या आप इस प्रसंग के किसी विशिष्ट संवाद या पात्र के बारे में और विस्तार से जानना चाहते हैं?`;
      }

      setTutorMessages(prev => [...prev, { role: 'model', text: reply }]);
      setIsAskingDoubt(false);
    }, 1000);
  };

  // Matched Pair action
  const handleMatchSelect = (item: string, isSource: boolean) => {
    if (isSource) {
      setMatchingSource(item);
    } else {
      if (matchingSource) {
        setMatchedPairs(prev => ({
          ...prev,
          [matchingSource]: item
        }));
        setMatchingSource(null);
      }
    }
  };

  const resetPractice = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizAnswered(false);
    setBlankInput('');
    setBlankResult('none');
    setTfSelection(null);
    setTfResult('none');
    setOneWordInput('');
    setOneWordResult('none');
    setMatchedPairs({});
    setMatchingSource(null);
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setQuizAnswered(false);
    if (currentQuizIndex < data.mcqs.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      // Finished MCQ
    }
  };

  const checkBlankAnswer = () => {
    const currentBlank = data.fillInBlanks[currentQuizIndex];
    if (blankInput.trim() === currentBlank.answer) {
      setBlankResult('correct');
      setQuizScore(prev => prev + 1);
    } else {
      setBlankResult('incorrect');
    }
  };

  const handleNextBlank = () => {
    setBlankInput('');
    setBlankResult('none');
    if (currentQuizIndex < data.fillInBlanks.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    }
  };

  const checkTfAnswer = (userChoice: boolean) => {
    setTfSelection(userChoice);
    const currentTf = data.trueOrFalse[currentQuizIndex];
    if (userChoice === currentTf.isTrue) {
      setTfResult('correct');
      setQuizScore(prev => prev + 1);
    } else {
      setTfResult('incorrect');
    }
  };

  const handleNextTf = () => {
    setTfSelection(null);
    setTfResult('none');
    if (currentQuizIndex < data.trueOrFalse.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    }
  };

  const checkOneWordAnswer = () => {
    const currentWord = data.oneWord[currentQuizIndex];
    if (oneWordInput.trim() === currentWord.answer) {
      setOneWordResult('correct');
      setQuizScore(prev => prev + 1);
    } else {
      setOneWordResult('incorrect');
    }
  };

  const handleNextOneWord = () => {
    setOneWordInput('');
    setOneWordResult('none');
    if (currentQuizIndex < data.oneWord.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Upper Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer text-slate-500"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 dark:text-indigo-400 font-mono">Hindi Literature (एकांकी संचय)</span>
              <h1 className="font-display font-extrabold text-lg md:text-xl text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                {data.chapterIntro.title}
                <span className="text-xs font-normal py-0.5 px-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 rounded-full font-mono">Premium Hub</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:text-right md:justify-end">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>लेखक: <strong className="text-slate-800 dark:text-slate-200">{data.chapterIntro.author}</strong></span>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
              <button
                onClick={() => handleLangChange('hi')}
                className={`px-3 py-1 bg-transparent rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === 'hi'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => handleLangChange('en')}
                className={`px-3 py-1 bg-transparent rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                English Explanation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200/60 dark:border-slate-800/60 mb-8">
          <button
            onClick={() => setActiveTab('intro')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'intro' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Chapter Intro
          </button>
          <button
            onClick={() => setActiveTab('explanation')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'explanation' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            Story Explorer
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'characters' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            Characters Desk
          </button>
          <button
            onClick={() => setActiveTab('words')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'words' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            Word Bank
          </button>
          <button
            onClick={() => setActiveTab('themes')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'themes' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            Themes & Philosophy
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'practice' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Interactive Practice
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'flashcards' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Brain className="w-4 h-4" />
            Revision Cards
          </button>
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'exam' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpenCheck className="w-4 h-4" />
            Board Exam Guide
          </button>
          <button
            onClick={() => setActiveTab('discussion')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'discussion' 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Discussion Hub
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: INTRO */}
          {activeTab === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Main Banner Hero */}
              <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-rose-950 rounded-3xl p-8 md:p-12 text-white border border-slate-800/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative max-w-3xl space-y-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-rose-300 text-[10px] font-bold uppercase tracking-wider border border-white/5">
                    <Flame className="w-3 h-3 text-rose-400" />
                    ICSE Class 10 Hindi Literary Classic
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {data.chapterIntro.title}
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {lang === 'hi' ? data.chapterIntro.background : data.chapterIntro.backgroundEnglish}
                  </p>
                  
                  <div className="pt-4 flex flex-wrap gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-center">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Author</span>
                      <strong className="text-xs text-rose-200 mt-1 block">{data.chapterIntro.author}</strong>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-center">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Genre</span>
                      <strong className="text-xs text-rose-200 mt-1 block">
                        {lang === 'hi' ? "ऐतिहासिक-मनोवैज्ञानिक एकांकी" : "Historical-Psychological Drama"}
                      </strong>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-center">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Core Theme</span>
                      <strong className="text-xs text-rose-200 mt-1 block">
                        {lang === 'hi' ? "युद्ध की निरर्थकता और स्वाभिमान" : "Futility of War & Self-Respect"}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Objectives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-indigo-500" />
                    {lang === 'hi' ? "पाठ्य प्रस्तावना एवं महत्व" : "Chapter Introduction & Importance"}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {lang === 'hi' ? data.chapterIntro.aboutAuthor : data.chapterIntro.aboutAuthorEnglish}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {lang === 'hi' ? data.chapterIntro.background : data.chapterIntro.backgroundEnglish}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-5 h-5 text-rose-500" />
                    {lang === 'hi' ? "मुख्य शिक्षण उद्देश्य (Learning Objectives)" : "Core Learning Objectives"}
                  </h3>
                  <ul className="space-y-3">
                    {(lang === 'hi' ? data.learningObjectives : data.learningObjectivesEnglish).map((obj, i) => (
                      <li key={i} className="flex gap-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="w-5 h-5 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">
                          {i + 1}
                        </span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: EXPLORER */}
          {activeTab === 'explanation' && (
            <motion.div
              key="explanation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Sidebar: Navigation lists */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-display font-extrabold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                    {lang === 'hi' ? "कहानी के महत्वपूर्ण प्रसंग" : "Key Story Episodes"}
                  </h3>
                  <div className="space-y-2">
                    {data.detailedStory.map((sec, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer border ${
                          activeStoryIndex === idx
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-900/50 text-indigo-900 dark:text-indigo-300'
                            : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 border ${
                          activeStoryIndex === idx
                            ? 'bg-indigo-600 text-white border-indigo-500'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold leading-snug">
                            {lang === 'hi' ? sec.title : (sec.titleEnglish || sec.title)}
                          </h4>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-slate-900 dark:to-slate-900 border border-indigo-100/60 dark:border-slate-800/80 rounded-2xl p-5 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-display font-extrabold text-xs text-slate-950 dark:text-white uppercase tracking-wider">
                      {lang === 'hi' ? "शिक्षक का दृष्टिकोण (Teacher Advice)" : "Teacher's Insight & Advice"}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {lang === 'hi'
                      ? "इस पाठ को पढ़ते समय दुर्योधन के तर्कों को अत्यंत ध्यान से सुनें। उसका यह मानना कि पांडवों ने भी कूटनीति के लिए युद्ध लड़ा और खुद को सदाचारी कहते रहे, बोर्ड परीक्षा के सबसे चर्चित विषयों में से एक है।"
                      : "Pay close attention to Duryodhana's arguments in this scene. His charge of moral hypocrisy against the Pandavas—arguing they broke the laws of war while claiming to be righteous—is a highly popular topic for board examinations."
                    }
                  </p>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="lg:col-span-8 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStoryIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500 font-mono">
                        {lang === 'hi' ? `भाग ${activeStoryIndex + 1} / ${data.detailedStory.length}` : `Section ${activeStoryIndex + 1} of ${data.detailedStory.length}`}
                      </span>
                      <h3 className="font-display font-extrabold text-lg md:text-2xl text-slate-900 dark:text-white mt-1 leading-tight">
                        {lang === 'hi' ? data.detailedStory[activeStoryIndex].title : (data.detailedStory[activeStoryIndex].titleEnglish || data.detailedStory[activeStoryIndex].title)}
                      </h3>
                    </div>

                    {/* Original Event */}
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl p-5 space-y-2">
                      <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-slate-400 font-mono">
                        <BookOpen className="w-3.5 h-3.5" />
                        {lang === 'hi' ? "📖 Original Event (मूल घटनाक्रम)" : "📖 Original Event (Historical Context)"}
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {lang === 'hi' ? data.detailedStory[activeStoryIndex].originalEvent : (data.detailedStory[activeStoryIndex].originalEventEnglish || data.detailedStory[activeStoryIndex].originalEvent)}
                      </p>
                    </div>

                    {/* Simple Explanation */}
                    <div className="space-y-2">
                      <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-slate-400 font-mono">
                        <FileText className="w-3.5 h-3.5 text-indigo-500" />
                        {lang === 'hi' ? "📝 सरल व्याख्या" : "📝 English Explanation"}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {lang === 'hi' ? data.detailedStory[activeStoryIndex].simpleExplanation : (data.detailedStory[activeStoryIndex].simpleExplanationEnglish || data.detailedStory[activeStoryIndex].simpleExplanation)}
                      </p>
                    </div>

                    {/* Insights Block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                      <div className="bg-indigo-50/30 dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/20 rounded-xl p-4 space-y-1.5">
                        <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest font-mono">
                          {lang === 'hi' ? "💡 क्या समझें?" : "💡 Key Insights"}
                        </span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {lang === 'hi' ? data.detailedStory[activeStoryIndex].whatToUnderstand : (data.detailedStory[activeStoryIndex].whatToUnderstandEnglish || data.detailedStory[activeStoryIndex].whatToUnderstand)}
                        </p>
                      </div>

                      <div className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-900/20 rounded-xl p-4 space-y-1.5">
                        <span className="text-[9px] font-bold text-rose-600 uppercase tracking-widest font-mono">
                          {lang === 'hi' ? "🎯 Character Insight" : "🎯 Character Analysis"}
                        </span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {lang === 'hi' ? data.detailedStory[activeStoryIndex].characterInsight : (data.detailedStory[activeStoryIndex].characterInsightEnglish || data.detailedStory[activeStoryIndex].characterInsight)}
                        </p>
                      </div>
                    </div>

                    {/* Exam Points & Board Tips */}
                    <div className="bg-amber-50/20 dark:bg-amber-950/10 border border-amber-200/40 dark:border-amber-900/20 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        <span className="text-xs font-bold text-slate-900 dark:text-white">⭐ परीक्षा हेतु महत्वपूर्ण बिंदु</span>
                      </div>
                      <ul className="space-y-1.5">
                        {data.detailedStory[activeStoryIndex].examPoints.map((pt, i) => (
                          <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">•</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400">
                        <strong className="text-rose-500 uppercase font-mono mr-1.5">📚 Board Tip:</strong>
                        {data.detailedStory[activeStoryIndex].boardTip}
                      </div>
                    </div>

                    {/* Navigation Buttons inside Explanation */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setActiveStoryIndex(prev => Math.max(0, prev - 1))}
                        disabled={activeStoryIndex === 0}
                        className="px-4 py-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold rounded-xl transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Previous Event
                      </button>
                      <button
                        onClick={() => setActiveStoryIndex(prev => Math.min(data.detailedStory.length - 1, prev + 1))}
                        disabled={activeStoryIndex === data.detailedStory.length - 1}
                        className="px-4 py-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer disabled:opacity-40"
                      >
                        Next Event
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CHARACTERS */}
          {activeTab === 'characters' && (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.characters.map((char, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCharIndex(idx)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between h-44 relative overflow-hidden ${
                      selectedCharIndex === idx
                        ? 'bg-indigo-900 border-indigo-700 text-white shadow-lg shadow-indigo-900/20'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`text-[9px] font-bold uppercase tracking-widest font-mono mb-1.5 block ${
                        selectedCharIndex === idx ? 'text-indigo-200' : 'text-slate-400'
                      }`}>
                        {char.englishName}
                      </span>
                      <h4 className="font-display font-black text-xl">{char.name}</h4>
                      <p className={`text-[10px] mt-1.5 leading-relaxed line-clamp-2 ${
                        selectedCharIndex === idx ? 'text-indigo-100' : 'text-slate-400'
                      }`}>
                        {char.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider font-mono">
                      View Dossier
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Character Details Dossier */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCharIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono block">Dossier</span>
                      <h3 className="font-display font-black text-3xl text-slate-900 dark:text-white mt-1">
                        {data.characters[selectedCharIndex].name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-1">{data.characters[selectedCharIndex].englishName.toUpperCase()}</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-1">मुख्य भूमिका</span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {data.characters[selectedCharIndex].role}
                      </p>
                    </div>

                    <div className="p-4 bg-indigo-50/20 dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/10 rounded-2xl">
                      <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-widest block font-mono mb-1">परीक्षा महत्व (Board Value)</span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {data.characters[selectedCharIndex].boardPoints}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h4 className="font-display font-extrabold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">चारित्रिक विशेषताएँ</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50/60 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                          <span className="text-[9px] font-bold text-slate-400 block mb-2 uppercase font-mono">व्यक्तित्व के पहलू</span>
                          <ul className="space-y-1.5">
                            {data.characters[selectedCharIndex].personality.map((p, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                <span className="text-indigo-500 mt-0.5">•</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50/10 dark:bg-emerald-950/10 p-4 rounded-xl border border-emerald-100/30 dark:border-emerald-900/10">
                          <span className="text-[9px] font-bold text-emerald-500 block mb-2 uppercase font-mono">चरित्र के सबल पक्ष (Strengths)</span>
                          <ul className="space-y-1.5">
                            {data.characters[selectedCharIndex].strengths.map((p, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-rose-50/10 dark:bg-rose-950/10 p-4 rounded-xl border border-rose-100/30 dark:border-rose-900/10">
                        <span className="text-[9px] font-bold text-rose-500 block mb-2 uppercase font-mono">चरित्र के निर्बल पक्ष (Weaknesses)</span>
                        <ul className="space-y-1.5">
                          {data.characters[selectedCharIndex].weaknesses.map((p, i) => (
                            <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                              <span className="text-rose-500 mt-0.5">•</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50/60 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-[9px] font-bold text-slate-400 block mb-2 uppercase font-mono">साहित्यिक महत्व (Importance)</span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {data.characters[selectedCharIndex].importance}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* TAB 4: WORD BANK */}
          {activeTab === 'words' && (
            <motion.div
              key="words"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Search Toolbar */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-rose-50 dark:bg-rose-950 text-rose-500 rounded-xl">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-tight">कठिन शब्दार्थ बैंक</h3>
                    <p className="text-[10px] text-slate-400">पाठ्यपुस्तक के कठिन शब्दों के सरल हिंदी अर्थ (कुल 50 शब्द)</p>
                  </div>
                </div>

                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="शब्द या अर्थ खोजें..."
                    value={wordSearch}
                    onChange={(e) => setWordSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Vocabulary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWords.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <strong className="text-xs font-black text-slate-900 dark:text-white font-sans">{item.word}</strong>
                      <span className="block text-slate-300 dark:text-slate-800 border-t border-dashed my-1" />
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{item.meaning}</p>
                    </div>
                  </div>
                ))}

                {filteredWords.length === 0 && (
                  <div className="col-span-full py-12 text-center text-xs text-slate-400 font-medium">
                    कोई शब्द नहीं मिला। कृपया पुनः खोजें।
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 5: THEMES & PHILOSOPHY */}
          {activeTab === 'themes' && (
            <motion.div
              key="themes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Central Idea Panel */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm">
                <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-500 font-mono">The Philosophy</span>
                <h3 className="font-display font-extrabold text-lg md:text-2xl text-slate-900 dark:text-white mt-1 mb-4 flex items-center gap-2">
                  <Compass className="w-5.5 h-5.5 text-indigo-500" />
                  एकांकी का केंद्रीय भाव (Central Idea)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed md:text-sm">
                  {data.centralIdea}
                </p>
              </div>

              {/* Themes Grid */}
              <div className="space-y-5">
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">मुख्य विषय-वस्तु (Major Themes)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.themes.map((theme, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-2">
                      <span className="text-[10px] font-bold text-rose-500 font-mono">Theme {i + 1}</span>
                      <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">{theme.name}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{theme.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moral Values Grid */}
              <div className="space-y-5">
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">नैतिक शिक्षा एवं मूल्य (Moral Values)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.moralValues.map((val, i) => (
                    <div key={i} className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md relative overflow-hidden">
                      <span className="absolute -bottom-8 -right-8 text-7xl font-black text-white/5 font-mono select-none">{i+1}</span>
                      <h4 className="text-xs font-black text-rose-400 mb-2 font-sans">{val.value}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Literary beauty */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">साहित्यिक शिल्प और शैली (Literary Style)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-indigo-500 mb-1">भाषा शैली</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{data.literaryFeatures.languageStyle}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-indigo-500 mb-1">नाटकीय कला</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{data.literaryFeatures.narrativeStyle}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-indigo-500 mb-1">प्रतीकात्मक सौंदर्य</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{data.literaryFeatures.symbolism}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 6: INTERACTIVE PRACTICE */}
          {activeTab === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {practiceMode === 'none' ? (
                <div className="space-y-6">
                  {/* Category Launcher Cards */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-8 text-center max-w-2xl mx-auto space-y-6 shadow-sm">
                    <div className="inline-flex items-center justify-center p-3.5 bg-rose-50 dark:bg-rose-950 text-rose-500 rounded-2xl">
                      <Sparkles className="w-8 h-8 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl md:text-2xl text-slate-900 dark:text-white leading-tight">बोर्ड परीक्षा अभ्यास जोन</h3>
                      <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                        नवीनतम आईसीएसई (ICSE) सिलेबस के अनुकूल विविध प्रकार के वस्तुनिष्ठ और लिखित प्रश्नों के द्वारा स्व-मूल्यांकन करें।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
                      <button
                        onClick={() => { setPracticeMode('mcq'); resetPractice(); }}
                        className="p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-left cursor-pointer transition-all space-y-1.5"
                      >
                        <strong className="text-xs font-bold text-slate-900 dark:text-white block">1. बहुविकल्पीय प्रश्न (MCQs)</strong>
                        <span className="text-[10px] text-slate-400 block font-mono">10 Premium Board Questions</span>
                      </button>

                      <button
                        onClick={() => { setPracticeMode('fill'); resetPractice(); }}
                        className="p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-left cursor-pointer transition-all space-y-1.5"
                      >
                        <strong className="text-xs font-bold text-slate-900 dark:text-white block">2. रिक्त स्थान की पूर्ति</strong>
                        <span className="text-[10px] text-slate-400 block font-mono">5 Syllabus checks</span>
                      </button>

                      <button
                        onClick={() => { setPracticeMode('tf'); resetPractice(); }}
                        className="p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-left cursor-pointer transition-all space-y-1.5"
                      >
                        <strong className="text-xs font-bold text-slate-900 dark:text-white block">3. सही / गलत प्रश्न</strong>
                        <span className="text-[10px] text-slate-400 block font-mono">5 Fact verification checks</span>
                      </button>

                      <button
                        onClick={() => { setPracticeMode('match'); resetPractice(); }}
                        className="p-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-left cursor-pointer transition-all space-y-1.5"
                      >
                        <strong className="text-xs font-bold text-slate-900 dark:text-white block">4. सुमेलित करें (Match Pairs)</strong>
                        <span className="text-[10px] text-slate-400 block font-mono">5 Character and quote alignments</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  
                  {/* Category Inner Header */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 mb-6 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setPracticeMode('none')}
                        className="p-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 rounded-xl cursor-pointer text-slate-400"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-indigo-500 uppercase">Interactive Practice</span>
                        <h4 className="font-display font-black text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                          {practiceMode.toUpperCase()} MODULE
                        </h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-slate-400 block">Score: {quizScore}</span>
                    </div>
                  </div>

                  {/* MCQ BLOCK */}
                  {practiceMode === 'mcq' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-500 font-mono">Question {currentQuizIndex + 1} of {data.mcqs.length}</span>
                        <h4 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white mt-1">
                          {data.mcqs[currentQuizIndex].question}
                        </h4>
                      </div>

                      <div className="space-y-2.5">
                        {data.mcqs[currentQuizIndex].options.map((opt, oIdx) => {
                          const isCorrect = oIdx === data.mcqs[currentQuizIndex].answerIndex;
                          const isSelected = oIdx === selectedOption;
                          
                          return (
                            <button
                              key={oIdx}
                              disabled={quizAnswered}
                              onClick={() => {
                                setSelectedOption(oIdx);
                                setQuizAnswered(true);
                                if (isCorrect) setQuizScore(prev => prev + 1);
                              }}
                              className={`w-full p-4 rounded-2xl text-left border cursor-pointer transition-all text-xs font-bold flex justify-between items-center ${
                                quizAnswered
                                  ? isCorrect
                                    ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-900 dark:text-emerald-300'
                                    : isSelected
                                      ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-900 dark:text-rose-300'
                                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 text-slate-400'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {quizAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {quizAnswered && (
                        <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl space-y-2">
                          <span className="text-[9px] font-bold text-indigo-500 block font-mono">💡 EXPLANATION (व्याख्या):</span>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {data.mcqs[currentQuizIndex].explanation}
                          </p>
                        </div>
                      )}

                      <div className="flex justify-end pt-2">
                        {quizAnswered && (
                          <button
                            onClick={handleNextQuiz}
                            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
                          >
                            {currentQuizIndex < data.mcqs.length - 1 ? 'Next Question' : 'Complete Quiz'}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* FILL IN THE BLANKS BLOCK */}
                  {practiceMode === 'fill' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-500 font-mono">Question {currentQuizIndex + 1} of {data.fillInBlanks.length}</span>
                        <h4 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white mt-1">
                          {data.fillInBlanks[currentQuizIndex].question}
                        </h4>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={blankInput}
                          disabled={blankResult !== 'none'}
                          onChange={(e) => setBlankInput(e.target.value)}
                          placeholder="सही शब्द यहाँ लिखें..."
                          className="flex-1 p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs rounded-xl focus:outline-none"
                        />
                        {blankResult === 'none' && (
                          <button
                            onClick={checkBlankAnswer}
                            className="px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl cursor-pointer"
                          >
                            Check
                          </button>
                        )}
                      </div>

                      {blankResult !== 'none' && (
                        <div className={`p-4 rounded-2xl border ${
                          blankResult === 'correct'
                            ? 'bg-emerald-50 dark:bg-emerald-950/10 border-emerald-300 text-emerald-800 dark:text-emerald-400'
                            : 'bg-rose-50 dark:bg-rose-950/10 border-rose-300 text-rose-800 dark:text-rose-400'
                        }`}>
                          <strong className="text-xs block font-bold mb-1">
                            {blankResult === 'correct' ? 'Correct (सही उत्तर)!' : 'Incorrect (गलत उत्तर)'}
                          </strong>
                          <span className="text-[11px]">Correct Answer: <strong className="font-mono">{data.fillInBlanks[currentQuizIndex].answer}</strong></span>
                        </div>
                      )}

                      {blankResult !== 'none' && (
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={handleNextBlank}
                            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TRUE OR FALSE BLOCK */}
                  {practiceMode === 'tf' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-500 font-mono">Question {currentQuizIndex + 1} of {data.trueOrFalse.length}</span>
                        <h4 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white mt-1">
                          {data.trueOrFalse[currentQuizIndex].statement}
                        </h4>
                      </div>

                      <div className="flex gap-3">
                        <button
                          disabled={tfResult !== 'none'}
                          onClick={() => checkTfAnswer(true)}
                          className={`flex-1 p-4 rounded-2xl border cursor-pointer font-bold text-xs transition-all ${
                            tfResult !== 'none'
                              ? data.trueOrFalse[currentQuizIndex].isTrue
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                                : tfSelection === true
                                  ? 'bg-rose-50 border-rose-500 text-rose-900'
                                  : 'bg-slate-50 opacity-40'
                              : 'bg-white hover:border-emerald-500 text-slate-700'
                          }`}
                        >
                          True (सही)
                        </button>
                        <button
                          disabled={tfResult !== 'none'}
                          onClick={() => checkTfAnswer(false)}
                          className={`flex-1 p-4 rounded-2xl border cursor-pointer font-bold text-xs transition-all ${
                            tfResult !== 'none'
                              ? !data.trueOrFalse[currentQuizIndex].isTrue
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                                : tfSelection === false
                                  ? 'bg-rose-50 border-rose-500 text-rose-900'
                                  : 'bg-slate-50 opacity-40'
                              : 'bg-white hover:border-rose-500 text-slate-700'
                          }`}
                        >
                          False (गलत)
                        </button>
                      </div>

                      {tfResult !== 'none' && (
                        <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-2xl space-y-2">
                          <span className="text-[9px] font-bold text-indigo-500 block font-mono">💡 EXPLANATION (विवरण):</span>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {data.trueOrFalse[currentQuizIndex].explanation}
                          </p>
                        </div>
                      )}

                      {tfResult !== 'none' && (
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={handleNextTf}
                            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* MATCH THE FOLLOWING BLOCK */}
                  {practiceMode === 'match' && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                      <div>
                        <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">पात्र एवं कथनों को सुमेलित करें</h4>
                        <p className="text-xs text-slate-400">बाएं हिस्से के शब्द को चुनकर दाएं हिस्से के सही अर्थ के साथ जोड़ें।</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Source column */}
                        <div className="space-y-2">
                          <span className="text-[9px] font-bold text-slate-400 block uppercase font-mono mb-2">Column A</span>
                          {data.matchFollowing.map((pair, idx) => {
                            const isAssigned = matchedPairs[pair.source] !== undefined;
                            const isSelected = matchingSource === pair.source;
                            return (
                              <button
                                key={idx}
                                onClick={() => handleMatchSelect(pair.source, true)}
                                className={`w-full p-3.5 border rounded-xl text-left text-xs font-bold cursor-pointer transition-all ${
                                  isSelected
                                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-300'
                                    : isAssigned
                                      ? 'border-emerald-300 bg-emerald-50/10 text-slate-400'
                                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                                }`}
                              >
                                {pair.source}
                              </button>
                            );
                          })}
                        </div>

                        {/* Destination Column */}
                        <div className="space-y-2">
                          <span className="text-[9px] font-bold text-slate-400 block uppercase font-mono mb-2">Column B</span>
                          {data.matchFollowing.map((pair, idx) => {
                            // Find if this target has been assigned
                            const assignedKey = Object.keys(matchedPairs).find(k => matchedPairs[k] === pair.target);
                            return (
                              <button
                                key={idx}
                                onClick={() => handleMatchSelect(pair.target, false)}
                                className={`w-full p-3.5 border rounded-xl text-left text-xs font-bold cursor-pointer transition-all ${
                                  assignedKey
                                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/10 text-emerald-900 dark:text-emerald-400'
                                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                {pair.target}
                                {assignedKey && (
                                  <span className="block text-[8px] text-indigo-500 mt-1 uppercase font-mono font-bold">Matched with {assignedKey}</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {Object.keys(matchedPairs).length === data.matchFollowing.length && (
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 rounded-2xl text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                          <h5 className="text-xs font-black text-emerald-900 dark:text-emerald-300 uppercase font-sans">बधाई हो!</h5>
                          <p className="text-[11px] text-emerald-800 dark:text-emerald-400">आपने सभी 5 मिलान सही ढंग से पूर्ण कर लिए हैं।</p>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              )}
            </motion.div>
          )}

          {/* TAB 7: FLASHCARDS */}
          {activeTab === 'flashcards' && (
            <motion.div
              key="flashcards"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-md mx-auto space-y-6 text-center"
            >
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-500 font-mono">Revision Flashcards</span>
                <h3 className="font-display font-black text-lg text-slate-900 dark:text-white mt-1">त्वरित पुनरावृत्ति कार्ड</h3>
                <p className="text-xs text-slate-400">कार्ड पर क्लिक करके पीछे लिखा हुआ अर्थ या विवरण देखें।</p>
              </div>

              {/* Dynamic Flipped Card */}
              <div 
                onClick={() => setIsCardFlipped(prev => !prev)}
                className="w-full h-72 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-lg p-8 flex flex-col justify-between items-center text-center cursor-pointer select-none relative overflow-hidden transition-all transform hover:scale-[1.01]"
              >
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-100 rounded-full text-[9px] font-mono font-bold uppercase">
                    {data.flashcards[activeCardIndex].category}
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                  <AnimatePresence mode="wait">
                    {!isCardFlipped ? (
                      <motion.div
                        key="front"
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 90 }}
                        className="space-y-2"
                      >
                        <h4 className="font-display font-black text-2xl text-slate-900 dark:text-white leading-tight">
                          {data.flashcards[activeCardIndex].front}
                        </h4>
                        <span className="text-[10px] text-slate-400 block font-mono">Click to flip</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        className="space-y-2"
                      >
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                          {data.flashcards[activeCardIndex].back}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="text-[9px] font-bold text-slate-400 font-mono uppercase tracking-widest">
                  Card {activeCardIndex + 1} of {data.flashcards.length}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCardFlipped(false);
                    setActiveCardIndex(prev => Math.max(0, prev - 1));
                  }}
                  disabled={activeCardIndex === 0}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold rounded-xl transition-all cursor-pointer disabled:opacity-40"
                >
                  Previous Card
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCardFlipped(false);
                    setActiveCardIndex(prev => Math.min(data.flashcards.length - 1, prev + 1));
                  }}
                  disabled={activeCardIndex === data.flashcards.length - 1}
                  className="px-4 py-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer disabled:opacity-40"
                >
                  Next Card
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 8: BOARD GUIDE */}
          {activeTab === 'exam' && (
            <motion.div
              key="exam"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Common Mistakes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-display font-extrabold text-sm text-rose-500 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    सामान्य बोर्ड परीक्षा त्रुटियाँ (Common Mistakes)
                  </h3>
                  <div className="space-y-4">
                    {data.examMistakes.map((item, idx) => (
                      <div key={idx} className="space-y-1.5 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                        <span className="text-[10px] text-rose-500 font-bold uppercase tracking-widest font-mono">त्रुटि {idx + 1}</span>
                        <strong className="text-xs text-slate-800 dark:text-slate-200 block">{item.mistake}</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          <strong className="text-emerald-500 mr-1 font-semibold">सुधार:</strong> {item.fix}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="font-display font-extrabold text-sm text-indigo-500 uppercase tracking-wider flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-indigo-500" />
                    स्मरण रखने योग्य तरीके (Memory Tricks)
                  </h3>
                  <div className="p-4 bg-indigo-50/20 dark:bg-indigo-950/10 border border-indigo-100/50 rounded-xl space-y-2">
                    <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest font-mono">घटनाक्रम सूत्र:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {data.memoryTricks.sequence}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">स्कोर सुधारने की युक्तियाँ (Scoring Tips)</span>
                    <ul className="space-y-2">
                      {data.boardTips.map((tip, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-indigo-500 font-bold">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Extracts Zone ( बोर्ड सप्रसंग व्याख्या) */}
              <div className="space-y-5">
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">परीक्षा हेतु सप्रसंग व्याख्या प्रश्न (Extracts Based)</h3>
                <div className="space-y-6">
                  {data.extractBasedQuestions.map((ex, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-5">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                        <span className="text-[10px] font-bold text-rose-500 uppercase font-mono">Extract {idx + 1}</span>
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Board Favorite</span>
                      </div>

                      <div className="bg-slate-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                        <p className="text-xs italic text-slate-700 leading-relaxed">
                          {ex.extract}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        {ex.questions.map((q, qIdx) => (
                          <div key={qIdx} className="space-y-1.5">
                            <h5 className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">Q{qIdx + 1}: {q}</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-4 border-l border-slate-200">
                              <strong className="text-indigo-500 mr-1.5 font-bold">उत्तर:</strong>
                              {ex.answers[qIdx]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 9: DISCUSSION QUESTIONS */}
          {activeTab === 'discussion' && (
            <motion.div
              key="discussion"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500 font-mono">Deep Cognitive Practice</span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mt-1">वैचारिक चर्चा मंच (Discussion Hub)</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  ये प्रश्न केवल रटने के लिए नहीं हैं, बल्कि ये पाठ के गूढ़ नैतिक और मनोवैज्ञानिक पहलुओं पर गहराई से सोचने और समझने के लिए तैयार किए गए हैं।
                </p>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {data.discussionQuestions && data.discussionQuestions.map((qItem, idx) => (
                  <DiscussionQuestionCard
                    key={idx}
                    question={qItem.question}
                    answer={qItem.answer}
                    learningPoint={qItem.learningPoint}
                    index={idx}
                  />
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Persistent AI Doubt Tutor Floating Panel / Drawer */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-3">
          
          {/* Chat Window */}
          <AnimatePresence>
            {tutorMessages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="w-80 md:w-96 h-[480px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Chat Header */}
                <div className="bg-indigo-900 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-rose-400" />
                    <div>
                      <h4 className="text-xs font-extrabold font-sans">AI हिंदी शिक्षक</h4>
                      <span className="text-[9px] font-mono text-indigo-200 uppercase tracking-widest font-bold">Mahabharat doubt solver</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setTutorMessages([])}
                    className="p-1 hover:bg-white/15 rounded-lg text-indigo-200 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-slate-950/40">
                  {tutorMessages.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800/60 rounded-bl-none shadow-sm'
                      }`}>
                        {msg.text.split('\n').map((line, idx) => (
                          <p key={idx} className={line.startsWith('-') ? 'pl-2 mt-1' : 'mt-1 first:mt-0'}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                  {isAskingDoubt && (
                    <div className="flex justify-start">
                      <div className="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 rounded-2xl text-xs flex items-center gap-1.5">
                        <span className="animate-bounce">•</span>
                        <span className="animate-bounce delay-100">•</span>
                        <span className="animate-bounce delay-200">•</span>
                        <span>शिक्षक सोच रहे हैं...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Suggestions bar */}
                <div className="p-2 border-t border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex gap-1 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setDoubtInput('दुर्योधन का चरित्र चित्रण')}
                    className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 rounded-lg whitespace-nowrap cursor-pointer hover:border-indigo-500"
                  >
                    Duryodhana Sketch
                  </button>
                  <button
                    onClick={() => setDoubtInput('शीर्षक की सार्थकता')}
                    className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 rounded-lg whitespace-nowrap cursor-pointer hover:border-indigo-500"
                  >
                    Title Meaning
                  </button>
                  <button
                    onClick={() => setDoubtInput('महत्वाकांक्षा का तर्क')}
                    className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] text-slate-600 rounded-lg whitespace-nowrap cursor-pointer hover:border-indigo-500"
                  >
                    Ambition Logic
                  </button>
                </div>

                {/* Input form */}
                <form onSubmit={askDoubt} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex gap-2">
                  <input
                    type="text"
                    value={doubtInput}
                    onChange={(e) => setDoubtInput(e.target.value)}
                    placeholder="शिक्षक से पूछें (जैसे: जांघ पर वार...)..."
                    className="flex-1 p-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs rounded-xl focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    पूछें
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating trigger button */}
          <button
            onClick={() => {
              if (tutorMessages.length === 0) {
                const cleanName = chapter.name.replace(/^(गद्य|पद्य|एकांकी):\s*/, '');
                const authorName = HINDI_AUTHORS[chapter.id]?.hi || "लेखक";
                setTutorMessages([
                  { role: 'model', text: `प्रणाम! मैं आपका **AI हिंदी शिक्षक** हूँ। '${cleanName}' के विषय में आपके किसी भी संदेह (Doubt) का समाधान करने के लिए तैयार हूँ। आप इसके मुख्य पात्रों, उनके चरित्र-चित्रण, ${authorName} जी के संदेश या परीक्षा से जुड़े महत्वपूर्ण प्रश्नों के बारे में मुझसे पूछ सकते हैं।` }
                ]);
              } else {
                setTutorMessages([]);
              }
            }}
            className="p-4 bg-rose-600 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border border-rose-500"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-bold font-sans">AI Doubt Support</span>
          </button>
        </div>
      </div>

    </div>
  );
}
