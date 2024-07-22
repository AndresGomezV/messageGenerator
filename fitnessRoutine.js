/* The main idea of the program is to output the following:

Muscle group to work today: 
Sets & reps:
Excercises: 

*/
// Crear un objeto con 3 array nested dentro de el, de donde se tomaran los datos
const routine = {
    muscle: ["Cardio"],
    setsAndReps : ["3x12", "4x15", "3x6", "2x20", "5x3"],
    excercises: ["Dumbbells Curl", "Prono", "Supino"]
};
// Paso 2: Generar un índice aleatorio
randomIndexMuscle = Math.floor(Math.random() * routine.muscle.length);
randomIndexsetsAndReps = Math.floor(Math.random() * routine.setsAndReps.length);
randomIndexExcercises = Math.floor(Math.random() * routine.excercises.length);

// Paso 3: Seleccionar elementos aleatorios usando el índice
const arr1 = routine.muscle[randomIndexMuscle];
const arr2 = routine.setsAndReps[randomIndexsetsAndReps];
const arr3 = routine.excercises[randomIndexExcercises];

// Paso 4: Construir y mostrar el mensaje
const message = `Today's routine is for ${arr1}, sets and reps: ${arr2} and the excercise is: ${arr3}`;

console.log(message);


