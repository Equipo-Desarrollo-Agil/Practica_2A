// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
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
        "<h1>Pasillo del laberinto</h1>\
        <img src='media/games/tutorial/Pasillo_piedra.png' class='float_right'>\
        <p>Te despiertas en medio de un pasillo algo aturdida, no recuerdas\
        nada de la noche anterior, empiezas a investigar el lugar donde está\
        hasta que llegas a la conclusión de que estás en un laberinto. Asustada\
        empiezas a buscar entre sus bolsillos tu móvil para pedir ayuda, pero\
        allí lo único que encuentra es un papel que te revela lo siguiente:</p>\
        <p><i> Hola Robertina, te preguntarás qué haces aquí y por qué, bueno\
        lo único que te interesa saber por ahora es que estás encerrada aquí\
        dentro y para salir tendrás que encontrar la salida y la llave de su\
        cerradura, para ello solo te valdrás de tu astucia asi que espero que\
        atendieses en el colegio porque no será fácil</i></p>\
        <p>Después de leer esto miras a tu alrededor y ves tus opciones:</p>\
        \
        <p><a href='escena2'>Solo hay un camino asi que seguiré por aquí.</a></p>"
    ),
    escena2:new undum.SimpleSituation(
      "<h1>Esquina a torcer</h1>\
      <p>Has decidido seguir el camino sin saber lo que te espera, ya que no\
       te queda otra opción. Te da ansiedad estar encerrada en ahí, un sitio\
       desconocido, sin saber cuánto tiempo vas a permanecer dentro, sin saber\
       cómo llegaste ni cómo sobrevivir a este tiempo.</p>\
       <img src='media/games/tutorial/esquina.jpg' class='float_left'width = 200 heigth = 150>\
       <p>Seguir las luces del pasilllo te ha llevado a su final, llegaste a\
       la esperada esquina... Debes seguir para conocer la razón estas ahí\
       encerrada. Decidida te dispones a girarte hacia la derecha para ver\
       qué es lo que te depara este misterioso laberinto.\
       \
      ¿Qué es eso? Un gran destello te nubla la vista tanto, que sientes un\
      ligero mareo, demasiada luz en un lugar tan cerrado.\
      <p><a href='escena3'>Quieres descubrir qué es lo que brilla con tanta intensidad.</a></p>"
    ),
    escena3:new undum.SimpleSituation(
      "<h1>La moneda</h1>\
      <img src='media/games/tutorial/moneda.jpg' class='float_right' width = 350 heigth = 350>\
      <p>Aturdida al girar la esquina y curiosa de saber que era lo que tanto brillaba\
      vió en el lado derecho del pasillo algo redondo y dorado... es... UNA <a href='./moneda' class='once'>MONEDA</a> .\
      Justo al lado, estaba colocado otro curioso papel en el que desvelaba: </p>\
      <p><i> Te has quedado impacta al ver esta gran luminusidad, ¿verdad?\
      Verás que para que te encuentres con la motivación de saber que cada vez estás\
      más cerca de la salida y ser por fin libre, a lo largo del laberinto te encontrarás\
      5 monedas, que te aseguro que no serán algunas nada fácil de encontrar, también tienes\
      la posibilidad de no recogerlas, pero con ellas te sentirás más seguro. ¡SUERTE!</i>\
      <a href='escena4'>Seguir el camino</a></p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", 1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
              },
              exit: function(character, system, to) {
                  system.setQuality("moneda", character.qualities.moneda);
              }
            }
      }
      ),
    escena4:new undum.SimpleSituation(
      "<h1>Toma nota</h1>\
       <img src='media/games/tutorial/moneda2.jpg' class='float_right'width = 200 heigth = 150>\
      <p>Las monedas son muy importantes para el progreso en el camino del laberinto.</p>",
       {
 				enter: function( character, system, from ) {
 					if( character.qualities.moneda ) {
 						system.doLink( "escena5" );
 					} else {
 						system.write( "<p>Al no coger la moneda, no ves bien el camino a seguir.</a></p>\
            </p>\
            <p><a href='escena3'>Quiero volver a coger la moneda</a></p>");
 					}
 				}
 			}
    ),
    escena5: new undum.SimpleSituation(
			"<p>Una vez recogida la moneda, te encuentras dos caminos, cada uno con un cartel\
      un poco peculiar, <a href='escena6'>Camino de los siniestros</a> o <a href='escena7'>Camino de la flor de la vida.</a></p>"
		),
    escena6: new undum.SimpleSituation(
      "<h1>Camino de los siniestros</h1>\
      <p>Al caminar por este gran pasillo oscuro y escalofriante.<p>\
      <p>Se da cuenta que no ve nada, echa mano a los bolsillos y encuentra el papel que se guardó\
      de las notas indicativas del laberinto y un mechero y decide <a href='escenaluz'>quemarlo</a> para así tener algo\
      para alumbrar pero tampoco sabe cuanto durará el papel o <a href='escenaoscura'>seguir abanzando a oscuras</a>.</p>"
    ),
    escenaoscura: new undum.SimpleSituation(
      "<img src='media/games/tutorial/oscuridad.jpg' class='float_right' width = 350 heigth = 350>\
	<p>La oscuridad no le deja ver, por lo tanto, no se atreves a seguir caminando\
      ya que no sabe hacia donde dirigirse, ni tampoco sabe si se llegará a encontrar\
      alguna otra nota interesante o cualquier otra cosa que le sirva para salir de ahí.\
      Entonces decide volver a coger el papel y <a href='escenaluz'>quemarlo</a>, así conseguirá algo de luz.</p>"
    ),
    escenaluz: new undum.SimpleSituation(
      "<H1>La luz te guiará</H1>\
      <img src='media/games/tutorial/antorcha.jpg' class='float_right' width = 350 heigth = 350>\
      <p>Hiciste bien en quemar aquel papel aunque te tienes que dar un poco de prisa\
      ya que no sabes cuanto tiempo podrás mantener el fuego.</p>\
      <p>Ve que a la derecha hay un cofre, un poco estropeado por el tiempo.\
      Decide <a href='cofre'>abrirlo</a>, con la curiosidad de seguir encontrando más enigmas.</p>\
      <p>Al final se encuentras una puerta vieja con un pomo un tanto extraño, decide investigar el <a href='pomo'>pomo</a>\
      o <a href='escena9'>abrir la puerta</a> para seguir investigando el laberinto. </p>"
    ),
    cofre: new undum.SimpleSituation(
       "<H1>El cofre</H1>\
       <img src='media/games/tutorial/cofrevacio.jpg' width = 400 heigth = 350>\
        <p>Dentro del cofre ves un libro, una botella de agua, y una calavera de oro lado a lado.\
		Arriba de estos objetos te das cuenta que hay una escritura en el cofre.\
		La escritura lee:</p>\
		<p> Digo mucho pero no me puedes oir, Me abro pero por mi no puedes pasar,Tengo espina pero no tengo hueso, no debo ser jusgado por mi cara, que soy?</p>\
        <p><a href='escenalibro'>Recojer libro</a>\, <a href='escenamuertecofre'>recojer agua</a>\, o <a href='escenamuertecofre'>recojer calabera</a>.</p>"
    ),
	escenalibro: new undum.SimpleSituation(
	   "<H1>El Libro</H1>\
	   <img src='media/games/tutorial/libro_moneda.jpg' width = 400 heigth = 350>\
	   <p>Al recojer el libro, oyes un ruido del cofre y el cofre se cierra solo.\
	   Abres el libro y te encuentras <a href='./moneda' class='once'>una moneda</a>.\
	   Al recojer la moneda, vez que la el libro solo tiene una pagina con palabras escritas.\
	   El libro dice, has evidado muerte por tu inteligencia, habre el cofre de nuevo y moriras.\
	   Debes dejar el libro y <a href='escenaluz2'>volver de adonde viniste</a>.</p>",
	   {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes otra moneda.</p>");
                }
            }
        }
	),
	escenamuertecofre: new undum.SimpleSituation(
		"<H1>La Curiosidad Mato al Gato</H1>\
		<img src='media/games/tutorial/muerte_cofre2.png' width = 400 heigth = 400>\
		<p>Al recojer el objeto, notas que habia un panel de presion abajo de el.\
		Oyes un ruido tras tuyo y una pared de piedra cae, cerrando el pasaje de entrada.\
		Te has quedado atrapada con el cofre, y como la salida, tu destino a sido sellado.</p>"
	),
	escenaluz2: new undum.SimpleSituation(
      "<H1>La luz te guiará</H1>\
      <img src='media/games/tutorial/antorcha.jpg' class='float_right' width = 350 heigth = 350>\
      <p>Hiciste bien en evitar el cofre.</p>\
      <p>Sigues a la puerta vieja con un pomo un tanto extraño, decide investigar el <a href='pomo'>pomo</a>\
      o <a href='escena9'>abrir la puerta</a> para seguir investigando el laberinto. </p>"
    ),
    pomo: new undum.SimpleSituation(
      "<H1>El misterioso pomo</H1>\
      <img src='media/games/tutorial/pomo.jpg' class='float_left' width = 200 heigth = 150>\
      <p><i>Parece que el pomo tiene una forma extraña y brillante. Se acerca y se da cuenta que es <a href='./moneda' class='once'>otra moneda</a>.\
      Se pregunta que al paso donde Se encuentra cuantas monedas llevas cogidas. ¿Estará ya cerca del final del laberinto?\
      ¿Cuántos pasillos le quedarán por recorrer? <a href='escenaluz'>Volver</a>.</i></p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
                }
            }
        }
    ),
    escena9: new undum.SimpleSituation(
        "<H1>Pasillo inquietante</H1>\
        <p>Robertina ya cansada y un poco mareada de tantos pasillos encuentra una silla\
        en la que no sabe si <a href='descansar'>sentarse</a> y tomar un descanso o <a href='escena10'>seguir</a>.</p>"
    ),
    descansar: new undum.SimpleSituation(
      "<img src='media/games/tutorial/silla.jpg' class='float_left' width = 200 heigth = 150>\
      <p>Decide sentarse y tomar un poco de aire para seguir con más fuerza.</p>\
      <p>Al agachar la cabeza, se da cuenta que en una de las patas delanteras de la silla\
      ve unas de las maravillosas <a href='./moneda' class='once'>monedas</a>.\
      Robertina ya se encuentra con las pilas recargadas y decide <a href='escena10'>seguir</a>.</p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
                }
            }
        }
    ),
    escena10: new undum.SimpleSituation(
      "<p>Siguiendo en el pasillo inquietante, al fondo ve una armadura, se pregunta que pasaría\
      si <a href='armadura'>moviese algunos de los dos brazos</a>.</p>\
      <p>En la bifurcación, se encuentra un camino hacia <a href='escena11'>la izquierda</a> con un cofre un tanto intrigante\
      y otra a <a href='escena12'>la derecha</a> con una puerta que pone 'EXIT'.</p> "
    ),
    armadura: new undum.SimpleSituation(
      "<H1>El hombre armado</H1>\
      <img src='media/games/tutorial/armadura.jpg' class='float_right' width = 100 heigth = 100>\
      <p>Al parecer, acaba de abrirse la armadura y ... ¡TACHÁN! <a href='./moneda' class='once'>Otra moneda</a>.\
      <p><a href='escenasiguiente'>Seguir</a>.</p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
                }
            }
        }
    ),
    escenasiguiente: new undum.SimpleSituation(
      "<p>Una vez en el camino tienes que decidir si ir a <a href='escena11'>la izquierda</a> a ver que hay en el cofre\
      o ir a  <a href='escena12'>la derecha</a> hacia la puerta.</p> "
    ),
    escena11: new undum.SimpleSituation(
      "<H1>Cofre misterioso</H1>\
      <img src='media/games/tutorial/cofre.jpeg' class='float_right' width = 250 heigth = 250>\
      <p>Como bien hemos dicho, hay un cofre misterioso. quizá al <a href='cofre1'>abrirlo</a> puede que se encuentre algo.</p>\
      <p><a href='escenaizquierda'>Abanzamos</a> hacia el pasillo derecho para abrir la puerta.</p>"
    ),
    cofre1: new undum.SimpleSituation(
        "<img src='media/games/tutorial/llave.jpeg' class='float_right' width = 200 heigth = 200>\
		<p>¡MARAVILLOSO! Hemos encontrado <a href='./llave' class='once'>la llave</a>.\
		Al lado de la llave te encurentras una nota que dice: La salida se debe seguir, pero no se debe mirar. Ya podemos ir en busca de la salida.\
        <a href='escenaizquierda'>Cerrar el cofre</a>.</p>",
        {
              actions:{
                "llave": function(character, system, to) {
                  system.setQuality("llave", 1);
                  system.setCharacterText("<p>La llave es lo más importante.</p>");
                },
                exit: function(character, system, to) {
                    system.setQuality("llave", character.qualities.llave);
                  }
              }
        }
    ),
    escenaizquierda: new undum.SimpleSituation(
      "<p>Antes de seguir abanzando tienes que saber que la llave es fundamental para salir del laberinto.</p>",
      {
       enter: function( character, system, from ) {
         if( character.qualities.llave ) {
           system.doLink( "escenatrespuertas" );
         } else {
           system.write( "<p>Al no coger la llave, no puedes salir del laberinto.</a></p>\
           </p>\
           <p><a href='cofre1'>Quiero abrir el cofre de nuevo.</a></p>");
         }
       }
     }
    ),
    escena12: new undum.SimpleSituation(
      "<H1>VUELVE A TOMAR NOTA</H1>\
      <p>Para abrir la puerta y salir del laberinto, antes es necesario coger la llave para poder abrir la puerta,\
      espero que no sea muy complicado encontrarla.¡SUERTE!</p>",
       {
 				enter: function( character, system, from ) {
 					if( character.qualities.llave ) {
 						system.doLink( "escenafinal" );
 					} else {
 						system.write( "<p>Al no coger la llave, no puedes salir del laberinto.</a></p>\
            </p>\
            <p><a href='escena11'>Quiero ir en busca de la llave.</a></p>");
 					}
 				}
 			}
    ),
	escenatrespuertas: new undum.SimpleSituation(
	  "<H1>Las Tres Puertas</H1>\
	  <img src='media/games/tutorial/trespuertas.jpg' class='float_right' width = 350 heigth = 250>\
	  <p>Al salir con la llave, te encuentras tres puertas, cada una con un llavero.\
	  Arriba de cada puerta hay una figura de piedra, la puerta izquierda tiene la cabeza de Medusa,\
	  la central tiene una figura de diamanate, y la de la derecha una flecha dirigiente.\
	  Te recuerdas lo que dijo la nota en el cofre que la salida no se debe mirar, puede ser importante este detalle.</p>\
	  <p>Tendras que usar la llave para abrir la <a href='escenafinal'>\
      puerta izquierda</a>, la <a href='puertaincorrecta'>\
      puerta central</a>, o la <a href='puertaincorrecta'>\
      puerta derecha </a>.</p>"
	),
	puertaincorrecta: new undum.SimpleSituation(
	"<H1>Decision Lamentable</H1>\
	<img src='media/games/tutorial/muerte_cofre2.png' class='float_right' width = 350 heigth = 250>\
	<p>Intentaste abrir la puerta que no era y la llave se te partio, dejandote \
	sin forma de salir del laberinto.</p>"
	),
    escenafinal: new undum.SimpleSituation(
      "<H1>Pasillo final</H1>\
      <img src='media/games/tutorial/puerta.jpg' class='float_right' width = 250 heigth = 250>\
      <p>Has abierto la puerta correcta y con tu llave ya puedes seguir tu camino y por FIN ser LIBRE.</p>\
      <p>Espero que te hayas divertido en el juego del laberinto y hayas consegido todas las monedas\
      que se encontraban en él.</p>"
    ),
    escena7: new undum.SimpleSituation(
      "<h1>Camino de la flor de la vida</h1>\
      <p> Has girado a la derecha y ante ti encuentras algo que te estremece,\
      hay un muro ante ti que te impide el paso, por lo tanto decides\
      volver por donde has venido aunque cuando te das la vuelta te percatas\
      de que había algo extraño en ese muro, podrías <a href='escenadetalle'>\
      observarlo detalladamente </a>, aunque no arriesgarse y <a href='escena5'>\
      volver </a>, cobarde, pero buena idea.</p>"


    ),
    escenadetalle: new undum.SimpleSituation(
      "<p> Resulta que al ver bien el muro observas que efectivamente ves que\
      las piedras no son como el resto del laberinto, además tienen una posicion\
      extraña si las comparas con las demás.<br>\
      Percibes que hay un hueco entre dos piedras con una forma muy peculiar,\
      <i>Se parece mucho a la ranura de una máquina expendera</i>, se te pasa\
      por la cabeza la idea de <a href='./menosmoneda'>meter\
      la moneda </a>que cogiste antes pero, ¿y si la pierdes para nada?,\
      ya le tienes más cariño que a tu hermano a esa moneda, lo mismo preferirías\
      <a href='escena5'> volver por donde viniste</a></p>",
      {
            actions:{
              "menosmoneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda-1);
                system.setCharacterText("<p>¡Has perdido una moneda!</p>");
                system.doLink( "escena8" );
              }

            }
      }
    ),
    escena8: new undum.SimpleSituation(
      "<h1> Final de la flor de la vida </h1>\
      <img src='media/games/tutorial/pasillomoneda.jpg' class='float_left'width = 200 heigth = 150>\
      <p> El muro se abre ante ti y detrás de él encuentras \
      <a href='./moneda' class='once'>la moneda</a> que insertaste antes. Después de esto ves una especie de\
      sala que ocultaba este muro, en el centro de la sala hay un pedestal\
      en el cuál se encuentra una brillante y hermosa moneda y al lado otra\
      moneda igual que la anterior pero oxidada y sucia, te acercas al pedestal\
      para mirarlas y te das cuenta de que son iguales a la que tienes. Al lado\
      de estas monedas, en el pedestal, hay un grabado que dice: <i>Vida y\
      Muerte, dos caras de la misma moneda, al igual que esta sala en donde\
      puede llegar tu final o seguir en la flor de la vida</i>. <br>\
      Después de leer esto no sabes si coger la <a href='escenamuerte'>\
      moneda brillante</a>, la <a href='./monedaoxidada' class='once'> moneda oxidada\
      </a> o <a href='escena5'>volver por dónde viniste</a></p>",
      {
            actions:{
              "moneda": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
              },
              "monedaoxidada": function(character, system, to) {
                system.animateQuality("moneda", character.qualities.moneda+1);
                system.setCharacterText("<p>Perfecto. Ahora tienes una moneda.</p>");
              }

            }
      }

    ),
    escenamuerte: new undum.SimpleSituation(
      "<h1> Tu final llegó antes de tiempo </h1>\
      <p>A veces no te puedes fiar de las apariencias pues la moneda estaba\
      brillante debido a un fuerte veneno que al tocarlo has fallecido\
      instantáneamente, ya nunca sabrás quién te encerró allí ni lo que\
      oculta este laberinto, a no ser que...</p> <br> <br> <br>\
      <i>pss aquí, F5</i>"
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
        "Monedas", {priority:"0003", group:'progreso', onDisplay:"&#10003;"}
    ),
    llave: new undum.OnOffQuality(
        "llave", {priority:"0002", group:'progreso', onDisplay:"&#10003;"}
    ),
    nota: new undum.OnOffQuality(
        "Nota Siniestra", {priority:"0005", group:'objetos', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
   undum.game.qualityGroups = {
     progreso: new undum.QualityGroup('Progreso', {priority:"0001"}),
     objetos: new undum.QualityGroup('Objetos', {priority:"0002"})
  };

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.moneda = 0;
    system.setQuality( "llave" , false )
    character.qualities.nota = 1;
    system.setCharacterText("<p>Estos son los Objetos que has ido encontrando.</p>");
};
