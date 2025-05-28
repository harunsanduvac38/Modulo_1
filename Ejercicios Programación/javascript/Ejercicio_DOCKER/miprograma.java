public class miprograma {
	public static void main(String[] args) {
		System.out.println("Hola a todos, vamos a hacer una programa");
		System.out.println(3);
		System.out.println(2);
		System.out.println(1);
		System.out.println("Vamoos!!");
//Aqui ponemos algunos comentarios
/*Aqui ponemos mas comentarios
en dos lineas*/

		String nombre = "Harun";
		String apellido = "Sanduvac";
		int telefono = 604884362;
		float numerofloat = 5.99f;
		String fullnombre = nombre + apellido;
		int x = 5 , y = 6 , z = 7;
		char miletradenombre = 'H';
		
		System.out.println(fullnombre);
		System.out.println("Nombre : " + nombre);
		System.out.println("Apellido : " + apellido);
		System.out.println("Length : " + x );
		System.out.println("Width : " + y);
		int area = x * y;
		System.out.println("Area de cuadrado : " + area);

		int myint = 15;
		double mydouble = myint;
		System.out.println(myint);
		System.out.println(mydouble);



		int maxnota = 10;
		int minota = 6;
		int sunota = 8;
		System.out.println(-maxnota);
		float percentage = (float) minota / maxnota * 100.0f;

		System.out.println("Percentage de mi nota es " + percentage);


		String texto = "Cuantos caracteres hay aqui?";
		System.out.println("Cantidad del caracter del texto es : " + texto.length());

		String mayuscula = "Este texto se cambiara mayuscula";
		String minuscula = "ESTE TEXTO SE CAMBIARA MINUSCULA";

		System.out.println("Mayuscula: " + mayuscula.toUpperCase());
		System.out.println("Minuscula: " + minuscula.toLowerCase());

	}
}
