// Wszystkie treści strony Konsorcjum Social Living Europe.
// Zdjęcia z Unsplash służą jako placeholdery (do zastąpienia w produkcji).

export const img = (id: string, w: number, h?: number): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${
    h ?? Math.round(w * 0.66)
  }&q=70`;

export const NAV = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/finansowanie", label: "Finansowanie" },
  { href: "/modele", label: "Modele" },
  { href: "/wspolpraca", label: "Współpraca" },
];

// ---------- STRONA GŁÓWNA ----------

export const roles = [
  { title: "Doradzamy", desc: "Analiza wykonalności i wybór właściwego modelu." },
  { title: "Finansujemy modelowo", desc: "Montaż dotacji, kredytu i wkładu inwestora." },
  { title: "Strukturyzujemy", desc: "Układamy projekt, umowy i przepływy finansowe." },
  { title: "Zarządzamy", desc: "Koordynacja realizacji i obsługa inwestycji." },
];

export const whyNow = [
  { v: "2,1%", l: "udział budownictwa społecznego w całej produkcji mieszkaniowej w Polsce" },
  { v: "45 mld zł", l: "pula publiczna na budownictwo społeczne do 2030 roku" },
  { v: "126 tys.", l: "rodzin czekających na mieszkanie z zasobów gminnych" },
  { v: "80%", l: "maksymalny poziom finansowania z kredytu BGK" },
  { v: "2%", l: "oprocentowanie preferencyjnego kredytu BGK rocznie" },
  { v: "10 mld zł", l: "roczny limit Funduszu Dopłat w 2030 roku" },
];

export const ustawa = [
  {
    title: "30–80% dotacji",
    desc: "Bezzwrotne wsparcie publiczne może pokrywać znaczną część kosztów projektu mieszkaniowego — w zależności od typu inwestycji od ok. 30% do nawet 80% kosztów kwalifikowanych.",
  },
  {
    title: "Kredyt BGK 1–2%",
    desc: "Preferencyjne finansowanie BGK z oprocentowaniem 1–2% może pokrywać do 80% wartości projektu — z okresem spłaty nawet do 50 lat i niższym obciążeniem czynszowym.",
  },
  {
    title: "10% partycypacji mieszkańców",
    desc: "Projektowane zasady obniżają wkład własny mieszkańców do maksymalnie 10% kosztów budowy lokalu, co oznacza większą dostępność mieszkań i szerszą grupę najemców.",
  },
  {
    title: "34 mld zł do 2030 r.",
    desc: "W latach 2027–2030 na finansowanie mieszkalnictwa społecznego i komunalnego planowane jest ok. 34 mld zł — wyjątkowe okno dla projektów przygotowanych pod nowe zasady.",
  },
];

export const finStats = [
  { v: "do 100%", l: "finansowania inwestycji ze środków publicznych i prywatnych" },
  { v: "1–2%", l: "oprocentowanie preferencyjnego kredytu BGK" },
  { v: "do 50 lat", l: "horyzont spłaty finansowania" },
  { v: "30–80%", l: "bezzwrotnej dotacji z Funduszu Dopłat" },
];

export const forWhom = [
  {
    title: "Sektor prywatny",
    desc: "Deweloperzy, fundusze i firmy budowlane — Twoja inwestycja, nasz model, publiczne finansowanie.",
    img: "/assets/wsp-umowa-contract.jpg",
  },
  {
    title: "Samorządy",
    desc: "Gminy i spółki komunalne — zaspokajamy zapotrzebowanie mieszkaniowe bez obciążania budżetu.",
    img: "/assets/wsp-spotkanie-stol.jpg",
  },
  {
    title: "Duzi pracodawcy",
    desc: "Mieszkanie jako benefit — pracownik z mieszkaniem zostaje w regionie.",
    img: "/assets/wsp-prezentacja.jpg",
  },
  {
    title: "Instytucje finansowe",
    desc: "Fundusze ESG i impact investing — gotowe projekty z certyfikowanym impaktem.",
    img: "/assets/wsp-podpis-waga.jpg",
  },
  {
    title: "Organizacje pozarządowe",
    desc: "NGO i sektor społeczny — wiedza, sieć i głos zamienione w projekty.",
    img: "/assets/wsp-zebatki.jpg",
  },
];

export const projectTypes = [
  { num: "01", title: "SIM / TBS", desc: "Instytucjonalny operator taniego najmu z finansowaniem państwowym." },
  { num: "02", title: "Zakup przez wynajem", desc: "Własne mieszkanie w horyzoncie 25–50 lat, bez kredytu na wejściu." },
  { num: "03", title: "Program wiarygodności kredytowej", desc: "Własne mieszkanie w 10 lat — dla tych, których dziś bank odrzuca." },
  { num: "04", title: "Mieszkania pracownicze", desc: "Mieszkanie jako benefit budujący lojalność kadry." },
  { num: "05", title: "Budownictwo senioralne", desc: "Mieszkania z usługami dla rosnącej grupy 60+." },
];

export const revenueSteps = [
  { num: "01", title: "Przygotowanie projektu", desc: "Analiza gruntu, koncepcja inwestycji, model prawny, finansowy i organizacyjny." },
  { num: "02", title: "Budowa i wykonawstwo", desc: "Realizacja robót, generalne wykonawstwo, koordynacja podwykonawców i kontrola kosztów." },
  { num: "03", title: "Zarządzanie projektem", desc: "Prowadzenie procesu inwestycyjnego, harmonogram, budżet, relacje z partnerami publicznymi i finansującymi." },
  { num: "04", title: "Montaż finansowania", desc: "Łączenie dotacji, kredytu preferencyjnego, wkładu własnego, partycypacji mieszkańców i kapitału prywatnego." },
  { num: "05", title: "Obsługa długoterminowa", desc: "Zarządzanie najmem, utrzymanie zasobu, rozliczenia, usługi dodatkowe i obsługa mieszkańców." },
];

// ---------- O NAS ----------

export const skala = [
  { v: "300–400 tys.", l: "tyle mieszkań brakuje dziś w Polsce wg analizy opartej na danych GUS" },
  { v: "12 800 zł/m²", l: "średnia cena na rynku pierwotnym w 2026 r. (w Warszawie 16–17 tys.)" },
  { v: "740", l: "mieszkań społecznych TBS/SIM oddanych w I kw. 2025 r. — przy 126 tys. oczekujących" },
  { v: "4 mld zł", l: "pula Funduszu Dopłat na 2026 r. — efekt zmiany kierunku polityki mieszkaniowej" },
];

export const celCards = [
  {
    who: "Samorząd",
    d: "nie musi angażować własnego budżetu — dostaje zasób mieszkaniowy zbudowany przez partnera prywatnego z publicznym finansowaniem, z możliwością wskazywania najemców zgodnie z lokalną polityką społeczną.",
  },
  {
    who: "Inwestor prywatny",
    d: "nie musi rozumieć ustawowych mechanizmów BGK i Funduszu Dopłat — dostaje projekt z domkniętym montażem finansowym, jasnym modelem przychodowym i długoterminową umową z samorządem.",
  },
  {
    who: "Instytucja finansowa",
    d: "nie musi szukać projektów z mandatem ESG na własną rękę — dostaje gotową strukturę transakcyjną z certyfikowanym impaktem, zabezpieczeniem hipotecznym i regularnym przepływem z rat uczestników.",
  },
  {
    who: "Uczestnik programu",
    d: "pracownik, rodzina, senior — dostaje mieszkanie dostępne cenowo, z perspektywą budowania majątku, w modelu, który go nie wyklucza z powodów formalnych.",
  },
];

export const competencies = [
  {
    title: "Analiza finansowa",
    desc: "Ocena wykonalności, kosztów i spłacalności jeszcze przed startem. Weryfikujemy, czy projekt ma sens finansowy, zanim ktokolwiek wyda złotówkę.",
  },
  {
    title: "Strukturyzacja projektów",
    desc: "Dobór modelu, umów i ról wszystkich partnerów. Wiemy, że ta sama lokalizacja może wymagać zupełnie innej struktury niż projekt po sąsiedzku.",
  },
  {
    title: "Montaż finansowania",
    desc: "Łączenie dotacji, kredytu preferencyjnego BGK, wkładu inwestora i — w wybranych projektach — kapitału funduszy z impaktem społecznym. W wybranych przypadkach finansujemy do 100% wartości inwestycji.",
  },
  {
    title: "Współpraca JST – inwestor prywatny",
    desc: "Spinanie interesów samorządu i kapitału prywatnego. Prowadzimy negocjacje, przygotowujemy umowy ramowe i dbamy o to, by obie strony rozumiały wzajemne oczekiwania.",
  },
  {
    title: "Modele społeczne",
    desc: "SIM/TBS, zakup przez wynajem, program budowania wiarygodności kredytowej, mieszkania pracownicze. Każdy model ma inną logikę finansową i inną grupę docelową — dobieramy właściwy do projektu.",
  },
  {
    title: "Modele senioralne",
    desc: "Mieszkania z usługami i osiedla opiekuńcze dla JST i inwestorów. Demograficznie rosnący segment z pewnym popytem i niedostateczną podażą.",
  },
];

export const values = [
  {
    title: "Dostępność mieszkań",
    desc: "Wierzymy, że dostęp do stabilnego, dostępnego cenowo mieszkania nie powinien zależeć od formy zatrudnienia ani historii kredytowej. Budujemy projekty, które otwierają ten dostęp dla tych, którzy dziś są między rynkami.",
  },
  {
    title: "Odpowiedzialne finansowanie",
    desc: "Każdy projekt, który realizujemy, musi domykać się finansowo bez dotowania nieefektywności. Odpowiedzialne finansowanie oznacza, że projekt działa po wyjściu dotacji i przeżywa zmianę stóp procentowych.",
  },
  {
    title: "Partnerstwo publiczno-prywatne",
    desc: "Nie wierzymy w model, w którym albo wszystko robi gmina, albo wszystko robi deweloper. Wierzymy w model wiedeński: prywatna efektywność operacyjna plus publiczne finansowanie plus społeczny mandat.",
  },
  {
    title: "Projekty długoterminowe",
    desc: "Budownictwo społeczne to nie jest flip. Wchodzimy w projekty z horyzontem 10, 25, 50 lat i projektujemy je tak, żeby działały przez cały ten czas — dla uczestników, inwestorów i samorządów.",
  },
];

// ---------- CYTATY ----------

export const quoteCzerniak = {
  t: "W 2026 r. mamy szansę pobić rekord sprzed ponad 20 lat, kiedy do użytkowania oddano 7,2 tys. mieszkań. To rezultat przeznaczenia aż 4 mld zł na Fundusz Dopłat. W polityce mieszkaniowej nastąpiła zmiana kierunku — państwo odeszło od wspierania zakupów mieszkań własnościowych, natomiast do łask wraca budownictwo społeczne.",
  a: "prof. Adam Czerniak, SGH",
};

export const quoteDelowski = {
  t: "Za 2 mld zł dotacji w Polsce powstają zaledwie 3 tysiące mieszkań. Za tę samą kwotę preferencyjnego 40-letniego kredytu powstać może nawet 114 tysięcy mieszkań.",
  a: "Tomasz Delowski, Stowarzyszenie Towarzystw Budownictwa Społecznego",
};

export const quoteKtbs = {
  t: "Dotacja idzie za konkretnym projektem — dobrze przygotowanym, społecznym, potrzebnym. Jednak lepszy od dotacji będzie mechanizm zwrotny: pieniądze wrócą do systemu i budownictwo samo się rozkręci. Spójrzmy prawdzie w oczy — Wiedeń tego nie robi tylko z miłości do ludzi, tylko dlatego że to się po prostu opłaca.",
  a: "Prezes Krakowskiego TBS",
};

// ---------- FINANSOWANIE: sześć źródeł ----------

export type FinSource = {
  num: string;
  title: string;
  headline: string;
  tag: string;
  dir: "row" | "row-reverse";
  img: string;
  body: string[];
  forWho: string;
};

export const finSources: FinSource[] = [
  {
    num: "01",
    title: "Dotacja / Grant",
    headline: "Od 30% do 80% kosztów inwestycji. Bezzwrotnie.",
    tag: "do 80%",
    dir: "row",
    img: img("1554224155-6726b3ff858f", 1000, 800),
    body: [
      "Grant z Funduszu Dopłat BGK to najsilniejszy instrument finansowania budownictwa społecznego w Polsce. Środki są bezzwrotne — nie są kredytem, nie generują obsługi długu, nie obciążają przepływów operacyjnych inwestycji.",
      "Wysokość grantu zależy od rodzaju przedsięwzięcia i jego charakteru społecznego. Nowe budownictwo czynszowe realizowane przez SIM we współpracy z gminą może uzyskać do 35% kosztów; inwestycje komunalne, pustostany gminne i projekty z komponentem KPO — nawet do 80%. Grant stanowi fundament montażu finansowego, który domyka całą resztę.",
      "Grant nie trafia bezpośrednio do prywatnego inwestora — formalnie wypłacany jest gminie, która przekazuje go operatorowi jako rekompensatę za świadczenie usługi publicznej. To ustawowa konstrukcja wymagająca odpowiedniej struktury projektowej. Wiemy, jak ją zbudować.",
    ],
    forWho:
      "Każdy projekt realizowany we współpracy z gminą w formule SIM lub inwestora zewnętrznego z umową art. 5 ustawy o finansowym wsparciu.",
  },
  {
    num: "02",
    title: "Kredyt preferencyjny BGK",
    headline: "Oprocentowanie 1–2% rocznie. Tenor do 50 lat. Do 80% kosztów.",
    tag: "1–2% · do 50 lat",
    dir: "row-reverse",
    img: "/assets/wsp-umowa-contract.jpg",
    body: [
      "Kredyt SBC (Społeczne Budownictwo Czynszowe) udzielany przez Bank Gospodarstwa Krajowego to najtańsze dostępne w Polsce finansowanie inwestycji mieszkaniowych. Oprocentowanie stabilizowane jest na poziomie około 2% rocznie dzięki dopłacie z budżetu państwa — bez marży banku, spreadów i zmienności komercyjnej.",
      "Przy tenorze do 50 lat i finansowaniu do 80% kosztów, obsługa kredytu jest na tyle niska, że pozwala skalkulować czynsz regulowany poniżej stawek rynkowych i jednocześnie osiągać DSCR powyżej 1,0x. Żaden instrument komercyjny nie daje tej kombinacji.",
      "Od 2026 roku BGK uruchomił gwarancję InvestEU dla nowych podmiotów bez historii kredytowej, eliminując barierę wejścia dla nowo zakładanych SIM-ów i TBS-ów. Kredyt kwalifikuje m.in. koszty nabycia nieruchomości wraz z budynkiem do przebudowy — co umożliwia finansowanie przejęcia niedokończonych inwestycji deweloperskich.",
    ],
    forWho:
      "SIM-y, TBS-y, spółdzielnie mieszkaniowe, spółki gminne realizujące inwestycje na wynajem z regulowanym czynszem.",
  },
  {
    num: "03",
    title: "Partycypacja najemcy",
    headline: "10% ceny lokalu. Wpłacana przed zasiedleniem. Redukuje zapotrzebowanie na kredyt.",
    tag: "10%",
    dir: "row",
    img: img("1560448204-e02f11c3d0e2", 1000, 800),
    body: [
      "Partycypacja to wkład przyszłego najemcy w koszty budowy lub nabycia lokalu, który będzie zajmował. Wpłacana przed startem programu stanowi element wkładu własnego SIM w montażu BGK i jednocześnie punkt wejścia uczestnika do programu.",
      "Z perspektywy operatora pełni dwie funkcje. Po pierwsze redukuje zapotrzebowanie na kredyt — każde 10% pokryte partycypacją to mniej długu i niższy czynsz dla wszystkich uczestników. Po drugie jest mechanizmem selekcji: uczestnik, który wpłacił partycypację, jest ekonomicznie zaangażowany i statystycznie bardziej lojalny jako najemca.",
      "Partycypacja jest zwrotna lub zaliczana na poczet wykupu — nie jest bezzwrotną opłatą wstępną. Przy odpowiedniej konstrukcji umowy stanowi dla uczestnika pierwszy krok na drodze do własności.",
    ],
    forWho:
      "Każdy projekt SIM z uczestnikami indywidualnymi. W projektach pracowniczych partycypację może wnieść pracodawca w imieniu pracownika.",
  },
  {
    num: "04",
    title: "Wkład inwestora / aport gruntu",
    headline: "10–20% wartości inwestycji. W gotówce lub w naturze.",
    tag: "10–20%",
    dir: "row-reverse",
    img: img("1454165804606-c3d57bc86b40", 1000, 800),
    body: [
      "Wkład własny inwestora to element wymagany przez BGK jako warunek udzielenia kredytu preferencyjnego. Może mieć formę gotówkową lub niepieniężną — najczęściej aportu nieruchomości gruntowej wraz z pozwoleniem na budowę.",
      "Aport gruntu jest szczególnie atrakcyjny dla właścicieli nieruchomości z zatwierdzonym projektem. Zamiast sprzedawać działkę jednorazowo za cenę rynkową, inwestor wnosi ją jako wkład do projektu SIM i odzyskuje wartość stopniowo — przez umowę sprzedaży z rozłożoną płatnością, management fee lub inne formy wynagrodzenia operatorskiego.",
      "W połączeniu z partycypacją najemcy (10%) i wkładem gruntowym (10–15%) możliwe jest domknięcie wymaganego wkładu własnego BGK bez angażowania gotówki przez inwestora.",
    ],
    forWho:
      "Właściciele gruntów z PnB szukający modelu innego niż klasyczna sprzedaż do dewelopera. Inwestorzy z zamrożonym kapitałem w nieruchomościach nierozwiniętych.",
  },
  {
    num: "05",
    title: "Fundusze inwestycyjne z impaktem społecznym",
    headline: "Do 65% kosztów inwestycji. Kapitał prywatny z mandatem ESG.",
    tag: "do 65%",
    dir: "row",
    img: "/assets/wsp-podpis-waga.jpg",
    body: [
      "Konsorcjum SLE posiada dostęp do sieci funduszy z mandatem impact investing i affordable housing, które szukają ekspozycji na polskie budownictwo społeczne. Finansują projekty nie jako inwestorzy equity, lecz jako pożyczkodawcy hipoteczni — udzielając pożyczki zabezpieczonej hipoteką na portfelu, z miesięcznym kuponem odsetkowym i zwrotem kapitału przy wykupie lokali.",
      "Dla projektu to dostęp do kapitału prywatnego uzupełniającego lub zastępującego kredyt BGK — szczególnie wartościowego, gdy projekt nie kwalifikuje się do programu SBC lub gdy inwestor chce uruchomić projekt bez czekania na nabór wniosków BGK.",
      "Fundusze z mandatem SFDR Art. 9 i SDG 11 kwalifikują polskie projekty budownictwa społecznego jako zgodne ze swoim mandatem. W wybranych projektach spełniających kryteria możliwe jest pokrycie nawet 100% kosztów z kombinacji środków publicznych i kapitału funduszowego — bez własnego wkładu dewelopera lub inwestora.",
    ],
    forWho:
      "Projekty wymagające szybkiego finansowania poza systemem BGK. Deweloperzy i fundusze szukające partnera kapitałowego z doświadczeniem w strukturyzacji budownictwa społecznego.",
  },
  {
    num: "06",
    title: "Partycypacja gminy",
    headline: "Grunt, infrastruktura, wkład kapitałowy. Wartość niemierzalna na poziomie projektu.",
    tag: "grunt + infrastruktura",
    dir: "row-reverse",
    img: "/assets/wsp-spotkanie-stol.jpg",
    body: [
      "Gmina w modelu budownictwa społecznego nie jest tylko partnerem administracyjnym. Jest aktywnym uczestnikiem finansowania — przez wniesienie gruntu w formie aportu lub prawa użytkowania wieczystego, zapewnienie infrastruktury technicznej (drogi, media, sieci) jako wkładu rzeczowego, objęcie udziałów w SIM jako udziałowiec mniejszościowy oraz złożenie wniosku o grant z Funduszu Dopłat jako beneficjent.",
      "Każda z tych form obniża koszt projektu dla inwestora prywatnego i zwiększa jego rentowność przy zachowaniu regulowanego czynszu. Grunt gminy wniesiony do projektu zamiast kupowanego po cenie rynkowej może samodzielnie zmienić ekonomikę całej inwestycji.",
      "Relacja z gminą jest też kluczem do środków publicznych — bez umowy z gminą nie ma grantu z Funduszu Dopłat, a bez Funduszu Dopłat montaż się nie domyka. Budowanie tej relacji i strukturyzacja wkładu gminy to jeden z kluczowych obszarów kompetencji Konsorcjum SLE.",
    ],
    forWho:
      "Każdy projekt w systemie SIM lub w formule inwestora zewnętrznego z umową art. 5. Szczególnie wartościowe dla inwestorów bez własnego gruntu lub z ograniczonym kapitałem własnym.",
  },
];

// ---------- MODELE: pięć modeli ----------

export type ModelFull = {
  num: string;
  title: string;
  subtitle: string;
  img: string;
  dir: "row" | "row-reverse";
  body: string[];
  provide: string;
  who: string;
};

export const modelsFull: ModelFull[] = [
  {
    num: "01",
    title: "SIM / TBS — Społeczna Inicjatywa Mieszkaniowa",
    subtitle: "Instytucjonalny operator taniego najmu z preferencyjnym finansowaniem państwowym",
    img: "/assets/bud-balkony-bialy.jpg",
    dir: "row",
    body: [
      "SIM to najsilniej wspierany przez państwo model budownictwa społecznego w Polsce. Daje dostęp do preferencyjnego kredytu BGK przy oprocentowaniu stabilizowanym na poziomie 2% rocznie, bezzwrotnych grantów z Funduszu Dopłat oraz — od 2026 roku — gwarancji InvestEU eliminującej barierę braku historii kredytowej dla nowych podmiotów.",
      "SIM buduje i zarządza mieszkaniami na wynajem z regulowanym czynszem, działając we współpracy z gminą jako partnerem publicznym. To model dla inwestorów z horyzontem długoterminowym, szukających stabilnego przychodu z zasobu mieszkaniowego zamiast jednorazowej sprzedaży.",
    ],
    provide:
      "Pomagamy założyć SIM, skompletować dokumentację do BGK, wprowadzić projekt do Funduszu Dopłat i obsługiwać portfel przez cały czas trwania programu. W wybranych projektach wnosimy kapitał jako inwestor lub pozyskujemy fundusz finansujący.",
    who: "Deweloperzy z działkami i pozwoleniami na budowę. Firmy budowlane szukające bezpiecznego kontraktu z gwarantowanym finansowaniem. Inwestorzy z niedokończonymi lub niesprzedanymi inwestycjami mieszkaniowymi.",
  },
  {
    num: "02",
    title: "Zakup przez wynajem",
    subtitle: "Własne mieszkanie w horyzoncie 25–50 lat z preferencyjnym finansowaniem",
    img: "/assets/bud-kamienica-balkony.jpg",
    dir: "row-reverse",
    body: [
      "Długoterminowy instrument dojścia do własności dla osób, które dziś nie mogą kupić mieszkania za gotówkę ani uzyskać kredytu hipotecznego na warunkach rynkowych. Uczestnik wchodzi do programu z opłatą wstępną, płaci miesięczną ratę i po uzgodnionym okresie — od 25 do 50 lat — staje się pełnoprawnym właścicielem lokalu.",
      "Fundamentem finansowym jest preferencyjny kredyt BGK, który przy oprocentowaniu około 2% rocznie i tenorze do 50 lat pozwala skalkulować ratę uczestnika znacząco poniżej czynszu rynkowego. Uczestnik przez cały czas mieszka w lokalu i buduje swój majątek, zamiast finansować czyjś.",
    ],
    provide:
      "Strukturyzujemy transakcję, organizujemy finansowanie (publiczne i prywatne), rekrutujemy uczestników i obsługujemy portfel przez pełny czas trwania programu. Model może być wdrożony na gotowej inwestycji lub w ramach nowej budowy.",
    who: "Deweloperzy i fundusze szukające alternatywy dla sprzedaży detalicznej. Gminy zainteresowane zwiększeniem dostępności mieszkaniowej bez angażowania własnego budżetu.",
  },
  {
    num: "03",
    title: "Program wiarygodności kredytowej",
    subtitle: "Własne mieszkanie w 10 lat — dla tych, których dziś bank odrzuca",
    img: img("1450101499163-c8848c66ca85", 1000, 800),
    dir: "row",
    body: [
      "W Polsce około 2,5 miliona gospodarstw domowych posiada dochód umożliwiający spłatę kredytu hipotecznego, lecz z powodów formalnych — forma zatrudnienia, krótki staż, brak historii kredytowej — bank odmawia finansowania. Program Wiarygodności Kredytowej istnieje dla tej grupy.",
      "Uczestnik przystępuje z opłatą wstępną 20% ceny rynkowej lokalu. Przez 10 lat płaci miesięczną ratę, która buduje udokumentowaną historię terminowych zobowiązań i stopniowo redukuje saldo. W roku dziesiątym refinansuje pozostałe saldo kredytem bankowym — z niskim LTV i kompletną historią, której bank nie może odrzucić.",
      "Dla operatora model otwiera rynek nabywców niedostępny dla klasycznej sprzedaży deweloperskiej — bez ryzyka niesprzedania portfela i z gwarantowanym przepływem miesięcznych rat przez cały czas trwania programu.",
    ],
    provide:
      "Projektujemy strukturę finansową programu, organizujemy kapitał (własny lub funduszowy), prowadzimy rekrutację uczestników i zarządzamy portfelem przez 10 lat. Obsługujemy również proces refinansowania uczestnika w roku wykupu.",
    who: "Deweloperzy z portfelem mieszkań trudnym do sprzedaży na rynku otwartym. Fundusze szukające instrumentu z regularnym kuponem i zabezpieczeniem hipotecznym. Pracodawcy zainteresowani programem mieszkaniowym dla pracowników jako benefitem niepieniężnym.",
  },
  {
    num: "04",
    title: "Program mieszkań pracowniczych",
    subtitle: "Mieszkanie jako benefit. Pracownik zostaje. Firma buduje lojalność.",
    img: "/assets/wsp-prezentacja.jpg",
    dir: "row-reverse",
    body: [
      "Deficyt pracowników w wielu branżach przemysłowych, logistycznych i usługowych ma coraz częściej charakter nie płacowy, lecz mieszkaniowy. Pracownik z zewnątrz nie przyjedzie bez mieszkania. Pracownik, który mieszka w lokalu pracodawcy — zostaje.",
      "Program łączy infrastrukturę budownictwa społecznego z potrzebami pracodawców. Firma partycypuje w kosztach budowy lub nabycia lokali, uzyskując prawo do wskazywania najemców spośród swoich pracowników. Pracownik mieszka na preferencyjnych warunkach, z opcją dojścia do własności. Model działa zarówno w formule SIM (z kredytem BGK i partycypacją pracodawcy), jak i czysto prywatnej z finansowaniem funduszowym.",
    ],
    provide:
      "Projektujemy program dopasowany do specyfiki pracodawcy i lokalizacji inwestycji. Strukturyzujemy finansowanie, obsługujemy rekrutację uczestników i zarządzamy zasobem przez cały czas trwania programu.",
    who: "Duzi pracodawcy w lokalizacjach z ograniczoną podażą mieszkań. Parki przemysłowe i strefy ekonomiczne planujące infrastrukturę mieszkaniową dla najemców. Gminy i inwestorzy budujący osiedla przy zakładach pracy.",
  },
  {
    num: "05",
    title: "Budownictwo senioralne",
    subtitle: "Mieszkanie dla seniora. Spokój dla rodziny. Przychód dla inwestora.",
    img: "/assets/senior.png",
    dir: "row",
    body: [
      "Polska starzeje się szybciej niż przybywa odpowiedniej infrastruktury mieszkaniowej dla osób starszych. Luka między domami opieki (drogimi i medycznymi) a standardowym najmem rynkowym (niedostosowanym) jest ogromna i rośnie z każdym rokiem.",
      "Budownictwo senioralne w modelu SLE to mieszkania dostosowane do potrzeb osób 60+ — bez barier architektonicznych, z usługami towarzyszącymi i systemem wsparcia — oferowane w formule długoterminowego najmu lub stopniowego dojścia do własności. Model może być realizowany przez SIM (finansowanie publiczne) lub przez prywatny fundusz nieruchomości. Popyt jest pewny i rośnie demograficznie; barierą wejścia jest wyłącznie odpowiednia struktura finansowania i operacyjna — obie dostarczamy.",
    ],
    provide:
      "Projektujemy produkt mieszkaniowy dopasowany do grupy docelowej, strukturyzujemy finansowanie publiczne lub prywatne, projektujemy model operacyjny i usługowy oraz zarządzamy portfelem.",
    who: "Inwestorzy i fundusze szukające ekspozycji na sektor silver economy. Deweloperzy z lokalizacjami i projektami odpowiednimi dla grupy 60+. Gminy planujące politykę mieszkaniową dla starzejącej się populacji.",
  },
];

// ---------- WSPÓŁPRACA: pięć obszarów ----------

export type CoopArea = {
  no: string;
  dir: "row" | "row-reverse";
  kicker: string;
  title: string;
  img: string;
  stat: { value: string; text: string };
  intro: string;
  services: { t: string; d: string }[];
};

export const coop: CoopArea[] = [
  {
    no: "01",
    dir: "row",
    kicker: "Sektor prywatny",
    title: "Twoja inwestycja. Nasz model. Publiczne finansowanie.",
    img: "/assets/wsp-umowa-contract.jpg",
    stat: { value: "9,3 mln", text: "Tylu Polaków żyje dziś w luce czynszowej. To największy niezagospodarowany rynek mieszkaniowy w Polsce — z gwarantowanym popytem i publicznym finansowaniem czekającym na prywatnego operatora." },
    intro:
      "Deweloperzy, fundusze nieruchomości i firmy budowlane rzadko myślą o budownictwie społecznym jako o naturalnym rynku dla swoich projektów — zazwyczaj dlatego, że nie wiedzą, że regulowane czynsze, kredyt BGK i granty gminne mogą razem stworzyć model finansowy lepszy niż sprzedaż detaliczna. Szczególnie gdy projekt utknął, rynek się schłodził lub portfel mieszkań czeka na kupca, którego nie ma. Przeprowadzamy inwestora przez całą ścieżkę: od pierwszej analizy po uruchomienie operacyjne.",
    services: [
      {
        t: "Analiza inwestycji pod kątem budownictwa społecznego",
        d: "Zanim zdecydujesz o modelu, musisz wiedzieć, czy Twój projekt w ogóle ma w nim sens. Oceniamy lokalizację, stan zaawansowania, strukturę własności i parametry finansowe pod kątem kwalifikowalności do programów BGK i Funduszu Dopłat. Sprawdzamy, które modele — SIM, zakup przez wynajem, program wiarygodności kredytowej, mieszkania pracownicze — pasują do Twojego projektu i jakie są realne warunki finansowe każdego z nich. Otrzymujesz konkretną rekomendację, nie ogólny raport.",
      },
      {
        t: "Modele współpracy z samorządami",
        d: "Budownictwo społeczne bez gminy nie istnieje — to gmina jest beneficjentem grantu, stroną umowy z SIM i partnerem nadającym projektowi publiczny mandat. Budujemy tę relację za Ciebie: identyfikujemy właściwą gminę, prowadzimy wstępne rozmowy, strukturyzujemy warunki współpracy i przygotowujemy umowę ramową. Deweloper nie musi rozumieć mechanizmów ustawowych — od tego jesteśmy my.",
      },
      {
        t: "Montaż finansowania projektów",
        d: "Łączymy dostępne instrumenty — kredyt BGK, grant Funduszu Dopłat, partycypację uczestników, wkład gminy i w razie potrzeby kapitał prywatnych funduszy inwestycyjnych — w jeden spójny montaż dopasowany do konkretnej inwestycji. W wybranych projektach możemy zapewnić finansowanie do 100% wartości inwestycji z kombinacji środków publicznych i prywatnych, które pozyskujemy lub wnosimy samodzielnie.",
      },
    ],
  },
  {
    no: "02",
    dir: "row-reverse",
    kicker: "Samorządy",
    title: "Zapotrzebowanie znasz. My wiemy, jak je zaspokoić — i jak za to zapłacić.",
    img: "/assets/wsp-spotkanie-stol.jpg",
    stat: { value: "4 mld zł", text: "Tyle czeka na gminy w Funduszu Dopłat w 2026 roku. Większość środków nie jest wykorzystywana — nie z braku potrzeb, lecz z braku gotowych projektów. My przynosimy projekt, finansowanie i obsługę. Gmina wskazuje potrzeby." },
    intro:
      "Gminy borykają się z tym samym problemem od lat: środki publiczne na budownictwo mieszkaniowe są dostępne, ale brakuje gotowych projektów, kompetencji operacyjnych i czasu urzędników, żeby sprawnie przeprowadzić inwestycję od pomysłu do oddania kluczy. My rozwiązujemy dokładnie ten problem.",
    services: [
      {
        t: "Analiza zapotrzebowania na lokale",
        d: "Zanim zbudujesz mieszkania, musisz wiedzieć dla kogo i jakie. Przeprowadzamy badanie zapotrzebowania mieszkaniowego uwzględniające zarówno migrację wewnętrzną — obecnych mieszkańców gminy chcących zmienić sytuację mieszkaniową — jak i migrację zewnętrzną, czyli osoby i rodziny rozważające przeniesienie się do gminy pod warunkiem dostępności odpowiednich lokali. Badamy preferencje dotyczące metrażu, lokalizacji, formy najmu i poziomu czynszu. Wynik to konkretna mapa: kto, ile, gdzie i na jakich warunkach.",
      },
      {
        t: "Kompleksowa obsługa całej inwestycji",
        d: "Gmina podejmuje decyzję o realizacji projektu i określa oczekiwaną liczbę lokali. Resztą zajmujemy się my. Planujemy inwestycję, strukturyzujemy finansowanie publiczne i prywatne, zarządzamy procesem budowlanym i oddajemy gminie uzgodnioną liczbę gotowych lokali w określonym terminie. Gmina nie angażuje własnego budżetu ponad niezbędne minimum — finansowanie pochodzi z instrumentów publicznych i kapitału Konsorcjum SLE lub funduszy, z którymi współpracujemy. Gmina zyskuje zasób mieszkaniowy. My zyskujemy projekt.",
      },
      {
        t: "Współpraca z lokalnymi pracodawcami w zakresie polityki mieszkaniowej",
        d: "Gmina i lokalny pracodawca mają wspólny interes: przyciągnąć i zatrzymać pracowników w regionie. Łączymy ich w trójstronne partnerstwo — gmina wnosi grunt, finansowanie publiczne i mandat społeczny, pracodawca gwarancję popytu i często część finansowania, a Konsorcjum SLE strukturę i obsługę operacyjną. Efekt: gmina zyskuje mieszkańców i wpływy podatkowe, pracodawca pracowników z rozwiązanym problemem mieszkaniowym, a projekt najsilniejszy argument dla BGK i Funduszu Dopłat — udokumentowany popyt, zanim wbita zostanie pierwsza łopata.",
      },
    ],
  },
  {
    no: "03",
    dir: "row",
    kicker: "Duzi pracodawcy",
    title: "Pracownik bez mieszkania nie przyjedzie. Pracownik z mieszkaniem zostaje.",
    img: "/assets/wsp-prezentacja.jpg",
    stat: { value: "47%", text: "Tyle polskich firm zgłasza poważne problemy z rotacją kadr. Każde odejście kosztuje równowartość 3–9 miesięcy wynagrodzenia. Mieszkanie jako benefit to jedyna rzecz, której nie da się skopiować kartą sportową." },
    intro:
      "Niedobory kadrowe w polskich zakładach pracy mają coraz częściej charakter nie płacowy, lecz infrastrukturalny. Szczególnie dotyczy to pracodawców zlokalizowanych poza dużymi aglomeracjami, w miejscowościach, gdzie rynek najmu prywatnego jest płytki lub nieistniejący. Mieszkanie staje się benefitem decydującym o tym, czy pracownik podejmie zatrudnienie i jak długo zostanie. Budujemy programy mieszkaniowe dla pracodawców od analizy potrzeb po oddanie kluczy — we współpracy z lokalną gminą i z dostępem do finansowania publicznego.",
    services: [
      {
        t: "Analiza potrzeb mieszkaniowych pracowników i ich rodzin",
        d: "Przeprowadzamy badanie wśród pracowników i kandydatów do pracy określające realne potrzeby mieszkaniowe: liczbę osób zainteresowanych, preferowane lokalizacje, metraże i formy najmu, gotowość do wniesienia partycypacji oraz oczekiwany poziom czynszu. Badanie daje pracodawcy twarde dane zamiast intuicji i jest pierwszym krokiem do rozmów z gminą o współpracy.",
      },
      {
        t: "Rozmowy i współpraca z lokalnymi gminami",
        d: "Program mieszkań pracowniczych wymaga partnerstwa z gminą — to gmina jest stroną systemu preferencyjnego finansowania BGK i beneficjentem grantu z Funduszu Dopłat. Prowadzimy te rozmowy jako pośrednik rozumiejący potrzeby zarówno pracodawcy, jak i samorządu. Budujemy model, w którym gmina zyskuje nowych mieszkańców i podatników, pracodawca zyskuje pracowników, a Konsorcjum SLE dostarcza projekt i finansowanie.",
      },
      {
        t: "Kompleksowa obsługa całej inwestycji",
        d: "Od decyzji o uruchomieniu programu do zasiedlenia — całość po naszej stronie. Pracodawca określa swoje oczekiwania: liczbę lokali, lokalizację, termin, poziom partycypacji. My planujemy, finansujemy, budujemy lub nabywamy lokale i zarządzamy programem przez cały czas jego trwania. Pracodawca nie wchodzi w rolę dewelopera ani zarządcy nieruchomości — zostaje przy swojej działalności podstawowej.",
      },
    ],
  },
  {
    no: "04",
    dir: "row-reverse",
    kicker: "Instytucje finansowe z impaktem społecznym",
    title: "Gotowe projekty. Certyfikowany impakt. Bezpieczna ekspozycja na polskim rynku.",
    img: "/assets/wsp-podpis-waga.jpg",
    stat: { value: "+49%", text: "O tyle wzrosły aktywa polskich funduszy ESG w 2025 roku — do poziomu 33,85 mld zł. Budownictwo społeczne łączy zabezpieczenie hipoteczne, regularny cashflow i certyfikowany impakt SDG 11. Dostarczamy gotowe projekty." },
    intro:
      "Fundusze impact investing, instytucje finansowe z mandatem ESG i podmioty wdrażające strategię CSRD szukają w Polsce ekspozycji na affordable housing — ale rzadko mają zasoby operacyjne, żeby samodzielnie identyfikować, strukturyzować i uruchamiać projekty zgodne z ich mandatem. Konsorcjum SLE jest tym zasobem.",
    services: [
      {
        t: "Gotowe projekty z impaktem społecznym",
        d: "Dostarczamy zidentyfikowane i wstępnie ustrukturyzowane projekty budownictwa społecznego gotowe do inwestycji: z lokalizacją, analizą finansową, modelem montażu i wstępnym zaangażowaniem gminy. Fundusz ocenia projekt, nie buduje go od zera. Każdy projekt jest projektowany tak, aby kwalifikował się jako impact investment zgodnie z GIIN IRIS+, SDG 11 i wymogami SFDR Art. 8 lub Art. 9.",
      },
      {
        t: "Gotowe modele społeczne we współpracy z ESG i CSRD",
        d: "Przygotowujemy pełną dokumentację impaktu społecznego: zestaw mierzalnych KPI, metodologię pomiaru, roczny framework raportowania i dane wyjściowe do sprawozdań CSRD i ESG. Instytucja finansowa wchodząca w projekt z Konsorcjum SLE otrzymuje gotowy pakiet raportowy — nie musi budować go od zera ani angażować zewnętrznych doradców ESG.",
      },
      {
        t: "Współpraca z sektorem prywatnym i publicznym",
        d: "Działamy jako łącznik między kapitałem prywatnym a strukturami publicznymi — gminami, BGK i Funduszem Dopłat. Instytucja finansowa nie musi prowadzić rozmów z samorządami ani rozumieć mechanizmów ustawowych. Wchodzi w gotową strukturę transakcyjną z jasno określonymi: poziomem finansowania, zabezpieczeniem hipotecznym, harmonogramem płatności kuponowych i mechanizmem wyjścia.",
      },
    ],
  },
  {
    no: "05",
    dir: "row",
    kicker: "Organizacje pozarządowe i sektor społeczny",
    title: "Budownictwo społeczne potrzebuje wiedzy, sieci i głosu. NGO ma wszystkie trzy.",
    img: "/assets/wsp-zebatki.jpg",
    stat: { value: "35%", text: "Tyle polskich gospodarstw domowych nie jest w stanie wynająć ani kupić odpowiedniego mieszkania bez pomocy. NGO zna tę grupę lepiej niż ktokolwiek inny. My zamieniamy tę wiedzę w projekty." },
    intro:
      "Organizacje pozarządowe działające w obszarze mieszkalnictwa, wykluczenia społecznego, polityki senioralnej i rynku pracy mają coś, czego brakuje sektorowi prywatnemu: zaufanie społeczności lokalnych, dostęp do grup docelowych i zdolność do rzecznictwa. Konsorcjum SLE chce budować z NGO partnerstwo, które zamienia tę przewagę w konkretne projekty mieszkaniowe.",
    services: [
      {
        t: "Centrum wiedzy budownictwa społecznego",
        d: "Tworzymy platformę wymiany wiedzy, doświadczeń i kontaktów dla podmiotów działających w obszarze budownictwa społecznego w Polsce. NGO, które dołącza do centrum wiedzy, zyskuje dostęp do sieci deweloperów, funduszy, samorządów i ekspertów prawnych oraz finansowych — i staje się częścią ekosystemu, który zamienia wiedzę w realizacje. Centrum wiedzy jest otwarte dla organizacji z każdego regionu Polski.",
      },
      {
        t: "Edukacja w zakresie realizacji projektów budownictwa społecznego",
        d: "System finansowania budownictwa społecznego w Polsce — BGK, Fundusz Dopłat, SIM, TBS, granty, partycypacja — jest skomplikowany i nieczytelny dla większości podmiotów, które mogłyby z niego korzystać. Prowadzimy szkolenia, warsztaty i materiały edukacyjne wyjaśniające, jak system działa, kto może z niego skorzystać i jakie są pierwsze kroki. Wiedza, którą przekazujemy, jest praktyczna i operacyjna — nie akademicka.",
      },
      {
        t: "Modele współpracy z sektorem prywatnym i publicznym",
        d: "Pomagamy NGO budować trójstronne partnerstwa: organizacja pozarządowa jako operator programu społecznego, gmina jako partner publiczny i inwestor prywatny lub fundusz jako źródło finansowania. Projektujemy struktury prawne i finansowe takich partnerstw, wskazujemy dostępne instrumenty i asystujemy przy negocjacjach. NGO nie musi rozumieć wszystkich mechanizmów finansowych — od tego jesteśmy my.",
      },
    ],
  },
];

export const roleOptions = ["Inwestor", "JST", "Fundusz / bank", "Inny"];

// ---------- Zdjęcia hero / sekcji ----------

export const photos = {
  imgWhat: "/assets/bud-osiedle-dziedziniec.jpg",
  imgRevenue: "/assets/szkic-3d-wiezowce.png",
  ctaImg: "/assets/wsp-spotkanie-biuro.jpg",
  aboutHero: img("1486325212027-8081e485255e", 1600, 900),
  finHeroSide: "/assets/bud-wiezowiec-niebo.jpg",
  modHero: "/assets/bud-osiedle-zielen.jpg",
  coopHero: "/assets/wsp-puzzle-rece.jpg",
  finFooter: "/assets/rysunek-projektowy.jpg",
  modCta: "/assets/szkic-3d-budynek.jpg",
  onasCta: "/assets/spotkanie-biznes.jpg",
  coopCta: "/assets/wsp-doradztwo-dokument.jpg",
};

// ---------- FAQ (rozmieszczone tematycznie na podstronach) ----------

export type FaqItem = { q: string; a: string };

export const faqModele: FaqItem[] = [
  {
    q: "Czym różni się SIM od TBS?",
    a: "Praktycznie niczym — SIM (Społeczna Inicjatywa Mieszkaniowa) to nowa nazwa TBS (Towarzystwo Budownictwa Społecznego) po nowelizacji ustawy z 2021 roku. Obie formy to spółki not-for-profit budujące mieszkania na wynajem z regulowanym czynszem, finansowane preferencyjnym kredytem BGK. Różnica jest przede wszystkim w możliwości szerszego udziału partnerów — SIM może współpracować z wieloma gminami jednocześnie.",
  },
  {
    q: "Dla kogo są mieszkania w SIM/TBS?",
    a: "Dla osób i rodzin, które zarabiają za dużo na klasyczne mieszkanie komunalne, ale jednocześnie zbyt mało, by bezpiecznie kupić własne lokum na kredyt albo wynajmować je długo na warunkach czysto rynkowych. To segment środka rynku — klasa pracująca, osoby na umowach B2B, młodzi pracownicy bez historii kredytowej.",
  },
  {
    q: "Ile wynosi czynsz w SIM?",
    a: "Czynsz w TBS/SIM jest ustawowo ograniczony do 4–5% wartości odtworzeniowej lokalu rocznie. W praktyce w większych miastach stawka wynosi średnio około 25 zł za m² miesięcznie. Dla mieszkania 50 m² oznacza to orientacyjnie 1 000–1 250 zł miesięcznie — znacznie mniej niż wynajem rynkowy, który za podobny lokal może kosztować 2 000–2 800 zł.",
  },
  {
    q: "Co to jest partycypacja i czy jest zwrotna?",
    a: "Partycypacja to udział w kosztach budowy lokalu mieszkalnego. Najemca albo inny uprawniony podmiot wnosi określoną kwotę, która pomaga sfinansować inwestycję, a w zamian uzyskuje określoną pozycję w systemie najmu. Partycypacja nie jest opłatą bezzwrotną — po zakończeniu najmu i wyprowadzce otrzymujesz ją z powrotem po waloryzacji. To zamrożenie kapitału, a nie jego strata.",
  },
  {
    q: "Czy można wykupić mieszkanie z SIM na własność?",
    a: "Od 1 stycznia 2022 roku najemcy z partycypacją co najmniej 20% — w dużych miastach 25% — mogą ubiegać się o najem z dojściem do własności. Po spłaceniu przez SIM kredytu inwestycyjnego masz możliwość wykupu mieszkania, a partycypacja zalicza się na poczet ceny.",
  },
  {
    q: "Czy można połączyć kredyt BGK z grantem z Funduszu Dopłat?",
    a: "Tak — w ramach realizacji jednej inwestycji mieszkaniowej można łączyć preferencyjny kredyt z programu SBC ze środkami uzyskanymi przez gminę w ramach programu BSK. To standardowy montaż finansowy, który Konsorcjum SLE strukturyzuje dla swoich klientów.",
  },
];

export const faqFinansowanie: FaqItem[] = [
  {
    q: "Czy moja inwestycja może zostać przekształcona w budownictwo społeczne?",
    a: "Zależy od stanu zaawansowania. Niedokończona budowa, budynek w stanie surowym, budynek do rewitalizacji lub adaptacji — wszystkie te scenariusze mogą kwalifikować się do finansowania BGK. Gotowy budynek mieszkalny bez planowanych prac dostosowawczych jest trudniejszy do zakwalifikowania. Pierwszym krokiem jest bezpłatna analiza wstępna, którą przeprowadzamy dla każdego projektu.",
  },
  {
    q: "Czy muszę zakładać SIM samodzielnie?",
    a: "Nie. Inwestor prywatny nie może być udziałowcem SIM — jest to zastrzeżone dla gmin i KZN. Możesz jednak wejść w projekt jako: właściciel gruntu sprzedający działkę SIM, generalny wykonawca realizujący budowę, operator platformy zarządzający portfelem lub fundusz finansujący inwestycję. Konsorcjum SLE projektuje te relacje umowne.",
  },
  {
    q: "Jak długo trwa projekt od pierwszej rozmowy do oddania lokali?",
    a: "Standardowy czas od podpisania LOI do uruchomienia środków BGK to 12–16 tygodni. Faza budowy to kolejne 18–36 miesięcy w zależności od skali projektu. Łącznie od decyzji do zasiedlenia — 2–4 lata przy nowej budowie, 6–18 miesięcy przy przejęciu istniejącego budynku do adaptacji.",
  },
  {
    q: "Ile wynosi kredyt BGK i na jakich warunkach?",
    a: "Preferencyjny kredyt BGK pokrywa do 80% kosztów przedsięwzięcia, jest oprocentowany na preferencyjnym poziomie ze stabilizacją około 2% rocznie, a okres kredytowania sięga nawet 50 lat. Udzielany jest na budowę lokali mieszkalnych na wynajem z limitowaną stawką czynszu.",
  },
  {
    q: "Czy nowa SIM bez historii kredytowej może dostać kredyt BGK?",
    a: "Od 1 stycznia 2026 roku nowo tworzone SIM-y, TBS-y i spółdzielnie, które nie mają jeszcze historii kredytowej ani dodatkowego zabezpieczenia wymaganego przez prawo bankowe, mogą uzyskać gwarancję InvestEU Komisji Europejskiej. To otwiera im drogę do preferencyjnego finansowania BGK.",
  },
  {
    q: "Jakie są dostępne środki BGK w 2026 roku?",
    a: "W 2026 roku BGK ma przeznaczone na kredyty SBC rekordowe środki w kwocie ponad 2 miliardów złotych. W poprzednich latach popyt znacząco przekraczał podaż środków — w tym roku środków powinno wystarczyć dla większości inwestorów.",
  },
];

export const faqWspolpraca: FaqItem[] = [
  {
    q: "Czy gmina musi angażować własny budżet?",
    a: "Nie musi, choć wniesienie wkładu — w formie gruntu, infrastruktury lub objęcia udziałów w SIM — wzmacnia projekt i poprawia scoring w BGK. Grant z Funduszu Dopłat wypłacany jest gminie, która następnie przekazuje go operatorowi jako udział w kosztach. Faktyczny wydatek gminy może wynosić zero, jeśli wkład zostanie pokryty wartością gruntu lub infrastruktury.",
  },
  {
    q: "Czy gmina ponosi ryzyko, jeśli projekt się nie powiedzie?",
    a: "Gmina jako beneficjent grantu z Funduszu Dopłat odpowiada za prawidłowe wydatkowanie środków przez okres 25 lat od rozliczenia kosztów. Jeśli SIM zmieni przeznaczenie lokali, gmina jest zobowiązana do zwrotu grantu z odsetkami. To ryzyko jest minimalizowane przez odpowiednią umowę z operatorem, którą Konsorcjum SLE przygotowuje standardowo.",
  },
  {
    q: "Jak długo trwa analiza zapotrzebowania na lokale w gminie?",
    a: "Standardowe badanie zapotrzebowania, obejmujące migrację wewnętrzną i zewnętrzną oraz preferencje mieszkaniowe, trwa 6–10 tygodni. Wynikiem jest gotowy raport z rekomendacją liczby, metrażu i lokalizacji lokali — bezpośrednia podstawa do złożenia wniosku o finansowanie.",
  },
];

export const faqOnas: FaqItem[] = [
  {
    q: "Czym dokładnie zajmuje się Konsorcjum SLE?",
    a: "Jesteśmy doradcą, integratorem i operatorem projektów budownictwa społecznego. Przeprowadzamy klientów przez cały proces: od analizy projektu, przez strukturyzację finansowania i relacje z gminą i BGK, po zarządzanie portfelem przez cały czas trwania programu. Nie jesteśmy deweloperem ani wykonawcą — jesteśmy partnerem, który spina interesy wszystkich stron.",
  },
  {
    q: "Czy Konsorcjum SLE może sfinansować projekt w 100%?",
    a: "W wybranych projektach spełniających nasze kryteria — tak. Łączymy instrumenty publiczne (kredyt BGK, granty, Fundusz Dopłat) z kapitałem prywatnych funduszy inwestycyjnych, do których mamy dostęp. Dokładny montaż zależy od projektu, lokalizacji i profilu inwestora. Oceniamy to na pierwszej konsultacji.",
  },
  {
    q: "Jak wygląda pierwsza konsultacja i ile kosztuje?",
    a: "Pierwsza konsultacja jest bezpłatna i trwa 45–60 minut. Oceniamy wstępnie projekt lub potrzeby klienta, wskazujemy, który model może mieć sens, i zarysowujemy możliwy montaż finansowy. Bez zobowiązań, bez dokumentacji na start.",
  },
  {
    q: "W jakich miastach działacie?",
    a: "Działamy na terenie całej Polski. Realizujemy i analizujemy projekty budownictwa społecznego niezależnie od regionu — od dużych aglomeracji po mniejsze gminy. Napisz do nas — ocenimy wykonalność Twojego projektu w Twojej lokalizacji.",
  },
];
