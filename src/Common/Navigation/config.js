//proj
import book from "routes/book";

/**
 * Configure each navigation button
 */
export default () => {

    return [
        {
            title: "HOME",
            path: book.home
        },
        {
            title: "SIGN UP",
            path: book.signUp,
        },
    ];
}