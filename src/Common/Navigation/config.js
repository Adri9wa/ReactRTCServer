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
        {
            title: "SMART PLUG",
            path: book.smartPlug,
            visible: token? true: false,
        },
        {
            title: "DEVICES",
            path: book.devices,
            // visible: token? true: false,
            visible: true,
        },
    ];
}

export default configGenerator;