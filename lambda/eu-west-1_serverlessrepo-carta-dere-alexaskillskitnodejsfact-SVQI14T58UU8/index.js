
// comentario agregado desde rama master
const Alexa = require('ask-sdk');
const SALUDO = 'Bienvenidos a Carta de los derechos fundamentales de la unión europea.\nHay 54 artículos, dime que artículo quieres que te lea, o puedes dedirme un artículo al azar.\nPara más opciones pide ayuda,';
const SALUDO_DISPLAY = 'Carta de los derechos fundamentales de la Unión Europea';
const PREGUNTA = '\n Que quieres hacer? ';
const PREGUNTA2 ='\n Algo más?, pide ayuda si no recuerdas la mecánica ';
const AYUDA = 'Puedes pedir artículos relacionados con:\nDignidad.\nLibertades.\nIgualdad.\nSolidaridad.\nCiudadanía.\nJusticia.\nDisposiciones generales.\nTambién puedes pedir la carta de derechos fundamentales.\nO bien, si quieres salir de la skill debes decir cancela o salir.';
const SALIR = 'A sido un placer repasar la carta de los derechos fundamentales de la Unión Europea contigo, recuerda que para volver a abrir la skill debes decir abre derechos fundamentales, hasta pronto. ';
const NUM_ERROR = 'El artículo que me has pedido está fuera de rango, debes pedirme un artículo desde el 1 al 54 incluidos, ';
const NUM_ERRORX ='Lo siento no entendí bien lo que me has pedido, puedes pedir ayuda si estás confuso';
const ERROR_DISP = 'Lo que has pedido no está disponible, debes dedir:\n';
const ERROR = 'Ha ocurrido un error.\n';
const ERROR_ARTICULO = 'Lo siento, no especificaste un número válido.\n';
const TITULO = 'Hay 54 artículos repartidos en varias temáticas:\nDignidad del 1-5.\nLibertades del 6-19.\nIgualdad del 27-38.\nSolidaridad del 27-38.\nCiudadanía del 39-46.\nJusticia del 47-50.\nDisposiciones generales del artículo 51-54.\nPide que lea :La carta de derechos fundamentales.';
const RECORDATORIO ='Para salir di salir o cancela';
const DIGNIDAD = 'Relacionados con dignidad. \nArtículos del 1 al 5';
const LIBERTADES ='Relacionados con libertades. \nArtículos del 6 al 19';
const IGUALDAD = 'Relacionados con igualdad. \nArtículos del 20 al 26';
const SOLIDARIDAD = 'Relacionados con solidaridad. \nArtículos del 27 al 38';
const CIUDADANIA = 'Relacionados con ciudadanía. \nArtículos del 39 al 46';
const JUSTICIA = 'Relacionados con justicia. \nArtículos del 47 al 50';
const DISPOSICIONES_GENERALES = 'Relacionados con disposiciones generales. \nArtículos del 51 al 54';
const MAS_INFO = 'Hay 54 artículos, dime que artículo quieres que te lea o puedes dedirme un artículo al azar.';
const INFO_DISPLAY = 'Carta de los derechos fundamentales de la Unión Europea,\nArtículos del 1 al 54,\nDignidad del 1 al 5.\nLibertades del 6 al 19.\nIgualdad del 20 al 26. \nSolidaridad del 27 al 38. \nCiudadanía del 39 al 46. \nJusticia del 47 al 50. \nDisposiciones adicionales del 51 al 54.';
const DIGNIDAD_DISPLAY ="DIGNIDAD: 1-5.\n";
const LIBERTADES_DISPLAY ="LIBERTADES: 6-19.\n";
const IGUALDAD_DISPLAY ="IGUALDAD: 20-26.\n";
const SOLIDARIDAD_DISPLAY ="SOLIDARIDAD: 27-38.\n";
const CIUDADANIA_DISPLAY ="CIUDADANIA: 39-46..\n";
const JUSTICIA_DISPLAY ="JUSTICIA: 47-50.\n";
const DISPOSICIONES_GENERALES_DISPLAY ="DISPOSICIONES GENERALES: 51-54.\n";
const CARTA_DERECHOS_FUNDAMENTALES_DISPLAY = "CARTA DE LOS DERECHOS FUNDAMENTALES DE LA UNIÓN EUROPEA";

const ARTICULO = [
'Artículo 1. Dignidad humana. La dignidad humana es inviolable. Será respetada y protegida.',
'Artículo 2. Derecho a la vida, 1. Toda persona tiene derecho a la vida. 2.  Nadie podrá ser condenado a la pena de muerte ni ejecutado.',
'Artículo 3. Derecho a la integridad de la persona, 1.   Toda persona tiene derecho a su integridad física y psíquica. 2.   En el marco de la medicina y la biología, se respetarán en particular: El consentimiento libre e informado de la persona de que se trate, de acuerdo con las modalidades establecidas por la ley; La prohibición de las prácticas eugenésicas, en particular las que tienen como finalidad la selección de las personas; , La prohibición de que el cuerpo humano o partes del mismo en cuanto tales se conviertan en objeto de lucro; , La prohibición de la clonación reproductora de seres humanos.',
'Artículo 4. Prohibición de la tortura y de las penas o los tratos inhumanos o degradantes. Nadie podrá ser sometido a tortura ni a penas o tratos inhumanos o degradantes.',
'Artículo 5. Prohibición de la esclavitud y del trabajo forzado: , 1.   Nadie podrá ser sometido a esclavitud o servidumbre. 2.   Nadie podrá ser constreñido a realizar un trabajo forzado u obligatorio. 3.   Se prohíbe la trata de seres humanos.',
'Artículo 6. Derecho a la libertad y a la seguridad. Toda persona tiene derecho a la libertad y a la seguridad.',
'Artículo 7. Respeto de la vida privada y familiar. Toda persona tiene derecho al respeto de su vida privada y familiar, de su domicilio y de sus comunicaciones.',
'Artículo 8. Protección de datos de carácter personal: . Toda persona tiene derecho a la protección de los datos de carácter personal que le conciernan. Estos datos se tratarán de modo leal, para fines concretos y sobre la base del consentimiento de la persona afectada o en virtud de otro fundamento legítimo previsto por la ley. Toda persona tiene derecho a acceder a los datos recogidos que le conciernan y a obtener su rectificación. El respeto de estas normas estará sujeto al control de una autoridad independiente.',
'Artículo 9. Derecho a contraer matrimonio y derecho a fundar una familia. Se garantizan el derecho a contraer matrimonio y el derecho a fundar una familia según las leyes nacionales que regulen su ejercicio.',
'Artículo 10. Libertad de pensamiento, de conciencia y de religión: Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión. Este derecho implica la libertad de cambiar de religión o de convicciones, así como la libertad de manifestar su religión o sus convicciones individual o colectivamente, en público o en privado, a través del culto, la enseñanza, las prácticas y la observancia de los ritos. Se reconoce el derecho a la objeción de conciencia de acuerdo con las leyes nacionales que regulen su ejercicio.',
'Artículo 11. Libertad de expresión y de información: Toda persona tiene derecho a la libertad de expresión. Este derecho comprende la libertad de opinión y la libertad de recibir o comunicar informaciones o ideas sin que pueda haber injerencia de autoridades públicas y sin consideración de fronteras. Se respetan la libertad de los medios de comunicación y su pluralismo.',
'Artículo 12. Libertad de reunión y de asociación: Toda persona tiene derecho a la libertad de reunión pacífica y a la libertad de asociación en todos los niveles, especialmente en los ámbitos político, sindical y cívico, lo que supone el derecho de toda persona a fundar con otras sindicatos y a afiliarse a los mismos para la defensa de sus intereses. Los partidos políticos a escala de la Unión contribuyen a expresar la voluntad política de los ciudadanos de la Unión.',
'Artículo 13. Libertad de las artes y de las ciencias: Las artes y la investigación científica son libres. Se respeta la libertad de cátedra.',
'Artículo 14. Derecho a la educación: Toda persona tiene derecho a la educación y al acceso a la formación profesional y permanente. Este derecho incluye la facultad de recibir gratuitamente la enseñanza obligatoria. Se respetan, de acuerdo con las leyes nacionales que regulen su ejercicio, la libertad de creación de centros docentes dentro del respeto de los principios democráticos, así como el derecho de los padres a garantizar la educación y la enseñanza de sus hijos conforme a sus convicciones religiosas, filosóficas y pedagógicas.',
'Artículo 15. Libertad profesional y derecho a trabajar: Toda persona tiene derecho a trabajar y a ejercer una profesión libremente elegida o aceptada. Todo ciudadano de la Unión tiene libertad para buscar un empleo, trabajar, establecerse o prestar servicios en cualquier Estado miembro. Los nacionales de terceros países que estén autorizados a trabajar en el territorio de los Estados miembros tienen derecho a unas condiciones laborales equivalentes a aquellas de que disfrutan los ciudadanos de la Unión.',
'Artículo 16. Libertad de empresa: Se reconoce la libertad de empresa de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales.',
'Artículo 17. Derecho a la propiedad: Toda persona tiene derecho a disfrutar de la propiedad de los bienes que haya adquirido legalmente, a usarlos, a disponer de ellos y a legarlos. Nadie puede ser privado de su propiedad más que por causa de utilidad pública, en los casos y condiciones previstos en la ley y a cambio, en un tiempo razonable, de una justa indemnización por su pérdida. El uso de los bienes podrá regularse por ley en la medida en que resulte necesario para el interés general. Se protege la propiedad intelectual.',
'Artículo 18. Derecho de asilo: Se garantiza el derecho de asilo dentro del respeto de las normas de la Convención de Ginebra de 28 de julio de 1951 y del Protocolo de 31 de enero de 1967 sobre el Estatuto de los Refugiados y de conformidad con el Tratado de la Unión Europea y con el Tratado de Funcionamiento de la Unión Europea (en lo sucesivo denominados «los Tratados»).',
'Artículo 19. Protección en caso de devolución, expulsión y extradición: Se prohíben las expulsiones colectivas. Nadie podrá ser devuelto, expulsado o extraditado a un Estado en el que corra un grave riesgo de ser sometido a la pena de muerte, a tortura o a otras penas o tratos inhumanos o degradantes.',
'Artículo 20. Igualdad ante la ley: Todas las personas son iguales ante la ley.',
'Artículo 21. No discriminación: Se prohíbe toda discriminación, y en particular la ejercida por razón de sexo, raza, color, orígenes étnicos o sociales, características genéticas, lengua, religión o convicciones, opiniones políticas o de cualquier otro tipo, pertenencia a una minoría nacional, patrimonio, nacimiento, discapacidad, edad u orientación sexual. Se prohíbe toda discriminación por razón de nacionalidad en el ámbito de aplicación de los Tratados y sin perjuicio de sus disposiciones particulares.',
'Artículo 22. Diversidad cultural, religiosa y lingüística. La Unión respeta la diversidad cultural, religiosa y lingüística.',
'Artículo 23. Igualdad entre mujeres y hombres: La igualdad entre mujeres y hombres deberá garantizarse en todos los ámbitos, incluidos en materia de empleo, trabajo y retribución. El principio de igualdad no impide el mantenimiento o la adopción de medidas que supongan ventajas concretas en favor del sexo menos representado.',
'Artículo 24. Derechos del niño: Los niños tienen derecho a la protección y a los cuidados necesarios para su bienestar. Podrán expresar su opinión libremente. Ésta será tenida en cuenta para los asuntos que les afecten, en función de su edad y madurez. En todos los actos relativos a los niños llevados a cabo por autoridades públicas o instituciones privadas, el interés superior del niño constituirá una consideración primordial. Todo niño tiene derecho a mantener de forma periódica relaciones personales y contactos directos con su padre y con su madre, salvo si ello es contrario a sus intereses.',
'Artículo 25. Derechos de las personas mayores: La Unión reconoce y respeta el derecho de las personas mayores a llevar una vida digna e independiente y a participar en la vida social y cultural.',
'Artículo 26. Integración de las personas discapacitadas. La Unión reconoce y respeta el derecho de las personas discapacitadas a beneficiarse de medidas que garanticen su autonomía, su integración social y profesional y su participación en la vida de la comunidad.',
'Artículo 27. Derecho a la información y consulta de los trabajadores en la empresa. Deberá garantizarse a los trabajadores o a sus representantes, en los niveles adecuados, la información y consulta con suficiente antelación, en los casos y condiciones previstos en el Derecho de la Unión y en las legislaciones y prácticas nacionales.',
'Artículo 28. Derecho de negociación y de acción colectiva. Los trabajadores y los empresarios, o sus organizaciones respectivas, de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales, tienen derecho a negociar y celebrar convenios colectivos, en los niveles adecuados, y a emprender, en caso de conflicto de intereses, acciones colectivas para la defensa de sus intereses, incluida la huelga.',
'Artículo 29. Derecho de acceso a los servicios de colocación. Toda persona tiene derecho a acceder a un servicio gratuito de colocación.',
'Artículo 30. Protección en caso de despido injustificado. Todo trabajador tiene derecho a protección en caso de despido injustificado, de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales.',
'Artículo 31. Condiciones de trabajo justas y equitativas: Todo trabajador tiene derecho a trabajar en condiciones que respeten su salud, seguridad y dignidad. Todo trabajador tiene derecho a la limitación de la duración máxima del trabajo y a períodos de descanso diarios y semanales, así como a un período de vacaciones anuales retribuidas.',
'Artículo 32. Prohibición del trabajo infantil y protección de los jóvenes en el trabajo: Se prohíbe el trabajo infantil. La edad mínima de admisión al trabajo no podrá ser inferior a la edad en que concluye el período de escolaridad obligatoria, sin perjuicio de disposiciones más favorables para los jóvenes y salvo excepciones limitadas. Los jóvenes admitidos a trabajar deberán disponer de condiciones de trabajo adaptadas a su edad y estar protegidos contra la explotación económica o contra cualquier trabajo que pueda ser perjudicial para su seguridad, su salud, su desarrollo físico, psíquico, moral o social, o que pueda poner en peligro su educación.',
'Artículo 33. Vida familiar y vida profesional: Se garantiza la protección de la familia en los planos jurídico, económico y social. Con el fin de poder conciliar vida familiar y vida profesional, toda persona tiene derecho a ser protegida contra cualquier despido por una causa relacionada con la maternidad, así como el derecho a un permiso pagado por maternidad y a un permiso parental con motivo del nacimiento o de la adopción de un niño.',
'Artículo 34. Seguridad social y ayuda social: La Unión reconoce y respeta el derecho de acceso a las prestaciones de seguridad social y a los servicios sociales que garantizan una protección en casos como la maternidad, la enfermedad, los accidentes laborales, la dependencia o la vejez, así como en caso de pérdida de empleo, según las modalidades establecidas por el Derecho de la Unión y las legislaciones y prácticas nacionales. Toda persona que resida y se desplace legalmente dentro de la Unión tiene derecho a las prestaciones de seguridad social y a las ventajas sociales de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales. Con el fin de combatir la exclusión social y la pobreza, la Unión reconoce y respeta el derecho a una ayuda social y a una ayuda de vivienda para garantizar una existencia digna a todos aquellos que no dispongan de recursos suficientes, según las modalidades establecidas por el Derecho de la Unión y por las legislaciones y prácticas nacionales.',
'Artículo 35. Protección de la salud. Toda persona tiene derecho a acceder a la prevención sanitaria y a beneficiarse de la atención sanitaria en las condiciones establecidas por las legislaciones y prácticas nacionales. Al definirse y ejecutarse todas las políticas y acciones de la Unión se garantizará un nivel elevado de protección de la salud humana.',
'Artículo 36. Acceso a los servicios de interés económico general. La Unión reconoce y respeta el acceso a los servicios de interés económico general, tal como disponen las legislaciones y prácticas nacionales, de conformidad con los Tratados, con el fin de promover la cohesión social y territorial de la Unión.',
'Artículo 37. Protección del medio ambiente. En las políticas de la Unión se integrarán y garantizarán, conforme al principio de desarrollo sostenible, un nivel elevado de protección del medio ambiente y la mejora de su calidad.',
'Artículo 38. Protección de los consumidores. En las políticas de la Unión se garantizará un nivel elevado de protección de los consumidores.',
'Artículo 39. Derecho de sufragio activo y pasivo en las elecciones al Parlamento Europeo: Todo ciudadano de la Unión tiene derecho de sufragio activo y pasivo en las elecciones al Parlamento Europeo en el Estado miembro en que resida, en las mismas condiciones que los nacionales de dicho Estado. Los diputados al Parlamento Europeo serán elegidos por sufragio universal libre, directo y secreto.',
'Artículo 40. Derecho de sufragio activo y pasivo en las elecciones municipales. Todo ciudadano de la Unión tiene derecho de sufragio activo y pasivo en las elecciones municipales del Estado miembro en que resida, en las mismas condiciones que los nacionales de dicho Estado.',
'Artículo 41. Derecho a una buena administración: Toda persona tiene derecho a que las instituciones, órganos y organismos de la Unión traten sus asuntos imparcial y equitativamente y dentro de un plazo razonable. Este derecho incluye en particular: primero, el derecho de toda persona a ser oída antes de que se tome en contra suya una medida individual que la afecte desfavorablemente; segundo, el derecho de toda persona a acceder al expediente que le concierna, dentro del respeto de los intereses legítimos de la confidencialidad y del secreto profesional y comercial; tercero, la obligación que incumbe a la administración de motivar sus decisiones. Además : Toda persona tiene derecho a la reparación por la Unión de los daños causados por sus instituciones o sus agentes en el ejercicio de sus funciones, de conformidad con los principios generales comunes a los Derechos de los Estados miembros. Toda persona podrá dirigirse a las instituciones de la Unión en una de las lenguas de los Tratados y deberá recibir una contestación en esa misma lengua.',
'Artículo 42. Derecho de acceso a los documentos. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene derecho a acceder a los documentos de las instituciones, órganos y organismos de la Unión, cualquiera que sea su soporte.',
'Artículo 43. El defensor del pueblo europeo. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene derecho a someter al Defensor del Pueblo Europeo los casos de mala administración en la actuación de las instituciones, órganos u organismos de la Unión, con exclusión del Tribunal de Justicia de la Unión Europea en el ejercicio de sus funciones jurisdiccionales.',
'Artículo 44. Derecho de petición. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene el derecho de petición ante el Parlamento Europeo.',
'Artículo 45. Libertad de circulación y de residencia: Todo ciudadano de la Unión tiene derecho a circular y residir libremente en el territorio de los Estados miembros. Podrá concederse libertad de circulación y de residencia, de conformidad con lo dispuesto en los Tratados, a los nacionales de terceros países que residan legalmente en el territorio de un Estado miembro.',
'Artículo 46. Protección diplomática y consular. Todo ciudadano de la Unión podrá acogerse, en el territorio de un tercer país en el que no esté representado el Estado miembro del que sea nacional, a la protección de las autoridades diplomáticas y consulares de cualquier Estado miembro, en las mismas condiciones que los nacionales de este Estado.',
'Artículo 47. Derecho a la tutela judicial efectiva y a un juez imparcial: Toda persona cuyos derechos y libertades garantizados por el Derecho de la Unión hayan sido violados tiene derecho a la tutela judicial efectiva respetando las condiciones establecidas en el presente artículo. Toda persona tiene derecho a que su causa sea oída equitativa y públicamente y dentro de un plazo razonable por un juez independiente e imparcial, establecido previamente por la ley. Toda persona podrá hacerse aconsejar, defender y representar. Se prestará asistencia jurídica gratuita a quienes no dispongan de recursos suficientes siempre y cuando dicha asistencia sea necesaria para garantizar la efectividad del acceso a la justicia.',
'Artículo 48. Presunción de inocencia y derechos de la defensa: Todo acusado se presume inocente mientras su culpabilidad no haya sido declarada legalmente. Se garantiza a todo acusado el respeto de los derechos de la defensa.',
'Artículo 49. Principios de legalidad y de proporcionalidad de los delitos y las penas: Nadie podrá ser condenado por una acción o una omisión que, en el momento en que haya sido cometida, no constituya una infracción según el Derecho interno o el Derecho internacional. Del mismo modo, no podrá imponerse una pena más grave que la aplicable en el momento en que la infracción haya sido cometida. Si con posterioridad a esta infracción la ley dispone una pena más leve, deberá aplicarse ésta.  El presente artículo no impedirá el juicio y el castigo de una persona culpable de una acción o una omisión que, en el momento en que haya sido cometida, fuera constitutiva de delito según los principios generales reconocidos por el conjunto de las naciones. La intensidad de las penas no deberá ser desproporcionada en relación con la infracción.',
'Artículo 50. Derecho a no ser juzgado o condenado penalmente dos veces por la misma infracción. Nadie podrá ser juzgado o condenado penalmente por una infracción respecto de la cual ya haya sido absuelto o condenado en la Unión mediante sentencia penal firme conforme a la ley.',
'Artículo 51. Ámbito de aplicación: 1.   Las disposiciones de la presente Carta están dirigidas a las instituciones, órganos y organismos de la Unión, dentro del respeto del principio de subsidiariedad, así como a los Estados miembros únicamente cuando apliquen el Derecho de la Unión. Por consiguiente, éstos respetarán los derechos, observarán los principios y promoverán su aplicación, con arreglo a sus respectivas competencias y dentro de los límites de las competencias que los Tratados atribuyen a la Unión. 2.   La presente Carta no amplía el ámbito de aplicación del Derecho de la Unión más allá de las competencias de la Unión, ni crea ninguna competencia o misión nuevas para la Unión, ni modifica las competencias y misiones definidas en los Tratados.',
'Artículo 52. Alcance e interpretación de los derechos y principios: 1.   Cualquier limitación del ejercicio de los derechos y libertades reconocidos por la presente Carta deberá ser establecida por la ley y respetar el contenido esencial de dichos derechos y libertades. Dentro del respeto del principio de proporcionalidad, sólo podrán introducirse limitaciones cuando sean necesarias y respondan efectivamente a objetivos de interés general reconocidos por la Unión o a la necesidad de protección de los derechos y libertades de los demás. 2.   Los derechos reconocidos por la presente Carta que constituyen disposiciones de los Tratados se ejercerán en las condiciones y dentro de los límites determinados por éstos. 3.   En la medida en que la presente Carta contenga derechos que correspondan a derechos garantizados por el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales, su sentido y alcance serán iguales a los que les confiere dicho Convenio. Esta disposición no obstará a que el Derecho de la Unión conceda una protección más extensa. 4.   En la medida en que la presente Carta reconozca derechos fundamentales resultantes de las tradiciones constitucionales comunes a los Estados miembros, dichos derechos se interpretarán en armonía con las citadas tradiciones. 5.   Las disposiciones de la presente Carta que contengan principios podrán aplicarse mediante actos legislativos y ejecutivos adoptados por las instituciones, órganos y organismos de la Unión, y por actos de los Estados miembros cuando apliquen el Derecho de la Unión, en el ejercicio de sus competencias respectivas. Sólo podrán alegarse ante un órgano jurisdiccional en lo que se refiere a la interpretación y control de la legalidad de dichos actos. 6.   Se tendrán plenamente en cuenta las legislaciones y prácticas nacionales según lo especificado en la presente Carta. 7.   Las explicaciones elaboradas para guiar en la interpretación de la presente Carta serán tenidas debidamente en cuenta por los órganos jurisdiccionales de la Unión y de los Estados miembros.',
'Artículo 53. Nivel de protección. Ninguna de las disposiciones de la presente Carta podrá interpretarse como limitativa o lesiva de los derechos humanos y libertades fundamentales reconocidos, en su respectivo ámbito de aplicación, por el Derecho de la Unión, el Derecho internacional y los convenios internacionales de los que son parte la Unión o todos los Estados miembros, y en particular el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales, así como por las constituciones de los Estados miembros.',
'Artículo 54. Prohibición del abuso de derecho. Ninguna de las disposiciones de la presente Carta podrá ser interpretada en el sentido de que implique un derecho cualquiera a dedicarse a una actividad o a realizar un acto tendente a la destrucción de los derechos o libertades reconocidos en la presente Carta o a limitaciones más amplias de estos derechos y libertades que las previstas en la presente Carta.'
  ];
const ART_DIGNIDAD =[
'Artículo 1. Dignidad humana. La dignidad humana es inviolable. Será respetada y protegida.',
'Artículo 2. Derecho a la vida, 1. Toda persona tiene derecho a la vida. 2.  Nadie podrá ser condenado a la pena de muerte ni ejecutado.',
'Artículo 3. Derecho a la integridad de la persona, 1.   Toda persona tiene derecho a su integridad física y psíquica. 2.   En el marco de la medicina y la biología, se respetarán en particular: El consentimiento libre e informado de la persona de que se trate, de acuerdo con las modalidades establecidas por la ley; La prohibición de las prácticas eugenésicas, en particular las que tienen como finalidad la selección de las personas; , La prohibición de que el cuerpo humano o partes del mismo en cuanto tales se conviertan en objeto de lucro; , La prohibición de la clonación reproductora de seres humanos.',
'Artículo 4. Prohibición de la tortura y de las penas o los tratos inhumanos o degradantes. Nadie podrá ser sometido a tortura ni a penas o tratos inhumanos o degradantes.',
'Artículo 5. Prohibición de la esclavitud y del trabajo forzado: , 1.   Nadie podrá ser sometido a esclavitud o servidumbre. 2.   Nadie podrá ser constreñido a realizar un trabajo forzado u obligatorio. 3.   Se prohíbe la trata de seres humanos.'
  ];
const ART_LIBERTADES =[
'Artículo 6. Derecho a la libertad y a la seguridad. Toda persona tiene derecho a la libertad y a la seguridad.',
'Artículo 7. Respeto de la vida privada y familiar. Toda persona tiene derecho al respeto de su vida privada y familiar, de su domicilio y de sus comunicaciones.',
'Artículo 8. Protección de datos de carácter personal: . Toda persona tiene derecho a la protección de los datos de carácter personal que le conciernan. Estos datos se tratarán de modo leal, para fines concretos y sobre la base del consentimiento de la persona afectada o en virtud de otro fundamento legítimo previsto por la ley. Toda persona tiene derecho a acceder a los datos recogidos que le conciernan y a obtener su rectificación. El respeto de estas normas estará sujeto al control de una autoridad independiente.',
'Artículo 9. Derecho a contraer matrimonio y derecho a fundar una familia. Se garantizan el derecho a contraer matrimonio y el derecho a fundar una familia según las leyes nacionales que regulen su ejercicio.',
'Artículo 10. Libertad de pensamiento, de conciencia y de religión: Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión. Este derecho implica la libertad de cambiar de religión o de convicciones, así como la libertad de manifestar su religión o sus convicciones individual o colectivamente, en público o en privado, a través del culto, la enseñanza, las prácticas y la observancia de los ritos. Se reconoce el derecho a la objeción de conciencia de acuerdo con las leyes nacionales que regulen su ejercicio.',
'Artículo 11. Libertad de expresión y de información: Toda persona tiene derecho a la libertad de expresión. Este derecho comprende la libertad de opinión y la libertad de recibir o comunicar informaciones o ideas sin que pueda haber injerencia de autoridades públicas y sin consideración de fronteras. Se respetan la libertad de los medios de comunicación y su pluralismo.',
'Artículo 12. Libertad de reunión y de asociación: Toda persona tiene derecho a la libertad de reunión pacífica y a la libertad de asociación en todos los niveles, especialmente en los ámbitos político, sindical y cívico, lo que supone el derecho de toda persona a fundar con otras sindicatos y a afiliarse a los mismos para la defensa de sus intereses. Los partidos políticos a escala de la Unión contribuyen a expresar la voluntad política de los ciudadanos de la Unión.',
'Artículo 13. Libertad de las artes y de las ciencias: Las artes y la investigación científica son libres. Se respeta la libertad de cátedra.',
'Artículo 14. Derecho a la educación: Toda persona tiene derecho a la educación y al acceso a la formación profesional y permanente. Este derecho incluye la facultad de recibir gratuitamente la enseñanza obligatoria. Se respetan, de acuerdo con las leyes nacionales que regulen su ejercicio, la libertad de creación de centros docentes dentro del respeto de los principios democráticos, así como el derecho de los padres a garantizar la educación y la enseñanza de sus hijos conforme a sus convicciones religiosas, filosóficas y pedagógicas.',
'Artículo 15. Libertad profesional y derecho a trabajar: Toda persona tiene derecho a trabajar y a ejercer una profesión libremente elegida o aceptada. Todo ciudadano de la Unión tiene libertad para buscar un empleo, trabajar, establecerse o prestar servicios en cualquier Estado miembro. Los nacionales de terceros países que estén autorizados a trabajar en el territorio de los Estados miembros tienen derecho a unas condiciones laborales equivalentes a aquellas de que disfrutan los ciudadanos de la Unión.',
'Artículo 16. Libertad de empresa: Se reconoce la libertad de empresa de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales.',
'Artículo 17. Derecho a la propiedad: Toda persona tiene derecho a disfrutar de la propiedad de los bienes que haya adquirido legalmente, a usarlos, a disponer de ellos y a legarlos. Nadie puede ser privado de su propiedad más que por causa de utilidad pública, en los casos y condiciones previstos en la ley y a cambio, en un tiempo razonable, de una justa indemnización por su pérdida. El uso de los bienes podrá regularse por ley en la medida en que resulte necesario para el interés general. Se protege la propiedad intelectual.',
'Artículo 18. Derecho de asilo: Se garantiza el derecho de asilo dentro del respeto de las normas de la Convención de Ginebra de 28 de julio de 1951 y del Protocolo de 31 de enero de 1967 sobre el Estatuto de los Refugiados y de conformidad con el Tratado de la Unión Europea y con el Tratado de Funcionamiento de la Unión Europea (en lo sucesivo denominados «los Tratados»).',
'Artículo 19. Protección en caso de devolución, expulsión y extradición: Se prohíben las expulsiones colectivas. Nadie podrá ser devuelto, expulsado o extraditado a un Estado en el que corra un grave riesgo de ser sometido a la pena de muerte, a tortura o a otras penas o tratos inhumanos o degradantes.'
  ];
const ART_IGUALDAD =[
'Artículo 20. Igualdad ante la ley: Todas las personas son iguales ante la ley.',
'Artículo 21. No discriminación: Se prohíbe toda discriminación, y en particular la ejercida por razón de sexo, raza, color, orígenes étnicos o sociales, características genéticas, lengua, religión o convicciones, opiniones políticas o de cualquier otro tipo, pertenencia a una minoría nacional, patrimonio, nacimiento, discapacidad, edad u orientación sexual. Se prohíbe toda discriminación por razón de nacionalidad en el ámbito de aplicación de los Tratados y sin perjuicio de sus disposiciones particulares.',
'Artículo 22. Diversidad cultural, religiosa y lingüística. La Unión respeta la diversidad cultural, religiosa y lingüística.',
'Artículo 23. Igualdad entre mujeres y hombres: La igualdad entre mujeres y hombres deberá garantizarse en todos los ámbitos, incluidos en materia de empleo, trabajo y retribución. El principio de igualdad no impide el mantenimiento o la adopción de medidas que supongan ventajas concretas en favor del sexo menos representado.',
'Artículo 24. Derechos del niño: Los niños tienen derecho a la protección y a los cuidados necesarios para su bienestar. Podrán expresar su opinión libremente. Ésta será tenida en cuenta para los asuntos que les afecten, en función de su edad y madurez. En todos los actos relativos a los niños llevados a cabo por autoridades públicas o instituciones privadas, el interés superior del niño constituirá una consideración primordial. Todo niño tiene derecho a mantener de forma periódica relaciones personales y contactos directos con su padre y con su madre, salvo si ello es contrario a sus intereses.',
'Artículo 25. Derechos de las personas mayores: La Unión reconoce y respeta el derecho de las personas mayores a llevar una vida digna e independiente y a participar en la vida social y cultural.',
'Artículo 26. Integración de las personas discapacitadas. La Unión reconoce y respeta el derecho de las personas discapacitadas a beneficiarse de medidas que garanticen su autonomía, su integración social y profesional y su participación en la vida de la comunidad.'

];
const ART_SOLIDARIDAD =[
'Artículo 27. Derecho a la información y consulta de los trabajadores en la empresa. Deberá garantizarse a los trabajadores o a sus representantes, en los niveles adecuados, la información y consulta con suficiente antelación, en los casos y condiciones previstos en el Derecho de la Unión y en las legislaciones y prácticas nacionales.',
'Artículo 28. Derecho de negociación y de acción colectiva. Los trabajadores y los empresarios, o sus organizaciones respectivas, de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales, tienen derecho a negociar y celebrar convenios colectivos, en los niveles adecuados, y a emprender, en caso de conflicto de intereses, acciones colectivas para la defensa de sus intereses, incluida la huelga.',
'Artículo 29. Derecho de acceso a los servicios de colocación. Toda persona tiene derecho a acceder a un servicio gratuito de colocación.',
'Artículo 30. Protección en caso de despido injustificado. Todo trabajador tiene derecho a protección en caso de despido injustificado, de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales.',
'Artículo 31. Condiciones de trabajo justas y equitativas: Todo trabajador tiene derecho a trabajar en condiciones que respeten su salud, seguridad y dignidad. Todo trabajador tiene derecho a la limitación de la duración máxima del trabajo y a períodos de descanso diarios y semanales, así como a un período de vacaciones anuales retribuidas.',
'Artículo 32. Prohibición del trabajo infantil y protección de los jóvenes en el trabajo: Se prohíbe el trabajo infantil. La edad mínima de admisión al trabajo no podrá ser inferior a la edad en que concluye el período de escolaridad obligatoria, sin perjuicio de disposiciones más favorables para los jóvenes y salvo excepciones limitadas. Los jóvenes admitidos a trabajar deberán disponer de condiciones de trabajo adaptadas a su edad y estar protegidos contra la explotación económica o contra cualquier trabajo que pueda ser perjudicial para su seguridad, su salud, su desarrollo físico, psíquico, moral o social, o que pueda poner en peligro su educación.',
'Artículo 33. Vida familiar y vida profesional: Se garantiza la protección de la familia en los planos jurídico, económico y social. Con el fin de poder conciliar vida familiar y vida profesional, toda persona tiene derecho a ser protegida contra cualquier despido por una causa relacionada con la maternidad, así como el derecho a un permiso pagado por maternidad y a un permiso parental con motivo del nacimiento o de la adopción de un niño.',
'Artículo 34. Seguridad social y ayuda social: La Unión reconoce y respeta el derecho de acceso a las prestaciones de seguridad social y a los servicios sociales que garantizan una protección en casos como la maternidad, la enfermedad, los accidentes laborales, la dependencia o la vejez, así como en caso de pérdida de empleo, según las modalidades establecidas por el Derecho de la Unión y las legislaciones y prácticas nacionales. Toda persona que resida y se desplace legalmente dentro de la Unión tiene derecho a las prestaciones de seguridad social y a las ventajas sociales de conformidad con el Derecho de la Unión y con las legislaciones y prácticas nacionales. Con el fin de combatir la exclusión social y la pobreza, la Unión reconoce y respeta el derecho a una ayuda social y a una ayuda de vivienda para garantizar una existencia digna a todos aquellos que no dispongan de recursos suficientes, según las modalidades establecidas por el Derecho de la Unión y por las legislaciones y prácticas nacionales.',
'Artículo 35. Protección de la salud. Toda persona tiene derecho a acceder a la prevención sanitaria y a beneficiarse de la atención sanitaria en las condiciones establecidas por las legislaciones y prácticas nacionales. Al definirse y ejecutarse todas las políticas y acciones de la Unión se garantizará un nivel elevado de protección de la salud humana.',
'Artículo 36. Acceso a los servicios de interés económico general. La Unión reconoce y respeta el acceso a los servicios de interés económico general, tal como disponen las legislaciones y prácticas nacionales, de conformidad con los Tratados, con el fin de promover la cohesión social y territorial de la Unión.',
'Artículo 37. Protección del medio ambiente. En las políticas de la Unión se integrarán y garantizarán, conforme al principio de desarrollo sostenible, un nivel elevado de protección del medio ambiente y la mejora de su calidad.',
'Artículo 38. Protección de los consumidores. En las políticas de la Unión se garantizará un nivel elevado de protección de los consumidores.'

]; 
const ART_CIUDADANIA =[
'Artículo 39. Derecho de sufragio activo y pasivo en las elecciones al Parlamento Europeo: Todo ciudadano de la Unión tiene derecho de sufragio activo y pasivo en las elecciones al Parlamento Europeo en el Estado miembro en que resida, en las mismas condiciones que los nacionales de dicho Estado. Los diputados al Parlamento Europeo serán elegidos por sufragio universal libre, directo y secreto.',
'Artículo 40. Derecho de sufragio activo y pasivo en las elecciones municipales. Todo ciudadano de la Unión tiene derecho de sufragio activo y pasivo en las elecciones municipales del Estado miembro en que resida, en las mismas condiciones que los nacionales de dicho Estado.',
'Artículo 41. Derecho a una buena administración: Toda persona tiene derecho a que las instituciones, órganos y organismos de la Unión traten sus asuntos imparcial y equitativamente y dentro de un plazo razonable. Este derecho incluye en particular: primero, el derecho de toda persona a ser oída antes de que se tome en contra suya una medida individual que la afecte desfavorablemente; segundo, el derecho de toda persona a acceder al expediente que le concierna, dentro del respeto de los intereses legítimos de la confidencialidad y del secreto profesional y comercial; tercero, la obligación que incumbe a la administración de motivar sus decisiones. Además : Toda persona tiene derecho a la reparación por la Unión de los daños causados por sus instituciones o sus agentes en el ejercicio de sus funciones, de conformidad con los principios generales comunes a los Derechos de los Estados miembros.Toda persona podrá dirigirse a las instituciones de la Unión en una de las lenguas de los Tratados y deberá recibir una contestación en esa misma lengua.',
'Artículo 42. Derecho de acceso a los documentos. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene derecho a acceder a los documentos de las instituciones, órganos y organismos de la Unión, cualquiera que sea su soporte.',
'Artículo 43. El defensor del pueblo europeo. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene derecho a someter al Defensor del Pueblo Europeo los casos de mala administración en la actuación de las instituciones, órganos u organismos de la Unión, con exclusión del Tribunal de Justicia de la Unión Europea en el ejercicio de sus funciones jurisdiccionales.',
'Artículo 44. Derecho de petición. Todo ciudadano de la Unión y toda persona física o jurídica que resida o tenga su domicilio social en un Estado miembro tiene el derecho de petición ante el Parlamento Europeo.',
'Artículo 45. Libertad de circulación y de residencia: Todo ciudadano de la Unión tiene derecho a circular y residir libremente en el territorio de los Estados miembros. Podrá concederse libertad de circulación y de residencia, de conformidad con lo dispuesto en los Tratados, a los nacionales de terceros países que residan legalmente en el territorio de un Estado miembro.',
'Artículo 46. Protección diplomática y consular. Todo ciudadano de la Unión podrá acogerse, en el territorio de un tercer país en el que no esté representado el Estado miembro del que sea nacional, a la protección de las autoridades diplomáticas y consulares de cualquier Estado miembro, en las mismas condiciones que los nacionales de este Estado.'

]; 
const ART_JUSTICIA = [
'Artículo 47. Derecho a la tutela judicial efectiva y a un juez imparcial: Toda persona cuyos derechos y libertades garantizados por el Derecho de la Unión hayan sido violados tiene derecho a la tutela judicial efectiva respetando las condiciones establecidas en el presente artículo. Toda persona tiene derecho a que su causa sea oída equitativa y públicamente y dentro de un plazo razonable por un juez independiente e imparcial, establecido previamente por la ley. Toda persona podrá hacerse aconsejar, defender y representar. Se prestará asistencia jurídica gratuita a quienes no dispongan de recursos suficientes siempre y cuando dicha asistencia sea necesaria para garantizar la efectividad del acceso a la justicia.',
'Artículo 48. Presunción de inocencia y derechos de la defensa: Todo acusado se presume inocente mientras su culpabilidad no haya sido declarada legalmente. Se garantiza a todo acusado el respeto de los derechos de la defensa.',
'Artículo 49. Principios de legalidad y de proporcionalidad de los delitos y las penas: Nadie podrá ser condenado por una acción o una omisión que, en el momento en que haya sido cometida, no constituya una infracción según el Derecho interno o el Derecho internacional. Del mismo modo, no podrá imponerse una pena más grave que la aplicable en el momento en que la infracción haya sido cometida. Si con posterioridad a esta infracción la ley dispone una pena más leve, deberá aplicarse ésta.  El presente artículo no impedirá el juicio y el castigo de una persona culpable de una acción o una omisión que, en el momento en que haya sido cometida, fuera constitutiva de delito según los principios generales reconocidos por el conjunto de las naciones. La intensidad de las penas no deberá ser desproporcionada en relación con la infracción.',
'Artículo 50. Derecho a no ser juzgado o condenado penalmente dos veces por la misma infracción. Nadie podrá ser juzgado o condenado penalmente por una infracción respecto de la cual ya haya sido absuelto o condenado en la Unión mediante sentencia penal firme conforme a la ley.'

];
const ART_DIPOSICIONES_GENERALES = [
'Artículo 51. Ámbito de aplicación: 1.   Las disposiciones de la presente Carta están dirigidas a las instituciones, órganos y organismos de la Unión, dentro del respeto del principio de subsidiariedad, así como a los Estados miembros únicamente cuando apliquen el Derecho de la Unión. Por consiguiente, éstos respetarán los derechos, observarán los principios y promoverán su aplicación, con arreglo a sus respectivas competencias y dentro de los límites de las competencias que los Tratados atribuyen a la Unión. 2.   La presente Carta no amplía el ámbito de aplicación del Derecho de la Unión más allá de las competencias de la Unión, ni crea ninguna competencia o misión nuevas para la Unión, ni modifica las competencias y misiones definidas en los Tratados.',
'Artículo 52. Alcance e interpretación de los derechos y principios: 1.   Cualquier limitación del ejercicio de los derechos y libertades reconocidos por la presente Carta deberá ser establecida por la ley y respetar el contenido esencial de dichos derechos y libertades. Dentro del respeto del principio de proporcionalidad, sólo podrán introducirse limitaciones cuando sean necesarias y respondan efectivamente a objetivos de interés general reconocidos por la Unión o a la necesidad de protección de los derechos y libertades de los demás. 2.   Los derechos reconocidos por la presente Carta que constituyen disposiciones de los Tratados se ejercerán en las condiciones y dentro de los límites determinados por éstos. 3.   En la medida en que la presente Carta contenga derechos que correspondan a derechos garantizados por el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales, su sentido y alcance serán iguales a los que les confiere dicho Convenio. Esta disposición no obstará a que el Derecho de la Unión conceda una protección más extensa. 4.   En la medida en que la presente Carta reconozca derechos fundamentales resultantes de las tradiciones constitucionales comunes a los Estados miembros, dichos derechos se interpretarán en armonía con las citadas tradiciones. 5.   Las disposiciones de la presente Carta que contengan principios podrán aplicarse mediante actos legislativos y ejecutivos adoptados por las instituciones, órganos y organismos de la Unión, y por actos de los Estados miembros cuando apliquen el Derecho de la Unión, en el ejercicio de sus competencias respectivas. Sólo podrán alegarse ante un órgano jurisdiccional en lo que se refiere a la interpretación y control de la legalidad de dichos actos. 6.   Se tendrán plenamente en cuenta las legislaciones y prácticas nacionales según lo especificado en la presente Carta. 7.   Las explicaciones elaboradas para guiar en la interpretación de la presente Carta serán tenidas debidamente en cuenta por los órganos jurisdiccionales de la Unión y de los Estados miembros.',
'Artículo 53. Nivel de protección. Ninguna de las disposiciones de la presente Carta podrá interpretarse como limitativa o lesiva de los derechos humanos y libertades fundamentales reconocidos, en su respectivo ámbito de aplicación, por el Derecho de la Unión, el Derecho internacional y los convenios internacionales de los que son parte la Unión o todos los Estados miembros, y en particular el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales, así como por las constituciones de los Estados miembros.',
'Artículo 54. Prohibición del abuso de derecho. Ninguna de las disposiciones de la presente Carta podrá ser interpretada en el sentido de que implique un derecho cualquiera a dedicarse a una actividad o a realizar un acto tendente a la destrucción de los derechos o libertades reconocidos en la presente Carta o a limitaciones más amplias de estos derechos y libertades que las previstas en la presente Carta.'
];
const CARTA_DERECHOS_FUNDAMENTALES = 'El Parlamento Europeo, el Consejo y la Comisión proclaman solemnemente en tanto que Carta de los Derechos Fundamentales de la Unión Europea el texto que figura a continuación: Los pueblos de Europa, al crear entre sí una unión cada vez más estrecha, han decidido compartir un porvenir pacífico basado en valores comunes. Consciente de su patrimonio espiritual y moral, la Unión está fundada sobre los valores indivisibles y universales de la dignidad humana, la libertad, la igualdad y la solidaridad, y se basa en los principios de la democracia y el Estado de Derecho. Al instituir la ciudadanía de la Unión y crear un espacio de libertad, seguridad y justicia, sitúa a la persona en el centro de su actuación. La Unión contribuye a defender y fomentar estos valores comunes dentro del respeto de la diversidad de culturas y tradiciones de los pueblos de Europa, así como de la identidad nacional de los Estados miembros y de la organización de sus poderes públicos a escala nacional, regional y local; trata de fomentar un desarrollo equilibrado y sostenible y garantiza la libre circulación de personas, servicios, mercancías y capitales, así como la libertad de establecimiento. Para ello es necesario, dándoles mayor proyección mediante una Carta, reforzar la protección de los derechos fundamentales a tenor de la evolución de la sociedad, del progreso social y de los avances científicos y tecnológicos. La presente Carta reafirma, dentro del respeto de las competencias y misiones de la Unión, así como del principio de subsidiariedad, los derechos que emanan, en particular, de las tradiciones constitucionales y las obligaciones internacionales comunes a los Estados miembros, del Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales, las Cartas Sociales adoptadas por la Unión y por el Consejo de Europa, así como de la jurisprudencia del Tribunal de Justicia de la Unión Europea y del Tribunal Europeo de Derechos Humanos. En este contexto, los órganos jurisdiccionales de la Unión y de los Estados miembros interpretarán la Carta atendiendo debidamente a las explicaciones elaboradas bajo la autoridad del Praesidium de la Convención que redactó la Carta y actualizadas bajo la responsabilidad del Praesidium de la Convención Europea. El disfrute de tales derechos conlleva responsabilidades y deberes tanto respecto de los demás como de la comunidad humana y de las generaciones futuras.';



const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
  const speechText = SALUDO + PREGUNTA;  
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(AYUDA)
      .withSimpleCard(SALUDO_DISPLAY, AYUDA)
      .getResponse();
  }
};

//****************************************************************************************
//********************* DELEGATE DIRECTIVE ***********************************************
const InProgressDimeUnArticuloIntent = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    console.log('InProgressDimeUnArticuloIntent');
    return request.type === 'IntentRequest'
      && request.intent.name === 'DimeUnArticuloIntent' 
      && request.dialogState !== 'COMPLETED';
  },
  handle(handlerInput) {
    const currentIntent = handlerInput.requestEnvelope.request.intent;
    console.log('In progress intent is:  ' + JSON.stringify(currentIntent));
    return handlerInput.responseBuilder
      .addDelegateDirective(currentIntent)
      .getResponse();
  }
};

const DimeUnArticuloIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DimeUnArticuloIntent';
  },
  handle(handlerInput) {
	const artNumero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
   const request = handlerInput.requestEnvelope.request;
   console.log(request.dialogState);
  if (artNumero < 1 || artNumero > 54){
	    const speechText = NUM_ERROR + PREGUNTA;
	    const speechTextReprompt = AYUDA + PREGUNTA; 
        return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechTextReprompt)
          .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY, speechText)
          .getResponse();

	  
	}
	else {
            const speechText = ARTICULO[artNumero - 1] + PREGUNTA2;
            const speechTextReprompt = AYUDA + PREGUNTA;
            return handlerInput.responseBuilder
              .speak(speechText)
              .reprompt(speechTextReprompt)
              .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY, ARTICULO[artNumero - 1])
              .getResponse();
	}
  }
};
const ArticuloAleatorioIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest'
        && request.intent.name === 'ArticuloAleatorioIntent');
  },
  handle(handlerInput) {        
    const AleIndex = Math.floor(Math.random() * ARTICULO.length);
    const artAleatorio = ARTICULO[AleIndex];
    const speechOutput = 'Tenemos '+ ARTICULO.length +' artículos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ARTICULO.length +' artículos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(speechTextReprompt)
      .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY, speechOutputSipleCard)
      .getResponse();
  },
};

const DignidadIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DignidadIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_DIGNIDAD.length);
    var artAleatorio = ART_DIGNIDAD[AleIndex];
    const speechOutput = 'Tenemos '+ ART_DIGNIDAD.length +' artículos, del 1 al 5 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_DIGNIDAD.length +' artículos, del 1 al 5 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(DIGNIDAD_DISPLAY,DIGNIDAD)
					  .getResponse();
  }
  
};
const LibertadesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'LibertadesIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_LIBERTADES.length);
    var artAleatorio = ART_LIBERTADES[AleIndex];
    const speechOutput = 'Tenemos '+ ART_LIBERTADES.length +' artículos, del 6 al 19 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_LIBERTADES.length +' artículos, del 6 al 19 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(LIBERTADES_DISPLAY,LIBERTADES)
					  .getResponse();
  }
  
};

const IgualdadIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'IgualdadIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_IGUALDAD.length);
    var artAleatorio = ART_IGUALDAD[AleIndex];
    const speechOutput = 'Tenemos '+ ART_IGUALDAD.length +' artículos, del 20 al 26 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_IGUALDAD.length +' artículos, del 20 al 26 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(IGUALDAD_DISPLAY,IGUALDAD)
					  .getResponse();
  }
  
};

const SolidaridadIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'SolidaridadIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_SOLIDARIDAD.length);
    var artAleatorio = ART_SOLIDARIDAD[AleIndex];
    const speechOutput = 'Tenemos '+ ART_SOLIDARIDAD.length +' artículos, del 27 al 38 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_IGUALDAD.length +' artículos, del 27 al 38 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(SOLIDARIDAD_DISPLAY,SOLIDARIDAD)
					  .getResponse();
  }
  
};

const CiudadaniaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'CiudadaniaIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_CIUDADANIA.length);
    var artAleatorio = ART_CIUDADANIA[AleIndex];
    const speechOutput = 'Tenemos '+ ART_CIUDADANIA.length +' artículos, del 39 al 46 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_CIUDADANIA.length +' artículos, del 39 al 46 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(CIUDADANIA_DISPLAY,CIUDADANIA)
					  .getResponse();
  }
  
};


const JusticiaIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'JusticiaIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_JUSTICIA.length);
    var artAleatorio = ART_JUSTICIA[AleIndex];
    const speechOutput = 'Tenemos '+ ART_JUSTICIA.length +' artículos, del 47 al 50 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_JUSTICIA.length +' artículos, del 47 al 50 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(JUSTICIA_DISPLAY,JUSTICIA)
					  .getResponse();
  }
  
};


const CartaDerechosFundamentalesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'CartaDerechosFundamentalesIntent';
  },
  handle(handlerInput) {
    
    const speechOutput = CARTA_DERECHOS_FUNDAMENTALES +', ' + PREGUNTA2;
    const speechOutputSipleCard = CARTA_DERECHOS_FUNDAMENTALES;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY,CARTA_DERECHOS_FUNDAMENTALES)
					  .getResponse();
  }
   
};
const DisposicionesGeneralesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DisposicionesGeneralesIntent';
  },
  handle(handlerInput) {
    var AleIndex = Math.floor(Math.random() * ART_JUSTICIA.length);
    var artAleatorio = ART_DIPOSICIONES_GENERALES[AleIndex];
    const speechOutput = 'Tenemos '+ ART_DIPOSICIONES_GENERALES.length +' artículos, del 51 al 54 incluidos, '+ artAleatorio + ', ' + PREGUNTA2;
    const speechOutputSipleCard = 'Tenemos '+ ART_DIPOSICIONES_GENERALES.length +' artículos, del 51 al 54 incluidos, '+ artAleatorio;
    const speechTextReprompt = AYUDA + PREGUNTA;
        return handlerInput.responseBuilder
					  .speak(speechOutput)
					  .reprompt(speechTextReprompt)
					  .withSimpleCard(DISPOSICIONES_GENERALES_DISPLAY,DISPOSICIONES_GENERALES)
					  .getResponse();
  }
   
};
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = AYUDA;
    const speechTextReprompt = MAS_INFO;
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechTextReprompt)
      .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY, AYUDA)
      .getResponse();
  }
};
const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    
    return handlerInput.responseBuilder
      .speak(SALIR)
      .withSimpleCard(CARTA_DERECHOS_FUNDAMENTALES_DISPLAY, SALIR)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    //any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const speechText = ERROR + PREGUNTA;
    const speechTextReprompt = AYUDA;
    console.log(`Error handled: ${error.message}`);
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechTextReprompt)
      .getResponse();
  },
};
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    InProgressDimeUnArticuloIntent,
    DimeUnArticuloIntentHandler,
	  ArticuloAleatorioIntentHandler,
	  DignidadIntentHandler,
	  LibertadesIntentHandler,
	  IgualdadIntentHandler,
	  SolidaridadIntentHandler,
	  CiudadaniaIntentHandler,
	  JusticiaIntentHandler,
	  CartaDerechosFundamentalesIntentHandler,
	  DisposicionesGeneralesIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();
  
  
