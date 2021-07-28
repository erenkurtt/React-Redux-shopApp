import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import '../CssFolder/navbar.css'
import { Button } from 'antd';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Menu, Dropdown, Col, Row } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    alignRight: {
        display: "block",
        textAlign: "center",
        margin: "auto"
    },
    Title: {
        color: "white",
    },
    productName: {
        fontSize: theme.spacing(2.4),
        color: "#68756c",
        margin: "2% 0%",
        overflow: "hidden"
    },
    categoryName: {
        fontSize: theme.spacing(2),
        color: "#68756c"
    }
}));

function Navbar({ addBasket, addFav, products }) {
    const classes = useStyles();
    const state = useSelector((state) => state.basketReducer);
    const [visibility, setVisibility] = useState({ visible: false });
    const [visibility2, setVisibility2] = useState({ visible: false });

    var fpFix = function (n) {
        return Math.round(n * 100) / 100;
      };

    const handleVisibleChange = flag => {
        setVisibility({ visible: flag });
    };
    const handleVisibleChange2 = flag => {
        setVisibility2({ visible: flag });
    };

    function TotalPrice(arrList){
        var totalSum=0.0;
        arrList.forEach(element => {
            
            totalSum += element.price;
        });

        return fpFix(totalSum);
    }

    const menu = (arraylist) => {

        return (
            <Menu style={{ padding: "0px" }}>
                {
                    arraylist.length !== 0 ?
                        arraylist.slice(0).reverse().map((data) =>
                            <Menu.Item key={uuidv4()} className="ProductList" onClick={() => setVisibility(true)} >
                                <Row>
                                    <Col span={4} >
                                        <img src={data.image} alt="something" className="image" ></img>
                                    </Col>
                                    <Col span={16}>
                                        <p className="productName" > {data.title}  </p>
                                        <p className="categoryName" > {data.category} </p>


                                    </Col>
                                    <Col span={4} style={{ paddingTop: "1em" }}>
                                        <p className="price" >{data.price + "$"}</p>


                                        {
                                            arraylist === state.basketItems ?
                                                <Button className="deleteButton"
                                                    onClick={() => addBasket(products.indexOf(data), data)} type="primary" danger>Delete</Button>
                                                :
                                                <Button className="deleteButton"
                                                    onClick={() => addFav(products.indexOf(data), data)} type="primary" danger>Delete</Button>
                                        }

                                    </Col>
                                </Row>
                            </Menu.Item>)
                        : (
                            <Menu.Item key={uuidv4()}>
                                <p >There are no items found</p>
                            </Menu.Item>)

                }
                {
                    arraylist.length !== 0 && arraylist === state.basketItems &&
                    <Menu.Item key={uuidv4()}>
                        <p className={classes.productName} >Total Cost: { TotalPrice(arraylist) }</p>
                    </Menu.Item>
                }

            </Menu>
        )

    }


    return (
        <div >
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.Title} >
                        React-Redux ShopApp by Eren Kurt
                    </Typography>
                    <div style={{ marginLeft: "auto" }}></div>

                    <Dropdown overlay={menu(state.basketItems)} placement="bottomRight" trigger={["click"]} visible={visibility.visible}
                        onVisibleChange={handleVisibleChange}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={state.basketCount} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>
                    </Dropdown>

                    <Dropdown overlay={menu(state.favItems)} placement="bottomRight" trigger={["click"]} visible={visibility2.visible}
                        onVisibleChange={handleVisibleChange2}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={state.favCount} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                    </Dropdown>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;



// class Navbar extends Component {
//     render() {
//         // const classes = useStyles();

//         return (
//             <div >
//                 <AppBar position="static">
//                     <Toolbar>

//                         <Typography variant="h6" >
//                             News
//                         </Typography>
//                         <div style={{ marginLeft: "auto" }}></div>

//                         <IconButton aria-label="show 4 new mails" color="inherit">
//                             <Badge badgeContent={this.props.basketCount} color="secondary">
//                                 <ShoppingBasketIcon />
//                             </Badge>
//                         </IconButton>

//                         <IconButton aria-label="show 17 new notifications" color="inherit">
//                             <Badge badgeContent={this.props.favCount} color="secondary">
//                                 <FavoriteIcon />
//                             </Badge>
//                         </IconButton>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         basketCount: state.basketReducer.basketCount,
//         favCount : state.basketReducer.favCount
//     }
// }

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)




