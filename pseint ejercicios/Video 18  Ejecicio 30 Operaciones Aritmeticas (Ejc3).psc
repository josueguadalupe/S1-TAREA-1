//Ejercicio 3: Intercambiar el valor de 2 Variables
Proceso Principal
	Definir a,b,aux Como Enteros;
	
	Escribir "Digite el valor de a: ";
	Leer a;
	Escribir "Digite el valor de b: ";
	Leer b;
	
	Aux <- a;
	a <- b;
	b <- aux;
	
	Escribir "El nuevo valor de a es: ", a;
	Escribir "El nuevo valor de b es: ", b;
	
FinProceso
