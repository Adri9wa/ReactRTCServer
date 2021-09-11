//proj
import book from "routes/book";

/**
 * Configure each navigation button
 */
// eslint-disable-next-line import/no-anonymous-default-export
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
        {
            title: "LOG IN",
            path: book.logIn,
        },
    ];
}