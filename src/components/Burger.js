import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
    state = {
        salad: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            salad,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'salad':{
                stateValue = salad;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            salad,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        
        for (let i = 0; i < salad; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
       
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Lütfen malzemeleri eklemeye başlayın!</p>);
        return burger;
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>SALAD</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','salad')}>Ekle</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','salad')}>Sil</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Ekle</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Sil</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Ekle</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Sil</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>Ekle</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Sil</button>
                    </div>
                </div>
            </>
        );
    }
}