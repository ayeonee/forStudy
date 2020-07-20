//typedef int Pair1[2]; //원하는 자료형을 선언 가능
//Pair1 p; // =int p[2];
//
////구조체
//typedef struct { int x, y; } Pair; //여러개의 변수를 한 개로 묶은 거

#include <stdio.h>	
	//typedef 생략 가능	
	struct Point2 { int x, y; };

int main() {
	typedef struct{ int x,y; } Point;
	Point p;

	Point2 p2;
	Point2 *ptr_product = &p2;
	p2.x = 3;
	p2.y = 4;

	// (*a).b == a->b
	printf("%d, %d", p2.x, (*ptr_product).x); 
	printf("%d, %d", p2.y, ptr_product->y); //같은 뜻
}