import {MenuItem} from "../menu-item/menu-item.component";
import React from "react";

export class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: []
        }
    }
componentDidMount() {
        fetch("http://localhost:8080/sections")
            .then(res=>res.json())
            .then(sections=>{
                this.setState({sections:sections});
            })
}

render() {
        return  (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title, imageUrl}) => (<MenuItem key={id} title={title} image={imageUrl} subtitle="SHOP NOW" size="small"/>))
                }
            </div>
        )
}
}

