//1. ���� ���α׷��� ��� �����?
//#include <stdio.h>
//typedef int Point[2];
//typedef Point* Pointptr;
//
//int main() { 
//	Point p = { 3,4 };  //int p[2]={3,4};
//	Pointptr pp = &p; //Point *pp = &p;
//
//	printf("%d %d %d\n", **pp, (*pp)[3], (*pp)[1]);
//	// **pp= *(*pp)=*p=p[0]
//}

//2. ��ĭ�� �� �ڵ�?
//#include <stdio.h>
//struct Point {
//	int x, y;
//};
//
//void pSwap(Point* p) {
//	int tmp;
//	tmp = p->x;
//	p->x = p->y;
//	p->y = tmp;
//}
//
//int main() {
//	Point pos = { 3,4 };
//	pSwap(&pos);
//	printf("(%d, %d)\n", pos.x, pos.y);
//}

//3��. �� �ڵ忡�� pSwap �Լ��� Point ����ü��
#include <stdio.h>
struct Point {
	int x, y;
	void pSwap() {
		int tmp;
		tmp =x;
		x = y;
		y = tmp;
	}
};



int main() {
	Point pos = { 3,4 };
	pos.pSwap();
	printf("(%d, %d)\n", pos.x, pos.y);
}