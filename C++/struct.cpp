/*************************************************************************
	> File Name: struct.cpp
	> Author: wangming
	> Mail: wangming07@baidu.com
	> Created Time: 日  9/11 13:51:12 2016
 ************************************************************************/

#include <iostream>
#include <stdlib.h>
using namespace std;

struct
{
    int x;
    int y;
}hello,world;

int main()
{
    hello.y = 10;
    world.x = 15;
    int i = hello.y;
    cout << i << "," << world.x << endl;
    return 0;
}
