//1. 다음 프로그램의 출력 결과는?
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

//2. 빈칸에 들어갈 코드?
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

//3번. 위 코드에서 pSwap 함수를 Point 구조체로
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