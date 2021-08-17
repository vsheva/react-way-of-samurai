import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


/*
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}

*/




const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messagesElements = props.messages.map(m => <Message text={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
            </div>
            <div className={s.messages}>

                {messagesElements}

                {/*<Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;





/*let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Mike"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your IT lessons?"},
        {id: 3, message: "YO"},
        {id: 4, message: "YO"},
        {id: 5, message: "YO"}
    ]*/