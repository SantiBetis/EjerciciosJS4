// Clase Alumno
class Alumno {
    constructor(nombre, apellidos, numMatricula, curso) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.numMatricula = numMatricula;
      this.curso = curso;
    }
  }
  
  // Lista de 22 alumnos de DAW
  const alumnos = [
    new Alumno("José", "Pérez", 1, "2ºDAW"),
    new Alumno("David", "Cuevas", 2, "2ºDAW"),
    new Alumno("Javier", "Ortega", 3, "2ºDAW"),
    new Alumno("Laura", "Padilla", 4, "2ºDAW"),
    new Alumno("Alicia", "Hernández", 5, "2ºDAW"),
    new Alumno("María Luna", "García", 6, "2ºDAW"),
    new Alumno("Enrique", "Díaz", 7, "2ºDAW"),
    new Alumno("Diana", "Pascual", 8, "2ºDAW"),
    new Alumno("Santiago", "Pérez", 9, "2ºDAW"),
    new Alumno("Javier", "Polo", 10, "2ºDAW"),
    new Alumno("José Antonio", "Muñoz", 11, "2ºDAW"),
    new Alumno("Hugo", "Jiménez", 12, "2ºDAW"),
    new Alumno("Fernando", "Iglesias", 13, "2ºDAW"),
    new Alumno("Miguel Ángel", "Reyes", 14, "2ºDAW"),
    new Alumno("Iván", "Sánchez", 15, "2ºDAW"),
    new Alumno("José María", "Silva", 16, "2ºDAW"),
    new Alumno("Fernando", "Vaquero", 17, "2ºDAW"),
    new Alumno("Juan Antonio", "Núñez", 18, "2ºDAW"),
    new Alumno("Alejandro", "Navarro", 19, "2ºDAW"),
    new Alumno("José Antonio", "Vázquez", 20, "2ºDAW"),
    new Alumno("Sergio", "Velasco", 21, "2ºDAW"),
    new Alumno("Samuel", "", 22, "2ºDAW"),
  ];
  
  // Alumnos generados
  let alumnosGenerados = [];
  
  // Función para generar un número aleatorio
  function generarAleatorio() {
    return Math.floor(Math.random() * alumnos.length);
  }
  
  // Función para crear una carta de alumno
  function crearCarta(alumno) {
    const card = document.createElement("div");
    card.className = "card";
  
    const nombre = document.createElement("p");
    nombre.innerText = `Nombre: ${alumno.nombre}`;
    const apellidos = document.createElement("p");
    apellidos.innerText = `Apellidos: ${alumno.apellidos}`;
    const numMatricula = document.createElement("p");
    numMatricula.innerText = `Número de Matrícula: ${alumno.numMatricula}`;
    const curso = document.createElement("p");
    curso.innerText = `Curso: ${alumno.curso}`;
  
    // Botón para borrar la carta
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = () => card.remove();
  
    card.appendChild(nombre);
    card.appendChild(apellidos);
    card.appendChild(numMatricula);
    card.appendChild(curso);
    card.appendChild(btnEliminar);
  
    return card;
  }
  
  // Función para generar un alumno
  function generarAlumno() {
    if (alumnosGenerados.length >= alumnos.length) {
      alert("No se pueden generar más alumnos.");
      return;
    }
  
    let indice;
    do {
      indice = generarAleatorio();
    } while (alumnosGenerados.includes(indice));
  
    const alumno = alumnos[indice];
    alumnosGenerados.push(indice);
  
    const container = document.getElementById("container");
    container.appendChild(crearCarta(alumno));
  }
  
  // Asociar evento al botón de generar
  document.getElementById("generateButton").onclick = generarAlumno;
  