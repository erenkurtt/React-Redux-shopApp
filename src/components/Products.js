import React from 'react'
import '../CssFolder/Product.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { bindActionCreators } from 'redux';

import Navbar from './Navbar';
import Filter from './Filter';

import * as actionFuncs from '../actions/ActionFuncs';
import axios from "axios";
//import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Row, Col } from 'antd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarMen: {
        backgroundColor: "#4f8be0",
    },
    avatarWomen: {
        backgroundColor: "#e04f4f",
    },
    avatarJ: {
        backgroundColor: "#e04fbe",
    },
    avatarElect: {
        backgroundColor: "#51e04f",
    },
    alignRight: {
        marginLeft: "auto",
        marginRight: "2%"
    },
    iconSelectedFav: {
        color: "#cf3a3a"
    },
    iconSelectedBasket: {
        color: "#3c3acf"
    },
    iconDefault: {
        color: "#a3a3a9"
    }
}));

const Products = () => {

    const classes = useStyles();
    const state = useSelector((state) => state.searchReducer);

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const [selectedBasket, setSelectedBasket] = useState([]);
    const [selectedFav, setSelectedFav] = useState([]);

    

    const { increaseBasket, increaseFav, decreaseBasket, decreaseFav } = bindActionCreators(actionFuncs, dispatch);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then(data => {
            setProducts(data.data);

            setSelectedBasket(new Array(data.data.length).fill(classes.iconDefault));
            setSelectedFav(new Array(data.data.length).fill(classes.iconDefault));
            

        });


        return () => { }
    }, []);

    function addBasket(index, item) {
        var temp = [];
        if (selectedBasket[index] === classes.iconDefault) {
            increaseBasket(item);
            for (var i = 0; i < selectedBasket.length; i++) {
                temp[i] = selectedBasket[i];
            }
            temp[index] = classes.iconSelectedBasket;
            setSelectedBasket(temp);

        }
        else {
            decreaseBasket(item);
            for (i = 0; i < selectedBasket.length; i++) {
                temp[i] = selectedBasket[i];
            }
            temp[index] = classes.iconDefault;
            setSelectedBasket(temp);
        }

    }

    function addFav(index, item) {

        var temp = [];
        if (selectedFav[index] === classes.iconDefault) {
            increaseFav(item);
            for (var i = 0; i < selectedFav.length; i++) {
                temp[i] = selectedFav[i];
            }
            temp[index] = classes.iconSelectedFav;
            setSelectedFav(temp);

        }
        else {
            decreaseFav(item);
            for (i = 0; i < selectedFav.length; i++) {
                temp[i] = selectedFav[i];
            }
            temp[index] = classes.iconDefault;
            setSelectedFav(temp);
        }

    }

    function returnIcon(params) {
        if (params === "men's clothing") {
            return (<i className="fas fa-male"></i>);
        }
        else if (params === "jewelery") {
            return (<i className="fas fa-gem"></i>);
        }
        else if (params === "women's clothing") {
            return (<i className="fas fa-female"></i>)
        }
        else {
            return (<i className="fas fa-mobile-alt"></i>)
        }
    }
    function ReturnColor(params) {
        if (params === "men's clothing") {
            return classes.avatarMen;
        }
        else if (params === "jewelery") {
            return classes.avatarJ;
        }
        else if (params === "women's clothing") {
            return classes.avatarWomen;
        }
        else {
            return classes.avatarElect;
        }
    }


    return (
        <div style={{ margin: "0px", width: "auto" }}>
            {
                products &&
                <Navbar addFav={addFav} addBasket={addBasket} products={products} />
            }



            <Filter />

            <Row >

                {
                    products &&
                    products.map(data =>
                        (data.title.toLowerCase().includes(state.search.toLowerCase())
                            || data.category.toLowerCase().includes(state.search.toLowerCase())
                            || data.description.toLowerCase().includes(state.search.toLowerCase()))
                        && ( data.price >= state.priceFrom && data.price <= state.priceTo  )
                        && (data.category === state.category || "" === state.category)
                        &&
                        <Col xs={24} sm={12} md={8} lg={6} key={uuidv4()} className="responsive" >
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={ReturnColor(data.category)}>
                                            {
                                                returnIcon(data.category)
                                            }
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={data.title}
                                    subheader={data.category}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={data.image}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites" onClick={() => addFav(products.indexOf(data), data)} >
                                        <FavoriteIcon className={selectedFav[products.indexOf(data)]} />
                                    </IconButton>
                                    <IconButton aria-label="share" onClick={() => addBasket(products.indexOf(data), data)}  >
                                        <ShoppingCartIcon className={selectedBasket[products.indexOf(data)]} />
                                    </IconButton>
                                    <Typography variant="h5" color="primary" component="p" className={classes.alignRight} >
                                        {data.price + "$"}
                                    </Typography>
                                </CardActions>

                            </Card>
                        </Col>
                    )
                }

            </Row>

        </div>
    )
}




export default Products;
