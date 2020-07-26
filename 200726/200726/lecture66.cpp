//1번. 출력결과  0 10 0 20
//2번. resizewindow 함수 추가
//3번. GameWindow(int int)생성자도 2번처럼 수정
//4번. 상수화 가능한 부분 모두 상수화
#include <iostream>
using namespace std;
class GameWindow {
public:
	GameWindow();
	GameWindow(const int, const int);

	int GetWidth() const;
	int GetHeight() const;
	void ResizeWindow(const int, const int);

private:
	int width;
	int height;
};

GameWindow::GameWindow() : width(800),height(600){}
//GameWindow::GameWindow(int w, int h):width(w),height(h){}
GameWindow::GameWindow(const int w, const int h) {
	/*if (w < 800) width = 800;
	else width = w;
	if (h < 600) height = 600;
	else height = h;*/
	ResizeWindow(w, h); //하는일이 같으면 생성자안에서 멤버함수를 호출할 수 있다.
}
void GameWindow::ResizeWindow(const int w, const int h) {
	if (w < 800) width = 800;
	else width = w;
	if (h < 600) height = 600;
	else height = h;
}

int GameWindow::GetWidth() const { return width; }
int GameWindow::GetHeight() const { return height; }

int main() {
	GameWindow mainWindow;
	mainWindow.ResizeWindow(1366, 768);
	cout << mainWindow.GetWidth() << "x" << mainWindow.GetHeight() << endl;
}