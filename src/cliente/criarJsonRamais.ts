import fs from 'fs';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';

export function criarJsonRamais(data: Repository<Cliente>) {

    const joja1 = data.find().then((result) => {
        result.map(dados => {
            console.log('Wama')
            console.log(dados)
            let ramais = [{
                refresh: 0,
                items: [{
                    number: '1000',
                    name: dados.empresa,
                    firstname: "",
                    lastname: "",
                    phone: "",
                    mobile: "",
                    email: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    comment: "",
                    presence: 1,
                    starred: 0,
                    info: ""
                }]
            }]

            console.log(ramais)

            // const joja = [{

            //     ramal: dados.empresa, 
            //     nome : dados.empresa

            // } ,
            // {
            //     ramal: dados.empresa, 
            //     nome : dados.empresa

            // }]
            // console.log('garotinho')
        })
    }).catch((err) => {
        if (err) throw err;
    });
    //     fs.writeFile('ramais', data, (err) => {
    //         if (err) throw err;

    //         console.log('Lista atualizada!')

    //     });
}