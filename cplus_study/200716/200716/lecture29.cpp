//배열 포인터, 2차원 배열 포인터
/*
	1. arr==&arr[0]
	2.*arr==arr[0]
	3. ptr+1==ptr에 sizeof(*ptr)을 더한 값
*/
#include <stdio.h>
int main() {
	int arr1[3] = { 1,2,3 };

	int(*ptr_arr)[3]; //길이 3인 int형 배열을 가리키는 포인터를 선언
	ptr_arr = &arr1;

	for (int i = 0; i < 3; i++) {
		printf("%d\n", (*ptr_arr)[i]);
	}

	//2차원 배열 포인터
	int arr[2][3] = { {1,2,3},{4,5,6} };
	printf("%d\n", sizeof(arr)); //24
	printf("%d\n", sizeof(arr[0])); //12, arr의 0번째 행 전체를 하나의 배열로 봄.
 	printf("%d\n", sizeof(arr[0][0])); //4, arr의 0번째 행, 0번째 열을 가리킴.

	printf("%d\n", &arr); 
	printf("%d\n", &arr[0]);
	printf("%d\n", &arr[0][0]); //다 같은 값을 가리키므로 같게 나옴.

	int(*ptr)[3] = arr; //2차원 배열을 포인터로 치환하고 싶다면 2차원 배열의 한 행을 가리키는 배열 포인터를 만들어서 그 배열 포인터에 array 집어 넣음.
	// 1. ptr[i]==arr[i]
	// 2. ptr[i][j] == arr[i][j]
	// 3. ptr==arr
}