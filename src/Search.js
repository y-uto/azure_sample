import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "",
            result : ""
        }
    }

    handleClick() {
        var url = "https://j46tp44h13.execute-api.ap-northeast-1.amazonaws.com/dev/user";
        var query = "?name=" + this.state.text;
        
        fetch(url + query)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.log('jsonData:', jsonData);
            this.setState(
                {result : jsonData.body}
            )
        })
        
        /*
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (http.readyState == 3) { //処理中
            }
            else if (http.readyState == 4) { //処理完了
                if (http.status == 200) {
                    var json = JSON.parse(http.response);
                    this.setState(
                        {result : json.body}
                    )
                }
            }
        }.bind(this);
        //呼び出す
        http.open("GET",url+query,true);
        http.send("");
        */
    }

    render() {
        return (
          <div>
          <br />
          苗字：<input type="text" onChange={(e) => this.setState({text: e.target.value})}></input>
          <input type="button" value="検索" onClick={(e) => this.handleClick()}></input>
          <br />
          名前：{this.state.result}
          </div>
        );
    }
}
