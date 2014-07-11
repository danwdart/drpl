#include <iostream>
#include <fstream>

using namespace std;

char token[100];
char *stackstrings[1024];
int sp;

int main(int argc, char *argv[]) {

	sp = 0;

	ifstream file;
	file.open (argv[1]);
	if (!file.is_open()) {
		cout << "Argh! Couldn't open that file."<<endl;
		return 1;
	}
	while (file >> token){
		cout << token << endl;
	}
	file.close();
	return 0;
}