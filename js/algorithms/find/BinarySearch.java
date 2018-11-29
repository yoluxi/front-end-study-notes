import java.util.Arrays;
public class BinarySearch {
    public static int rank(int k, int[] a) {
        int lo = 0;
        int hi = a.length - 1;
        while(lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if ( k < a[mid] ) {
                hi = mid - 1;
            } else if ( k > a[mid]) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 8};
        System.out.print(rank(3, a));
    }
}