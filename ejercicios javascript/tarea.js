class tarean1{
    ejercicio1(){
        let  a,b, resultado
        a=10
        b=10   
        //Sumamos a y b el resultado lo almacenamos
        resultado= a+b;
        console.log("El resultado es: ",resultado)	
	}
    ejercicio2(){
        let n1,n2,misterio,letra,palabra// La variable numero1 es entera
	    n1= 10;
	    n2 = 19.67;
	    misterio = false;
	    letra = 'a';
	    palabra = "Hola";
        console.log(n1,n2,misterio,letra,palabra)
    }
    ejercicio3(){
        let num 
        num=5
	    console.log( "El numero es: ",num)
    }
    ejercicio4(){
        let resultado 
	    resultado= 3^3 * (10 - (2 * 4));
	    console.log("El resultado es: ",resultado) 
    }
    ejercicio5(){
        let resultado,n1,n2;
	    n1=5
        n2=3
        resultado= n1 + n2;
        console.log( "El resultado es: ",resultado) 
    }
    ejercicio6(){
        let resultado 
	    resultado= 10 <20 ;
	    console.log("El resultado es ",resultado) 
	
    }
    ejercicio7(){
        let resultado;
        resultado=10 > 20 ;
        console.log("El resultado es ",resultado) 
    }
    ejercicio8(){
        let resultado ;
        let a,b
        a=10
        b=20
        resultado= a === b ;
        console.log("El resultado es ",resultado)
	
    }
    ejercicio9(){
        let resultado ;
	    resultado= 10 !== 20 ;
	    console.log("El resultado es ",resultado)
    }
    ejercicio10(){
        let resultado ;
	    resultado= 10 <= 20 ;
	    console.log ("El resultado es ",resultado)
    }
    ejercicio11(){
        let resultado;
        resultado= 10 >= 20 ;
	    console.log("El resultado es ",resultado)
    }
    ejercicio12(){
        let resultado,A,B,C ;
        A = 10;
        B = 20;
        C = 30;
	    resultado= A+B === C;
        console.log("El resultado es ",resultado)
	}
    ejercicio13(){
        let resultado,A,B,C
        A = 10;
        B = 20;
        C = 30;
        resultado= A+B >= C;
        console.log(resultado)
    }
    ejercicio14(){
        let a,b,c,resultado;
        a = 10;
        b = 15;
        c = 20;
        resultado=  (a<b) && (b<c);
        console.log(resultado);
    }
    ejercicio15(){
        let a,b,c,resultado ;
	    a= 10;
        b= 15;
	    c= 20;
	    resultado=  (a>b) && (b<c);
	    console.log(resultado)
    }
    ejercicio16(){
        let a,b,c,resultado;
        a = 10;
        b = 15;
        c = 20;
        resultado=  (a>b) || (b<c);
        console.log(resultado);
    }
    ejercicio17(){
        let a,b,c,resultado
        a= 10;
        b= 15;
        c= 20;
	    resultado = (a>b) || (b>c);
	    console.log(resultado)
    }
    ejercicio18(){
        let a,b,c,resultado;
        a= 10;
        b= 15;
        c= 20;
        resultado= ! (a>b) || (b>c);
        console.log(resultado);
    }
    ejercicio19(){
        let num, resultado;
        num=-5;
        resultado= Math.abs(num)
        console.log("El resultado es ", resultado)
    }
    ejercicio20(){
        let num, resultado;
        num=3.14
        resultado= Math.trunc(num);
        console.log("El resultado es ", resultado);
    }
    ejercicio21(){
        let num, resultado ;
        num=10.5
        resultado= Math.round(num);
        console.log("El resultado es ", resultado);
    }
    ejercicio22(){
        let num, resultado;
        num=5;
        resultado= Math.sin(num);
        console.log("El resultado es ", resultado);
    }
    ejercicio23(){
        let num, resultado;
        num=6;
        resultado= Math.log(num);
        console.log("El resultado es ", resultado);
        
    }
    ejercicio24(){
        let num, resultado;
        num=8;
        resultado= Math.exp(num);
        console.log("El resultado es ", resultado);
    }
    ejercicio25(){
        let num, resultado ;
        num=10;
        resultado= Math.floor(Math.random()* num );
        console.log("El resultado es ", resultado);
    }
    ejercicioextra1(){
        let num, resultado;
        num=1;
        resultado= Math.asin(num);
        console.log("El resultado es ", resultado)
    }
    ejercicioextra2(){
        let num, resultado;
        num=4;
        resultado= Math.tan(num);
        console.log("El resultado es ", resultado);
    }
    ejercicioextra3(){
        let num, resultado
        num=1;
        resultado= Math.asin(num);
        console.log("El resultado es ", resultado);
    }
    ejercicioextra4(){
        let num, resultado;
        num=1;
        resultado= Math.acos(num);
        console.log("El resultado es ", resultado);
    }
    ejercicioextra5(){
        let num, resultado;
        num=6;
        resultado= Math.atan(num);
        console.log("El resultado es ", resultado);
    }
    ejercicio26(){
        let A,B,C, resultado;
        A=5;
        B=3;
        C=4;
        resultado= -B + Math.sqrt (B^2 - 4) * A * C/2 *A;
        console.log("El resultado es: ",resultado);		
    }
    ejercicio27(){
        let A,B,resultado ;
        A=5
        B=6
        resultado= ((3 + 5 * 8)< 3 && ((-6/3 * 4) + 2 < 2)) || (A>B);
        console.log("El resultado es: ",resultado);		
	}
    ejercicio28(){
        let a,b,aux;
        a=5;
        b=10;
        aux=a;
        a= b;
        b=aux;
        console.log("El nuevo valor de a es: ", a);
        console.log("El nuevo valor de b es: ", b);
    }
    ejercicio29(){
        let a,b,c,resultado;
        a= 10;
        b= 20;
        c=5;
        resultado= a+b+c;
        console.log("El resultado es: ",resultado)
    }
    ejercicio30(){
        let a,b,resultado;
        a= 10;
        b=5;
        resultado=a+b;
        console.log("El resultado es: ",resultado);
    }
    ejercicio31(){
        let a,b,resultado ;
        a= 10;
        b=10; 
        resultado=a+b;
        console.log("El resultado es: ",resultado);		
    }
    ejercicio32(){
        let Horas, minutos, seg,horas_seg,minutos_seg, total_seg ;
        Horas=8;
        minutos=60;
        seg=1500;
        horas_seg= Horas * 3600;
        minutos_seg= minutos * 60;
        total_seg= horas_seg + minutos_seg + seg;
        console.log("Los segundos equivalentes son: ", total_seg); 
    }
    ejercicio33(){
        let radio,area,lon,pi ;
        pi=3.14
        radio=3.15;
        area= pi * radio^2;
        lon= 2 * pi * radio;
        console.log("El area de la circunferencia es: ",area);
        console.log("La longitud es: ",lon);
    }
    ejercicio34(){
        let num_hombres,num_mujeres,Total_estudiantes,porcentajeH,PorcentajeM  ;
        //numero de hombres
        num_hombres=10;
        //numero de mujeres
        num_mujeres=15;
        Total_estudiantes=num_hombres+num_mujeres;
        porcentajeH=num_hombres/Total_estudiantes*100;
        PorcentajeM=num_mujeres/Total_estudiantes*100;
        console.log('EL porcentaje de hombres es: ',porcentajeH,'%');
        console.log('El porcentaje de mujeres es: ',PorcentajeM,'%');
    }
    ejercicio35(){
        let cantidadA,cantidadB,cantidadC,tiempoA, tiempoB, tiempoC,tiempo_total,horas, minutos;
        // cantidad de cuestionarios A
        cantidadA=5;
        // cantidad de cuestionarios B
        cantidadB=6;
        //Digite la cantidad de cuestionarios C
        cantidadC=7;
        //Calcular los minutos que se tardara por cada cuestionario
        tiempoA=cantidadA * 5;
        tiempoB=cantidadB * 8;
        tiempoC=cantidadC * 6;
        //Calcular las horas y minutos
        horas=Math.trunc(tiempo_total/ 60);
        minutos=tiempo_total % 60;
        console.log("Se tardara ",horas,"horas y ",minutos,"minutos")
    }
    ejercicio36(){
        let precio,descuento,precio_final;
        //Digite el precio a pagar
        precio=30;
        descuento=precio * 0.15 ;
        precio_final=precio - descuento;
        console.log("El precio a pagar es de: ",precio_final);
    }
    ejercicio37(){
        let parcial1,parcial2,parcial3,promedioP,notasParcial,examen_final,notaExamen,notaTrabajo,notaFinalTrabajo,notaFinal ;
        // Digite las 3 notas de los parciales
        parcial1=10,parcial2=15,parcial3=15;
        promedioP=(parcial1 +parcial2+parcial3)/3;
        notasParcial= promedioP * 0.55;
        // Digite la nota del examen final
        examen_final=15;
        notaExamen=examen_final * 0.3;
        // Digite la nota del trabajo final
        notaTrabajo=11;
        notaFinalTrabajo= notaTrabajo * 0.15;
        notaFinal=notasParcial+notaExamen+notaFinalTrabajo;
        console.log("La calificacion final es: ",notaFinal);
    }
    ejercicio38(){
        let num;
        // Digite un numero
        num=4;
        if(num % 2==0){
            console.log('El numero ',num,'es par');
        }else{
            console.log('El numero ',num,' es impar');
        }     
    }
    ejercicio39(){
        let nota1,nota2,nota3,promedio
        // Digite las 3 calificaciones;
         nota1=15,nota2=14,nota3=13;
        promedio= (nota1+nota2+nota3)/3;
        if(promedio >=70){
            console.log("El alumno esta aprobado con: ",promedio);
        }else{
            console.log("El alumno esta reprobado con: ",promedio);
        }    
    }
}
let tareas= new tarean1()
tareas.ejercicio1()
tareas.ejercicio2()
tareas.ejercicio3()
tareas.ejercicio4()
tareas.ejercicio5()
tareas.ejercicio6()
tareas.ejercicio7()
tareas.ejercicio8()
tareas.ejercicio9()
tareas.ejercicio10()
tareas.ejercicio11()
tareas.ejercicio12()
tareas.ejercicio13()
tareas.ejercicio14()
tareas.ejercicio15()
tareas.ejercicio16()
tareas.ejercicio17()
tareas.ejercicio18()
tareas.ejercicio19()
tareas.ejercicio20()
tareas.ejercicio21()
tareas.ejercicio22()
tareas.ejercicio23()
tareas.ejercicio24()
tareas.ejercicio25()
tareas.ejercicioextra1()
tareas.ejercicioextra2()
tareas.ejercicioextra3()
tareas.ejercicioextra4()
tareas.ejercicioextra5()
tareas.ejercicio26()
tareas.ejercicio27()
tareas.ejercicio28()
tareas.ejercicio29()
tareas.ejercicio30()
tareas.ejercicio31()
tareas.ejercicio32()
tareas.ejercicio33()
tareas.ejercicio34()
tareas.ejercicio35()
tareas.ejercicio36()
tareas.ejercicio37()
tareas.ejercicio38()
tareas.ejercicio39()