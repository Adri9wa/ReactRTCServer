// vendor

//proj
import book from "routes/book";

/**
 * Configure each navigation button
 */
// eslint-disable-next-line import/no-anonymous-default-export
function configGenerator({token}) {

    return [
        {
            title: "HOME",
            path: book.home
        },
        {
            title: "SIGN UP",
            path: book.signUp,
            visible: token? false: true,
        },
        {
            title: "LOG IN",
            path: book.logIn,
            visible: token? false: true,
        },
        {
            title: "CONTROL ROOM",
            path: book.controlRoom,
            visible: token? true: false,
        },
        {
            title: "SCI FI BACKLIGHT",
            path: book.sciFiBacklight,
            visible: token? true: false,
        },
    ];
}

export default configGenerator;