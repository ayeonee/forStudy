//재귀함수로 팩토리얼
#include<stdio.h>
//int fac(int x) {
//	if (x == 1) return 1;
//	return x * fac(x - 1);
//}
//int main() {
//	int n = 5;
//	printf("%d",fac(n));
//
//}

//배열을 매개변수로 넘기기(call by reference)
void printArr(int* arr) //arr[4] 가능 
{
	for (int i = 0; i < 4; i++) {
		arr[i] *= 2;
		//*(arr+i)
	}
}
int main() {
	int arr[4] = { 1,2,3,4 };

	printArr(arr); //arr=&arr[0]
	for (int i = 0; i < 4; i++) {
		printf("%d ", arr[i]);
	}
}