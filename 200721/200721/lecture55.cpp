#include <iostream>
#include <string>
using namespace std;
//1��
//int main() {
//	string s;
//	int a;
//	cin >> s;
//	cin >> a;
//	cout << s << "���� ������ " << a << "���Դϴ�." << endl;
//
//}

//2�� ���� ��� for��
int main() {
	int arr[2][3] = { {1,2,3}, {4,5,6} };
	for (int(&ln)[3] : arr) {
		for (int& col : ln) {
			cout << col << ' ';
		}
		cout << endl;
	}
}

//3�� �Լ��� ������ �� ����Ʈ �Ű������� �����ʺ��� �־����