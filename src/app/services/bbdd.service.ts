import { Injectable } from '@angular/core';
import { Slider } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  slidersInicio : Array<Slider> = [
    {
      titulo     : 'Amazon Originals y Exclusivos',
      cuantosVeo : 7,
      tituloEnlace:'Ver más',
      enlace     : '#vermas',
      contenido  : [
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'El Desafio: 11M',
          descripcion : 'El desafio 11M narra la cadena de atentados de 2004 en Madrid, el mayor ataque terrorista en la historia de Europa, y sus consecuencias personales, políticas, policiales y judiciales. Cada uno de los cuatro capítulos aborda un ángulo de este trágico suceso: el atentado, la batalla política, la operación policial y el juicio a los responsables del atentado.',
          año         : 2022,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Moto GP Unlimited - Temporada 1',
          descripcion : '22 pilotos. 18 carreras. Un ganador. El Campeonato del Mundo de MotoGP™ es la unión definitiva entre el hombre y la máquina. Cada año, de marzo a noviembre, los pilotos corren a casi 350 km/h con un solo objetivo: cruzar primero la meta. Pero este deporte es mucho más que los 40 minutos de la carrera. Los pilotos ríen, lloran, se enfadan y se divierten. Descubrimos su vida en el paddock de MotoGP.',
          año         : 2022,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'G.E.O.: Más Allá del Límite',
          descripcion : 'por primera vez en la historia de la Policía, un equipo de cámaras tiene acceso exclusivo al proceso de selección de los nuevos miembros del Grupo Especial de Operaciones (G.E.O.), que se extiende durante más de 7 meses. Decenas de policías comienzan, pero sólo unos pocos terminarán el curso.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Operación Marea Negra',
          descripcion : 'Noviembre de 2019. Un semi-sumergible cargado con tres toneladas de cocaína es incautado en las costas gallegas tras haber atravesado el Atlántico. El capitán, Nando, una joven promesa del boxeo amateur, viaja acompañado de un mecánico brasileño y un sicario colombiano. Tres desconocidos encerrados durante casi un mes en una claustrofóbica embarcación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'Dos años después de su retirada de la Fórmula 1, Fernando Alonso vuelve al equipo con el que conquistó dos mundiales. Si en la primera temporada de ‘Fernando’ vimos su versatilidad disputando el mundial de resistencia, las 500 Millas de Indianápolis y el Dakar, este año mostramos como se prepara un equipo de Fórmula 1.',
          año         : 2021,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'En la primera temporada de "El Principito” el cantante se abre en canal para repasar la historia de su vida. Tras una dura infancia marcada por el bullying y la delincuencia, Omar Montes supo renacer de sus cenizas y perseguir su verdadero sueño: hacer historia y convertirse en el cantante más escuchado a nivel nacional. Éste es Omar Montes. Y su leyenda comienza así.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'THE MAN IN THE HIGH CASTLE',
          descripcion : 'el Hombre en el Castillo, basada en la novela homónima de Philip K. Dick, y producida por Ridley Scott (Blade Runner) y Frank Spotnitz (The X-Files), nos cuenta lo que habría ocurrido si las potencias aliadas hubieran perdido la II Guerra Mundial y Japón y Alemania gobernaran los Estados Unidos. Con Rufus Sewell (John Adams), Luke Kleintank (Pretty Little Liars) y Alexa Davalos (Mob City).',
          año         : 2015,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Historias para no dormir',
          descripcion : 'Rodrigo Cortés, Rodrigo Sorogoyen, Paco Plaza y Paula Ortiz se encargan de reinterpretar esta antología de relatos autoconclusivos que harán disfrutar a los espectadores de versiones actualizadas de las mejores historias de Chicho Ibáñez Serrador. Los cuatro directores realizan este homenaje como reconocimiento de la importancia histórica de la serie en la ficción española.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'La que se avecina',
          descripcion : 'Enrique y Bruno se irán a vivir juntos, lo que provoque los celos de Antonio por su amistad. Menchu regresará de la cárcel queriendo buscar al culpable que le metió en ella. Fermín, muy preocupado por su hija Lola, intentará que rehaga su vida tras la desaparición de Javi.',
          año         : 2021,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Nine Perfect Strangers',
          descripcion : '"Nine Perfect Strangers" sigue a nueve personas muy diferentes que llegan a Tranquillum, un misterioso retiro de bienestar que promete una "transformación total". Una vez allí, los huéspedes caen presa del embrujo de la enigmática Masha, que no se detendrá ante nada con tal de sanarlos.',
          año         : 2021,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Real Madrid: La Leyenda Blanca',
          descripcion : 'El Real Madrid es un club centenario que tiene un equipo ganador para cada época y cada generación. Ningún otro club ha conseguido todos los éxitos del ya considerado el eterno campeón. Un ejemplo para el mundo del deporte. Sus protagonistas y admiradores repasan los hitos y las adversidades históricas que hacen del Real Madrid el mejor equipo del mundo.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Oscura Verdad',
          descripcion : 'Lucy y Adrian llevan tiempo intentando tener un hijo. Deciden buscar ayuda en el doctor Hindle. Lucy se somete a una inseminación artificial y queda embarazada de trillizos. El doctor les informa de que llevar a cabo un embarazo de estas características puede poner en riesgo la salud tanto de los niños como de la madre, por lo que Lucy y Adrian deben decidir cuál quieren que viva y cuál no.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'AS WE SEE IT',
          descripcion : 'La serie trata de Jack, Harrison y Violet, tres compañeros de piso con autismo que luchan por conseguir trabajo, mantenerlo, hacer amigos, enamorarse y abrirse camino en un mundo que no los comprende. Con la ayuda de sus familias, de su asistenta y, en ocasiones, de ellos mismos, los chicos luchan contra las adversidades y celebran los triunfos mientras intentan lograr independencia y aceptación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Poliamor para principiantes',
          descripcion : 'Manu, 28 años, es un friki romántico e intento de youtuber que aún vive con sus padres. Conoce a Amanda, doctora que practica el poliamor, de la que no puede evitar enamorarse. Tendrá pues que pelearse por convertirse en protagonista de esta relación a 6 bandas. Esta experiencia amorosa impulsa su carrera en Youtube pero acabará poniendo en jaque su nueva relación.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        }
      ]
    },
    {
      titulo     : '2222Amazon Originals y Exclusivos',
      cuantosVeo : 7,
      tituloEnlace:'Ver más',
      enlace     : '#vermas',
      contenido  : [
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'El Desafio: 11M',
          descripcion : 'El desafio 11M narra la cadena de atentados de 2004 en Madrid, el mayor ataque terrorista en la historia de Europa, y sus consecuencias personales, políticas, policiales y judiciales. Cada uno de los cuatro capítulos aborda un ángulo de este trágico suceso: el atentado, la batalla política, la operación policial y el juicio a los responsables del atentado.',
          año         : 2022,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Moto GP Unlimited - Temporada 1',
          descripcion : '22 pilotos. 18 carreras. Un ganador. El Campeonato del Mundo de MotoGP™ es la unión definitiva entre el hombre y la máquina. Cada año, de marzo a noviembre, los pilotos corren a casi 350 km/h con un solo objetivo: cruzar primero la meta. Pero este deporte es mucho más que los 40 minutos de la carrera. Los pilotos ríen, lloran, se enfadan y se divierten. Descubrimos su vida en el paddock de MotoGP.',
          año         : 2022,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'G.E.O.: Más Allá del Límite',
          descripcion : 'por primera vez en la historia de la Policía, un equipo de cámaras tiene acceso exclusivo al proceso de selección de los nuevos miembros del Grupo Especial de Operaciones (G.E.O.), que se extiende durante más de 7 meses. Decenas de policías comienzan, pero sólo unos pocos terminarán el curso.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Operación Marea Negra',
          descripcion : 'Noviembre de 2019. Un semi-sumergible cargado con tres toneladas de cocaína es incautado en las costas gallegas tras haber atravesado el Atlántico. El capitán, Nando, una joven promesa del boxeo amateur, viaja acompañado de un mecánico brasileño y un sicario colombiano. Tres desconocidos encerrados durante casi un mes en una claustrofóbica embarcación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'Dos años después de su retirada de la Fórmula 1, Fernando Alonso vuelve al equipo con el que conquistó dos mundiales. Si en la primera temporada de ‘Fernando’ vimos su versatilidad disputando el mundial de resistencia, las 500 Millas de Indianápolis y el Dakar, este año mostramos como se prepara un equipo de Fórmula 1.',
          año         : 2021,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'En la primera temporada de "El Principito” el cantante se abre en canal para repasar la historia de su vida. Tras una dura infancia marcada por el bullying y la delincuencia, Omar Montes supo renacer de sus cenizas y perseguir su verdadero sueño: hacer historia y convertirse en el cantante más escuchado a nivel nacional. Éste es Omar Montes. Y su leyenda comienza así.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'THE MAN IN THE HIGH CASTLE',
          descripcion : 'el Hombre en el Castillo, basada en la novela homónima de Philip K. Dick, y producida por Ridley Scott (Blade Runner) y Frank Spotnitz (The X-Files), nos cuenta lo que habría ocurrido si las potencias aliadas hubieran perdido la II Guerra Mundial y Japón y Alemania gobernaran los Estados Unidos. Con Rufus Sewell (John Adams), Luke Kleintank (Pretty Little Liars) y Alexa Davalos (Mob City).',
          año         : 2015,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Historias para no dormir',
          descripcion : 'Rodrigo Cortés, Rodrigo Sorogoyen, Paco Plaza y Paula Ortiz se encargan de reinterpretar esta antología de relatos autoconclusivos que harán disfrutar a los espectadores de versiones actualizadas de las mejores historias de Chicho Ibáñez Serrador. Los cuatro directores realizan este homenaje como reconocimiento de la importancia histórica de la serie en la ficción española.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'La que se avecina',
          descripcion : 'Enrique y Bruno se irán a vivir juntos, lo que provoque los celos de Antonio por su amistad. Menchu regresará de la cárcel queriendo buscar al culpable que le metió en ella. Fermín, muy preocupado por su hija Lola, intentará que rehaga su vida tras la desaparición de Javi.',
          año         : 2021,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Nine Perfect Strangers',
          descripcion : '"Nine Perfect Strangers" sigue a nueve personas muy diferentes que llegan a Tranquillum, un misterioso retiro de bienestar que promete una "transformación total". Una vez allí, los huéspedes caen presa del embrujo de la enigmática Masha, que no se detendrá ante nada con tal de sanarlos.',
          año         : 2021,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Real Madrid: La Leyenda Blanca',
          descripcion : 'El Real Madrid es un club centenario que tiene un equipo ganador para cada época y cada generación. Ningún otro club ha conseguido todos los éxitos del ya considerado el eterno campeón. Un ejemplo para el mundo del deporte. Sus protagonistas y admiradores repasan los hitos y las adversidades históricas que hacen del Real Madrid el mejor equipo del mundo.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Oscura Verdad',
          descripcion : 'Lucy y Adrian llevan tiempo intentando tener un hijo. Deciden buscar ayuda en el doctor Hindle. Lucy se somete a una inseminación artificial y queda embarazada de trillizos. El doctor les informa de que llevar a cabo un embarazo de estas características puede poner en riesgo la salud tanto de los niños como de la madre, por lo que Lucy y Adrian deben decidir cuál quieren que viva y cuál no.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'AS WE SEE IT',
          descripcion : 'La serie trata de Jack, Harrison y Violet, tres compañeros de piso con autismo que luchan por conseguir trabajo, mantenerlo, hacer amigos, enamorarse y abrirse camino en un mundo que no los comprende. Con la ayuda de sus familias, de su asistenta y, en ocasiones, de ellos mismos, los chicos luchan contra las adversidades y celebran los triunfos mientras intentan lograr independencia y aceptación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Poliamor para principiantes',
          descripcion : 'Manu, 28 años, es un friki romántico e intento de youtuber que aún vive con sus padres. Conoce a Amanda, doctora que practica el poliamor, de la que no puede evitar enamorarse. Tendrá pues que pelearse por convertirse en protagonista de esta relación a 6 bandas. Esta experiencia amorosa impulsa su carrera en Youtube pero acabará poniendo en jaque su nueva relación.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        }
      ]
    },
    {
      titulo     : '33333Amazon Originals y Exclusivos',
      cuantosVeo : 7,
      tituloEnlace:'Ver más',
      enlace     : '#vermas',
      contenido  : [
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'El Desafio: 11M',
          descripcion : 'El desafio 11M narra la cadena de atentados de 2004 en Madrid, el mayor ataque terrorista en la historia de Europa, y sus consecuencias personales, políticas, policiales y judiciales. Cada uno de los cuatro capítulos aborda un ángulo de este trágico suceso: el atentado, la batalla política, la operación policial y el juicio a los responsables del atentado.',
          año         : 2022,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Moto GP Unlimited - Temporada 1',
          descripcion : '22 pilotos. 18 carreras. Un ganador. El Campeonato del Mundo de MotoGP™ es la unión definitiva entre el hombre y la máquina. Cada año, de marzo a noviembre, los pilotos corren a casi 350 km/h con un solo objetivo: cruzar primero la meta. Pero este deporte es mucho más que los 40 minutos de la carrera. Los pilotos ríen, lloran, se enfadan y se divierten. Descubrimos su vida en el paddock de MotoGP.',
          año         : 2022,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'G.E.O.: Más Allá del Límite',
          descripcion : 'por primera vez en la historia de la Policía, un equipo de cámaras tiene acceso exclusivo al proceso de selección de los nuevos miembros del Grupo Especial de Operaciones (G.E.O.), que se extiende durante más de 7 meses. Decenas de policías comienzan, pero sólo unos pocos terminarán el curso.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Operación Marea Negra',
          descripcion : 'Noviembre de 2019. Un semi-sumergible cargado con tres toneladas de cocaína es incautado en las costas gallegas tras haber atravesado el Atlántico. El capitán, Nando, una joven promesa del boxeo amateur, viaja acompañado de un mecánico brasileño y un sicario colombiano. Tres desconocidos encerrados durante casi un mes en una claustrofóbica embarcación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'Dos años después de su retirada de la Fórmula 1, Fernando Alonso vuelve al equipo con el que conquistó dos mundiales. Si en la primera temporada de ‘Fernando’ vimos su versatilidad disputando el mundial de resistencia, las 500 Millas de Indianápolis y el Dakar, este año mostramos como se prepara un equipo de Fórmula 1.',
          año         : 2021,
          subtitulos  : true,
          edad        : 0
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'FERNANDO',
          descripcion : 'En la primera temporada de "El Principito” el cantante se abre en canal para repasar la historia de su vida. Tras una dura infancia marcada por el bullying y la delincuencia, Omar Montes supo renacer de sus cenizas y perseguir su verdadero sueño: hacer historia y convertirse en el cantante más escuchado a nivel nacional. Éste es Omar Montes. Y su leyenda comienza así.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'THE MAN IN THE HIGH CASTLE',
          descripcion : 'el Hombre en el Castillo, basada en la novela homónima de Philip K. Dick, y producida por Ridley Scott (Blade Runner) y Frank Spotnitz (The X-Files), nos cuenta lo que habría ocurrido si las potencias aliadas hubieran perdido la II Guerra Mundial y Japón y Alemania gobernaran los Estados Unidos. Con Rufus Sewell (John Adams), Luke Kleintank (Pretty Little Liars) y Alexa Davalos (Mob City).',
          año         : 2015,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Historias para no dormir',
          descripcion : 'Rodrigo Cortés, Rodrigo Sorogoyen, Paco Plaza y Paula Ortiz se encargan de reinterpretar esta antología de relatos autoconclusivos que harán disfrutar a los espectadores de versiones actualizadas de las mejores historias de Chicho Ibáñez Serrador. Los cuatro directores realizan este homenaje como reconocimiento de la importancia histórica de la serie en la ficción española.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'La que se avecina',
          descripcion : 'Enrique y Bruno se irán a vivir juntos, lo que provoque los celos de Antonio por su amistad. Menchu regresará de la cárcel queriendo buscar al culpable que le metió en ella. Fermín, muy preocupado por su hija Lola, intentará que rehaga su vida tras la desaparición de Javi.',
          año         : 2021,
          subtitulos  : true,
          edad        : 13
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Nine Perfect Strangers',
          descripcion : '"Nine Perfect Strangers" sigue a nueve personas muy diferentes que llegan a Tranquillum, un misterioso retiro de bienestar que promete una "transformación total". Una vez allí, los huéspedes caen presa del embrujo de la enigmática Masha, que no se detendrá ante nada con tal de sanarlos.',
          año         : 2021,
          subtitulos  : true,
          edad        : 18
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Real Madrid: La Leyenda Blanca',
          descripcion : 'El Real Madrid es un club centenario que tiene un equipo ganador para cada época y cada generación. Ningún otro club ha conseguido todos los éxitos del ya considerado el eterno campeón. Un ejemplo para el mundo del deporte. Sus protagonistas y admiradores repasan los hitos y las adversidades históricas que hacen del Real Madrid el mejor equipo del mundo.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Oscura Verdad',
          descripcion : 'Lucy y Adrian llevan tiempo intentando tener un hijo. Deciden buscar ayuda en el doctor Hindle. Lucy se somete a una inseminación artificial y queda embarazada de trillizos. El doctor les informa de que llevar a cabo un embarazo de estas características puede poner en riesgo la salud tanto de los niños como de la madre, por lo que Lucy y Adrian deben decidir cuál quieren que viva y cuál no.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'AS WE SEE IT',
          descripcion : 'La serie trata de Jack, Harrison y Violet, tres compañeros de piso con autismo que luchan por conseguir trabajo, mantenerlo, hacer amigos, enamorarse y abrirse camino en un mundo que no los comprende. Con la ayuda de sus familias, de su asistenta y, en ocasiones, de ellos mismos, los chicos luchan contra las adversidades y celebran los triunfos mientras intentan lograr independencia y aceptación.',
          año         : 2022,
          subtitulos  : true,
          edad        : 16
        },
        {
          imagen      : '/assets/img/sliders/xxxxxxx.webp',
          titulo      : 'Poliamor para principiantes',
          descripcion : 'Manu, 28 años, es un friki romántico e intento de youtuber que aún vive con sus padres. Conoce a Amanda, doctora que practica el poliamor, de la que no puede evitar enamorarse. Tendrá pues que pelearse por convertirse en protagonista de esta relación a 6 bandas. Esta experiencia amorosa impulsa su carrera en Youtube pero acabará poniendo en jaque su nueva relación.',
          año         : 2021,
          subtitulos  : true,
          edad        : 16
        }
      ]
    },
  ]

  constructor() { }
}
