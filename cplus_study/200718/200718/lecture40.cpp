#include <stdio.h>
//1번 홀짝 판단
//int parity(int n) {
//	/*if (n % 2 == 0) return 0;
//	return 1; //else 사용 안해도 됨*/
//	//더 간단히
//	return (n % 2+2)%2;
//}
//
//int main() {
//	printf("%d\n", parity(5));
//	printf("%d\n", parity(-3));
//	printf("%d\n", parity(6));
//
//}
//2번 코드 결과 : 0의아이템을 1번 1의 아이템을 1번 2의 아이템을 1번 3의 아이템을 0, 4의 아이템을 2
//3번 코드 결과 : 5 4 3 2 1 1 2 3 4 5
//4번 문자열 공백 제거

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