import style from './Button.module.css'

function Button(){
    let count = 0;
    const HandelClick = (name) =>{
if(count < 3){
    count ++
    console.log(`${name} you clicked me ${count} time/s`);
}
else{
    console.log(`${name} stop clicking me`);
}
    };
    const HandelClick2 = (name) => console.log(`${name} stop clicking me`);
        return(
            <button className={style.button} onClick={() => HandelClick('A SQUAd')}> Click me</button>
        );
}

export default Button