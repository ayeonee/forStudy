#include <iostream>
using namespace std;
int main() {
	double t,w;
	cout << "Ű�� m ������ �Է��ϼ���." << endl;
	cin >> t;
	cout << "ü���� kg ������ �Է��ϼ���." << endl;
	cin >> w;
	double bmi;
	bmi = w / (t * t);
	cout << "bmi�� " << bmi << endl;
	return 0;
}