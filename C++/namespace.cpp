#include <stdlib.h>
#include <iostream>
using namespace std;

// 定义第一个命名空间
namespace stu
{
    int x (100);
    void fun()
    {
        cout << "hello world!!!" << endl;
    }
}

// 定义第二个命名空间
namespace myNum
{
    int x;
    int y;

    int setNum()
    {
        // 需要定义多个输入变量值时，多个值间以空格分隔
        cout << "请输入整型:";
        cin >> x >> y;

        cout << "Y is:" << y << endl;

        return x;
    }

    int hello()
    {
        int x = 1;
        cout << boolalpha << x << endl;
        return 0;
    }
}

// 定义主入口
int main() {
    bool flag(false);
    int b(10);

    cout << flag << "  == " << stu::x << endl;

    myNum::hello();

    std::cout << std::boolalpha
              << "boolalpha true: " << true << '\n'
              << "boolalpha false: " << false << '\n';

    stu::fun();

    myNum::setNum();

    bool isFlag = false;

    if (myNum::x % 2 == 0) {
        isFlag = false;
    } else {
        isFlag = true;
    }

    if (isFlag) {
        cout << myNum::x << "  是奇数" << endl;
    } else {
        cout << myNum::x << "  是偶数" << endl;
    }
}


/* vim: set ts=4 sw=4 sts=4 tw=100 */
