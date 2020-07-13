#include <iostream>
using namespace std;
int main() {
	double t,w;
	cout << "키를 m 단위로 입력하세요." << endl;
	cin >> t;
	cout << "체중을 kg 단위로 입력하세요." << endl;
	cin >> w;
	double bmi;
	bmi = w / (t * t);
	cout << "bmi는 " << bmi << endl;
	return 0;
}