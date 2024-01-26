export function throttle(func) {
    let timer = null
    return function perform(...args) {
        if (timer)
            return
        timer = setTimeout(() => {
            func(...args)
            clearTimeout(timer)
            timer = null
        }, 100)
    }
}