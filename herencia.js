class Animal{
    constructor (tipo, raza){
      this.cero = tipo;
      this.raza = raza;
    };
  };
  class Domesticos extends Animal{
    constructor(cero, nombre, edad, peso){
      super(cero)
      this.uno = nombre;
      this.dos = edad;
      this.tres = peso;
    };
  };
  var animal1 = new Domesticos("Hogar", "boby", 8, 6);
  var animal2 = new Domesticos("Caza", "boby2", 7, 5);
  var unico = new Animal("Salvaje", "pura");
  document.write("<br> Clase Animal: " + unico.cero);
  document.write("<br> Clase Domesticos A1: " + animal1.cero); 
  document.write("<br> Clase Domesticos A2: " + animal2.cero);
  class Producto {
    constructor (nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
    }
    formatearProducto(){
      return `El producto ${this.nombre} tiene un precio ${this.precio}`
    }
  } 
  const producto2 = new Producto('Monitor', 800); 
  console.log(producto2);
  class Libro extends Producto{
  }
  const libro = new Libro('java', 120, '9999'); 
  console.log(libro.formatearProducto());
  