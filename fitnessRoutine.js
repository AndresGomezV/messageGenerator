/* The main idea of the program is to output the following:

Muscle group to work today: 
Sets & reps:
Excercises: 

*/
// Crear un objeto con 3 array nested dentro de el, de donde se tomaran los datos
const routine = {
    muscle: ["Biceps", "Legs", "Chest"],
    setsAndReps : ["3x12", "4x15", "3x6", "2x20", "5x3"],
    excercises: ["Dumbbells Curl", "Hack Squat", "Bench Press"]
};
// Paso 2: Generar un índice aleatorio
randomIndex = Math.floor(Math.random() * routine.muscle.length);

// Paso 3: Seleccionar elementos aleatorios usando el índice
const arr1 = routine.muscle[randomIndex];
const arr2 = routine.setsAndReps[randomIndex];
const arr3 = routine.excercises[randomIndex];

// Paso 4: Construir y mostrar el mensaje
const message = `Today's routine is for ${arr1}, sets and reps: ${arr2} and the excercise is: ${arr3}`;

console.log(message);


