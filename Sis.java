import java.util.ArrayList;
import java.util.Scanner;

class Sis {
    public static void main(String[] args) {
        System.out.println("Hello Sis");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: " + sc.nextLine());
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(1);
        arr.add(2);
        arr.add(3);
        System.out.println("Array: " + arr);
    }
}