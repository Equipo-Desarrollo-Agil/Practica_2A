// ---------------------------------------------------------------------------
// Bearbeite diese Datei, um dein Spiel zu erstellen. Sie sollte
// mindestens die folgenden vier Abschnitte enthalten:
// undum.game.situations, undum.game.start,
// undum.game.qualities, und undum.game.init.
// ---------------------------------------------------------------------------

/* Eine eindeutige Kennung fuer das Spiel (wird nicht im Spiel angezeigt)
 * Man kann eine UUID benutzen oder etwas anderes, was garantiert einzigartig
 * ist, z.B. eine eigene URL oder eine Variation der eigenen E-Mail-Adresse). */
undum.game.id = "349baf43-9ade-49a8-86d0-24e3de3ce072";

/* Eine Zeichenkette, die angibt, um welche Version des Spiels es sich handelt.
 * Dies ist wichtig fuers Speichern und Laden: Wenn man den Inhalt eines Spiels
 * aendert, funktioniert ein gespeicherter Spielstand wahrscheinlich nicht mehr.
 * Wenn man nach einer Aenderung des Inhalts diese Versionsnummer ebenfalls
 * aendert, dann wird damit verhindert, dass Undum einen Spielstand aus einer
 * alten Version zu laden versucht und dabei eventuell abstuerzt. */
 undum.game.version = "1.0";

 /* A variable that changes the fade out speed of the option text on
  * a mobile. */
 undum.game.mobileHide = 2000

 /* A variable that changes the options fade out speed. */
 undum.game.fadeSpeed = 1500

 /* A variable that changes the slide up speed after clicking on an
  * option. */
 undum.game.slideUpSpeed = 500

 /* The situations that the game can be in. Each has a unique ID. */
 undum.game.situations = {
     start: new undum.SimpleSituation(
         "<h1>Labyrinth Passage</h1>\
         <img src='media/games/tutorial/Pasillo_piedra.png' class='float_right'>\
         <p>You wake up in the middle of a dark passage, disoriented and unaware\
         of how you got there. You begin to investigate your surroundings and you \
         come to the conclusion that you’re in some sort of labyrinth. As fear enters\
         your body, you begin to frantically search for your phone in your pockets, \
         only to find a note that reads the following: </p>\
         <p><i> Hello Robertina, you must be wondering why you are here, \
         for now just know that you’re locked in and the only way to escape is to find\
         the key to exit, which will be a true test of your cunning wits. I hope you\
         payed attention in school because this won’t be easy. </i></p>\
         <p>After reading this you look around you and determine your options.</p>\
         \
         <p><a href='escena2'>There’s only one way to go, continue through there.</a></p>"
     ),
     escena2:new undum.SimpleSituation(
       "<h1>A Corner to Turn</h1>\
       <p>You’ve decided to continue on the path without knowing what awaits, \
        as It is your only choice. You start to become anxious from being enclosed \
        in an unfamiliar place, unknowing of how you got there or how you will survive\
         to see the light of day. </p>\
        <img src='media/games/tutorial/esquina.jpg' class='float_left'width = 200 heigth = 150>\
        <p>Following the lights at the end of the passage has led you to a corner. \
        You decide it’s best to continue and discover what lies beyond.\
        Determined, you take a peek around the corner. \
        \
       What’s that? A bright source of light emanates from the passage.\
       <p><a href='escena3'>You would like to discover what shines so intense</a></p>"
     ),
     escena3:new undum.SimpleSituation(
       "<h1>The Coin</h1>\
       <img src='media/games/tutorial/moneda.jpg' width = 350 heigth = 350>\
       <p>A bit disgruntled as you turn the corner and curious to know what\
       shined so intensely, you has something round and gold at the end of the passage,\
       it’s…. A <a href='./moneda' class='once'>COIN</a> .\
       Right next to it, theres a strange piece of paper, on which is written the following: </p>\
       <p><i> You’re were stunned by the brightness of the coin weren’t you? \
       You’ll find that each of these coins will be your motivating factor to get \
       you out of the labyrinth, as you’ll find 5 of these coins on your route to escape,\
       which I assure you will not be east to find. You can choose to not take them, \
       but you will feel better escaping with riches. GOOD LUCK!</i>\
       <a href='escena4'>Continue on the path</a></p>",
       {
             actions:{
               "moneda": function(character, system, to) {
                 system.animateQuality("moneda", 1);
                 system.setCharacterText("<p>Perfect, now you have a coin.</p>");
               },
               exit: function(character, system, to) {
                   system.setQuality("moneda", character.qualities.moneda);
               }
             }
       }
       ),
     escena4:new undum.SimpleSituation(
       "<h1>Take note</h1>\
        <img src='media/games/tutorial/moneda2.jpg' class='float_right'width = 200 heigth = 150>\
       <p>The coins are very important for the progress on your path to escape, as they may lead the way to the exit.</p>",
        {
  				enter: function( character, system, from ) {
  					if( character.qualities.moneda ) {
  						system.doLink( "escena5" );
  					} else {
  						system.write( "<p>By not taking the coin, you can’t see the path to the exit very well.</a></p>\
             </p>\
             <p><a href='escena3'>Go back and get the coin.</a></p>");
  					}
  				}
  			}
     ),
     escena5: new undum.SimpleSituation(
 			"<p>Once you take the coin, you find yourself at the entrance of 2 paths, \
        each with a peculiar sign at the entrance, <a href='escena6'>Path of the sinister</a> or <a href='escena7'>Path of the flower of life.</a></p>"
 		),
     escena6: new undum.SimpleSituation(
       "<h1>Path of the sinister</h1>\
       <p>Once you enter this dark and eerie passageway.<p>\
       <p>You notice that it’s pitch black and you can’t even see your hand. \
       You can either use the instructional note and a match to\
       <a href='escenaluz'>burn it</a> so you can see where you are going, or \
       o <a href='escenaoscura'>continue through the darkess.</a>.</p>"
     ),
     escenaoscura: new undum.SimpleSituation(
       "<img src='media/games/tutorial/oscuridad.jpg' class='float_right' width = 350 heigth = 350>\
 	     <p>As you try and advance in the darkness, you realize that doing so would be dangerous and\
       impractical, and decide to pull out the note and <a href='escenaluz'>burn it</a> to light the\
       way ahead of you.</p>"
     ),
     escenaluz: new undum.SimpleSituation(
       "<H1>The light will guide you</H1>\
       <img src='media/games/tutorial/antorcha.jpg' class='float_right' width = 350 heigth = 350>\
       <p>You did well by lighting the paper on fire, but you don’t know how long it will last so you must hurry.</p>\
       <p>You notice there is a timeworn chest to your right. You can <a href='cofre'>open</a>, the chest out of curiosity. </p>\
       <p>Ahead you see an old door with an interesting knob, you can choose to investigate the <a href='pomo'>knob</a>\
       or <a href='escena9'>open the door</a> to continue investigating the labyrinth. </p>"
     ),
     cofre: new undum.SimpleSituation(
        "<H1>The Chest</H1>\
        <img src='media/games/tutorial/cofrevacio.jpg' width = 400 heigth = 350>\
         <p>Inside the chest you find a book, an old bottle of water, and a gold skull side by side. \
         Above those items you notice there’s some writing on the chest, which reads: </p>\
 		      <p>I say a lot but I can’t be heard, I open but cannot be passed through, I have a spine but not of bone, I shouldn’t be judged by my face. </p>\
         <p><a href='escenalibro'>Grab book</a>\, <a href='escenamuertecofre'>grab water</a>\, or <a href='escenamuertecofre'>grab skull</a>.</p>"
     ),
 	escenalibro: new undum.SimpleSituation(
 	   "<H1>The Book</H1>\
 	   <img src='media/games/tutorial/libro_moneda.jpg' width = 400 heigth = 350>\
 	   <p>When you pick up the book, you hear a noise come from the chest as it closes on its own.\
     You pick up the book and find <a href='./moneda' class='once'>a coin</a>.\
 	   You take the coin and realize there are some words written on that page. The book says: \
     “you avoided death using your intellect, leave the chest or die.” You should leave the book and\
     <a href='escenaluz2'>go back from where you came</a>.</p>",
 	   {
             actions:{
               "moneda": function(character, system, to) {
                 system.animateQuality("moneda", character.qualities.moneda+1);
                 system.setCharacterText("<p>Perfect, now you have another coin.</p>");
                 }
             }
         }
 	),
  escenamuertecofre: new undum.SimpleSituation(
    "<H1>Curiosity killed the cat</H1>\
    <img src='media/games/tutorial/muerte_cofre2.png' width = 400 heigth = 400>\
    <p>When you pick up the object, you notice there was a pressure plate under\
    it. You hear a noise behind you and a rock wall falls and seals the exit. You’re\
    now stuck in the room with the chest, and like the only exit, your fate is sealed.</p>"
  ),
  escenaluz2: new undum.SimpleSituation(
      "<H1>The light will guide you</H1>\
      <img src='media/games/tutorial/antorcha.jpg' class='float_right' width = 350 heigth = 350>\
      <p>You did well avoiding death.\
      You continue to the old door with the strange knob, you decide to investigate the <a href='pomo'>knob</a>\
      or <a href='escena9'>aopen the door</a> to continue to search the labyrinth. </p>"
    ),
    pomo: new undum.SimpleSituation(
      "<H1>The mysterious knob</H1>\
      <img src='media/games/tutorial/pomo.jpg' width = 200 heigth = 150>\
      <p><i>Looks like the knob has a bright and mysterious form.\
      You get closer and notice that it’s <a href='./moneda' class='once'>another coin </a>. You wonder\
      if you’re close to the exit given how many coins you have. How many more passages\
      will you have to traverse? <a href='escenaluz'>Go Back</a>.</i></p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfect. Now you have another coin.</p>");
                }
            }
        }
    ),
    escena9: new undum.SimpleSituation(
        "<H1>Incandescent passage</H1>\
        <p>Robertina is tired and a bid dizzy due to the all the looping passages. She finds a chair,\
         but is unsure if she should <a href='descansar'>sit and rest</a> or <a href='escena10'>continue</a>.</p>"
    ),
    descansar: new undum.SimpleSituation(
      "<img src='media/games/tutorial/silla.jpg' width = 200 heigth = 150>\
      <p>You decide to sit and take a break so you can continue with more strenfth.\
       When you lower your head, you notice by one of the legs of the chair\
      you a shiny  <a href='./moneda' class='once'>coin</a>.\
      You find yourself reenergized by this discovery and decide to <a href='escena10'>continue</a>.</p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfect. Now you have another coin.</</p>");
                }
            }
        }
    ),
    escena10: new undum.SimpleSituation(
      "<p>Following the passage, you find a set of armor on a stand, and wonder what would happen\
      if you <a href='armadura'>move the arms</a>.</p>\
      <p>You find a passage to the <a href='escena11'>left</a> with an interesting chest, and another passage\
       to the <a href='escena12'>right</a> which has a sign that says “EXIT”.</p> "
    ),
    armadura: new undum.SimpleSituation(
      "<H1>The armored man</H1>\
      <img src='media/games/tutorial/armadura.jpg' width = 100 heigth = 100>\
      <p>The armor opens up and <a href='./moneda' class='once'>ANOTHER COIN!</a>.\
      <p><a href='escenasiguiente'>Continue</a>.</p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfect. Now you have another coin!</</p>");
                }
            }
        }
    ),
    escenasiguiente: new undum.SimpleSituation(
      "<p>Now that you’re on the passage, you have to decide if you want to  go <a href='escena11'>left</a> to see the chest\
       or go <a href='escena12'>right</a> toward the door.</p> "
    ),
    escena11: new undum.SimpleSituation(
      "<H1>Mysterious chest</H1>\
      <img src='media/games/tutorial/cofre.jpeg' class='float_right' width = 250 heigth = 250>\
      <p>You wonder if you should  <a href='cofre1'>open the chest</a>.</p>\
      <p>or if you should <a href='escenaizquierda'>continue</a> to the right passage and open the door. </p>"
    ),
    cofre1: new undum.SimpleSituation(
        "<img src='media/games/tutorial/llave.jpeg' class='float_right' width = 200 heigth = 200>\
    <p>¡MARVELOUS! You found <a href='./llave' class='once'>the key</a>.\
    Next to the key you find a note that says: The exit should be followed, but should not be looked at. You can now leave to find the exit. \
        <a href='escenaizquierda'>Close the chest</a>.</p>",
        {
              actions:{
                "llave": function(character, system, to) {
                  system.setQuality("llave", 1);
                  system.setCharacterText("<p>The key is the most importance</p>");
                },
                exit: function(character, system, to) {
                    system.setQuality("llave", character.qualities.llave);
                  }
              }
        }
    ),
    escenaizquierda: new undum.SimpleSituation(
      "<p>Before you continue you need the key.</p>",
      {
       enter: function( character, system, from ) {
         if( character.qualities.llave ) {
           system.doLink( "escenatrespuertas" );
         } else {
           system.write( "<p>If you leave the key, you can’t escape.</a></p>\
           </p>\
           <p><a href='cofre1'>Open the chest.</a></p>");
         }
       }
     }
    ),
    escena12: new undum.SimpleSituation(
      "<H1>Taking the note)</H1>\
      <p>To open the door and exit the labyrinth, you need to take the key to open the door, GOOD LUCK!.</p>",
       {
        enter: function( character, system, from ) {
          if( character.qualities.llave ) {
            system.doLink( "escenafinal" );
          } else {
            system.write( "<p>You need the key to escape the labyrinth.</a></p>\
            </p>\
            <p><a href='escena11'>Go find the key.</a></p>");
          }
        }
      }
    ),
  escenatrespuertas: new undum.SimpleSituation(
    "<H1>The three doors</H1>\
    <img src='media/games/tutorial/trespuertas.jpg' class='float_right' width = 350 heigth = 250>\
    <p>When you leave with the key, you find 3 doors, each with a keyhole. Above each\
     door is a stone figure, the left door has a Medusa head, the middle door has a diamond\
    figure, the right door has a pointing arrow. You remember the note with the key said you\
    should not look at the exit, which may be an important detail.</p>\
    <p>You need to use the key to open the <a href='escenasemilibertad'>\
      Left door</a>, la <a href='puertaincorrecta'>\
      Middle door</a>, o la <a href='puertaincorrecta'>\
      Right door</a>.</p>"
  ),
  puertaincorrecta: new undum.SimpleSituation(
  "<H1>Regrettable Decision</H1>\
  <img src='media/games/tutorial/muerte_cofre2.png' class='float_right' width = 350 heigth = 250>\
  <p>You tried to open the wrong door, and now the key is stuck and you cannot leave the labyrinth.</p>"
  ),
    escenafinal: new undum.SimpleSituation(
      "<H1>Final passage</H1>\
      <img src='media/games/tutorial/puerta.jpg' class='float_right' width = 250 heigth = 250>\
      <p>You opened the correct door and you can continue and at last be FREE!.\
       Hope you enjoyed the game and you got all the coins!</p>"
    ),


     // NB: The 'hub' situation which is the main list of topics, is
     // defined wholly in the HTML file, and doesn't have an entry in
     // the game.situations dictionary in this file.

     // For variety, here we define a situation using the top-level
     // Situation type. This is a neat approach to generate text by
     // looking it up in the HTML document. For static text that makes
     // more sense than writing it longhand.
     situations: new undum.Situation({
         enter: function(character, system, from) {
             system.write($("#s_situations").html());
         },
         tags: ["topic"],
         optionText: "What Undum Games are Made Of",
         displayOrder: 1
     }),
     todo: new undum.SimpleSituation(
         "<p>Two things can happen in a situation. The character either\
         <a href='links'>leaves</a> the situation and enters another one, or\
         they carry out some <a href='./do-something'>action</a>. Actions may\
         perform some processing, they may display some results, but\
         ultimately they put the character back into the same situation\
         again.</p>\
         \
         <p>When you are designing your game, use situations to reflect a\
         change in what the character can do. So you would change situation if\
         the character pulls a lever to open a trapdoor, for example. Actions\
         are intended for situations where the character can examine things\
         more closely, or maybe top up their magic by drinking a potion.\
         Things that don't affect the state of the world around them.</p>\
         \
         <p>Situations generate content when they are <em>enter</em>ed,\
         <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
         italicised words are the names of the three methods that do this).\
         You can write code to generate content in any way you like, so the\
         content that is displayed can be totally dynamic: taking into\
         account the current state of the character.\
         Content is just plain HTML, so you use regular HTML tags to make\
         things <strong>bold</strong> or <em>italic</em>, or to include\
         images. This gives you a lot of flexibility. For example, since Undum\
         targets HTML5 browsers, you could use the <em>audio</em> or\
         <em>video</em> tags to include rich media.</p>\
         \
         <p class='transient'>Make sure you've carried out the action above,\
         then <a href='hub'>return to the topic list</a>.</p>",
         {
             actions: {
                 'do-something': "<p>You carried out the action, well done.\
                                  You'll notice that the links for this\
                                  situation are still active. This means you\
                                  can click to perform the action again.</p>"
             }
         }
     ),
     links: new undum.SimpleSituation(
         "<p>Between each chunk of new text, Undum inserts a discreet line\
         in the margin. This allows you to see at a glance everything that\
         has been output as a result of your last click.\
         It is particularly useful for small devices, or when\
         lots of content has appeared. The window also scrolls so the start\
         of the new content is as near to the top of the window as possible.\
         This is also designed to help you read more naturally.</p>\
         \
         <p>If you've been watching carefully, you will have noticed that\
         parts of the text have been disappearing when you move between\
         situations. This isn't a bug! One of the aims of Undum is to give\
         game designers the ability to make the transcript of\
         the game read as a coherent piece of narrative. However, you often\
         need chunks of text that do nothing but offer the reader choices.\
         Undum defines a special CSS class to add to your HTML for this\
         (remember generated content is just HTML). It is <em>transient</em>,\
         and can be applied to paragraphs, <em>div</em>s, or just\
         <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
         \
         <p>You may also have noticed that, when you move situations, all the\
         links in the previous situation turn into regular text. This is to\
         stop you backtracking and trying previous options when you've already\
         committed to one. In other H-IF systems, this is\
         done by completely removing the content from previous pages.\
         That prevents you going back and reading your story, however.</p>\
         \
         <p class='transient'>The 'Different Kinds of Links' topic has more\
         about these links.\
         Let's return to the <a href='hub'>topic list</a>.</p>",
         {
             heading: "Disappearing Content",
             diplayOrder: 2,
             tags: ["topic"]
         }
     ),
     sticky: new undum.SimpleSituation(
         "<p>There are three types of link in Undum. The first two we've seen\
         in previous topics:\
         links to change situation and links to carry out an action. When you\
         include a link in your output, Undum parses it and wires it up\
         correctly. If you create a link with a HTML <em>href</em> attribute\
         containing just a name ('ballroom', for\
         example) this will send the character to the situation with that\
         name. Links\
         with two components ('ballroom/view-painting', for example) send\
         the character to a new situation <em>and then</em> carry out the\
         named action ('view-painting' in this case). To carry out an action\
         in the current situation, you can replace the situation name with a\
         dot (so it would be './view-painting'). In all cases, if the\
         character is already in that situation, then the situation's\
         <em>enter</em> method won't be called again.</p>\
         \
         <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
         <p>The third type of link, then, is a general hyperlink. If your\
         link doesn't consist of a single element or pair of elements, as\
         above, then Undum will guess that you have a normal hyperlink. As\
         <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
         If you have a link that <em>does</em> look like an Undum link, you\
         can still force Undum not to interpret it as an action or situation\
         move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
         links that don't have the <em>raw</em> class, but that are considered\
         to be non-Undum links (like the link above), will have <em>raw</em>\
         added to them before display. This could allow you to style external\
         links differently, as we have done here.</p>\
         \
         <p>In the last situation I said you can prevent links from being\
         turned into regular text when you move situations. This is done\
         by another CSS class: <em>sticky</em>. When you\
         <a href='oneshot'>leave this situation</a>, you'll notice the\
         external link stays active. This can allow you to have options that\
         stay valid throughout the narrative, for example, such as a spell to\
         teleport home.</p>",
         {
             tags: ["topic"],
             displayOrder: 3,
             heading: "Different Kinds of Links"
         }
     ),
     oneshot: new undum.SimpleSituation(
         "<p>There is one final option for links. If you give a link\
         the <em>once</em> CSS class, then that link will disappear\
         after it is clicked. This is  used (as in\
         <a href='./one-time-action' class='once'>this link</a>) for\
         actions that you only want to be possible once. There is no\
         point using 'once' on situation links because they'll be turned\
         into text as soon as you click them anyway (unless they are also\
         <em>sticky</em>, of course).</p><p>Once links are useful\
         for actions such as examining an object more carefully. You\
         don't want lots of repeated descriptions, so making the link\
         a <em>once</em> link is more user friendly.</p>\
         <p>If you have more than one link to the same action, then all\
         matching links will be removed, so you don't have to worry about\
         the player having an alternative way to carry out the action.</p>\
         <p class='transient'>After you've clicked the link, let's\
         <a href='hub'>move on</a>.</p>",
         {
             actions: {
                 "one-time-action": "<p>As I said, one time actions are\
                                    mostly used to describe something in\
                                    more detail, where you don't want the\
                                    same descriptive text repeated over and\
                                    over</p>"
             }
         }
     ),
     qualities: new undum.SimpleSituation(
         "<p>Let's talk about the character.\
         The character is described by a series of <em>qualities</em>. These\
         are numeric values that can describe anything from natural abilities\
         to how much of a resource the character controls. Qualities are\
         shown in the box on the right of the text.</p>\
         \
         <p>The qualities there are those you started the game with. When you\
         <a href='quality-types'>go to the next situation</a>, keep your\
         eyes on the character panel. You'll notice I'll give you a boost to\
         your stamina quality. This process is animated and highlighted to\
         draw your attention to it. You could also get a boost of skill\
         by carrying out <a href='./skill-boost'>this action</a> as many\
         times as you like.</p>",
         {
             heading: "Qualities and the Character",
             tags: ["topic"],
             displayOrder: 4,
             actions: {
                 "skill-boost": function(character, system, action) {
                     system.setQuality("skill", character.qualities.skill+1);
                 }
             },
             exit: function(character, system, to) {
                 system.setQuality("stamina", character.qualities.stamina+1);
             }
         }
     ),
     "quality-types": new undum.SimpleSituation(
         "<p>Not all the qualities in the character panel are displayed as\
         numeric. Internally they are all numeric, but different qualities\
         get to choose how to display themselves. So 'Luck', for example, is\
         displayed as words (based on the FUDGE RPG's adjective scale),\
         and 'Novice' is using just a check-mark.</p>\
         \
         <p>To see how Luck changes, try using this\
         <a href='./luck-boost'>luck-boosting action</a> or this\
         <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
         luck uses a numeric bonus when it runs out of words. There are a range\
         of different display types provided with Undum, and you can easily\
         add your own too.</p>\
         \
         <p>When you <a href='character-text'>leave this situation</a>,\
         I'll set 'Novice' to zero. Watch\
         the character panel, and you'll see that Novice decides it doesn't\
         need to be displayed any more and will be removed. You will also see\
         that when the last\
         quality in a group is removed ('Novice' is in the 'Progress' group),\
         then the group heading is also removed. You can tell Undum what\
         group each quality belongs to, and what order they should be listed.\
         <p>",
         {
             actions: {
                 "luck-boost": function(character, system, action) {
                     system.setQuality("luck", character.qualities.luck+1);
                 },
                 "luck-reduce": function(character, system, action) {
                     system.setQuality("luck", character.qualities.luck-1);
                 }
             },
             exit: function(character, system, to) {
                 system.setQuality("novice", 0);
             }
         }
     ),
     "character-text": new undum.SimpleSituation(
         "<h1>Character Text</h1>\
         <p>Above the list of qualities is a short piece of text, called\
         the character-text. This describes the character in some way. It\
         can be set by any action or when entering or leaving a situation.\
         It is just regular HTML content, as for all text in Undum. It can\
         also contain Undum links, so this is another place you can put\
         actions that the character can carry out over a long period of time.\
         </p>\
         <p class='transient'>Let's go back to the\
         <a href='hub'>topic list</a>. As you do, I'll change the\
         character text. Notice that it is highlighted, just the same as\
         when a quality is altered.</p>",
         {
             exit: function(character, system, to) {
                 system.setCharacterText(
                     "<p>We're nearing the end of the road.</p>"
                 );
             }
         }
     ),
     progress: new undum.SimpleSituation(
         "<p>Sometimes you want to make the change in a quality into a more\
         significant event. You can do this by animating the change in\
         quality. If you <a href='./boost-stamina-action'>boost your\
         stamina</a>, you will see the stamina change in the normal\
         way in the character panel. But you will also see a progress\
         bar appear and animate below.</p>",
         {
             tags: ["topic"],
             heading: "Showing a Progress Bar",
             displayOrder: 5,
             actions: {
                 // I'm going indirect here - the link carries out an
                 // action, which then uses doLink to directly change
                 // the situation.  This isn't the recommended way (I
                 // could have just changed situation in the link), but
                 // it illustrates the use of doLink.
                 "boost-stamina-action": function(character, system, action) {
                     system.doLink("boost-stamina");
                 }
             },
             exit: function(character, system, to) {
                 system.animateQuality(
                     'stamina', character.qualities.stamina+1
                 );
             }
         }
     ),
     "boost-stamina": new undum.SimpleSituation(
         "<p>\
         <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
         The progress bar is also useful in situations where the\
         character block is displaying just the whole number of a quality,\
         whereas some action changes a fraction. If the quality is displaying\
         the character's level, for example, you might want to show a progress\
         bar to indicate how near the character is to levelling up.</p>\
         \
         <p>After a few seconds, the progress bar disappears, to keep the\
         focus on the text. Undum isn't designed for games where a lot of\
         statistic management is needed. If you want a change to be part\
         of the permanent record of the game, then write it in text.</p>\
         \
         <p>Let's <a href='hub'>return to the topic list.</a></p>"
         ),
     // Again, we'll retrieve the text we want from the HTML file.
     "saving": new undum.Situation({
         enter: function(character, system, from) {
             system.write($("#s_saving").html());
         },
         tags: ["topic"],
         displayOrder: 6,
         optionText: "Saving and Loading"
     }),

     "implicit-boost": new undum.SimpleSituation(
         "<p>Your luck has been boosted<span class='transient'>, check the\
         list of options to see if they have changed</span>.</p>",
         {
             tags: ["example"],
             enter: function(character, system, from) {
                 system.animateQuality("luck", character.qualities.luck+1)
                 system.doLink('example-choices');
             },
             optionText: "Boost Your Luck",
             displayOrder: 1,
             canView: function(character, system, host) {
                 return character.qualities.luck < 4;
             }
         }
     ),
     "implicit-drop": new undum.SimpleSituation(
         "<p>Your luck has been reduced<span class='transient'>, check the\
         list of options to see if they have changed</span>.</p>",
         {
             tags: ["example"],
             enter: function(character, system, from) {
                 system.animateQuality("luck", character.qualities.luck-1)
                 system.doLink('example-choices');
             },
             optionText: "Reduce Your Luck",
             displayOrder: 2,
             canView: function(character, system, host) {
                 return character.qualities.luck > -4;
             }
         }
     ),
     "high-luck-only": new undum.SimpleSituation(
         "<p>Your luck is higher than 'fair'. The link to this \
         situation would not\
         have appeared if it were lower.</p>",
         {
             tags: ["example"],
             enter: function(character, system, from) {
                 system.doLink('example-choices');
             },
             optionText: "High Luck Option",
             displayOrder: 3,
             canView: function(character, system, host) {
                 return character.qualities.luck > 0;
             }
         }
     ),
     "low-luck-only": new undum.SimpleSituation(
         "<p>Your luck is lower than 'fair'. The link to this situation \
         appears whether\
         it is low or high, but can only be chosen if it is low. It does this\
         by defining a <em>canChoose</em> method.</p>",
         {
             tags: ["example"],
             enter: function(character, system, from) {
                 system.doLink('example-choices');
             },
             optionText: "Low Luck Option (requires low luck to be clickable)",
             displayOrder: 3,
             canChoose: function(character, system, host) {
                 return character.qualities.luck < 0;
             }
         }
     ),

     "last": new undum.SimpleSituation(
         "<h1>Where to Go Now</h1>\
         <p>So that's it. We've covered all of Undum. This situation is the\
         end, because it has no further links. The 'The End' message is\
         just in the HTML output of this situation, it isn't anything special\
         to Undum</p>\
         \
         <p>I've added an\
         inspiration quality to your character list. Its time for you to\
         crack open the game file and write your own story.</p>\
         <h1>The End</h1>",
         {
             tags: ["topic"],
             optionText: "Finish the Tutorial",
             displayOrder: 8,
             enter: function(character, system, from) {
                 system.setQuality("inspiration", 1);
                 system.setCharacterText(
                     "<p>You feel all inspired, why not have a go?</p>"
                 );
             }
         }
     )
 };

 // ---------------------------------------------------------------------------
 /* The Id of the starting situation. */
 undum.game.start = "start";

 // ---------------------------------------------------------------------------
 /* Here we define all the qualities that our characters could
  * possess. We don't have to be exhaustive, but if we miss one out then
  * that quality will never show up in the character bar in the UI. */
 undum.game.qualities = {
     moneda: new undum.IntegerQuality(
         "Coins", {priority:"0003", group:'progreso', onDisplay:"&#10003;"}
     ),
     llave: new undum.OnOffQuality(
         "Key", {priority:"0002", group:'progreso', onDisplay:"&#10003;"}
     ),
     sobre: new undum.OnOffQuality(
         "Envelope", {priority:"0004", group:'objetos', onDisplay:"&#10003;"}
     ),
     nota: new undum.OnOffQuality(
         "Sinister Note", {priority:"0005", group:'objetos', onDisplay:"&#10003;"}
     )
 };

 // ---------------------------------------------------------------------------
 /* The qualities are displayed in groups in the character bar. This
  * determines the groups, their heading (which can be null for no
  * heading) and ordering. QualityDefinitions without a group appear at
  * the end. It is an error to have a quality definition belong to a
  * non-existent group. */
    undum.game.qualityGroups = {
      progreso: new undum.QualityGroup('Progress', {priority:"0001"}),
      objetos: new undum.QualityGroup('Objects', {priority:"0002"})
   };

 // ---------------------------------------------------------------------------
 /* This function gets run before the game begins. It is normally used
  * to configure the character at the start of play. */
 undum.game.init = function(character, system) {
     character.qualities.moneda = 0;
     system.setQuality( "llave" , false )
     system.setQuality( "sobre" , false )
     character.qualities.nota = 1;
     system.setCharacterText("<p>These are the objects you've been finding.</p>");
 };
