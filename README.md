# nest
Udemy course Master NestJS - The JavaScript Node.js Framework

## To run the app:
> docker-compose up
> npm run start:dev

## Usefull nest/nest-cli commands

```
npm install -g @nestjs/cli
npm install -g @nestjs/mapped-types
npm install --save @nestjs/typeorm typeorm mysql
npm install --save class-validator class-transformer

nest new project-name
nest start

nest g|generate co|controller *ControllerName*
```

## Docker commands

```
docker-compose up
```

## Banco/TypeORM

Adicionar configuração no app.modules.ts
Adicionar todas as entidades utilizadas no forRoot entities e no TypeOrmModule.forFeature([<entityName>])

### CRUD

- save(entityObject)
- find()
- findOne(PrimaryKey)
- remove(entityObject)

### Consultas
> https://typeorm.io/#/find-options