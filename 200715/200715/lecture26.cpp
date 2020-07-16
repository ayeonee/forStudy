//문자열
#include<iostream>
#include<string.h> //문자열 선언 위한 헤더파일
int main() {
	char arr[] = "Hello, World!"; //쌍따옴표안에 넣기 가능
	//이때 배열의 크기는 14. 뒤에 null문자 들어갔기 때문
	//문자열을 출력하거나 문자열에 관련된 함수를 실행시키면 '\0' 이 문자열의 중간에 나온다고 하더라도 그이후로는 처리하지 않음.
	//c++에서 string 나와서 그렇게 중요하지않음.
	printf("%s\n", arr);

	char str[] = "Hello";
	char str2[100];
	int len;
	len = strlen(str); //str의 길이 저장
	strcpy_s(str2, str); //str2에 str저장
	printf("%s\n", str2);

}