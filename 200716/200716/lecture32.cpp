#include<stdio.h>
int main() {
	//1번
	/*int arr[100];
	int n;
	scanf_s("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf_s("%d", &arr[i]);
	}

	for (int i = 1; i < n; i += 2) {
		printf("%d", arr[i]);
	}
	printf("\n");
	for (int i = 0; i < n; i += 2) {
		printf("%d", arr[i]);
	}*/

	//2번 : 코드보고 결과 맞추기 a=30 b=10 *ptr=10
	//3번 : 코드보고 결과 맞추기 
	//4번
	int n, k;
	scanf_s("%d %d", &n, &k);
	int arr[10][10];
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < k; j++) {
			scanf_s("%d", &arr[i][j]);
		}
	}
	int sum = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < k; j++) {
			sum += arr[i][j];
		}printf("%d\n", sum);
		sum = 0;
	}
}