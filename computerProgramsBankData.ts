export interface ProgramItem {
  id: string;
  title: string;
  isIcse: boolean;
  question: string;
  algorithm: string[];
  sampleInput: string;
  sampleOutput: string;
  code: string;
  explanation: string;
}

export interface ProgramCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  programs: ProgramItem[];
}

export const COMPUTER_PROGRAMS_BANK: ProgramCategory[] = [
  {
    id: "number-programs",
    title: "Number Programs",
    icon: "Hash",
    color: "violet",
    programs: [
      {
        id: "fibonacci",
        title: "Fibonacci Series",
        isIcse: true,
        question: "Write a program in Java to print the first n terms of the Fibonacci series (0, 1, 1, 2, 3, 5, 8, 13...).",
        algorithm: [
          "Initialize variables a = 0 and b = 1 to represent the first two terms.",
          "Read the number of terms 'n' from the user.",
          "Print 'a' and 'b' as the starting elements.",
          "Loop 'i' from 3 to 'n'. In each step, calculate the next term 'c = a + b', print it, and update 'a = b' and 'b = c'."
        ],
        sampleInput: "7",
        sampleOutput: "0 1 1 2 3 5 8",
        code: `import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();
        
        int a = 0, b = 1;
        System.out.print(a + " " + b);
        
        for (int i = 3; i <= n; i++) {
            int c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
        System.out.println();
    }
}`,
        explanation: "The variables 'a' and 'b' hold the two most recent numbers of the series. Initially, a = 0 and b = 1. In the first loop iteration (i = 3), c = a + b becomes 0 + 1 = 1, which is printed. Then, 'a' shifts to b (1) and 'b' shifts to c (1). In the next iteration, c = 1 + 1 = 2, and the variables shift again. This sliding window approach generates each subsequent Fibonacci number dynamically."
      },
      {
        id: "harshad",
        title: "Harshad Number",
        isIcse: true,
        question: "Check if a number is a Harshad Number (Niven Number). A Harshad Number is an integer that is divisible by the sum of its digits (e.g., 18 is divisible by 1 + 8 = 9).",
        algorithm: [
          "Read an integer input from the user and store it in a variable 'num'.",
          "Create a temporary variable 'temp' to backup the original number.",
          "Calculate the sum of digits of 'num' by repeatedly extracting the last digit (num % 10) and updating the number (num = num / 10).",
          "Check if 'temp' is divisible by the 'sum'. If 'temp % sum == 0', it is a Harshad Number."
        ],
        sampleInput: "18",
        sampleOutput: "18 is a Harshad Number.",
        code: `import java.util.Scanner;

public class HarshadNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int temp = num;
        int sum = 0;
        
        while (num > 0) {
            int digit = num % 10;
            sum += digit;
            num /= 10;
        }
        
        if (temp % sum == 0) {
            System.out.println(temp + " is a Harshad Number.");
        } else {
            System.out.println(temp + " is not a Harshad Number.");
        }
    }
}`,
        explanation: "Let's trace with the input 18: 'temp' is set to 18. Inside the while loop, num % 10 yields 8, which is added to 'sum' (sum becomes 8), and 'num' is reduced to 1. In the next run, num % 10 yields 1, 'sum' becomes 8 + 1 = 9, and 'num' becomes 0, terminating the loop. Finally, 18 % 9 is evaluated. Since 18 is perfectly divisible by 9, the program outputs that it is a Harshad Number."
      },
      {
        id: "armstrong",
        title: "Armstrong Number",
        isIcse: true,
        question: "Write a program to check if an entered number is an Armstrong Number. (An Armstrong number is equal to the sum of cubes of its digits, e.g., 153 = 1³ + 5³ + 3³).",
        algorithm: [
          "Take an integer input 'num' and save its value in 'temp'.",
          "Extract the last digit using modulo 10 (num % 10).",
          "Find the cube of the digit (digit * digit * digit) and add it to a running 'sum'.",
          "Divide 'num' by 10 to truncate the last digit. Repeat until 'num' becomes 0, then compare 'sum' with 'temp'."
        ],
        sampleInput: "153",
        sampleOutput: "153 is an Armstrong Number.",
        code: `import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int temp = num;
        int sum = 0;
        
        while (num > 0) {
            int digit = num % 10;
            sum += (digit * digit * digit);
            num /= 10;
        }
        
        if (sum == temp) {
            System.out.println(temp + " is an Armstrong Number.");
        } else {
            System.out.println(temp + " is not an Armstrong Number.");
        }
    }
}`,
        explanation: "Entering 153 sets temp = 153. First loop pass: digit = 153 % 10 = 3; sum = 3³ = 27; num becomes 15. Second pass: digit = 15 % 10 = 5; sum = 27 + 5³ = 27 + 125 = 152; num becomes 1. Third pass: digit = 1 % 10 = 1; sum = 152 + 1³ = 153; num becomes 0. The loop finishes. Because sum (153) is equal to temp (153), it is printed as an Armstrong Number."
      },
      {
        id: "palindrome-num",
        title: "Palindrome Number",
        isIcse: true,
        question: "Check if a number is a Palindrome Number. A palindrome number reads the same forwards and backwards (e.g., 121 reversed is 121).",
        algorithm: [
          "Read the number 'num' and store it in 'temp'. Initialize 'reverse = 0'.",
          "Extract the last digit using the remainder operator (num % 10).",
          "Append this digit to 'reverse' using the formula: reverse = (reverse * 10) + digit.",
          "Truncate 'num' by dividing by 10. Repeat until 'num' is 0, then check if 'temp == reverse'."
        ],
        sampleInput: "121",
        sampleOutput: "121 is a Palindrome Number.",
        code: `import java.util.Scanner;

public class PalindromeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int temp = num;
        int reverse = 0;
        
        while (num > 0) {
            int digit = num % 10;
            reverse = (reverse * 10) + digit;
            num /= 10;
        }
        
        if (temp == reverse) {
            System.out.println(temp + " is a Palindrome Number.");
        } else {
            System.out.println(temp + " is not a Palindrome Number.");
        }
    }
}`,
        explanation: "Using input 121, temp = 121. In the first pass, digit = 1, reverse = (0 * 10) + 1 = 1, num = 12. Second pass: digit = 2, reverse = (1 * 10) + 2 = 12, num = 1. Third pass: digit = 1, reverse = (12 * 10) + 1 = 121, num = 0. The loop terminates. Since the reversed variable (121) matches the original backup (121), it is verified as a Palindrome."
      },
      {
        id: "prime",
        title: "Prime Number",
        isIcse: true,
        question: "Check if a number is a Prime Number. A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.",
        algorithm: [
          "Read an integer 'num'. If 'num' is less than or equal to 1, mark as not Prime.",
          "Run a loop 'i' from 2 up to the square root of 'num' (i * i <= num).",
          "Inside the loop, check if 'num' is divisible by 'i' using 'num % i == 0'. If true, flag as not Prime and break.",
          "After the loop, check the flag to display if the number is Prime or not."
        ],
        sampleInput: "17",
        sampleOutput: "17 is a Prime Number.",
        code: `import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        boolean isPrime = num > 1;
        
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            System.out.println(num + " is a Prime Number.");
        } else {
            System.out.println(num + " is not a Prime Number.");
        }
    }
}`,
        explanation: "Entering 17 initializes 'isPrime' to true because 17 > 1. The loop starts with i = 2 and runs while i * i <= 17. The loop values of 'i' checked are 2, 3, and 4 (since 5*5=25 > 17). 17 % 2 is 1 (non-zero), 17 % 3 is 2, and 17 % 4 is 1. Since none of these values divide 17 without remainder, the loop ends, 'isPrime' remains true, and the program confirms that 17 is Prime."
      },
      {
        id: "perfect",
        title: "Perfect Number",
        isIcse: true,
        question: "Write a program to check if an entered number is a Perfect Number. A perfect number is equal to the sum of its proper positive divisors, excluding the number itself (e.g., 6 is divisible by 1, 2, and 3; and 1 + 2 + 3 = 6).",
        algorithm: [
          "Take an integer input 'num' and initialize 'sum = 0'.",
          "Loop 'i' from 1 up to 'num / 2' to test for divisors.",
          "If 'num % i == 0', add 'i' to 'sum'.",
          "Compare the calculated 'sum' with the original 'num'. If they are equal, the number is Perfect."
        ],
        sampleInput: "28",
        sampleOutput: "28 is a Perfect Number.",
        code: `import java.util.Scanner;

public class PerfectNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int sum = 0;
        for (int i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        
        if (sum == num && num > 0) {
            System.out.println(num + " is a Perfect Number.");
        } else {
            System.out.println(num + " is not a Perfect Number.");
        }
    }
}`,
        explanation: "For the input 28, the loop runs from i = 1 to 14. Divisibility is checked at each step. The numbers that divide 28 perfectly are 1, 2, 4, 7, and 14. These are added up: 1 + 2 = 3; + 4 = 7; + 7 = 14; + 14 = 28. The total 'sum' is 28. Since this sum equals the original input, the number is verified as a Perfect Number."
      },
      {
        id: "automorphic",
        title: "Automorphic Number",
        isIcse: true,
        question: "Check if a number is an Automorphic Number. An automorphic number is a number whose square ends in the same digits as the number itself (e.g., 25² = 625, which ends in 25).",
        algorithm: [
          "Read an integer input 'num' and calculate its square: 'square = num * num'.",
          "Make a copy of 'num' as 'temp'. Set a boolean flag 'isAutomorphic = true'.",
          "Extract the last digit of both 'temp' and 'square' using % 10. If they do not match, set the flag to false and break.",
          "Divide both 'temp' and 'square' by 10. Repeat until 'temp' is 0, and then display the result."
        ],
        sampleInput: "25",
        sampleOutput: "25 is an Automorphic Number.",
        code: `import java.util.Scanner;

public class AutomorphicNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int square = num * num;
        int temp = num;
        boolean isAutomorphic = true;
        
        while (temp > 0) {
            if (temp % 10 != square % 10) {
                isAutomorphic = false;
                break;
            }
            temp /= 10;
            square /= 10;
        }
        
        if (isAutomorphic) {
            System.out.println(num + " is an Automorphic Number.");
        } else {
            System.out.println(num + " is not an Automorphic Number.");
        }
    }
}`,
        explanation: "Entering 25 computes square = 625. In the first loop pass: temp % 10 is 5, square % 10 is 5. They match. Both temp and square are divided by 10, becoming 2 and 62. In the second pass: temp % 10 is 2, square % 10 is 2. They match. Both are divided by 10, becoming 0 and 6, which ends the loop. The 'isAutomorphic' flag remains true, proving that 25 is automorphic."
      },
      {
        id: "krishnamurthy",
        title: "Krishnamurthy Number",
        isIcse: true,
        question: "Write a program to check if a number is a Krishnamurthy Number (also known as a Strong, Peterson or Special number). The sum of the factorials of its digits must equal the original number (e.g., 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145).",
        algorithm: [
          "Read an integer input 'num' and backup in 'temp'. Initialize 'sum = 0'.",
          "In a loop, extract the last digit 'digit = num % 10'.",
          "Calculate the factorial of 'digit' using a nested loop (1 * 2 * 3 ... * digit).",
          "Add the factorial value to 'sum', and update 'num = num / 10'. Repeat until 'num' is 0, and compare 'sum' with 'temp'."
        ],
        sampleInput: "145",
        sampleOutput: "145 is a Krishnamurthy Number.",
        code: `import java.util.Scanner;

public class KrishnamurthyNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        int temp = num;
        int sum = 0;
        
        while (num > 0) {
            int digit = num % 10;
            
            // Calculate factorial of the digit
            int fact = 1;
            for (int i = 1; i <= digit; i++) {
                fact *= i;
            }
            
            sum += fact;
            num /= 10;
        }
        
        if (sum == temp) {
            System.out.println(temp + " is a Krishnamurthy Number.");
        } else {
            System.out.println(temp + " is not a Krishnamurthy Number.");
        }
    }
}`,
        explanation: "With input 145, temp = 145. Loop 1: digit = 5; 5! = 120; sum becomes 120; num = 14. Loop 2: digit = 4; 4! = 24; sum becomes 120 + 24 = 144; num = 1. Loop 3: digit = 1; 1! = 1; sum becomes 144 + 1 = 145; num = 0. The sum of factorials (145) perfectly equals original 'temp' (145), marking it as a Krishnamurthy Number."
      },
      {
        id: "duck",
        title: "Duck Number",
        isIcse: true,
        question: "Check if a number is a Duck Number. A Duck number is a positive number which contains zero in it, but not at the very beginning (e.g., 302, 1004 are Duck numbers; 035 is not).",
        algorithm: [
          "Read the number input as a String 'str' to preserve any leading zeroes.",
          "Check the character at index 0. If it is '0', it cannot be a Duck number.",
          "Loop through characters from index 1 to the end of the string.",
          "If any character is '0', set a flag 'isDuck = true' and break. Output the conclusion."
        ],
        sampleInput: "102",
        sampleOutput: "102 is a Duck Number.",
        code: `import java.util.Scanner;

public class DuckNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String str = sc.next();
        
        boolean isDuck = false;
        
        // A duck number cannot start with '0'
        if (str.charAt(0) != '0') {
            for (int i = 1; i < str.length(); i++) {
                if (str.charAt(i) == '0') {
                    isDuck = true;
                    break;
                }
            }
        }
        
        if (isDuck) {
            System.out.println(str + " is a Duck Number.");
        } else {
            System.out.println(str + " is not a Duck Number.");
        }
    }
}`,
        explanation: "Entering '102' checks the first character. Since '1' != '0', we proceed. Inside the for loop starting at index 1, the character is '0'. The flag is set to true and we break. The output verifies that 102 is indeed a Duck Number. If '056' were entered, the first character is '0', failing the initial condition and making it not a Duck Number."
      },
      {
        id: "buzz",
        title: "Buzz Number",
        isIcse: true,
        question: "Check if a number is a Buzz Number. A Buzz number is a number that either ends with 7 or is divisible by 7.",
        algorithm: [
          "Read an integer 'num' from the user.",
          "Check if 'num % 10 == 7' (determines if the number ends with 7).",
          "Check if 'num % 7 == 0' (determines if the number is divisible by 7).",
          "If either condition is true, display that the number is a Buzz Number; otherwise, it is not."
        ],
        sampleInput: "27",
        sampleOutput: "27 is a Buzz Number.",
        code: `import java.util.Scanner;

public class BuzzNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        
        if (num % 10 == 7 || num % 7 == 0) {
            System.out.println(num + " is a Buzz Number.");
        } else {
            System.out.println(num + " is not a Buzz Number.");
        }
    }
}`,
        explanation: "If you enter 27, the program checks both conditions. 27 % 10 yields 7, which satisfies the first condition (ends with 7). Although 27 % 7 is 6 (not divisible by 7), the OR operator (||) requires only one condition to be true. Thus, the program correctly reports 27 as a Buzz Number."
      }
    ]
  },
  {
    id: "pattern-programs",
    title: "Pattern Programs",
    icon: "Layout",
    color: "blue",
    programs: [
      {
        id: "pattern-right-triangle",
        title: "Right Triangle Pattern",
        isIcse: true,
        question: "Write a program in Java to print a right-angled triangle pattern of asterisks (*) with n rows.",
        algorithm: [
          "Read the number of rows 'n'.",
          "Run an outer loop 'i' from 1 to 'n' for the rows.",
          "Run an inner loop 'j' from 1 to 'i' to print 'i' asterisks on the current row.",
          "Print a newline after the inner loop completes to move to the next row."
        ],
        sampleInput: "4",
        sampleOutput: "*\n**\n***\n****",
        code: `import java.util.Scanner;

public class RightTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = sc.nextInt();
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
        explanation: "The outer loop runs 'n' times (once for each row). The inner loop prints '*' as many times as the current row number 'i'. When i = 1, it prints one '*'; when i = 2, it prints two '*', and so on. This creates a staggered step pattern."
      },
      {
        id: "pattern-inverted-triangle",
        title: "Inverted Triangle Pattern",
        isIcse: true,
        question: "Write a program in Java to print an inverted right-angled triangle pattern of asterisks (*) with n rows.",
        algorithm: [
          "Read the number of rows 'n'.",
          "Run an outer loop 'i' starting from 'n' down to 1.",
          "Run an inner loop 'j' from 1 to 'i' to print 'i' asterisks on the current row.",
          "Print a newline after each row."
        ],
        sampleInput: "4",
        sampleOutput: "****\n***\n**\n*",
        code: `import java.util.Scanner;

public class InvertedTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = sc.nextInt();
        
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
        explanation: "The outer loop counts backwards from 'n' to 1. In each row, the inner loop prints 'i' stars. Thus, row 1 gets 'n' stars, row 2 gets 'n-1' stars, until the final row has just 1 star."
      },
      {
        id: "pattern-number-pyramid",
        title: "Number Pyramid Pattern",
        isIcse: true,
        question: "Write a program in Java to print a centered pyramid pattern using numbers, where row i contains numbers from 1 up to i, separated by spaces.",
        algorithm: [
          "Read the height of the pyramid 'n'.",
          "Run an outer loop 'i' from 1 to 'n'.",
          "In the first inner loop, print 'n - i' spaces to align the numbers centrally.",
          "In the second inner loop, print numbers from 1 to 'i' followed by a space.",
          "Print a newline at the end of each outer loop iteration."
        ],
        sampleInput: "3",
        sampleOutput: "  1 \n 1 2 \n1 2 3 ",
        code: `import java.util.Scanner;

public class NumberPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter height: ");
        int n = sc.nextInt();
        
        for (int i = 1; i <= n; i++) {
            // Print leading spaces for alignment
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print numbers
            for (int k = 1; k <= i; k++) {
                System.out.print(k + " ");
            }
            System.out.println();
        }
    }
}`,
        explanation: "The leading spaces decrease as the row number 'i' increases (n - i spaces). Then, numbers from 1 to 'i' are printed separated by spaces, which creates a beautifully centered triangular numbers layout."
      },
      {
        id: "pattern-floyds-triangle",
        title: "Floyd's Triangle",
        isIcse: true,
        question: "Write a program in Java to print Floyd's Triangle using natural numbers, up to n rows.",
        algorithm: [
          "Initialize a counter 'num = 1'.",
          "Run an outer loop 'i' from 1 to 'n' for rows.",
          "Run an inner loop 'j' from 1 to 'i'.",
          "In the inner loop, print 'num' followed by a space, then increment 'num' by 1.",
          "Print a newline after each row."
        ],
        sampleInput: "4",
        sampleOutput: "1 \n2 3 \n4 5 6 \n7 8 9 10 ",
        code: `import java.util.Scanner;

public class FloydsTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = sc.nextInt();
        
        int num = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
    }
}`,
        explanation: "Unlike simple triangles that print the loop indices, Floyd's triangle maintains a running count in the variable 'num' which increments in every step. This leads to a continuous sequence of natural numbers."
      }
    ]
  },
  {
    id: "array-programs",
    title: "Array Programs",
    icon: "Grid",
    color: "amber",
    programs: [
      {
        id: "array-largest",
        title: "Largest Element",
        isIcse: true,
        question: "Write a program to declare an integer array of size n, input elements, and find the largest element present in the array.",
        algorithm: [
          "Declare an array of size 'n' and populate it with user inputs.",
          "Initialize a variable 'max' with the first element of the array (arr[0]).",
          "Loop through the array starting from index 1.",
          "If the current element is greater than 'max', update 'max' to the current element. Output 'max' at the end."
        ],
        sampleInput: "5\n12 8 45 23 19",
        sampleOutput: "Largest element: 45",
        code: `import java.util.Scanner;

public class LargestElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        System.out.println("Enter array elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        
        System.out.println("Largest element: " + max);
    }
}`,
        explanation: "The program assumes the first element 'arr[0]' is the largest. It then steps through all other elements. If any element exceeds the current 'max', it updates 'max'. After checking all entries, 'max' holds the absolute maximum value."
      },
      {
        id: "array-smallest",
        title: "Smallest Element",
        isIcse: true,
        question: "Write a program in Java to find the smallest element in a single-dimensional array.",
        algorithm: [
          "Input the size and elements of the array.",
          "Initialize 'min' with the first element of the array.",
          "Iterate from index 1 to 'n-1'.",
          "If any element is smaller than 'min', update 'min'. Output 'min' at the end."
        ],
        sampleInput: "4\n15 3 24 -2",
        sampleOutput: "Smallest element: -2",
        code: `import java.util.Scanner;

public class SmallestElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        System.out.println("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int min = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        System.out.println("Smallest element: " + min);
    }
}`,
        explanation: "Similar to the largest element program, this program sets the initial 'min' to 'arr[0]' and then compares it with the rest of the values. It updates whenever an element is strictly smaller."
      },
      {
        id: "array-sum-avg",
        title: "Sum and Average",
        isIcse: true,
        question: "Calculate the sum and average of elements in an integer array of size n.",
        algorithm: [
          "Declare a variable 'sum = 0'.",
          "Loop through the input array and add each element to 'sum'.",
          "Calculate the average by casting 'sum' to a double and dividing by the array length 'n'.",
          "Display both the sum and the calculated average."
        ],
        sampleInput: "4\n10 20 30 40",
        sampleOutput: "Sum: 100, Average: 25.0",
        code: `import java.util.Scanner;

public class SumAverage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        int sum = 0;
        System.out.println("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        double avg = (double) sum / n;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + avg);
    }
}`,
        explanation: "We accumulate the sum inside the input loop itself. To get a precise double division for the average, we cast 'sum' to '(double)' before dividing by 'n'. This avoids integer division truncation."
      },
      {
        id: "array-linear-search",
        title: "Linear Search",
        isIcse: true,
        question: "Search for a specific target value in an array. If found, print its index position, else print a 'not found' message.",
        algorithm: [
          "Read array size, array elements, and the target search value.",
          "Initialize an index tracker 'index = -1'.",
          "Loop through each index 'i' of the array.",
          "If 'arr[i]' equals the target, store 'i' in 'index' and exit the loop. Print findings."
        ],
        sampleInput: "5\n4 8 15 16 23\n16",
        sampleOutput: "Element found at index: 3",
        code: `import java.util.Scanner;

public class LinearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        System.out.println("Enter elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter target element to search: ");
        int target = sc.nextInt();
        
        int foundIndex = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == target) {
                foundIndex = i;
                break;
            }
        }
        
        if (foundIndex != -1) {
            System.out.println("Element found at index: " + foundIndex);
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}`,
        explanation: "Linear search checks every single element sequentially from left to right. Once it finds an exact match, it records the index and calls 'break' to stop wasting performance."
      },
      {
        id: "array-binary-search",
        title: "Binary Search",
        isIcse: true,
        question: "Search for a key in a sorted array using the efficient Binary Search algorithm.",
        algorithm: [
          "Ensure the array is sorted. Set 'low = 0' and 'high = n - 1'.",
          "Loop while 'low <= high' and compute 'mid = (low + high) / 2'.",
          "If 'arr[mid]' equals the target, search is successful.",
          "If 'arr[mid] < target', search in the right half by setting 'low = mid + 1'. Otherwise, search in the left half by setting 'high = mid - 1'."
        ],
        sampleInput: "5\n2 5 8 12 18\n12",
        sampleOutput: "Element found at index: 3",
        code: `import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of sorted array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        
        System.out.println("Enter sorted elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.print("Enter target to search: ");
        int target = sc.nextInt();
        
        int low = 0, high = n - 1;
        int foundIndex = -1;
        
        while (low <= high) {
            int mid = (low + high) / 2;
            
            if (arr[mid] == target) {
                foundIndex = mid;
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        if (foundIndex != -1) {
            System.out.println("Element found at index: " + foundIndex);
        } else {
            System.out.println("Element not found.");
        }
    }
}`,
        explanation: "Binary search repeatedly divides the search space in half. If the element is smaller than the midpoint value, we discard the right half; if larger, we discard the left. This yields an incredible logarithmic O(log N) search speed."
      }
    ]
  },
  {
    id: "string-programs",
    title: "String Programs",
    icon: "Type",
    color: "emerald",
    programs: [
      {
        id: "string-reverse",
        title: "Reverse a String",
        isIcse: true,
        question: "Write a program in Java to read a string and print its reverse.",
        algorithm: [
          "Input a string 'str' from the user.",
          "Initialize an empty String 'reversed = \"\"'.",
          "Loop through the characters of 'str' backwards, from 'str.length() - 1' down to 0.",
          "Extract each character using '.charAt()' and concatenate it to 'reversed'."
        ],
        sampleInput: "StudySphere",
        sampleOutput: "erehpSydutS",
        code: `import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        System.out.println("Reversed string: " + reversed);
    }
}`,
        explanation: "The loop starts at the last index of the string, which is 'length() - 1'. It decrements at each step, extracting characters and building a brand new string backward from end to start."
      },
      {
        id: "string-palindrome",
        title: "Palindrome String",
        isIcse: true,
        question: "Check if an entered string is a Palindrome. (Ignore casing in comparisons, e.g., 'Madam' is a Palindrome).",
        algorithm: [
          "Read a string 'str'.",
          "Create a reversed version of the string (or use a two-pointer approach).",
          "Compare the lowercase or original casing of the reversed string with the input string.",
          "If they are equal, print that the string is a Palindrome."
        ],
        sampleInput: "Radar",
        sampleOutput: "Radar is a Palindrome.",
        code: `import java.util.Scanner;

public class PalindromeString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.next();
        
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        if (str.equalsIgnoreCase(reversed)) {
            System.out.println(str + " is a Palindrome.");
        } else {
            System.out.println(str + " is not a Palindrome.");
        }
    }
}`,
        explanation: "We reverse the string and store it. Then we compare using 'equalsIgnoreCase' so that casing (like uppercase 'R' and lowercase 'r' at the ends of 'Radar') does not falsely flag it as asymmetric."
      },
      {
        id: "string-vowels",
        title: "Count Vowels",
        isIcse: true,
        question: "Write a program to count the total number of vowels (A, E, I, O, U) in a string.",
        algorithm: [
          "Input a string and convert it to uppercase to simplify checking.",
          "Initialize a counter variable 'count = 0'.",
          "Loop through each character of the string.",
          "If a character is 'A', 'E', 'I', 'O', or 'U', increment 'count' by 1."
        ],
        sampleInput: "Board Exams",
        sampleOutput: "Vowels count: 3",
        code: `import java.util.Scanner;

public class CountVowels {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text: ");
        String str = sc.nextLine().toUpperCase();
        
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                count++;
            }
        }
        
        System.out.println("Vowels count: " + count);
    }
}`,
        explanation: "Converting the entire string to uppercase at the beginning ensures we only need to test for uppercase vowels, cutting down our comparison boilerplate inside the loop."
      },
      {
        id: "string-words",
        title: "Count Words",
        isIcse: true,
        question: "Write a program in Java to count the total number of words in an entered sentence.",
        algorithm: [
          "Read a string, trim any leading/trailing spaces.",
          "Initialize a word count 'count = 1'. (If string is empty, word count is 0).",
          "Loop through the string and find spaces followed by non-space characters.",
          "Increment 'count' each time a valid word transition space is encountered."
        ],
        sampleInput: "ICSE Computer Applications 2026",
        sampleOutput: "Word count: 4",
        code: `import java.util.Scanner;

public class CountWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter sentence: ");
        String str = sc.nextLine().trim();
        
        if (str.isEmpty()) {
            System.out.println("Word count: 0");
            return;
        }
        
        int count = 1;
        for (int i = 0; i < str.length() - 1; i++) {
            if (str.charAt(i) == ' ' && str.charAt(i + 1) != ' ') {
                count++;
            }
        }
        
        System.out.println("Word count: " + count);
    }
}`,
        explanation: "By trimming the string first, we eliminate edge cases at the edges. We then iterate and increment our word counter every time we see a single space character followed by a non-space character, which signals the start of a new word."
      },
      {
        id: "string-toggle-case",
        title: "Toggle Case",
        isIcse: true,
        question: "Toggle the case of each character in a given string (convert uppercase to lowercase and vice versa).",
        algorithm: [
          "Read a string 'str'.",
          "Create a 'StringBuilder' or loop and reconstruct a new string.",
          "For each character, check if it's uppercase using Character.isUpperCase(ch) or ASCII ranges.",
          "If uppercase, convert to lowercase; if lowercase, convert to uppercase. Output result."
        ],
        sampleInput: "JaVa 123",
        sampleOutput: "jAvA 123",
        code: `import java.util.Scanner;

public class ToggleCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter string: ");
        String str = sc.nextLine();
        
        StringBuilder toggled = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isUpperCase(ch)) {
                toggled.append(Character.toLowerCase(ch));
            } else if (Character.isLowerCase(ch)) {
                toggled.append(Character.toUpperCase(ch));
            } else {
                toggled.append(ch);
            }
        }
        
        System.out.println("Toggled: " + toggled.toString());
    }
}`,
        explanation: "The program reads each character. If it is an uppercase letter, it translates it to lowercase. If it is lowercase, it translates it to uppercase. Numeric and special characters (like spaces or '123') bypass both checks and are appended unchanged."
      }
    ]
  }
];
