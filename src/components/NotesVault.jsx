import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Snackbar,
  Alert,
  Fade,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const RAW_NOTES_DATA = [
  {
    id: "note-1",
    date: "2025-12-31",
    displayDate: "31.12.2025",
    subDate: "Written on 01.01.2026 at 10:44 AM",
    title: "Kuttymaa DhivyaBharathi (backs) on 31.12.2025",
    category: "Reunion & Confession 💝",
    author: "Prasanth (Petda)",
    mood: "Overwhelmed with Relief & Love",
    icon: "💝",
    content: `Mine closest friend ever i met..... My long days prayer today happened she's back.... Not only back have a trust have a missing partner have a guilt have a word mine ever best Kuttymaa😇one and only ennoda kuttymaa💝🫂engayum pogathu.... Resolution edukura but ennai athula ezclude pannuraa nan sollura munndiye en kuttyma fix pannita ennai nambama irukka mattanu.... And her voice 🤗🤗🤗innum marala but slightly weight loss... Only fat lost hope lost agama irukku 😇athuke nan kuduthu vechu irukanum the most most happiest ending of 2025 Mine All Solution Mine crime partner back my soulmate returns🫂But  evening call cut pannum pothu hug panni azhanum thonuchuu..... Oru vekka manasu illa vittu pogavum mudilla sonna apo...... Katti pudichu kuttyma nan iruppan maa pls inime ethukum feel panna kudathu apo opo eppavum enakku kastam apo nii iruntha unakku kastam therijum nan illama povana.... Iruppan maa.... Our trip not 1 day, it's keep on climbing🧗♂️ endless love oon pasathukku mattume oonkitta irukkan maa... Nii apo apo enakku biggest lesson ah theriva. Ipd la irukanum unnai parthu tha therinjukittan kuttymaaa.......... Inime therinjuka naan asaiya irukkan pls again mood out la ennai zone out panniratha 😣. What ever situation unakku first sollanum thonurathu enkitta tha irukkanum nan romba asai pattan......... Athunala tha nii happy tha irukka kastam nan nichiyama enkita vanthu irupala nan kandukala epd maa ivvalavu periya valiya thaniyaa face panna🥺🥺 pls nan parthuppan apd la dialogue vida virumbala but enkitta sonna unnai kandippa atha pathi think panave vida mattan kuttyma nii happy irukuratha ninaichu tha nan self sacrifice panna nii tha maraichuta sry dii nan unnai epdyaachu contact panni kettu irukanum ennachunu 4month thaniya kasta pada vechutanenu romba kastama iruku kuttymaa.... Here after no compromise nii epd irukanu therinjukama thukkame varathu en kuttymaaa... Always ennoda kuttymaa...... Ippo tha oonkitta katti pudichu oorukke kekkura maari sollanum thonuthu...... Love you❤ kuttymaa 
Ore oru sangadam nii call la iruntha apo ellarukum happy new year sonna enakku oru varthai solli irukalam nan expect panna ellarukum bye sollura apo wish pannura enakkum solluvanu butt etho urgent la nii sollala seri vidu    
I wrote on 01.01.2026 10.44.a.m`
  },
  {
    id: "note-2",
    date: "2026-01-08",
    displayDate: "08.01.2026",
    subDate: "January 8, 2026",
    title: "Dream with DhivyaBharathi💕🫂 8.1.2026",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Sweet Dream & Warm Hug",
    icon: "🌙",
    content: `Kuttymaa romba happy ah irukkan nii en dream la vanthiye enga veetla nii meet pana vara na vaayi pesi pesi oonkitta thittu vanguran en kuttymakitta thittu vangave nanum pesuran aprm namma onna sapturom en samayal nalla irukunu sonna aprm kelambum pothu niiye vanthu hug pannura 10mins apdye nikkura enakku poga manase illa da sollura neechiyama seekram nanum oon veetukku varan Kuttyma promise panna aprm tha ennai vitta`
  },
  {
    id: "note-3",
    date: "2026-01-28",
    displayDate: "28.01.2026",
    subDate: "January 28, 2026",
    title: "En kuttymaa 🫰 (in dream) 28.01.2026",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Best Dream Ever & Heartwarming",
    icon: "🌙",
    content: `Enga veetla meet panrom niraiyaa pesunom  nan la first meet katti pudichu azhuvuran nii thalli vitutu oru dialogue sonna paru vidu da ponna katti pudikura manners illaiya kekkura loosu aprm enna paiyana katti pudipangala kettan  illa da oru maari feel good ah iruku da but venam sollura aprm sappadu pottu kudutha nan venam sonnan aprm nii sapta pakathula vanthu ukkanthu ootti vidunu adam pudichan niiyum mm enna panrathu ninaichutu ootti vitta en kuttymaa💖🫂 kai la saptane aprm rendu perum ore edathula velaikku polam sollurom unga veetla ennai nambi tha anupuranga same room la rendu perum  daily sandai ethachu ana seekram sandai mudiyuthu aprm ice cream parlor ponom unakku enna venum kekkrathukulla oru blood mosquito bite me so wake up but en life vantha best dream ever romba romba happy ahhh irunthuchu kuttymaa en veetla en kuda en pakkathula en thol la sanjuttu padam parthom intha moment ipdye enakku enna analum paravala kuttymaa 💖en life la enna enna venum irunthano oru night dream la parthutan... ... Miss you❤ kuttymaa💖 kuda iru ana kudu vittu poiratha🥺 namma sandai la nan unnai ice veche pathi sandaiya mudichutan🥲🤭`
  },
  {
    id: "note-4",
    date: "2026-02-22",
    displayDate: "22.02.2026",
    subDate: "February 22, 2026",
    title: "Kuttymaaa💕 live meet for the first time",
    category: "First Meet 🫂✨",
    author: "Prasanth",
    mood: "Awe & Pure Magic",
    icon: "✨",
    content: `En kuttymaaa Paartha naal 22.02.2026 The first Meet ❣️🫂 En kuttymaaa Slightly belly fat smile hot always seeking eyes lips murmurings more casual wear slight curly hair round face dominate smile unconditional care The Day She Is More Spiritual 🫂`
  },
  {
    id: "note-5",
    date: "2026-03-28",
    displayDate: "28.03.2026",
    subDate: "March 28, 2026 — Chennimalai Murugan Temple",
    title: "Kuttymaa's Day🫂💞 28.03.26 (Prasanth's Perspective)",
    category: "Real Meet 🫂",
    author: "Prasanth (Petda)",
    mood: "Unforgettable Journey, Sacred Vows & Every Heartbeat",
    icon: "🛕",
    content: `Today Mine Ever Best Day in My Life
I woke up at 5.am en kuttymaa 5.6 Gm pottuchu nan gm pottu kiss pannitan kovama emoji vera 😤😠😠😠 aprm en kuttymaa thunguran sonna nanum exercise pannuran sollitu avala thunga vechutan . madam nalla thungitu 5.53 wake agitu nan kelambaran msg. Ok nanum exercise mudichutu kelambalam partha amma bed la irunthu coffee satham aprm ammakku pottu kuduthutu kudikum pothu epo poganum kettu 8mani sonnathuku ok enakkum dosinnaiu nan saptu unnai kutitu vanthu viduran solliruchu. Athuvaraikum maraichu vecha gift eduthu munnadi vechutan seri parkka tha poranganu  en kuttymaa kelambitan sollita nan reply panla etho snap potta ava pic ninaichu pakka kudathu pakkala aprm dei reply pannu da ala kanom azhugura.. 🤭 epdyoo en kuttymaa 7.44 ready agitta. Aprm nan amma la kelambiyachu amma enna gift kettanga frd birthday sollitan check panla😵 aprm kuttymaaku oru problem nane amma kuda varen epd avala parpano bayam avaluku anna drop pannitu tea kudikka poittan iva enakku msg panni azhugura en kuttymaa dei bayama iruku da nan clg tha poganum bus eritta eranga matan clg tha poganum solli azhugura nan amma kuda  irunthutu msg panna amma ennai yaaru msg panra kekka illa ma pasanga vanthutangala kettan solla aprm en kuttymaa appada anna poittan da nan varan solla nan santhosathula hey jolly vaa vaa solla amma enna da kekka amma illa ma busstand pakkathula frd vanthutan solla amma ok oru stop la erakki vittu poittanga apo 8.26 aprm nan oru bus eri busstand ponan 8.40ku aprm en kuttymavum 1min munnadi reach agitta aprm en kuttymaa ennai parthathum avvalavu happy..... 😇 ava dress irukee😍😍😍😍😍nan ketta maariye red top semma transparent shawl + white Pant semmaya iruntha mask vera pottu iruntha🥰 avala pakka mudilla just eyes mattum tha tharishanam. aprm en kuttymaa bus enga da kettu koottitu ponnan aprm no private bus government bus tha aprm avala kootitu vanthu bus la ukkanthutan brintha call panna patti velai vangi late pannitanga avanga tha cook pannaga sonna ok ok enakkum ellam kettuchu aprm call pannathum nanum kettuchu ok sonnan aprm pics😘niraiya bus la mathi mathi eduthom nan first gab vittu la ukkara try panna aprm evvalavu thooram thallurathunu mild ah join pannikitan avalum ok va tha iruntha aprm bus start pannathum mask kaluttu kaluttu sonnan kalutalaye aprm konja thooram poittu kalutuna ava kanna parthutu nan orainju poittan
Parthute iruntha oru 30mins en kuttymaaa vekkatha parkkanum kannu full ahh dei pakatha da i feel shy da polambura.. Aprm adikadi ennai safe ah evening vitruvila unnai nambi tha varan da sollura aprm kai pudichan ana epd solla first time kudukka yosicha enakku appave pudikura asai illa aprm vittutan nan enna nail polish nalla illainu sonnan aprm hair pin bvechu eduthutu iruntha 10mins avala mattume parthutu irunthan avalum avoid pannura ana mudilla en vaayi vera song vanthale padiran en kuttymaa pudikala intha vishayam but lyrics make me sense nan enna panna i try my best for my kuttymaaa aprm poem la partha name parthutu thukki pottuta🤭aprm ava kirukals kattuna aprm nanga normal agitom i think athigama kai pudikala bus la vedikai tha semmaya avalaye vecha kannu vangama naduvula oru couples help vera free service aprm near vantha aprm nan chinna game play panna 2hrs agumnu polambura dei enna da yenda ennai emathura nii 1hr thana sonna ayyioo iva pesi mudikura kulla busstand vanthachu aprm avala kootitu kovil entrance la restroom iruku poriya kettu aprm venam sollita aprm slipper vittutu vinayagar first pray pannom onna opposite la nan mudivu pannitu tha kovil povan en kuttymaa kuda iruntha first avala tha pray pannum asaiyaa irupan avala parthu kuttymaa vanthathukku happy pls make our meets frequently pray pannitu aprm pullaiyaruku summa vendura maari kai vechutu vanthutan aprm onna vaasal thottu kuptutu ulla ponom🥰 Awesome entry en kuttymaavum nanum mayil pray pannom aprm en kuttymaaku gift thanthan open panna... Athukkullaa oru monkey veraa sandaiku varuthu thorathitu video full ah eduthutu aprm hot bag mattum open panla athukku antha monkey vidala🤭avalum romba bayanthuta seri vanthutom konja thooram thalli poittu open panni epd ennanu parthutu  good day mattum saptom ava oru kadi nan oru kadi nalla irunthuchu aprm en kuttymaa era era semma tried ukkara mattanu kolkai vera en kuttymaa mudila da theriyama vesa parichai la erangitan azhuvura nan innum 50steps tha vaa thangooo kootitu poittan mela semma  happy vel parthathum madamku aprm en kuttymaa last 200steps tha ayyooo amma mudilla ninnuta ennai hug pannitu steady ah ninna enna perfume vera kekkura🤭 aprm saamy parkka ponom onna saamy parthom aprm pray pannom pls lord prove your love to make us marry pray pannan  aprm sivan pray pannom anga pls shiva make she as my parvaathy pray pannan apo enakku thiruneeru vechu vittale😍😍enakku semma happy aprm pillaiyaar aprm madam fuse poiruchu ukkara vechuta konja neram vaa mela polam kenjunan mudiyathu sollita aprm en kuttyma vaa ellarum pakkuranga sollitu veliya polam ponom aprm oru samy kumbitom aprm kaasi vishvanathar enakku kumbita pudikala en kuttyma avanga kitta poi nalla padipu kudu arivu kudu vendura aprm en kuttymaa navagrangal la padichu katite suthuna aprm appada veliya poittu ukkanthom en kuttymaa kuda konjam pics aprm  enakku thala seevi vitta.. Enakku ava thala mudi pudichuthu ring bangle mothiram watch ellam pottu parthutan aprm en kuttymaa kuda ninnu height parthom nan shoulder la height kammi ava neck chinnathu aprm  en kuttymaa puva ketta ok saptalam open panna virunthaali vanthutanga aprm avarukku soru vechom en kuttymaa virunthaali parthu kathuna parunga ayyooooo 🤭ellarum parthanga nan smooth ah food vechutu vanthutan aprm first time en life long dream oru ponnu en munnadi nenja nimithittu thala mudi seevuratha parkkanumnu en kuttymaaa seevunaa structure na athaya structure 😍😍 chest nimithittu hair comb panna ennakku atha rasikka romba pudichuthu en kuttymaaa hair eduthu  vechan + malli poovu   vera place shife anom konjam pesunom konjam kindal athukulla brintha matter avvalavu neram kozhanthaiya iruntha prasanth awaken to man kovam semmaya vaa sollitu vittutu vanthutan 50 steps keela ponathum en kuttymaava thittitan manase illa🥺 enakku nana ipd pesunanu ayiruchu straight ah kaal la vilunthuta  othaicha again vilunthu pls pls manichuko theriyama kenji enakku oru maari ayiruchu romba azhuthutan ulla ipd oru moment aga kudathu ninaichute irunthan ayiruchu aprm en kuttymaa kitta ukkanthu azhuthutan en kovam thandi ellathukum problem sry dii pls kojukatha sonna ava oru word sonna innum thanga mudilla pathila vittutu ponavan thanda nii nu  enakku uyire poiruchu still sethutu irukan aprm en kuttymaa ok agitta anga anga ukkanthu pesunom thanni kudikka sonnan ennai oru maari pakkura aprm kuda ukkanthutu touch panna pona oru maari pannurA😭😭😭antha maari ava pannum pothu la nan yen uyiroda irukanu thonum ivalukku nama comfortable ah illaina ethuku intha moment therilla ava antha maari discomfort ah ava face la kattura second ellam nan sethu sethu polaikuran😭 aprm mela kettan yendi ennai vittu pogala ava pudikum sollita ana  yen ivvalavu panniyum kuda irukanu tha theilla aprm en kuttymaa touch panna hand nethi lips(pudikala solli irukka enakku kekkala)  chin worst moment nan chin pudikka pogum pothu kiss panniruvanu baya padura😭😭😭ennala mudilla sethuralam pola irunthuchu aprm apo apo neck a en hot air la vittan aprm again over thinking la en mela sanja dei pathrama veetuku poiralam la nanum hold panna aprm monkey en kuttymaa pakkathula iruthuchu nan thirumbatha sonna ava thirumbi kathita ahhhhhhhhhh.... ...... 🥲semma sound nalla bayanthuta aprm en kuttymaa dairy milk sapta ava full ah lick pannitu aprm enakku kudutha😋enakku ava saptu kudutha romba pudikuthu☺nanum lick pannan aprm en kuttymaa kaal pudichu vittan amma kitta pesitte avalum kaal la kudutha ana uncomfortable ah tha kudutha nan enakku parthukanum pola irunthuchu ava ennamo ninaikattum nan pudichu tha viduvan vitta chudakku eduthom enakku en kuttymaa edutha ella fingers vanthuchu I'm unexpected aprm enakku edukave therilla paatham la pudichu vittan kaal amukuna aprm en kudave iruntha aprm eye contract nan kettan apo parthan ava kannula ekkam kalantha bayam semma moment 10sec mela en kuttymaa pakkala ennai aprm kallu adukunom second kallu nanum en kuttymaavum thottu vechom pray pannatha video edutha aprm keela vanthutu onna mayil thottu vanthom enakku onnumu urgent ponathum poittu aprm en kuttymaa poittu vanthutu bus stand ponom bus miss pannitom aprm next bus aprm ava paadam nan chocolate ithu mattum tha en kaasu  aprm bue eriyachu nan nalla irukama kai pudichutan vilanda thittita aprm paduthuta ticket vangitu avala konja neram vottutan aprm pesa start panna aprm nan ava kai pudichu arms press pannite ellam sonnan ennai ellaeum vittutanga thaniya irukkan en kuttymaa irukka ipo ennai ellamuma parthukuea unakku unakku 4frds naalu vithama irukana but enakku mattum en kuttymaa tha antha 4frd sonna ava ok agitta goosebumps vera aprm erangiko sonna nan vittutu varan sonna aprm en kuttymaa erangura apo en kuttymaa pics la edutha semma close ah ukkantha i feel her full body semma moment aprm theriyama en kuttymaa right boob touch ayiduchu 2times unexpected tha sry sry sonnan aprm nan vera kuttymaa shawl adikadi adjust panni viduran en kuttymaa enna ninaichalo aprm en kuttymaa en face la irukka macham la count panna aprm en kuttymaa busstand ponathum saptalam sonna nanum ok saptalam ponan anga server engala nalla kaalayikuran aprm order sollitu varathukulla enakku en kuttymaa plan la pottu thara en amma kitta thappikka nanum ok dii kd sollitu kettukittan aprm  en kuttymaa(petda solli irukka kekkala) ootti vitta ahhh sollunu😇enakku nadapathu nejam thana therinjukave time achu athukula again oottti vitta🙈🙈enakku romba romba happy aprm en kuttymaa sapptum pothu romba happy ah iruntha aprm en kuttymaa hand wash panna pona nan vera theriyama etho parthutan avakittayum sollita you back kulukingnu aprm en kuttymaa kovil la oru time pinnadi irunthu pudichan apo dark color la inners pottu iruntha athayum vera sollitan enakku manasula echukave therilla aprm en kuttymaa juice vangi kudutha madhulai semmaya irunthu 😋😋first time kudikuran anga shop madam decent ah irukangalama kai touch no pakkatha pesatha ethana rule appaaa aprm en kuttymaa bus poran sonna bloody idiot entha naaya pathiyo intha time la pesura kovam tha but busstand kattala aprm en kuttymaa adutha bus la  ethi vittan nanum kuda ukkanthan yaaro theinjavanga vanthana erangitom at the moment en kuttymaa konjam bayanthuta aprm adutha bus la ponom anga nan avalaye parthan ava ellarum nammala pakkuranga sollura nan enakku yaarume therilla mothama nii mattum tha kuttyma irukanu sonnan aprm nan vera etho sonnan avaluku nan ipdye vittu poran kettu irukku azhuthutta paavam aprm anga tha antha anna pathi iva anna anna sollitu daily pesurathu avan inga irukkan vanthutan iva therinjukurathu  enaku suthama pudikala athuvum avan feelings pathi la share pannuvan sonnathum i cant  aprm avale sollita nan avangala life long vida kudathu irukan da ennala ethuvum pesa mudilla oon thought maari angayum irukanum summa summa oorukku varum pothu la unnai parkka kudathu sonna avaluku athu purilla eppayachu tha oorrukku varanga vera sollura varum pothu la ivala pakkuranga yen therilla semma hype la tension munnadi stop la erangitan kovathula but erangunathum ava illa semma fast running bus kudave poittu avala parthathum ava oru sirippu siricha en kaal vali ellam gone ava face la iruka glow parthathum aprm kuda thitti tha anupunan inime antha stupid snap pakkathanu aprm en kuttymaa pora varaikkum thirumbi  thirumbi partha semma happy enakku aprm bus vanthuchu eri veetuku vanthutan aprm paduthutu ellam recreation en manasula aprm pothina parichu vechan aprm en kuttymaa msg panna yen odi vantha nan yaaru da yen ivvalavu pannuranu nan unnakaka enna ena pannuvan kuttymaa i will solli konjam emotional talks aprm nan sorry sonnan last la mini sandai ok da nan pesala promise pannura enakku semma shock epd enna achunu apo tha purinjuthu avalukku kulla something thoni irukku enakaka la illa ava explain panna vantha but athu kekka mood illa night la nane ava thoughts la happy ah irukan aprm en kuttymaa saptiya padu kaal parthuko romba akkaraiya ketta😇 aprm nan thungitan amma vanthu dosa suttu eluppi kuduthuchu saptu udane padukka venamnu konjam ezhutha strt panna apdye thungittan aprm next morning tha intha story end pannan`
  },
  {
    id: "note-6",
    date: "2026-03-28",
    displayDate: "28.03.2026",
    subDate: "March 28, 2026 — Kuttymaa's Perspective",
    title: "Date on Kovil My Kuttymaa version💖",
    category: "Her Perspective 💖",
    author: "Kuttymaa (DhivyaBharathi)",
    mood: "Pure Honesty, Emotions, Diary Perspective",
    icon: "💖",
    content: `I am writing  only  my perspective.  Its was an 28 th march 2026 i think its ours best day in ours life. Its our first day on chennimalai murugan temple Nainga athuikku neraiya plan pannom meet pannalanu but mudiyala ithuve neraiya critical situation apram pala poratam.     On that day petda hostel la iruthu v2 ku vangum aven avainga amma ta neraiya poilam enaikka sollitu varan naa enaikka ipadi oru paiya varuvan think pannala anaikku aven kelambaren sollitan naa work lam mudichittu kelambiten  .msg poita ala kana naa snap paikka matten amma kuda than varen sollitan. Enaikku poichu varuvana mata nanu neraiya thoughts because avainga ammata poi solli iruikkan avainga amma frnd ah patha tha poven sollitainga neraiya mind la otuthu  . but aven vantu iruikkan . inga enaikku problem  en anna its a saturday  avainnku holiday  so aven v2 la coffee  kudikkaama bakery la vantu uikkanda poichu inaikku meet panna mudiyuma.  Mudiyathu naa avaikku msg poitaren 8.5 I think  aven bakery la irunthu pora apo 8.18 athuvaraikku  naa aluthuten neikkaren en juniors ellam enna pathuta inga . avan ponathum etha pathilum care pannama naa bus stop poitu bus eriten  Bus stand  poiten aven vantan . avaikku theriyathu naa red dress la varen nu .it was an surprise  nu patha aven athuikku mela surprise panna ran rendu perum red and white  compo la sari nu sollu aven ena pathathum romba happy  . naa avana mask vangitu vaa da sonne but he forget it. Naa already use panna thu irunthuthu Then aven kaila big bag la gift tu shock  ivalo periya  bangle ah illa ulla enna vesi iruippa nu  enaikku la neraiya oduthu . ketta solla matten sollitan aprm  bus irunthu thu ulla eri seat la neraiya pics eduthom brintha call pesanen apaven avanum ennoda day va kettu tan. Then kaiya pudichan eyes pathan I feel  shy 😄. Eye mattum appadi pathan . but ok . bus eduthudainga neraiya pesanom stopping lam petda explain Pannan. Apo some idiots couple disturb pannainga enaikku pudikkala aven help pandaran but ok over ah avana question pandarainga athu enaikki suthama pudikkala . apron aven naa padatha da 50 times solli iruippen aven kekkala.Then avainga v2  stop lam kattan  .apram wine shop lam kattan enaikku 🙁🙂ok nu vittuten apram kitta poga poga naa ketten inam evalo distance da nu aven poga late agunu sollitan .enaikku payam aituchu. Kovam vanthuruchu .apron aven cool pannitan 10 mins nu apram bus stand la erangi nadanthom . chitra call panni neraiya question pannainga aven samlikkaren.😆😆Then oru shop la slippers ah vittu kovil ku ponom vinayagar ah first  pray pannom step era arampichathum konjam thugathula gift ah open pannalanu bus la pesanom because enaikku pasi naa saptala sari nu open panna start  panna monkey vitave ill its tooooo disturbing us ulla patha sema wait open panna biscuit  chocolate  my bangles  very important  thing. Hotbag I dont expect 🤷this . ennoda pain ku pain killer ah eppadi ivan think panni vangi iruikkanu . I am proud about him happy ah irunthuthu at that moment hug pannanum nu irunthathu but kovil noo vittuten pathathathuikku monkeys vera irritating.Era era sweat aguthu 💦thala suththu photos eduthom neraiya sanda pannom kaiya pudichitu erunom aven en shawl ah pudichitu erunan apron aven en sweat ah thodajan nalla care pannan I feel tooooo goooodddd . oru sila edathula hip la kaiya vesan  athula pidikkala. But he was an good boy. I think then saami kitta naa pray pannen en life  la ivan vitara kudathunu but aven something venda nam naa solla virupala. Saamiya pathathum ennala suthama mudiyala .aven kitta solla thala suthi ruchi athan oru place la ukkanthuten han apram aven na hug pannen mela varathukku munnadi. Then relax aitu matha god lam pray pannitu poi oru place la relax anom pasi sapta monkey angaium disturb then avongaluikkum saptu vesitu nainga saptum Mma aparam  nainga konjam photos eduthom .watch hand etc.... Apram avanuikku naa thalasivi vitten food udivitten.  Apram place mari oikkanthom fan kathu van kanum some discuss  .aporom ava naa solla varatha kekkala fulla even till now also . aven elunthu poitan ena vittu ambonu... I feel sooo........... Apron step la poi kathuna anga pora vainga oru mathiri pathainga romba kathanan I feel 🥺🥺but na onnum sollala aparam avane convinced  . kal la vilunthu dan 😆😆... apron konjam kenja vitten kela eranga mudiyala too hot he polambifing sry sry nayi  kutty mari then oru place la uikkatho something pesanom aparam photo eduthom he back to normal.  Then aven eyes cheen lips lam touch pandaran naa comfort illanu therinjum he touch that explain vera kekkaran yen nee ipadi feel pandaren......😬😥😟😟enna sollarathu theriyala  Apram oru place la aven slip aitan so relax panna oikkanthom aven eye contact venum venum nu sollaran I feel so powerful.  Naa no no sollaren . convince agala few seconds try pannen mudiyala  . aprom  stone vesom ventitu aven vesan naanum wish vesi kuduthen atha pic eduthom erangave mudiyala . aprom oru place la naa step la uikkathu irunthen aven ninnuttu irunthan eye contact try pannan naa vitala naa en heart beat hand ah vesi feel pannen . then erangi erainga too hot. Apron oru place monkey enaikku ennadi iruikku aven sollama head ah pudichitu thilumbathanu sollaran .naa thirumbi kathiten aven sirikkaran .uyire illa theriuma enaikku. Then erainga manase illama erangi ponom . but maiuyl la pray pannen na rendu perum onna hand vesi pray pannom. Kela vantu slipper  photo eduthom too nice restroom ponom bus stand poi shack kudichitu. Bus la eri okkathutu neraiya he shared with me.. Inner feelings . apo ivan veliya paikka ivalo happy ah iruikkan ulla romba stucked  him . I feel ivan happiness naathan enna analum naa petda va vitakudathunu. ITS TRUE NAA SOLLALA .Its my dairy la soo sollaren.Bustand vantu saptom .hotel anna nalla anna extra egg lam thantha inga . antha annakave anga poganum. Apoo aven en back ah pathu comment pannan ah malaika en inners paikkanum nu kettan enaikku suthama pudikkala athu. Aven kai dress remove panna vanthathu. Aprom nalla saptom . aprom aven en hand la na avan hold pannitu oramari video eduthan. Juice shop pannathu enaikku avaluthan illa feel vanthathu. Avanuikku saptara apola irunthu iruikku . naa avaikku oditi ketten athana peru iruntha hotel la but aven oru vaithan athu chicken pice  mattum than thana I expect more Juice kudijitu  bus ethula polanu argument. Manase ilka enaikku avan aluvara mathiri moonji vesi irunthan. Apram oerima antha bus la erunaiga naa pathuten . so erangitim just miss. Then next bus la eranom kannu kalangiruchi .naa control ah tgan irunthen but mudiyala aven kandu puchitan but naa manage panniten.`
  },
  {
    id: "note-7",
    date: "2026-03-30",
    displayDate: "30.03.2026",
    subDate: "March 30, 2026 — Kovil, Park, Theatre & Mall",
    title: "Today unforgettable meet kuttymaaa 30.03.2026",
    category: "Real Meet 🫂",
    author: "Prasanth (Petda)",
    mood: "Passion, Romance, Vulnerability & Deep Devotion",
    icon: "🎬",
    content: `One Who Ruled Me Well Mine Lady... 🫂
Today Morning Prasanth Waked The First time i thought Today Is That possible Can i see her..... But Its Happened Today
Morning 2am alarm amma phone la off pannitu padutha aduthu en phone la amma phone same time la amma alarm semma sound kaduppu aguthu 😤morning semma tension rendum off pannittu wake agittan en kuttymaa msg panna gm aprm restroom poittu vanthan en kuttymaa gm pottutu thukkam varuthu da ezhuppi vidu da kekkura😍enakku happy romba naal aprm morning pesurom call pannuran solli aprm call eduthu pesuna kuttymaa kuttymaaa konji wake up panni vittu avala kulikka anupittu nan exercise panna start pannitan athuku aprm nan kelambura kulla en kuttymaa ithana question " Pasikkuthu noo coffee yee Milk kudikkalamaa Ipotha naa kulichitu vanthen nee enna pandara daa Ethasam update pannu daa " Amma vera vanthu coffee veinu solluchu vechu kuduthuttu exercise pannite aprm 7maniku kulichutu vanthutan aprm saptu bus stop vantha bus illa 10mins 7.50 tha bus eruna en kuttymaa udane call pannita bus erittan da enakku semma happy... Apo kuda ava clg bus eritalo bayanthan aprm oru valiya bus stand poittan pora varaikkum pesunan vaa da vaada ekkathula azhutha... Seri 1km nadappa la kettan dei romba over da sonna seri ok sollitu near kovil polam sonnan aprm erangittu avala thedi ponan  avaluku munnadi avala parthutan en kuttymaa paavam first ava tha parkanum iruntha but parkka mudilla nan parthutan dress nalla irukka kettan shirt vida t-shirt semma sonna Ava dress top thavira ellam nalla irunthuchu... En kuttymaaa seri vaa polam nadanthu koottitu ponan koviluku avalukaka man ah behave panran sonnan nanum try panran iva kitta mattum apd irukka mudilla aprm en kuttymaa kai pudichu epdyo kovil poittom dei thoorama irukku irukka sollite vanthuta seri Seekrama nadakalam kootitu pona ahh poda kovil pakkathula thukkitu vaa sollura🤗en kuttymaaa🫂 aprm kovil ponathum ellam kids iva vera ponathum pinju nenjula nanja vethaikura da sollura🤭🤭seri seir vidu first pillaiyaar kumbitutu vanthom first nan avala kumbitanum partha kanna mooditta kuttymaaa pls eyes open kettu aprm open panni athuku aprm tha ava kanna parthu nan pray pannitu aprm tha pillaiyaar pray pannan aprm ukkanthom ava kaikku kiss pannan seri ah poirum kuttymaaa sollii  en kuttymaaa mask pichuta vangi thara sonna aprm onna ukkanthutu pesittu irunthom dove la kattuna aprm video pottu kattunan aprm en kuttymaaa pathrama iruntha enkuda ennai parthutu innum vekkam la padura apd pakkatha da sollite aprm video parthom aprm iyyaru poga sonnaru aprm kelambitom  aprm ok kelambum pothu ava anna pathi sonnan athuku othaicha aprm nadakkum pothu shoping polam sonna no window shopping sonna ok jutty vangalam kenjunan kojuta🥺 nii ipye sollitu iruntha nan tha aprm kojukka poran sonna kasatam poiruchu yen ipd pesuranu annaikku ia tha vangalam sonna🥺ipo maathi pesura at the moment I'm fucking offf aprm avala koottitu poittu aprm park polam sonna ponom anga ulla pogura munnadiye anga veliya irukka couples parthutu madam sirippu vera kenjuranama atha vera kuptu kattura aprm nanga ulla poittom anga summa enga ukkaralam partha suthi suthi couples iva vera kiss panraga da hug panraga da solite vara kammunu parkkama vanadi sollitu nan munnadi kootitu ponan ellam parthu madamku enna achu therilla🙈 nan vera privacy venumnu nalla place ah thedi ponom nan nalla hidden place ah parthan aprm  venam da bayama iruku sonna aprm nillu nillu  kanna paru dii solli first calm akkunan aprm konja neram aprm seri vada avale kootitu pona aprm pakkathula ukkantha first time en kuttymaaa full comfort parthan strong ah en kai pudichu en mela sanchutu avvalavu happen.... Enakku enna da en kuttymaaa thana athishiyam nan ava kanna parthute irunthan ava dei nii seri illa oon paarvai seri illa kammunu thalli po sollitu iruntha nan ok ethuvum panna mattan dii nambu sonna ahh po po bag edu phone pakkalam sollura ennala iva thoughts purinjuka mudilla aprm biscuit saptom aprm tha bloody idiot antha dog call panniruchu thirisha parthutan dii nan aprm enakku pogave manasu illa aprm avala parthute irunthan kannatha pudichu pakkathula iluthan avalum close ah vantha polam da  sonna nan few minutes sonnan aprm en face la irukka ekkatha parthutu seri kiss pannuvom pannita chin la (ichunu) semma sound ah kiss pannura en kuttymaaa🙈 aprm nan start pannitan nethila chin la kannu la cheek la aprm nose to nose play aprm apdye hold pannan 1min aprm lip lock first time🙈🙈mela keela maathi maathi mouth open pannave illa 🙃i miss that way of kiss aprm 2min hold pannitu again lip lock  3mins kiss panni irupan aprm apdye keela antha press panna la thonala but nalla hug panni sanchukittan ava chest la konja neram aprm chest centre la mole irunthuchu nan oru kiss pannan enakku pudichu  irunthuchu athu iruntha edam🙈 aprm ava kaluthula kiss pannan maathi maathi  kiss pannan she is peak of lust apo ava kannula parthan🙈 aprm tight ah hug pannittan ava madila nan ukkanthutu kaathula kiss pannan ninnutu hug panlam kuttymaa kettan no sollitaa🙃🥲aprm en kuttymaaa pothum vaa polam ezhuppi vittuta ana ithula nalla vishayam nanga ivvalavu pannura varaikum entha dog distrub panla aprm polam bag eduthuta nan pogama negarave illaiye🤭 ayyyoooooo seri seri vaa daa hug pannikutta🫂 tight ahh pudichan en kuttymaaa vaa 🥰avvalavu happy ahh irunthuchu aprm thirisha parthom avanga lover parthom  just intro kudutha nanum sirichutu ethuvum pesala aprm ippave poga venam irunthom aprm seri konja neram oonjal adunom aprm en kuttymaaa kaal amukii vittan full ahh parthukittan actually prasanth inga tha ukkaralam sonnan en kuttymaaa irukale nalla ponnu ulla polam iluthutu poita aprm again ingaye vanthutom aprm niraiya pesunom phone la games kattuna aprm quizz game 36 question
 If you could invite anyone to dinner, who would it be?  Brintha
Would you like to be famous? In what way?yaara maariyum illa
Before a call, do you rehearse what you’ll say?no
What would a “perfect day” look like for you? Kovil meet Dhindal
When did you last sing to yourself? 
If you could live to 90, what would you want most—mind or body? Mind
Do you have a secret feeling about how you’ll die? I know
Name 3 things we seem to have in common. Sapturathu 
What are you most grateful for? 
If you could change anything about your upbringing?
Tell your life story in 4 minutes. (I know) 
If you woke up tomorrow with a new ability, what would it be? Bird
If a crystal ball showed your future, what would you ask? Happy ah irupanana(2weeks time kudu nan maathuran) 
Is there something you’ve dreamed of doing but haven’t? Why? Mysterious dream
What’s your biggest achievement? 
What do you value most in a friendship? 
Your most treasured memory?
Your most painful memory? (I know) 
If you had one year left, would you change how you live? Ammakku ethachu pannanum sonna 
What does friendship mean to you? 
What role do love & affection play in your life? 
Take turns saying something positive about each other (5 each).
How close is your family?
How do you feel about your relationship with your parents?
These questions aprm time ayiruchu movie ku kelambitom porathukulla watch mathikittom en things la ava kai la kuduthu nan use panrathu la avvalavu happy ahh irukum kuttymaa vegama aprm sakthi pora varaikum en pinnadi marainju vantha aprm ticket eduthom en kuttymaaa pakkathula illa so counter la corner seat kettu book pannan avala parthan ava nan kupturan en pakkathu la vanthu ninna ticket kuduthan vangitta aprm anga mirror irunthuchu athula pic en kuttymaaa romba naal asai husband kuda mirror munnadi nikkanumnu innaikku nadanthuchu we did onna pics eduthom aprm ulla ponom oru formal check entrance la aprm snacks vangi vechanga kuduthutu ponom aprm mela ponathum waiting ukkanthutu irunthom niraiya pics eduthom 10mins irunthuchu ukkanthutu valachu valachu photo aprm video onnu try panna en kuttymaaa athuku react pannave illa athuvum first time dhivyabharathi kuptan🥺 i expect lot but I'm failed👎 aprm open pannaga ulla pogum pothu en kai nalla press panna valikalaya ketta illai sollitu ulla poittom ponathum corner seat sonnan ava opposite corner la last time ukkanthom sonna ok aprm photos la eduthom konja neram relax agitu partha non sense oru husband wife pakkathula vanthutanga sangadam ayiruchu innaiku govinda ninaichan 10mins tha amaithiya irunthom nan ava thol la sanchan ava en thol la sancha aprm kuptu nan tha kiss pannan lip lock pannan..... Vaaya thora di sonna aprm purijuthu nane kettan its remember something ah na ama sonna ok vittutan aprm ava ennai hug panni ukkantha nanum konja neram kai pudichutu irunthan aprm movie pathi pesunom nan apo kadichan ava thol la avalum kadicha aprm enakku avala taste panna thonuchu lick pannan ava kannatha mild ah bite panni kai la lick panna aprm ok kammunu iru solli en kai pudichu madila vechuta nan ok solli iduppa pudichukittan enakku romba pudichuthu apd padukka enna nan konjam hip massage pannan aprm 5mins tha en kuttymaaa kai dress kulla allow pannittaa🙈🙈 its a peak of my life apdye pudikuran nanum enna panrathu therilla seri thoppul touch panlam thedunan... 🙈aprm parthan kai la sora sora irunthuchu thoppul seri agathunu en echaya eduthu nalla thoppul full ah thechu vittuuu wet akkunan aprm 3finger vechu scroll pannan top to bottom left to right in and out all 3fingers did different role My Kuttymaaa embarrassing🙈 sounds 'Ahhhhhhhh'  Im peaked at the moment my kunju stands..... Ennala control illa theriyumaa kuttymaaa aprm 10mins scroll panni irupan nii moochu vanga kasta patta ok vittutan irunthum kiss pannan chin la 💋aprm en kai mattum ava hip la pottu press pannite irunthan ava en kanna parthute iruntha suddenly enna ninaichanu therilla kai ulla vittuta enga not top inside bra.... 🥺🙈🙈🙈I'm stucked enna pannum theriilla left side kai la pudikka mudilla first atha press panna parthan aprm right side press panna nalla irunthuchu ana nipples kidaikala aprm full boobs kai la pudichu press pannan(En Kuttymaaa Ahhhhhhhhhhhhhhhhhhh) periyaa sound 🙈🙈😍🫂 en kuttymaaa kannula ekkam kalantha kaneer🥺 She is happy for have that feeling but same time sad about her past kanneer oda ketta vittu poga matta la da🥺enakku  intha word kekka ethana naal nan thavam irunthu irupan nan eppavum irupan kuttymaa sollitu nan ava kaathula sonnan i love you kuttymaa nu ava face la love illa lust irruka truthness love you sollura apo illa🥺 aprm nane kettan pls ellam maranthutu nan solluratha kelu dii feel my love sollitu again love you kuttymaa sonnan aprm light love vanthuchu but I'm not fullfilled aprm  konjam apdye kai vechutu again press panna start panna rendu side massage semmaya panna en kuttymaaa boobs nalla air vechu fill ayiruchu en oru oru presskum perushu aguthu aprm kuptu kattuna mood la paaru oon boobs nalla elaborate agi irukunu aprm aprm konja neram kissing licking nalla pannom rendu perum aprm en kuttymaa kaathula kettan one time dii pakkanum dii  ava ok sollita mela irunthu kai ulla vittan i cant avale iru solli boobs eduthu veliya kuduthaa😍left first kannula parthathum paanjutan kozhanthai paal kudikama pasila irukka maari udane kai la pudichu semma licking nipples vaayula vechu urinjan onnum varula but 5mins semma suck ava mild ah moaning (issshhhhhhh) aprm atha vittutan right edutha veliya azhaga irunthuchu chinna tha nipple veliya vanthu 1cm circle ah semmayaa cute ahh i feel that and i try to lick in your language chip panna try panna mudilla vasathiyaa illa place aprm nalla press panni vittan ithulayum echaya vechu nalla scroll pannan🙈semma feel athu aprm  en kuttymaaa en thol la sanchu padam partha ava nethila kiss pannite irunthan
Ava kathula vilayadunan aprm break vanthuruchu rest room venam sonna apdye vittu iruntha innum niriaya nadanthu irukum nane po sonnan la poittu vanthu ellam stop🥺 i feel so cold on first half but second half she is cold but ethuvume pannatha maari irunthuchu😕 break poittu vanthom again 2pics eduthom aprm kettan leak ayiruchu thana ava ama poda sollitu kammunj iruntha aprm ava en thol la sanchuta nan ava kanna parthute irunthan padatha paru sonna adikadi kannathula kiss pannan nethia kiss panna lip la allow panla athuku aprm i feel something bad 😣yen etho maari irukkanu kuptu kettutan enna achu kuttymaas ok vaa fine ah happy ah nu ellathuku ok tha fine happy sollitu behavior mattum first half oru maari second half oru maari🥺😭 po dii i think nenjula oru time sanchukittan aprm oon kai eduthu en idupa pottu hug panna vechan en chest pudikka vechan en legs pudichu paru solla vanthan athayum thappa purinjukitta seri she is distrubed nan ethuvum try pannla apo kannathula kiss aruthal parisu maari aprm avala kuptu en chin la fore head la kiss panna vechan panna but second half la thoorama poitta pakkathula vara chinna thayakkam avalukulla aprm thalli thalli pona oru time pakkathula iluthu back la press panna apo therinjutan jutty shape touch panni feel panni kittan athuku aprm again pakkathula vara mattanu thoorama pona seri vaa en thol la sanchuko sonnan en kai pudichu sanchukita enakku ava tights press pannum asai ana athuku ava epd ninaichanu therilla kai hold pannikitta oru time keela kai vekka try pannan ta ana athukku aprm la tights pudikka tha ponan vidala aprm enakku lust feelings gone movie vera climax en kuttymaaa said cultural polam da aprm antha movie la konjam sentiment ah amma ellaru kaal layum vilugura maari irunthuchu enkitta oon amma ipd asingam padanuma ketta nii enakku kidaikanum ah ipd nadantha tha kidaikum na  en ammava ipd kuda panna veppan aprm en kuttymaaa silent aprm husband wifekaka petha paiyan thukki pottan yendi amma paiyan love pakura yen husband and wife love unakku therilla kettan🥺ava speechless nan oru maari en kaal kai face ellam nadunguthu extraordinary emotion poittan ava mela sanjutu azhuthukittan aprm last ah oru time touch panlam nu en rendu viral vechu top to bottom vanthan athu kuda nan keela touch panna poranu moraicha😕 aprm rendu leg touch pannitu vittutan aprm ava over scene la sonna nan onnum illa vidu vittutan ok polam nanum iluthutu vanthutan  aprm en kuttymaaa  veliya veliya hot ah irukunu sonna aprm nanga onna height parthom nan tha height aprm konjam steps la pogum pothu kuptu kiss pannan chin la  aprm rendu perum kudutha things la vangitu veliya vanthom aprm pasikutha ketta nan unmaiya sollata poi sollata kettan ava poi sollu sonna pasikuthu sonnan seri unmaiyaa sollu  ahh 🙈manasara unnai saptan manasu neranju irukku sonnan aprm bus stand poittu na rest room poittu vanthan then ava pona dirty ah irunthuchu pogala then nanga maal ponom onna anga erangunathum great asingam 3times en kai pudikave illa aprm onna ponom full ah suthi parthutu inners vangalam sonnan ava venam sonnathu enakku shopping interest poiruchu veliya kattikama romba silent agittan vaa polam vaa polam mattum just maal fulla ah apdye tha pochu  then onna saptom egg pups  avaluku enakku cutlot ammavum kettuchu order panni parcel vangitan then ava ootti vitta nalla nadakuranu sonna then shopping la ella things enakku explain panna each and every thing nan mood out la irunthanala i cant even be react happily yen intha maari pannura venam solluranu therilla🥺 athu mattume en manasukula pochu dress shop la dress suggest panna aprm pics la eduthom antha dress shop la slipper shop la no sollitu vanthuta then nalla tha pochu keela dairy milk vangalam sonnan no sollita aprm veliya vanthom drinks venam sonna badham kettan ok sonna aprm oru shop ponom butterscotch crunch saptom not bad en kuttyma taste panni sonna aprm saptan enakku pudichuthu but pakka unhealthy (for diet) aprm onna bus eri nan footboard adikka ava kannala meratta semmma moment aprm busstand ponom juice shop ponom pogum pothu yaarune therilla ivala kuptu pesuna aprm brintha close frd sonna ok sonnan then onna bus la la ukkanthu avaluku kai la adikadi kiss panni seriyaa poirum kuttymaa 10times solli irupan aprm nan kudave varan sonnan ok solli pathrama iru parthu po enakku neraiya sonna aprm kongaigal vegam intha line song la vanthuchu atha explain pannan when hear his voice her boobs fast beating meaning aprm enna ava erangi poitta nanum erangi vittu poga manase illama mudinja variakkum onna vanthan🥺 ava parpalanu pinnadi pona thittuva vaa solli irukalam thonuchu ana ava solla mattanu theriyum aprm nan apdye ninnutan😕 en manasu angaye sirai veikka pattathu😭😭😭😭mudinjuthu avvalavu tha la enga day🥺next meet epo enga epd intha 3question epo answer kidaikum therilla😭😭😭😭😭❤🩹 ana pesuvom adikadi and en kuttymaaa baya padamaa iruntha today satisfied ah irukkum i think aprm return vanthan aprm en kuttymaaaku update pannite vanthan night saptu thunga late vera amma panra alaparai aprm thungitan morning same alarm kaduppu aprm again thunguna 7manikku wake panni vitruchu thukkam pathala .`
  },
  {
    id: "note-8",
    date: "2026-03-30",
    displayDate: "30.03.2026",
    subDate: "March 30, 2026 — Kuttymaa's Perspective",
    title: "Theatre Date My Kuttymaa version",
    category: "Her Perspective 💖",
    author: "Kuttymaa (DhivyaBharathi)",
    mood: "Sweet Anticipation, Temple & Date Thoughts",
    icon: "💖",
    content: `Next meet on 30 th march  us second date  😁🫣✨😋🫶.. Something special day .athuikku munnadi nal nainga meet panna mattum nu thoughts aituchi enaikku some health issue  . sari aiten next day. Then anna stop la vittutu poitan . ana stop la mathu iruntha poi sollitu kelambiten. Bus eriten but petda was coming late. Enaikku wait pandrathu ok . aven enaikku hours kanakkula wait panni iruikkan naa mins kanuikkula wait pannalanu mind solluthu but mudiyala  aven da katama  katten  . oru valiya vanthan naa naatha aven na first paikkanum wait pannen but 🙂🥺aven than  enna first pathan naa black top sandal combo Aven black pant blue tshirt soo pretty avanuikku formals ah vita casual  semaiya irunthathu speed ah alaga nadanthu vanthan en kannathula kaiya vesi konjama then kappu poituvittan dress ku match agunu then kovil ku polanu kuditu pora pora poite iruikku kovil poga poga enaikku payam anna intha side work  povanu. But Aven leave anaikku. Apparam Aven naa one hour man ah behave pandaren sonaa but avan nala mudiyala. Because of my presence  😁✨. Aprom sami kuputu oru place uikkathom pura pathom. En mask ah pichen . apparam Aven da injection panna place ah katten . kiss pannan . maraiya kids exam ku padicha inga anga. Enaikku shy ah irunthathu avangala misguid. Pandarom nu. Then avainga poitainga. Aprom iyer kelamba sollitainga nainga medical ponom mask vainganim Aven apo naa jetty vangithaten tharen sollite iruntha its too iritteing mee 😫😟😤😤😤. Naa pesa thanu solla solla Aven`
  },
  {
    id: "note-9",
    date: "2026-04-05",
    displayDate: "05.04.2026",
    subDate: "April 5, 2026",
    title: "Dream With Mah Wife💞🫂 5.4.2026",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Emotional Dream, Forehead Kiss & Heartwarming",
    icon: "🌙",
    content: `Semma dream kuttyma nee nanu en thambi en amma ellarum enga patti oorukku porom en frd unnai kootitu vanthu irukkan thambiku namma love matter theriyum periya argument today namakulla yenda ennai again again past kulla kondu pora nane ipo tha ellam mudichutu en career pakkalam earn panrathu epd pakkalam plan la irukkan nee vera yenda ipd ennai kasta paduthura kekkra nanum enna pannanu kettan nii sonna words still abuse me already ellam kaatitu ennai vittu poitanga niiyum athe maari panni avanga thought tha varuthu enakku time venum da nii ellame kekkura panura enakkum asai irukku tha but ipo venam konjam time kudu ellam seriya poirum nane ellam pannuvan ok sollura ennakku oru maari guilt ha irunthan  apo suddenly oru reel vanthuchu ( nan pannura ellame etho oru moment unnai sirikka vechu parkka tha ana enkudaye nii ivvalavu kasta paduranu theriyathu maa I do My Best for make you happy sollitu hug panni azhuguranga couples) atha parthathum madam sirippu aprm oon kannatha pudichu pakkathula varan nii thalli thalli vidura nan ennai paru kuttymaaa oon kannuku keela kai vechu thechutte irukkan niiyum pakkura close ah varan nii illa venam da mudilla i want but not now sollura aprm ok dii forehead la kudukuranu slow motion la oon kan vizhi la en lip paduthu oon puruvathula lip paduthu apdye center of forehead varan 0.3 cm gab thandi en thambi vanthu amma da vaa sollitu kiss stop pannitan mudinjuthu kanavu nanum wake agittan🤗But The Nice Dream Just Now💞`
  },
  {
    id: "note-10",
    date: "2026-04-06",
    displayDate: "06.04.2026",
    subDate: "April 6, 2026",
    title: "6.4.2026 the moment",
    category: "Heartfelt Moment ❤️",
    author: "Prasanth",
    mood: "Raw Authenticity & Pure Acceptance",
    icon: "❤️",
    content: `Today I am told to my girl  pls show your core of the crying core of the lust core of anger until today she hides all in front of me . Show we declare she will be like her own way of life with me tomorrow onwards . I love❤ Mah Girl But 6th april 2026`
  },
  {
    id: "note-11",
    date: "2026-04-22",
    displayDate: "22.04.2026",
    subDate: "April 22, 2026",
    title: "Us Love Success Day (22.04.2026)",
    category: "Love Confirmed 🙈💍",
    author: "Prasanth",
    mood: "Bliss & Milestone Reached",
    icon: "💍",
    content: `Kuttymaaa💕 Today Love  Confirm Pannita 🙈 All efforts Done☺
Neraiyaa clue kudutha en family vittu varalam asaiyaa iruku unnai vida better person illa en life long kuda venum ana love illa en kuttymaaa indirect ah ellame sollita love you mattum tha sollula`
  },
  {
    id: "note-12",
    date: "2026-04-24",
    displayDate: "24.04.2026",
    subDate: "April 24, 2026",
    title: "Kuttymaaa💕 Kuttymaaa 24.04.2026 All details Update",
    category: "Daily Life 😚",
    author: "Prasanth",
    mood: "Cute Daily Share & Closeness",
    icon: "😚",
    content: `Kuttymaaa 24.04.2026 All details Update enna panranu ellame sonnale😚`
  },
  {
    id: "note-13",
    date: "2026-04-25",
    displayDate: "25.04.2026",
    subDate: "April 25, 2026 — Kuttymaa's Alphabet for Prasanth",
    title: "My task to my kuttymaa 25.04.2026 My kuttymaaa Version",
    category: "Fun Task & A-Z 🔤",
    author: "Kuttymaa's Words for Prasanth",
    mood: "Playful, Cheeky & Adorable",
    icon: "🔤",
    content: `A for Anbanavan .
b for badboy prasanth. 
C for crazy prasanth.
D for Devil man 😈.
E for Evil prasanth sandai time la    . 
F for Father of my man  
G for gentle prasanth . 
H for  Handsome  boy. 
I for idiot man. 
j for jolly man. 
K for king of my heart in small place .
l  for loyal man .   
M for mysterious character. 
N for too naughty boy . 
o for over loader .
p for prasanth  
q for  Qualification of...  
R for royal man  . 
s for my stronger man  
t for  thamizhan  
u for unmaiya avan urimai ullavan  
v for vallavan  
w for my watch man 🤣 
x for xerox  copy   
y for ... Theriyala
 z for zombie man`
  },
  {
    id: "note-14",
    date: "2026-04-27",
    displayDate: "27.04.2026",
    subDate: "April 27, 2026",
    title: "Kuttymaa Best Meet Ever (27.04.2026)",
    category: "Deep Emotion & Hurt 💔",
    author: "Prasanth",
    mood: "Pain, Trust, Yearning & Honest Fight",
    icon: "💔",
    content: `Morning Veetla Vilunthutan dii i cant even walk few steps unakaka mattum tha nan kasta pattu vanthan varakulla ethane time slip agi kaaal valiyoda vanthu ninnutu irunthan theriyumaa dii nan 4days evvalavu miss pannura u know i wanna kiss you i wanna hug you but nan oon anna late ah vantha thittuvan tha seekram anupanum ninaichan but you...........vantha ok you cant even speak with me 10 words en kannula irukka ekkam oon kannula oru thuli kuda illa just like vanthutan seri parthuta la kelambu eye brow la ennamo irukka thoda vantha thodatha thodatha enna dii panna unnai photo onnu kuda edukala you not even see me clearly you watching all around nan yen vanthanu yosikka vechutta appave oru naayi anga irukkan sonna ok antha naayi poittan  avan irukka varaikkum avana kai kattitu no no sonna athuku aprm road la ellarum poranga sollura wait who am i yen avvalavu bayapaduraaa poran poran sonna nan munnadi bus la poran en pinnadi bus la vaa bus stand pesalam nii tha sonna ok seri inga iruntha veetuku poga late aguthu nii worry pannura ninaichu ok vittutan aprm bustand poittu avalunga kuda juice kudikka pora apo time aguliyaa dii nan unnai temple polam sonna la yendii varula nan time ayirum ninaichan but you en kuda nii irukanum yosikura maari therilla unnaku late agalam but ennala illa oon frds nala agalam aprm oon frds parthuruvanga kovil poga matta sollura 😤😤😡😡😡🤬🤬Yendi  ennai partha epd theriyuthu oon life la panna kudatha thappa pannita dii i wanna slap you right now...bloodyyyy vishruthi yen vitttanu ninaikura she cant even convince his brother just a neighbourhood brother he said dont talk to me she said ok and stoped talking with after 6 months i only asked why ignore me she said that brother said so i cant that moment i declare she cant convince her mom and dad for me so i broke up now you ....what you did you cant even convince your friends for me nii sollli irukalam avan vanthu irukan dii niinga ponga nan varanu but you dont  means for the first time you broke my trust enakaka enna vena pannuva ninaichan nii oon frdskaka ennavena pannuva purinjukitta..............next  why you cant intro your friends to me nii solli irukalam la enakaka parka vanthu irukan hi bye kudava solla mattanga nan lover ahh intro kuduka sollula why cant be he is my friend also you dont tell just ignoring me for your friends now you broke another trust nii ennaai frd ahhh kuda ninaikuriyaa therilla  oru frd unnoda frds intro kudukka mudiytTHA alavuku onnum namakulla ethuvum illa you dont love me i delared at moment of en ekkam oon kannula illa  thats it   and   you hide me to your frds also ennai oru nalla friend kuda pakkala ivan thandi en friend ellarum irunthanga introduce panni irukalam maraikuranale  thappu pannuranu artham  unnai en ammakitta evvalavu thooram vittu kudukkama pesuran theriyumaa en friends ellarukkum unnai pathi sonnan enakku ithu nichiyaama kidaikkum nambikai irunthu  oon frds ahhh nana parkkum pothu oon frds tha poitta la  nan 4 days ahh epd engittu irunthan unakku theriyathu la mugam kuduthu kuda pesa mattikura solid ah avoid first pakkathula vantha apo antha naaya kattuna aprm pakkathula vara apo road la niraiyaa poranga kattura matter of that you  want keep distance unakku en feeling la 1% kuda illa i dont even see the single tear on your eye 4 days olluna pesula innaiku vanthu irukan unakku konjam kuda ekkama  parvai illa  valakkam pola  parthathum happiness irunthu but its not  core of missing  pudichavangala partha vara happiness ok but 4 days ah pesama enakaka engittu wait panni vantha ennai parthathum vara anantha kanneer illa enakku vanthu unnai parthathum appppppppaaaaa en kuttymaaa parthutanuuu en leg pain suthama poiruchu avvalavu happy ahh irunthan the worst meet ever asai pattu vanthan en kuttymaaaa enakaka time spend pannuvanu nii enakaka illa frdskaka spend pannum poittaaaaa enakku ellame pona maari irunthuchu antha moment nan kovil kuptu varula ana avanga kuda maruthi minimum 30mins anga iruntha unakku timw matter illa yaaru kuda irukanu tha matter avanga kuda irunthu late ana ok ana not me  varum pothu kuda enna sonna vaa clg la irunthu apdye poiru unakku enkuda irukanum la illa pakkanum avvalavu tha  30mins enkuda kovil vanthu irukalam i made a great which was ours nii neglect pannura la. now  i tell  unnai vittutu bus stop la ukkanthu 30mins mela azhuthan i cant control myself frdskaka ennai vittutu pora nii nichiyama  parentskaka ennai vitruva ithana naal etho oru nambikai enkuttymaaa niichiyama enakaka nippanu but you broke my trust odainjutan dii romba azhuthutan ennala mudilla frds mukkiyam tha athuku ennai oru frd ah kuda intro kudukka mudiyatha alavukku unakku nan kevalamanavan la enkitta panna kudatha onnna pannita nii enakku asai kuttymaaa ivan tha en frd sollura alavukku oru  frd en kuda irukanum nii ennai apd kuda ninaikula athandi ipo periyaa prechana oon frds munnadi ennai hide panra avanga parpanganu kovil vena sollura innum 4 days pakka poravangalukaka lifelong irukka poravana thookki erunjuta la..........Mudinjuthu ellam  Nan paithiyam dii kaadhal kadhaal oon pinnadi varan en amma en world ella mothama mathittu ana ellam ennai oru frd ah kuda ninaikatha ponnukakavaa🥺🥺 yendiiiiii ipd panna ipppavum itha type panna panna azhugaiyaaa varuthu unnala ipd la oru naal varum ninaichu kuda pakkula aprm enna sonna nan la bus stand vanthu pesuran sollave illaiyeee Yendi ennai partha epd theriyuthu oon oruthi words thavira vera ethuvume kavanikka mattanu therinjum sollave illainu sollura anga irunthu varanum tha bustand vaa pesalam sonna apo not in real words atleast sry da pesa mudilla solli irukalam sollave illainu poi sollura the mistake never did to me im anger on you for this word epd poi sollalam nan unnai vida mattikuranu just ipd solli thappichhuu vanthutta enough nii poi solli irukka kudathu enakku pudikkathu therinjum ipd panni irukka kudathu yosi nallla intha 3 options la onnu tha  1.parthutu poganuma i give a solid slap cause your mistake and after that slap you wanna make clear statement who am i for you niii pannathula ethuvume not as a lover not as a friend  niiiyeee yosi oru frd ah iruntha you make intro to your frds en frd solla asingama lover ah ninaichu iruntha ennai vitttu avangalukaka poirukka matta apo nan yaaru unakku sollittu po  2.come we go to temple spend a time with me also tell your frds i am with prasanth neenga ponga na varan 3. Stop All now today itself i broke 1000s of pieces`
  },
  {
    id: "note-15",
    date: "2026-05-15",
    displayDate: "15.05.2026",
    subDate: "May 15, 2026",
    title: "Sorry Kuttymaa 15.05.2026",
    category: "Apology & Unbreakable Love 🫂❤️",
    author: "Prasanth",
    mood: "Deep Repentance, Devotion & Unconditional Loyalty",
    icon: "🫂",
    content: `Today Nan Nalla purinjukitan kuttymaa Unnai vitta yaarum ennai purinjukka mattanga nii mattum tha en Mukthi Nan Oon Sankar ah irunthukuran Kuttymaa. Oonkitta niraiyaa solanum, Nee Pesama iruntha apo yaarachu pesa venum thonuchu kuttymaaa apro nan ennoda old friends la pesa try pannan ellarum block panni irunthanga apro. Unnai pathi kekka ethachum update kidaikuma parka oon friends msg pannan first gobi pannan ava purinjupanu thonuchu purinjukitta apro unakku try panni mudilla sollita apro, varsha msg panna avalum unnai contact panna mudilla sonna and also she give a words neenga pathrama parthukonga avalanu , apro brindha pesuna sidu moonjiyaaa pesuna ava vera enkitta pesitu tha avala avoid panratha ninaichutu feel panna aproo ithula na gobi kitta nalla pesunan close aga try panna atleast nalla frd ahh iruntha nalla irukunu thonuchu ana avaluku nan comfort ah thonala so avoid panna nan purinjukittan vittutan, apro snap la new frd theduna oru 10 perukitta pesi iruppan ethuvum set agula ellam vittutan ipo pesula insta la pesala yaarukitayum aprro romba lonely ahh irunthuchu unakku story pottu apdye amaithiyaa irunthan apo tha innoru thappu pannittan kuttymaa oon email moolama kidaicha contact number vechu nan yaarunu sollama new friends ah pesalam pesuna periyaa issue nee yaara en ponnuku call pannuranu oru appa enakke call panni complaint panna poranu bayapaduthitanga, Nan intha muyarchiyum kai vittutan apro tha last ah ok insta try pannuvom pesi parthan 2 peru kitta ana ippola yaarukitta pesunalum unnoda thoughts vara arambichuruchu kuttymaaa etha parthalum sankar mukthi ahhhh  vanthuchu ennala oon thoughts la irunthu veliya varave mudilla daily  azhuga arambichutan yaarukitta sollurathu therilla paithiyama daily azhuguran pls kuttymaaa seekram dec 8 varanum pray pannikurann nan nichiyama unakaka antha bus stop vanthu nippan kuttymaaa unnai parkanum oon kanna parkkanum ore mudivu tha kuttymaaa ithoda ellathayum block panitan again naan unakak tha iruka poran unnai thavira yaarum venam kutymaa ithana naal ahh loneliness poga ennanamo try pannitan ana athu la thappu nan lonely la illa en manasula nee irukka kuttymaaa ..... nee mattum tha yaarukkum place illa amma va irunthalum enakku nee tha venum kuttymaaa ennala nee illama irukka mudiyathu vazhntha oonkitta illaina thaniya sankar mari en career parthutu last varaikkum irupan ennala oob place yaaraiyum vekka mudilla kuttymaa ellathulayum nee mattum tha irukka kuttymaaa en wallpaper en ringtone kanna kanmaniyaa unnodu sanaagiren en manasula neee oruthi thaa yaarume illa yaarum vena manichuru kuttymaaa nan pannathu la thappu tha inime promise ah panna mattan enakku nee mattum tha venum. unnoda video edit pannan la athu ellame thirumba thirumba potu parthutu irukan ennala enna panrathu therilla en manasu nane solli vechu kittan ava engayum illa en manasula tha irukka nan inga thudikura mari avalum enakaka thudichutu iruppa ennai marakka mattanu pls kuttymaa en nambikai emathiratha i love you kuttymaaaa sorry diii ithana naal ah oonkitta ithellam sollama pannathuku manichuru dii inime eva kudayum pesa mattan enakku yaarum vena kutttymaaa nee mattum pothum kuttymaaa inime nan unakku everyday insta la en day share pannuran kuttymaaa....inga ellarum en amma en frds ellarumee unakku marriage ayirum avala ethuku da namburanu thappu thappa pesuranga enakku thana theriyum namma love nan yaaru pechayum kekkula kuttymaa oon pechu mattum tha 6 month la parppom nee solli irukka nan wait pannuvan kuttymaa unakaka eppavume dec 8 la illana life long unakaka nan wait pannuvan kuttymaaaa eppavumeeee nan unakaka irukkan kuttymaaa unnai mattume nambi irukan kuttymaa ivanga words ellam nama mathanum kuttymaa again meet pani love panni marriage panni ivanga moonjila kari pooshanum kuttymaa.....apro onnu purinjuthu enakku therinju nan ellarukum sonnathunala tha kannu patruchu kuttymaa nama again reunite ana aproo yaarukum theriyama private ah love pannuvom kuttymaa i love you kuttymaaa Sorry dii inime intha mari thappu pana mattan intha petda manasu unakku mattum tha kuttymaaa pls nama meet panra apo itha padikka unakku kuduppan ithuku aproo ennai petda mattum kuptu kuttymaaa pls....`
  },
  {
    id: "note-16",
    date: "2026-06-03",
    displayDate: "03.06.2026",
    subDate: "June 3, 2026",
    title: "Kuttmaa in my dream june 3 2026",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Longing, Video Call & Dream Meeting",
    icon: "🌙",
    content: `6moths aprm nii call pannurs kannu la kanneer oda.. Miss you kuttymaaa. Nan oru shop la work panran nee veetla irukka call... Ennai nee vc pathathum oru azhugai vnthu kootitu poda inga irukave pudikalanu
Nii azhurathu parthu enakku kastam ok meet panlam kelambi oon veetukku veliya irunthu video call panan nii call. Attend  pannitu kanneer ahh varuthu ellam thudsichutu again varuthu  water bottle edithu face wash panra maari match panni amma work poran ma nalla ponna irupan kaan sollitu iruka nee amma strict no  solluranga nan veetukkulaa entry amma mattum tha vertla yaarume illa aprm nan ulla vanthathu nee parthuta amma pakkala ammakku theriyama oon pakkathhla vanthu hug panni kiss oannitu povan🫂👀❣️love you kuttymaaa miss you
Again ammakku theriyama wake agittan avvalavu tha`
  },
  {
    id: "note-17",
    date: "2026-06-03",
    displayDate: "03.06.2026",
    subDate: "June 3, 2026",
    title: "Kuttymaaa words 3.6.2026",
    category: "Sweet Words 🥺🫶",
    author: "Kuttymaa's Words",
    mood: "Sweetest Message Ever",
    icon: "🫶",
    content: `Unnai miss pannita nan tha loser... 🫂🥺🫶
Yesterday per day 50℅ unnai pathina thoughts thanda irukkum pothuma happy ah sonna🥹en kuttymaaa🫂❣️`
  },
  {
    id: "note-18",
    date: "2026-09-20",
    displayDate: "20.09.2026",
    subDate: "September 20, 2026",
    title: "Kuttymaa in dream 20.9.2026",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Himalayas Trip, Peaceful Sleep & Pure Bliss",
    icon: "🏔️",
    content: `Kuttymaa today dream la vantha ma onna oru long trip Himalayas mari panimmoottama onna kai pudichu night la ore bed la katti pudichu thungittu romba happy ah irukkom nama onna irukkum pothu romba happy ah manasara manasu vittu pesi manasula bharame illama nimmathiyaa irukkom kuttymaaa🫂🥺i need happen this soon🫂❣️ 20.09.2026`
  },
  {
    id: "note-19",
    date: "2026-10-03",
    displayDate: "03.10.2026",
    subDate: "October 3, 2026",
    title: "Dream with kuttymaa (3.10.26)",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "107 Days Later, Temple Plan & Beautiful Vision",
    icon: "🌙",
    content: `107 days apro innaikku nama meet panrom kovil poromnu plan panrom white blck  top matching pant matching shawl azhaga iruntha kuttymaa unnai parthathum nan katti pudichu azhuguran kuttymaaa i love you❤️ kuttyma 20times mela solli iruppan onna kai pudichu nadakka start panrom... Athukulla phone la alarm adichu kanavu gone kuttymaaa, 😮💨🥺🫂but unnai parthutan athu pothum kuttymaaa🫂🫂🫂🫂💘🥹`
  },
  {
    id: "note-20",
    date: "2026-10-05",
    displayDate: "05.10.2026",
    subDate: "October 5, 2026",
    title: "Dream with kuttymaa 5.10.26",
    category: "Dream 🌙",
    author: "Prasanth",
    mood: "Black & White Top, Hug & Tears",
    icon: "🌙",
    content: `Kuttymaa nan oon veetuku vanthan apro en dream la sonnan nee azhaga iruntha black and white top enakku romba pudichu irunthuchh solluran nee ennai katti pudichutu azhugura ennai vitratha da seekram velai vangitu vaa   ennala inga irukka mudilla oonkuda vanthuran azhugura nan samathanam paduthi konja neram pesitu nan kelamburan nee manase illama poittu vaa solluraa`
  },
  {
    id: "note-21",
    date: "2026-10-06",
    displayDate: "06.10.2026",
    subDate: "October 6, 2026",
    title: "Bad dream (6.10.26)",
    category: "Bad Dream 🥺",
    author: "Prasanth",
    mood: "Waking in Fear, Only Loving Kuttymaa",
    icon: "🥺",
    content: `Kuttymaa en  1st lover face en dream la vanthuchu
Takkunu bayanthu enthuruchutan wake anathum sorry kuttymaa sorry kuttymaaa thaniyaa polamburan...... Sorry dii nan avala ninaikala yen vantha therilla udane wake agittan. Love you kuttymaaaaa 🫂🫂🫂🫂🥺`
  },
  {
    id: "note-22",
    date: "2026-10-11",
    displayDate: "11.10.2026",
    subDate: "October 11, 2026 at 11:58 PM",
    title: "New beginnings (11.10.26)",
    category: "Emotional Warmth 🫂🫠",
    author: "Prasanth",
    mood: "Tears Wiped, Sleeping Together on Arm & Sacred Bond",
    icon: "🫠",
    content: `Nan happy ah irukkan today 11.10.26 time 11.58 naa epoavum illama unnai feel panna start pannitan  oon kannathula kai vekkuran oon kanneer thodaikuran  oon kitta sorry sorry solluran nan pannathu ellam thappu tha kuttymaa manichurunu kenjuran paithiyama irukan pola oon kai mela en thala vechu thunguran kuttymaa oon moochu kathu sooda pada nama close ah face vechu thungurom i feel it kuttymmaaa oon kannatha thatti kuduthu apdyee oon mudhugula thatti kuduthu onnum agathu kuttymaaaaaaa solli apdye hug panni thunguran kuttymaa🫂 i love you kuttymaaaaaaa vitratha dii 🥹nama seruvom thana kuttymaaaaaaa 🫠 ennoda oru kai eppavum inime nan virichu tha paduppan kuttymaa en kai mela eppavum nee thala vechu thunguva... Nan oon nenjula thatti kuduthu daily thunga veppan kuttymaaa`
  },
  {
    id: "note-23",
    date: "2026-10-21",
    displayDate: "21.10.2026",
    subDate: "October 21, 2026",
    title: "Today dream la en kuttymaa (21.10.26)",
    category: "Dream & Life Promise 💍🫂",
    author: "Prasanth",
    mood: "December 8 Meet Dream & Lifetime Marriage Promise",
    icon: "💍",
    content: `Kuttymaaaa nama rendu perum meet panrom december 8 nan oon kitta niraiyaa solluran neeyum miss panan da sollura...apro antha naal night kanavula la enakku theriyama insta use pannura nee athula ennai follow panla aproo new mobile vechu iruka 4 peru new friends sollura  nee work poittu irukka work pora edathula tha 4 pasanga frds solura nanum ok  friends vechukurathu usefull tha vittutan nee ivvalavu dream la enkitta insta chat la sollura kuttymaa aproo nama enga meet pannom therilla 2mins kuda pesala nerla...aprooo enakku happy ah irunthuchu nan chat la sonnan nan amma kitta solli irunthan kuttymaa intha december 8 la nanga meet pannurom pesurom avala tha marriage pannuvanu solluran ammma athellam illa ava la unnai kanduka mattanu amma solluchu intha word nama innaikku mathitom kuttymaaa nama meet pannitom la🥹sonna mari again sernthutom la azhuthute oonkitta sonnan kuttymaaa🫰❣️

Pls kuttymaa ipo solluran nan unnai tha marriage pannuvan oon appa amma anna ellaroda samathoda ana late agum rendu perum kasta padanum evvalavu torture pannalum nee thanganum enakaka enkuda iru kuttymaa nan nalla work poittu konjam kadan la kattitu vara 2years minimum venum nee kathurupiyaa kuttymaaa enakaka🫂🫂🫂😩❣️pls kuttymaaa`
  }
];

export default function NotesVault() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);
  const [expandedNoteId, setExpandedNoteId] = useState(null);
  const [readingNote, setReadingNote] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("kuttymaa_fav_notes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [toastMessage, setToastMessage] = useState("");

  const toggleFavorite = (id, e) => {
    e?.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("kuttymaa_fav_notes", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const handleCopy = (text, e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(text);
    setToastMessage("Note copied to clipboard! 📋");
  };

  const categories = useMemo(() => {
    const set = new Set();
    RAW_NOTES_DATA.forEach((n) => set.add(n.category));
    return ["All", "Favorites ❤️", ...Array.from(set)];
  }, []);

  const filteredNotes = useMemo(() => {
    let list = [...RAW_NOTES_DATA];

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.displayDate.includes(q) ||
          n.category.toLowerCase().includes(q) ||
          (n.mood && n.mood.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (selectedCategory === "Favorites ❤️") {
      list = list.filter((n) => favorites.includes(n.id));
    } else if (selectedCategory !== "All") {
      list = list.filter((n) => n.category === selectedCategory);
    }

    // Sort by date (Ascending default, as requested)
    list.sort((a, b) => {
      if (a.date === b.date) {
        return sortAsc ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
      }
      return sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });

    return list;
  }, [search, selectedCategory, sortAsc, favorites]);

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: { xs: 1.5, sm: 3 }, py: 2 }}>
      {/* Header Banner */}
      <Card
        sx={{
          p: { xs: 3, md: 4.5 },
          mb: 4,
          borderRadius: 6,
          background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,238,245,0.9) 100%)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(255, 64, 129, 0.2)",
          boxShadow: "0 20px 45px rgba(255, 64, 129, 0.12)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,64,129,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            px: 2.5,
            py: 0.8,
            borderRadius: 50,
            bgcolor: "rgba(255, 64, 129, 0.1)",
            color: "#d81b60",
            mb: 2,
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <AutoStoriesIcon sx={{ fontSize: 20 }} /> Personal Diary & Heartfelt Notes
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Pacifico', cursive",
            color: "#d81b60",
            mb: 1.5,
            fontSize: { xs: "2.1rem", md: "2.8rem" },
            textShadow: "0 2px 12px rgba(255,64,129,0.2)",
          }}
        >
          Kuttymaa & Petda's Notes 📝✨
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            color: "#4b5563",
            maxWidth: 780,
            mx: "auto",
            lineHeight: 1.7,
            fontSize: { xs: "0.98rem", md: "1.08rem" },
          }}
        >
          Every dream, every meet at Chennimalai and the theatre, the raw tears, our Kovil promises,
          Kuttymaa's perspective, and the lifelong vow for December 8 and beyond.
          Sorted chronologically from the moment she came back into my life.
        </Typography>

        {/* Quick Timeline Counter Badges */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap", mt: 3 }}>
          <Chip
            icon={<CalendarMonthIcon sx={{ color: "#d81b60 !important" }} />}
            label={`23 Diary Notes (31.12.2025 → 21.10.2026)`}
            sx={{
              bgcolor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,64,129,0.25)",
              fontWeight: 700,
              color: "#c2185b",
            }}
          />
          <Chip
            icon={<NightsStayIcon sx={{ color: "#7b1fa2 !important" }} />}
            label="9 Dreams & Visions"
            sx={{
              bgcolor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(123,31,162,0.25)",
              fontWeight: 700,
              color: "#7b1fa2",
            }}
          />
          <Chip
            icon={<ImportContactsIcon sx={{ color: "#00897b !important" }} />}
            label="2 Kuttymaa's Own Diary Versions"
            sx={{
              bgcolor: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(0,137,123,0.25)",
              fontWeight: 700,
              color: "#00897b",
            }}
          />
        </Box>
      </Card>

      {/* Search, Filter & Sort Bar */}
      <Box sx={{ mb: 3.5, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            fullWidth
            placeholder="Search within thoughts, dreams, temple meets, words..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#ff4081" }} />
                </InputAdornment>
              ),
              endAdornment: search ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearch("")}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 300px" },
              bgcolor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                "&:hover fieldset": { borderColor: "#ff4081" },
                "&.Mui-focused fieldset": { borderColor: "#d81b60" },
              },
            }}
          />

          <Button
            variant="outlined"
            onClick={() => setSortAsc((prev) => !prev)}
            startIcon={<SortIcon />}
            sx={{
              borderRadius: 4,
              px: 2.5,
              py: 1.2,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              borderColor: "rgba(255,64,129,0.3)",
              color: "#d81b60",
              bgcolor: "rgba(255,255,255,0.85)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)", borderColor: "#ff4081" },
            }}
          >
            {sortAsc ? "Date: Oldest First (Asc)" : "Date: Newest First (Desc)"}
          </Button>

          <Typography variant="body2" sx={{ color: "#fff", fontWeight: "bold", ml: "auto", px: 1 }}>
            Showing {filteredNotes.length} of {RAW_NOTES_DATA.length} notes
          </Typography>
        </Box>

        {/* Categories Chips */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                clickable
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: isSelected ? 700 : 500,
                  bgcolor: isSelected ? "#ff4081" : "rgba(255,255,255,0.8)",
                  color: isSelected ? "#fff" : "#4b5563",
                  border: isSelected ? "1px solid #d81b60" : "1px solid rgba(255,255,255,0.4)",
                  boxShadow: isSelected ? "0 4px 12px rgba(255,64,129,0.3)" : "none",
                  "&:hover": {
                    bgcolor: isSelected ? "#e91e63" : "rgba(255,255,255,0.95)",
                  },
                }}
              />
            );
          })}
        </Box>
      </Box>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <Card
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 6,
            bgcolor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h5" color="#c2185b" fontWeight="bold" gutterBottom>
            No notes found 🔍
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Try clearing your search query or choosing another category filter.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
            }}
            sx={{ bgcolor: "#ff4081", borderRadius: 20 }}
          >
            Reset Filters
          </Button>
        </Card>
      ) : (
        <Grid container spacing={2.5}>
          {filteredNotes.map((note, index) => {
            const isExpanded = expandedNoteId === note.id;
            const isFav = favorites.includes(note.id);
            const isKuttymaaPOV = note.category.includes("Her Perspective");
            const isDream = note.category.includes("Dream");

            return (
              <Grid item xs={12} key={note.id}>
                <Card
                  sx={{
                    borderRadius: 5,
                    p: { xs: 2.5, sm: 3.5 },
                    background: isKuttymaaPOV
                      ? "linear-gradient(135deg, rgba(255, 245, 248, 0.96) 0%, rgba(254, 235, 242, 0.95) 100%)"
                      : isDream
                      ? "linear-gradient(135deg, rgba(250, 245, 255, 0.96) 0%, rgba(243, 235, 255, 0.95) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 248, 250, 0.95) 100%)",
                    backdropFilter: "blur(16px)",
                    border: isKuttymaaPOV
                      ? "2px solid rgba(233, 30, 99, 0.35)"
                      : isDream
                      ? "2px solid rgba(156, 39, 176, 0.25)"
                      : "2px solid rgba(255, 64, 129, 0.2)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:hover": {
                      boxShadow: "0 16px 40px rgba(255, 64, 129, 0.16)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {/* Top Bar: Date Chip, Index, Mood & Actions */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                      <Chip
                        icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                        label={note.displayDate}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          bgcolor: "#d81b60",
                          color: "#fff",
                          fontFamily: "monospace",
                          fontSize: "0.85rem",
                        }}
                      />
                      <Chip
                        label={`#${index + 1}`}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          bgcolor: "rgba(255, 64, 129, 0.12)",
                          color: "#c2185b",
                          fontSize: "0.8rem",
                        }}
                      />
                      <Chip
                        label={note.category}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontWeight: 600,
                          borderColor: isKuttymaaPOV ? "#e91e63" : isDream ? "#9c27b0" : "#ff4081",
                          color: isKuttymaaPOV ? "#c2185b" : isDream ? "#7b1fa2" : "#c2185b",
                          fontSize: "0.8rem",
                        }}
                      />
                      {note.author && (
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            color: isKuttymaaPOV ? "#d81b60" : "#555",
                            bgcolor: isKuttymaaPOV ? "rgba(255, 64, 129, 0.1)" : "rgba(0,0,0,0.04)",
                            px: 1.2,
                            py: 0.3,
                            borderRadius: 2,
                          }}
                        >
                          ✍️ {note.author}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Tooltip title={isFav ? "Remove from Favorites" : "Add to Favorites"}>
                        <IconButton
                          size="small"
                          onClick={(e) => toggleFavorite(note.id, e)}
                          sx={{ color: isFav ? "#ff1744" : "#9e9e9e" }}
                        >
                          {isFav ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Copy note text">
                        <IconButton size="small" onClick={(e) => handleCopy(note.content, e)}>
                          <ContentCopyIcon fontSize="small" sx={{ color: "#757575" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Open Reader Mode (Focus)">
                        <IconButton
                          size="small"
                          onClick={() => setReadingNote(note)}
                          sx={{ color: "#d81b60" }}
                        >
                          <AutoStoriesIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      color: isKuttymaaPOV ? "#ad1457" : "#2d3748",
                      mb: 1,
                      fontSize: { xs: "1.2rem", sm: "1.35rem" },
                    }}
                  >
                    {note.title}
                  </Typography>

                  {note.subDate && (
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        fontStyle: "italic",
                        color: "#718096",
                        mb: 1.8,
                        fontSize: "0.85rem",
                      }}
                    >
                      🗓️ {note.subDate}
                    </Typography>
                  )}

                  {/* Note Content Preview / Full View */}
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: 3.5,
                      bgcolor: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: { xs: "0.95rem", sm: "1.02rem" },
                      lineHeight: 1.85,
                      color: "#2d3748",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      position: "relative",
                      maxHeight: isExpanded ? "none" : 220,
                      overflow: "hidden",
                    }}
                  >
                    {note.content}

                    {!isExpanded && note.content.length > 320 && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 90,
                          background:
                            "linear-gradient(to top, rgba(255,255,255,0.95) 20%, transparent 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </Box>

                  {/* Expand / Collapse & Read Full Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: 2,
                      pt: 1,
                      borderTop: "1px dashed rgba(0,0,0,0.08)",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {note.mood && (
                      <Chip
                        size="small"
                        label={`Feeling: ${note.mood}`}
                        sx={{
                          bgcolor: "rgba(255,64,129,0.08)",
                          color: "#c2185b",
                          fontStyle: "italic",
                          fontSize: "0.8rem",
                        }}
                      />
                    )}

                    <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
                      {note.content.length > 320 && (
                        <Button
                          size="small"
                          onClick={() => setExpandedNoteId(isExpanded ? null : note.id)}
                          endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            color: "#d81b60",
                            textTransform: "none",
                          }}
                        >
                          {isExpanded ? "Show Less" : "Read In-Page"}
                        </Button>
                      )}
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setReadingNote(note)}
                        startIcon={<AutoStoriesIcon />}
                        sx={{
                          borderRadius: 20,
                          px: 2,
                          bgcolor: "#ff4081",
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          textTransform: "none",
                          "&:hover": { bgcolor: "#d81b60" },
                        }}
                      >
                        Reader Mode
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Reader Mode Dialog */}
      <Dialog
        open={Boolean(readingNote)}
        onClose={() => setReadingNote(null)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 6,
            background: "linear-gradient(135deg, #fffdfa 0%, #fff5f8 100%)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
            border: "2px solid rgba(255, 64, 129, 0.25)",
            p: { xs: 2, sm: 3 },
          },
        }}
      >
        {readingNote && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                p: 2,
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, flexWrap: "wrap" }}>
                  <Chip
                    label={readingNote.displayDate}
                    sx={{ bgcolor: "#d81b60", color: "#fff", fontWeight: 700 }}
                  />
                  <Chip
                    label={readingNote.category}
                    variant="outlined"
                    sx={{ borderColor: "#ff4081", color: "#c2185b", fontWeight: 600 }}
                  />
                  {readingNote.author && (
                    <Chip
                      label={`Written by: ${readingNote.author}`}
                      sx={{ bgcolor: "rgba(0,0,0,0.06)", fontWeight: 600 }}
                    />
                  )}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    color: "#ad1457",
                    fontSize: { xs: "1.4rem", sm: "1.8rem" },
                  }}
                >
                  {readingNote.title}
                </Typography>
                {readingNote.subDate && (
                  <Typography variant="body2" sx={{ color: "#718096", fontStyle: "italic", mt: 0.5 }}>
                    {readingNote.subDate}
                  </Typography>
                )}
              </Box>
              <IconButton onClick={() => setReadingNote(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ p: { xs: 2, sm: 3.5 }, bgcolor: "rgba(255,255,255,0.7)" }}>
              <Box
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: "1.02rem", sm: "1.12rem" },
                  lineHeight: 2.0,
                  color: "#2d3748",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  p: { xs: 2, sm: 3 },
                  borderRadius: 4,
                  bgcolor: "#fff",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(255,64,129,0.12)",
                }}
              >
                {readingNote.content}
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 2, justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  startIcon={
                    favorites.includes(readingNote.id) ? (
                      <FavoriteIcon sx={{ color: "#ff1744" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )
                  }
                  onClick={(e) => toggleFavorite(readingNote.id, e)}
                  sx={{ color: "#d81b60", fontWeight: 700 }}
                >
                  {favorites.includes(readingNote.id) ? "Favorited" : "Favorite"}
                </Button>
                <Button
                  startIcon={<ContentCopyIcon />}
                  onClick={(e) => handleCopy(readingNote.content, e)}
                  sx={{ color: "#555", fontWeight: 600 }}
                >
                  Copy
                </Button>
              </Box>

              <Button
                variant="contained"
                onClick={() => setReadingNote(null)}
                sx={{ bgcolor: "#ff4081", borderRadius: 20, px: 3, "&:hover": { bgcolor: "#d81b60" } }}
              >
                Close Note
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Copy Toast Notification */}
      <Snackbar
        open={Boolean(toastMessage)}
        autoHideDuration={3000}
        onClose={() => setToastMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastMessage("")}
          severity="success"
          sx={{
            width: "100%",
            borderRadius: 4,
            bgcolor: "#d81b60",
            color: "#fff",
            fontWeight: 700,
            "& .MuiAlert-icon": { color: "#fff" },
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
