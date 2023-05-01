/* export class User {
    private id: string
    private name: string
    private email: string
    private password: string
    private createdAt: string

    constructor (
        id: string,
        name: string,
        email: string,
        password: string,
        createdAt: string
    ){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = createdAt
    }
} */
// aicma temos a forma mais "verbosa" da criação da classe. Abaixo, a forma "resumida";
export class User {
    constructor (
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}


getId(): string {
    return this.id
}

getName(): string{
    return this.name
}

getEmail(): string{
    return this.email
}

getPassword(): string{
    return this.password
}

getCreatedAt(): string{
    return this.createdAt
}
    
}

const usuario = new User ("u001", "raphael", "raphael@email.com", "12456", new Date().toISOString())



