/*************************************************************************
	> File Name: pointer.cpp
	> Author: 
	> Mail: 
	> Created Time: 日  9/11 14:56:56 2016
 ************************************************************************/

#include <iostream>
using namespace std;

int main()
{
    int    *ip;    /* 一个整型的指针 */
    double *dp;    /* 一个 double 型的指针 */
    float  *fp;    /* 一个浮点型的指针 */
    char   *ch;    /* 一个字符型的指针 */


    int var = 20;
    ip = &var;     // 在指针变量中存储 var 的地址

    // 输出在指针变量中存储的地址
    cout << "Address stored in var variable:";
    cout << &var << endl;

    // 访问指针中地址的值
    cout << "Value of var variable:";
    cout << var << endl;

    // 输出在指针变量中存储的地址
    cout << "Address stored in ip variable:";
    cout << ip << endl;

    // 访问指针中地址的值
    cout << "Value of *ip variable:";
    cout << *ip << endl;

    return 0;
}
