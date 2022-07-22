import  { Router, Request, Response} from 'express'

const router = Router()


router.get('/',(req:Request,res:Response) =>{
    let idade: number = 15
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = true
    }


    res.render('pages/home',{
        nome:'Vinicius',
        exibirIdade,
        movies:[
            {title:'Cinderela Bahiana', year: 1998},
            {title: 'Rubber',year: 2010},
            {title: 'Tainá', year:2010}
        ]
    })
})



router.get('/contato',(req:Request,res:Response) =>{
    res.render('pages/contato')
})


router.get('/sobre',(req:Request, res:Response) =>{
    res.render('pages/sobre')
})

//criar uma rota chamada nome
router.get('/nome', (req:Request, res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome', {
        nome
    })
})


router.get('/formula', (req:Request, res:Response) =>{

    let nome: string = req.query.nome as string
    let idade: string = req.query.idade as string
    let telefone: string = req.query.telefone as string


    res.render('pages/formula', {
        nome, idade, telefone 
    })
})



router.get('/idade', (req:Request,res:Response) =>{
    res.render('pages/idade')

})

router.post('/idade-resultado', (req:Request, res:Response) =>{

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

        // anoAtual - dataNascimento
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)

        // pegar o ano atual
        let anoAtual: number = new Date().getFullYear()

        idade = anoAtual - anoNascimento
        mostrarIdade = true

    }


    res.render('pages/idade', {
        idade, mostrarIdade
    })

})

router.get('/email',(req:Request,res:Response)=>{
    res.render('pages/email')
})

router.post('/email-resultado',(req:Request,res:Response)=>{

    let email: string = (req.body.email as string)
    let senha: string = (req.body.senha as string)

    res.render('pages/email-resultado',{
        email,
        senha
    })
})



export default router