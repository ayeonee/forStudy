//�迭 ������, 2���� �迭 ������
/*
	1. arr==&arr[0]
	2.*arr==arr[0]
	3. ptr+1==ptr�� sizeof(*ptr)�� ���� ��
*/
#include <stdio.h>
int main() {
	int arr1[3] = { 1,2,3 };

	int(*ptr_arr)[3]; //���� 3�� int�� �迭�� ����Ű�� �����͸� ����
	ptr_arr = &arr1;

	for (int i = 0; i < 3; i++) {
		printf("%d\n", (*ptr_arr)[i]);
	}

	//2���� �迭 ������
	int arr[2][3] = { {1,2,3},{4,5,6} };
	printf("%d\n", sizeof(arr)); //24
	printf("%d\n", sizeof(arr[0])); //12, arr�� 0��° �� ��ü�� �ϳ��� �迭�� ��.
 	printf("%d\n", sizeof(arr[0][0])); //4, arr�� 0��° ��, 0��° ���� ����Ŵ.

	printf("%d\n", &arr); 
	printf("%d\n", &arr[0]);
	printf("%d\n", &arr[0][0]); //�� ���� ���� ����Ű�Ƿ� ���� ����.

	int(*ptr)[3] = arr; //2���� �迭�� �����ͷ� ġȯ�ϰ� �ʹٸ� 2���� �迭�� �� ���� ����Ű�� �迭 �����͸� ���� �� �迭 �����Ϳ� array ���� ����.
	// 1. ptr[i]==arr[i]
	// 2. ptr[i][j] == arr[i][j]
	// 3. ptr==arr
}