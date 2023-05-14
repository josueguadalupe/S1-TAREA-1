//Ejercio 4: Un profesor prepara tres cuestionarios para una evaluacion final:
//A, B y C, sabe que se tarda 5 minutos en revisar el cuestionario A,
//8 en revisar el cuestionari B y 6 en el C. La cantidad de examenes de cada
//tipo se entran por teclado.¿Cuantas horas y cuantos minutos se tardaran en
//Revisar todas las evaluaciones?
Proceso Ejercicio4
	Definir cantidadA,cantidadB,cantidadC Como Enteros;
	Definir TiempoA, tiempoB, tiempoC Como Enteros;
	Definir tiempo_total Como Enteros;
	Definir horas, minutos Como Enteros;
	Escribir "Digite la cantidad de cuestionarios A: ";
	Leer cantidadA;
	Escribir "Digite la cantidad de cuestionarios B: ";
	Leer cantidadB;
	Escribir "Digite la cantidad de cuestionarios C: ";
	Leer cantidadC;
	
	//Calcular los minutos que se tardara por cada cuestionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	//Calcular las horas y minutos
	horas <- trunc (tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	Escribir "Se tardara ",horas,"horas y ",minutos,"minutos"
FinProceso
