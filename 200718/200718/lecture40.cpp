#include <stdio.h>
//1�� Ȧ¦ �Ǵ�
//int parity(int n) {
//	/*if (n % 2 == 0) return 0;
//	return 1; //else ��� ���ص� ��*/
//	//�� ������
//	return (n % 2+2)%2;
//}
//
//int main() {
//	printf("%d\n", parity(5));
//	printf("%d\n", parity(-3));
//	printf("%d\n", parity(6));
//
//}
//2�� �ڵ� ��� : 0�Ǿ������� 1�� 1�� �������� 1�� 2�� �������� 1�� 3�� �������� 0, 4�� �������� 2
//3�� �ڵ� ��� : 5 4 3 2 1 1 2 3 4 5
//4�� ���ڿ� ���� ����

void print_noSpace(char str[]) {
	printf("%s", str);
	for (int i = 0; str[i] != '\0'; i++) {
		if (str[i] != ' ') {
		printf("%c", str[i]);
		}

	}
}
int main() {
	print_noSpace("Hello, World!\n");
	print_noSpace("My name is Doodle\n")
}