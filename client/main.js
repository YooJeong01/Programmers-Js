import { uzzang, END_POINT } from './lib/index.js'


async function renderUserList(){
    
 try{
    const {data} = await uzzang.get(END_POINT);
   
    data.forEach(({name, email}) => {
        console.log(name, email);
    });
 }   
 catch {
    console.error('error!');
 }
}

renderUserList()

