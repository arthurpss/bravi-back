# BraviNode
https://evening-reef-84306.herokuapp.com/

# Run:
Use node 18.12.1 [lts]

1. docker run --name postgres_bravi -e POSTGRES_PASSWORD=bravipwd -e POSTGRES_USER=bravi -e POSTGRES_DB=bravi -p 5432:5432 -d postgres
2. `npm i`
3. Preencha o arquivo .env com os dados para conectar no banco, como no exemplo:
    HOST="localhost"
    USERNAME="bravi"
    PASSWORD="bravipwd"
    DATABASE="bravi"
4. `npm start`
