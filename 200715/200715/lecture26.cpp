//���ڿ�
#include<iostream>
#include<string.h> //���ڿ� ���� ���� �������
int main() {
	char arr[] = "Hello, World!"; //�ֵ���ǥ�ȿ� �ֱ� ����
	//�̶� �迭�� ũ��� 14. �ڿ� null���� ���� ����
	//���ڿ��� ����ϰų� ���ڿ��� ���õ� �Լ��� �����Ű�� '\0' �� ���ڿ��� �߰��� ���´ٰ� �ϴ��� �����ķδ� ó������ ����.
	//c++���� string ���ͼ� �׷��� �߿���������.
	printf("%s\n", arr);

	char str[] = "Hello";
	char str2[100];
	int len;
	len = strlen(str); //str�� ���� ����
	strcpy_s(str2, str); //str2�� str����
	printf("%s\n", str2);

}