#include <iostream>
#include <string>
using namespace std;
//1번
//int main() {
//	string s;
//	int a;
//	cin >> s;
//	cin >> a;
//	cout << s << "님의 점수는 " << a << "점입니다." << endl;
//
//}

//2번 범위 기반 for문
int main() {
	int arr[2][3] = { {1,2,3}, {4,5,6} };
	for (int(&ln)[3] : arr) {
		for (int& col : ln) {
			cout << col << ' ';
		}
		cout << endl;
	}
}

//3번 함수를 정의할 때 디폴트 매개변수는 오른쪽부터 주어야함