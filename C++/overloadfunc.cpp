/*************************************************************************
	> File Name: overloadfunc.cpp
	> Author: 
	> Mail: 
	> Created Time: 日  9/11 15:17:23 2016
 ************************************************************************/

#include <iostream>
using namespace std;

// 定义函数名相同的两个函数，只要起参数个数、类型不一致，就不会报错
int getMax(int x, int y)
{
    if(x > y)
    {
        return x;
    }

    return y;
}

double getMax(double x, double y)
{
    if(x > y)
    {
        return x;
    }
    return y;
}

namespace Mark
{
    int getMax(int x, int y)
    {
        if(x > y)
        {
            return x;
        }

        return y;
    }

    double getMax(double x, double y)
    {
        if(x > y)
        {
            return x;
        }
        return y;
    }
}

int main()
{
    int x = 10;
    int y = 12;
    
    double m = 1.2;
    double n = 1.24;

    cout << "The max value is:" << getMax(x, y) << endl;

    cout << "The max value is:" << getMax(m, n) << endl;

    cout << "\n ------------------<  以下为 namespace  输出 >--------------------- \n" << endl;

    cout << "The Mark max value is:" << Mark::getMax(x, y) << endl;

    cout << "The Mark max value is:" << Mark::getMax(m, n) << endl;
    return 0;
}
