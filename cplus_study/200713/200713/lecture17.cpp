//switch

#include <iostream>
using namespace std;
int main() {
	int choice;
	makeChoice:
	printf("새 게임 : 1\n");
	printf("불러오기 : 2\n");
	printf("설정 : 3\n");
	printf("크레딧  : 4\n");
	scanf_s("%d", &choice);

	switch (choice) {
	case 1:
		printf("새 게임\n");
		break; //break 하면 중괄호 밖으로 나가게 됨.
	case 2:
		printf("불러오기\n");
		break;
	case 3:
		printf("설정\n");
		break;
	case 4:
		printf("크레딧\n");
		break;
	default: //모두 아니라면
		printf("잘못 입력하셨습니다. \n");
		goto makeChoice; //makeChoice 있는 곳으로 돌아가라. goto가 많아지면 복잡해져서 잘 안씀.
		break;
	}
}