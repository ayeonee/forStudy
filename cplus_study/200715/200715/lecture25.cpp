//2차원 배열 - 파스칼의 삼각형
#include <iostream>
using namespace std;
int main() {
	int arr[10][10];
	for (int i = 0; i < 10; i++) {
		for (int j = 0; j <= i; j++) {
			if (j == 0 || i==j) {
				arr[i][j] = 1;
			}
			else {
				arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
			}
			cout << arr[i][j] << " ";
		}cout << endl;
	}
}