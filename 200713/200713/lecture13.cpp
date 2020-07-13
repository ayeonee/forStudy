//전치와 후치

#include <iostream>
using namespace std;
int main() {
	int a = 10;
	int b;
	cout << "전치 증가 연산" << endl;
	b = ++a; //a에 1을 증가 시키고 b에 a를 대입
	cout << "a : " << a << endl;
	cout << "b : " << b << endl;

	a = 10;
	cout << "후치 증가 연산" << endl;
	b = a++; //b에 a값을 저장 후 a에 1 증가
	cout << "a : " << a << endl;
	cout << "b : " << b << endl;
}