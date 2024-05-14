export const armazenarLS = (key, value) => {
    localStorage.setItem(key, value)
}

export const consultarLS = (key) => {
    return localStorage.getItem(key)
}

export const excluirLS = (key) => {
    localStorage.removeItem(key)
}

