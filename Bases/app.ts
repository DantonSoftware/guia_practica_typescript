(() => {

  // Crear interfaces

  // Interfaz para validar el auto
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear: () => void;
  }

  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... gogogo!!!");
    }
  };

  conducirBatimovil(batimovil);


  // Interfaz con propiedades opcionales
  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
  };

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  reir(guason);


  // Interfaz para la siguiente función
  interface CiudadGotica {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  const habitantes = ciudadGotica([
    "Bruce Wayne",
    "Alfred",
    "Comisionado Gordon"
  ]);

  console.log(habitantes);


  // Interfaz que obliga a crear una clase
  interface PersonaInterface {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio: () => void;
  }

  class Persona implements PersonaInterface {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;

    constructor(
      nombre: string,
      edad: number,
      sexo: string,
      estadoCivil: string
    ) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.estadoCivil = estadoCivil;
    }

    imprimirBio(): void {
      console.log(
        `${this.nombre}, ${this.edad} años, sexo ${this.sexo}, estado civil ${this.estadoCivil}.`
      );
    }
  }

  const persona = new Persona("Bruce Wayne", 35, "Masculino", "Soltero");
  persona.imprimirBio();

})();