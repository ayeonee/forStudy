//typedef int Pair1[2]; //���ϴ� �ڷ����� ���� ����
//Pair1 p; // =int p[2];
//
////����ü
//typedef struct { int x, y; } Pair; //�������� ������ �� ���� ���� ��

#include <stdio.h>	
	//typedef ���� ����	
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
	printf("%d, %d", p2.y, ptr_product->y); //���� ��
}