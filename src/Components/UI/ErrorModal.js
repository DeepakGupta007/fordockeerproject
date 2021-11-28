import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';
import { Fragment } from "react";
import {createPortal} from "react-dom";
const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onConfirm} />);
}

const ModalOverlay = (props) => {
    return (
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>  
        </footer>
    </Card>);
}

const ErrorModal = props => {
    return(
        <Fragment>
                 {createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
        </Fragment>
    );
}

export default ErrorModal;