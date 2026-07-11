export interface MCQQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
}

export interface ShortAnswerQuestion {
  id: string;
  questionText: string;
  modelAnswer: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
}

export interface ProgrammingQuestion {
  id: string;
  title: string;
  questionText: string;
  boilerplateCode: string;
  modelAnswer: string;
  marks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
}

export interface SampleProgram {
  title: string;
  description: string;
  code: string;
  output: string;
}

export interface TopicData {
  id: string;
  title: string;
  shortSummary: string;
  detailedContent: string;
}

export const CLASSES_OBJECTS_CHAPTER_DATA = {
  title: "Classes and Objects",
  intro: `In object-oriented programming (OOP), a **Class** and an **Object** are the absolute foundational pillars. Java is a pure object-oriented language where everything is wrapped inside a class. 
  
  Think of a **Class** as a blueprint, template, or factory, and an **Object** as the actual physical entity produced by that factory. For example, a blueprint of a house drawn on paper is a Class (it occupies no physical space, has no concrete walls, but defines all characteristics). The actual physical house constructed on a plot of land is an Object (it occupies space, has real bricks, and has dynamic state).`,
  
  learningObjectives: [
    "Distinguish between real-world objects and software objects in terms of state (attributes) and behavior (actions).",
    "Understand the role of a Class as an 'Object Factory' and a blueprint for creating multiple objects.",
    "Define a class as a user-defined data type (UDT) and analyze how it differs from primitive data types.",
    "Master object creation syntax using the 'new' keyword and understand stack and heap memory allocation.",
    "Understand the flow of execution: how memory is allocated, fields are initialized, and methods are invoked.",
    "Analyze access specifiers (private, public, protected) and their role in Encapsulation.",
    "Write standard, error-free ICSE Java classes containing data members, constructors, and member methods.",
    "Format and write standard ICSE Variable Description Tables (VDT) for all program codes.",
    "Avoid common compilation and execution errors (such as referencing non-static fields from static main context)."
  ],

  topics: [
    {
      id: 'ca-topic-1',
      title: "Real-World Objects vs. Software Objects",
      shortSummary: "Understand how real-world entities are abstracted into digital representations using State and Behavior.",
      detailedContent: `### Real-World Objects
In our everyday life, we are surrounded by physical objects: cars, bicycles, mobile phones, dogs, and books. Every real-world object exhibits two key characteristics:
1. **State (Attributes):** The physical qualities or data that define the object. For a Car, the state includes its color, model, manufacturer, and current speed.
2. **Behavior (Actions):** The actions or functions that the object can perform. For a Car, the behavior includes accelerating, braking, steering, and changing gears.

### Software Objects
In Java, we abstract these real-world objects into digital **Software Objects**.
- A software object maintains its state in **Variables** (often called fields, attributes, or data members).
- A software object implements its behavior using **Methods** (often called functions or member methods).

By binding state (variables) and behavior (methods) together into a single programmatic unit, Java achieves **Encapsulation**—one of the core pillars of Object-Oriented Programming.`
    },
    {
      id: 'ca-topic-2',
      title: "Class as an Object Factory and Blueprint",
      shortSummary: "Analyze how a single class serves as a factory template to instantiate infinite unique objects.",
      detailedContent: `### The Object Factory
A class is often referred to as an **Object Factory** because it contains the specifications (the machine molds) to manufacture concrete objects. 

Just like an automobile factory uses a single mold/blueprint to manufacture thousands of individual cars (each with its own registration number, color, and owner), a programmer writes a single Java class to define the structure of objects, and then instantiates as many distinct objects from that class as needed.

### Class as a Blueprint
A class is a **logical entity**. It does not occupy any memory space when declared. It merely defines:
- What attributes the objects will have.
- What actions the objects will be able to perform.

For example, a class \`Student\` defines that every student will have a \`rollNo\`, a \`name\`, and an \`averageMarks\`. However, memory is allocated only when a specific student object, say \`rahul\` or \`ananya\`, is created using the \`new\` keyword.`
    },
    {
      id: 'ca-topic-3',
      title: "Class as a User-Defined Data Type (UDT)",
      shortSummary: "Master how a class acts as a custom data type that extends Java's type safety beyond primitive types.",
      detailedContent: `### Primitive vs. User-Defined Types
Java has 8 primitive (built-in) data types: \`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`char\`, and \`boolean\`. These types can only store a single, simple value (e.g., an integer value or a decimal number).

However, what if we want to store a complex record like a "Coordinate Point" containing an \`x\` and a \`y\` value? Or a "Date" containing \`day\`, \`month\`, and \`year\`? 

To solve this, we define a Class. Therefore, a Class is a **User-Defined Data Type (UDT)**. It composite-packages multiple primitive or reference fields together under a single custom type name.

### Examples of UDT Usage
Once we define a class, we can declare variables of that class type just like we do for primitive types:
\`\`\`java
int age;          // Primitive integer declaration
Student ananya;   // Reference variable 'ananya' of User-Defined Type 'Student'
\`\`\`

Here, \`ananya\` is a reference variable capable of pointing to an object of type \`Student\`.`
    }
  ] as TopicData[],

  syntaxExplanation: {
    title: "Class Syntax, Instantiation, and the 'new' Keyword",
    syntaxCode: `// 1. Defining a Class
class Student {
    // Data Members (Attributes)
    private int rollNo;
    private String name;
    private double marks;

    // Constructor (Initializes Object State)
    public Student(int r, String n, double m) {
        rollNo = r;
        name = n;
        marks = m;
    }

    // Member Method (Behavior)
    public void display() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
    }
}

// 2. Instantiating (Creating) an Object in another class / main method
public class Main {
    public static void main(String[] args) {
        // Syntax: ClassName objectName = new ClassName(arguments);
        Student s1 = new Student(101, "Aarav", 94.5);
        
        // Invoking behavior using the Dot (.) Operator
        s1.display(); 
    }
}`,
    explanation: `### Crucial Components of Class Syntax
1. **Class Header:** Declared using the \`class\` keyword followed by the class identifier (e.g., \`Student\`).
2. **Data Members:** Variables declared inside the class but outside any method. They represent the state of the object.
3. **Member Methods:** Functions that operate on the data members. They define what the object can do.
4. **Access Specifiers:**
   - \`private\`: Fields are only accessible within the same class. This enforces **Encapsulation**.
   - \`public\`: Methods and fields are accessible from any other class in the application.

### The Object Instantiation Process
To create an object from a class, we use a three-part statement:
\`\`\`java
Student s1 = new Student(101, "Aarav", 94.5);
\`\`\`
- **Declaration (\`Student s1\`):** Declares a reference variable \`s1\` of type \`Student\`. Currently, it holds no real object (it contains \`null\`).
- **Instantiation (\`new\`):** The \`new\` keyword is an operator that dynamically allocates memory on the **Heap** for a brand-new object of the specified class.
- **Initialization (\`Student(...)\`):** Invokes the matching **Constructor** of the class to initialize the newly allocated memory fields with specific starting values.`
  },

  flowOfExecution: {
    title: "JVM Memory Flow & Execution Sequence",
    steps: [
      {
        step: "1. Class Loading",
        desc: "When a Java program starts, the JVM's ClassLoader loads the bytecode (.class file). Static fields and static methods (including public static void main) are registered in the Method Area."
      },
      {
        step: "2. Stack Frame Allocation",
        desc: "As the main() method begins executing, a stack frame is allocated on the JVM Thread Stack for local variables. This holds reference variables like 's1'."
      },
      {
        step: "3. 'new' Operator Invocation",
        desc: "The JVM executes 'new Student(...)'. The 'new' operator instantly requests memory from the JVM Garbage-Collected Heap to store the instance variables: rollNo (int, 4 bytes), name (String reference, 8 bytes), and marks (double, 8 bytes)."
      },
      {
        step: "4. Constructor Execution",
        desc: "The JVM jumps to the constructor body, passing values (101, 'Aarav', 94.5). The instance fields in the Heap are filled with these specific values. The default zero values are overwritten."
      },
      {
        step: "5. Reference Assignment",
        desc: "The 'new' operator returns the exact 64-bit memory address (hash reference) of the newly created object in the Heap. This address is stored inside the local variable 's1' in the stack frame."
      },
      {
        step: "6. Method Calling (Dot Operator)",
        desc: "When s1.display() is called, the JVM looks up the address stored in 's1', navigates to that specific heap object memory location, and executes the display() logic using the object's unique state values."
      }
    ]
  },

  commonErrors: [
    {
      error: "non-static variable cannot be referenced from a static context",
      cause: "Attempting to access instance variables or non-static methods directly inside the static main() method without creating an object first.",
      fix: "Always instantiate an object using the 'new' keyword, and then access the fields/methods using the object name followed by the dot operator (e.g., obj.display() instead of display())."
    },
    {
      error: "NullPointerException (NPE)",
      cause: "Declaring a reference variable of a class but attempting to call methods on it before initializing it with 'new'.",
      fix: "Ensure that the reference variable is instantiated with 'new ClassName()' before calling any member methods."
    },
    {
      error: "Forgetting the 'new' Keyword in Object Creation",
      cause: "Writing code like: Student s1 = Student(101, 'Rohan', 85.0); which is treated by the compiler as a regular function call instead of object instantiation.",
      fix: "Always include the 'new' operator keyword before invoking the constructor."
    },
    {
      error: "Illegal Access Error (Private Member Access)",
      cause: "Attempting to read or modify a private data member of a class directly from another external class (e.g., s1.rollNo = 105; in the Main class).",
      fix: "Always use public getter and setter methods (Accessor and Mutator methods) to modify or access private variables securely, upholding the principle of encapsulation."
    }
  ],

  icseBoardTips: [
    {
      title: "Write Variable Description Tables (VDT) - 100% Mandatory",
      detail: "In the ICSE Section B programming questions (15 marks each), you MUST write a Variable Description Table at the end of every program. It must detail every variable, its data type, and its purpose. Forgetting this can cost you 2 valuable marks per question."
    },
    {
      title: "Master the Difference Between Class and Object",
      detail: "This is a highly repeated 2-mark theory question. Define: 'A Class is a logical blueprint/template that defines the state and behavior of an object, whereas an Object is a physical, concrete instance of a class that occupies memory and has unique values.'"
    },
    {
      title: "Explicitly Memorize the 'new' Keyword Function",
      detail: "ICSE frequently asks: 'State the purpose of the new operator.' Your answer should be: 'The new operator in Java dynamically allocates memory on the Heap for a new object and calls the constructor to initialize its data members.'"
    },
    {
      title: "Always Use 'private' for Data Members and 'public' for Methods",
      detail: "To satisfy ICSE examiners looking for proper OOP standards, always declare your fields as 'private' (Encapsulation) and your getter/setter/worker methods as 'public'."
    }
  ],

  samplePrograms: [
    {
      title: "Sample Program 1: The 'Employee' Class with Gross Salary Calculation",
      description: "Design a class Employee to calculate the gross salary of employees. State characteristics: Name, Basic Salary. Implement constructor, compute allowances (HRA = 10% of basic, DA = 30% of basic), and print payslip.",
      code: `import java.util.Scanner;

class Employee {
    // Data Members
    private String name;
    private double basicSalary;
    private double grossSalary;

    // Constructor
    public Employee(String n, double bs) {
        name = n;
        basicSalary = bs;
    }

    // Method to calculate allowances and gross salary
    public void calculate() {
        double hra = 0.10 * basicSalary; // House Rent Allowance
        double da = 0.30 * basicSalary;  // Dearness Allowance
        grossSalary = basicSalary + hra + da;
    }

    // Method to display payroll details
    public void display() {
        System.out.println("----- EMPLOYEE PAYSLIP -----");
        System.out.println("Employee Name : " + name);
        System.out.println("Basic Salary  : Rs. " + basicSalary);
        System.out.println("Gross Salary  : Rs. " + grossSalary);
    }

    // Main Method
    public static void main(String[] args) {
        Employee emp = new Employee("Rajesh Kumar", 50000.0);
        emp.calculate();
        emp.display();
    }
}`,
      output: `----- EMPLOYEE PAYSLIP -----
Employee Name : Rajesh Kumar
Basic Salary  : Rs. 50000.0
Gross Salary  : Rs. 70000.0`
    },
    {
      title: "Sample Program 2: The 'Student' Class with Mark Averages & Grades",
      description: "Define a class named Student to evaluate average marks and pass/fail state of students. Attributes: rollNo, name, marksInMaths, marksInScience. Implement checkGrade() returning 'Excellent' if avg >= 90, 'Good' if >= 75, else 'Average'.",
      code: `class Student {
    private int rollNo;
    private String name;
    private double maths;
    private double science;

    // Parameterized Constructor
    public Student(int r, String n, double m, double s) {
        rollNo = r;
        name = n;
        maths = m;
        science = s;
    }

    // Helper method to compute average
    public double getAverage() {
        return (maths + science) / 2.0;
    }

    // Method to evaluate Grade performance
    public void displayReport() {
        double avg = getAverage();
        String grade;
        if (avg >= 90) {
            grade = "Excellent";
        } else if (avg >= 75) {
            grade = "Good";
        } else {
            grade = "Average";
        }

        System.out.println("========= STUDENT REPORT =========");
        System.out.println("Roll Number     : " + rollNo);
        System.out.println("Student Name    : " + name);
        System.out.println("Maths Score     : " + maths);
        System.out.println("Science Score   : " + science);
        System.out.println("Average Marks   : " + avg + "%");
        System.out.println("Performance     : " + grade);
    }

    public static void main(String[] args) {
        Student stud = new Student(12, "Neha Sharma", 92.5, 88.0);
        stud.displayReport();
    }
}`,
      output: `========= STUDENT REPORT =========
Roll Number     : 12
Student Name    : Neha Sharma
Maths Score     : 92.5
Science Score   : 88.0
Average Marks   : 90.25%
Performance     : Excellent`
    }
  ] as SampleProgram[],

  practiceQuestions: {
    mcqs: [
      {
        id: 'ca3-mcq-1',
        questionText: "Which of the following serves as a blueprint or template to instantiate objects in Java?",
        options: ["Method", "Variable", "Class", "Constructor"],
        correctAnswer: "Class",
        explanation: "A Class is a logical template or blueprint that defines the structure (fields) and behavior (methods) of objects created from it.",
        marks: 1,
        difficulty: "Easy",
        topic: "Class and Object Concept"
      },
      {
        id: 'ca3-mcq-2',
        questionText: "Which operator is dynamically used in Java to allocate memory on the heap for a new object?",
        options: ["dot (.)", "new", "malloc", "class"],
        correctAnswer: "new",
        explanation: "The 'new' operator is used in Java to dynamically allocate memory on the Heap for a new object instance.",
        marks: 1,
        difficulty: "Easy",
        topic: "Object Instantiation"
      },
      {
        id: 'ca3-mcq-3',
        questionText: "What memory block in the JVM is responsible for storing active objects and their instance variables?",
        options: ["Call Stack", "Heap Memory", "Method Area", "Static Stack"],
        correctAnswer: "Heap Memory",
        explanation: "All objects created in Java using the 'new' operator are dynamically allocated memory on the garbage-collected Heap.",
        marks: 1,
        difficulty: "Medium",
        topic: "JVM Memory Management"
      },
      {
        id: 'ca3-mcq-4',
        questionText: "A class is referred to as a User-Defined Data Type (UDT) because:",
        options: [
          "It can only store primitive integers and floats",
          "It is pre-built into the Java Development Kit (JDK)",
          "A programmer defines its constituent fields and methods to declare custom variables",
          "It does not require any memory allocation"
        ],
        correctAnswer: "A programmer defines its constituent fields and methods to declare custom variables",
        explanation: "A class is a UDT because a programmer custom-creates it, specifying what attributes and methods it will contain, allowing variables of this class type to be declared.",
        marks: 1,
        difficulty: "Medium",
        topic: "User-Defined Data Types"
      },
      {
        id: 'ca3-mcq-5',
        questionText: "What error is triggered if we try to call an instance method on a class reference variable that currently holds 'null'?",
        options: ["StackOverflowError", "NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException"],
        correctAnswer: "NullPointerException",
        explanation: "Calling any method or accessing any field of an uninstantiated object (reference variable containing 'null') triggers a NullPointerException at runtime.",
        marks: 1,
        difficulty: "Medium",
        topic: "Common Errors"
      },
      {
        id: 'ca3-mcq-6',
        questionText: "Which access specifier must be applied to class attributes to hide them from direct outside manipulation, fulfilling the rule of Encapsulation?",
        options: ["public", "protected", "private", "default"],
        correctAnswer: "private",
        explanation: "Declaring data members as 'private' prevents direct access from other classes, enforcing the data-hiding aspect of Encapsulation.",
        marks: 1,
        difficulty: "Easy",
        topic: "Encapsulation & Access Specifiers"
      },
      {
        id: 'ca3-mcq-7',
        questionText: "What is the relationship between a Class and an Object?",
        options: [
          "An Object is a blueprint for a Class",
          "A Class is a physical instance of an Object",
          "An Object is a concrete instance of a Class",
          "They are identical concepts with no differences"
        ],
        correctAnswer: "An Object is a concrete instance of a Class",
        explanation: "A Class is a template/blueprint (logical) whereas an Object is a physical concrete instantiation of that class.",
        marks: 1,
        difficulty: "Easy",
        topic: "Class vs Object"
      },
      {
        id: 'ca3-mcq-8',
        questionText: "What JVM memory structure holds local variables and references pointing to objects during method execution?",
        options: ["The Heap", "The Stack", "The Method Area", "Register Registers"],
        correctAnswer: "The Stack",
        explanation: "The JVM Stack stores local variables and reference variables that point to object locations inside the Heap.",
        marks: 1,
        difficulty: "Hard",
        topic: "JVM Memory Management"
      },
      {
        id: 'ca3-mcq-9',
        questionText: "Which statement will successfully instantiate an object of class 'Book'?",
        options: [
          "Book b = new Book();",
          "b = Book();",
          "new Book b = Book();",
          "class Book b = new class();"
        ],
        correctAnswer: "Book b = new Book();",
        explanation: "The correct syntax is: ClassName objectName = new ClassName(); where Book is the class, b is the reference name, new allocates heap, and Book() is the constructor.",
        marks: 1,
        difficulty: "Easy",
        topic: "Object Instantiation"
      },
      {
        id: 'ca3-mcq-10',
        questionText: "Which component of a class shares the exact same name as the class and is implicitly invoked when creating a new object?",
        options: ["Static Method", "Data Member", "Constructor", "Destructor"],
        correctAnswer: "Constructor",
        explanation: "A constructor is a special member function of a class that shares the same name as the class and is used to initialize class fields upon instantiation.",
        marks: 1,
        difficulty: "Medium",
        topic: "Constructor Basics"
      }
    ] as MCQQuestion[],

    shortAnswers: [
      {
        id: 'ca3-sa-1',
        questionText: "Explain the concept of 'Class as an Object Factory'.",
        modelAnswer: "A Class is called an 'Object Factory' because it acts as a blueprint or template from which multiple individual objects are created. Just like a factory uses a single mold to create multiple identical products with different serialization, a class holds the field structure and method declarations used to manufacture multiple unique object instances, each with their own memory state.",
        marks: 2,
        difficulty: "Medium",
        topic: "Class as an Object Factory"
      },
      {
        id: 'ca3-sa-2',
        questionText: "Why is a Class referred to as a User-Defined Data Type (UDT)?",
        modelAnswer: "A class is called a user-defined data type because it allows the programmer to define a custom type that does not exist natively in Java. It compositely packages multiple primitive and non-primitive variables (attributes) and methods together. Once defined, references can be declared of this new class type (e.g. Student rahul;) just like standard variables of type int or double.",
        marks: 2,
        difficulty: "Medium",
        topic: "User-Defined Data Types"
      },
      {
        id: 'ca3-sa-3',
        questionText: "State the difference between a primitive data type and a composite data type.",
        modelAnswer: "A primitive data type is built into the Java language (like int, double, char), holds a single simple value, and is stored directly on the stack. A composite (user-defined) data type is created by the programmer (like a Class), can contain multiple members of different data types (both primitives and other objects), and is referenced via heap addresses.",
        marks: 2,
        difficulty: "Medium",
        topic: "Data Types Differentiation"
      },
      {
        id: 'ca3-sa-4',
        questionText: "State the purpose and function of the 'new' operator in Java.",
        modelAnswer: "The 'new' operator is used to dynamically allocate memory space on the garbage-collected JVM Heap for a new instance/object of a class. Once the heap space is allocated, it returns the reference address to be stored inside the stack variable, and invokes the constructor to initialize the instance variables.",
        marks: 2,
        difficulty: "Easy",
        topic: "Object Instantiation"
      },
      {
        id: 'ca3-sa-5',
        questionText: "What is an 'instance variable'? How does its lifecycle differ from a local variable?",
        modelAnswer: "An instance variable is declared inside a class but outside any method, representing the state of an object. Each object gets its own copy, and its lifecycle is bound to the object in the Heap. A local variable is declared inside a method or block, only exists during the execution of that specific method frame on the Stack, and is destroyed as soon as the method terminates.",
        marks: 3,
        difficulty: "Hard",
        topic: "Variables and Lifecycles"
      },
      {
        id: 'ca3-sa-6',
        questionText: "How does Encapsulation relate to the definition of data members and member methods in a class?",
        modelAnswer: "Encapsulation is the wrapping of data members (state) and member methods (behavior) together into a single unit (the class). It safeguards data from direct external access by declaring data members as private (data hiding) and providing public member methods (getters/setters) to interact with that data safely.",
        marks: 2,
        difficulty: "Medium",
        topic: "Encapsulation"
      },
      {
        id: 'ca3-sa-7',
        questionText: "What is the function of a dot (.) operator in Java? Provide an example.",
        modelAnswer: "The dot (.) operator in Java is the member-access operator. It is used to access the instance variables or invoke the member methods of an object. For example, in 'student1.display();', the dot operator tells the JVM to navigate to the object referenced by 'student1' and execute its public 'display()' method.",
        marks: 2,
        difficulty: "Easy",
        topic: "Member Access Operator"
      },
      {
        id: 'ca3-sa-8',
        questionText: "What is the purpose of the 'Variable Description Table' in an ICSE Class 10 programming submission?",
        modelAnswer: "The Variable Description Table (VDT) is a formal documentation requirement in ICSE exams. It lists every variable declared in a program, specifies its exact data type, and outlines its specific purpose in the program. This demonstrates class structure, type compliance, and algorithmic documentation to the examiner.",
        marks: 2,
        difficulty: "Easy",
        topic: "ICSE Board Standards"
      },
      {
        id: 'ca3-sa-9',
        questionText: "Explain how 'non-static variable referenced from static context' compilation error occurs and how to fix it.",
        modelAnswer: "This error occurs when you attempt to directly access a non-static instance variable or non-static member method inside the static main() method without a qualifying object. Because static methods exist independently of class objects, they cannot recognize object-specific variables. To fix this, you must first instantiate an object of the class inside main() and then call the method/attribute on that object.",
        marks: 3,
        difficulty: "Hard",
        topic: "Common Errors"
      },
      {
        id: 'ca3-sa-10',
        questionText: "Define a constructor and describe its features compared to a regular method.",
        modelAnswer: "A constructor is a special member function of a class used to initialize the state of a newly created object. Unlike regular methods, a constructor must share the exact same name as the class itself, has no explicit return type (not even void), and is called automatically/implicitly by the 'new' operator during object creation.",
        marks: 3,
        difficulty: "Medium",
        topic: "Constructors vs Methods"
      }
    ] as ShortAnswerQuestion[],

    programming: [
      {
        id: 'ca3-prog-1',
        title: "1. The 'Book' Class Design",
        questionText: "Define a class named Book with the following attributes:\n- Book Title (bookTitle - String)\n- Author Name (author - String)\n- Price (price - double)\n\nImplement:\n- A parameterized constructor to initialize all three fields.\n- A public method display() to print these values.\n- A main() method to create a Book object with title 'Java ICSE Prep', author 'K. Sen', price '499.50', and invoke display().",
        boilerplateCode: `class Book {
    // 1. Declare private instance variables
    
    // 2. Define the parameterized constructor
    
    // 3. Define the display method
    
    public static void main(String[] args) {
        // 4. Instantiate the object and call display()
        
    }
}`,
        modelAnswer: `class Book {
    private String bookTitle;
    private String author;
    private double price;

    public Book(String title, String auth, double pr) {
        bookTitle = title;
        author = auth;
        price = pr;
    }

    public void display() {
        System.out.println("Book Title: " + bookTitle);
        System.out.println("Author: " + author);
        System.out.println("Price: Rs. " + price);
    }

    public static void main(String[] args) {
        Book myBook = new Book("Java ICSE Prep", "K. Sen", 499.50);
        myBook.display();
    }
}`,
        marks: 5,
        difficulty: "Easy",
        topic: "Class Structure & Constructor"
      },
      {
        id: 'ca3-prog-2',
        title: "2. The 'Rectangle' Class with Area & Perimeter",
        questionText: "Create a class Rectangle with two double fields: length and width. Implement public methods:\n- void setDimensions(double l, double w) to assign the dimension fields.\n- double getArea() to return length * width.\n- double getPerimeter() to return 2 * (length + width).\n- Write a main() method to instantiate Rectangle, set its dimensions to 12.5 and 5.0, and print both Area and Perimeter.",
        boilerplateCode: `class Rectangle {
    private double length;
    private double width;

    // Define setDimensions, getArea, and getPerimeter methods
    
    public static void main(String[] args) {
        // Instantiate, set dimensions, and print calculations
    }
}`,
        modelAnswer: `class Rectangle {
    private double length;
    private double width;

    public void setDimensions(double l, double w) {
        length = l;
        width = w;
    }

    public double getArea() {
        return length * width;
    }

    public double getPerimeter() {
        return 2 * (length + width);
    }

    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.setDimensions(12.5, 5.0);
        System.out.println("Area: " + rect.getArea());
        System.out.println("Perimeter: " + rect.getPerimeter());
    }
}`,
        marks: 5,
        difficulty: "Easy",
        topic: "Setters & Calculation Methods"
      },
      {
        id: 'ca3-prog-3',
        title: "3. 'Student' Marks Evaluator",
        questionText: "Design a class Student with attributes:\n- name (String)\n- marks1 (double)\n- marks2 (double)\n\nImplement:\n- A constructor to initialize these three attributes.\n- A method double getAverage() that calculates and returns the average marks.\n- A method void displayGrade() that prints 'Pass' if average >= 40, else prints 'Fail'.\n- Implement a main method to create a student named 'Rahul' with scores 45.5 and 32.0, and display their report.",
        boilerplateCode: `class Student {
    private String name;
    private double marks1;
    private double marks2;

    // Write your constructor and methods
    
    public static void main(String[] args) {
        // Test Student Rahul
    }
}`,
        modelAnswer: `class Student {
    private String name;
    private double marks1;
    private double marks2;

    public Student(String n, double m1, double m2) {
        name = n;
        marks1 = m1;
        marks2 = m2;
    }

    public double getAverage() {
        return (marks1 + marks2) / 2.0;
    }

    public void displayGrade() {
        double avg = getAverage();
        System.out.println("Student Name: " + name);
        System.out.println("Average Marks: " + avg);
        if (avg >= 40) {
            System.out.println("Grade Decision: Pass");
        } else {
            System.out.println("Grade Decision: Fail");
        }
    }

    public static void main(String[] args) {
        Student st = new Student("Rahul", 45.5, 32.0);
        st.displayGrade();
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "Conditional Evaluation in OOP"
      },
      {
        id: 'ca3-prog-4',
        title: "4. 'BankAccount' Simulation",
        questionText: "Create a class BankAccount that tracks simple accounts. Attributes:\n- String depositorName\n- double balance\n\nImplement:\n- A constructor to initialize depositorName and balance.\n- A method void deposit(double amount) to add to the balance and print 'Deposited: Rs. [amount]'.\n- A method void withdraw(double amount) to subtract from balance ONLY if balance >= amount. If insufficient, print 'Insufficient Balance'.\n- Implement main method to instantiate an account with 'Amit' having Rs. 5000, deposit Rs. 1500, withdraw Rs. 2000, and print final balance.",
        boilerplateCode: `class BankAccount {
    private String depositorName;
    private double balance;

    // Define constructor, deposit, and withdraw
    
    public static void main(String[] args) {
        // Perform transactions and verify
    }
}`,
        modelAnswer: `class BankAccount {
    private String depositorName;
    private double balance;

    public BankAccount(String name, double bal) {
        depositorName = name;
        balance = bal;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: Rs. " + amount);
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: Rs. " + amount);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    public void display() {
        System.out.println("Account Holder: " + depositorName);
        System.out.println("Final Balance: Rs. " + balance);
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Amit", 5000.0);
        acc.deposit(1500.0);
        acc.withdraw(2000.0);
        acc.display();
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "State Modification"
      },
      {
        id: 'ca3-prog-5',
        title: "5. 'Employee' Net Salary Calculator",
        questionText: "Design a class Employee with components:\n- employeeId (int)\n- name (String)\n- basicSalary (double)\n\nImplement:\n- Constructor to initialize fields.\n- A method double computeNetSalary() that calculates the net salary, where:\n  HRA = 15% of basic salary\n  DA = 25% of basic salary\n  Net Salary = Basic Salary + HRA + DA.\n- A display() method to print Employee ID, Name, Basic, and Net.\n- Test in main with Employee (Id: 201, Name: 'Reena', Basic: 40000.0).",
        boilerplateCode: `class Employee {
    private int employeeId;
    private String name;
    private double basicSalary;

    // Implement constructor and computations
    
    public static void main(String[] args) {
        // Test Employee payroll
    }
}`,
        modelAnswer: `class Employee {
    private int employeeId;
    private String name;
    private double basicSalary;

    public Employee(int id, String n, double bs) {
        employeeId = id;
        name = n;
        basicSalary = bs;
    }

    public double computeNetSalary() {
        double hra = 0.15 * basicSalary;
        double da = 0.25 * basicSalary;
        return basicSalary + hra + da;
    }

    public void display() {
        System.out.println("Employee ID : " + employeeId);
        System.out.println("Name        : " + name);
        System.out.println("Basic Salary: Rs. " + basicSalary);
        System.out.println("Net Salary  : Rs. " + computeNetSalary());
    }

    public static void main(String[] args) {
        Employee emp = new Employee(201, "Reena", 40000.0);
        emp.display();
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "Payroll Calculations"
      },
      {
        id: 'ca3-prog-6',
        title: "6. 'Laptop' Purchase Billing",
        questionText: "Design a class Laptop with attributes String name, double price, and double netAmount. Implement:\n- Constructor to initialize name and price.\n- Method computeDiscount() to apply the following rule:\n  If price <= 25000: discount is 5%\n  If price > 25000 and <= 50000: discount is 10%\n  If price > 50000: discount is 15%\n  Calculate netAmount = price - discount.\n- Method printBill() to display Laptop brand, price, discount, and final net amount.\n- Test in main with Laptop('Dell Inspiron', 45000.0).",
        boilerplateCode: `class Laptop {
    private String name;
    private double price;
    private double netAmount;

    // Write constructor, computeDiscount and printBill
    
    public static void main(String[] args) {
        // Instantiate and print discount statement
    }
}`,
        modelAnswer: `class Laptop {
    private String name;
    private double price;
    private double netAmount;

    public Laptop(String n, double p) {
        name = n;
        price = p;
    }

    public void computeDiscount() {
        double discountPercent;
        if (price <= 25000) {
            discountPercent = 5.0;
        } else if (price <= 50000) {
            discountPercent = 10.0;
        } else {
            discountPercent = 15.0;
        }
        double discountAmt = (discountPercent / 100.0) * price;
        netAmount = price - discountAmt;
    }

    public void printBill() {
        computeDiscount();
        System.out.println("----- BILL RECEIPT -----");
        System.out.println("Laptop Model: " + name);
        System.out.println("Original Price: Rs. " + price);
        System.out.println("Net Billing Amount: Rs. " + netAmount);
    }

    public static void main(String[] args) {
        Laptop lap = new Laptop("Dell Inspiron", 45000.0);
        lap.printBill();
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "Discount Strategy Pattern"
      },
      {
        id: 'ca3-prog-7',
        title: "7. 'Triangle' Validity & Classifier",
        questionText: "Create a class Triangle with attributes: side1, side2, and side3 (double). Implement:\n- Constructor to initialize the three sides.\n- Method boolean checkValidity() returning true if side1+side2 > side3, side2+side3 > side1, and side1+side3 > side2, else false.\n- Method void printClassifier() which, if valid, prints 'Equilateral' (all 3 sides equal), 'Isosceles' (any 2 sides equal), or 'Scalene' (all sides different). If invalid, print 'Not a Triangle'.\n- Test in main with a Triangle of sides 5.0, 5.0, and 8.0.",
        boilerplateCode: `class Triangle {
    private double side1;
    private double side2;
    private double side3;

    // Write constructor, validity checks, and classification
    
    public static void main(String[] args) {
        // Verify sides 5, 5, 8
    }
}`,
        modelAnswer: `class Triangle {
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double s1, double s2, double s3) {
        side1 = s1;
        side2 = s2;
        side3 = s3;
    }

    public boolean checkValidity() {
        return (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2);
    }

    public void printClassifier() {
        if (!checkValidity()) {
            System.out.println("Not a Triangle");
            return;
        }

        if (side1 == side2 && side2 == side3) {
            System.out.println("Triangle Type: Equilateral");
        } else if (side1 == side2 || side2 == side3 || side1 == side3) {
            System.out.println("Triangle Type: Isosceles");
        } else {
            System.out.println("Triangle Type: Scalene");
        }
    }

    public static void main(String[] args) {
        Triangle tri = new Triangle(5.0, 5.0, 8.0);
        tri.printClassifier();
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "Geometry Classifier"
      },
      {
        id: 'ca3-prog-8',
        title: "8. 'CarRental' Charges Billing",
        questionText: "Design a class CarRental with data members:\n- carId (int)\n- carType (String)\n- rentPerDay (double)\n\nImplement:\n- Constructor.\n- Method double calculateCharges(int days) that returns the total rent. If the final rent exceeds Rs. 10000, apply a flat 10% discount to the total charges.\n- Method displayCharges(int days) to output car details, booking days, original rent, and final billing amount.\n- Test in main for ID 909, type 'SUV', Rent Rs. 2500 per day, rented for 5 days.",
        boilerplateCode: `class CarRental {
    private int carId;
    private String carType;
    private double rentPerDay;

    // Write constructor, calculateCharges, displayCharges
    
    public static void main(String[] args) {
        // Test SUV 2500/day for 5 days
    }
}`,
        modelAnswer: `class CarRental {
    private int carId;
    private String carType;
    private double rentPerDay;

    public CarRental(int id, String type, double rpd) {
        carId = id;
        carType = type;
        rentPerDay = rpd;
    }

    public double calculateCharges(int days) {
        double rawRent = days * rentPerDay;
        if (rawRent > 10000.0) {
            return rawRent - (0.10 * rawRent);
        }
        return rawRent;
    }

    public void displayCharges(int days) {
        double finalBill = calculateCharges(days);
        double originalBill = days * rentPerDay;
        System.out.println("Car ID       : " + carId);
        System.out.println("Car Type     : " + carType);
        System.out.println("Days Rented  : " + days);
        System.out.println("Original Rent: Rs. " + originalBill);
        System.out.println("Final Bill   : Rs. " + finalBill);
    }

    public static void main(String[] args) {
        CarRental rental = new CarRental(909, "SUV", 2500.0);
        rental.displayCharges(5);
    }
}`,
        marks: 5,
        difficulty: "Hard",
        topic: "Conditional Calculations & Operators"
      },
      {
        id: 'ca3-prog-9',
        title: "9. 'ElectricityBill' Invoicing",
        questionText: "Create a class ElectricityBill with instance attributes String consumerName and int unitsConsumed. Implement:\n- Constructor to initialize name and units.\n- Method double computeBill() to calculate charges:\n  First 100 units: Rs. 4.0 / unit\n  Next 200 units (101-300): Rs. 5.0 / unit\n  Above 300 units: Rs. 6.0 / unit\n  Apply an additional surcharge of 2.5% of the total cost if unitsConsumed is greater than 400.\n- Method void printBill() to display consumer details, units, and final invoice bill.\n- Test in main with Customer 'Sunita Das' consuming 450 units.",
        boilerplateCode: `class ElectricityBill {
    private String consumerName;
    private int unitsConsumed;

    // Define constructor, computeBill and printBill
    
    public static void main(String[] args) {
        // Calculate bill for 450 units
    }
}`,
        modelAnswer: `class ElectricityBill {
    private String consumerName;
    private int unitsConsumed;

    public ElectricityBill(String name, int units) {
        consumerName = name;
        unitsConsumed = units;
    }

    public double computeBill() {
        double cost = 0.0;
        int remainingUnits = unitsConsumed;

        if (remainingUnits <= 100) {
            cost += remainingUnits * 4.0;
        } else {
            cost += 100 * 4.0;
            remainingUnits -= 100;

            if (remainingUnits <= 200) {
                cost += remainingUnits * 5.0;
            } else {
                cost += 200 * 5.0;
                remainingUnits -= 200;
                cost += remainingUnits * 6.0;
            }
        }

        if (unitsConsumed > 400) {
            cost += 0.025 * cost; // Add 2.5% surcharge
        }

        return cost;
    }

    public void printBill() {
        System.out.println("Consumer Name : " + consumerName);
        System.out.println("Units Consumed: " + unitsConsumed);
        System.out.println("Total Bill    : Rs. " + computeBill());
    }

    public static void main(String[] args) {
        ElectricityBill bill = new ElectricityBill("Sunita Das", 450);
        bill.printBill();
    }
}`,
        marks: 5,
        difficulty: "Hard",
        topic: "Slab-based Conditional Logic"
      },
      {
        id: 'ca3-prog-10',
        title: "10. 'Box' Volume & Weight Calculator",
        questionText: "Define a class named Box with double fields: length, breadth, and height. Implement:\n- Constructor to initialize length, breadth, and height.\n- Method double getVolume() to compute and return length * breadth * height.\n- Write a main method inside Box that instantiates a Box of dimensions 10.0 x 5.0 x 4.0, computes its volume, and prints the result.",
        boilerplateCode: `class Box {
    private double length;
    private double breadth;
    private double height;

    // Write your constructor and getVolume method
    
    public static void main(String[] args) {
        // Instantiate and print volume output
    }
}`,
        modelAnswer: `class Box {
    private double length;
    private double breadth;
    private double height;

    public Box(double l, double b, double h) {
        length = l;
        breadth = b;
        height = h;
    }

    public double getVolume() {
        return length * breadth * height;
    }

    public static void main(String[] args) {
        Box b = new Box(10.0, 5.0, 4.0);
        System.out.println("Box Volume: " + b.getVolume() + " cubic units");
    }
}`,
        marks: 5,
        difficulty: "Medium",
        topic: "Volume Logic Model"
      }
    ] as ProgrammingQuestion[]
  },

  summary: [
    "**Foundational Pillars:** Class and Object are the fundamental building blocks of Object-Oriented Programming (OOP) in Java.",
    "**Class Definition:** A class is a logical blueprint, schema, or 'object factory'. It occupies no memory space but defines state (variables) and behavior (methods) of its objects.",
    "**Object Definition:** An object is a concrete, physical instance of a class that is allocated memory on the garbage-collected JVM Heap when created.",
    "**The 'new' Keyword:** Used to dynamically allocate memory on the heap and invoke the constructor to instantiate the object's instance fields.",
    "**User-Defined Type (UDT):** A class acts as a customized, composite data type, grouping various primitives and non-primitive references under a custom name.",
    "**JVM Memory Separation:** Local reference variables are allocated memory in stack frames on the Thread Stack, whereas the actual instance data resides in Heap Memory.",
    "**Encapsulation Principle:** Fields are usually kept private to prevent outside modification, exposing public methods (getters and setters) to interact with them safely.",
    "**Accessing Members:** The dot (.) operator is used to target an object's address inside the Heap and call its properties or trigger member method executions.",
    "**Static Context Guard:** Static methods (like public static void main) cannot directly interact with non-static variables or non-static methods unless an explicit object is instantiated."
  ]
};
