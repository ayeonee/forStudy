//�迭 ������ : �迭�� ����Ű�� ������
//������ �迭 : �����͵��� �迭
#include <stdio.h>
int main() {
	int(*ptr1)[4]; //4��¥�� int�� �迭�� ����Ű�� ������(�迭 ������)
	int *ptr[4]; //������ �迭 

	int a = 10;
	int b = 20;
	int c = 30;
	int d = 40;

	ptr[0] = &a;
	ptr[1] = &c;
	ptr[2] = &d;
	ptr[3] = &b;
	printf("%d %d %d %d \n", *ptr[0], *ptr[1], *ptr[2], *ptr[3]);
}