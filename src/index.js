import express from "express";
import * as url from "url";
import * as path from "path";
import hbs from 'hbs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const temp = path.join(__dirname, "../views")
const partials = path.join(__dirname, "../partials")


const app = express();

app.set('view engine' , 'hbs')
app.set('views' , temp)
hbs.registerPartials(partials)
// // app.use(express.static(staticPath))


app.get('/',(req, res)=>{
    res.render('some',{
        something:"345234"
    })
})
app.get('/home',(req, res)=>{
    res.render('index')
})
app.get('/*',(req, res)=>{
    res.render('not_found')
})


app.listen(4001, () => {
    console.log('listening... at http://localhost:4001');
});
