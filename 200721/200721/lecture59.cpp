//생성자 : 객체가 생성될 때 자동으로 호출되는 함수, 멤버 변수 초기화
//소멸자 : 객체가 소멸될 때 자동으로 호출되는 함수, 메모리 해제

#include<iostream>
using namespace std;
//class MyClass {
//public :
//	MyClass() { //생성자
//		cout << "생성자가 호출되었다" << endl;
//	}
//
//	~MyClass() { //소멸자
//		cout << "소멸자가 호출되었다" << endl;
//	}
//};
////디폴트 생성자,소멸자도 있음. 기본적으로 호출됨. 함수안에 아무것도 없음.
//
////MyClass globalObj;
//void testLocalObj() {
//	cout << "testlocalObj 함수 시작!!" << endl;
//	MyClass localObj;
//	cout << "testlocalObj 함수 끝!!" << endl;
//}
//int main() {
//	cout << "main 함수 시작!!" << endl;
//	testLocalObj();
//	cout << "main 함수 끝!!" << endl;
//}

//복소수
class Complex {
public: 
	Complex() {
		real = 0;
		imag = 0;
	}
	Complex(double real_, double imag_) {
		real = real_;
		imag = imag_;
	}
	double GetReal() {
		return real;
	}
	void SetReal(double real_) {
		real = real_;
	}

	double GetImag() {
		return imag;
	}
	void SetImag(double imag_) {
		imag = imag_;
	}
private:
	double real;
	double imag;
};

int main() {
	Complex c1;
	Complex c2 = Complex(2, 3);
	Complex c3(2, 3);

	cout << "c1= " << c1.GetReal() << " , " << c1.GetImag() << endl;
	cout << "c2= " << c2.GetReal() << " , " << c2.GetImag() << endl;
	cout << "c3= " << c3.GetReal() << " , " << c3.GetImag() << endl;
}