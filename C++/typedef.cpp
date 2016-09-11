/*************************************************************************
	> File Name: typedef.cpp
	> Author: 
	> Mail: 
	> Created Time: 日  9/11 15:52:46 2016
 ************************************************************************/

#include <iostream>
using namespace std;

// 给结构体定义一个新名字
typedef struct world
{
    int x;
} hello;  // hello 一个结构体类型=struct world

// 定义一个结构体变量
// struct hello2
struct
{
    int x;
    int y;
} he;     // he 是一个变量

int main()
{

    // 但是hello则必须先   hello hel;
    // 然后 hel.x = 13;
    hello hel;
    hel.x = 13;
    cout << "struct of x is: " << hel.x << endl;

    // 使用时可以直接访问he.y
    he.y = 131;
    cout << "struct of y is: " << he.y << endl;

    cout << "\n-------------------< 上面的验证结束 >---------------------\n" << endl;

    int x = 12;

    // typedef 为一个已有的类型取一个新的名字
    typedef int hello;
    
    hello y =15;

    cout << "X value is: " << x << endl;
    cout << "Y value is: " << y << endl;

    return 0;
}
