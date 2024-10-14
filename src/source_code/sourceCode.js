
export const PYTHON_CODE = String.raw`import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import quad
from scipy.optimize import fsolve

def f(x):
    return x**2

def g(x):
    return np.sin(x)

def h(x):
    return f(x) - g(x)

root1, root2 = fsolve(h, [0, 1])
area, _ = quad(lambda x: abs(f(x) - g(x)), root1, root2)

print(f"Punkty przecięcia: x1 = {root1}, x2 = {root2}")
print(f"Pole między krzywymi: {area}")
x_vals = np.linspace(root1 - 1, root2 + 1, 500)
f_vals = f(x_vals)
g_vals = g(x_vals)

plt.plot(x_vals, f_vals, label="x^2")
plt.plot(x_vals, g_vals, label="sin(x)")
plt.fill_between(x_vals, f_vals, g_vals, where=(f_vals <= g_vals), color='blue', alpha=0.5)

plt.legend()
plt.grid()
plt.title("Pole między funkcjami f(x) = x^2 i g(x) = sin(x)")
plt.xlabel("x")
plt.ylabel("y")
plt.savefig("poleMiedzyWykresami.png")
plt.show()
`

export const CPP_CODE = String.raw`#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;

double f(double x) {
    return x * x;
}

double g(double x) {
    return sin(x);
}

double h(double x) {
    return f(x) - g(x);
}

double bisect(double a, double b, double tol = 1e-6) {
    double mid;
    while ((b - a) >= tol) {
        mid = (a + b) / 2.0;
        if (h(mid) == 0.0)
            break;
        else if (h(mid) * h(a) < 0)
            b = mid;
        else
            a = mid;
    }
    return mid;
}


double rectangle_method(double a, double b, int n) {
    double width = (b - a) / n; 
    double area = 0.0;
    for (int i = 0; i < n; ++i) {
        double x = a + i * width;
        area += abs(f(x) - g(x)) * width; 
    }
    return area;
}

int main() {
    
    double root1 = 0;  
    double root2 = bisect(0, 1.0);  

   
    cout << fixed << setprecision(6);
    cout << "Punkty przecięcia: x1 = " << root1 << ", x2 = " << root2 << endl;

    int num_rectangles = 1000; 
    double area = rectangle_method(root1, root2, num_rectangles);

    cout << "Pole między funkcjami: " << area << endl;

    return 0;
}`

export const PSEUDOCODE = String.raw`FUNCTION f(x):
    RETURN x * x

FUNCTION g(x):
    RETURN sin(x)

FUNCTION h(x):
    RETURN f(x) - g(x)

FUNCTION bisect(a, b, tol):
    WHILE (b - a) >= tol:
        mid = (a + b) / 2
        IF h(mid) == 0:
            RETURN mid
        ELSE IF h(mid) * h(a) < 0:
            b = mid
        ELSE:
            a = mid
    RETURN mid

FUNCTION rectangle_method(a, b, n):
    width = (b - a) / n
    area = 0.0
    FOR i = 0 TO n-1:
        x = a + i * width
        area += ABS(f(x) - g(x)) * width
    RETURN area

FUNCTION main():
    root1 = 0
    root2 = bisect(0, 1.0)

    PRINT "Punkty przecięcia: x1 = ", root1, ", x2 = ", root2

    num_rectangles = 1000
    area = rectangle_method(root1, root2, num_rectangles)

    PRINT "Pole między funkcjami: ", area`