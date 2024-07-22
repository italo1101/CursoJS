function Name (name, sobrenome){
    this.name = name;

    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto;
    } 
}

const italo = new Name ("italo", "Cruz");

console.log(italo.sobreNome());