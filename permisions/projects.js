import ROLE from "../data.js"

export const canViewProject = (user, project) => {
    return(
        user.role === ROLE.ADMIN || project.userId === user.id
    )
}

export const scopedProjects = (user, projects) => {
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userId === user.id);
}

export const canDeleteProject = (user, project) => {
    return project.userId === user.id
}