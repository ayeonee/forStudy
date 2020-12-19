//do-while : 조건을 만족하든 하지 않든 무조건 1번은 실행
#include<iostream>
using namespace std;
int main() {
	int i = 15;
	do {
		cout << i << endl;	
		i++;
	} while (i <= 15);

	//무한 반복
	while (1) {}
}