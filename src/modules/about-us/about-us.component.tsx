import React from 'react'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../../store/store";
import {fetchMoreInfoThunk} from "../../store/about-us/about-us.thunk";
import {Loader} from "../../shared/loader/loader.component";
import ItemAboutUs from "./about-us-item.component";
import {IAboutUsListState} from "../../store/about-us/about-us.reducer";
import {IPhotoModel} from "../../models/photo.model";
import {getUserForBodyPageAction} from "../../store/about-us/about-us.action";
import {useHistory} from "react-router";

const AboutUs: React.FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const history = useHistory()
    const {
        loading,
        aboutUsPhotosList
    }: IAboutUsListState = useSelector((reduxStoreWithAllReducers: IRootStore) => reduxStoreWithAllReducers.aboutUsListReducer);

    const onClickHandler = (user: IPhotoModel) => {
        dispatch(getUserForBodyPageAction(user))
        console.log(user);
        history.push('/photoItem')
    }

    return (
        <div>
            <div className={classes.container}>
                <p className={classes.text}>Пользователь — лицо или организация, которое использует
                    действующую систему
                    для
                    выполнения конкретной
                    функции

                    В частности, Пользователь АС — лицо, участвующее в функционировании автоматизированной
                    системы или
                    использующее результаты её функционирования

                    С точки зрения информационной безопасности, пользователем является только человек.
                    Программа же,
                    работающая по его заданиям, является уже субъектом. С её помощью пользователь
                    взаимодействует с
                    абонентской системой, возможно включённой в сеть, и получает создаваемую ею рабочую
                    среду.
                    Пользователем
                    является человек, использующий систему либо сеть для решения стоящих перед ним задач.
                    Его именуют
                    конечным пользователем. Сведения о пользователе называются профилем пользователя или
                    учётной записью
                    пользователя.

                    Самого пользователя, либо систему, с которой он работает, также называют абонентом
                    информационной
                    сети.
                    Учётная запись, разрешающая абоненту получать доступ к ресурсам, называется абонементом.
                    Для
                    устранения
                    маскировки и получения права доступа к этим ресурсам пользователю выдаётся пароль,
                    свёртка (реже —
                    копия) которого хранится в абонентской системе. На этой основе осуществляется
                    идентификация и
                    аутентификация пользователя и предоставление разрешения на работу с ресурсами.

                    Для удобной и эффективной работы создаются языки запросов и интерфейсы пользователя.

                    Пользователи получают разнообразные виды услуг, предоставляемые прикладными службами. По
                    характеру
                    работы различают отдельных пользователей и рабочие группы.
                </p>
            </div>

            {loading ?
                <Loader/> :
                <div>
                    <Button className={classes.button} onClick={() => dispatch(fetchMoreInfoThunk())}
                            variant="contained"
                            color="primary">
                        See more
                    </Button>
                    <Grid container spacing={4}>
                        {aboutUsPhotosList.length ?
                            aboutUsPhotosList.map((item: IPhotoModel) =>
                                <Grid onClick={() => onClickHandler(item)} key={item.id} item xs={4}>
                                    <ItemAboutUs
                                        title={item.title}
                                        url={item.url}/>
                                </Grid>) :
                            null
                        }
                    </Grid>
                </div>
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: 'black'
        },
        container: {
            textAlign: 'justify',
            padding: '10px',
            backgroundColor: 'lightgray'
        },
        button: {
            marginBottom: '10px'
        }
    }),
);

export default AboutUs