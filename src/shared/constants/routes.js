export const PATHNAMES = {
    home: '/',
    sign_in: '/sign-in.html',
    main: '/main.html',
    sign_up: '/sign-up.html',
    find: '/find-users.html'
}

export const ROUTES = {
    home: '/',
    sign_in: 'sign-in.html',
    main: 'main.html',
    sign_up: 'sign-up.html',
    find: 'find-users.html'
}

export const wayTo = () => {
    (window.location.pathname === PATHNAMES.main) ?
        window.location = PATHNAMES.find :
        window.location = PATHNAMES.main
}