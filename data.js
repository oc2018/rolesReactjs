const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

export const Users = [
    { id: 1, name: 'eric', role: ROLE.ADMIN },
    { id: 2, name: 'rose', role: ROLE.BASIC },
    { id: 3, nmae: 'Ivy', role: ROLE.BASIC }
]
export const projects = [
    { id: 1, name: "Eric's project", userId: 1 },
    { id: 2, name: "Rose's project", userId: 2 },
    { id: 3, name: "Ivy's project", userId: 3 }
]

export default ROLE;