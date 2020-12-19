#include <iostream>
using namespace std;

//1번 등급출력
/*int main() {
	int a;
	cin >> a;
	if (a >= 90)
		cout << "A" << endl;
	else if (a >= 80)
		cout << "B" << endl;
	else if (a >= 70)
		cout << "C" << endl;
	else if (a >= 60)
		cout << "D" << endl;
	else
		cout << "F" << endl;
	
	return 0;
}

//2번 약수출력
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		if (n % i == 0)
			cout << i <<" ";
	}
}

//3번 3 6 9
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		int b = i % 10;
			if (b != 3 && b != 6 && b != 9)
				cout << i << endl;
			else
				cout << "*" << endl;;
	}
}

//4번
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= i; j++) {
			cout << 2 * j - 1 << " ";
		}cout << endl;
	}
}*/

//5번
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <=2*i-1; j++) {
			cout <<j<< " ";
		}
		cout << endl;
	}
}