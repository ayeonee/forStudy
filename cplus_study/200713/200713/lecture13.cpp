//��ġ�� ��ġ

#include <iostream>
using namespace std;
int main() {
	int a = 10;
	int b;
	cout << "��ġ ���� ����" << endl;
	b = ++a; //a�� 1�� ���� ��Ű�� b�� a�� ����
	cout << "a : " << a << endl;
	cout << "b : " << b << endl;

	a = 10;
	cout << "��ġ ���� ����" << endl;
	b = a++; //b�� a���� ���� �� a�� 1 ����
	cout << "a : " << a << endl;
	cout << "b : " << b << endl;
}