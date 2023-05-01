export class Account {

    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string
    ){}

    getBalance(): number{
        return this.balance
    }
    getId(): string{
        return this.id
    }
    getOwnerId(): string{
        return this.ownerId
    }

    setBalance(value: number): void{
        this.balance += value
    }
}