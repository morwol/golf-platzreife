// Golf-Platzreife Fragenkatalog
// Quellen: Offizielle Golfregeln 2023 (R&A / USGA), DGV/ÖGV Platzreife-Lehrplan,
// Etikette & Verhaltensregeln auf dem Platz.
// Aufbau: Eine gedachte 18-Loch-Runde – vom ersten Abschlag bis zum letzten Putt.
//
// Felder:
//  id          – eindeutige Nummer
//  category    – Themengebiet
//  difficulty  – 'leicht' | 'mittel' | 'schwer'
//  hole        – an welchem gedachten Loch (1–18) das Thema vorkommt
//  question    – Fragetext
//  options     – 4 Antwortmöglichkeiten
//  correct     – Index der richtigen Antwort (0–3)
//  explanation – ausführliche Erklärung

export const CATEGORIES = {
  ETIKETTE: 'Etikette',
  SICHERHEIT: 'Sicherheit',
  REGELN: 'Golfregeln',
  PLATZPFLEGE: 'Platzpflege',
  ZAEHLWEISE: 'Zählweise & Handicap',
  AUSRUESTUNG: 'Ausrüstung',
  ABLAUF: 'Spielablauf',
  BEGRIFFE: 'Begriffe',
  SPIELFORMEN: 'Spielformen',
  TURNIER: 'Turnier & Wettspiel',
}

// Zwei Prüfungsniveaus:
//  platzreife   – Grundlagen für die erste Runde
//  turnierreife – Wettspiel-/Turnierwissen (WHS, Spielformen, Match-/Zählspiel, DQ …)
export const LEVELS = {
  PLATZREIFE: 'platzreife',
  TURNIER: 'turnierreife',
}

const PLATZREIFE_QUESTIONS = [
  // ---------------------------------------------------------------- VOR DER RUNDE
  {
    id: 1,
    category: CATEGORIES.AUSRUESTUNG,
    difficulty: 'leicht',
    hole: 0,
    question: 'Wie viele Schläger darf ein Spieler laut Golfregeln während der Runde maximal in der Bag haben?',
    options: ['10 Schläger', '12 Schläger', '14 Schläger', 'Unbegrenzt'],
    correct: 2,
    explanation:
      'Regel 4.1b erlaubt höchstens 14 Schläger. Wer mit mehr Schlägern startet, kassiert eine Strafe: im Zählspiel zwei Strafschläge pro Loch, an dem der Verstoß bestand (maximal vier Strafschläge pro Runde). Man darf während der Runde keinen Schläger eines anderen Spielers ausleihen.',
  },
  {
    id: 2,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'leicht',
    hole: 0,
    question: 'Was gehört zu einem üblichen Dresscode auf dem Golfplatz?',
    options: [
      'Badehose und Flip-Flops',
      'Polohemd mit Kragen und Golfschuhe',
      'Anzug und Krawatte',
      'Es gibt keinerlei Kleiderregeln',
    ],
    correct: 1,
    explanation:
      'Auf den meisten Plätzen gilt ein gepflegter Dresscode: Hemd mit Kragen (Polohemd), eine ordentliche Hose oder Golf-Shorts und Golfschuhe (Softspikes). Jeans, Trainingsanzüge und freie Oberkörper sind in der Regel nicht erlaubt. Im Zweifel hilft ein Blick in die Clubordnung.',
  },
  {
    id: 3,
    category: CATEGORIES.ABLAUF,
    difficulty: 'leicht',
    hole: 0,
    question: 'Was bezeichnet man beim Golf als „Greenfee“?',
    options: [
      'Das Trinkgeld für den Caddie',
      'Die Gebühr für das Bespielen eines Platzes',
      'Die Strafe für ein verlorenes Grün',
      'Die Mitgliedschaft im Club',
    ],
    correct: 1,
    explanation:
      'Das Greenfee ist das Entgelt, das Gastspieler (oder Mitglieder auf fremden Plätzen) für eine Runde bezahlen. Es deckt die Nutzung des Platzes. Mitglieder des jeweiligen Clubs zahlen es auf ihrem Heimatplatz in der Regel nicht.',
  },
  {
    id: 4,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'leicht',
    hole: 0,
    question: 'Wie sollte man sich mit dem Mobiltelefon auf dem Platz verhalten?',
    options: [
      'Laut telefonieren ist völlig in Ordnung',
      'Lautlos stellen und Telefonate vermeiden bzw. diskret führen',
      'Das Telefon muss zu Hause bleiben',
      'Musik laut über Lautsprecher abspielen',
    ],
    correct: 1,
    explanation:
      'Aus Rücksicht auf die Mitspieler sollte das Handy lautlos gestellt und nicht für laute Gespräche oder Musik genutzt werden. Ein klingelndes Telefon im Rückschwung eines anderen Spielers ist ein klassischer Etikette-Verstoß. Entfernungsmesser-Apps sind dagegen meist erlaubt.',
  },

  // ---------------------------------------------------------------- LOCH 1 – ABSCHLAG
  {
    id: 5,
    category: CATEGORIES.REGELN,
    difficulty: 'leicht',
    hole: 1,
    question: 'Von wo aus muss der erste Schlag eines Lochs (der Abschlag) gespielt werden?',
    options: [
      'Beliebig irgendwo auf dem Platz',
      'Genau auf der Linie zwischen den Abschlagmarkierungen',
      'Innerhalb des Abschlagbereichs – nicht vor und höchstens zwei Schlägerlängen hinter den Markierungen',
      'Mindestens 5 Meter hinter den Markierungen',
    ],
    correct: 2,
    explanation:
      'Der Abschlagbereich (Teeing Area) ist zwei Schlägerlängen tief und wird vorne sowie seitlich von den beiden Abschlagmarkierungen begrenzt. Der Ball muss innerhalb dieses Rechtecks aufgeteet werden; der Spieler selbst darf außerhalb stehen. Spielt man von vor den Markierungen, gibt es im Zählspiel zwei Strafschläge und der Schlag muss wiederholt werden.',
  },
  {
    id: 6,
    category: CATEGORIES.BEGRIFFE,
    difficulty: 'leicht',
    hole: 1,
    question: 'Was bedeutet „Par“ bei einem Golfloch?',
    options: [
      'Die Anzahl der Schläge, die ein guter Spieler für das Loch benötigen sollte',
      'Die Länge des Lochs in Metern',
      'Die Nummer des Lochs',
      'Ein anderes Wort für das Grün',
    ],
    correct: 0,
    explanation:
      'Par ist die festgelegte Soll-Schlagzahl für ein Loch, die ein sehr gutes Spiel voraussetzt (inklusive zwei Putts auf dem Grün). Übliche Werte sind Par 3, Par 4 und Par 5. Die Summe aller Pars ergibt das Par des Platzes – meist 70 bis 72.',
  },
  {
    id: 7,
    category: CATEGORIES.ABLAUF,
    difficulty: 'mittel',
    hole: 1,
    question: 'Wer hat am ersten Abschlag und danach das Recht, zuerst zu spielen („die Ehre“)?',
    options: [
      'Immer der älteste Spieler',
      'Am 1. Loch nach Auslosung/Startliste, danach der Spieler mit dem besten Ergebnis am vorherigen Loch',
      'Immer der Spieler mit dem höchsten Handicap',
      'Wer den teuersten Schläger besitzt',
    ],
    correct: 1,
    explanation:
      'Am ersten Loch wird die Reihenfolge ausgelost oder durch die Startliste festgelegt. Danach hat „die Ehre“, wer am vorangegangenen Loch das beste Ergebnis erzielt hat. Innerhalb des Spiels zum Loch spielt sonst der, dessen Ball am weitesten vom Loch entfernt liegt. Im Zählspiel ist „Ready Golf“ (spielen, wer bereit ist) zur Beschleunigung ausdrücklich erwünscht.',
  },

  // ---------------------------------------------------------------- SICHERHEIT
  {
    id: 8,
    category: CATEGORIES.SICHERHEIT,
    difficulty: 'leicht',
    hole: 1,
    question: 'Was ruft man laut, wenn ein geschlagener Ball auf andere Personen zufliegt?',
    options: ['„Achtung Loch!“', '„Fore!“', '„Birdie!“', '„Stopp!“'],
    correct: 1,
    explanation:
      'Der internationale Warnruf lautet „Fore!“ (laut und deutlich). Er warnt Personen, dass ein Ball auf sie zufliegen könnte, sodass sie sich schützen (Kopf abdecken, wegdrehen) können. Wer einen solchen Ruf hört, sollte nicht hinschauen, sondern sich ducken und den Kopf mit den Armen schützen.',
  },
  {
    id: 9,
    category: CATEGORIES.SICHERHEIT,
    difficulty: 'leicht',
    hole: 1,
    question: 'Wann darf man seinen Schlag ausführen, wenn eine Gruppe vor einem spielt?',
    options: [
      'Sofort, die anderen müssen selbst aufpassen',
      'Erst wenn die vordere Gruppe außer Reichweite ist',
      'Nur wenn man laut „Fore“ vorher ruft',
      'Sobald man ungeduldig wird',
    ],
    correct: 1,
    explanation:
      'Sicherheit geht vor: Man schlägt erst, wenn die vorausspielende Gruppe sicher außer Reichweite ist. Auch beim Probeschwung und beim Stand sollte man darauf achten, niemanden zu gefährden und niemanden anzuspielen, der sich seitlich oder vor einem aufhält.',
  },
  {
    id: 10,
    category: CATEGORIES.SICHERHEIT,
    difficulty: 'mittel',
    hole: 2,
    question: 'Wie verhält man sich richtig, während ein Mitspieler zum Schlag ausholt?',
    options: [
      'Direkt hinter ihm in seiner Sichtlinie stehen',
      'Ruhig und still seitlich außerhalb der Blick- und Schwunglinie stehen',
      'Schnell über das Grün laufen',
      'Mit dem Schläger Probeschwünge direkt daneben machen',
    ],
    correct: 1,
    explanation:
      'Man steht ruhig, still und außerhalb der Sicht- und Schwunglinie – idealerweise seitlich, nie direkt hinter dem Ball oder dem Spieler, und nie im potenziellen Schwungbereich. Bewegung, Geräusche oder Schatten auf der Spiellinie lenken ab und können gefährlich sein.',
  },

  // ---------------------------------------------------------------- VERLORENER BALL / AUS
  {
    id: 11,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 2,
    question: 'Wie lange darf nach den Regeln von 2023 maximal nach einem Ball gesucht werden, bevor er als verloren gilt?',
    options: ['1 Minute', '3 Minuten', '5 Minuten', '10 Minuten'],
    correct: 1,
    explanation:
      'Seit der Regelreform 2019 (in den Regeln 2023 unverändert) beträgt die Suchzeit nur noch 3 Minuten (vorher 5). Wird der Ball in dieser Zeit nicht gefunden und identifiziert, ist er verloren. Dann muss mit Schlag- und Distanzverlust weitergespielt werden – das beschleunigt das Spiel.',
  },
  {
    id: 12,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 2,
    question: 'Welche Strafe gilt für einen verlorenen Ball oder einen Ball im Aus (Out of Bounds)?',
    options: [
      'Kein Strafschlag, einfach weiterspielen',
      'Schlag- und Distanzverlust: ein Strafschlag, erneut vom vorherigen Ort spielen',
      'Zwei Strafschläge und Drop am Fundort',
      'Das Loch ist automatisch verloren',
    ],
    correct: 1,
    explanation:
      'Bei verlorenem Ball oder Ball im Aus gilt „Schlag- und Distanzverlust“ (Regel 18.2): ein Strafschlag, und der nächste Ball wird so nah wie möglich von der Stelle des letzten Schlags gespielt. Beispiel: War es der Abschlag, teet man erneut auf – und spielt dann den dritten Schlag.',
  },
  {
    id: 13,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 2,
    question: 'Du vermutest, dein Ball könnte verloren oder im Aus sein. Was solltest du tun, um Zeit zu sparen?',
    options: [
      'Einfach einen neuen Ball ohne Ansage fallen lassen',
      'Einen provisorischen Ball spielen und dies vorher klar ankündigen',
      'Sofort zum nächsten Loch weitergehen',
      'Den Ball eines Mitspielers benutzen',
    ],
    correct: 1,
    explanation:
      'Vermutet man, der Ball sei verloren oder im Aus, spielt man einen provisorischen Ball (Regel 18.3). Wichtig: Man muss vorher klar ansagen, dass es ein „provisorischer Ball“ ist – sonst wird er automatisch zum Ball im Spiel. Findet man den Originalball innerhalb von 3 Minuten in Ordnung, spielt man mit diesem straffrei weiter und hebt den provisorischen Ball auf.',
  },

  // ---------------------------------------------------------------- STRAFGEBIET / WASSER
  {
    id: 14,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 3,
    question: 'Wie sind Strafgebiete (z. B. Wasserhindernisse) auf dem Platz markiert?',
    options: [
      'Weiße Pfähle/Linien',
      'Gelbe oder rote Pfähle/Linien',
      'Blaue Pfähle/Linien',
      'Gar nicht markiert',
    ],
    correct: 1,
    explanation:
      'Strafgebiete sind durch gelbe (Regel: Linie der Flagge) oder rote (zusätzlich seitliche Erleichterung) Pfähle bzw. Linien gekennzeichnet. Weiße Pfähle markieren dagegen das Aus (Out of Bounds), blaue oft Boden in Ausbesserung. Im Strafgebiet darf man den Ball übrigens straffrei so spielen, wie er liegt.',
  },
  {
    id: 15,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 3,
    question: 'Dein Ball liegt in einem gelb markierten Strafgebiet und du willst nicht aus dem Wasser spielen. Wie viele Strafschläge kostet die Erleichterung?',
    options: ['Kein Strafschlag', 'Ein Strafschlag', 'Zwei Strafschläge', 'Drei Strafschläge'],
    correct: 1,
    explanation:
      'Erleichterung aus dem Strafgebiet kostet einen Strafschlag (Regel 17). Bei einem gelben Strafgebiet hat man zwei Möglichkeiten: (1) Schlag- und Distanzverlust oder (2) auf der Linie zwischen Fahne und dem Punkt, an dem der Ball die Grenze überquerte, beliebig weit zurück droppen. Rote Strafgebiete bieten zusätzlich die seitliche Erleichterung (zwei Schlägerlängen).',
  },
  {
    id: 16,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 3,
    question: 'Aus welcher Höhe muss ein Ball seit den Regeln 2019/2023 korrekt fallen gelassen (gedroppt) werden?',
    options: ['Aus Schulterhöhe', 'Aus Kniehöhe', 'Direkt vom Boden gelegt', 'Über dem Kopf'],
    correct: 1,
    explanation:
      'Seit 2019 wird aus Kniehöhe gedroppt (vorher Schulterhöhe). „Kniehöhe“ meint die Höhe des Knies in aufrechter Standposition. Der Ball muss in den richtigen Erleichterungsbereich (Dropzone) fallen und dort zur Ruhe kommen; rollt er heraus, wird erneut gedroppt.',
  },

  // ---------------------------------------------------------------- BUNKER
  {
    id: 17,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 4,
    question: 'Was ist im Bunker vor dem Schlag NICHT erlaubt?',
    options: [
      'Den Sand mit dem Schläger berühren bzw. den Schläger im Probeschwung aufsetzen',
      'Einen losen Stein entfernen',
      'Sich im Sand fest eingraben für sicheren Stand',
      'Den Ball anschauen',
    ],
    correct: 0,
    explanation:
      'Im Bunker darf man den Sand vor dem Schlag nicht testen oder den Schläger direkt hinter/vor dem Ball aufsetzen (Regel 12.2). Das kostet zwei Strafschläge. Seit 2019 darf man jedoch lose hinderliche Naturstoffe (Steine, Blätter) entfernen und den Schläger zum Hinlegen der Ausrüstung benutzen. Einen festen Stand darf man immer eingraben.',
  },
  {
    id: 18,
    category: CATEGORIES.PLATZPFLEGE,
    difficulty: 'leicht',
    hole: 4,
    question: 'Was musst du tun, nachdem du einen Bunker gespielt hast?',
    options: [
      'Nichts, das macht der Greenkeeper',
      'Den Bunker mit dem Rechen (Harke) glatt ziehen',
      'Den Sand nass machen',
      'Einen neuen Ball im Bunker liegen lassen',
    ],
    correct: 1,
    explanation:
      'Nach dem Schlag glättet man seine Fußspuren und das Schlagloch mit dem Rechen, damit nachfolgende Spieler faire Bedingungen vorfinden. Man verlässt den Bunker an der flachsten Stelle (nahe am Ball) und legt den Rechen anschließend ordentlich ab – das ist gelebte Platzpflege und Etikette.',
  },
  {
    id: 19,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 4,
    question: 'Dein Ball liegt unspielbar im Bunker. Welche zusätzliche Option hast du dort gegen Strafe?',
    options: [
      'Es gibt im Bunker keine Erleichterung',
      'Für zwei Strafschläge außerhalb des Bunkers auf der Linie zur Fahne droppen',
      'Den Ball einfach herauswerfen, straffrei',
      'Das Loch abbrechen',
    ],
    correct: 1,
    explanation:
      'Für „unspielbarer Ball“ (Regel 19) hat man im Bunker grundsätzlich die drei üblichen Optionen für je einen Strafschlag – allerdings muss man dabei im Bunker bleiben. Zusätzlich gibt es eine Sonderoption: Für zwei Strafschläge darf man außerhalb des Bunkers auf der Linie Fahne–Ball nach hinten droppen. So kommt man notfalls aus dem Sand heraus.',
  },

  // ---------------------------------------------------------------- HINDERNISSE / ERLEICHTERUNG
  {
    id: 20,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 5,
    question: 'Dein Ball liegt auf einem befestigten Cart-Weg (unbewegliches Hemmnis). Was gilt?',
    options: [
      'Du musst vom Weg spielen, wie der Ball liegt',
      'Straffreie Erleichterung: nächstgelegener Punkt ohne Behinderung plus eine Schlägerlänge',
      'Ein Strafschlag und Drop',
      'Der Ball ist im Aus',
    ],
    correct: 1,
    explanation:
      'Befestigte Wege, Sprinklerdeckel oder Schutzhütten sind unbewegliche Hemmnisse. Man erhält straffreie Erleichterung (Regel 16.1): Man bestimmt den nächstgelegenen Punkt vollständiger Erleichterung (nicht näher zum Loch) und droppt innerhalb einer Schlägerlänge davon. Man darf alternativ aber auch so spielen, wie der Ball liegt.',
  },
  {
    id: 21,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 5,
    question: 'Ein Rechen, eine Flasche oder ein Stück Abfall liegt direkt hinter deinem Ball. Was ist das und was darfst du tun?',
    options: [
      'Ein bewegliches Hemmnis – du darfst es straffrei entfernen',
      'Ein Strafgebiet – ein Strafschlag',
      'Aus – Ball verloren',
      'Du darfst nichts berühren',
    ],
    correct: 0,
    explanation:
      'Rechen, Flaschen, Abfall, Tücher oder Markierungspfähle (sofern nicht fest) sind bewegliche Hemmnisse (Regel 15.2). Sie dürfen überall straffrei entfernt werden. Bewegt sich der Ball dabei zufällig, wird er ohne Strafe zurückgelegt. Natürliche lose Stoffe wie Blätter oder Steine sind dagegen „lose hinderliche Naturstoffe“.',
  },
  {
    id: 22,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 5,
    question: 'Dürfen lose Blätter, Zweige oder Steine („lose hinderliche Naturstoffe“) neben dem Ball entfernt werden?',
    options: [
      'Nein, niemals',
      'Ja, überall – aber wenn sich der Ball dadurch bewegt, droht (außer auf dem Grün/Abschlag) ein Strafschlag',
      'Nur im Bunker',
      'Nur auf dem Grün',
    ],
    correct: 1,
    explanation:
      'Seit 2019 dürfen lose hinderliche Naturstoffe überall auf dem Platz entfernt werden, auch im Bunker und Strafgebiet (Regel 15.1). Vorsicht: Bewegt sich der Ball durch das Entfernen, gibt es im Gelände einen Strafschlag und der Ball muss zurückgelegt werden. Auf dem Grün und im Abschlagbereich ist das Bewegen des Balls dabei straffrei.',
  },

  // ---------------------------------------------------------------- LOCH 6 – FAIRWAY / DIVOTS
  {
    id: 23,
    category: CATEGORIES.PLATZPFLEGE,
    difficulty: 'leicht',
    hole: 6,
    question: 'Was ist ein „Divot“ und wie geht man damit um?',
    options: [
      'Ein Vogel – man verscheucht ihn',
      'Ein herausgeschlagenes Rasenstück – man legt es zurück oder füllt das Loch mit Sandmischung',
      'Ein Schlägertyp',
      'Eine Strafe',
    ],
    correct: 1,
    explanation:
      'Ein Divot ist das Rasenstück, das beim Schlag (vor allem mit Eisen) herausgeschlagen wird. Zur Platzpflege legt man es zurück und tritt es an oder füllt das Loch mit der bereitgestellten Sand-Samen-Mischung. So kann der Rasen schnell nachwachsen und das Fairway bleibt in gutem Zustand.',
  },
  {
    id: 24,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 6,
    question: 'Dein Ball ist im Gelände (nicht im Sand) tief in den weichen Boden eingeschlagen („eingebetteter Ball“). Was gilt?',
    options: [
      'Du musst ihn spielen, wie er liegt',
      'Straffreie Erleichterung – Drop direkt hinter der Einschlagstelle',
      'Ein Strafschlag',
      'Der Ball ist verloren',
    ],
    correct: 1,
    explanation:
      'Ein im eigenen Einschlagloch eingebetteter Ball im „allgemeinen Gelände“ berechtigt zu straffreier Erleichterung (Regel 16.3). Man droppt innerhalb einer Schlägerlänge hinter der Einschlagstelle, nicht näher zum Loch. Wichtig: Diese Regel gilt nicht für einen Ball, der im Sand außerhalb des kurzen Grases eingebettet liegt.',
  },

  // ---------------------------------------------------------------- BEGRIFFE / SCORING
  {
    id: 25,
    category: CATEGORIES.BEGRIFFE,
    difficulty: 'leicht',
    hole: 7,
    question: 'Was bedeutet „Birdie“?',
    options: [
      'Ein Schlag über Par',
      'Ein Schlag unter Par am Loch',
      'Das Einlochen mit dem ersten Schlag',
      'Par gespielt',
    ],
    correct: 1,
    explanation:
      'Ein Birdie ist ein Ergebnis von einem Schlag unter Par (z. B. 3 Schläge an einem Par 4). Weitere Begriffe: Eagle = 2 unter Par, Albatros = 3 unter Par, Bogey = 1 über Par, Doppelbogey = 2 über Par. Ein „Hole-in-One“ (Ass) ist das Einlochen mit dem Abschlag.',
  },
  {
    id: 26,
    category: CATEGORIES.BEGRIFFE,
    difficulty: 'leicht',
    hole: 7,
    question: 'Wie nennt man ein Ergebnis von einem Schlag ÜBER Par an einem Loch?',
    options: ['Eagle', 'Birdie', 'Bogey', 'Albatros'],
    correct: 2,
    explanation:
      'Ein „Bogey“ ist ein Schlag über Par (z. B. 5 an einem Par 4). Zwei über Par heißt „Doppelbogey“, drei über Par „Triple Bogey“. Die Begriffe unter Par sind Birdie (−1), Eagle (−2) und Albatros (−3). Diese Vokabeln gehören zum golferischen Grundwortschatz.',
  },
  {
    id: 27,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'mittel',
    hole: 7,
    question: 'Was zählt nach den Regeln als „Schlag“?',
    options: [
      'Nur ein Schlag, der den Ball trifft',
      'Jede Vorwärtsbewegung des Schlägers mit der Absicht, den Ball zu treffen',
      'Nur Schläge auf dem Fairway',
      'Nur Putts auf dem Grün',
    ],
    correct: 1,
    explanation:
      'Ein Schlag ist die Vorwärtsbewegung des Schlägers in der Absicht, den Ball zu treffen (Regel-Definition „Stroke“). Trifft man den Ball gar nicht (Luftschlag/Fehlschwung), zählt dies trotzdem als Schlag, weil die Absicht bestand. Ein reiner Probeschwung ohne Treffabsicht zählt dagegen nicht.',
  },
  {
    id: 28,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'mittel',
    hole: 8,
    question: 'Du holst aus, willst den Ball treffen, verfehlst ihn aber komplett (Luftschlag). Was nun?',
    options: [
      'Nichts passiert, einfach nochmal',
      'Der Versuch zählt als ein Schlag',
      'Ein Strafschlag zusätzlich',
      'Das Loch ist verloren',
    ],
    correct: 1,
    explanation:
      'Ein „Luftschlag“ (Air Shot/Fehlschwung) zählt als regulärer Schlag, sofern die Absicht bestand, den Ball zu treffen – auch wenn der Ball gar nicht berührt wurde. Der Ball bleibt liegen, wo er ist, und der nächste Versuch ist dann der zweite Schlag. Ehrlich mitzählen gehört zum fairen Golf.',
  },
  {
    id: 29,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'schwer',
    hole: 8,
    question: 'Bei einem Stableford-Wettspiel: Wie viele Punkte gibt es netto für ein „Par“ (Nettoergebnis gleich Loch-Par)?',
    options: ['0 Punkte', '1 Punkt', '2 Punkte', '4 Punkte'],
    correct: 2,
    explanation:
      'Im Stableford-Zählspiel gibt es für ein Netto-Par 2 Punkte. Ein Netto-Bogey bringt 1 Punkt, ein Netto-Birdie 3 Punkte, ein Netto-Eagle 4 Punkte. Für netto Doppelbogey oder schlechter gibt es 0 Punkte – dann hebt man den Ball auf und geht zum nächsten Loch (das beschleunigt das Spiel). Die meisten Platzreife-Prüfungen werden nach Stableford gespielt.',
  },

  // ---------------------------------------------------------------- HANDICAP / PLATZREIFE
  {
    id: 30,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'mittel',
    hole: 8,
    question: 'Was beschreibt das „Handicap“ (Vorgabe) eines Golfers?',
    options: [
      'Die Anzahl der Schläger in der Bag',
      'Eine Maßzahl für das Spielstärke-Niveau, die einen fairen Vergleich ermöglicht',
      'Die Körpergröße',
      'Die Platznummer',
    ],
    correct: 1,
    explanation:
      'Das Handicap (Handicap-Index) ist eine Maßzahl für die Spielstärke. Es erlaubt Spielern unterschiedlicher Könnensstufen, fair gegeneinander anzutreten, indem schwächeren Spielern Vorgabeschläge gewährt werden. Je niedriger das Handicap, desto besser der Spieler. Ein Scratch-Golfer hat Handicap 0.',
  },
  {
    id: 31,
    category: CATEGORIES.ABLAUF,
    difficulty: 'mittel',
    hole: 9,
    question: 'Was ist der Zweck der „Platzreife“ (Platzerlaubnis)?',
    options: [
      'Ein Pokal für Turniersieger',
      'Der Nachweis, dass man Regeln, Etikette und Spielfähigkeit für eine Runde beherrscht',
      'Eine Versicherung',
      'Die Erlaubnis, einen Golfwagen zu fahren',
    ],
    correct: 1,
    explanation:
      'Die Platzreife (in manchen Ländern „Platzerlaubnis“) bestätigt, dass ein Spieler die Golfregeln, die Etikette und ein Mindestmaß an Spielfähigkeit beherrscht, um sicher und zügig auf dem Platz zu spielen, ohne andere zu gefährden oder den Platz zu beschädigen. Sie ist meist Voraussetzung, um auf Plätzen spielen oder Greenfee buchen zu dürfen.',
  },

  // ---------------------------------------------------------------- ETIKETTE / SPIELTEMPO
  {
    id: 32,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'mittel',
    hole: 9,
    question: 'Eure Gruppe spielt langsam und hält eine schnellere Gruppe hinter euch auf. Was ist korrekt?',
    options: [
      'Die hintere Gruppe muss warten',
      'Die schnellere Gruppe an einer geeigneten Stelle durchspielen lassen',
      'Schneller, aber unsicher spielen',
      'Ein Loch überspringen',
    ],
    correct: 1,
    explanation:
      'Hält man eine schnellere Gruppe auf oder ist eine Lücke zur vorausspielenden Gruppe entstanden, bittet man die nachfolgende Gruppe an einer sicheren Stelle (z. B. einem freien Grün) zum Durchspielen. Ein angemessenes Spieltempo und „Anschluss halten“ zur Gruppe davor ist zentrale Golf-Etikette.',
  },
  {
    id: 33,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'mittel',
    hole: 9,
    question: 'Wie kann man als Spieler aktiv das Spieltempo hochhalten („Ready Golf“)?',
    options: [
      'Erst zum Ball gehen, wenn man dran ist, und dann lange überlegen',
      'Vorausdenken, Schläger bereithalten und spielen, sobald man sicher bereit ist',
      'Nach jedem Schlag eine Pause machen',
      'Immer warten, bis alle anderen fertig sind',
    ],
    correct: 1,
    explanation:
      '„Ready Golf“ bedeutet: spielen, wer bereit ist – sofern es sicher ist und niemanden stört. Man bereitet seinen Schlag vor, während andere noch gehen, wählt den Schläger frühzeitig, legt die Bag günstig zum nächsten Loch ab und schreibt Ergebnisse erst am nächsten Abschlag auf. Pro Schlag gelten rund 40 Sekunden als Richtwert.',
  },

  // ---------------------------------------------------------------- LOCH 10 – BALL BEWEGT
  {
    id: 34,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 10,
    question: 'Dein ruhender Ball im Gelände wird durch Wind weiterbewegt. Wie spielst du weiter?',
    options: [
      'Ball zurücklegen, ein Strafschlag',
      'Ball von der neuen Stelle spielen, straffrei',
      'Ball zurücklegen, straffrei',
      'Loch verloren',
    ],
    correct: 1,
    explanation:
      'Wird ein ruhender Ball durch Naturkräfte wie Wind oder Wasser bewegt, spielt man ihn straffrei von der neuen Stelle weiter (Regel 9.3). Anders ist es, wenn der Ball auf dem Grün lag und bereits aufgenommen und zurückgelegt worden war – dann wird er zurückgelegt. Bewegt ein Spieler den Ball dagegen versehentlich selbst, wird er meist straffrei zurückgelegt.',
  },
  {
    id: 35,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 10,
    question: 'Du spielst versehentlich den Ball eines Mitspielers (falscher Ball) im Zählspiel. Was passiert?',
    options: [
      'Kein Problem, einfach weiterspielen',
      'Zwei Strafschläge, der Fehler muss mit dem richtigen Ball korrigiert werden',
      'Ein Strafschlag',
      'Der Mitspieler bekommt die Strafe',
    ],
    correct: 1,
    explanation:
      'Das Spielen eines falschen Balls kostet im Zählspiel zwei Strafschläge (Regel 6.3c). Der Fehler muss korrigiert werden, indem man den richtigen Ball spielt; die Schläge mit dem falschen Ball zählen nicht. Deshalb markiert man seinen Ball individuell (z. B. mit Punkten), um ihn eindeutig identifizieren zu können.',
  },

  // ---------------------------------------------------------------- LOCH 11 – GRÜN
  {
    id: 36,
    category: CATEGORIES.REGELN,
    difficulty: 'leicht',
    hole: 11,
    question: 'Wie hebt man auf dem Grün korrekt seinen Ball auf, etwa um ihn zu reinigen?',
    options: [
      'Einfach aufheben, ganz egal wo',
      'Zuerst direkt hinter dem Ball markieren (z. B. mit Münze/Marker), dann aufnehmen',
      'Den Ball wegrollen lassen',
      'Auf dem Grün darf man den Ball nie anfassen',
    ],
    correct: 1,
    explanation:
      'Auf dem Grün darf man den Ball aufnehmen und reinigen – vorher muss seine Lage markiert werden, üblicherweise mit einem Ballmarker oder einer Münze direkt hinter dem Ball (Regel 14.1). Danach legt man ihn exakt an dieselbe Stelle zurück. Vergisst man das Markieren vor dem Aufheben, gibt es einen Strafschlag.',
  },
  {
    id: 37,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 11,
    question: 'Darfst du nach den Regeln 2023 die Fahne im Loch lassen, während du auf dem Grün puttest?',
    options: [
      'Nein, das gibt einen Strafschlag',
      'Ja, du darfst die Fahne stecken lassen – auch wenn der Ball sie trifft, ist es straffrei',
      'Nur bei langen Putts',
      'Nur mit Erlaubnis der Mitspieler',
    ],
    correct: 1,
    explanation:
      'Seit 2019 darf man die Fahne beim Putten im Loch lassen (Regel 13.2). Trifft der Ball die steckende Fahne, gibt es keine Strafe. Das beschleunigt das Spiel, weil niemand die Fahne bedienen muss. Man darf sie aber weiterhin herausnehmen oder bedienen lassen – ganz nach Vorliebe.',
  },
  {
    id: 38,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'mittel',
    hole: 11,
    question: 'Worauf achtest du beim Gehen auf dem Grün besonders?',
    options: [
      'Man darf überall kräftig auftreten',
      'Nicht auf die Puttlinie der Mitspieler treten und Schäden vermeiden',
      'Mit den Schlägern über das Grün schleifen',
      'Auf dem Grün rennen',
    ],
    correct: 1,
    explanation:
      'Das Grün ist die empfindlichste Fläche des Platzes. Man tritt nicht auf die gedachte Puttlinie der Mitspieler (zwischen deren Ball und Loch), vermeidet Schleifspuren und setzt die Bag bzw. das Cart nie auf dem Grün ab. Rücksicht hält das Grün eben und fair für alle.',
  },
  {
    id: 39,
    category: CATEGORIES.PLATZPFLEGE,
    difficulty: 'leicht',
    hole: 11,
    question: 'Was ist eine „Pitchmark“ (Pitchmarke) und was tust du damit?',
    options: [
      'Ein Schläger – man putzt ihn',
      'Der Einschlagkrater des Balls auf dem Grün – man bügelt ihn mit der Pitchgabel aus',
      'Eine Markierung für das Aus',
      'Ein Schlagfehler',
    ],
    correct: 1,
    explanation:
      'Eine Pitchmark ist die Vertiefung, die der einschlagende Ball im weichen Grün hinterlässt. Mit einer Pitchgabel arbeitet man den Rasen vorsichtig von außen zur Mitte und tippt ihn anschließend glatt – nicht hochhebeln. Ausgebesserte Pitchmarks wachsen in Tagen zu, unbehandelte hinterlassen wochenlang braune Stellen. Gute Spieler reparieren auch fremde Marken.',
  },
  {
    id: 40,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 12,
    question: 'Dein Ball bewegt sich auf dem Grün versehentlich, als du ihn schon markiert und zurückgelegt hattest. Was tust du?',
    options: [
      'Von der neuen Stelle spielen',
      'Den Ball straffrei an die ursprüngliche Stelle zurücklegen',
      'Einen Strafschlag nehmen',
      'Neu droppen',
    ],
    correct: 1,
    explanation:
      'Wird der Ball auf dem Grün versehentlich (z. B. durch den Spieler oder Wind nach dem Zurücklegen) bewegt, wird er straffrei zurückgelegt (Regel 13.1d). Auf dem Grün gilt diese besonders milde Regel – versehentliches Bewegen des eigenen Balls oder Markers ist hier straffrei. Man legt einfach an die markierte Stelle zurück.',
  },
  {
    id: 41,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 12,
    question: 'Darfst du auf dem Grün Schäden wie Schuhspuren (Spikemarks) oder alte Löcher vor dem Putt reparieren?',
    options: [
      'Nein, nichts darf berührt werden',
      'Ja, fast alle Schäden auf dem Grün dürfen ausgebessert werden',
      'Nur die Pitchmarke des eigenen Balls',
      'Nur mit Zustimmung des Platzwarts',
    ],
    correct: 1,
    explanation:
      'Seit 2019 darf man nahezu alle Schäden auf dem Grün reparieren – Pitchmarks, Schuh-/Spikespuren, alte Lochpfropfen, Tierspuren (Regel 13.1c). Man darf dabei jedoch nicht den Untergrund „verbessern“, um sich einen Vorteil zu verschaffen, und keine natürlichen Unebenheiten (Maserung, normale Wellen) einebnen.',
  },

  // ---------------------------------------------------------------- LOCH 13 – SPEZIALFÄLLE
  {
    id: 42,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 13,
    question: 'Beim Putten triffst du den Ball versehentlich zweimal mit einem Schwung (Doppelschlag). Wie wird gewertet?',
    options: [
      'Zwei Schläge plus Strafschlag',
      'Es zählt nur als ein Schlag, ohne Strafe',
      'Loch verloren',
      'Der Putt muss wiederholt werden',
    ],
    correct: 1,
    explanation:
      'Seit 2019 zählt ein versehentlicher Doppelschlag nur als ein einziger Schlag und ist straffrei (Regel 10.1a). Früher gab es dafür einen zusätzlichen Strafschlag. Der Ball wird einfach von dort weitergespielt, wo er zur Ruhe kommt.',
  },
  {
    id: 43,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 13,
    question: 'Dein Schlag aus dem Rough prallt versehentlich an deinem eigenen Fuß oder deiner Bag ab. Welche Strafe?',
    options: [
      'Zwei Strafschläge',
      'Ein Strafschlag',
      'Keine Strafe – der Ball wird gespielt, wie er liegt',
      'Der Schlag muss wiederholt werden',
    ],
    correct: 2,
    explanation:
      'Trifft der Ball nach dem Schlag zufällig den Spieler, seinen Caddie oder seine Ausrüstung, gibt es seit 2019 keine Strafe (Regel 11.1). Der Ball wird gespielt, wie er dann liegt. Früher kostete das einen Strafschlag. Absichtliches Ablenken bleibt natürlich regelwidrig.',
  },
  {
    id: 44,
    category: CATEGORIES.AUSRUESTUNG,
    difficulty: 'mittel',
    hole: 13,
    question: 'Sind elektronische Entfernungsmesser (z. B. Laser, GPS-Uhr) bei einer normalen Runde erlaubt?',
    options: [
      'Nein, immer verboten',
      'Ja, reine Entfernungsmessung ist erlaubt, sofern keine Platzregel es untersagt',
      'Nur für Profis',
      'Nur nachts',
    ],
    correct: 1,
    explanation:
      'Seit 2019 ist das reine Messen von Entfernungen mit Lasern oder GPS-Geräten standardmäßig erlaubt (Regel 4.3). Verboten bleiben Zusatzfunktionen wie das Messen von Höhenunterschieden (Gefälle) oder Windempfehlungen, sofern aktiviert. Eine örtliche Platzregel kann Entfernungsmesser ganz untersagen.',
  },

  // ---------------------------------------------------------------- LOCH 14 – UNSPIELBAR / DROP
  {
    id: 45,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 14,
    question: 'Du erklärst deinen Ball für „unspielbar“ (außerhalb von Strafgebieten). Wie viele straffreie Optionen hast du – und was kostet es?',
    options: [
      'Eine Option, straffrei',
      'Drei Optionen, je ein Strafschlag',
      'Drei Optionen, straffrei',
      'Keine Option',
    ],
    correct: 1,
    explanation:
      'Einen Ball für unspielbar zu erklären, ist überall außer im Strafgebiet möglich und kostet einen Strafschlag (Regel 19). Es gibt drei Optionen: (1) Schlag- und Distanzverlust, (2) auf der Linie Fahne–Ball nach hinten droppen (beliebig weit), (3) seitlich innerhalb von zwei Schlägerlängen droppen, nicht näher zum Loch. Der Spieler entscheidet allein, ob ein Ball unspielbar ist.',
  },
  {
    id: 46,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 14,
    question: 'Womit misst man eine „Schlägerlänge“ beim Festlegen eines Erleichterungsbereichs?',
    options: [
      'Mit dem Putter',
      'Mit dem längsten Schläger der Bag außer dem Putter (in der Regel dem Driver)',
      'Mit einem Maßband, genau 1 Meter',
      'Mit dem Schläger, mit dem man als Nächstes spielt',
    ],
    correct: 1,
    explanation:
      'Als Maß für den Erleichterungsbereich gilt die Länge des längsten Schlägers der Bag außer dem Putter – das ist üblicherweise der Driver (Regel-Definition „Schlägerlänge“). Dieses Maß ist für jeden Spieler fix und wird für ein und zwei Schlägerlängen verwendet, z. B. bei Hemmnissen oder unspielbarem Ball.',
  },

  // ---------------------------------------------------------------- LOCH 15 – BODEN IN AUSBESSERUNG
  {
    id: 47,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 15,
    question: 'Dein Ball liegt in „Boden in Ausbesserung“ (oft blau markiert / mit GUR gekennzeichnet). Was gilt?',
    options: [
      'Du musst spielen, wie der Ball liegt',
      'Straffreie Erleichterung – nächstgelegener Punkt vollständiger Erleichterung plus eine Schlägerlänge',
      'Ein Strafschlag und Drop',
      'Der Ball ist im Aus',
    ],
    correct: 1,
    explanation:
      'Boden in Ausbesserung (Ground Under Repair, GUR) ist eine „abnormale Platzverhältnisse“-Zone und berechtigt zu straffreier Erleichterung (Regel 16.1). Man bestimmt den nächstgelegenen Punkt vollständiger Erleichterung (nicht näher zum Loch) und droppt innerhalb einer Schlägerlänge. Auch zeitweiliges Wasser (Pfützen) und Tierlöcher fallen in diese Kategorie.',
  },
  {
    id: 48,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 15,
    question: 'Nach Regen steht eine Pfütze („zeitweiliges Wasser“) um deinen Ball im Fairway. Was darfst du?',
    options: [
      'Nichts, im Wasser spielen',
      'Straffreie Erleichterung an den nächstgelegenen trockenen Punkt nehmen',
      'Einen Strafschlag und zurück zum Abschlag',
      'Den Ball reinigen und liegen lassen',
    ],
    correct: 1,
    explanation:
      'Zeitweiliges Wasser (z. B. Regenpfützen) zählt zu den abnormalen Platzverhältnissen und gibt straffreie Erleichterung (Regel 16.1). Man sucht den nächstgelegenen Punkt vollständiger Erleichterung – auch für Stand und Schwung – nicht näher zum Loch, und droppt innerhalb einer Schlägerlänge. Morgentau oder Reif gelten allerdings nicht als zeitweiliges Wasser.',
  },

  // ---------------------------------------------------------------- LOCH 16 – CADDIE / HILFE
  {
    id: 49,
    category: CATEGORIES.REGELN,
    difficulty: 'schwer',
    hole: 16,
    question: 'Was darf dein Caddie oder Mitspieler seit 2019 NICHT mehr tun, während du deinen Stand einnimmst?',
    options: [
      'Dir die Schläger tragen',
      'Hinter dir auf der Verlängerung der Spiellinie stehen, um dich auszurichten',
      'Dir den Abstand zur Fahne nennen',
      'Die Fahne bedienen',
    ],
    correct: 1,
    explanation:
      'Seit 2019 darf der Caddie (oder ein Helfer) nicht mehr hinter dem Spieler auf der Verlängerung der Spiellinie stehen, sobald dieser beginnt, den Stand einzunehmen – das soll Ausricht-Hilfe verhindern (Regel 10.2b). Ein Verstoß kostet zwei Strafschläge. Tipps zur Schlägerwahl oder Entfernung sind dagegen erlaubt.',
  },
  {
    id: 50,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'leicht',
    hole: 16,
    question: 'Wo legst du deine Golfbag bzw. das Trolley/Cart sinnvollerweise ab, wenn du das Grün ansteuerst?',
    options: [
      'Mitten auf dem Grün',
      'In Richtung des nächsten Abschlags, abseits von Grün und Bunker',
      'Direkt vor dem Loch',
      'Im Bunker',
    ],
    correct: 1,
    explanation:
      'Man stellt Bag, Trolley oder Cart auf der Seite des Grüns ab, die zum nächsten Abschlag zeigt – nie auf dem Grün oder auf Vorgrün/Bunkerrändern. So spart man Wege (Spieltempo) und schont die empfindlichen Flächen. Carts bleiben grundsätzlich auf den vorgegebenen Wegen bzw. mit deutlichem Abstand zum Grün.',
  },

  // ---------------------------------------------------------------- LOCH 17 – RUND UMS GRÜN
  {
    id: 51,
    category: CATEGORIES.REGELN,
    difficulty: 'mittel',
    hole: 17,
    question: 'Dein Ball auf dem Grün trifft beim Putt einen ruhenden Ball eines Mitspielers. Was gilt im Zählspiel?',
    options: [
      'Kein Problem für dich – aber zwei Strafschläge, wenn beide Bälle vorher auf dem Grün lagen',
      'Immer straffrei',
      'Du verlierst das Loch',
      'Der andere Spieler bekommt die Strafe',
    ],
    correct: 0,
    explanation:
      'Triffst du im Zählspiel mit deinem Putt vom Grün aus einen anderen Ball, der ebenfalls auf dem Grün lag, kostet das zwei Strafschläge (Regel 11.1a, Ausnahme). Dein Ball wird gespielt, wie er liegt, der getroffene Ball zurückgelegt. Deshalb bittet man Mitspieler, ihren Ball auf dem Grün zu markieren, bevor man puttet.',
  },
  {
    id: 52,
    category: CATEGORIES.BEGRIFFE,
    difficulty: 'mittel',
    hole: 17,
    question: 'Was ist der Unterschied zwischen „Fairway“ und „Rough“?',
    options: [
      'Fairway ist das Wasser, Rough der Sand',
      'Fairway ist das kurz gemähte Spielbahn-Gras, Rough das höhere Gras daneben',
      'Beide sind dasselbe',
      'Rough ist das Grün',
    ],
    correct: 1,
    explanation:
      'Das Fairway ist die kurz gemähte, gepflegte Spielbahn zwischen Abschlag und Grün – von dort lässt sich der Ball gut spielen. Das Rough ist das höhere, weniger gepflegte Gras seitlich davon, das das Spielen erschwert. Ziel ist es, den Ball möglichst auf dem Fairway zu halten.',
  },

  // ---------------------------------------------------------------- LOCH 18 – ABSCHLUSS / SCORECARD
  {
    id: 53,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'leicht',
    hole: 18,
    question: 'Was ist eine schöne Geste am Ende der Runde am 18. Grün?',
    options: [
      'Sofort wortlos verschwinden',
      'Mütze/Cap abnehmen und den Mitspielern per Handschlag danken',
      'Den Ball ins Clubhaus werfen',
      'Die Fahne mitnehmen',
    ],
    correct: 1,
    explanation:
      'Es ist gute Tradition und Etikette, sich nach dem letzten Putt die Mütze oder den Handschuh abzunehmen und den Mitspielern mit Handschlag und einem „Danke für die Runde“ zu danken. Sportlicher Respekt und Höflichkeit gehören zum Golf untrennbar dazu.',
  },
  {
    id: 54,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'schwer',
    hole: 18,
    question: 'Wer ist im Zählspiel für das Eintragen der Ergebnisse zuständig und wann ist die Scorecard gültig?',
    options: [
      'Jeder trägt sich selbst ein, ohne Kontrolle',
      'Ein Zähler (Marker) führt die Karte; gültig wird sie nach Kontrolle, Unterschrift von Spieler und Zähler und Abgabe',
      'Der Platzwart trägt alles ein',
      'Die Ergebnisse werden gar nicht aufgeschrieben',
    ],
    correct: 1,
    explanation:
      'Im Zählspiel führt ein benannter Zähler (Marker, meist ein Mitspieler) die Scorecard. Nach der Runde prüfen Spieler und Zähler jedes Loch, beide unterschreiben, und die Karte wird abgegeben (Regel 3.3b). Der Spieler ist für die Richtigkeit seiner Loch-Ergebnisse selbst verantwortlich. Eine zu niedrig eingetragene Zahl führt zur Disqualifikation.',
  },
  {
    id: 55,
    category: CATEGORIES.ETIKETTE,
    difficulty: 'leicht',
    hole: 18,
    question: 'Welche Grundhaltung fasst die Golf-Etikette am besten zusammen?',
    options: [
      'Nur an den eigenen Vorteil denken',
      'Rücksicht, Sicherheit, zügiges Spiel und Pflege des Platzes',
      'So laut wie möglich sein',
      'Regeln sind unwichtig',
    ],
    correct: 1,
    explanation:
      'Die Golf-Etikette beruht auf wenigen Grundprinzipien (Regel 1.2): Rücksicht auf Mitspieler (Ruhe, Stillstehen, niemanden gefährden), Sicherheit (warnen, abwarten), ein zügiges Spieltempo und die Pflege des Platzes (Divots, Pitchmarks, Bunker rechen). Wer diese Werte verinnerlicht, ist überall ein gern gesehener Spielpartner.',
  },
]

// =================================================================
//  TURNIERREIFE – Wettspiel- & Turnierwissen
//  WHS-Handicap, Spielformen, Match-/Zählspiel, Scorecard/DQ,
//  Wettspielregeln, Platzregeln, Spieltempo, Beratung.
// =================================================================
const TURNIER_QUESTIONS = [
  // ---- Spielformen ----
  {
    id: 56,
    category: CATEGORIES.SPIELFORMEN,
    difficulty: 'leicht',
    hole: 0,
    question: 'Was ist der grundlegende Unterschied zwischen Zählspiel und Lochspiel?',
    options: [
      'Es gibt keinen Unterschied',
      'Im Zählspiel zählt die Gesamtschlagzahl, im Lochspiel gewinnt man einzelne Löcher gegeneinander',
      'Im Lochspiel spielt man ohne Schläger',
      'Zählspiel gibt es nur im Fernsehen',
    ],
    correct: 1,
    explanation:
      'Im Zählspiel (Stroke Play) zählt jeder Schlag der gesamten Runde – der Spieler mit der niedrigsten Gesamtzahl gewinnt. Im Lochspiel (Match Play) treten zwei Parteien Loch für Loch gegeneinander an: Wer ein Loch mit weniger Schlägen spielt, gewinnt es; der Match-Stand wird in „auf/zurück“ (z. B. „2 auf“) geführt. Beide haben eigene Regel-Feinheiten.',
  },
  {
    id: 57,
    category: CATEGORIES.SPIELFORMEN,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was kennzeichnet die Spielform „Vierer“ (Foursome)?',
    options: [
      'Vier Spieler spielen je einen eigenen Ball',
      'Zwei Partner teilen sich EINEN Ball und schlagen abwechselnd',
      'Man spielt mit vier Bällen gleichzeitig',
      'Vier Schläge pro Loch sind erlaubt',
    ],
    correct: 1,
    explanation:
      'Beim Vierer (Foursome) bildet ein Paar eine Partei mit nur einem Ball, den die Partner abwechselnd schlagen (auch die Abschläge wechseln sich – an geraden/ungeraden Löchern). Das verlangt Strategie und Vertrauen. Nicht zu verwechseln mit dem Vierball, bei dem jeder seinen eigenen Ball spielt und das bessere Ergebnis zählt.',
  },
  {
    id: 58,
    category: CATEGORIES.SPIELFORMEN,
    difficulty: 'mittel',
    hole: 0,
    question: 'Wie funktioniert ein „Vierball“ (Fourball)?',
    options: [
      'Beide Partner spielen einen gemeinsamen Ball',
      'Jeder der beiden Partner spielt seinen eigenen Ball, das bessere Ergebnis der Partei zählt am Loch',
      'Man darf vier Bälle gleichzeitig schlagen',
      'Der schlechtere Ball zählt',
    ],
    correct: 1,
    explanation:
      'Im Vierball (Fourball) spielt jeder der beiden Partner einen eigenen Ball; pro Loch zählt das bessere der beiden Ergebnisse für die Partei. Das gibt es als Zähl- oder Lochspiel. Weil jeder seinen Ball spielt, ist die Form fehlerverzeihender als der Vierer.',
  },
  {
    id: 59,
    category: CATEGORIES.SPIELFORMEN,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was ist beim „Scramble“ typisch?',
    options: [
      'Jeder spielt allein bis zum Ende',
      'Alle Team-Mitglieder schlagen, dann wird der beste Ball gewählt und von dort spielen alle weiter',
      'Man darf den Ball werfen',
      'Es zählt nur der erste Abschlag',
    ],
    correct: 1,
    explanation:
      'Beim Scramble schlagen alle Spieler eines Teams, das Team wählt den besten Ball, und von dieser Stelle spielen wieder alle – so bis ins Loch. Eine gesellige, schnelle Format-Variante, oft bei Charity- und Firmenturnieren. Sie ist kein offizielles WHS-vorgabewirksames Format.',
  },

  // ---- WHS / Handicap ----
  {
    id: 60,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'mittel',
    hole: 0,
    question: 'Worauf basiert der Handicap-Index im World Handicap System (WHS)?',
    options: [
      'Auf dem Alter des Spielers',
      'Auf dem Durchschnitt der besten 8 von 20 letzten vorgabewirksamen Ergebnissen',
      'Auf der letzten Runde allein',
      'Auf der Anzahl der Turniersiege',
    ],
    correct: 1,
    explanation:
      'Der Handicap-Index nach WHS ist der Mittelwert der besten 8 Score-Differentiale aus den letzten 20 vorgabewirksamen Runden. Er wird nach jeder gewerteten Runde aktualisiert und ist platzunabhängig. Der maximale Handicap-Index beträgt 54,0.',
  },
  {
    id: 61,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'schwer',
    hole: 0,
    question: 'Wozu dient das „Course Handicap“ (Spielvorgabe für den Platz)?',
    options: [
      'Es ist dasselbe wie der Handicap-Index',
      'Es rechnet den Handicap-Index über Slope und Course Rating auf den konkret gespielten Platz/Abschlag um',
      'Es gibt die Schlägeranzahl an',
      'Es zählt die Birdies',
    ],
    correct: 1,
    explanation:
      'Das Course Handicap übersetzt den platzunabhängigen Handicap-Index auf die tatsächliche Schwierigkeit von Platz und gewähltem Abschlag. Es wird aus Handicap-Index × (Slope/113) + (Course Rating − Par) berechnet und ergibt die Anzahl Vorgabeschläge für diese Runde. Daraus folgt – je nach Spielform-Allowance – die Playing Handicap (Spielhandicap).',
  },
  {
    id: 62,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'schwer',
    hole: 0,
    question: 'Was ist im WHS das höchste Ergebnis, das pro Loch in die Handicap-Berechnung eingeht?',
    options: [
      'Par des Lochs',
      'Netto-Doppelbogey (Par + 2 + erhaltene Vorgabeschläge am Loch)',
      'Immer maximal 10 Schläge',
      'Es gibt keine Begrenzung',
    ],
    correct: 1,
    explanation:
      'Für die Handicap-Berechnung wird jedes Loch auf maximal „Netto-Doppelbogey“ gedeckelt: Par + 2 Schläge + die an diesem Loch erhaltenen Vorgabeschläge. Ein Ausreißerloch verzerrt so das Handicap nicht. Das entspricht in der Stableford-Wertung 0 Punkten an diesem Loch.',
  },
  {
    id: 63,
    category: CATEGORIES.ZAEHLWEISE,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was bedeutet eine „vorgabewirksame“ (handicaprelevante) Runde?',
    options: [
      'Eine Runde, die das Handicap verändern kann und vorher registriert sein muss',
      'Eine reine Übungsrunde ohne Folgen',
      'Eine Runde nur für Profis',
      'Eine Runde ohne Zähler',
    ],
    correct: 0,
    explanation:
      'Eine vorgabewirksame Runde fließt in die Handicap-Berechnung ein. Dafür muss sie in der Regel vorab registriert werden (Pre-Registration im WHS), über einen benannten Zähler/Marker gewertet und nach festen Vorgaben (richtige Abschläge, gewertete Löcher) gespielt werden. Turniere und registrierte Privatrunden (EDS) können vorgabewirksam sein.',
  },

  // ---- Match Play Feinheiten ----
  {
    id: 64,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Im Lochspiel: Dein Gegner spielt außer der Reihe (du hättest spielen müssen). Was gilt?',
    options: [
      'Zwei Strafschläge für den Gegner',
      'Kein Strafschlag, aber du darfst den Schlag annullieren und ihn wiederholen lassen',
      'Du verlierst das Loch',
      'Das Spiel wird abgebrochen',
    ],
    correct: 1,
    explanation:
      'Im Lochspiel gibt es für das Spielen außer der Reihe keine Strafe, aber der Gegner darf den Schlag sofort zurücknehmen lassen – der falsch zu früh spielende Spieler muss dann in der richtigen Reihenfolge erneut spielen (Regel 6.4a). Im Zählspiel hingegen ist „Ready Golf“ erlaubt und es gibt dafür keine Strafe.',
  },
  {
    id: 65,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was bedeutet im Lochspiel, einen Schlag, ein Loch oder das Match zu „schenken“ (Concede)?',
    options: [
      'Man gibt dem Gegner Geld',
      'Man verzichtet z. B. auf das Ausspielen eines kurzen Putts – die Konzession ist endgültig und nicht zurücknehmbar',
      'Man darf den Schlag selbst nochmal machen',
      'Das ist verboten',
    ],
    correct: 1,
    explanation:
      'Im Lochspiel darf man dem Gegner den nächsten Schlag (z. B. einen kurzen Putt), ein ganzes Loch oder das gesamte Match „schenken“ (Regel 3.2b). Eine Konzession ist sofort wirksam und kann nicht zurückgenommen oder abgelehnt werden. Im Zählspiel gibt es das nicht – dort muss immer eingelocht werden.',
  },
  {
    id: 66,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Was bedeutet der Begriff „dormie“ im Lochspiel?',
    options: [
      'Ein Spieler schläft ein',
      'Eine Partei führt mit genau so vielen Löchern, wie noch zu spielen sind',
      'Beide Parteien sind gleichauf',
      'Das Match ist beendet',
    ],
    correct: 1,
    explanation:
      '„Dormie“ heißt: Eine Partei liegt mit exakt so vielen Löchern vorne, wie noch zu spielen übrig sind (z. B. „3 auf“ bei noch 3 Löchern). Sie kann das Match dann nicht mehr verlieren – der Gegner muss alle restlichen Löcher gewinnen, um noch auszugleichen. Ein Match endet, sobald eine Partei mehr Löcher führt, als noch zu spielen sind.',
  },

  // ---- Zählspiel / Scorecard / DQ ----
  {
    id: 67,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Im Zählspiel: Du gibst eine Scorecard ab, auf der ein Loch NIEDRIGER eingetragen ist, als du tatsächlich gespielt hast. Folge?',
    options: [
      'Keine, der Fehler wird korrigiert',
      'Disqualifikation',
      'Ein Strafschlag',
      'Das Ergebnis zählt, der Fehler ist egal',
    ],
    correct: 1,
    explanation:
      'Ein zu niedrig abgegebenes Loch-Ergebnis führt im Zählspiel zur Disqualifikation (Regel 3.3b). Ist ein Loch zu hoch eingetragen, bleibt die (zu hohe) Zahl stehen. Der Spieler ist für die Richtigkeit seiner Brutto-Lochergebnisse verantwortlich; das Zusammenzählen und das Handicap übernimmt die Spielleitung.',
  },
  {
    id: 68,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Im Zählspiel spielst du ein Loch nicht zu Ende (du lochst nicht aus) und schlägst am nächsten Loch ab. Folge?',
    options: [
      'Kein Problem',
      'Disqualifikation, weil im Zählspiel jedes Loch ausgelocht werden muss',
      'Ein Strafschlag',
      'Das Loch zählt als Par',
    ],
    correct: 1,
    explanation:
      'Im Zählspiel muss an jedem Loch eingelocht werden (Regel 3.3c). Wer ein Loch nicht zu Ende spielt und dies nicht vor dem Abschlag am nächsten Loch (bzw. vor Abgabe der Karte am letzten Loch) korrigiert, wird disqualifiziert. Im Lochspiel hingegen kann ein Loch geschenkt oder aufgegeben werden.',
  },
  {
    id: 69,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Du bist dir bei einer Regel unsicher. Wie kannst du im Zählspiel auf Nummer sicher gehen?',
    options: [
      'Einfach irgendwie weiterspielen',
      'Einen zweiten Ball spielen, beide Verfahren ankündigen und die Spielleitung vor Kartenabgabe entscheiden lassen',
      'Die Runde abbrechen',
      'Den Gegner fragen und dessen Meinung übernehmen',
    ],
    correct: 1,
    explanation:
      'Bei Zweifel über das richtige Verfahren darf man im Zählspiel zwei Bälle spielen (Regel 20.1c): Man kündigt an, mit welchem Ball man werten möchte, falls die Regeln es zulassen, spielt beide aus und legt den Fall vor Abgabe der Scorecard der Spielleitung vor. Diese entscheidet dann, welcher Ball zählt.',
  },

  // ---- Beratung / Caddie / Übung ----
  {
    id: 70,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Wen darfst du im Wettspiel um „Rat“ (z. B. Schlägerwahl) fragen?',
    options: [
      'Jeden auf dem Platz',
      'Nur deinen Partner (in Team-Formen) oder deinen eigenen Caddie',
      'Nur den Greenkeeper',
      'Niemanden, auch nicht den Caddie',
    ],
    correct: 1,
    explanation:
      'Rat (Advice) darfst du nur bei deinem Partner derselben Partei oder deinem eigenen Caddie einholen bzw. geben (Regel 10.2a). Einen Mitbewerber nach der Schlägerwahl zu fragen, kostet zwei Strafschläge (Lochspiel: Lochverlust). Erlaubt sind dagegen „öffentliche“ Infos: Entfernungen, Lage der Fahne, wo ein Hindernis liegt, die Regeln.',
  },
  {
    id: 71,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Wie viele Caddies darf ein Spieler gleichzeitig haben?',
    options: ['Beliebig viele', 'Genau einen', 'Maximal zwei', 'Keinen'],
    correct: 1,
    explanation:
      'Ein Spieler darf zu jeder Zeit nur einen Caddie haben (Regel 10.3). Der Caddie darf die Schläger tragen, beraten und einige Handlungen vornehmen – aber z. B. nicht hinter dem Spieler auf der Spiellinie stehen, sobald dieser den Stand einnimmt. Ein Verstoß gegen die Ein-Caddie-Regel wird mit der Grundstrafe geahndet.',
  },
  {
    id: 72,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Darfst du am Wettspieltag vor einer Zählspielrunde auf dem Wettspielplatz üben?',
    options: [
      'Ja, uneingeschränkt',
      'Nein – im Zählspiel ist Üben auf dem Wettspielplatz vor der Runde grundsätzlich nicht erlaubt',
      'Nur auf dem Grün',
      'Nur mit dem Driver',
    ],
    correct: 1,
    explanation:
      'Im Zählspiel darfst du am Tag der Runde auf dem Wettspielplatz vor deiner Runde nicht üben (Regel 5.2b); erlaubt ist Üben auf der Übungsanlage. Im Lochspiel ist das Üben auf dem Platz vor der Runde dagegen gestattet. Zwischen zwei Löchern darf man keinen Übungsschlag zum Spielen machen, aber kurz auf/neben dem gespielten Grün oder am nächsten Abschlag putten/chippen, ohne das Spiel zu verzögern.',
  },

  // ---- Wettspielregeln / Platzregeln ----
  {
    id: 73,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Du kommst 3 Minuten nach deiner offiziellen Startzeit am Abschlag an. Was passiert üblicherweise?',
    options: [
      'Sofort Disqualifikation',
      'Grundstrafe (zwei Schläge bzw. Lochverlust am 1. Loch), wenn du innerhalb von 5 Minuten erscheinst',
      'Gar keine Folge',
      'Die Startzeit wird einfach verschoben',
    ],
    correct: 1,
    explanation:
      'Wer innerhalb von fünf Minuten nach der Startzeit erscheint, erhält die Grundstrafe (im Zählspiel zwei Schläge am ersten Loch, im Lochspiel Verlust des ersten Lochs) statt Disqualifikation (Regel 5.3a). Mehr als fünf Minuten zu spät bedeutet Disqualifikation – außer die Spielleitung erkennt außergewöhnliche Umstände an. Pünktlichkeit am Tee ist Pflicht.',
  },
  {
    id: 74,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Eine Platzregel (Model Local Rule E-5) erlaubt eine Alternative zum Schlag- und Distanzverlust bei Ball im Aus/verloren. Was kostet sie?',
    options: [
      'Einen Strafschlag und Drop am Fundort',
      'Zwei Strafschläge und Drop im Bereich bis zum Fairway-Rand',
      'Keine Strafe',
      'Sofortige Disqualifikation',
    ],
    correct: 1,
    explanation:
      'Die Muster-Platzregel E-5 (nur gültig, wenn die Spielleitung sie eingeführt hat, und nicht für Turniere mit guten Spielern gedacht) bietet bei verlorenem Ball oder Ball im Aus für zwei Strafschläge einen Drop seitlich zwischen der Stelle, an der der Ball ins Aus ging, und dem Fairway-Rand. Sie soll lange Rückwege vermeiden und das Spiel beschleunigen. Ohne diese Platzregel gilt stets Schlag- und Distanzverlust.',
  },
  {
    id: 75,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was sind „Platzregeln“ (Local Rules) und wo findest du sie?',
    options: [
      'Geheime Regeln nur für Mitglieder',
      'Von der Spielleitung festgelegte Zusatzregeln für den konkreten Platz – auf der Scorecard oder am Aushang',
      'Die normalen Golfregeln',
      'Regeln, die man ignorieren darf',
    ],
    correct: 1,
    explanation:
      'Platzregeln ergänzen die Golfregeln für die besonderen Verhältnisse eines Platzes oder Wettspiels (z. B. Geländegrenzen, Drop-Zonen, junge Bäume, Entfernungsmesser ja/nein). Sie werden von der Spielleitung erlassen und stehen auf der Scorecard, dem „Hard Card“-Aushang oder im Aushang am ersten Abschlag. Man ist verpflichtet, sie zu kennen.',
  },
  {
    id: 76,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Von welchen Abschlägen spielst du in einem Turnier?',
    options: [
      'Von beliebigen, die dir gefallen',
      'Von den Abschlägen, die die Spielleitung für den Wettbewerb festgelegt hat',
      'Immer von den vordersten',
      'Vom Grün aus',
    ],
    correct: 1,
    explanation:
      'In einem Wettspiel spielen alle aus der jeweils festgelegten Abschlag-Kategorie, die die Spielleitung bestimmt (oft nach Geschlecht/Klasse, z. B. Gelb für Herren, Rot für Damen). Course/Slope Rating und damit das Course Handicap richten sich nach diesen Abschlägen. Den falschen Abschlag zu spielen wird mit der Grundstrafe geahndet.',
  },
  {
    id: 77,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Ein Stableford-Wettspiel endet mit Punktgleichheit. Wie wird im Handicap-Wettspiel üblicherweise der Sieger ermittelt?',
    options: [
      'Münzwurf',
      'Nach Countback (Matchkarten-Vergleich der letzten 9, 6, 3 Löcher bzw. des letzten Lochs)',
      'Beide werden disqualifiziert',
      'Der Jüngere gewinnt',
    ],
    correct: 1,
    explanation:
      'Bei Punkt-/Schlaggleichheit in Handicap-Wettspielen entscheidet meist das „Countback“ (Matchkarten-Vergleich): Verglichen werden die Ergebnisse der letzten 9 Löcher, dann der letzten 6, dann 3 und schließlich das 18. Loch – wer dort besser ist, gewinnt. Bei Scratch-Wettspielen gibt es stattdessen oft ein Stechen (Play-off/Sudden Death).',
  },
  {
    id: 78,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was droht bei „unangemessener Verzögerung“ des Spiels (Slow Play) in einem Wettspiel?',
    options: [
      'Nichts, Zeit spielt keine Rolle',
      'Verwarnung und bei Wiederholung Strafschläge nach der Spieltempo-Richtlinie der Spielleitung',
      'Sofortiger Hausverbot',
      'Man muss von vorne beginnen',
    ],
    correct: 1,
    explanation:
      'Ein Spieler darf das Spiel nicht unangemessen verzögern (Regel 5.6a). Die Spielleitung kann eine Spieltempo-Richtlinie (Pace of Play Policy) erlassen: typischerweise erst Verwarnung, dann ein Strafschlag, dann die Grundstrafe und schließlich Disqualifikation bei wiederholten Verstößen. Als Richtwert gelten rund 40 Sekunden pro Schlag, wenn man an der Reihe ist.',
  },
  {
    id: 79,
    category: CATEGORIES.TURNIER,
    difficulty: 'mittel',
    hole: 0,
    question: 'Wer ist im Turnier die letzte Instanz für Regelentscheidungen auf dem Platz?',
    options: [
      'Der erfahrenste Mitspieler',
      'Der von der Spielleitung eingesetzte Referee bzw. die Spielleitung (Committee)',
      'Der Spieler mit dem niedrigsten Handicap',
      'Der Platzwart',
    ],
    correct: 1,
    explanation:
      'Für Regelentscheidungen ist die Spielleitung (Committee) zuständig; auf dem Platz kann sie Referees einsetzen, deren Entscheidung in Tatsachenfragen endgültig ist (Regel 20). Bist du unsicher, fordere eine Entscheidung an. Im Zweifel und ohne erreichbaren Referee hilft im Zählspiel das Spielen eines zweiten Balls und die spätere Klärung.',
  },
  {
    id: 80,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Welche typische Vorgabe-Allowance gilt im Einzel-Zählspiel nach Stableford im WHS?',
    options: [
      '50 % der Spielvorgabe',
      '95 % der Course Handicap (Spielvorgabe)',
      '120 % der Spielvorgabe',
      'Es gibt keine Vorgabe',
    ],
    correct: 1,
    explanation:
      'Im WHS wird für faire Felder eine Vorgabe-Allowance auf das Course Handicap angewendet. Im Einzel-Zählspiel sind das empfohlene 95 %. Andere Formen haben andere Werte (z. B. Vierball-Zählspiel ca. 85 %, Vierer ca. 50 % der zusammengezählten Course Handicaps). Daraus ergibt sich die „Playing Handicap“ (Spielhandicap) für den Wettbewerb.',
  },
  {
    id: 81,
    category: CATEGORIES.SPIELFORMEN,
    difficulty: 'mittel',
    hole: 0,
    question: 'Was ist das Format „Maximum Score“?',
    options: [
      'Wer die meisten Schläge braucht, gewinnt',
      'Eine Zählspielform mit festgelegtem Höchstergebnis pro Loch, das man nicht überschreiten muss',
      'Ein Format ohne Grenzen',
      'Ein anderes Wort für Lochspiel',
    ],
    correct: 1,
    explanation:
      'Beim „Maximum Score“ (Regel 21.2) legt die Spielleitung ein Höchstergebnis pro Loch fest (z. B. Doppel-Par oder eine feste Zahl). Erreicht ein Spieler dieses Maximum, hebt er auf und notiert den Höchstwert. Das beschleunigt das Spiel und verhindert Katastrophenlöcher – ähnlich der Deckelung in der Stableford- und Handicap-Wertung.',
  },
  {
    id: 82,
    category: CATEGORIES.TURNIER,
    difficulty: 'schwer',
    hole: 0,
    question: 'Im Lochspiel willst du einen Regelverstoß des Gegners am vorigen Loch geltend machen. Bis wann musst du diesen Anspruch („Claim“) erheben?',
    options: [
      'Jederzeit bis Rundenende',
      'Bevor eine Partei vom nächsten Abschlag spielt (bzw. am letzten Loch, bevor das Ergebnis feststeht)',
      'Erst nach der Runde',
      'Gar nicht möglich',
    ],
    correct: 1,
    explanation:
      'Im Lochspiel muss ein Anspruch rechtzeitig erhoben werden: bevor eine Partei vom nächsten Abschlag spielt – bzw. am letzten Loch, bevor das Ergebnis des Matches endgültig feststeht (Regel 20.1b). Später ist der Anspruch in der Regel verwirkt. Deshalb klärt man strittige Situationen sofort, notfalls mit der Spielleitung.',
  },
  {
    id: 83,
    category: CATEGORIES.AUSRUESTUNG,
    difficulty: 'mittel',
    hole: 0,
    question: 'Du startest ein Zählspiel-Turnier mit 15 Schlägern in der Bag. Wie hoch ist die Strafe?',
    options: [
      'Disqualifikation',
      'Zwei Strafschläge pro Loch, an dem der Verstoß bestand – höchstens vier Schläge je Runde',
      'Ein Strafschlag insgesamt',
      'Keine, solange du den 15. nicht benutzt',
    ],
    correct: 1,
    explanation:
      'Mehr als 14 Schläger ergeben im Zählspiel zwei Strafschläge je betroffenem Loch, gedeckelt auf maximal vier Strafschläge pro Runde (Regel 4.1b). Im Lochspiel wird stattdessen der Match-Stand angepasst (Abzug von maximal zwei Löchern). Den überzähligen Schläger muss man sofort nach Entdeckung aus dem Spiel nehmen (z. B. umdrehen und ankündigen).',
  },
]

export const QUESTIONS = [
  ...PLATZREIFE_QUESTIONS.map((q) => ({ ...q, level: LEVELS.PLATZREIFE })),
  ...TURNIER_QUESTIONS.map((q) => ({ ...q, level: LEVELS.TURNIER })),
]

export const TOTAL_QUESTIONS = QUESTIONS.length
export const TOTAL_PLATZREIFE = PLATZREIFE_QUESTIONS.length
export const TOTAL_TURNIER = TURNIER_QUESTIONS.length

// Antwortoptionen pro Frage zufällig anordnen und den correct-Index nachführen.
// Verhindert, dass die richtige Antwort immer an derselben Stelle steht.
export function withShuffledOptions(q) {
  const order = q.options.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    correct: order.indexOf(q.correct),
  }
}
