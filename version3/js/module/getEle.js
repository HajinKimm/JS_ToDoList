export const get = target => {
    if (document.querySelector(target)) {
        return document.querySelector(target);
    } else {
        throw 'ERROR - get';
    }
};
export const getAll = target => {
    if (document.querySelectorAll(target)) {
        return document.querySelectorAll(target);
    } else {
        throw 'ERROR - getAll';
    }
};