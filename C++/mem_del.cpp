/*************************************************************************
	> File Name: mem_del.cpp
	> Author: 
	> Mail: 
	> Created Time: 日  9/11 15:08:32 2016
 ************************************************************************/

#include <iostream>
using namespace std;

int main()
{
    // 先声明一个指针变量，然后给指针取申请内存，内存大小可以在后面按需所定义
    int *p = new int[12];
    if(NULL == p)
    {
        cout << "The mem storage value is null!" << endl;
        return 0;
    }

    // 为申请下来的内存分配数值
    *p = 20;
    cout << "The mem storage value is:" << *p << endl;
    // 程序最后需要回收内存空间，以及需要重置指针
    delete p;
    p = NULL;

    return 0;
}
